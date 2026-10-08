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
import { SlideInVisual } from "@/components/SlideInVisual";
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

const verticalImages = {
  Dermatology: "/media/generated/advanced-microsphere-acne-treatment-infographic.png",
  Trichology: "/media/generated/trichology--peptide-serum-hair-science.png",
  "Dental & Oral Health": "/media/generated/lumiriq-glow-brightening-skincare-infographic.png",
  "Gynecology & Nutraceuticals": "/media/generated/rootriq-h-advanced-hair-nutrition-infographic.png",
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

      {/* ============ 1. HERO SECTION (Split 2-Column Desktop Grid Layout) ============ */}
      <section className="mesh-hero relative overflow-hidden pb-20 pt-28 sm:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left Content Column */}
            <div>
              <Reveal delay={0.05}>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary-700 shadow-xs">
                  <Sparkles className="h-3.5 w-3.5 text-accent-600" />
                  SCIENCE • HEALTHCARE • TOMORROW
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-primary-900 sm:text-5xl lg:text-[3.2rem]">
                  Advancing Healthcare Through{" "}
                  <span className="gradient-text">Verified Scientific Innovation</span>
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                  Averiq Lifesciences develops pharmaceutical, cosmeceutical, and
                  trichology formulations under WHO-GMP quality standards, serving
                  healthcare professionals across India.
                </p>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/#products"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-primary-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-primary-600/25 transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lg"
                  >
                    Explore Products
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-bold text-slate-700 backdrop-blur transition-all hover:border-primary-400 hover:bg-white hover:text-primary-700"
                  >
                    Get in Touch
                  </Link>
                </div>
              </Reveal>

              {/* Vision / Mission Interactive Panels */}
              <Reveal delay={0.25} className="mt-10">
                <div className="grid gap-3 sm:grid-cols-2">
                  {heroPanels.map((p) => {
                    const Icon = p.icon;
                    return (
                      <div
                        key={p.label}
                        tabIndex={0}
                        className="group rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-left shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-float focus:outline-none"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md",
                              p.tile
                            )}
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="font-display text-sm font-bold text-primary-900">
                            {p.label}
                          </span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:rotate-180" />
                        </div>
                        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
                          <p className="overflow-hidden text-xs leading-relaxed text-slate-600">
                            <span className="block pt-2.5">{p.text}</span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>

            {/* Right Hero Visual Column (Science Showcase Image) */}
            <SlideInVisual direction="right" delay={0.2} className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-float">
                <img
                  src="/media/generated/averiq-hair-and-skin-science-showcase.png"
                  alt="Averiq Lifesciences — Advanced Hair and Skin Science Showcase"
                  className="w-full h-auto object-cover max-h-[520px] transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </SlideInVisual>
          </div>
        </div>
      </section>

      {/* ============ 2. TRUST & COMPLIANCE BAR ============ */}
      <CertificationsStrip />

      {/* ============ 3. THERAPEUTIC VERTICALS (Categories Section) ============ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Therapeutic Verticals"
            title="Specialized Care, Clearly Segmented"
            subtitle="Explicit therapeutic divisions so doctors, distributors and patients find exactly what they need."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {therapeuticVerticals.map((v, i) => {
              const Icon = verticalIcons[v.slug];
              const imgUrl = verticalImages[v.slug];
              return (
                <Reveal key={v.slug} delay={i * 0.07}>
                  <Link
                    href="/#products"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-float"
                  >
                    {/* Category visual header */}
                    <div className="relative h-40 overflow-hidden bg-slate-900">
                      <img
                        src={imgUrl}
                        alt={v.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                      <span className="absolute bottom-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-md">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-base font-bold text-primary-900">
                        {v.title}
                      </h3>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">
                        {v.blurb}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-accent-600">
                        Explore range
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 4. FEATURED PRODUCT RANGE SHOWCASE BANNER ============ */}
      <section className="bg-slate-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SlideInVisual direction="up" delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
              <img
                src="/media/generated/averiq-skincare-innovation-showcase.png"
                alt="Averiq Lifesciences — Featured Product Range Showcase"
                className="w-full h-auto object-cover max-h-[460px] transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </SlideInVisual>
        </div>
      </section>

      {/* ============ 5. STAR FORMULATIONS & LIVE SEARCH CATALOG ============ */}
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

      {/* ============ 6. KEY HIGHLIGHTS / METRICS BAR ============ */}
      <StatsCounterBar />

      {/* ============ WHY CHOOSE AVERIQ ============ */}
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
          <SlideInVisual direction="left" delay={0.2} className="mt-12">
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-900 shadow-soft">
              <img
                src="/media/generated/verified-quality-promise.png"
                alt="Averiq Lifesciences — Verified Quality & CoA Promise"
                className="w-full h-auto object-cover max-h-[420px] transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </SlideInVisual>
        </div>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <FaqSection />

      {/* ============ 7. BOTTOM CALL-TO-ACTION BANNER ============ */}
      <section className="mesh-dark border-t border-slate-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">
                Partner &amp; Distribution
              </span>
              <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
                Let&apos;s Build a Healthier Tomorrow
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Connect with us for product inquiries, institutional supply, or distribution partnerships across India.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi Averiq Lifesciences — I would like to inquire about product range & availability.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent-600/30 transition-all hover:-translate-y-0.5 hover:bg-accent-500"
              >
                <MessagesSquare className="h-4 w-4" />
                Request Product List
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-all hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
