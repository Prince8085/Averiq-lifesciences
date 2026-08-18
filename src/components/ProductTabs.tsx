"use client";

import { useState } from "react";
import {
  Stethoscope,
  Activity,
  ClipboardList,
  PackageCheck,
  CheckCircle2,
} from "lucide-react";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

const tabs = [
  { key: "indications", label: "Indications", icon: Stethoscope },
  { key: "moa", label: "Mechanism of Action", icon: Activity },
  { key: "directions", label: "Directions & Precautions", icon: ClipboardList },
  { key: "regulatory", label: "Packaging & Regulatory", icon: PackageCheck },
] as const;

export function ProductTabs({ product }: { product: Product }) {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("indications");

  return (
    <div className="mt-12">
      <div className="flex flex-wrap gap-2 border-b border-slate-200">
        {tabs.map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={cn(
                "inline-flex items-center gap-2 rounded-t-xl border-b-2 px-4 py-3 text-sm font-bold transition-colors",
                active === t.key
                  ? "border-primary-600 bg-primary-50/60 text-primary-700"
                  : "border-transparent text-slate-500 hover:text-primary-700"
              )}
            >
              <Icon className="h-4 w-4" />
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft sm:p-8">
        {active === "indications" && (
          <div>
            <h3 className="font-display text-lg font-bold text-primary-900">
              Therapeutic Indications & Clinical Uses
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.indications.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        )}
        {active === "moa" && (
          <div>
            <h3 className="font-display text-lg font-bold text-primary-900">
              Mechanism of Action (Pharmacology)
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">{product.moa}</p>
          </div>
        )}
        {active === "directions" && (
          <div>
            <h3 className="font-display text-lg font-bold text-primary-900">
              Direction for Use & Precautions
            </h3>
            <ul className="mt-4 space-y-3">
              {product.directions.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        )}
        {active === "regulatory" && (
          <div>
            <h3 className="font-display text-lg font-bold text-primary-900">
              Packaging & Regulatory Information
            </h3>
            <ul className="mt-4 space-y-3">
              {product.regulatory.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
