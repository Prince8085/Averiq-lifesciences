"use client";

import type { Product } from "@/data/products";
import { ProductImage } from "@/components/ProductImage";

/**
 * Clean product image display — single large photo (or packshot fallback).
 * No angle switching, no 360°, no thumbnails. Just the product, beautifully presented.
 */
export function ProductGallery({
  product,
  badges,
}: {
  product: Product;
  badges?: React.ReactNode;
}) {
  return (
    <div
      className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/70 p-10 shadow-float backdrop-blur sm:p-14"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, " +
          product.color.from +
          "1f 0%, transparent 70%), linear-gradient(180deg,#ffffff, #f8fbff)",
      }}
    >
      {badges && <div className="absolute left-4 top-4 z-10 flex gap-2">{badges}</div>}

      <ProductImage
        product={product}
        eager
        className="h-64 w-64 transition-transform duration-500 hover:scale-105 sm:h-80 sm:w-80"
      />
    </div>
  );
}
