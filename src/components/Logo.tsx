import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Averiq Lifesciences Complete Brand Lockup
 * Contains the main emblem symbol + AVERIQ + LIFESCIENCES.
 * Aspect ratio: 2.092:1 (7383 x 3529)
 */

export function Logo({
  className,
  height = 48,
}: {
  className?: string;
  height?: number;
}) {
  const width = Math.round(height * 2.092);

  return (
    <span className={cn("inline-flex items-center select-none", className)}>
      <Image
        src="/averiq-logo-header-hd.png"
        alt="Averiq Lifesciences — Advanced • Verified • Quality"
        width={width}
        height={height}
        className="h-11 sm:h-14 w-auto object-contain transition-opacity duration-300 hover:opacity-90"
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
        width={250}
        height={120}
        className="h-14 sm:h-16 w-auto object-contain"
        priority
      />
    </span>
  );
}
