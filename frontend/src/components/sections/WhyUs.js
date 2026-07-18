import { motion } from "framer-motion";
import {
  Users, Award, Hammer, Cpu, IndianRupee, Shield, Headphones, FileBadge2,
} from "lucide-react";

const POINTS = [
  { icon: Users, title: "Expert Engineers", desc: "Certified in-house design & install crew." },
  { icon: Award, title: "Premium Brands", desc: "Tier-1 modules & inverters only." },
  { icon: Hammer, title: "Quality Installation", desc: "MNRE-standard workmanship, always." },
  { icon: Cpu, title: "Latest Technology", desc: "Bifacial, N-type TOPCon, smart inverters." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Direct-to-project, no middlemen." },
  { icon: FileBadge2, title: "MNRE Compliance", desc: "Approved vendor, subsidy assistance." },
  { icon: Headphones, title: "Quick Support", desc: "24×7 helpdesk, 48-hr SLA." },
  { icon: Shield, title: "Warranty Assistance", desc: "End-to-end claim handling." },
];

export default function WhyUs() {
  return (
    <section className="relative bg-slate-950 text-white py-28 md:py-36 overflow-hidden" data-testid="why-us-section">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_15%_20%,rgba(10,102,194,0.25),transparent_60%),radial-gradient(40%_30%_at_85%_80%,rgba(22,163,74,0.22),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 grain opacity-40" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-white/40" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-white/70 font-semibold">
                Why SAS — Chapter 03
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95]">
              The reasons customers
              <span className="block font-editorial italic font-light text-[#7CE39E]">stay for 25 years.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-white/70 leading-relaxed max-w-lg">
            A solar system is a 25-year commitment. We build ours to outlast the warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {POINTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.04, duration: 0.6 }}
                className="group bg-slate-950/70 hover:bg-slate-900 p-8 md:p-10 transition-colors"
                data-testid={`why-us-${i}`}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 border border-white/15 group-hover:bg-[#0A66C2] group-hover:border-[#0A66C2] transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
