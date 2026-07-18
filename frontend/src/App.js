import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { Toaster } from "sonner";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Brands from "@/components/sections/Brands";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Calculators from "@/components/sections/Calculators";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingActions from "@/components/sections/FloatingActions";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);
    // hash link support
    const onClick = (e) => {
      const a = e.target.closest("a[href^='#']");
      if (!a) return;
      const id = a.getAttribute("href");
      if (id && id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: -80, duration: 1.4 });
        }
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App bg-white text-slate-900" data-testid="app-root">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyUs />
        <Brands />
        <Process />
        <Gallery />
        <Testimonials />
        <Calculators />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster position="bottom-right" richColors closeButton />
    </div>
  );
}

export default App;
