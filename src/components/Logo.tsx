import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Averiq Lifesciences Brand Logo
 * - `Logo`        : Header logo (light background, ultra-crisp transparent original vector logo)
 * - `LogoLockup`  : Footer lockup (dark background optimized logo with crisp white typography)
 */

export function Logo({
  className,
  height = 48,
}: {
  className?: string;
  height?: number;
}) {
  // Original vector logo aspect ratio is 2.092:1 (7383 x 3529)
  const width = Math.round(height * 2.092);

  return (
    <span className={cn("inline-flex items-center select-none", className)}>
      <Image
        src="/averiq-logo-header-hd.png"
        alt="Averiq Lifesciences — Advanced • Verified • Quality"
        width={width}
        height={height}
        className="h-10 sm:h-12 w-auto object-contain transition-opacity duration-300 hover:opacity-90"
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
        width={420}
        height={200}
        className="h-12 sm:h-14 w-auto object-contain"
        priority
      />
    </span>
  );
}
