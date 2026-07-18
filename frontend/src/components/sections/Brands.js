import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const BRANDS = [
  "Adani", "Waaree", "Vikram Solar", "Tata Power Solar", "Deye", "Solis", "Sungrow",
];

export default function Brands() {
  return (
    <section id="brands" className="relative bg-slate-50 py-24 md:py-32 border-y border-slate-200" data-testid="brands-section">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-slate-300" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-slate-500 font-semibold">
                Products — Chapter 05
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] text-slate-900 max-w-3xl"
            >
              Tier-1 hardware.
              <span className="block font-editorial italic font-light text-[#0A66C2]">Nothing less.</span>
            </motion.h2>
          </div>
          <p className="max-w-sm text-slate-600 leading-relaxed">
            We source only from manufacturers rated Bloomberg Tier-1 or MNRE-approved —
            the same names trusted by utilities and enterprise EPCs.
          </p>
        </div>
      </div>

      {/* Editorial slow marquee */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-10" />
        <Marquee gradient={false} speed={30} pauseOnHover>
          {BRANDS.concat(BRANDS).map((b, i) => (
            <div
              key={`${b}-${i}`}
              className="mx-10 md:mx-16 flex items-center gap-4"
              data-testid={`brand-${i}`}
            >
              <span className="font-editorial italic text-[42px] md:text-[64px] leading-none tracking-tight text-slate-900/85">
                {b}
              </span>
              <span className="text-slate-300 text-2xl md:text-4xl">✦</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
