import { motion } from "framer-motion";
import { Target, Compass, ShieldCheck, Sparkles } from "lucide-react";

const CHAPTERS = [
  {
    n: "01",
    icon: Compass,
    title: "Our Mission",
    body: "To provide reliable, affordable and high-quality solar energy solutions while promoting a greener future.",
  },
  {
    n: "02",
    icon: Target,
    title: "Our Vision",
    body: "To become one of Tamil Nadu's most trusted Solar EPC companies through quality, innovation and customer satisfaction.",
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "Our Values",
    body: "MNRE-standard installation. Tier-1 hardware only. Transparent pricing. Twenty-five-year warranties honoured. No shortcuts, no surprises — ever.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-slate-50 py-28 md:py-36" data-testid="about-section">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column: eyebrow + kinetic title */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-10 bg-slate-300" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-slate-500 font-semibold">
                About — Chapter 01
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] text-slate-900"
            >
              A solar EPC built on
              <span className="block font-editorial italic font-light text-[#0A66C2]">engineering discipline.</span>
            </motion.h2>
            <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-md">
              SAS Energy Solutions is a trusted Solar EPC company based in Devakottai,
              Tamil Nadu — delivering complete solar energy solutions for residential,
              commercial, industrial and agricultural sectors.
            </p>
            <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed max-w-md">
              We specialize in Design, Supply, Installation, Testing, Commissioning and
              Maintenance of high-quality solar power systems built with premium
              components. Our mission is to help customers reduce electricity bills and
              adopt clean, sustainable energy through reliable and affordable solar.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm text-slate-700">
              <Sparkles className="h-4 w-4 text-[#16A34A]" />
              MNRE-listed · Tier-1 modules · 100% in-house crew
            </div>
          </div>

          {/* Right column: numbered manifesto */}
          <div className="lg:col-span-7 space-y-6">
            {CHAPTERS.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.article
                  key={c.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-white rounded-3xl border border-slate-200 p-8 md:p-10 hover:shadow-ambient transition-shadow"
                  data-testid={`about-chapter-${c.n}`}
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <div className="text-[80px] md:text-[100px] leading-none font-light tracking-tighter text-slate-200 group-hover:text-[#0A66C2]/25 transition-colors">
                        {c.n}
                      </div>
                    </div>
                    <div className="pt-3">
                      <div className="inline-flex items-center gap-2 text-[#0A66C2] mb-3">
                        <Icon className="h-5 w-5" />
                        <span className="text-[11px] tracking-[0.22em] uppercase font-semibold">Chapter {c.n}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                        {c.title}
                      </h3>
                      <p className="mt-3 text-slate-600 leading-relaxed max-w-2xl">{c.body}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
