"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const SimpleScrollStackItem = ({ children, className = "" }) => (
  <div className={`rounded-[32px] border border-white/10 bg-white/5 backdrop-blur p-8 md:p-12 text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)] ${className}`.trim()}>
    {children}
  </div>
);

export default function SimpleScrollStack({
  children,
  top = "20vh",
  gap = 100,
  baseScale = 0.9,
  itemScale = 0.04,
}) {
  const items = React.Children.toArray(children);

  return (
    <div className="relative w-full">
      {items.map((child, i) => {
        const sectionRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: sectionRef,
          offset: ["start end", "end start"],
        });
        const scale = useTransform(scrollYProgress, [0, 1], [1, baseScale + i * itemScale]);
        const y = useTransform(scrollYProgress, [0, 1], [0, i * 20]);

        return (
          <section
            key={i}
            ref={sectionRef}
            className="relative"
            style={{ height: `calc(100vh + ${gap}px)` }}
          >
            <motion.div
              className="sticky"
              style={{ top, scale, y, transformOrigin: "top center" }}
            >
              {child}
            </motion.div>
          </section>
        );
      })}
    </div>
  );
}
