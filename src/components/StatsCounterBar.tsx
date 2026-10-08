import { Counter } from "@/components/Counter";

export function StatsCounterBar() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white shadow-xl">
      {/* Futuristic Scientist Background Image — 100% Opacity Vivid */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="/media/generated/futuristic-scientist-at-microscope.png"
          alt="Averiq Lifesciences — Scientific Microscopy Background"
          className="h-full w-full object-cover opacity-100 scale-100"
        />
      </div>

      {/* Content — Frosted Glass Cards for 100% Text Clarity */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-950/85 p-6 shadow-xl backdrop-blur-md transition-all hover:border-slate-500">
            <Counter value={10} suffix="+" label="Star Formulations" dark />
            <p className="mt-2 text-xs text-slate-300 text-center font-medium">
              Dermatology, Trichology &amp; Cosmeceuticals
            </p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-950/85 p-6 shadow-xl backdrop-blur-md transition-all hover:border-slate-500">
            <Counter value={100} suffix="%" label="CoA Batch Verified" dark />
            <p className="mt-2 text-xs text-slate-300 text-center font-medium">
              Tested for Potency, Purity &amp; Stability
            </p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-950/85 p-6 shadow-xl backdrop-blur-md transition-all hover:border-slate-500">
            <Counter value={4} suffix="" label="Therapeutic Divisions" dark />
            <p className="mt-2 text-xs text-slate-300 text-center font-medium">
              Targeted Formulations for Clear Segmenting
            </p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-950/85 p-6 shadow-xl backdrop-blur-md transition-all hover:border-slate-500">
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
