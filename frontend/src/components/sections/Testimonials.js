import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SITE } from "@/lib/site";

// Inline Google 'G' logo
const GoogleG = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden>
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.61.27-3.16.76-4.59l-7.98-6.19A24 24 0 0 0 0 24c0 3.87.93 7.53 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

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
              Verified reviews,
              <span className="block font-editorial italic font-light text-[#0A66C2]">coming soon.</span>
            </h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-10 md:p-16 flex flex-col items-center text-center"
          data-testid="testimonials-placeholder"
        >
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm">
            <Quote className="h-6 w-6 text-[#0A66C2]" />
          </div>
          <div className="mt-6 flex items-center gap-2 text-slate-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-slate-700 text-lg md:text-xl leading-relaxed font-medium">
            Customer reviews will be updated with verified Google Reviews.
          </p>
          <p className="mt-3 max-w-xl text-slate-500 text-sm leading-relaxed">
            We're committed to authenticity — every testimonial published here will be an
            unedited review from a real SAS Energy Solutions customer on Google.
          </p>
          <a
            href={SITE.googleBusiness}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:border-slate-900 transition-colors"
            data-testid="testimonials-view-google"
          >
            <GoogleG className="h-4 w-4" /> View us on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
