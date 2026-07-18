import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const CATEGORIES = ["All", "Residential", "Commercial", "Industrial", "Agriculture"];

const ITEMS = [
  { cat: "Residential", img: "https://images.unsplash.com/photo-1770567764570-ebe9b5d0c02b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHw0fHxzb2xhciUyMHBhbmVscyUyMHJvb2YlMjBtb2Rlcm4lMjBob21lfGVufDB8fHx8MTc4NDM2NjI0MHww&ixlib=rb-4.1.0&q=85", title: "5kW rooftop · Karaikudi", tall: true },
  { cat: "Commercial", img: "https://images.pexels.com/photos/29923357/pexels-photo-29923357.jpeg", title: "120kW warehouse · Madurai" },
  { cat: "Residential", img: "https://images.pexels.com/photos/35726122/pexels-photo-35726122.jpeg", title: "3kW villa · Devakottai" },
  { cat: "Industrial", img: "https://images.pexels.com/photos/9875440/pexels-photo-9875440.jpeg", title: "500kW plant · Sivaganga", tall: true },
  { cat: "Agriculture", img: "https://images.pexels.com/photos/9799708/pexels-photo-9799708.jpeg", title: "PM-KUSUM 7.5HP pump" },
  { cat: "Commercial", img: "https://images.pexels.com/photos/9875439/pexels-photo-9875439.jpeg", title: "60kW hotel rooftop" },
  { cat: "Residential", img: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg", title: "10kW bungalow · Chennai" },
  { cat: "Industrial", img: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg", title: "1MW ground mount · Trichy", tall: true },
];

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState(null);
  const filtered = cat === "All" ? ITEMS : ITEMS.filter((i) => i.cat === cat);

  return (
    <section id="gallery" className="relative bg-slate-50 py-28 md:py-36" data-testid="gallery-section">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-slate-300" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-slate-500 font-semibold">
                Gallery — Chapter 07
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] text-slate-900">
              A portfolio in
              <span className="block font-editorial italic font-light text-[#0A66C2]">photovoltaic silicon.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2" data-testid="gallery-filters">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-colors ${
                  cat === c ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-700 hover:border-slate-900"
                }`}
                data-testid={`gallery-filter-${c.toLowerCase()}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry via CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {filtered.map((it, i) => (
            <motion.button
              key={`${it.title}-${i}`}
              onClick={() => setOpen(it)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ delay: i * 0.04, duration: 0.6 }}
              className="group mb-5 block break-inside-avoid w-full text-left overflow-hidden rounded-3xl bg-white border border-slate-200 hover:shadow-ambient transition-shadow"
              data-testid={`gallery-item-${i}`}
            >
              <div className={`relative overflow-hidden ${it.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] tracking-[0.24em] uppercase font-semibold text-[#0A66C2]">{it.cat}</div>
                  <div className="mt-1 text-sm font-medium text-slate-900">{it.title}</div>
                </div>
                <span className="text-slate-400 text-xs group-hover:text-slate-900 transition-colors">Enlarge →</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] bg-slate-950/85 backdrop-blur-lg p-4 md:p-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            data-testid="gallery-lightbox"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={open.img} alt={open.title} className="w-full h-auto rounded-2xl" />
              <div className="mt-4 flex items-center justify-between text-white">
                <div>
                  <div className="text-[10px] tracking-[0.24em] uppercase font-semibold text-white/60">{open.cat}</div>
                  <div className="text-lg font-medium">{open.title}</div>
                </div>
                <button onClick={() => setOpen(null)} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition" data-testid="gallery-lightbox-close">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
