import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 500, suffix: "+", label: "Projects Completed", tone: "blue" },
  { value: 10, suffix: "+", label: "Years of Experience", tone: "slate" },
  { value: 100, suffix: "%", label: "Customer Satisfaction", tone: "green" },
  { value: 25, suffix: " yrs", label: "Panel Performance Warranty", tone: "slate" },
];

function Counter({ to, suffix, inView }) {
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
            >
              <div className="text-[11px] tracking-[0.24em] uppercase text-slate-500 font-semibold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 leading-none">
                <Counter to={s.value} suffix={s.suffix} inView={inView} />
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
