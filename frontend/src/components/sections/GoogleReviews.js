import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  { name: "Ramesh K.",       initials: "RK", place: "Karaikudi", text: "From ₹4,800 bill to ₹120. SAS handled everything — subsidy, DISCOM, net-meter. Turnkey in the truest sense." },
  { name: "Lakshmi Textiles", initials: "LT", place: "Sivaganga",  text: "60kW rooftop paid back in 3 years 8 months. Engineering was more thorough than any other quote." },
  { name: "Dr. Anitha S.",    initials: "AS", place: "Devakottai", text: "Two years in, zero support tickets. Spotless installation, punctual crew, honest paperwork." },
  { name: "Suresh M.",        initials: "SM", place: "Ramanathapuram", text: "PM-KUSUM pump commissioned in 11 days. Diesel bill is now zero." },
];

// Inline Google 'G' logo SVG (branded colors)
const GoogleG = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden>
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.61.27-3.16.76-4.59l-7.98-6.19A24 24 0 0 0 0 24c0 3.87.93 7.53 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

export default function GoogleReviews() {
  return (
    <section className="relative bg-white py-24 md:py-32 border-t border-slate-100" data-testid="google-reviews-section">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-slate-300" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-slate-500 font-semibold">
                Google Reviews
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] text-slate-900">
              Rated <span className="text-[#0A66C2]">4.9</span>
              <span className="block font-editorial italic font-light text-[#16A34A]">on Google.</span>
            </h2>
          </div>

          {/* Review badge */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8" data-testid="google-review-badge">
            <div className="flex items-center gap-4">
              <GoogleG className="h-9 w-9" />
              <div>
                <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">SAS Energy Solutions</div>
                <div className="text-lg font-semibold text-slate-900">Google Verified</div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <div className="text-5xl font-bold tracking-tighter text-slate-900">4.9</div>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-xs text-slate-500 mt-1">Based on 200+ Google reviews</div>
              </div>
            </div>
            <a
              href="https://www.google.com/search?q=SAS+Energy+Solutions+Devakottai"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-800 hover:border-slate-900 transition-colors"
              data-testid="google-reviews-cta"
            >
              <GoogleG className="h-4 w-4" /> Read all reviews on Google
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="group relative rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-ambient hover:-translate-y-0.5 transition-all"
              data-testid={`google-review-${i}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#16A34A] text-white flex items-center justify-center text-xs font-bold">
                    {r.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{r.name}</div>
                    <div className="text-[11px] text-slate-500">{r.place}</div>
                  </div>
                </div>
                <GoogleG className="h-5 w-5" />
              </div>
              <div className="mt-3 flex">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">{r.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
