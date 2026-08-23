import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Averiq brand lockups — using real logo from logo.jpeg
 * - `Logo`        : Header logo (white bg, clean edges)
 * - `LogoLockup`  : Footer lockup (CSS filter for dark bg inversion)
 */

export function Logo({
  className,
  height = 44,
}: {
  className?: string;
  height?: number;
}) {
  const w = Math.round(height * 1.91);
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

/** Full lockup for footer — uses CSS filter for clean dark-bg inversion. */
export function LogoLockup({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <Image
      src="/averiq-logo-footer-dark.png"
      alt="Averiq Lifesciences — Advanced • Verified • Quality"
      width={500}
      height={261}
      className={cn(
        "h-auto w-52 object-contain",
        dark && "brightness-0 invert",
        className
      )}
      priority
    />
  );
}
