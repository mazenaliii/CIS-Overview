"use client";

import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";

export default function ProblemSection() {
  return (
    <section id="problem" className="relative z-10 w-full h-screen flex items-center overflow-hidden">
      
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('/problems.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(23,37,84,0.85) 0%, rgba(23,37,84,0.9) 50%, rgba(17,24,39,0.95) 100%)",
        }}
      />
      
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0) 60%)",
        }}
      />

      <div className="container mx-auto px-6">
        
        <div className="inline-flex items-center gap-3 rounded-full bg-blue-600 text-white px-5 py-2 shadow-lg">
          <FaExclamationTriangle className="opacity-90" size={16} />
          <h2 className="font-gtproelium tracking-wide uppercase text-lg md:text-2xl">
            Problem Statement
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-6 max-w-3xl mr-auto space-y-3"
        >
          <p className="text-white font-medium text-lg md:text-xl leading-8 rounded-2xl bg-blue-700/70 px-5 py-3">
            Seasonal contraction and irregular weather patterns are damaging agriculture and food systems.
          </p>
          <p className="text-white font-medium text-lg md:text-xl leading-8 rounded-2xl bg-blue-700/70 px-5 py-3">
            Cities like Alexandria, Arctic, and Antarctica face existential threats from floods, rising seas, and permafrost melting.
          </p>
          <p className="text-white font-medium text-lg md:text-xl leading-8 rounded-2xl bg-blue-700/70 px-5 py-3">
            Current adaptation methods are insufficient and reactive rather than preventive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
