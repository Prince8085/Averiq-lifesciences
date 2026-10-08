import type { Metadata } from "next";
import Link from "next/link";
import {
  BriefcaseBusiness,
  Users,
  HeartHandshake,
  Factory,
  Microscope,
  Globe2,
  ShieldCheck,
  Sparkles,
  Target,
  Award,
  ArrowRight,
  Send,
  MapPin,
  Mail,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career with Averiq Lifesciences — opportunities across field sales, quality & regulatory, formulation R&D and supply chain. Send your CV to careers@averiqlifesciences.com.",
};

const careersEmail = "careers@averiqlifesciences.com";

const whyJoin = [
  {
    icon: Target,
    title: "Real Ownership",
    text: "Small, focused teams where your work directly shapes the products doctors prescribe.",
  },
  {
    icon: Sparkles,
    title: "Growth & Learning",
    text: "Hands-on exposure across dermatology, cosmeceuticals, trichology and nutraceuticals.",
  },
  {
    icon: HeartHandshake,
    title: "Collaborative Culture",
    text: "An open, respectful workplace where ideas are heard regardless of designation.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-First Mindset",
    text: "We hold every batch — and every decision — to a strict ethical and quality standard.",
  },
];

const areas = [
  {
    icon: BriefcaseBusiness,
    title: "Field Sales & Marketing",
    text: "Medical representatives, area business managers and regional sales leads across India.",
  },
  {
    icon: Microscope,
    title: "Quality & Regulatory",
    text: "QA/QC executives, analytical chemists and regulatory affairs professionals.",
  },
  {
    icon: Factory,
    title: "Formulation & R&D",
    text: "Formulation scientists and development teams working on topical and oral dosage forms.",
  },
  {
    icon: Globe2,
    title: "Supply Chain & Operations",
    text: "Procurement, warehousing, logistics and distribution coordination roles.",
  },
];

const steps = [
  { t: "Apply", d: "Send your CV and a short note telling us where you'd like to make an impact." },
  { t: "Conversation", d: "A friendly first call to understand your experience and expectations." },
  { t: "Role Fit", d: "A discussion with the team you'd join, covering the work and the way we work." },
  { t: "Offer", d: "Clear terms, a warm onboarding and a plan for your first 90 days." },
];

const departmentOptions = [
  "Field Sales & Marketing",
  "Quality & Regulatory",
  "Formulation & R&D",
  "Supply Chain & Operations",
  "General Application",
];

export default function CareerPage() {
  return (
    <>
      {/* Hero */}
      <section className="mesh-hero pb-16 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-600">
              Careers
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-primary-900 sm:text-4xl lg:text-5xl">
              Build the future of healthcare{" "}
              <span className="gradient-text">with us</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              At Averiq Lifesciences, we&apos;re building a team that takes
              healthcare personally. If you care about quality, science and
              doing right by the people who use what we make — we&apos;d love to
              hear from you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${careersEmail}?subject=${encodeURIComponent("Career Application — Averiq Lifesciences")}`}
                className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-primary-600/25 transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lg"
              >
                <Send className="h-4 w-4" />
                Send Your CV
              </a>
              <a
                href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi Averiq — I'd like to apply for a role.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-bold text-slate-700 transition-colors hover:border-primary-400 hover:text-primary-700"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why join */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Life at Averiq"
            title="Why People Join Us"
            subtitle="A young, quality-obsessed organisation where growth is earned and every contribution counts."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyJoin.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-float">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-md shadow-primary-600/25">
                    <w.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-primary-900">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {w.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Talent Pool — Always Open"
            title="Where You Can Grow"
            subtitle="We're continuously hiring across these functions. Even without a listed opening, send your CV — we keep great people on file."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-md shadow-accent-500/25">
                    <a.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-primary-900">
                      {a.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {a.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Hire"
            title="A Simple, Respectful Process"
            subtitle="Four steps, clear communication and decisions without endless waiting."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.07}>
                <div className="relative h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
                  <span className="absolute -top-3 left-6 rounded-full bg-primary-600 px-3 py-1 text-[11px] font-extrabold text-white">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-base font-bold text-primary-900">
                    {s.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-primary-900">
                  Apply Now
                </h2>
                <p className="mt-1.5 text-sm text-slate-500">
                  Tell us who you are and where you&apos;d like to contribute.
                </p>

                <form
                  action={`mailto:${careersEmail}`}
                  method="post"
                  encType="text/plain"
                  className="mt-6 grid gap-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1 block text-sm font-semibold text-slate-700">
                        Full Name *
                      </span>
                      <input
                        required
                        name="name"
                        placeholder="Your full name"
                        className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1 block text-sm font-semibold text-slate-700">
                        Email *
                      </span>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1 block text-sm font-semibold text-slate-700">
                        Phone / WhatsApp
                      </span>
                      <input
                        name="phone"
                        placeholder="+91 00000 00000"
                        className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1 block text-sm font-semibold text-slate-700">
                        Area of Interest
                      </span>
                      <select
                        name="department"
                        defaultValue={departmentOptions[0]}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                      >
                        {departmentOptions.map((d) => (
                          <option key={d}>{d}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1 block text-sm font-semibold text-slate-700">
                      Experience &amp; Current Location
                    </span>
                    <input
                      name="experience"
                      placeholder="e.g. 3 years — Indore, MP"
                      className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-sm font-semibold text-slate-700">
                      Why Averiq? *
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="A short note about you and what you'd like to build with us."
                      className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                    />
                  </label>

                  <p className="text-xs text-slate-500">
                    Please attach your CV / résumé to the email that opens when
                    you submit this form.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/25"
                  >
                    <Send className="h-4 w-4" />
                    Submit Application
                  </button>
                </form>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex h-full flex-col gap-4">
                <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-md shadow-primary-600/25">
                    <Award className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-primary-900">
                    What We Look For
                  </h3>
                  <ul className="mt-3 space-y-2.5 text-sm text-slate-600">
                    {[
                      "Integrity — doing the right thing when no one is watching",
                      "Curiosity and a genuine interest in healthcare",
                      "Ownership of your work, from start to finish",
                      "Respect for quality, process and people",
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-md shadow-accent-500/25">
                    <Users className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-primary-900">
                    Reach Our HR Desk
                  </h3>
                  <ul className="mt-3 space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                      <a
                        href={`mailto:${careersEmail}`}
                        className="hover:text-accent-700"
                      >
                        {careersEmail}
                      </a>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                      <span>{site.address}</span>
                    </li>
                  </ul>
                </div>

                <div className="mesh-dark rounded-3xl p-6 text-slate-300">
                  <p className="font-display text-base font-bold text-white">
                    Not seeing your role?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    We hire for potential as much as for experience. Write to us
                    anyway — the right people always find a place here.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent-400 hover:text-accent-300"
                  >
                    Contact our team
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
