import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const RESIDENTIAL = [
  { kw: "1kW", price: "₹65,000", ideal: "1BHK · ₹1,000 bill", output: "120 units/mo" },
  { kw: "2kW", price: "₹1,25,000", ideal: "2BHK · ₹2,000 bill", output: "240 units/mo" },
  { kw: "3kW", price: "₹1,80,000", ideal: "3BHK · ₹3,000 bill", output: "360 units/mo", featured: true },
  { kw: "5kW", price: "₹2,90,000", ideal: "Villa · ₹5,000 bill", output: "600 units/mo" },
  { kw: "10kW", price: "₹5,60,000", ideal: "Bungalow", output: "1,200 units/mo" },
];

const COMMERCIAL = [
  { kw: "20kW", price: "On request", ideal: "Small office", output: "2,400 units/mo" },
  { kw: "30kW", price: "On request", ideal: "Retail / clinic", output: "3,600 units/mo" },
  { kw: "50kW", price: "On request", ideal: "Hotel / MSME", output: "6,000 units/mo", featured: true },
  { kw: "100kW", price: "On request", ideal: "Factory", output: "12,000 units/mo" },
  { kw: "250kW", price: "On request", ideal: "Industrial plant", output: "30,000 units/mo" },
];

export default function Packages() {
  const [tab, setTab] = useState("residential");
  const list = tab === "residential" ? RESIDENTIAL : COMMERCIAL;

  return (
    <section id="packages" className="relative bg-white py-28 md:py-36" data-testid="packages-section">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-slate-300" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-slate-500 font-semibold">
                Packages — Chapter 04
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] text-slate-900">
              Transparent pricing.
              <span className="block font-editorial italic font-light text-[#0A66C2]">No hidden line items.</span>
            </h2>
          </div>

          {/* Segmented tabs */}
          <div className="inline-flex items-center rounded-full bg-slate-100 p-1.5 self-start" data-testid="packages-tabs">
            {["residential", "commercial"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-colors ${
                  tab === t ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
                data-testid={`packages-tab-${t}`}
              >
                {t === "residential" ? "Residential" : "Commercial"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {list.map((p, i) => (
            <motion.div
              key={`${tab}-${p.kw}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className={`group relative rounded-3xl border p-7 transition-all ${
                p.featured
                  ? "bg-slate-900 text-white border-slate-900 shadow-glow-blue lg:-translate-y-3"
                  : "bg-slate-50 border-slate-200 hover:bg-white hover:shadow-ambient"
              }`}
              data-testid={`package-${tab}-${p.kw}`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-[#16A34A] px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-white">
                  Most Popular
                </span>
              )}
              <div className={`text-[10px] tracking-[0.24em] uppercase font-semibold ${p.featured ? "text-white/60" : "text-slate-500"}`}>
                {tab === "residential" ? "Residential" : "Commercial"}
              </div>
              <div className={`mt-3 text-5xl font-bold tracking-tighter ${p.featured ? "text-white" : "text-slate-900"}`}>
                {p.kw}
              </div>
              <div className={`mt-1 text-sm ${p.featured ? "text-white/70" : "text-slate-500"}`}>{p.ideal}</div>

              <div className={`my-6 h-px ${p.featured ? "bg-white/15" : "bg-slate-200"}`} />

              <div className={`text-2xl font-semibold tracking-tight ${p.featured ? "text-white" : "text-slate-900"}`}>
                {p.price}
              </div>
              <div className={`mt-1 text-xs ${p.featured ? "text-white/60" : "text-slate-500"}`}>
                inclusive · turnkey
              </div>

              <ul className="mt-6 space-y-2">
                {["Tier-1 modules", "Smart inverter", "Net-meter support", p.output].map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${p.featured ? "text-white/85" : "text-slate-600"}`}>
                    <Check className={`h-4 w-4 ${p.featured ? "text-[#7CE39E]" : "text-[#16A34A]"}`} /> {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold group/link ${
                  p.featured ? "text-white" : "text-[#0A66C2]"
                }`}
              >
                Request proposal <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#0A66C2] pl-8 pr-2 py-2 text-sm font-semibold text-white hover:bg-slate-900 transition-colors shadow-glow-blue"
            data-testid="packages-cta-proposal"
          >
            Request a custom proposal
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0A66C2]">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
