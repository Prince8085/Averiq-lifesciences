import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  FlaskConical,
  HeartHandshake,
  Sparkles,
  Flower2,
  Pill,
  Leaf,
  MessagesSquare,
  Eye,
  Target,
  ChevronDown,
} from "lucide-react";
import { site, therapeuticVerticals } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ProductMarquee } from "@/components/ProductMarquee";
import { ProductCatalogSearch } from "@/components/ProductCatalogSearch";
import { CertificationsStrip } from "@/components/CertificationsStrip";
import { HeroMolecularVisual } from "@/components/HeroMolecularVisual";
import { StatsCounterBar } from "@/components/StatsCounterBar";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { cn } from "@/lib/utils";

const verticalIcons = {
  Dermatology: Sparkles,
  Trichology: Flower2,
  "Dental & Oral Health": Pill,
  "Gynecology & Nutraceuticals": Leaf,
} as const;

const whyUs = [
  {
    icon: FlaskConical,
    title: "Science-Backed Formulations",
    text: "Modern drug-delivery science with clinically studied active ingredients for effective therapeutic outcomes.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Control",
    text: "Every batch backed by a Certificate of Analysis (CoA) — tested for potency, dissolution and stability.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Compositions",
    text: "Clear, honest product information. We believe in building trust through transparency and verification.",
  },
];

const heroPanels = [
  {
    label: "Our Vision",
    icon: Eye,
    tile: "from-primary-600 to-primary-700 shadow-primary-600/25",
    text: "To build a dependable and scientifically progressive life sciences organisation, empowering healthcare professionals with quality formulations and fostering sustainable growth through ethical business practices.",
  },
  {
    label: "Our Mission",
    icon: Target,
    tile: "from-accent-500 to-accent-600 shadow-accent-500/25",
    text: "Quality without compromise, innovation in formulation and partner empowerment — delivering WHO-GMP manufactured formulations that healthcare professionals can prescribe with confidence.",
  },
];

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: site.legalName,
  alternateName: "Averiq Lifesciences",
  slogan: site.tagline,
  identifier: site.cin,
  foundingDate: "2026-02-17",
  address: {
    "@type": "PostalAddress",
    streetAddress: "E-49/5, First Floor, Okhla Industrial Area, Phase II",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110020",
    addressCountry: "IN",
  },
  email: site.emailPrimary,
  telephone: site.phone,
  areaServed: "India",
  medicalSpecialty: ["Dermatology", "Trichology", "GeneralMedicine", "Nutrition"],
  founder: site.directors.map((d) => ({ "@type": "Person", name: d })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />

      {/* ============ HERO ============ */}
      <section className="mesh-hero relative overflow-hidden pb-20 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-primary-900 sm:text-5xl lg:text-[3.4rem]">
              Advancing Healthcare Through{" "}
              <span className="gradient-text">Verified Scientific Innovation</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Averiq Lifesciences develops pharmaceutical and cosmeceutical
              formulations under WHO-GMP quality standards, serving healthcare
              professionals across India.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <HeroMolecularVisual />
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-float">
              <img
                src="/media/generated/averiq-hair-and-skin-science-showcase.png"
                alt="Averiq Lifesciences — Advanced Hair and Skin Science Showcase"
                className="w-full h-auto object-cover max-h-[460px]"
              />
            </div>
          </Reveal>

          {/* Our Vision / Our Mission — reveal on hover */}
          <Reveal delay={0.24}>
            <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
              {heroPanels.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.label}
                    tabIndex={0}
                    className="group rounded-2xl border border-slate-200/70 bg-white/70 p-5 text-left shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-float focus:outline-none focus-visible:border-primary-300 focus-visible:shadow-float"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md",
                          p.tile
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-base font-bold text-primary-900">
                        {p.label}
                      </span>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                    </div>
                    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
                      <p className="overflow-hidden text-sm leading-relaxed text-slate-600">
                        <span className="block pt-3">{p.text}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CERTIFICATIONS & COMPLIANCE STRIP ============ */}
      <CertificationsStrip />

      {/* ============ THERAPEUTIC VERTICALS ============ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Therapeutic Verticals"
            title="Specialized Care, Clearly Segmented"
            subtitle="Explicit therapeutic divisions so doctors, distributors and patients find exactly what they need."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {therapeuticVerticals.map((v, i) => {
              const Icon = verticalIcons[v.slug];
              return (
                <Reveal key={v.slug} delay={i * 0.07}>
                  <Link
                    href="/#products"
                    className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-float"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-md shadow-primary-600/25 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-primary-900">
                      {v.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {v.blurb}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-accent-600">
                      View range
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ STATS COUNTER BAR ============ */}
      <StatsCounterBar />

      {/* ============ STAR FORMULATIONS (horizontal marquee & search catalog) ============ */}
      <section id="products" className="scroll-mt-20 bg-muted py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Star Formulations"
            title="Our Product Range"
            subtitle="Our complete pharmaceutical and cosmeceutical range — hover to pause and open any product for its full monograph."
          />
        </div>
        <div className="mt-12">
          <ProductMarquee speed="60s" fadeClass="from-[#f1f5f9]" />
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductCatalogSearch />
        </div>
      </section>

      {/* ============ WHY CHOOSE ============ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Averiq Difference"
            title="Why Choose Averiq"
            subtitle="What sets our formulations apart."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
                  <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/25">
                    <w.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-primary-900">
                    {w.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {w.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Verified Quality Promise Banner */}
          <Reveal delay={0.2} className="mt-12">
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-900 shadow-soft">
              <img
                src="/media/generated/verified-quality-promise.png"
                alt="Averiq Lifesciences — Verified Quality & CoA Promise"
                className="w-full h-auto object-cover max-h-[420px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <FaqSection />

      {/* ============ FINAL CTA ============ */}
      <section className="border-t border-slate-100 bg-white py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:px-8">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-2xl font-bold text-primary-900 sm:text-3xl">
              Want the full product catalog?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Get the complete product list, visual aids and pricing on WhatsApp.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi Averiq — please share the complete product list & visual aids.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent-600/25 transition-all hover:-translate-y-0.5 hover:bg-accent-500"
            >
              <MessagesSquare className="h-4 w-4" />
              Request Product List
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3.5 text-sm font-bold text-slate-700 transition-colors hover:border-primary-400 hover:text-primary-700"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
