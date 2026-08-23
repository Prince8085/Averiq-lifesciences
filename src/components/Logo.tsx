import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Averiq brand lockups — using real logo from logo.jpeg
 * - `Logo`        : Header logo (transparent bg, ~240×156)
 * - `LogoLockup`  : Footer lockup (inverted for dark bg, ~500×325)
 */

export function Logo({
  className,
  height = 44,
}: {
  className?: string;
  height?: number;
}) {
  const w = Math.round(height * 1.5);
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

/** Full lockup for footer (inverted colors for dark backgrounds). */
export function LogoLockup({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <Image
      src={dark ? "/averiq-logo-footer-dark.png" : "/averiq-logo.png"}
      alt="Averiq Lifesciences — Advanced • Verified • Quality"
      width={500}
      height={325}
      className={cn(
        "h-auto w-52 object-contain",
        className
      )}
      priority
    />
  );
}
