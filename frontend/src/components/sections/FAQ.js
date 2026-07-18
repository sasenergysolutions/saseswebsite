import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQS = [
  { q: "What is On-Grid Solar?", a: "An on-grid (or grid-tied) solar system stays connected to the utility grid. Panels feed the DC electricity to an inverter, which converts it to AC and either powers your loads directly or exports surplus to the grid via a bidirectional net-meter. You earn credit for the exported units and draw from the grid at night or on cloudy days. There is no battery, so it's the most cost-effective option — typical residential ROI is 4–6 years." },
  { q: "What is Hybrid Solar?", a: "A hybrid solar system combines grid-tie with battery storage. During the day, panels charge the battery and power your loads; excess is exported to the grid. When the grid fails, the battery keeps critical loads running. Hybrid is ideal for locations with frequent outages or for customers who want backup without the cost of a full off-grid system." },
  { q: "How much can I save?", a: "For a typical 3kW rooftop system in Tamil Nadu on a ₹3,000/month bill, you'll save around ₹36,000/year — reducing your annual EB outflow to near zero. Payback is typically 4–6 years, and the system continues to generate for another 20+ years. Use our Solar Savings Calculator above for a system-specific projection." },
  { q: "What is the warranty?", a: "Solar panels come with a 25-year linear performance warranty (guaranteeing ≥85% output at year 25). Inverters are covered for 5–10 years (extendable). Mounting structure has a 5-year anti-corrosion warranty. SAS Energy Solutions provides a 3-year workmanship warranty and handles all warranty claims end-to-end." },
  { q: "How long does installation take?", a: "For a residential rooftop, on-site installation takes 2–3 working days once material is delivered. End-to-end — from your first call through survey, design, DISCOM approval, net-meter application, installation and commissioning — the average timeline is 15–21 days." },
  { q: "Do you provide AMC support?", a: "Yes. SAS Energy Solutions offers Annual Maintenance Contracts starting at ₹1,500/kW/year. AMC includes quarterly panel cleaning, thermographic inspection, electrical health checks, inverter firmware updates, and SLA-backed on-site response within 48 hours. Warranty claim management is included." },
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
