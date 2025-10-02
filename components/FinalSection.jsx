"use client";

import dynamic from "next/dynamic";
import { FaCube } from "react-icons/fa";
import { motion } from "framer-motion";

const ModelViewer = dynamic(() => import("./ModelViewer"), { ssr: false });

export default function FinalSection() {
  return (
    <section id="demo" className="relative z-10 w-full py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 backdrop-blur px-4 py-2 text-white/90 w-fit"
        >
          <span className="grid place-items-center w-8 h-8 rounded-full bg-white/15 text-white">
            <FaCube size={16} />
          </span>
          <span className="font-gtproelium tracking-wide uppercase text-base md:text-lg">Demo & Pricing</span>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 text-white p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.35)] hover:border-white/25 transition-colors"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Standard Package</h3>
              <p className="mt-2 text-white/80">Everything to get started with climate monitoring and reporting.</p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Basic Climate Monitoring",
                  "AI Data Analysis",
                  "Early Warning System",
                  "Seasonal Reports",
                  "Community Dashboard",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-1.5 shrink-0 text-cyan-300" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17L4 12" />
                    </svg>
                    <span className="text-white/90 leading-7 md:leading-8 text-base md:text-lg">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <div className="inline-flex items-center rounded-full bg-indigo-600 text-white text-xs md:text-sm font-semibold px-3 py-1">26,560,000 EGP</div>
                <div className="mt-3 rounded-xl bg-indigo-400/20 ring-1 ring-indigo-400/30 text-white/90 px-4 py-4 md:px-6 md:py-5">
                  Core Equipment, AI & Data Systems, Infrastructure, Labor & Staff, Maintenance & Operations
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="h-[420px] md:h-[520px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden hover:border-white/20 transition-colors"
          >
            <ModelViewer src="/model.glb" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
