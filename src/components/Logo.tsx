import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Averiq Lifesciences Vector Brand Lockup
 * - `Logo`        : Header logo (transparent vector original logo, retina crisp)
 * - `LogoLockup`  : Footer lockup (dark background inverted vector logo)
 */

export function Logo({
  className,
  height = 42,
}: {
  className?: string;
  height?: number;
}) {
  // Vector brand lockup aspect ratio is 7.88:1 (9052 x 1149)
  const width = Math.round(height * 7.88);

  return (
    <span className={cn("inline-flex items-center select-none", className)}>
      <Image
        src="/averiq-logo-header-hd.png"
        alt="Averiq Lifesciences — Advanced • Verified • Quality"
        width={width}
        height={height}
        className="h-9 sm:h-11 w-auto object-contain transition-opacity duration-300 hover:opacity-90"
        priority
      />
    </span>
  );
}

export function LogoLockup({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center select-none", className)}>
      <Image
        src={dark ? "/averiq-logo-footer-dark.png" : "/averiq-logo-header-hd.png"}
        alt="Averiq Lifesciences — Advanced • Verified • Quality"
        width={360}
        height={46}
        className="h-10 sm:h-12 w-auto object-contain"
        priority
      />
    </span>
  );
}
