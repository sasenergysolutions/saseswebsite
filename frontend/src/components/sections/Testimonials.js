import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SITE } from "@/lib/site";

// Inline Google 'G' logo
const GoogleG = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden>
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.61.27-3.16.76-4.59l-7.98-6.19A24 24 0 0 0 0 24c0 3.87.93 7.53 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

const REVIEWS = [
  { text: "Professional installation, excellent workmanship and timely project completion.", who: "Residential Customer" },
  { text: "Very satisfied with the quality of the installation and after-sales support.",   who: "Commercial Customer" },
  { text: "Neat installation and responsive technical team.",                                who: "Industrial Customer" },
  { text: "The team explained everything clearly and completed the installation smoothly.",  who: "Homeowner" },
  { text: "Good quality products and excellent customer service.",                           who: "Business Owner" },
  { text: "Reliable solar EPC company with professional support.",                           who: "Customer" },
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
              Customer
              <span className="block font-editorial italic font-light text-[#0A66C2]">testimonials.</span>
            </h2>
          </div>
          <p className="max-w-sm text-slate-600 leading-relaxed">
            Feedback from residential, commercial and industrial customers across Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="group relative rounded-3xl bg-slate-50 hover:bg-white border border-slate-200 p-8 hover:-translate-y-1 hover:shadow-ambient transition-all duration-500"
              data-testid={`testimonial-${i}`}
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-slate-200 group-hover:text-[#0A66C2]/30 transition-colors" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-5 text-slate-800 text-base md:text-lg leading-relaxed font-medium">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="text-[10px] tracking-[0.24em] uppercase font-semibold text-[#0A66C2]">— {r.who}</div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6"
        >
          <p className="text-sm text-slate-600 italic max-w-xl">
            Verified customer reviews from our Google Business Profile will be updated
            regularly.
          </p>
          <a
            href={SITE.googleBusiness}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-auto rounded-full bg-white border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-900 hover:border-slate-900 transition-colors"
            data-testid="testimonials-view-google"
          >
            <GoogleG className="h-4 w-4" /> View us on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
