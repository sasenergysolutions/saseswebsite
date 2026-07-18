import { Facebook, Instagram, Youtube, Linkedin, ArrowUpRight } from "lucide-react";
import { SITE, NAV } from "@/lib/site";

const QUICK_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#brands" },
  { label: "Team", href: "#team" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = ["Residential", "Commercial", "Industrial", "Hybrid", "Water Pump", "AMC"];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white pt-24 pb-10 overflow-hidden" data-testid="footer">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(10,102,194,0.18),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Editorial mark */}
        <div className="border-t border-white/10 pt-14">
          <h3 className="font-editorial italic text-[64px] md:text-[110px] lg:text-[160px] leading-[0.85] tracking-tighter text-white/90">
            Power. <span className="text-[#7CE39E]">Purpose.</span>
            <br /> Photovoltaics.
          </h3>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="SAS Energy Solutions"
                className="h-16 md:h-20 w-auto object-contain rounded-lg bg-white p-1 shadow-sm"
                loading="lazy"
              />
              <span className="sr-only">SAS Energy Solutions</span>
            </a>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              A Devakottai-based Solar EPC. Engineering-grade rooftop, commercial and
              industrial installations across Tamil Nadu.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((I, i) => (
                <a key={i} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-colors" data-testid={`social-${i}`}>
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.24em] uppercase font-semibold text-white/50 mb-4">Quick Links</div>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="text-sm text-white/80 hover:text-white transition-colors">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.24em] uppercase font-semibold text-white/50 mb-4">Services</div>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}><a href="#services" className="text-sm text-white/80 hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.24em] uppercase font-semibold text-white/50 mb-4">Contact</div>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li><a href={`tel:${SITE.phoneRaw}`} className="hover:text-white transition-colors">{SITE.phone}</a></li>
              <li><a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp · {SITE.whatsappDisplay}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors break-all">{SITE.email}</a></li>
              <li className="leading-relaxed pt-1">
                {SITE.addressLines.map((l, i) => <span key={i} className="block">{l}</span>)}
              </li>
              <li className="leading-relaxed pt-2 text-white/60">
                <span className="block">{SITE.hours.weekdays}</span>
                <span className="block">{SITE.hours.sunday}</span>
              </li>
            </ul>
            <a href={SITE.googleMapsLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-2.5 text-xs font-semibold hover:bg-[#7CE39E] transition-colors">
              Get Directions <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-xs text-white/60" data-testid="footer-copyright">© 2026 SAS Energy Solutions. All Rights Reserved.</div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50">
            <a href="#" className="hover:text-white transition-colors" data-testid="footer-privacy">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors" data-testid="footer-terms">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
