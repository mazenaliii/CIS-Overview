"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import dynamic from "next/dynamic";
import NavBar from "../components/NavBar";
import AboutSection from "../components/AboutSection";
import MissionVisionSection from "../components/MissionVisionSection";
import ProblemSection from "../components/ProblemSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import ServicesSection from "../components/ServicesSection";
import BenefitsSection from "../components/BenefitsSection";
import FinalSection from "../components/FinalSection";
import Footer from "../components/Footer";

const EarthScene = dynamic(() => import("../components/EarthScene"), {
  ssr: false,
});

export default function Home() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress: heroProgressMV } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothMV = useSpring(heroProgressMV, {
    stiffness: 90,
    damping: 26,
    mass: 0.7,
  });

  const [heroProgress, setHeroProgress] = useState(0);
  useMotionValueEvent(smoothMV, "change", (v) => {
    setHeroProgress(Math.max(0, Math.min(1, v)));
  });

  return (
    <main ref={containerRef} className="relative w-full min-h-[200vh] bg-black">
      <NavBar />
      
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ opacity: 1 - heroProgress }}
      >
        <EarthScene progress={heroProgress} />
      </motion.div>

      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 20%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0.7) 100%)",
          opacity: 1 - heroProgress * 0.6,
        }}
      />

      <section ref={heroRef} className="relative z-10 h-screen w-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="font-gtproelium text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Climate Integration Stations
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/85 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
            A Global Solution for Seasonal Balance
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#about');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-white/95 backdrop-blur-md hover:bg-white/15 transition-colors"
            >
              <span className="text-sm md:text-base">Learn more</span>
            </a>
          </div>
        </motion.div>
      </section>

      <AboutSection />
      <ProblemSection />
      <CaseStudiesSection />
      <MissionVisionSection />
      <ServicesSection />
      <BenefitsSection />
      <FinalSection />
      <Footer />
    </main>
  );
}
