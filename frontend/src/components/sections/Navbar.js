import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-2xl border-b border-slate-200/70 shadow-[0_6px_28px_-10px_rgba(15,23,42,0.12)]"
            : "bg-slate-950/25 backdrop-blur-md border-b border-white/10"
        }`}
        data-testid="sticky-navbar"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group" data-testid="nav-logo">
            <img
              src="/logo.jpg"
              alt="SAS Energy Solutions"
              className="h-12 md:h-14 w-auto object-contain rounded-md bg-white p-0.5 shadow-sm"
              loading="eager"
            />
            <span className="leading-tight hidden sm:block">
              <span className={`block text-[15px] md:text-base font-bold tracking-tight ${scrolled ? "text-slate-900" : "text-white"}`}>SAS Energy Solutions</span>
              <span className={`block text-[9px] font-medium tracking-[0.22em] uppercase ${scrolled ? "text-[#16A34A]" : "text-[#7CE39E]"}`}>Think Future · Get Benefits</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className={`text-[13px] font-medium transition-colors duration-200 ${
                  scrolled ? "text-slate-700 hover:text-[#0A66C2]" : "text-white/95 hover:text-[#7CE39E]"
                }`}
                data-testid={`nav-link-${n.label.toLowerCase()}`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA cluster */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                scrolled ? "text-slate-700 hover:text-[#0A66C2] hover:bg-slate-50" : "text-white hover:bg-white/10"
              }`}
              data-testid="nav-call-now"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                scrolled ? "text-[#16A34A] hover:bg-emerald-50" : "text-[#7CE39E] hover:bg-white/10"
              }`}
              data-testid="nav-whatsapp"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-gradient-to-br from-[#16A34A] to-[#0E7A37] px-5 py-2.5 text-[13px] font-semibold text-white hover:from-[#0A66C2] hover:to-[#0B4B8A] transition-colors shadow-sm"
              data-testid="nav-get-quote"
            >
              Get Quote →
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border ${
              scrolled ? "border-slate-200 bg-white text-slate-800" : "border-white/25 bg-white/10 text-white"
            }`}
            aria-label="Toggle menu"
            data-testid="nav-mobile-toggle"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden bg-white border-t border-slate-200"
            >
              <div className="px-6 py-6 flex flex-col gap-1">
                {NAV.map((n) => (
                  <a
                    key={n.label}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="py-3 text-base font-medium text-slate-800 border-b border-slate-100"
                    data-testid={`nav-mobile-${n.label.toLowerCase()}`}
                  >
                    {n.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex justify-center rounded-full bg-[#0A66C2] px-5 py-3 text-sm font-semibold text-white"
                  data-testid="nav-mobile-get-quote"
                >
                  Get Free Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Spacer handled per-section with pt on hero */}
    </>
  );
}
