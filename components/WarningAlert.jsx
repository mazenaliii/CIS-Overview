"use client";

import { useMemo, useState } from "react";

const TITLES = [
  // Weather warnings
  "⚠ Warning: Sudden Weather Change Detected!",
  "🌧 Heavy Rain Expected in the Coming Hours.",
  "🌪 Severe Storm Approaching!",
  // Drone-related warnings
  "⚠ Alert: High Drone Activity in the Area.",
  "🚧 Warning: Possible Drone Malfunction Due to Strong Winds.",
  "🛑 Temporary Drone System Error.",
  // Environmental / Chemical warnings
  "☢ Alert: Increased Gas Concentration in the Air.",
  "🧪 Warning: Sudden Rise in Air Pollutants Detected.",
  "⚠ Possible Chemical Leak Near the Station."
];

export default function WarningAlert() {
  const [visible, setVisible] = useState(true);

  const title = useMemo(() => {
    const idx = Math.floor(Math.random() * TITLES.length);
    return TITLES[idx];
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[92%] sm:w-[560px]">
      <div className="relative rounded-xl border border-amber-400/40 bg-amber-500/10 backdrop-blur-md px-4 py-3 text-amber-100 shadow-lg ring-1 ring-amber-300/20">
        <div className="pr-10 text-sm sm:text-base font-semibold tracking-wide">
          {title}
        </div>
        <button
          type="button"
          aria-label="Close warning"
          className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-md text-amber-200/90 hover:text-white hover:bg-amber-400/20 transition"
          onClick={() => setVisible(false)}
        >
          <span className="text-lg leading-none">×</span>
        </button>
      </div>
    </div>
  );
}
