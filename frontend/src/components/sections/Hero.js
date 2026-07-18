import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calculator, MessageCircle, MousePointer2, Search, PenTool, Wrench, PartyPopper } from "lucide-react";
import { SITE } from "@/lib/site";

const HERO_IMG =
  "https://images.pexels.com/photos/35726122/pexels-photo-35726122.jpeg";

// Line-by-line masked reveal
const AnimatedLine = ({ children, delay = 0 }) => (
  <span className="block overflow-hidden">
    <motion.span
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
      className="block will-change-transform"
    >
      {children}
    </motion.span>
  </span>
);

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] w-full overflow-hidden pt-[72px]" data-testid="hero-section">
      {/* Background image with Ken Burns + parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 bg-slate-950">
        <div className="absolute inset-0 kenburns">
          <img
            src={HERO_IMG}
            alt="Rooftop solar installation"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/55 to-slate-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_20%,rgba(10,102,194,0.35),transparent_60%),radial-gradient(60%_50%_at_80%_80%,rgba(22,163,74,0.25),transparent_60%)]" />
        <div className="absolute inset-0 grain" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 md:pt-24 pb-28 md:pb-40">
        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.05, duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/25 backdrop-blur-md px-4 py-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-white shadow-glow-green"
          data-testid="hero-badge"
        >
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#7CE39E] opacity-70 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#16A34A]" />
          </span>
          Book Free Site Survey Today
        </motion.div>

        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-10 bg-white/50" />
          <span className="text-[11px] tracking-[0.28em] uppercase text-white/85 font-semibold" data-testid="hero-eyebrow">
            Solar EPC · Tamil Nadu · Since 2024
          </span>
        </motion.div>

        {/* Kinetic headline */}
        <h1 className="max-w-6xl text-white font-bold tracking-tighter leading-[0.92] text-[52px] sm:text-[68px] md:text-[92px] lg:text-[120px]">
          <AnimatedLine delay={0.15}>Power your</AnimatedLine>
          <AnimatedLine delay={0.28}>
            <span className="font-editorial italic font-light text-white/95">future </span>
            <span>with</span>
          </AnimatedLine>
          <AnimatedLine delay={0.42}>
            <span className="bg-gradient-to-r from-[#7BB6FF] via-white to-[#7CE39E] bg-clip-text text-transparent">
              smart solar
            </span>{" "}
            energy.
          </AnimatedLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-8 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed"
          data-testid="hero-subheadline"
        >
          Complete residential, commercial and industrial solar solutions engineered
          across Tamil Nadu — MNRE-standard installation, 25-year performance warranty.
        </motion.p>

        {/* CTA cluster */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#16A34A] via-[#22C55E] to-[#0E7A37] text-white pl-6 pr-2 py-2 text-sm font-semibold hover:from-[#0A66C2] hover:via-[#0A66C2] hover:to-[#0B4B8A] transition-all shadow-glow-green"
            data-testid="hero-cta-survey"
          >
            Get Free Site Survey
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#16A34A] group-hover:text-[#0A66C2] transition-colors">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
          <a
            href="#calculators"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 backdrop-blur px-5 py-3 text-sm font-medium text-white hover:bg-white/15 transition-colors"
            data-testid="hero-cta-calc"
          >
            <Calculator className="h-4 w-4" /> Calculate Savings
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#16A34A] px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors shadow-glow-green"
            data-testid="hero-cta-whatsapp"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Now
          </a>
        </motion.div>

        {/* Floating index chips (bottom band) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/15 rounded-2xl overflow-hidden backdrop-blur-md"
        >
          {[
            ["01", "Site survey", Search],
            ["02", "Design & quote", PenTool],
            ["03", "Installation", Wrench],
            ["04", "Handover", PartyPopper],
          ].map(([n, l, Icon]) => (
            <div key={n} className="group relative bg-slate-950/30 hover:bg-slate-950/60 px-5 py-5 transition-colors cursor-default" data-testid={`hero-chapter-${n}`}>
              <div className="flex items-start justify-between">
                <div className="text-[10px] tracking-[0.24em] text-white/60 uppercase">Chapter {n}</div>
                <Icon className="h-4 w-4 text-white/70 group-hover:text-[#7CE39E] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
              </div>
              <div className="mt-2 text-white text-lg font-medium group-hover:translate-x-1 transition-transform duration-300">{l}</div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7CE39E]/0 to-transparent group-hover:via-[#7CE39E]/60 transition-colors" />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
      >
        <MousePointer2 className="h-4 w-4" />
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-white/70 to-transparent"
        />
        <span className="text-[10px] tracking-[0.22em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
