"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";
import { ProductVisual } from "@/components/ProductVisual";

/**
 * Product photo — loads the main product photo from `public/products/<slug>.jpg`.
 * Falls back to a branded SVG packshot if no photo exists.
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
