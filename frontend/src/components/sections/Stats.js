import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * value === null → non-numeric display (uses `display` instead of counter)
 */
const STATS = [
  { value: 2024, suffix: "", label: "Established · Solar EPC", tone: "blue", display: "Since 2024", asCounter: true, prefix: "Since " },
  { value: 500, suffix: "+", label: "Projects Ready to Deliver", tone: "slate" },
  { value: null, suffix: "", label: "Residential · Commercial · Industrial Solutions", tone: "green", display: "R · C · I" },
  { value: 25, suffix: " yrs", label: "Panel Performance Warranty", tone: "slate" },
];

function Counter({ to, suffix, prefix = "", inView }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span>
      {prefix && <span className="text-slate-400 font-light text-3xl md:text-4xl lg:text-5xl align-middle mr-2">{prefix}</span>}
      {Math.round(val)}
      <span className="text-slate-400 font-light">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  return (
    <section ref={ref} className="relative bg-white py-20 md:py-28" data-testid="stats-section">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 border-y border-slate-200 py-16">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
              data-testid={`stat-${i}`}
            >
              <div className="text-[11px] tracking-[0.24em] uppercase text-slate-500 font-semibold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 leading-none">
                {s.value !== null ? (
                  <Counter to={s.value} suffix={s.suffix} prefix={s.prefix} inView={inView} />
                ) : (
                  <span className="text-4xl md:text-5xl lg:text-6xl">{s.display}</span>
                )}
              </div>
              <div className={`mt-4 text-sm md:text-base ${s.tone === "blue" ? "text-[#0A66C2]" : s.tone === "green" ? "text-[#16A34A]" : "text-slate-600"} font-medium`}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
