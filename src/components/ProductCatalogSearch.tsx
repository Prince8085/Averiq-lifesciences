"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight, Filter, X } from "lucide-react";
import { products, categories } from "@/data/products";
import { ProductImage } from "@/components/ProductImage";

export function ProductCatalogSearch() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.generic.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.form.toLowerCase().includes(q) ||
        p.actives.some((a) => a.name.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* Search & Category Filter Header Controls */}
      <div className="rounded-2xl border border-slate-100 bg-white p-4 sm:p-6 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by brand name, ingredient (e.g. Salicylic, Biotin, Niacinamide)..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-10 text-sm font-medium text-slate-800 placeholder-slate-400 transition-colors focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-500/10"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
              <Filter className="h-3.5 w-3.5" /> Category:
            </span>
            <button
              type="button"
              onClick={() => setSelectedCategory("All")}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                selectedCategory === "All"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All (10)
            </button>
            {categories.map((cat) => {
              const count = products.filter((p) => p.category === cat).length;
              if (count === 0) return null;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-primary-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid of Results */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-float"
          >
            <div>
              <div
                className="relative flex h-48 items-center justify-center rounded-xl p-4 transition-transform duration-500 overflow-hidden"
                style={{
                  background: `radial-gradient(120% 90% at 50% 0%, ${p.color.from}1a 0%, transparent 70%), linear-gradient(180deg,#f8fbff, #ffffff)`,
                }}
              >
                <ProductImage
                  product={p}
                  className="h-36 w-36 object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 shadow-sm border border-slate-100">
                  {p.form}
                </span>
                {p.rx && (
                  <span className="absolute top-3 left-3 rounded-full bg-red-600/90 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm">
                    Rx
                  </span>
                )}
              </div>

              <div className="mt-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary-600">
                  {p.category}
                </span>
                <h3 className="mt-0.5 font-display text-lg font-bold text-primary-900 group-hover:text-primary-600 transition-colors">
                  {p.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs text-slate-500 font-medium leading-relaxed">
                  {p.generic}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">Pack: {p.pack}</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-accent-600 group-hover:translate-x-0.5 transition-transform">
                View Details
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center">
          <p className="text-base font-semibold text-slate-700">No products match your search.</p>
          <p className="mt-1 text-sm text-slate-500">
            Try clearing filters or searching for another formulation or active ingredient.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 inline-flex items-center rounded-lg bg-primary-50 px-4 py-2 text-xs font-bold text-primary-700 hover:bg-primary-100"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
