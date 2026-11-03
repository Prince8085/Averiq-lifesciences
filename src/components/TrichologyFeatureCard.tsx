{"use client"};

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flower2 } from "lucide-react";
import { therapeuticVerticals } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { getBlurPlaceholder } from "@/lib/blur-placeholders";

interface TrichologyFeatureCardProps {
  /** Feature image (2:1 ultra-wide) */
  imageSrc: string;
  /** Alt text */
  alt: string;
  /** Delay for reveal animation */
  delay?: number;
}

export function TrichologyFeatureCard({
  imageSrc,
  alt,
  delay = 0,
}: TrichologyFeatureCardProps) {
  const trichology = therapeuticVerticals.find((v) => v.slug === "Trichology");
  
  if (!trichology) return null;
  const blurDataURL = getBlurPlaceholder("green");

  return (
    <Reveal delay={delay}>
      <Link
        href="/#products"
        className={cn(
          "group relative flex h-full flex-col rounded-2xl border border-slate-100 bg-white shadow-soft",
          "overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-float",
          "lg:flex-row lg:h-[320px]"
        )}
      >
        {/* Feature Image - 2:1 aspect, spans full width on mobile, 60% on desktop */}
        <div className="relative w-full lg:w-[60%] lg:min-w-[320px] shrink-0 overflow-hidden">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            priority={false}
            placeholder="blur"
            blurDataURL={blurDataURL}
            sizes="(max-width: 1023px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            quality={90}
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content - 40% on desktop, full width below on mobile */}
        <div className="relative z-10 flex flex-1 flex-col justify-center p-6 lg:p-8 lg:w-[40%] min-w-0">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-md shadow-primary-600/25 transition-transform duration-300 group-hover:scale-110">
            <Flower2 className="h-6 w-6" />
          </span>
          <h3 className="mt-5 font-display text-lg font-bold text-primary-900 lg:text-xl">
            {trichology.title}
          </h3>
          <p className="mt-2 flex-1 prose-body text-slate-600 min-w-0">
            {trichology.blurb}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-accent-600 group-hover:gap-2 transition-all">
            View range
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}