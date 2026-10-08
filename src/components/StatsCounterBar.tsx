import { Counter } from "@/components/Counter";

export function StatsCounterBar() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-950 via-primary-900 to-primary-950 py-16 text-white shadow-xl">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
          <div className="flex flex-col items-center p-4">
            <Counter value={10} suffix="+" label="Star Formulations" dark />
            <p className="mt-2 text-[11px] text-slate-400 text-center">
              Dermatology, Trichology &amp; Cosmeceuticals
            </p>
          </div>

          <div className="flex flex-col items-center p-4 pt-8 sm:pt-4">
            <Counter value={100} suffix="%" label="CoA Batch Verified" dark />
            <p className="mt-2 text-[11px] text-slate-400 text-center">
              Tested for Potency, Purity &amp; Stability
            </p>
          </div>

          <div className="flex flex-col items-center p-4 pt-8 sm:pt-4">
            <Counter value={4} suffix="" label="Therapeutic Divisions" dark />
            <p className="mt-2 text-[11px] text-slate-400 text-center">
              Targeted Formulations for Clear Segmenting
            </p>
          </div>

          <div className="flex flex-col items-center p-4 pt-8 sm:pt-4">
            <Counter value={100} suffix="%" label="WHO-GMP Standards" dark />
            <p className="mt-2 text-[11px] text-slate-400 text-center">
              World-Class Compliant Manufacturing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
