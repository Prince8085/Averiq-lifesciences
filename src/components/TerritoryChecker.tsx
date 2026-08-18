"use client";

import { useState } from "react";
import { Search, CheckCircle2, Clock3, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "checking" | "open" | "waitlist" | "closed";

/** Demo territory data — replace with real CRM lookup in production. */
const openPincodes = new Set([
  "452001", "452002", "452003", "452005", "452007", "452010",
  "452012", "452016", "452018", "452020",
]);

const openDistricts = new Set([
  "indore", "dewas", "ujjain", "dhar", "ratlam", "khandwa", "khargone",
]);

export function TerritoryChecker() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function check(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;
    setStatus("checking");
    window.setTimeout(() => {
      if (openPincodes.has(q) || openDistricts.has(q)) setStatus("open");
      else if (/^\d{6}$/.test(q)) setStatus("closed");
      else setStatus("waitlist");
    }, 700);
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <form onSubmit={check} className="flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setStatus("idle");
          }}
          placeholder="Enter pincode or district (e.g. 452016)"
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          aria-label="Pincode or district"
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-700"
        >
          <Search className="h-4 w-4" />
          Check Availability
        </button>
      </form>

      <div className="mt-4 min-h-8 text-sm" aria-live="polite">
        {status === "checking" && (
          <p className="flex items-center gap-2 text-slate-500">
            <Clock3 className="h-4 w-4 animate-pulse text-primary-500" />
            Checking territory availability...
          </p>
        )}
        {status === "open" && (
          <p
            className={cn(
              "flex items-start gap-2 rounded-lg border border-accent-200 bg-accent-50 p-3 font-medium text-accent-800"
            )}
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
            <span>
              <strong>Great news — this territory is open</strong> for exclusive
              monopoly franchise rights. Apply now to reserve it.
            </span>
          </p>
        )}
        {status === "closed" && (
          <p
            className={cn(
              "flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 font-medium text-red-700"
            )}
          >
            <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
            <span>
              <strong>This pincode is currently allocated.</strong> Our desk can
              suggest the nearest available territory — send an enquiry.
            </span>
          </p>
        )}
        {status === "waitlist" && (
          <p
            className={cn(
              "flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 font-medium text-amber-800"
            )}
          >
            <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
            <span>
              <strong>Add a district name or 6-digit pincode</strong> (e.g.
              452016) for an exact availability check.
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
