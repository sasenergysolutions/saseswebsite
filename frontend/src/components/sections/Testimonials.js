import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Ramesh K.",
    role: "Homeowner · Karaikudi",
    initials: "RK",
    text: "Installed a 5kW system last September. My EB bill went from ₹4,800 to ₹120. The SAS team handled everything — DISCOM, net-meter, subsidy. Truly turnkey.",
  },
  {
    name: "Lakshmi Textiles",
    role: "MSME · Sivaganga",
    initials: "LT",
    text: "60kW rooftop paid for itself in 3 years 8 months. The engineering docs alone were more thorough than the two other quotes we received.",
  },
  {
    name: "Dr. Anitha S.",
    role: "Clinic Owner · Devakottai",
    initials: "AS",
    text: "Reliable, punctual, spotless installation. Two years in and I have not filed a single support ticket. That is a compliment.",
  },
  {
    name: "Suresh M.",
    role: "Farmer · Ramanathapuram",
    initials: "SM",
    text: "PM-KUSUM pump commissioned in 11 days. SAS handled the entire subsidy file. My diesel bill is now zero.",
  },
  {
    name: "Priya R.",
    role: "Homeowner · Madurai",
    initials: "PR",
    text: "The design walkthrough was genuinely educational. Every question answered, every trade-off explained. Rare service in this sector.",
  },
  {
    name: "GreenCo Hotels",
    role: "Hospitality · Trichy",
    initials: "GH",
    text: "120kW across two properties. Zero downtime in 18 months. Their AMC team is on-site within 24 hours of a call.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-white py-28 md:py-36" data-testid="testimonials-section">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-slate-300" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-slate-500 font-semibold">
                Testimonials — Chapter 08
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] text-slate-900">
              What customers say
              <span className="block font-editorial italic font-light text-[#0A66C2]">after the sunset.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-slate-50 border border-slate-200 px-5 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">4.9 / 5.0</div>
              <div className="text-xs text-slate-500">Based on 200+ Google reviews</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="group relative rounded-3xl bg-slate-50 hover:bg-white border border-slate-200 p-8 transition-colors"
              data-testid={`testimonial-${i}`}
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-slate-200 group-hover:text-[#0A66C2]/30 transition-colors" />
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#16A34A] text-white flex items-center justify-center text-sm font-bold">
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{r.name}</div>
                  <div className="text-xs text-slate-500">{r.role}</div>
                </div>
              </div>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-4 text-slate-700 leading-relaxed">{r.text}</p>
            </motion.article>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-400 italic">Sample reviews shown — real customer testimonials pending publication approval.</p>
      </div>
    </section>
  );
}
