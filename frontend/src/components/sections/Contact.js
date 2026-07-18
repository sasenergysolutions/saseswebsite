import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { SITE } from "@/lib/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SERVICES = [
  "Residential Solar", "Commercial Solar", "Industrial Solar",
  "Hybrid Solar", "On-Grid", "Off-Grid", "Solar Water Pump",
  "Solar Street Light", "AMC / Maintenance",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: SERVICES[0], message: "" });
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setBusy(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Thanks! Our team will reach out within 24 hours.");
      setForm({ name: "", email: "", phone: "", service: SERVICES[0], message: "" });
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
              <a href={`tel:${SITE.phoneRaw}`} className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 hover:border-[#0A66C2] transition-colors" data-testid="contact-phone">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white"><Phone className="h-5 w-5" /></span>
                <div><div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-slate-500">Phone</div><div className="text-sm font-semibold text-slate-900">{SITE.phone}</div></div>
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 hover:border-[#16A34A] transition-colors" data-testid="contact-whatsapp">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#16A34A] text-white"><MessageCircle className="h-5 w-5" /></span>
                <div><div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-slate-500">WhatsApp</div><div className="text-sm font-semibold text-slate-900">Message us anytime</div></div>
              </a>
              <a href={`mailto:${SITE.email}`} className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 hover:border-[#0A66C2] transition-colors" data-testid="contact-email">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A66C2] text-white"><Mail className="h-5 w-5" /></span>
                <div><div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-slate-500">Email</div><div className="text-sm font-semibold text-slate-900">{SITE.email}</div></div>
              </a>
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700"><MapPin className="h-5 w-5" /></span>
                <div><div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-slate-500">Office</div><div className="text-sm font-medium text-slate-900 leading-relaxed">{SITE.address}</div></div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 aspect-[16/10]">
              <iframe
                title="Office location"
                src="https://maps.google.com/maps?q=Devakottai%2C%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 rounded-3xl bg-slate-50 border border-slate-200 p-8 md:p-12"
            data-testid="contact-form"
          >
            <div className="text-[10px] tracking-[0.24em] uppercase font-semibold text-[#0A66C2] mb-4">Free Quote Request</div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Tell us about your project</h3>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Full name *</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="mt-2 w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-[#0A66C2] transition-colors" data-testid="contact-name" />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Phone *</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required type="tel" className="mt-2 w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-[#0A66C2] transition-colors" data-testid="contact-phone-input" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Email *</label>
                <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required type="email" className="mt-2 w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-[#0A66C2] transition-colors" data-testid="contact-email-input" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Interested in</label>
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="mt-2 w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-[#0A66C2]" data-testid="contact-service">
                  {SERVICES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Project details *</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4} className="mt-2 w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-[#0A66C2] transition-colors resize-none" placeholder="Roof size, monthly bill, location…" data-testid="contact-message" />
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
          </motion.form>
        </div>
      </div>
    </section>
  );
}
