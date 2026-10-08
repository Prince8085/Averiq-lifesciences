"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "probing" | "ready" | "missing";

/**
 * Product film player — autoplays, muted and looped (the supplied films are
 * video-only, so there is nothing to unmute).
 *
 * The file is probed with a HEAD request on mount rather than relying on the
 * video element's `onerror`, which can fire before React hydration attaches
 * handlers. When no file exists the component renders nothing at all, so
 * callers never leave a placeholder or a broken player on the live site.
 */
export function VideoSlot({
  src,
  title = "Video",
  className,
  poster,
}: {
  src: string;
  title?: string;
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

  // No film for this product — degrade silently.
  if (status === "missing") return null;

  return (
    <div
      className={cn(
        "group relative aspect-video w-full overflow-hidden rounded-3xl border border-white/60 bg-primary-950 shadow-float",
        className
      )}
    >
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

      {status === "probing" && (
        <div className="absolute inset-0 grid place-items-center">
          <Loader2 className="h-7 w-7 animate-spin text-white/70" />
          <span className="sr-only">{title}</span>
        </div>
      )}

      {status === "ready" && (
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-primary-950/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
          Playing
        </span>
      )}
    </div>
  );
}
