"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaXTwitter, FaGlobe } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full mt-16 md:mt-24">
      
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-6 md:px-10 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 py-2 text-white/90">
              <span className="font-gtproelium tracking-wide uppercase">CIS</span>
            </div>
            <p className="mt-4 text-white/80 text-sm md:text-base max-w-2xl">
              This site was made by <span className="font-semibold text-white">Mazen Ali</span>, from <span className="font-semibold text-white">The 6 Pyramids</span> team.
            </p>
            <p className="mt-2 text-white/60 text-sm">© {new Date().getFullYear()} Climate Integration Stations. All rights reserved.</p>
          </div>

          <div className="flex md:justify-end">
            <div className="space-y-3">
              <div className="text-white/80 text-sm font-semibold uppercase tracking-wide">Navigate</div>
              <nav className="grid gap-2 text-sm">
                <a href="#problem" className="text-white/70 hover:text-white">Problem</a>
                <a href="#mission" className="text-white/70 hover:text-white">Mission</a>
                <a href="#services" className="text-white/70 hover:text-white">Services</a>
                <a href="#case-studies" className="text-white/70 hover:text-white">Case Studies</a>
                <a href="#benefits" className="text-white/70 hover:text-white">Benefits</a>
                <a href="#demo" className="text-white/70 hover:text-white">Demo</a>
              </nav>

              <div className="pt-3 flex items-center gap-3">
                <a href="#" aria-label="Website" className="grid place-items-center w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10">
                  <FaGlobe size={16} />
                </a>
                <a href="https://github.com/mazenaliii" aria-label="GitHub" className="grid place-items-center w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10">
                  <FaGithub size={16} />
                </a>
                <a href="https://www.linkedin.com/in/mazenalihassan/" aria-label="X" className="grid place-items-center w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10">
                  <FaLinkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
