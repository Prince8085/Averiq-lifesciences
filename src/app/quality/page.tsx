import type { Metadata } from "next";
import {
  ShieldCheck,
  FileCheck2,
  BellRing,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Quality & Assurance",
  description:
    "Quality and assurance at Averiq Lifesciences — how we select what we supply, the documentation we provide, and our commitment to ethical, transparent pharmaceutical marketing.",
};

const process = [
  {
    icon: HeartHandshake,
    title: "Partner Selection",
    text: "We work only with trusted and certified manufacturing units, evaluated on certification, audit history, capacity and compliance records before a single product is considered.",
  },
  {
    icon: FileCheck2,
    title: "Product Evaluation",
    text: "Compositions, strengths, pack presentations, stability details and regulatory status are reviewed against the applicable Indian requirements for the category.",
  },
  {
    icon: BadgeCheck,
    title: "Documentation Review",
    text: "Batch documentation, labelling, shelf-life and storage details are verified and kept ready before a product enters the Averiq portfolio.",
  },
  {
    icon: BellRing,
    title: "Ongoing Vigilance",
    text: "Supply quality, complaints and regulatory updates are monitored continuously so the portfolio stays compliant long after launch.",
  },
];

const documentation = [
  [
    "Composition & Strength Details",
    "Full active-ingredient composition and strength for every product we supply",
  ],
  [
    "Batch Documentation",
    "Batch records and analysis documents provided by our manufacturing partners with each consignment",
  ],
  [
    "Storage & Handling Guidance",
    "Clear storage instructions and shelf-life information for every pack",
  ],
  [
    "Regulatory Status",
    "Rx and OTC classification declared as per the applicable Indian regulations",
  ],
  [
    "Pack & Presentation Details",
    "Pack size, presentation and visual-aid information for prescriber communication",
  ],
  [
    "Responsive Support",
    "A dedicated desk for queries on documentation, availability and product information",
  ],
];

const commitments = [
  "Sourced from trusted, certified manufacturing partners",
  "Compositions aligned with Indian regulatory requirements",
  "Rx and OTC status clearly declared on every product",
  "Batch documentation available with each consignment",
];

export default function QualityPage() {
  return (
    <>
      <section className="mesh-hero pb-16 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-600">
              Quality & Assurance
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-primary-900 sm:text-4xl lg:text-5xl">
              Verified Quality,{" "}
              <span className="gradient-text">Without Compromise.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              As an ethical pharmaceutical marketing company, we do not make
              claims we cannot support. Every range we supply is selected
              against documented quality, safety and compliance criteria — and
              backed by transparent documentation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Selection process */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Select What We Supply"
            subtitle="Four checks every product passes before it carries the Averiq name."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="relative h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
                  <span className="absolute -top-3 left-6 rounded-full bg-primary-600 px-3 py-1 text-[11px] font-extrabold text-white">
                    Step {i + 1}
                  </span>
                  <span className="mt-2 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-md shadow-primary-600/25">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-primary-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-primary-900 sm:text-3xl">
                Transparent Documentation
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                We supply the paperwork healthcare professionals actually need —
                without overstating what we do ourselves.
              </p>
              <div className="mt-8 space-y-4">
                {documentation.map(([t, d]) => (
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
                  What Our Commitment Covers
                </p>
                <ul className="mt-5 space-y-4">
                  {commitments.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                      <span className="text-sm font-semibold text-slate-700">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 p-5 text-sm text-primary-50">
                  <p className="flex items-center gap-2 font-display font-bold text-white">
                    <ShieldCheck className="h-5 w-5 text-accent-400" />
                    Our Quality Commitment
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-primary-100">
                    “Quality is everyone&apos;s responsibility. We commit to
                    supplying safe, effective and consistent products to the
                    healthcare professionals who prescribe them, while
                    continuously improving our processes.”
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Safety reporting */}
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
