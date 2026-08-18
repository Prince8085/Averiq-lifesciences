"use client";

import { useState } from "react";
import { Camera, Rotate3d, ZoomIn, ImageOff } from "lucide-react";
import type { Product } from "@/data/products";
import { ProductImage, type ProductAngle } from "@/components/ProductImage";
import { cn } from "@/lib/utils";

const ANGLES: { key: ProductAngle | "360"; label: string }[] = [
  { key: "front", label: "Front" },
  { key: "side", label: "Side" },
  { key: "back", label: "Back" },
  { key: "360", label: "360°" },
];

/**
 * Multi-angle packaging gallery.
 *
 * Real photos (`public/products/<slug>-<angle>.jpg`) are shown when present;
 * every slot falls back to the branded packshot illustration otherwise.
 * The 360° view is a slow-rotating packshot until a video/render is added.
 */
export function ProductGallery({
  product,
  badges,
}: {
  product: Product;
  badges?: React.ReactNode;
}) {
  const [selected, setSelected] = useState<ProductAngle | "360">("front");

  return (
    <div
      className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 shadow-float backdrop-blur"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, " +
          product.color.from +
          "1f 0%, transparent 70%), linear-gradient(180deg,#ffffff, #f8fbff)",
      }}
    >
      {badges && <div className="absolute left-4 top-4 z-10 flex gap-2">{badges}</div>}

      {/* Main view */}
      <div className="relative flex min-h-72 flex-1 items-center justify-center p-10 sm:min-h-80">
        {selected === "360" ? (
          <div className="relative">
            <ProductImage
              product={product}
              className="animate-spin-slow h-56 w-56 sm:h-64 sm:w-64"
            />
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary-950/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
              <Rotate3d className="mr-1 inline h-3 w-3" />
              360° viewer
            </span>
          </div>
        ) : (
          <ProductImage
            product={product}
            angle={selected}
            eager
            className="h-56 w-56 sm:h-64 sm:w-64 transition-all duration-300"
          />
        )}

        {/* zoom hint */}
        <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 shadow-sm backdrop-blur">
          <ZoomIn className="h-3 w-3" />
          {selected === "360" ? "auto-rotating" : "click to zoom on photo"}
        </span>

        {/* photo-slot hint — only when no photo exists yet */}
        <span className="absolute bottom-3 right-4 inline-flex items-center gap-1 rounded-full bg-primary-50/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-primary-600 ring-1 ring-primary-100 backdrop-blur">
          <Camera className="h-3 w-3" />
          photo slot: /products/{product.slug}-{selected}.jpg
        </span>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2 border-t border-slate-100 bg-white/60 p-3 backdrop-blur">
        {ANGLES.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={cn(
              "flex flex-col items-center justify-center gap-1 rounded-xl border py-2 transition-all",
              selected === key
                ? "border-primary-500 bg-primary-50 ring-1 ring-primary-500"
                : "border-slate-100 bg-white hover:border-primary-200"
            )}
            aria-label={`View ${label}`}
            aria-pressed={selected === key}
          >
            {key === "360" ? (
              <Rotate3d
                className={cn(
                  "h-6 w-6",
                  selected === key ? "text-primary-600" : "text-slate-400"
                )}
              />
            ) : (
              <ProductImage
                product={product}
                angle={key}
                className={cn(
                  "h-9 w-9",
                  selected === key ? "opacity-100" : "opacity-80"
                )}
              />
            )}
            <span
              className={cn(
                "text-[10px] font-bold uppercase tracking-wider",
                selected === key ? "text-primary-700" : "text-slate-500"
              )}
            >
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* empty-state helper note */}
      <p className="flex items-center gap-1.5 border-t border-slate-100 bg-white/70 px-4 py-2 text-[11px] text-slate-400">
        <ImageOff className="h-3.5 w-3.5 shrink-0" />
        Add <code className="rounded bg-slate-100 px-1">public/products/{product.slug}-front.jpg</code>{" "}
        etc. — photos appear automatically.
      </p>
    </div>
  );
}
