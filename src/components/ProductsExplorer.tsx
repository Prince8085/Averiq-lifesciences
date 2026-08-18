"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { categories, forms, products, type Category, type Form } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { cn } from "@/lib/utils";

export function ProductsExplorer() {
  const params = useSearchParams();
  const initialCategory = (params.get("category") as Category | null) ?? "All";
  const [category, setCategory] = useState<Category | "All">(
    categories.includes(initialCategory as Category) ? initialCategory : "All"
  );
  const [form, setForm] = useState<Form | "All">("All");
  const [rx, setRx] = useState<"all" | "rx" | "otc">("all");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (form !== "All" && p.form !== form) return false;
      if (rx === "rx" && !p.rx) return false;
      if (rx === "otc" && p.rx) return false;
      if (!q) return true;
      const hay = `${p.name} ${p.generic} ${p.tagline} ${p.indications.join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }, [category, form, rx, query]);

  const activeFilters = (category !== "All" ? 1 : 0) + (form !== "All" ? 1 : 0) + (rx !== "all" ? 1 : 0);

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Search + reset */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search brand, active ingredient (e.g. Niacinamide, Itraconazole) or indication (Anti-Acne, Hair Fall)..."
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-10 text-sm shadow-soft outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:text-slate-600"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          {(activeFilters > 0 || query) && (
            <button
              onClick={() => {
                setCategory("All");
                setForm("All");
                setRx("all");
                setQuery("");
              }}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 hover:text-primary-700"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Reset ({activeFilters})
            </button>
          )}
        </div>

        {/* Category pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                category === c
                  ? "border-primary-600 bg-primary-600 text-white shadow-md shadow-primary-600/25"
                  : "border-slate-200 bg-white text-slate-600 hover:border-primary-300 hover:text-primary-700"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Form + Rx */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-1.5">
            {(["All", ...forms] as const).map((f) => (
              <button
                key={f}
                onClick={() => setForm(f)}
                className={cn(
                  "rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all",
                  form === f
                    ? "border-primary-600 bg-primary-50 text-primary-700 ring-1 ring-primary-600"
                    : "border-slate-200 bg-white text-slate-500 hover:text-primary-700"
                )}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="ml-auto flex gap-1.5">
            {(
              [
                ["all", "All"],
                ["rx", "Rx (Prescription)"],
                ["otc", "OTC"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setRx(key)}
                className={cn(
                  "rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all",
                  rx === key
                    ? "border-accent-600 bg-accent-50 text-accent-700 ring-1 ring-accent-600"
                    : "border-slate-200 bg-white text-slate-500 hover:text-accent-700"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <p className="mt-8 text-sm font-semibold text-slate-500">
          {results.length} formulation{results.length !== 1 ? "s" : ""} found
        </p>
        {results.length > 0 ? (
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-14 text-center">
            <p className="font-display text-lg font-bold text-primary-900">
              No formulations match your filters
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Try widening the search, or contact us — our portfolio is expanding every quarter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
