from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Emergent Email proxy (constant per playbook)
EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ.get("EMERGENT_EMAIL_KEY")
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "SAS Energy Solutions")
CONTACT_NOTIFY_EMAIL = os.environ.get("CONTACT_NOTIFY_EMAIL", "info@sasenergysolutions.in")

app = FastAPI(title="SAS Energy Solutions API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


# ------------- Models -------------
class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    service: Optional[str] = None
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    service: Optional[str] = None
    message: str


class QuoteRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    system_size: str
    property_type: str
    location: Optional[str] = None
    monthly_bill: Optional[float] = None


class SavingsInput(BaseModel):
    monthly_bill: float          # INR
    roof_size_sqft: float        # sqft
    location: str                # Tamil Nadu location


class EMIInput(BaseModel):
    loan_amount: float
    interest_rate: float         # annual %
    tenure_years: float


# ------------- Helpers -------------
async def send_email_async(to: str, subject: str, html: str, reply_to: Optional[str] = None) -> bool:
    if not EMAIL_KEY:
        logger.warning("EMERGENT_EMAIL_KEY not set; skipping email send.")
        return False
    payload = {
        "to": [to],
        "subject": subject,
        "html": html,
        "from_name": EMAIL_FROM_NAME,
    }
    if reply_to:
        payload["contact_email"] = reply_to
    try:
        async with httpx.AsyncClient(timeout=30) as c:
            r = await c.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        r.raise_for_status()
        return True
    except Exception as e:
        logger.error(f"Email send failed: {e}")
        return False


# ------------- Routes -------------
@api_router.get("/")
async def root():
    return {"message": "SAS Energy Solutions API", "status": "ok"}


@api_router.post("/contact", response_model=ContactSubmission)
async def create_contact(payload: ContactCreate):
    doc_obj = ContactSubmission(**payload.model_dump())
    doc = doc_obj.model_dump()
    await db.contact_submissions.insert_one(doc)

    # Notify company (fire-and-forget style, but await to log)
    html = f"""
    <table style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #E2E8F0;border-radius:12px;padding:24px">
      <tr><td style="font-size:22px;font-weight:700;color:#0A66C2;padding-bottom:12px">New Website Enquiry</td></tr>
      <tr><td style="color:#0F172A;font-size:15px;line-height:1.6">
        <p><b>Name:</b> {doc_obj.name}</p>
        <p><b>Email:</b> {doc_obj.email}</p>
        <p><b>Phone:</b> {doc_obj.phone}</p>
        <p><b>Service:</b> {doc_obj.service or '-'}</p>
        <p><b>Message:</b><br>{doc_obj.message}</p>
        <p style="color:#64748B;font-size:12px;margin-top:16px">Submitted {doc_obj.created_at}</p>
      </td></tr>
    </table>
    """
    await send_email_async(
        to=CONTACT_NOTIFY_EMAIL,
        subject=f"New Enquiry from {doc_obj.name} — SAS Energy Solutions",
        html=html,
        reply_to=doc_obj.email,
    )
    return doc_obj


@api_router.get("/contact", response_model=List[ContactSubmission])
async def list_contacts(limit: int = 100):
    docs = await db.contact_submissions.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    return docs


@api_router.post("/quote")
async def create_quote(payload: QuoteRequest):
    doc = payload.model_dump()
    doc["id"] = str(uuid.uuid4())
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    await db.quote_requests.insert_one(doc)

    html = f"""
    <table style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #E2E8F0;border-radius:12px;padding:24px">
      <tr><td style="font-size:22px;font-weight:700;color:#16A34A;padding-bottom:12px">New Quote Request</td></tr>
      <tr><td style="color:#0F172A;font-size:15px;line-height:1.6">
        <p><b>Name:</b> {payload.name}</p>
        <p><b>Phone:</b> {payload.phone}</p>
        <p><b>Email:</b> {payload.email}</p>
        <p><b>System Size:</b> {payload.system_size}</p>
        <p><b>Property Type:</b> {payload.property_type}</p>
        <p><b>Location:</b> {payload.location or '-'}</p>
        <p><b>Monthly Bill:</b> ₹{payload.monthly_bill or '-'}</p>
      </td></tr>
    </table>
    """
    await send_email_async(
        to=CONTACT_NOTIFY_EMAIL,
        subject=f"Quote request — {payload.system_size} — {payload.name}",
        html=html,
        reply_to=payload.email,
    )
    return {"status": "ok", "id": doc["id"]}


@api_router.post("/calc/savings")
async def calc_savings(inp: SavingsInput):
    # Tamil Nadu avg irradiance ~5.5 kWh/m2/day, 1kW ~ 100 sqft
    # Monthly EB tariff avg ~7.5 INR/kWh (residential)
    tariff = 7.5
    monthly_units = inp.monthly_bill / tariff if inp.monthly_bill else 0
    # Recommended kW ~ monthly_units / (5.5 * 30)
    rec_kw = round(max(1.0, monthly_units / 165.0), 1)
    # Roof cap: 1kW/100sqft
    roof_cap_kw = round(inp.roof_size_sqft / 100.0, 1)
    system_kw = round(min(rec_kw, roof_cap_kw) if roof_cap_kw > 0 else rec_kw, 1)
    if system_kw <= 0:
        system_kw = rec_kw

    annual_generation = system_kw * 1500  # kWh/year
    annual_savings = round(annual_generation * tariff, 0)
    monthly_savings = round(annual_savings / 12.0, 0)
    system_cost = round(system_kw * 60000, 0)  # ~₹60k per kW residential
    payback_years = round(system_cost / annual_savings, 1) if annual_savings else 0
    lifetime_savings = round(annual_savings * 25 - system_cost, 0)

    return {
        "recommended_system_kw": system_kw,
        "monthly_savings": monthly_savings,
        "annual_savings": annual_savings,
        "system_cost": system_cost,
        "payback_years": payback_years,
        "lifetime_savings_25y": lifetime_savings,
        "co2_offset_tons_per_year": round(annual_generation * 0.00082, 2),
    }


@api_router.post("/calc/emi")
async def calc_emi(inp: EMIInput):
    p = inp.loan_amount
    r = (inp.interest_rate / 100.0) / 12.0
    n = int(inp.tenure_years * 12)
    if r == 0:
        emi = p / n if n else 0
    else:
        emi = p * r * ((1 + r) ** n) / (((1 + r) ** n) - 1)
    total_payment = emi * n
    total_interest = total_payment - p
    return {
        "monthly_emi": round(emi, 0),
        "total_payment": round(total_payment, 0),
        "total_interest": round(total_interest, 0),
        "months": n,
    }


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
