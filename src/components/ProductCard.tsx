"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Pill, Eye } from "lucide-react";
import type { Product } from "@/data/products";
import { ProductImage } from "@/components/ProductImage";
import { site } from "@/data/site";

export function ProductCard({ product }: { product: Product }) {
  const waMessage = `Hi Averiq Lifesciences 👋

I'm interested in *${product.name}* and would like to know more.

Product: ${product.name}
Composition: ${product.generic}
Form: ${product.form} | Pack: ${product.pack}
${product.rx ? "Type: Rx (Schedule H)" : "Type: OTC"}

Please share availability, pricing and ordering details. Thank you!`;

  const waUrl = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float">
      {/* gradient packshot area */}
      <div
        className="relative overflow-hidden px-8 pb-2 pt-8"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, " +
            product.color.from +
            "22 0%, transparent 70%), linear-gradient(180deg,#f8fbff, #ffffff)",
        }}
      >
        <div className="absolute right-3 top-3 flex gap-1.5">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600 shadow-sm ring-1 ring-slate-100">
            {product.category}
          </span>
          {product.rx && (
            <span className="rounded-full bg-primary-600/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-primary-700 ring-1 ring-primary-600/20">
              Rx
            </span>
          )}
        </div>
        <ProductImage
          product={product}
          className="mx-auto h-40 w-40 transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <span className="absolute bottom-2 left-3 inline-flex items-center gap-1 rounded-full bg-slate-900/5 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
          <Pill className="h-3 w-3" />
          {product.form} • {product.pack}
        </span>
      </div>

      {/* info */}
      <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
        <h3 className="font-display text-lg font-bold text-primary-900">
          {product.name}
        </h3>
        <p className="mt-1 text-xs font-medium leading-relaxed text-slate-500">
          {product.generic}
        </p>
        <p className="mt-2 text-sm font-medium text-slate-700">
          {product.tagline}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2 pt-1">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 transition-colors hover:border-primary-300 hover:text-primary-700"
          >
            <Eye className="h-3.5 w-3.5" />
            View Details
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2 text-xs font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#20BD5C] hover:shadow-lg hover:shadow-[#25D366]/30"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Enquire
          </a>
        </div>
        <Link
          href={`/products/${product.slug}`}
          className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-accent-600 transition-colors hover:text-accent-700"
        >
          Full monograph & mechanism of action
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
