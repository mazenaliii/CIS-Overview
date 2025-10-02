"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onDocClick, { passive: true });
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const smoothAnchor = (e, selector) => {
    e.preventDefault();
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-20 w-full">
      <div className="mx-auto flex items-center gap-6 md:gap-8 rounded-full bg-white/5 backdrop-blur-md border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.35)] px-5 md:px-8 py-3 text-white w-[92vw] max-w-[900px]">
        
        <a
          href="#"
          onClick={(e) => smoothAnchor(e, "body")}
          className="font-gtproelium font-extrabold tracking-wide text-lg md:text-xl select-none"
        >
          CIS
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" onClick={(e) => smoothAnchor(e, "body")} className="hover:text-white/90 text-white/80">HOME</a>
          <a href="#problem" onClick={(e) => smoothAnchor(e, "#problem")} className="hover:text-white/90 text-white/80">PROBLEM</a>
          <a href="#mission" onClick={(e) => smoothAnchor(e, "#mission")} className="hover:text-white/90 text-white/80">MISSION</a>
          <a href="#services" onClick={(e) => smoothAnchor(e, "#services")} className="hover:text-white/90 text-white/80">SERVICES</a>
          <a href="#case-studies" onClick={(e) => smoothAnchor(e, "#case-studies")} className="hover:text-white/90 text-white/80">CASE STUDIES</a>
          <a href="#benefits" onClick={(e) => smoothAnchor(e, "#benefits")} className="hover:text-white/90 text-white/80">BENEFITS</a>
          <a href="#demo" onClick={(e) => smoothAnchor(e, "#demo")} className="hover:text-white/90 text-white/80">DEMO</a>
        </nav>

        <button
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="ml-auto grid place-items-center w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:bg-white/15 transition-colors md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <FaBars className="text-white/90" size={14} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden transition-[max-height,opacity] duration-300 ease-out overflow-hidden mx-auto w-[92vw] max-w-[900px] ${open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="mt-2 rounded-2xl bg-white/6 backdrop-blur-md border border-white/15 text-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.35)] overflow-y-auto max-h-[68vh]">
          <a href="#" onClick={(e) => smoothAnchor(e, "body")} className="block px-2 py-2 text-sm hover:text-white">HOME</a>
          <a href="#problem" onClick={(e) => smoothAnchor(e, "#problem")} className="block px-2 py-2 text-sm hover:text-white">PROBLEM</a>
          <a href="#mission" onClick={(e) => smoothAnchor(e, "#mission")} className="block px-2 py-2 text-sm hover:text-white">MISSION</a>
          <a href="#services" onClick={(e) => smoothAnchor(e, "#services")} className="block px-2 py-2 text-sm hover:text-white">SERVICES</a>
          <a href="#case-studies" onClick={(e) => smoothAnchor(e, "#case-studies")} className="block px-2 py-2 text-sm hover:text-white">CASE STUDIES</a>
          <a href="#benefits" onClick={(e) => smoothAnchor(e, "#benefits")} className="block px-2 py-2 text-sm hover:text-white">BENEFITS</a>
          <a href="#demo" onClick={(e) => smoothAnchor(e, "#demo")} className="block px-2 py-2 text-sm hover:text-white">DEMO</a>
        </div>
      </div>
    </div>
  );
}
