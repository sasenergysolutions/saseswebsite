import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, ExternalLink, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// Inline Google 'G' logo
const GoogleG = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden>
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.61.27-3.16.76-4.59l-7.98-6.19A24 24 0 0 0 0 24c0 3.87.93 7.53 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", location: "", message: "" });
  const [busy, setBusy] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.location || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setBusy(true);
    try {
      const payload = {
        name: form.name,
        phone: form.phone,
        email: form.email || "noreply@sasenergysolutions.example",
        service: form.location, // reuse existing backend field to carry location
        message: form.message,
      };
      await axios.post(`${API}/contact`, payload);
      toast.success("Enquiry sent! Our team will reach out within 24 hours.");
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", location: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section id="contact" className="relative bg-white py-28 md:py-36" data-testid="contact-section">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: intro + map + contact tiles */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-slate-300" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-slate-500 font-semibold">
                Contact — Chapter 11
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] text-slate-900">
              Let&apos;s power
              <span className="block font-editorial italic font-light text-[#16A34A]">your project.</span>
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed max-w-md">
              Free site survey. Transparent quote in 48 hours. Zero obligation.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3">
              <a href={`tel:${SITE.phoneRaw}`} className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 hover:border-[#0A66C2] hover:-translate-y-0.5 transition-all" data-testid="contact-phone">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white"><Phone className="h-5 w-5" /></span>
                <div><div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-slate-500">Phone</div><div className="text-sm font-semibold text-slate-900">{SITE.phone}</div></div>
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi SAS Energy Solutions, I'd like a free site survey.")}`} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 hover:border-[#16A34A] hover:-translate-y-0.5 transition-all" data-testid="contact-whatsapp">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#16A34A] text-white"><MessageCircle className="h-5 w-5" /></span>
                <div><div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-slate-500">WhatsApp</div><div className="text-sm font-semibold text-slate-900">{SITE.whatsappDisplay}</div></div>
              </a>
              <a href={`mailto:${SITE.email}`} className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 hover:border-[#0A66C2] hover:-translate-y-0.5 transition-all" data-testid="contact-email">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A66C2] text-white"><Mail className="h-5 w-5" /></span>
                <div className="min-w-0"><div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-slate-500">Email</div><div className="text-sm font-semibold text-slate-900 break-all">{SITE.email}</div></div>
              </a>
              <a href={SITE.googleMapsLink} target="_blank" rel="noreferrer" className="group flex items-start gap-4 rounded-2xl border border-slate-200 p-4 hover:border-slate-900 hover:-translate-y-0.5 transition-all" data-testid="contact-office">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors"><MapPin className="h-5 w-5" /></span>
                <div className="flex-1">
                  <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-slate-500">Office</div>
                  <div className="text-sm font-medium text-slate-900 leading-relaxed">
                    {SITE.addressLines.map((l, i) => <span key={i} className="block">{l}</span>)}
                  </div>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#0A66C2] group-hover:text-[#16A34A] transition-colors">
                    Open in Google Maps <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </a>
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-4" data-testid="contact-hours">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700"><Clock className="h-5 w-5" /></span>
                <div>
                  <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-slate-500">Working Hours</div>
                  <div className="text-sm font-medium text-slate-900 leading-relaxed">
                    <span className="block">{SITE.hours.weekdays}</span>
                    <span className="block text-slate-500">{SITE.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={SITE.googleMapsLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 group block overflow-hidden rounded-2xl border border-slate-200 aspect-[16/10] relative"
              data-testid="contact-map-link"
            >
              <iframe
                title="SAS Energy Solutions office location"
                src={SITE.mapEmbed}
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0, pointerEvents: "none" }}
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 flex items-end justify-end p-4 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-ambient group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <MapPin className="h-3.5 w-3.5" /> Get Directions
                </span>
              </div>
            </a>
          </div>

          {/* Right: form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 rounded-3xl bg-slate-50 border border-slate-200 p-8 md:p-12 relative"
            data-testid="contact-form"
          >
            <div className="text-[10px] tracking-[0.24em] uppercase font-semibold text-[#0A66C2] mb-4">Free Quote Request</div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Tell us about your project</h3>

            {/* Google Business CTA */}
            <a
              href={SITE.googleBusiness}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-900 hover:border-slate-900 transition-colors"
              data-testid="contact-view-google"
            >
              <GoogleG className="h-4 w-4" /> View us on Google
            </a>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 rounded-2xl border border-[#16A34A]/25 bg-emerald-50 p-8 text-center"
                data-testid="contact-success"
              >
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#16A34A] text-white">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <div className="mt-4 text-xl font-semibold tracking-tight text-slate-900">Thank you!</div>
                <p className="mt-2 text-slate-600 max-w-md mx-auto">
                  Your enquiry has been received. A member of the SAS Energy Solutions team will reach out within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-semibold text-slate-800 hover:border-slate-900 transition-colors"
                  data-testid="contact-send-another"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <>
                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Full name *</label>
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="mt-2 w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-[#0A66C2] transition-colors" data-testid="contact-name" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Phone number *</label>
                    <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required type="tel" inputMode="tel" className="mt-2 w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-[#0A66C2] transition-colors" data-testid="contact-phone-input" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Email <span className="text-slate-400 normal-case tracking-normal">(optional)</span></label>
                    <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" className="mt-2 w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-[#0A66C2] transition-colors" data-testid="contact-email-input" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Location *</label>
                    <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required placeholder="e.g. Karaikudi, Sivagangai" className="mt-2 w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-[#0A66C2] transition-colors" data-testid="contact-location" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Message *</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4} className="mt-2 w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-[#0A66C2] transition-colors resize-none" placeholder="Roof size, monthly EB bill, timeline…" data-testid="contact-message" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={busy}
                  className="mt-8 group inline-flex items-center gap-2 rounded-full bg-slate-900 pl-6 pr-2 py-2 text-sm font-semibold text-white hover:bg-[#0A66C2] transition-colors disabled:opacity-60"
                  data-testid="contact-submit"
                >
                  {busy ? "Sending…" : "Send enquiry"}
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-900">
                    <Send className="h-4 w-4" />
                  </span>
                </button>
                <p className="mt-4 text-xs text-slate-500">By submitting you agree to be contacted about your solar enquiry. No spam, ever.</p>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
