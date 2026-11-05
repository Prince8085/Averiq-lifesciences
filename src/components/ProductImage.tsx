"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { fullPackshotSlugs, type Product } from "@/data/products";
import { ProductVisual } from "@/components/ProductVisual";

/**
 * Product photo — uses actual product packshot from public/products/,
 * falls back to branded SVG packshot.
 * Lifestyle photos are reserved for hero/verticals/about/quality sections only.
 */
export function ProductImage({
  product,
  className,
  imgClassName,
  eager = false,
}: {
  product: Product;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}) {
  const [photo, setPhoto] = useState<string | null>(null);
  const path = `/products/${product.slug}.jpg`;

  // Try to load from public/products folder first (actual product packshots)
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
        alt={product.name}
        loading={eager ? "eager" : "lazy"}
        className={cn(
          className ?? imgClassName,
          fullPackshotSlugs.has(product.slug) ? "object-contain" : "object-cover",
        )}
        data-testid="product-packshot"
      />
    );
  }

  // Final fallback: SVG packshot
  return (
    <ProductVisual
      form={product.form}
      name={product.name}
      slug={product.slug}
      from={product.color.from}
      to={product.color.to}
      className={className}
    />
  );
}
