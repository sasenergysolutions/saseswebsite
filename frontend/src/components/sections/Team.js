import { motion } from "framer-motion";
import {
  Crown, ClipboardList, HardHat, Zap, Wrench,
  Cog, Headphones,
} from "lucide-react";

const TEAM = [
  {
    role: "Founder & Managing Director",
    desc: "Sets the vision, engineering standards and long-term direction of SAS Energy Solutions.",
    icon: Crown,
    accent: "from-[#0A66C2] to-[#0B4B8A]",
  },
  {
    role: "Project Engineer",
    desc: "Owns the delivery timeline — from BOQ to commissioning — coordinating suppliers, DISCOM and crews.",
    icon: ClipboardList,
    accent: "from-[#0A66C2] to-[#16A34A]",
  },
  {
    role: "Site Supervisor",
    desc: "Runs the on-site workforce, ensures safety protocols, quality checks and clean daily hand-offs.",
    icon: HardHat,
    accent: "from-slate-800 to-slate-700",
  },
  {
    role: "Electrical Engineer",
    desc: "Handles DC/AC wiring, protection devices, earthing, ACDB/DCDB and inverter commissioning.",
    icon: Zap,
    accent: "from-[#16A34A] to-[#0A66C2]",
  },
  {
    role: "Installation Technician",
    desc: "Mounts structures and modules to spec — torque, spacing, tilt and cable-management perfect every time.",
    icon: Wrench,
    accent: "from-slate-800 to-slate-700",
  },
  {
    role: "Service & Maintenance Engineer",
    desc: "Performs preventive maintenance, panel cleaning, thermography and AMC-covered on-site service.",
    icon: Cog,
    accent: "from-[#0A66C2] to-[#0B4B8A]",
  },
  {
    role: "Customer Support Executive",
    desc: "Your first point of contact for enquiries, subsidy paperwork, warranty claims and follow-ups.",
    icon: Headphones,
    accent: "from-[#16A34A] to-[#0E7A37]",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative bg-slate-50 py-28 md:py-36" data-testid="team-section">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-slate-300" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-slate-500 font-semibold">
                Our Team — Chapter 07
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] text-slate-900 max-w-3xl">
              The people behind
              <span className="block font-editorial italic font-light text-[#0A66C2]">every kilowatt.</span>
            </h2>
          </div>
          <p className="max-w-sm text-slate-600 leading-relaxed">
            A full in-house team — engineering, execution, service and support — accountable
            from the first survey to the twenty-fifth-year performance audit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {TEAM.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.article
                key={m.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_-18px_rgba(15,23,42,0.15)] p-7 md:p-8 hover:-translate-y-1 hover:shadow-[0_18px_50px_-16px_rgba(15,23,42,0.22)] transition-all duration-500 overflow-hidden"
                data-testid={`team-card-${i}`}
              >
                {/* Ambient gradient blob */}
                <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${m.accent} opacity-15 blur-2xl group-hover:opacity-30 transition-opacity duration-500`} />

                {/* Avatar (placeholder illustration) */}
                <div className="relative">
                  <div className={`h-24 w-24 md:h-28 md:w-28 rounded-full bg-gradient-to-br ${m.accent} p-[3px] shadow-sm`}>
                    <div className="h-full w-full rounded-full bg-white/95 backdrop-blur flex items-center justify-center">
                      <Icon className="h-10 w-10 md:h-12 md:w-12 text-slate-800" strokeWidth={1.4} />
                    </div>
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 h-6 w-6 rounded-full bg-white border-2 border-white shadow-sm">
                    <div className={`h-full w-full rounded-full bg-gradient-to-br ${m.accent}`} />
                  </div>
                </div>

                {/* Number chip */}
                <div className="absolute top-6 right-6 text-[10px] tracking-[0.24em] uppercase font-semibold text-slate-400">
                  {String(i + 1).padStart(2, "0")} / 07
                </div>

                <div className="mt-6">
                  <div className="text-[10px] tracking-[0.24em] uppercase font-semibold text-[#0A66C2]">Team Member</div>
                  <h3 className="mt-2 text-lg md:text-xl font-semibold tracking-tight text-slate-900 leading-snug">
                    {m.role}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                </div>

                {/* Bottom gradient line on hover */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent group-hover:via-[#0A66C2]/60 transition-colors duration-500" />
              </motion.article>
            );
          })}
        </div>

        <p className="mt-10 text-xs text-slate-500 italic max-w-2xl">
          Placeholder illustrations shown. Real team member photos and names will be
          published soon.
        </p>
      </div>
    </section>
  );
}
