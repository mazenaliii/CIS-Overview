"use client";

import LightRays from "./LightRays";
import { motion } from "framer-motion";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative z-10 w-full min-h-screen py-16 md:py-20 overflow-hidden">
      
      <LightRays
        className="absolute inset-0 -z-10 pointer-events-none"
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={0.6}
        lightSpread={1.2}
        rayLength={1.8}
        pulsating={true}
        fadeDistance={1.2}
        saturation={1}
        followMouse={true}
        mouseInfluence={0.15}
        noiseAmount={0.05}
        distortion={0.05}
      />
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 backdrop-blur px-4 py-2 text-white/90"
        >
          <span className="font-gtproelium tracking-wide uppercase text-base md:text-lg">Case Studies</span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-8 space-y-6 md:space-y-8 max-w-4xl"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:border-white/20 transition-colors">
            <h3 className="text-2xl md:text-3xl font-semibold">Alexandria</h3>
            <p className="mt-3 text-white/90 leading-7 md:leading-8 text-base md:text-lg">
              Seasonal irregularity, sea‑level rise, and hotter winters endanger the Nile Delta’s food security and cultural heritage.
            </p>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:border-white/20 transition-colors">
            <h3 className="text-2xl md:text-3xl font-semibold">North Pole</h3>
            <ul className="mt-3 space-y-2 text-white/90 leading-7 md:leading-8 text-base md:text-lg list-disc pl-5">
              <li>The Arctic is warming over twice the global average (Arctic Amplification).</li>
              <li>NASA MODIS and ICESat-2 show decreasing summer sea ice extent and thickness.</li>
              <li>Permafrost thaw destabilizes infrastructure and releases greenhouse gases.</li>
              <li>Early warnings here inform risks that cascade to distant urban areas.</li>
            </ul>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:border-white/20 transition-colors">
            <h3 className="text-2xl md:text-3xl font-semibold">South Pole</h3>
            <ul className="mt-3 space-y-2 text-white/90 leading-7 md:leading-8 text-base md:text-lg list-disc pl-5">
              <li>The Antarctic contains the largest ice mass on Earth.</li>
              <li>GRACE‑FO and ICESat‑2 confirm accelerating mass loss from WAIS.</li>
              <li>Thinning ice shelves reduce ability to hold back inland glaciers.</li>
              <li>Monitoring with NASA satellites guides long‑term risk design for coasts.</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
