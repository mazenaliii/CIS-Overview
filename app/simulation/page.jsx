"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SimulationPage() {
  const [phase, setPhase] = useState("idle"); // idle -> receiving -> analyzing -> decision -> done
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [launched, setLaunched] = useState(false);
  const [direction, setDirection] = useState(null); // 'up' | 'down' | null
  const [controlMode, setControlMode] = useState("auto"); // 'auto' | 'manual'
  const [manualAction, setManualAction] = useState("hold"); // 'up' | 'down' | 'hold'
  const [runId, setRunId] = useState(0);
  const t1Ref = useRef(null);
  const t2Ref = useRef(null);
  const t3Ref = useRef(null);

  const canLaunch = useMemo(() => {
    if (humidity == null || temperature == null) return false;
    return humidity > 60 && temperature > 30;
  }, [humidity, temperature]);

  useEffect(() => {

    setPhase("receiving");

    const t1 = setTimeout(() => {
      setPhase("analyzing");
      const temp = Number((Math.random() * (45 - 20) + 20).toFixed(1));
      const hum = Number((Math.random() * (90 - 40) + 40).toFixed(1));
      setTemperature(temp);
      setHumidity(hum);
    }, 1400);
    t1Ref.current = t1;

    const t2 = setTimeout(() => {
      setPhase("decision");
      setLaunched(false);
      setDirection(null);
    }, 2400);
    t2Ref.current = t2;

    return () => {
      if (t1Ref.current) clearTimeout(t1Ref.current);
      if (t2Ref.current) clearTimeout(t2Ref.current);
      if (t3Ref.current) clearTimeout(t3Ref.current);
    };

  }, [runId]);

  const restart = () => {
    if (t1Ref.current) clearTimeout(t1Ref.current);
    if (t2Ref.current) clearTimeout(t2Ref.current);
    if (t3Ref.current) clearTimeout(t3Ref.current);
    setTemperature(null);
    setHumidity(null);
    setLaunched(false);
    setDirection(null);
    setPhase("idle");
    requestAnimationFrame(() => setRunId((v) => v + 1));
  };

  const acceptUpSuggestion = () => {

    if (t3Ref.current) clearTimeout(t3Ref.current);
    setControlMode("manual");
    setManualAction("up");
    setDirection("up");
    setLaunched(true);
    setPhase("done");
  };

  const declineSuggestion = () => {

    if (controlMode === "manual") {
      const dir = manualAction === "hold" ? null : manualAction;
      setDirection(dir);
      setLaunched(!!dir);
    } else {
      const dir = canLaunch ? "up" : null;
      setDirection(dir);
      setLaunched(!!dir);
    }
    setPhase("done");
  };

  return (
    <main className="relative min-h-screen w-full bg-black text-white">
      
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 20%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      <div className="w-full flex items-center justify-between px-6 md:px-10 pt-8">
        <a
          href="/"
          className="font-gtproelium font-extrabold tracking-wide text-xl md:text-2xl text-white/95"
        >
          CIS
        </a>
        <button
          onClick={restart}
          className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15 backdrop-blur-md transition-colors"
        >
          Rerun Simulation
        </button>
      </div>

      <section className="px-6 md:px-10 py-10 md:py-14 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-gtproelium text-3xl md:text-5xl font-extrabold tracking-wide text-center"
        >
          Atmospheric Adjustment Simulation
        </motion.h1>
        <p className="mt-3 text-center text-white/80 max-w-2xl mx-auto">
          Live emulation of satellite telemetry, weather analysis, and drone launch decisioning.
        </p>

        {phase === 'decision' && (
          <div className="mt-6 rounded-2xl bg-white/6 border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.35)] p-5 md:p-6 backdrop-blur-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-white/90 text-lg md:text-xl font-semibold">
                Make the drone go up?
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={acceptUpSuggestion}
                  className="rounded-full border border-white/30 bg-white/80 text-black px-4 py-2 text-sm hover:bg-white"
                >
                  Yes, go up
                </button>
                <button
                  onClick={declineSuggestion}
                  className="rounded-full border border-white/30 bg-white/10 text-white/90 px-4 py-2 text-sm hover:bg-white/15"
                >
                  No, continue
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 rounded-2xl bg-white/5 border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.35)] p-5 md:p-6 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-white/90 font-semibold">Controls</div>
              <div className="text-sm text-white/70">Choose automatic decisioning or manual override</div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 p-1">
                <button
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${controlMode === 'auto' ? 'bg-white/80 text-black' : 'text-white/85 hover:bg-white/15'}`}
                  onClick={() => setControlMode('auto')}
                >
                  Auto
                </button>
                <button
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${controlMode === 'manual' ? 'bg-white/80 text-black' : 'text-white/85 hover:bg-white/15'}`}
                  onClick={() => setControlMode('manual')}
                >
                  Manual
                </button>
              </div>
              {controlMode === 'manual' && (
                <div className="inline-flex rounded-full border border-white/20 bg-white/10 p-1">
                  <button
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors ${manualAction === 'up' ? 'bg-white/80 text-black' : 'text-white/85 hover:bg-white/15'}`}
                    onClick={() => setManualAction('up')}
                  >
                    Go Up
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors ${manualAction === 'hold' ? 'bg-white/80 text-black' : 'text-white/85 hover:bg-white/15'}`}
                    onClick={() => setManualAction('hold')}
                  >
                    Hold
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors ${manualAction === 'down' ? 'bg-white/80 text-black' : 'text-white/85 hover:bg-white/15'}`}
                    onClick={() => setManualAction('down')}
                  >
                    Go Down
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          <StatusCard
            title="Receiving Data"
            active={phase === "receiving"}
            done={["analyzing", "decision", "done"].includes(phase)}
            subtitle="Ingesting satellite stream"
          />
          
          <StatusCard
            title="Analyzing Weather"
            active={phase === "analyzing"}
            done={["decision", "done"].includes(phase)}
            subtitle="Deriving key atmospheric signals"
          />
          
          <StatusCard
            title="Decision"
            active={phase === "decision"}
            done={["done"].includes(phase)}
            subtitle="Evaluating thresholds"
          />
        </div>

        <div className="mt-8 rounded-2xl bg-white/5 border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.35)] p-6 md:p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="flex-1">
              <h2 className="text-white/90 text-lg md:text-xl font-semibold">Telemetry</h2>
              <div className="mt-3 grid grid-cols-2 gap-4 max-w-md">
                <Metric label="Temperature" value={temperature != null ? `${temperature.toFixed(1)}°C` : "—"} />
                <Metric label="Humidity" value={humidity != null ? `${humidity.toFixed(1)}%` : "—"} />
              </div>
            </div>

            <div className="flex-1 w-full">
              <h2 className="text-white/90 text-lg md:text-xl font-semibold">Progress</h2>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-white/70"
                  initial={{ width: "0%" }}
                  animate={{ width: phase === "receiving" ? "33%" : phase === "analyzing" ? "66%" : phase === "decision" ? "85%" : "100%" }}
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                />
              </div>
              <div className="mt-2 text-sm text-white/70">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={phase}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                  >
                    {phase === "receiving" && "Receiving satellite data..."}
                    {phase === "analyzing" && "Analyzing atmospheric signals..."}
                    {phase === "decision" && "Awaiting your decision..."}
                    {phase === "done" && (
                      controlMode === 'manual'
                        ? direction === 'up'
                          ? 'Manual override: drones ascending.'
                          : direction === 'down'
                          ? 'Manual override: drones descending.'
                          : 'Manual override: hold.'
                        : direction === 'up'
                        ? 'Conditions favorable: drones launched (ascending).'
                        : 'Conditions not met: hold launch.'
                    )}
                    {phase === "idle" && "Waiting to start..."}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-white/6 border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.35)] p-6 md:p-8 backdrop-blur-md min-h-48 grid place-items-center">
          <AnimatePresence>
            {phase !== "idle" && (
              <motion.div
                key={launched ? `launched-${direction ?? 'hold'}` : "hold"}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                {launched ? (
                  <>
                    <div className="text-2xl md:text-3xl font-semibold text-white/95">
                      {direction === 'up' ? 'Launching drones to adjust cloud composition (ascending)...' : 'Launching drones to adjust cloud composition (descending)...'}
                    </div>
                    <motion.div
                      className="mt-5 flex gap-3 justify-center"
                      initial="hidden"
                      animate="show"
                      variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.15 } },
                      }}
                    >
                      {[0, 1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="w-3 h-3 rounded-full bg-white/80"
                          variants={{
                            hidden: { y: 0, opacity: 0 },
                            show: direction === 'down'
                              ? {
                                  y: [0, 10, 0],
                                  opacity: 1,
                                  transition: { duration: 1.2, repeat: Infinity, delay: i * 0.1 },
                                }
                              : {
                                  y: [0, -10, 0],
                                  opacity: 1,
                                  transition: { duration: 1.2, repeat: Infinity, delay: i * 0.1 },
                                },
                          }}
                        />
                      ))}
                    </motion.div>
                  </>
                ) : (
                  <div className="text-2xl md:text-3xl font-semibold text-white/90">Launch conditions not satisfied. Monitoring...</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

function StatusCard({ title, subtitle, active, done }) {
  return (
    <div
      className={[
        "rounded-2xl p-5 md:p-6 border shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-colors",
        done ? "bg-white/10 border-white/20" : active ? "bg-white/8 border-white/20" : "bg-white/5 border-white/15",
      ].join(" ")}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-white/95 font-semibold">{title}</div>
          <div className="text-sm text-white/70">{subtitle}</div>
        </div>
        <div
          className={[
            "w-2.5 h-2.5 rounded-full",
            done ? "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" : active ? "bg-amber-300 shadow-[0_0_12px_rgba(252,211,77,0.5)]" : "bg-white/40",
          ].join(" ")}
        />
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-lg text-white/95">{value}</div>
    </div>
  );
}
