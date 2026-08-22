"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The acne gel formulation is exactly what my patients need — clinically sound actives with a cosmetically elegant base.",
    name: "Dr. Neha Sharma",
    role: "Consultant Dermatologist, Indore",
  },
  {
    quote:
      "Clean compositions, on-time dispatch and proper CoA documentation. Our pharmacy chain has stocked the Averiq range with confidence.",
    name: "Ramesh Agrawal",
    role: "Stockist & Distributor, Bhopal",
  },
  {
    quote:
      "Timely supply and proper documentation make Averiq a reliable partner. The product quality speaks for itself.",
    name: "Imran Qureshi",
    role: "Healthcare Partner, Dewas",
  },
  {
    quote:
      "Averiq's hair serum has shown visible results in just a few weeks. My patients keep coming back for refills.",
    name: "Dr. Sanjay Patel",
    role: "Trichologist, Ujjain",
  },
  {
    quote:
      "The sunscreen range is excellent — lightweight, no white cast and strong SPF protection. Very impressed.",
    name: "Dr. Aisha Khan",
    role: "Cosmetologist, Bhopal",
  },
  {
    quote:
      "From ordering to delivery, the whole process is smooth. CoA documents are always included — very professional.",
    name: "Vikram Singh",
    role: "Medical Store Owner, Indore",
  },
];

/**
 * Infinite horizontal marquee of testimonial cards.
 * Duplicates the list and translates -50% for a seamless loop.
 * Pauses on hover. Uses the same `animate-marquee` keyframe as ProductMarquee.
 */
export function TestimonialMarquee({ speed = "38s" }: { speed?: string }) {
  const track = [...testimonials, ...testimonials];
  return (
    <div className="group relative overflow-hidden py-2">
      {/* edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--background)] to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--background)] to-transparent sm:w-28" />

      <div
        className="flex w-max animate-marquee gap-6 px-6 [animation-play-state:running] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
        style={{ animationDuration: speed }}
        aria-label="Testimonials — horizontally scrolling"
      >
        {track.map((t, i) => (
          <figure
            key={`${t.name}-${i}`}
            className="flex w-80 shrink-0 flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float sm:w-96"
            tabIndex={i < testimonials.length ? 0 : -1}
          >
            <Quote className="h-7 w-7 text-primary-200" />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 border-t border-slate-100 pt-4">
              <p className="text-sm font-bold text-primary-900">{t.name}</p>
              <p className="text-xs font-medium text-slate-500">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
