"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function Counter({
  value,
  suffix = "",
  label,
  dark = false,
}: {
  value: number;
  suffix?: string;
  label: string;
  dark?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <p
        className={
          "font-display text-3xl font-extrabold tracking-tight sm:text-4xl " +
          (dark ? "text-white" : "text-primary-900")
        }
      >
        {display}
        <span className="text-accent-500">{suffix}</span>
      </p>
      <p
        className={
          "mt-1.5 text-xs font-semibold uppercase tracking-wider " +
          (dark ? "text-slate-400" : "text-slate-500")
        }
      >
        {label}
      </p>
    </div>
  );
}
