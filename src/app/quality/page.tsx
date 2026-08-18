import type { Metadata } from "next";
import {
  ShieldCheck,
  FlaskConical,
  TestTubes,
  Microscope,
  FileCheck2,
  BellRing,
  Award,
  BadgeCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Quality Standards & Assurance",
  description:
    "WHO-GMP certified quality at Averiq Lifesciences — strict QA/QC protocols, HPLC analytical testing, stability studies, pharmacovigilance and full compliance documentation.",
};

const protocols = [
  {
    icon: FlaskConical,
    title: "Incoming Raw Material Control",
    text: "Every API and excipient is quarantined and identity-tested before release — no exceptions, no shortcuts.",
  },
  {
    icon: TestTubes,
    title: "In-Process Quality Control",
    text: "Real-time monitoring of blending, granulation, compression and filling against validated parameters.",
  },
  {
    icon: Microscope,
    title: "Finished Batch Release",
    text: "Complete analytical release: potency (HPLC), content uniformity, dissolution, microbial limits and appearance.",
  },
  {
    icon: FileCheck2,
    title: "Documentation & CoA",
    text: "Every batch ships with a Certificate of Analysis and full batch documentation for audit trail integrity.",
  },
];

const labs = [
  ["HPLC Potency Assays", "Verifies active ingredient concentration against pharmacopoeial standards"],
  ["Dissolution Profiling", "Confirms drug release performance meets specification"],
  ["Stability Studies", "Accelerated & long-term ICH-condition testing for shelf-life claims"],
  ["Microbial Testing", "Total viable count and pathogen absence for topicals and oral solids"],
  ["Content Uniformity", "Ensures every dose carries the labelled amount"],
  ["Physical Testing", "Hardness, friability, disintegration and viscosity checks"],
];

const certifications = [
  "WHO-GMP compliant manufacturing protocols",
  "DCGI (CDSCO) registered compositions",
  "FDA-compliant documentation standards",
  "ISO-aligned quality management practices",
];

export default function QualityPage() {
  return (
    <>
      <section className="mesh-hero pb-16 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-600">
              Quality Assurance
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-primary-900 sm:text-4xl lg:text-5xl">
              Zero Tolerance. <span className="gradient-text">Zero Shortcuts.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Quality at Averiq is not a department — it&apos;s the foundation.
              From incoming raw materials to the finished pack in your hand,
              every step is verified, documented and traceable.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Protocols */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="QA / QC Protocols"
            title="A Four-Gate Verification Pipeline"
            subtitle="Every Averiq batch passes through four independent quality gates."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {protocols.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="relative h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
                  <span className="absolute -top-3 left-6 rounded-full bg-primary-600 px-3 py-1 text-[11px] font-extrabold text-white">
                    Gate {i + 1}
                  </span>
                  <span className="mt-2 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-md shadow-primary-600/25">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-primary-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lab testing */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-primary-900 sm:text-3xl">
                High-Tech Analytical Laboratory
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Our in-house analytical lab runs the full pharmacopoeial test
                battery on every product line, so clinical claims are backed by
                data — not promises.
              </p>
              <div className="mt-8 space-y-4">
                {labs.map(([t, d]) => (
                  <div key={t} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    <div>
                      <p className="text-sm font-bold text-primary-900">{t}</p>
                      <p className="text-sm text-slate-600">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-float">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Certifications & Compliance
                </p>
                <ul className="mt-5 space-y-4">
                  {certifications.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                      <span className="text-sm font-semibold text-slate-700">{c}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 p-5 text-sm text-primary-50">
                  <p className="flex items-center gap-2 font-display font-bold text-white">
                    <ShieldCheck className="h-5 w-5 text-accent-400" />
                    Quality Policy
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-primary-100">
                    “Quality is everyone&apos;s responsibility. We commit to
                    supplying safe, effective and consistent products while
                    continuously improving our processes.” — Averiq Quality
                    Manual
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pharmacovigilance */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-start gap-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-soft sm:flex-row sm:items-center sm:p-10">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/25">
                <BellRing className="h-7 w-7" />
              </span>
              <div className="flex-1">
                <h2 className="font-display text-2xl font-bold text-primary-900">
                  Pharmacovigilance & Safety Reporting
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                  Healthcare professionals and patients can report any adverse
                  event, product complaint or quality concern directly to our
                  pharmacovigilance desk. Every report is investigated, logged
                  and, where applicable, escalated to the relevant regulatory
                  authority.
                </p>
              </div>
              <a
                href="mailto:pv@averiqlifesciences.com"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary-600 px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-700"
              >
                <BellRing className="h-4 w-4" />
                Report to PV Desk
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
