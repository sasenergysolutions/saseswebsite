import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { SITE } from "@/lib/site";

export default function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed z-[60] bottom-5 right-5 md:bottom-8 md:right-8 flex flex-col gap-3 items-end" data-testid="floating-actions">
      <AnimatePresence>
        {show && (
          <motion.button
            key="top"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-900 shadow-ambient hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors"
            aria-label="Back to top"
            data-testid="fab-back-to-top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
      <a
        href={`tel:${SITE.phoneRaw}`}
        className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-glow-blue hover:scale-105 transition-transform"
        aria-label="Call now"
        data-testid="fab-call"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi SAS Energy Solutions, I'd like a free site survey.")}`}
        target="_blank"
        rel="noreferrer"
        className="relative inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#16A34A] text-white shadow-glow-green hover:scale-105 transition-transform"
        aria-label="Chat on WhatsApp"
        data-testid="fab-whatsapp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-30 animate-ping" />
      </a>
    </div>
  );
}
