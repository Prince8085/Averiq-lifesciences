import { Counter } from "@/components/Counter";

export function StatsCounterBar() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white shadow-xl">
      {/* Background Image: 100% Opacity, right-aligned so scientist is 100% unblocked */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/media/generated/futuristic-scientist-at-microscope.png"
          alt="Averiq Lifesciences — Scientific Microscopy Background"
          className="h-full w-full object-cover object-right opacity-100 scale-100"
        />
        {/* Soft left gradient shadow so left text is readable while right side scientist is 100% clear & unblocked */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-slate-950 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 backdrop-blur-xs">
            <Counter value={10} suffix="+" label="Star Formulations" dark />
            <p className="mt-1.5 text-xs text-slate-300 text-center font-medium">
              Dermatology, Trichology &amp; Cosmeceuticals
            </p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 backdrop-blur-xs">
            <Counter value={100} suffix="%" label="CoA Batch Verified" dark />
            <p className="mt-1.5 text-xs text-slate-300 text-center font-medium">
              Tested for Potency, Purity &amp; Stability
            </p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 backdrop-blur-xs">
            <Counter value={4} suffix="" label="Therapeutic Divisions" dark />
            <p className="mt-1.5 text-xs text-slate-300 text-center font-medium">
              Targeted Formulations for Clear Segmenting
            </p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 backdrop-blur-xs">
            <Counter value={100} suffix="%" label="WHO-GMP Standards" dark />
            <p className="mt-1.5 text-xs text-slate-300 text-center font-medium">
              World-Class Compliant Manufacturing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
