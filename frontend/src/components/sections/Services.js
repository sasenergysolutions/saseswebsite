import { motion } from "framer-motion";
import {
  Home, Factory, Building2, GitMerge, Zap, BatteryCharging,
  Droplets, Lightbulb, Wrench, LifeBuoy, ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  { icon: Home,            title: "Residential Solar",  desc: "Rooftop systems from 1kW to 10kW for homes.",     size: "lg:col-span-5 lg:row-span-2", tone: "blue",
    img: "https://images.unsplash.com/photo-1770567764570-ebe9b5d0c02b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHw0fHxzb2xhciUyMHBhbmVscyUyMHJvb2YlMjBtb2Rlcm4lMjBob21lfGVufDB8fHx8MTc4NDM2NjI0MHww&ixlib=rb-4.1.0&q=85" },
  { icon: Building2,       title: "Commercial Solar",   desc: "20kW–500kW for offices, hotels, retail.",         size: "lg:col-span-4", tone: "slate",
    img: "https://images.pexels.com/photos/29923357/pexels-photo-29923357.jpeg" },
  { icon: Factory,         title: "Industrial Solar",   desc: "MW-scale plants for factories & MSMEs.",          size: "lg:col-span-3", tone: "slate",
    img: "https://images.pexels.com/photos/9875440/pexels-photo-9875440.jpeg" },
  { icon: GitMerge,        title: "Hybrid Solar",       desc: "Grid-tied with battery backup.",                  size: "lg:col-span-3", tone: "slate",
    img: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg" },
  { icon: Zap,             title: "On-Grid Solar",      desc: "Net-metered systems with instant ROI.",           size: "lg:col-span-4", tone: "green",
    img: "https://images.pexels.com/photos/35726122/pexels-photo-35726122.jpeg" },
  { icon: BatteryCharging, title: "Off-Grid Solar",     desc: "Standalone plants for remote sites.",             size: "lg:col-span-4", tone: "slate",
    img: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg" },
  { icon: Droplets,        title: "Solar Water Pump",   desc: "Standalone solar pumps for agricultural irrigation.",             size: "lg:col-span-4", tone: "slate",
    img: "https://images.pexels.com/photos/9799708/pexels-photo-9799708.jpeg" },
  { icon: Lightbulb,       title: "Solar Street Lights",desc: "All-in-one solar LED streetlights.",              size: "lg:col-span-4", tone: "slate",
    img: "https://images.pexels.com/photos/9875439/pexels-photo-9875439.jpeg" },
  { icon: Wrench,          title: "Maintenance",        desc: "Cleaning, inspection, health checks.",            size: "lg:col-span-6", tone: "slate",
    img: "https://images.pexels.com/photos/30037320/pexels-photo-30037320.jpeg" },
  { icon: LifeBuoy,        title: "AMC Plans",          desc: "Annual contracts with SLA-backed uptime.",        size: "lg:col-span-6", tone: "blue",
    img: "https://images.pexels.com/photos/29923357/pexels-photo-29923357.jpeg" },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-28 md:py-36" data-testid="services-section">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-slate-300" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-slate-500 font-semibold">
                Services — Chapter 02
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95] text-slate-900 max-w-3xl">
              Complete Solar
              <span className="block font-editorial italic font-light text-[#16A34A]">Solutions.</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-600 leading-relaxed">
            From a 1kW rooftop to a multi-megawatt industrial plant — every system is
            engineered, installed and maintained by SAS Energy in-house.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const gradient =
              s.tone === "blue"
                ? "from-[#0A66C2] to-[#0B4B8A]"
                : s.tone === "green"
                ? "from-[#16A34A] to-[#0E7A37]"
                : "from-slate-900 to-slate-700";
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ delay: i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 hover:-translate-y-1 transition-all duration-500 ${s.size}`}
                data-testid={`service-card-${i}`}
              >
                {/* Background image (subtle) */}
                <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                  <img src={s.img} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
                </div>
                {/* Light wash so text stays readable */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-white/70 group-hover:from-white/90 group-hover:via-white/70 group-hover:to-white/40 transition-colors duration-500" />
                {/* Colored gradient reveal on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col h-full min-h-[220px] justify-between p-7 md:p-8">
                  <div className="flex items-start justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
                  </div>
                  <div className="mt-6">
                    <div className="text-[10px] tracking-[0.24em] uppercase font-semibold text-slate-500 group-hover:text-white/80 transition-colors">
                      {String(i + 1).padStart(2, "0")} / {SERVICES.length}
                    </div>
                    <h3 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight text-slate-900 group-hover:text-white transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600 group-hover:text-white/85 transition-colors max-w-md">
                      {s.desc}
                    </p>
                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/95 border border-slate-200 group-hover:bg-white group-hover:border-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm hover:shadow-md transition-all"
                      data-testid={`service-learn-more-${i}`}
                    >
                      Learn more
                      <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
