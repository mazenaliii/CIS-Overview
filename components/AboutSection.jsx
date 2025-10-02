"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FaGlobeAfrica, FaLeaf, FaBolt, FaChevronDown, FaBullseye, FaEye, FaInfoCircle } from "react-icons/fa";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      <section
        ref={sectionRef}
        id="about"
        className="relative z-10 w-full h-screen flex items-center overflow-hidden"
      >
        
        <motion.div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            opacity: bgOpacity,
            backgroundImage: "url('/climate-change.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        
        <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.95) 100%)",
          }}
        />

        <div className="container mx-auto px-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-300/25 bg-emerald-500/10 backdrop-blur px-4 py-2 text-emerald-200">
            <span className="grid place-items-center w-8 h-8 rounded-full bg-emerald-400/20 text-emerald-200">
              <FaInfoCircle size={16} />
            </span>
            <span className="font-gtproelium tracking-wide uppercase text-base md:text-lg">
              About
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mt-6 max-w-3xl mr-auto rounded-xl border border-emerald-300/15 bg-[#0b0b0b]/90 p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          >
            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-7 md:leading-8 break-words">
              Climate change is disrupting traditional seasonal cycles
              worldwide. In countries like Egypt, September once marked the
              arrival of cool autumn weather, but now the month feels like peak
              summer. These shifts, known as "seasonal contraction," create
              multiple cascading effects: crops fail, water cycles are
              disrupted, human health deteriorates, and infrastructure becomes
              vulnerable. This research addresses the urgent question: how can
              we restore seasonal balance in urban and rural environments to
              protect both people and the planet?
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
