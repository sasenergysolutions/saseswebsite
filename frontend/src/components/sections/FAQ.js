import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQS = [
  { q: "How much does a solar rooftop system cost in Tamil Nadu?", a: "Residential systems start at ₹65,000 for 1kW. A typical 3kW home system is around ₹1.8 lakh — inclusive of Tier-1 modules, a smart inverter, mounting structure, wiring, and net-meter paperwork. Central subsidies of up to ₹78,000 apply for eligible households." },
  { q: "What subsidies are available?", a: "PM Surya Ghar Muft Bijli Yojana offers ₹30,000 per kW (up to 3kW) and ₹18,000/kW thereafter — capped at ₹78,000. We handle the entire subsidy application for you." },
  { q: "How long does installation take?", a: "For a residential rooftop, on-site work takes 2–3 days once components arrive. End-to-end (survey → commissioning) is typically 15–21 days including DISCOM approvals." },
  { q: "What is the warranty?", a: "Panels: 25-year linear performance warranty (~85% output guaranteed). Inverters: 5–10 years. Structure: 5 years against corrosion. Workmanship: 3 years." },
  { q: "Do I need battery storage?", a: "For an on-grid system, no — you export excess to the grid and draw back via net-metering. Batteries make sense only for backup during frequent outages or off-grid sites." },
  { q: "What maintenance is required?", a: "Just quarterly panel cleaning and an annual electrical health check. We offer AMC packages starting at ₹1,500/kW/year with SLA-backed uptime." },
  { q: "Do you serve outside Devakottai?", a: "Yes. We install and maintain systems across Tamil Nadu — Sivaganga, Karaikudi, Madurai, Trichy, Chennai, Coimbatore and neighbouring districts." },
  { q: "How is savings calculated?", a: "We estimate based on your monthly EB bill, roof area, local irradiance (~5.5 kWh/m²/day for TN) and tariff. Try our Solar Savings Calculator above for a system-specific projection." },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-slate-50 py-28 md:py-36" data-testid="faq-section">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-slate-300" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-slate-500 font-semibold">
                FAQ — Chapter 10
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] text-slate-900">
              Answers before
              <span className="block font-editorial italic font-light text-[#0A66C2]">the questions.</span>
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed max-w-md">
              Still curious? WhatsApp us — a real engineer replies, not a script.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-slate-200 py-2"
                  data-testid={`faq-item-${i}`}
                >
                  <AccordionTrigger className="text-left text-lg md:text-xl font-semibold tracking-tight text-slate-900 hover:no-underline hover:text-[#0A66C2]">
                    <span className="flex items-baseline gap-4">
                      <span className="text-[11px] tracking-[0.24em] uppercase font-semibold text-slate-400 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed text-base pl-10">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
