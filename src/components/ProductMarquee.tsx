"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductImage } from "@/components/ProductImage";

/**
 * Infinite horizontal marquee of product tiles.
 *
 * The track renders two copies of the product list and translates -50% for a
 * seamless loop (keyframes in globals.css: `--animate-marquee`). Pauses on
 * hover/focus; product photos light up automatically once dropped into
 * `public/products/`.
 */
export function ProductMarquee({
  speed = "32s",
  items = products,
}: {
  speed?: string;
  items?: typeof products;
}) {
  const track = [...items, ...items];
  return (
    <div className="group relative overflow-hidden py-2">
      {/* edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#fafcff] to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#fafcff] to-transparent sm:w-28" />

      <div
        className="flex w-max animate-marquee gap-5 px-5 [animation-play-state:running] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
        style={{ animationDuration: speed }}
        aria-label="Product portfolio — horizontally scrolling"
      >
        {track.map((p, i) => (
          <Link
            key={`${p.slug}-${i}`}
            href={`/products/${p.slug}`}
            className="group/card w-52 shrink-0 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-float sm:w-60"
            tabIndex={i < items.length ? 0 : -1}
          >
            <div
              className="flex h-36 items-center justify-center rounded-xl"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% 0%, " +
                  p.color.from +
                  "1c 0%, transparent 70%), linear-gradient(180deg,#f8fbff, #ffffff)",
              }}
            >
              <ProductImage
                product={p}
                className="h-28 w-28 transition-transform duration-500 group-hover/card:scale-105"
              />
            </div>
            <p className="mt-3 truncate font-display text-sm font-bold text-primary-900">
              {p.name}
            </p>
            <p className="mt-0.5 line-clamp-2 text-[11px] font-medium text-slate-500">
              {p.generic}
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-accent-600">
              View
              <ArrowRight className="h-3 w-3 transition-transform group-hover/card:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
