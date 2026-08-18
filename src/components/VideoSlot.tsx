"use client";

import { useEffect, useState } from "react";
import { Play, Clapperboard, Film, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "probing" | "ready" | "missing";

/**
 * Reusable auto-playing video slot.
 *
 * Drop a real video at the `src` path (default `public/media/hero.mp4`) and it
 * will autoplay, muted, looped. Until a file exists, an animated branded
 * placeholder is shown — no broken player, no build errors.
 *
 * The file is probed with a HEAD request on mount (rather than relying on the
 * video element's `onerror`, which can fire before React hydration attaches
 * handlers).
 */
export function VideoSlot({
  src = "/media/hero.mp4",
  title = "Video",
  slot = "media/hero.mp4",
  className,
  poster,
}: {
  src?: string;
  title?: string;
  /** File path shown in the placeholder hint chip */
  slot?: string;
  className?: string;
  poster?: string;
}) {
  const [status, setStatus] = useState<Status>("probing");

  useEffect(() => {
    let alive = true;
    fetch(src, { method: "HEAD" })
      .then((r) => {
        if (!alive) return;
        setStatus(r.ok ? "ready" : "missing");
      })
      .catch(() => alive && setStatus("missing"));
    return () => {
      alive = false;
    };
  }, [src]);

  return (
    <div
      className={cn(
        "group relative aspect-video w-full overflow-hidden rounded-3xl border border-white/60 bg-primary-950 shadow-float",
        className
      )}
    >
      {/* Real video — autoplay muted loop */}
      {status === "ready" && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-label={title}
        />
      )}

      {/* Animated placeholder — probing or no video file present */}
      {status !== "ready" && (
        <div className="mesh-dark absolute inset-0 overflow-hidden">
          <div className="animate-drift absolute -left-16 -top-16 h-72 w-72 rounded-full bg-accent-500/25 blur-3xl" />
          <div className="animate-drift-slow absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-primary-500/30 blur-3xl" />

          <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="relative flex h-20 w-20 items-center justify-center">
              <span className="pulse-ring absolute inset-0 rounded-full" />
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg">
                {status === "probing" ? (
                  <Loader2 className="h-7 w-7 animate-spin text-primary-600" />
                ) : (
                  <Play className="ml-0.5 h-7 w-7 fill-primary-600 text-primary-600" />
                )}
              </span>
            </span>
            <p className="font-display text-lg font-bold text-white sm:text-xl">
              {title}
            </p>
            <p className="max-w-md text-sm text-slate-300">
              {status === "probing"
                ? "Loading video..."
                : "Video will auto-play here."}
            </p>
            <span className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-300">
              <Clapperboard className="h-3.5 w-3.5 text-accent-400" />
              Video slot — add {slot} (16:9)
            </span>
          </div>
        </div>
      )}

      {/* subtle "Playing" chip once the video is live */}
      {status === "ready" && (
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-primary-950/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
          Playing
        </span>
      )}
      {status === "missing" && (
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-primary-950/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-300 backdrop-blur">
          <Film className="h-3 w-3" />
          Placeholder
        </span>
      )}
    </div>
  );
}
