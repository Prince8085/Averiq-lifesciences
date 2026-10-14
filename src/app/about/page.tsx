import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Eye,
  HeartHandshake,
  ShieldCheck,
  BadgeCheck,
  Globe2,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { LogoLockup } from "@/components/Logo";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "AVERIQ LIFESCIENCES PVT LTD. — a New Delhi-based pharmaceutical marketing company driven by Advanced • Verified • Quality.",
};

const commitment = [
  {
    icon: HeartHandshake,
    title: "Trusted Sourcing",
    text: "We work only with trusted and certified manufacturing units — evaluated on certification, audit history and compliance before any product is considered.",
  },
  {
    icon: BadgeCheck,
    title: "Quality-Conscious Selection",
    text: "Compositions, pack details, shelf life and regulatory status are reviewed against documented criteria so only suitable products carry the Averiq name.",
  },
  {
    icon: Globe2,
    title: "Reliable Supply",
    text: "Dependable availability and consistent delivery to doctors, clinics and institutions, backed by a responsive desk for product information.",
  },
  {
    icon: ShieldCheck,
    title: "Customer Trust",
    text: "Clear, honest product information and transparent communication — no unsupported claims, no shortcuts, and long-term relationships over one-time sales.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Who We Are */}
      <section className="mesh-hero pb-16 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-600">
              Corporate Profile
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-primary-900 sm:text-4xl lg:text-5xl">
              About Averiq Lifesciences
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Averiq Lifesciences Private Limited is a forward-thinking
              pharmaceutical company dedicated to redefining healthcare
              standards. Founded with a vision to deliver excellence, we operate
              strictly on an ethical medical marketing model. We believe that
              true healthcare innovation is achieved by working directly with
              doctors, specialists, and healthcare practitioners to understand
              patient needs and provide precise, effective solutions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-primary-900 sm:text-3xl">
              Our Philosophy
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Driven by our guiding principle —{" "}
              <strong className="text-primary-900">
                Advanced • Verified • Quality
              </strong>{" "}
              — we go beyond merely offering healthcare products; we build
              long-term, trusted therapeutic brands. By maintaining a clean,
              transparent, and professionally driven operational model, we
              ensure that every formulation bearing the Averiq name stands for
              uncompromising efficacy, clinical safety, and strict regulatory
              compliance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
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
                  To be a trusted and leading name in the Indian pharmaceutical
                  sector, recognized for our ethical standards, premium product
                  quality, and diverse multi-specialty healthcare offerings.
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
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  To continuously expand our therapeutic reach by introducing
                  scientifically backed formulations across various medical
                  disciplines, ensuring that healthcare professionals have
                  access to the best possible treatments for their patients.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Commitment to Standards */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quality & Trust"
            title="Our Commitment to Standards"
            subtitle="Simple, dependable standards — from the way we source, to the way we supply."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {commitment.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-md shadow-primary-600/25">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-primary-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {c.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mesh-dark py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
          <div>
            <LogoLockup dark className="mx-auto w-48 lg:mx-0" />
            <p className="mt-4 max-w-xl text-sm text-slate-300">
              {site.legalName} | {site.address}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent-600/30 transition-all hover:-translate-y-0.5 hover:bg-accent-500"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
