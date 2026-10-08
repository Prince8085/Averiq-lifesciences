"use client";

import { useState } from "react";
import {
  Sparkles,
  FlaskConical,
  Activity,
  ClipboardList,
  PackageCheck,
  CheckCircle2,
  AlertTriangle,
  Info,
} from "lucide-react";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

export function ProductTabs({ product }: { product: Product }) {
  const tabs: { key: string; label: string; icon: typeof Sparkles }[] = [
    { key: "overview", label: "Overview & Benefits", icon: Sparkles },
    ...(product.actives.length
      ? [{ key: "actives", label: "Key Ingredients", icon: FlaskConical }]
      : []),
    ...(product.why.length
      ? [{ key: "why", label: `Why ${product.name}`, icon: Activity }]
      : []),
    { key: "directions", label: "Directions & Safety", icon: ClipboardList },
    { key: "storage", label: "Storage & Pack", icon: PackageCheck },
  ];

  const [active, setActive] = useState<string>("overview");

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
        {active === "overview" && (
          <div>
            <h3 className="font-display text-lg font-bold text-primary-900">
              Product Overview
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              {product.overview}
            </p>

            <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-primary-100 bg-primary-50/60 p-4">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
              <p className="text-sm text-slate-700">
                <span className="font-bold text-primary-900">Indication: </span>
                {product.indication}
              </p>
            </div>

            <h4 className="mt-7 font-display text-base font-bold text-primary-900">
              Key Benefits
            </h4>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}

        {active === "actives" && (
          <div>
            <h3 className="font-display text-lg font-bold text-primary-900">
              Key Ingredients &amp; Their Role
            </h3>
            <ul className="mt-4 space-y-4">
              {product.actives.map((a) => (
                <li
                  key={a.name}
                  className="rounded-xl border border-slate-100 bg-slate-50/60 p-4"
                >
                  <p className="font-display text-sm font-bold text-primary-900">
                    {a.name}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {a.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {active === "why" && (
          <div>
            <h3 className="font-display text-lg font-bold text-primary-900">
              Why {product.name}?
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {product.why.map((w) => (
                <div
                  key={w.title}
                  className="rounded-xl border border-slate-100 bg-white p-4 shadow-soft"
                >
                  <p className="font-display text-sm font-bold text-primary-900">
                    {w.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {w.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {active === "directions" && (
          <div>
            <h3 className="font-display text-lg font-bold text-primary-900">
              Directions for Use
            </h3>
            <ul className="mt-4 space-y-3">
              {product.directions.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  {d}
                </li>
              ))}
            </ul>

            {product.safety.length > 0 && (
              <>
                <h4 className="mt-7 flex items-center gap-2 font-display text-base font-bold text-primary-900">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  Safety Information
                </h4>
                <ul className="mt-4 space-y-3">
                  {product.safety.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                      {s}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}

        {active === "storage" && (
          <div>
            <h3 className="font-display text-lg font-bold text-primary-900">
              Storage &amp; Packaging
            </h3>
            <dl className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-100 bg-white p-4">
                <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Dosage Form
                </dt>
                <dd className="mt-1 text-sm font-bold text-primary-900">
                  {product.form}
                </dd>
              </div>
              <div className="rounded-xl border border-slate-100 bg-white p-4">
                <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Pack Size
                </dt>
                <dd className="mt-1 text-sm font-bold text-primary-900">
                  {product.pack}
                </dd>
              </div>
              <div className="rounded-xl border border-slate-100 bg-white p-4">
                <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Prescription Status
                </dt>
                <dd className="mt-1 text-sm font-bold text-primary-900">
                  {product.rx ? "Rx — Schedule H" : "OTC"}
                </dd>
              </div>
            </dl>
            <p className="mt-5 flex items-start gap-2.5 text-sm text-slate-700">
              <PackageCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
              {product.storage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
