import { motion } from "framer-motion";
import { ClipboardList, PencilRuler, FileText, Handshake, Wrench, Activity, Sparkles } from "lucide-react";

const STEPS = [
  { icon: ClipboardList, title: "Site Survey", desc: "Free rooftop/site assessment, shadow analysis, load audit." },
  { icon: PencilRuler, title: "System Design", desc: "Engineering-grade layout, string sizing, subsidy planning." },
  { icon: FileText, title: "Quotation", desc: "Transparent line-item quote with 25-yr TCO." },
  { icon: Handshake, title: "Approval", desc: "DISCOM paperwork, net-meter application handled." },
  { icon: Wrench, title: "Installation", desc: "MNRE-standard mounting, DC/AC wiring, safety." },
  { icon: Activity, title: "Testing", desc: "Insulation, IV curve, thermography, PR ratio." },
  { icon: Sparkles, title: "Handover", desc: "Commissioning, training, warranty pack." },
];

export default function Process() {
  return (
    <section className="relative bg-white py-28 md:py-36" data-testid="process-section">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-slate-300" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-slate-500 font-semibold">
                Process — Chapter 06
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] text-slate-900 max-w-3xl">
              Seven chapters
              <span className="block font-editorial italic font-light text-[#16A34A]">from survey to sunrise.</span>
            </h2>
          </div>
          <p className="max-w-sm text-slate-600 leading-relaxed">
            Most rooftop projects go from first call to first kilowatt in under 21 days.
          </p>
        </div>

        <ol className="relative">
          {/* Vertical spine */}
          <div className="absolute left-[19px] md:left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-[#0A66C2] via-slate-200 to-[#16A34A]" aria-hidden />
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="relative pl-16 md:pl-24 py-6 border-b border-slate-100 last:border-b-0"
                data-testid={`process-step-${i + 1}`}
              >
                <span className="absolute left-0 top-6 inline-flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-900 shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-[11px] tracking-[0.24em] uppercase font-semibold text-slate-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                      {s.title}
                    </h3>
                  </div>
                  <p className="md:text-right md:max-w-md text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
