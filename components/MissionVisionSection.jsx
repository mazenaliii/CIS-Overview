"use client";

import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVisionSection() {
  return (
    <div className="relative z-10 w-full flex flex-col overflow-hidden h-screen">
      <section id="mission" className="relative z-20 w-full flex items-start pt-16 md:pt-24">
        <div className="container mx-auto px-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-300/25 bg-blue-500/10 backdrop-blur px-4 py-2 text-blue-200">
            <span className="grid place-items-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-100">
              <FaBullseye size={16} />
            </span>
            <span className="font-gtproelium tracking-wide uppercase text-base md:text-lg">Mission</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative z-20 mt-6 max-w-3xl mr-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
          >
            <p className="text-white/90 text-base md:text-lg leading-7 md:leading-8 break-words">
              “Our mission is to develop advanced climate integration stations powered by AI and Earth observation data, designed to monitor, predict, and gradually adjust local climate conditions. Each station is customized to its city’s needs, reducing climate–related risks, safeguarding agriculture, infrastructure, and public health, while aligning with global sustainability goals.”
            </p>
          </motion.div>
        </div>
      </section>

      <section id="vision" className="relative z-20 w-full flex items-start pt-16 md:pt-24">
        <div className="container mx-auto px-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-300/25 bg-blue-500/10 backdrop-blur px-4 py-2 text-blue-200">
            <span className="grid place-items-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-100">
              <FaEye size={16} />
            </span>
            <span className="font-gtproelium tracking-wide uppercase text-base md:text-lg">Vision</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mt-6 max-w-3xl mr-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
          >
            <p className="text-white/90 text-base md:text-lg leading-7 md:leading-8 break-words">
              “To restore the natural balance of seasons and create healthier, more resilient cities that protect people, ecosystems, and future generations.”
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
