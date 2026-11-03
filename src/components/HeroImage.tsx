"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { getBlurPlaceholder } from "@/lib/blur-placeholders";

interface HeroImageProps {
  /** Mobile image (portrait 4:5) */
  mobileSrc: string;
  /** Desktop image (landscape 16:9) */
  desktopSrc: string;
  /** Alt text */
  alt: string;
  /** Priority loading */
  priority?: boolean;
  /** Blur placeholder category */
  blurCategory?: "clinical" | "warm" | "green";
  /** Additional className */
  className?: string;
}

export function HeroImage({
  mobileSrc,
  desktopSrc,
  alt,
  priority = true,
  blurCategory = "clinical",
  className,
}: HeroImageProps) {
  const blurDataURL = getBlurPlaceholder(blurCategory);
  return (
    <div className={cn("absolute inset-0 z-0", className)}>
      {/* Mobile: Portrait 4:5 image */}
      <Image
        src={mobileSrc}
        alt={alt}
        fill
        priority={priority}
        placeholder="blur"
        blurDataURL={blurDataURL}
        sizes="(max-width: 1023px) 100vw, 50vw"
        className="object-cover lg:hidden"
        quality={90}
      />
      {/* Desktop: Landscape 16:9 image */}
      <Image
        src={desktopSrc}
        alt={alt}
        fill
        priority={priority}
        placeholder="blur"
        blurDataURL={blurDataURL}
        sizes="(max-width: 1023px) 100vw, 50vw"
        className="object-cover hidden lg:block"
        quality={90}
      />
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-primary-950/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/40 to-transparent" />
    </div>
  );
}