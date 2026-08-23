import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Averiq brand lockups — using real logo from logo.jpeg
 * - `Logo`        : Header logo (white bg, 52px height)
 * - `LogoLockup`  : Footer lockup (CSS filter for dark bg inversion)
 */

export function Logo({
  className,
  height = 52,
}: {
  className?: string;
  height?: number;
}) {
  const w = Math.round(height * 2.0);
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/averiq-logo-header-hd.png"
        alt="Averiq Lifesciences"
        width={w}
        height={height}
        className="h-auto object-contain"
        priority
      />
    </span>
  );
}

/** Full lockup for footer — mix-blend-mode makes white bg invisible on dark. */
export function LogoLockup({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <span className={cn(dark && "mix-blend-screen", className)}>
      <Image
        src="/averiq-logo.png"
        alt="Averiq Lifesciences — Advanced • Verified • Quality"
        width={500}
        height={249}
        className="h-auto w-52 object-contain"
        priority
      />
    </span>
  );
}
