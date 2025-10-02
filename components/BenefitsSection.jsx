"use client";

import { FaHandsHelping, FaGlobeAfrica } from "react-icons/fa";
import { motion } from "framer-motion";

export default function BenefitsSection() {
  const benefits = [
    "Protect agriculture and food security",
    "Safeguard urban infrastructure and heritage",
    "Enhance human health and resilience",
    "Reduce disaster costs",
  ];

  const sdgs = [
    "1 (No Poverty)",
    "2 (Zero Hunger)",
    "3 (Health)",
    "7 (Energy)",
    "11 (Cities)",
    "13 (Climate)",
    "15 (Land)",
  ];

  return (
    <section id="benefits" className="relative z-10 w-full py-16 md:py-24 overflow-hidden">
      
      <div className="pointer-events-none absolute top-10 -right-24 w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -left-24 w-80 h-80 rounded-full bg-emerald-400/15 blur-3xl" />

      <div className="container mx-auto px-6 md:px-10">
        
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-3 rounded-full border border-emerald-300/25 bg-emerald-500/10 backdrop-blur px-4 py-2 text-emerald-200"
        >
          <span className="grid place-items-center w-8 h-8 rounded-full bg-emerald-400/20 text-emerald-100">
            <FaGlobeAfrica size={16} />
          </span>
          <span className="font-gtproelium tracking-wide uppercase text-base md:text-lg">
            Expected Benefits & SDG Alignment
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="relative rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 text-white shadow-[0_15px_40px_rgba(0,0,0,0.3)] p-6 md:p-8 overflow-hidden hover:border-white/25 transition-colors"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-400/0 via-emerald-400/50 to-emerald-400/0" />
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 text-emerald-200 ring-1 ring-emerald-300/25 px-4 py-1.5">
              <FaHandsHelping className="opacity-90" size={14} />
              <span className="font-semibold tracking-wide">Benefits</span>
            </div>
            <ul className="mt-4 space-y-3 md:space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <svg className="mt-1.5 shrink-0 text-emerald-300" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <p className="flex-1 text-white/90 leading-7 md:leading-8 text-base md:text-lg transition-colors group-hover:text-white">
                    {b}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="relative rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 text-white shadow-[0_15px_40px_rgba(0,0,0,0.3)] p-6 md:p-8 overflow-hidden hover:border-white/25 transition-colors"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0" />
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/25 px-4 py-1.5">
              <span className="font-semibold tracking-wide">SDG Linkage</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {sdgs.map((s, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full bg-white/10 text-white/90 ring-1 ring-white/15 px-3 py-1.5 text-sm md:text-base hover:bg-white/15 hover:text-white transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
