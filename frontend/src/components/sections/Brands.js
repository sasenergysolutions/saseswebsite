import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
  PanelTop, Cpu, BatteryCharging, LayoutGrid, PlugZap,
  Cable, Zap, Droplets,
} from "lucide-react";

const PRODUCTS = [
  { icon: PanelTop,        title: "Solar Panels" },
  { icon: Cpu,             title: "Solar Inverters" },
  { icon: BatteryCharging, title: "Solar Batteries" },
  { icon: LayoutGrid,      title: "Solar Mounting Structures" },
  { icon: PlugZap,         title: "ACDB & DCDB" },
  { icon: Cable,           title: "Earthing Kits" },
  { icon: Zap,             title: "Lightning Arresters" },
  { icon: Droplets,        title: "Solar Water Pumps" },
];

const BRANDS = [
  "Vikram Solar", "Adani Solar", "Waaree", "Deye",
  "Sungrow", "Solis", "Polycab", "Havells",
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
              Every component,
              <span className="block font-editorial italic font-light text-[#0A66C2]">tier-1 approved.</span>
            </motion.h2>
          </div>
          <p className="max-w-sm text-slate-600 leading-relaxed">
            We source only from manufacturers rated Bloomberg Tier-1 or MNRE-approved —
            the same names trusted by utilities and enterprise EPCs.
          </p>
        </div>

        {/* Product categories grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-14 md:mb-20" data-testid="products-grid">
          {PRODUCTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ delay: i * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl bg-white border border-slate-200 p-5 md:p-6 hover:border-[#0A66C2] hover:-translate-y-1 hover:shadow-ambient transition-all"
                data-testid={`product-${i}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white group-hover:bg-[#0A66C2] transition-colors">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-slate-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="text-sm md:text-base font-semibold tracking-tight text-slate-900 leading-snug">
                  {p.title}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Brand strip heading */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-slate-300" />
          <span className="text-[11px] tracking-[0.28em] uppercase text-slate-500 font-semibold">
            Our Trusted Brand Partners
          </span>
        </div>
      </div>

      {/* Editorial slow marquee — brand names */}
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
