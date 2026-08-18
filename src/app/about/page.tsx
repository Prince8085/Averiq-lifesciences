import type { Metadata } from "next";
import {
  Target,
  Eye,
  HeartHandshake,
  ShieldCheck,
  GraduationCap,
  Factory,
  Microscope,
  Globe2,
  Users,
  Quote,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { LogoLockup } from "@/components/Logo";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Averiq Lifesciences Private Limited — an Indore-based pharmaceutical, cosmeceutical and nutraceutical company driven by Advanced, Verified, Quality.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Quality Without Compromise",
    text: "Adherence to stringently audited WHO-GMP manufacturing protocols across every batch and every product line.",
  },
  {
    icon: Microscope,
    title: "Innovation in Formulation",
    text: "Enhancing drug bioavailability, patient comfort and clinical outcomes through modern drug-delivery science.",
  },
  {
    icon: Users,
    title: "Partner Empowerment",
    text: "Building transparent, mutually profitable networks with distributors and stockists nationwide.",
  },
];

const roadmap = [
  { year: "2026", event: "Incorporated in Indore, MP — ROC Gwalior", done: true },
  { year: "2026", event: "First portfolio: Dermatology & Cosmeceuticals launch", done: true },
  { year: "2027", event: "Pan-MP distribution network & 50+ active formulations", done: false },
  { year: "2028", event: "Pan-India footprint, exports & new facility capacity", done: false },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="mesh-hero pb-16 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-600">
              Corporate Profile
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-primary-900 sm:text-4xl lg:text-5xl">
              Advanced. Verified. Quality.
              <span className="block gradient-text">That&apos;s the Averiq promise.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {site.legalName} is a forward-thinking Indian pharmaceutical
              enterprise incorporated in Indore, Madhya Pradesh. Driven by our
              foundational pillar —{" "}
              <strong className="text-primary-900">Advanced, Verified, Quality</strong>{" "}
              — we are dedicated to developing and distributing high-efficacy
              healthcare, dermatological and cosmeceutical solutions. We bridge
              the gap between advanced medical chemistry and clinical
              practicality, ensuring patients and medical practitioners receive
              formulations of unimpeachable purity and therapeutic potency.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="mt-10">
            <div className="grid gap-3 rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-soft backdrop-blur sm:grid-cols-3">
              {[
                ["CIN", site.cin],
                ["Registered Office", "Indore, Madhya Pradesh"],
                ["Incorporated", "February 2026 • ROC Gwalior"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {k}
                  </p>
                  <p className="mt-1 text-sm font-bold text-primary-900">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-soft">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-md shadow-primary-600/25">
                  <Eye className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold text-primary-900">
                  Our Vision
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  To be recognized as India&apos;s most dependable and
                  scientifically progressive life sciences organization,
                  empowering healthcare professionals with world-class
                  formulations and fostering sustainable entrepreneurship
                  through ethical PCD pharma distribution.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-soft">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-md shadow-accent-500/25">
                  <Target className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold text-primary-900">
                  Our Mission
                </h2>
                <ul className="mt-4 space-y-3">
                  {values.map((v) => (
                    <li key={v.title} className="flex items-start gap-3">
                      <HeartHandshake className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                      <div>
                        <p className="text-sm font-bold text-primary-900">{v.title}</p>
                        <p className="text-sm text-slate-600">{v.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="From the Directors' Desk"
            subtitle="Mahin Khan & Abdul Muttalib — founders of Averiq Lifesciences."
          />
          <Reveal className="mt-10">
            <div className="mx-auto max-w-3xl rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-soft sm:p-10">
              <Quote className="mx-auto h-8 w-8 text-primary-200" />
              <blockquote className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">
                “At Averiq Lifesciences, we believe healthcare is a sacred
                trust. Our goal from day one in Indore has been to create
                formulations that doctors prescribe with absolute confidence. As
                we expand our therapeutic footprint across dermatology,
                cosmeceuticals and general health, we remain grounded in our
                core ethos: rigorous verification, advanced molecular design,
                and uncompromising quality.”
              </blockquote>
              <div className="mt-6 flex items-center justify-center gap-8">
                <div>
                  <p className="font-display text-sm font-bold text-primary-900">
                    Mahin Khan
                  </p>
                  <p className="text-xs text-slate-500">Director</p>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <p className="font-display text-sm font-bold text-primary-900">
                    Abdul Muttalib
                  </p>
                  <p className="text-xs text-slate-500">Director</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Compliance & roadmap */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-primary-900 sm:text-3xl">
                Regulatory Compliance & Quality Policy
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Every Averiq formulation is manufactured under WHO-GMP
                protocols with zero-tolerance quality control. Our Indore
                facility runs a complete analytical testing program — HPLC
                potency assays, dissolution profiling and accelerated stability
                studies — so every batch that leaves our door carries a
                Certificate of Analysis.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Factory, t: "WHO-GMP Facility" },
                  { icon: Microscope, t: "HPLC & Stability Lab" },
                  { icon: Globe2, t: "Pan-India Distribution" },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-soft"
                  >
                    <x.icon className="mx-auto h-6 w-6 text-primary-600" />
                    <p className="mt-2 text-xs font-bold text-primary-900">{x.t}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-bold text-primary-900 sm:text-3xl">
                Milestone Roadmap
              </h2>
              <ol className="mt-6 space-y-0">
                {roadmap.map((r, i) => (
                  <li key={i} className="relative flex gap-4 pb-8 last:pb-0">
                    {i < roadmap.length - 1 && (
                      <span className="absolute left-[13px] top-7 h-full w-px bg-slate-200" />
                    )}
                    <span
                      className={
                        "z-10 mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-extrabold " +
                        (r.done
                          ? "bg-accent-600 text-white"
                          : "border-2 border-dashed border-slate-300 text-slate-400")
                      }
                    >
                      {r.done ? "✓" : i + 1}
                    </span>
                    <div className="pt-0.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-accent-600">
                        {r.year}
                      </p>
                      <p className="text-sm font-semibold text-slate-700">{r.event}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mesh-dark py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
          <div>
            <LogoLockup dark className="mx-auto w-48 lg:mx-0" />
            <p className="mt-4 max-w-xl text-sm text-slate-300">
              {site.legalName} | {site.cin} | {site.address}
            </p>
          </div>
          <a
            href="/partner"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent-600/30 transition-all hover:-translate-y-0.5 hover:bg-accent-500"
          >
            <GraduationCap className="h-4 w-4" />
            Explore Partnership Opportunities
          </a>
        </div>
      </section>
    </>
  );
}
