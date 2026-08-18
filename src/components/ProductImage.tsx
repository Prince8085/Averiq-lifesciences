"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";
import { ProductVisual } from "@/components/ProductVisual";

export type ProductAngle = "front" | "side" | "back";

/**
 * Product photo slot.
 *
 * If a real photograph exists at `public/products/<slug>-<angle>.jpg` it is
 * shown; otherwise the branded SVG packshot renders in its place. Drop photos
 * in and they light up automatically — no code changes needed.
 */
export function ProductImage({
  product,
  angle = "front",
  className,
  imgClassName,
  eager = false,
}: {
  product: Product;
  angle?: ProductAngle;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}) {
  const [photo, setPhoto] = useState<string | null>(null);

  const path = `/products/${product.slug}${angle === "front" ? "" : `-${angle}`}.jpg`;

  useEffect(() => {
    let alive = true;
    const probe = new Image();
    probe.onload = () => alive && setPhoto(path);
    probe.onerror = () => alive && setPhoto(null);
    probe.src = path;
    return () => {
      alive = false;
    };
  }, [path]);

  if (photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photo}
        alt={`${product.name} — ${angle} photograph`}
        loading={eager ? "eager" : "lazy"}
        className={cn(className ?? imgClassName, "object-contain")}
      />
    );
  }

  return (
    <ProductVisual
      form={product.form}
      name={product.name}
      from={product.color.from}
      to={product.color.to}
      className={className}
    />
  );
}
