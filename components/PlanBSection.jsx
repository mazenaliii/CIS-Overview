export default function PlanBSection() {
  const scenarios = [
    {
      label: "First Case",
      title: "Mid-air Retrieval",
      description:
        "When a drone malfunctions while airborne, a fleet of dedicated backup drones is dispatched to intercept and recover the failing unit before it becomes a hazard.",
      support:
        "These responders are pre-assigned to individual drones, ensuring there is always a handler ready to keep operations orderly.",
    },
    {
      label: "Second Case",
      title: "Air Purification",
      description:
        "If a malfunction releases additional materials into the atmosphere, specialized drones immediately enter the zone to purify the air and stabilize conditions.",
      support:
        "They neutralize contaminants and rebalance atmospheric composition, restoring safe conditions for people and equipment nearby.",
    },
    {
      label: "Third Case",
      title: "Continuity Deployment",
      description:
        "If a malfunction prevents release altogether, replacement drones equipped with sun-reflective agents are deployed to deliver the planned intervention.",
      support:
        "This ensures the operation still meets climate objectives even when the original aircraft cannot complete its task.",
    },
  ];

  return (
    <section id="plan-b" className="relative z-10 w-full py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-900/10 via-slate-900/20 to-black" aria-hidden />
      <div className="container mx-auto px-6 md:px-10">
        <div className="inline-flex items-center gap-3 rounded-full border border-purple-300/25 bg-purple-500/10 backdrop-blur px-4 py-2 text-purple-200">
          <span className="grid place-items-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-100 font-semibold">
            B
          </span>
          <span className="font-gtproelium tracking-wide uppercase text-base md:text-lg">Plan B Safety Net</span>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-1 space-y-6">
            <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 text-white shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
              <p className="text-white/90 text-base md:text-lg leading-7 md:leading-8">
                Plan B is a dedicated backup network of drones that mirrors the primary fleet. It can assume control within seconds, giving every mission a built-in contingency regardless of the failure mode.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-purple-500/20 to-purple-500/5 backdrop-blur p-6 md:p-8 text-white shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
              <h3 className="text-xl md:text-2xl font-semibold">Summary</h3>
              <p className="mt-3 text-white/85 text-base md:text-lg leading-7 md:leading-8">
                The entire function of Plan B is to act as a safety net that sustains performance under any circumstance. Retrieval, purification, and replacement teams work in concert so operations never halt, even when multiple failures occur.
              </p>
            </article>
          </div>

          <div className="lg:col-span-2 grid gap-6 md:gap-8">
            {scenarios.map((scenario) => (
              <article
                key={scenario.label}
                className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur p-6 md:p-8 text-white shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center gap-3 text-sm uppercase tracking-wide text-white/60">
                  <span className="inline-flex items-center justify-center rounded-full border border-white/20 px-3 py-1 text-xs font-semibold">
                    {scenario.label}
                  </span>
                  <span className="text-white/80">Plan B Scenario</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{scenario.title}</h3>
                <p className="mt-3 text-white/90 leading-7 md:leading-8 text-base md:text-lg">{scenario.description}</p>
                <p className="mt-2 text-white/70 leading-7 md:leading-8 text-sm md:text-base">{scenario.support}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
