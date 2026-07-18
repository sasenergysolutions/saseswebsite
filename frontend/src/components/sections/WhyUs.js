import { motion } from "framer-motion";
import {
  ShieldCheck, Award, Users, BadgeCheck, Zap, Headphones,
} from "lucide-react";

const POINTS = [
  { icon: ShieldCheck, title: "MNRE Standard Installation", desc: "Every panel, cable, mount and inverter installed to Ministry of New & Renewable Energy specification — audited before hand-over." },
  { icon: Award,       title: "Premium Tier-1 Solar Brands", desc: "Only Bloomberg Tier-1 modules and MNRE-approved inverters. No white-label, no rebrands, no compromises." },
  { icon: Users,       title: "Expert Engineering Team",     desc: "Certified in-house design, structural, and electrical engineers — the same team from survey to commissioning." },
  { icon: BadgeCheck,  title: "25-Year Panel Performance Warranty", desc: "Linear performance guarantee with ≥85% output at year 25, backed by original manufacturer + SAS support." },
  { icon: Zap,         title: "Fast Installation",           desc: "Most rooftop projects go from first call to first kilowatt in under 21 days — including DISCOM paperwork." },
  { icon: Headphones,  title: "Reliable After-Sales Support",desc: "24×7 helpdesk, 48-hour SLA for on-site visits, end-to-end warranty claim handling. AMC packages available." },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-slate-950 text-white py-28 md:py-36 overflow-hidden" data-testid="why-us-section">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_15%_20%,rgba(10,102,194,0.25),transparent_60%),radial-gradient(40%_30%_at_85%_80%,rgba(22,163,74,0.22),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 grain opacity-40" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-white/40" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-white/70 font-semibold">
                Why choose us — Chapter 03
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95]">
              Why Choose <span className="whitespace-nowrap">SAS Energy</span>
              <span className="block font-editorial italic font-light text-[#7CE39E]">Solutions.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 text-white/70 leading-relaxed max-w-lg">
            A solar system is a 25-year commitment. Six reasons customers stay with us for the entire ride.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {POINTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="group relative bg-slate-950/70 hover:bg-slate-900 p-8 md:p-10 transition-colors"
                data-testid={`why-us-${i}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/15 group-hover:bg-[#0A66C2] group-hover:border-[#0A66C2] group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[10px] tracking-[0.24em] uppercase font-semibold text-white/40">
                    {String(i + 1).padStart(2, "0")} / 06
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">{p.desc}</p>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7CE39E]/0 to-transparent group-hover:via-[#7CE39E]/60 transition-colors duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
