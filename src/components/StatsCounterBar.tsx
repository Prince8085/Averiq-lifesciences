import { Counter } from "@/components/Counter";

export function StatsCounterBar() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white shadow-xl">
      {/* Subtle Background Image — Positioned clean & subtle */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/media/generated/futuristic-scientist-at-microscope.png"
          alt="Scientific Microscopy Background"
          className="h-full w-full object-cover object-right-bottom opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
          <div className="flex flex-col items-center p-4">
            <Counter value={10} suffix="+" label="Star Formulations" dark />
            <p className="mt-2 text-xs text-slate-300 text-center font-medium">
              Dermatology, Trichology &amp; Cosmeceuticals
            </p>
          </div>

          <div className="flex flex-col items-center p-4 pt-8 sm:pt-4">
            <Counter value={100} suffix="%" label="CoA Batch Verified" dark />
            <p className="mt-2 text-xs text-slate-300 text-center font-medium">
              Tested for Potency, Purity &amp; Stability
            </p>
          </div>

          <div className="flex flex-col items-center p-4 pt-8 sm:pt-4">
            <Counter value={4} suffix="" label="Therapeutic Divisions" dark />
            <p className="mt-2 text-xs text-slate-300 text-center font-medium">
              Targeted Formulations for Clear Segmenting
            </p>
          </div>

          <div className="flex flex-col items-center p-4 pt-8 sm:pt-4">
            <Counter value={100} suffix="%" label="WHO-GMP Standards" dark />
            <p className="mt-2 text-xs text-slate-300 text-center font-medium">
              World-Class Compliant Manufacturing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
