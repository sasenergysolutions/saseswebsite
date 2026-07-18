import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { Slider } from "@/components/ui/slider";
import { Sun, TrendingUp, Leaf, IndianRupee, Percent, CalendarClock } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

function Field({ label, value, unit }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-200 last:border-b-0">
      <span className="text-sm text-slate-600">{label}</span>
      <span className="text-lg font-semibold text-slate-900">
        {value}
        {unit && <span className="text-slate-400 font-light text-sm ml-1">{unit}</span>}
      </span>
    </div>
  );
}

export default function Calculators() {
  // Savings
  const [bill, setBill] = useState([5000]);
  const [roof, setRoof] = useState([600]);
  const [location, setLocation] = useState("Devakottai");
  const [savings, setSavings] = useState(null);
  const [loadingS, setLoadingS] = useState(false);

  const calcSavings = async () => {
    setLoadingS(true);
    try {
      const { data } = await axios.post(`${API}/calc/savings`, {
        monthly_bill: bill[0],
        roof_size_sqft: roof[0],
        location,
      });
      setSavings(data);
    } catch (e) { /* ignore */ }
    finally { setLoadingS(false); }
  };

  // EMI
  const [amount, setAmount] = useState([200000]);
  const [rate, setRate] = useState([9.5]);
  const [years, setYears] = useState([5]);
  const [emi, setEmi] = useState(null);
  const [loadingE, setLoadingE] = useState(false);

  const calcEmi = async () => {
    setLoadingE(true);
    try {
      const { data } = await axios.post(`${API}/calc/emi`, {
        loan_amount: amount[0], interest_rate: rate[0], tenure_years: years[0],
      });
      setEmi(data);
    } catch (e) { /* ignore */ }
    finally { setLoadingE(false); }
  };

  const inr = (n) => n?.toLocaleString("en-IN");

  return (
    <section id="calculators" className="relative bg-slate-950 text-white py-28 md:py-36 overflow-hidden" data-testid="calculators-section">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_80%_10%,rgba(22,163,74,0.22),transparent_60%),radial-gradient(50%_40%_at_10%_90%,rgba(10,102,194,0.28),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-10 bg-white/40" />
          <span className="text-[11px] tracking-[0.28em] uppercase text-white/70 font-semibold">
            Calculators — Chapter 09
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] max-w-3xl">
          Run the numbers.
          <span className="block font-editorial italic font-light text-[#7CE39E]">Before the sales call.</span>
        </h2>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {/* Savings Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-10"
            data-testid="savings-calculator"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2]">
                <Sun className="h-5 w-5" />
              </span>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Solar Savings Calculator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2"><span className="text-white/70">Monthly EB Bill</span><span className="font-semibold">₹{inr(bill[0])}</span></div>
                <Slider value={bill} onValueChange={setBill} min={500} max={50000} step={100} data-testid="savings-bill-slider" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2"><span className="text-white/70">Roof Size</span><span className="font-semibold">{roof[0]} sqft</span></div>
                <Slider value={roof} onValueChange={setRoof} min={100} max={10000} step={50} data-testid="savings-roof-slider" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Location</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/40"
                  data-testid="savings-location"
                >
                  {["Devakottai", "Madurai", "Chennai", "Coimbatore", "Trichy", "Karaikudi", "Sivaganga"].map((l) => (
                    <option key={l} className="bg-slate-900">{l}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={calcSavings}
                disabled={loadingS}
                className="w-full inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3.5 text-sm font-semibold hover:bg-[#7CE39E] transition-colors"
                data-testid="savings-calculate-btn"
              >
                {loadingS ? "Calculating…" : "Calculate Savings"}
              </button>
            </div>

            {savings && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-2xl bg-white text-slate-900 p-6"
              >
                <div className="text-[10px] tracking-[0.24em] uppercase font-semibold text-[#0A66C2] mb-3">Your custom projection</div>
                <Field label="Recommended System Size" value={savings.recommended_system_kw} unit="kW" />
                <Field label="Estimated Monthly Savings" value={`₹${inr(savings.monthly_savings)}`} />
                <Field label="Annual Savings" value={`₹${inr(savings.annual_savings)}`} />
                <Field label="System Investment" value={`₹${inr(savings.system_cost)}`} />
                <Field label="Payback Period" value={savings.payback_years} unit="yrs" />
                <Field label="25-year Net Savings" value={`₹${inr(savings.lifetime_savings_25y)}`} />
                <div className="mt-4 flex items-center gap-2 text-emerald-700 text-sm">
                  <Leaf className="h-4 w-4" /> Offsets ~{savings.co2_offset_tons_per_year} tons CO₂ / year
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* EMI Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-10"
            data-testid="emi-calculator"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#16A34A]">
                <IndianRupee className="h-5 w-5" />
              </span>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">EMI Calculator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2"><span className="text-white/70">Loan Amount</span><span className="font-semibold">₹{inr(amount[0])}</span></div>
                <Slider value={amount} onValueChange={setAmount} min={50000} max={5000000} step={10000} data-testid="emi-amount-slider" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2"><span className="text-white/70">Interest Rate</span><span className="font-semibold">{rate[0]}%</span></div>
                <Slider value={rate} onValueChange={setRate} min={6} max={16} step={0.1} data-testid="emi-rate-slider" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2"><span className="text-white/70">Tenure</span><span className="font-semibold">{years[0]} years</span></div>
                <Slider value={years} onValueChange={setYears} min={1} max={15} step={1} data-testid="emi-years-slider" />
              </div>
              <button
                onClick={calcEmi}
                disabled={loadingE}
                className="w-full inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3.5 text-sm font-semibold hover:bg-[#7CE39E] transition-colors"
                data-testid="emi-calculate-btn"
              >
                {loadingE ? "Calculating…" : "Calculate EMI"}
              </button>
            </div>

            {emi && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6 rounded-2xl bg-white text-slate-900 p-6">
                <div className="text-[10px] tracking-[0.24em] uppercase font-semibold text-[#16A34A] mb-3">Your monthly outflow</div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 flex items-center gap-1"><CalendarClock className="h-3 w-3" />EMI</div>
                    <div className="text-2xl font-bold text-slate-900 mt-1">₹{inr(emi.monthly_emi)}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 flex items-center gap-1"><Percent className="h-3 w-3" />Interest</div>
                    <div className="text-2xl font-bold text-slate-900 mt-1">₹{inr(emi.total_interest)}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 flex items-center gap-1"><TrendingUp className="h-3 w-3" />Total</div>
                    <div className="text-2xl font-bold text-slate-900 mt-1">₹{inr(emi.total_payment)}</div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
