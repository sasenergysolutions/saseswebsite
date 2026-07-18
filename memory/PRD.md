# SAS Energy Solutions — Premium Solar EPC Website

## Problem Statement
Design a world-class, Awwwards-level premium website for **SAS Energy Solutions**, a Solar EPC company based in Devakottai, Tamil Nadu.
- Brand palette: Primary #0A66C2 (blue), Secondary #16A34A (green), white + light-gray sections
- Typography: Poppins (body) + Fraunces (editorial accents)
- Light theme only, mobile-responsive, SEO-optimised
- Motion: framer-motion + Lenis smooth scroll, kinetic hero, editorial marquee

## Architecture
- **Frontend**: React 19 + Tailwind, framer-motion, lenis, react-fast-marquee, shadcn/ui
- **Backend**: FastAPI + MongoDB (motor)
- **Email**: Emergent-managed Resend proxy for contact/quote notifications
- **Deployment**: Kubernetes ingress (/api → 8001, all else → 3000)

## Implemented (v1 — 2026-12-18)
- Sticky navbar (transparent over hero, glass on scroll) with white text on dark hero
- Kinetic hero with masked line-by-line reveal, Ken Burns image, parallax + premium green-gradient CTA + "Book Free Site Survey Today" badge + Chapter cards with icons
- Animated stats counters (500+, 10+ years, 100%, 25 yrs)
- About / numbered manifesto (Mission / Vision / Values)
- Services bento grid — 11 cards titled "Complete Solar Solutions" with subtle background photography per card + "Learn more" CTA + hover reveal
- Why Us dark section (8 reasons)
- Solar packages tabs (Residential 1-10kW, Commercial 20-250kW) with featured tier
- Editorial slow-marquee brand strip: Adani, Waaree, Vikram Solar, Tata Power Solar, Deye, Solis, Sungrow
- Installation timeline (7 steps)
- Masonry project gallery with category filters + lightbox
- Testimonials (Google-style)
- Google Reviews preview section with 4.9★ badge and Google G branding
- Interactive Solar Savings + EMI calculators (backend-powered)
- FAQ accordion (shadcn Accordion)
- Contact section with map, contact tiles + form (POSTs to backend, stored + emailed)
- Footer with editorial mark + quick links + `© 2026 SAS Energy Solutions. All Rights Reserved.`
- Floating WhatsApp, Call, Back-to-top FABs
- SEO: title, meta description/keywords, OG tags, LocalBusiness JSON-LD schema

## Backend APIs
- `GET  /api/` — health
- `POST /api/contact` — store submission + email notify
- `GET  /api/contact` — list submissions (admin)
- `POST /api/quote` — quote request + email notify
- `POST /api/calc/savings` — savings projection
- `POST /api/calc/emi` — EMI calculator

## Env
- Backend: `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS`, `EMERGENT_EMAIL_KEY`, `EMAIL_FROM_NAME`, `CONTACT_NOTIFY_EMAIL`
- Frontend: `REACT_APP_BACKEND_URL`

## Backlog (P1)
- Replace placeholder phone / email / address / social URLs with real ones
- Wire real Google Reviews via Places API (currently sample data)
- Real customer photos + testimonials + case-study pages
- Add lead-capture popover after 30s inactivity
- Add sitemap.xml + robots.txt
- Add admin dashboard for viewing submissions

## Backlog (P2)
- 3D solar-panel hero moment via react-three-fiber
- Blog / knowledge-base for SEO (long-tail: "solar subsidy Tamil Nadu 2026")
- Multi-language (Tamil / English)
