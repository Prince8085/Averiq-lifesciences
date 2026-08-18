import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductsExplorer } from "@/components/ProductsExplorer";

export const metadata: Metadata = {
  title: "Product Catalog",
  description:
    "Browse Averiq Lifesciences formulations across Dermatology, Cosmeceuticals, Trichology, General Medicine and Nutraceuticals — with full compositions, pack sizes and indications.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="mesh-hero pb-10 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-600">
            Product Catalog
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-primary-900 sm:text-4xl">
            Our Formulations
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Filter by therapeutic segment, dosage form or prescription status —
            or search by brand name, active ingredient and indication.
          </p>
        </div>
      </section>
      <Suspense>
        <ProductsExplorer />
      </Suspense>
    </>
  );
}
