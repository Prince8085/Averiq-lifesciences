import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Averiq brand lockups.
 * - `Logo`        : SVG mark (gradient tile + leaf) + "Averiq" wordmark — crisp at any size (header).
 * - `LogoImage`   : full extracted lockup PNG with LIFESCIENCES + tagline (footer / hero).
 */

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={cn("h-10 w-10", className)}
      role="img"
      aria-label="Averiq Lifesciences mark"
    >
      <defs>
        <linearGradient id="aq-mark-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22c55e" />
          <stop offset="0.55" stopColor="#16a34a" />
          <stop offset="1" stopColor="#0b5cab" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="42" height="42" rx="11" fill="url(#aq-mark-grad)" />
      {/* stylized sprout: stem rising from a rounded base into two leaves */}
      <path
        d="M22 34 C 18 28, 18 22, 22 14"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22 14 C 16 13, 11 15, 8 19 C 13 21, 18 20, 22 14 Z"
        fill="#fff"
      />
      <path
        d="M22 17 C 27 15, 32 17, 35 21 C 30 24, 25 23, 22 17 Z"
        fill="#e0f2fe"
      />
    </svg>
  );
}

export function Logo({
  className,
  textClassName,
  stacked = false,
}: {
  className?: string;
  textClassName?: string;
  stacked?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={stacked ? "h-9 w-9" : "h-8 w-8"} />
      <span className={cn("flex flex-col leading-none", stacked && "items-center")}>
        <span
          className={cn(
            "font-display text-[1.45rem] font-extrabold tracking-tight text-primary-900",
            textClassName
          )}
        >
          Averiq
        </span>
        <span className="mt-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-slate-500">
          Lifesciences
        </span>
      </span>
    </span>
  );
}

/** Full extracted lockup (Averiq + LIFESCIENCES + tagline) — use in footer & hero. */
export function LogoLockup({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <Image
      src="/averiq-logo.png"
      alt="Averiq Lifesciences — Advanced • Verified • Quality"
      width={532}
      height={256}
      className={cn(
        "h-auto w-52 object-contain",
        dark && "brightness-0 invert",
        className
      )}
      priority
    />
  );
}
