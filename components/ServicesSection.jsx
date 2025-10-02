"use client";

import { FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Climate Monitoring & Prediction",
      bullets: [
        "Continuous real-time monitoring of temperature, humidity, and air quality using AI + NASA Earth observation data",
        "Predictive models to anticipate extreme events like heatwaves, floods, or abnormal seasonal shifts",
      ],
    },
    {
      title: "Smart Climate Adjustment",
      bullets: [
        "Localized interventions to gradually restore seasonal balance (cooling in extreme heat, warming in severe cold, humidity control)",
        "Safe, customized systems for each city’s unique environment",
      ],
    },
    {
      title: "Sustainable Agriculture Support",
      bullets: [
        "Providing farmers with seasonal stability to protect crops",
        "Data‑driven insights for planting cycles and irrigation management",
      ],
    },
    {
      title: "Urban Resilience Solutions",
      bullets: [
        "Reducing risks to infrastructure and heritage sites by mitigating climate stress",
        "Assisting municipalities with adaptive strategies for sustainable urban planning",
      ],
    },
    {
      title: "Public Health & Well‑being Services",
      bullets: [
        "Improving air quality, reducing heat‑related illnesses, and stabilizing seasonal diseases",
        "Early warning systems for vulnerable populations",
      ],
    },
    {
      title: "Data & Decision Support",
      bullets: [
        "Dashboards and visualization tools for policymakers",
        "Open‑access data for researchers, NGOs, and smart city planners",
      ],
    },
  ];

  return (
    <section id="services" className="relative z-10 w-full py-16 md:py-24">
      
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,6,23,0.35) 0%, rgba(2,6,23,0.15) 100%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-500/10 backdrop-blur px-4 py-2 text-cyan-200"
        >
          <span className="grid place-items-center w-8 h-8 rounded-full bg-cyan-400/20 text-cyan-100">
            <FaCogs size={16} />
          </span>
          <span className="font-gtproelium tracking-wide uppercase text-base md:text-lg">Our Services</span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl"
        >
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              className="group relative rounded-2xl border border-white/15 bg-gradient-to-b from-slate-900/40 to-slate-900/20 backdrop-blur text-white shadow-[0_15px_40px_rgba(0,0,0,0.3)] p-6 md:p-8 overflow-hidden hover:border-white/25 transition-all hover:-translate-y-0.5"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0" />

              <div className="flex items-center gap-3 mb-5">
                <span className="inline-grid place-items-center w-10 h-10 rounded-xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-400/30">
                  
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-semibold text-lg md:text-xl tracking-wide">{svc.title}</span>
              </div>

              <ul className="space-y-2.5 md:space-y-3.5">
                {svc.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <svg className="mt-1.5 shrink-0 text-cyan-300" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <p className="flex-1 text-white/90 leading-7 md:leading-8 text-base md:text-lg transition-colors group-hover/item:text-white">
                      {b}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5 group-hover:ring-white/10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
