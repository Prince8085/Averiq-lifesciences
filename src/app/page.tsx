import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  FlaskConical,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Flower2,
  Pill,
  Leaf,
  Quote,
  Truck,
  Microscope,
  Award,
  MessagesSquare,
} from "lucide-react";
import { site, therapeuticVerticals } from "@/data/site";
import { products, featuredProducts } from "@/data/products";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { ProductCard } from "@/components/ProductCard";
import { ProductVisual } from "@/components/ProductVisual";
import { VideoSlot } from "@/components/VideoSlot";
import { ProductMarquee } from "@/components/ProductMarquee";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";

const verticalIcons = {
  Dermatology: Sparkles,
  Trichology: Flower2,
  "General Medicine": Pill,
  Nutraceuticals: Leaf,
};

const metrics = [
  { value: 50, suffix: "+", label: "Formulations in Pipeline" },
  { value: 100, suffix: "%", label: "Batch Consistency & Lab Verification" },
  { value: 100, suffix: "%", label: "DCGI & FDA-Approved Compositions" },
  { value: 25, suffix: "+", label: "States Served Pan-India" },
];

const whyUs = [
  {
    icon: FlaskConical,
    title: "Advanced Molecular Formulations",
    text: "Enhanced bioavailability and superior patient compliance through modern drug-delivery science and clinically validated actives.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Quality Control",
    text: "Every batch backed by a Certificate of Analysis (CoA) with zero-tolerance QC — HPLC, dissolution and stability tested.",
  },
  {
    icon: HeartHandshake,
    title: "Uncompromising Ethics",
    text: "100% transparent compositions with zero misleading claims. Healthcare is a sacred trust — we build on verification.",
  },
];

const testimonials = [
  {
    quote:
      "The Avercin Gel formulation is exactly what my acne patients need — clinically sound actives with a cosmetically elegant base.",
    name: "Dr. Neha Sharma",
    role: "Consultant Dermatologist, Indore",
  },
  {
    quote:
      "Clean compositions, on-time dispatch and proper CoA documentation. Our pharmacy chain has stocked Averiq range with full confidence.",
    name: "Ramesh Agrawal",
    role: "Stockist & Distributor, Bhopal",
  },
  {
    quote:
      "The monopoly support kit and timely supply make Averiq an easy partner to build a PCD business around.",
    name: "Imran Qureshi",
    role: "PCD Franchise Partner, Dewas",
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
    streetAddress: "C23- Dilip Nagar, Khajrana",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452016",
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
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700">
                <ShieldCheck className="h-4 w-4" />
                WHO-GMP Certified Manufacturing
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-primary-900 sm:text-5xl lg:text-[3.4rem]">
                Advancing Healthcare Through{" "}
                <span className="gradient-text">Verified Scientific Innovation</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Averiq Lifesciences delivers state-of-the-art pharmaceutical and
                cosmeceutical formulations engineered under rigorous global
                quality benchmarks. Based in Indore, serving healthcare across
                India.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-primary-600/25 transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/30"
                >
                  Explore Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/partner"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-bold text-primary-800 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-700"
                >
                  PCD Franchise Enquiry
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2.5 text-sm font-semibold text-slate-700">
                {[
                  "✓ WHO-GMP Certified Manufacturing Standard",
                  "✓ 100% Tested Active Ingredients",
                  "✓ Pan-India Distribution Support",
                ].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Hero visual — real product photo */}
          <Reveal delay={0.2} className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-float backdrop-blur">
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-primary-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-700 ring-1 ring-primary-100">
                    Featured
                  </span>
                  <span className="rounded-full bg-accent-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-700 ring-1 ring-accent-100">
                    Cosmeceuticals
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-2xl aspect-square">
                  <Image
                    src="/products/averq-fashwash.jpg"
                    alt="Averiq FASHWASH Foaming Face Wash"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, 448px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="font-display text-sm font-bold text-white drop-shadow-lg">
                      Averiq FASHWASH
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-white/80">
                      Foaming Face Wash • Advanced Cleansing Formula
                    </p>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-4">
                  <p className="font-display text-sm font-bold text-primary-900">
                    Hair Serum & Sunscreen Range
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-slate-500">
                    SPF 50+ Broad Spectrum • Advanced Hair Growth Complex
                  </p>
                  <Link
                    href="/products"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-accent-600 hover:text-accent-700"
                  >
                    View full catalog <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* floating badges */}
              <div className="absolute -left-4 top-10 hidden rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-float backdrop-blur sm:block">
                <p className="flex items-center gap-2 text-xs font-bold text-primary-900">
                  <Award className="h-4 w-4 text-accent-500" />
                  DCGI & FDA Approved
                </p>
                <p className="mt-0.5 text-[10px] font-medium text-slate-500">
                  Compliant compositions
                </p>
              </div>
              <div className="absolute -right-2 bottom-24 hidden rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-float backdrop-blur sm:block">
                <p className="flex items-center gap-2 text-xs font-bold text-primary-900">
                  <Microscope className="h-4 w-4 text-primary-600" />
                  HPLC Lab Verified
                </p>
                <p className="mt-0.5 text-[10px] font-medium text-slate-500">
                  Every batch tested
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ VIDEO BAND (auto-play) ============ */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-600">
              Facility & Innovation
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
              Healthcare in Motion
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              A glimpse of our manufacturing facility, analytical laboratory and
              the science behind every Averiq formulation.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="mt-10">
            <VideoSlot
              title="Our Facility & Innovation in Motion"
              slot="media/hero.mp4"
            />
          </Reveal>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06}>
              <Counter value={m.value} suffix={m.suffix} label={m.label} />
            </Reveal>
          ))}
        </div>
      </section>

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
                    href={`/products?category=${encodeURIComponent(v.slug)}`}
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

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="bg-muted py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Star Formulations"
            title="Featured Product Range"
            subtitle="Crisp packaging, exact compositions, transparent pharmacology — explore our flagship formulations."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts().map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-600 px-6 py-3 text-sm font-bold text-primary-700 transition-all hover:-translate-y-0.5 hover:bg-primary-600 hover:text-white"
            >
              Browse the full catalog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ PRODUCT PHOTO SHOWCASE ============ */}
      <section className="py-20 sm:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Real Product Photography"
            title="The Averiq Range — Up Close"
            subtitle="Studio-quality product photography across our cosmeceutical, trichology and nutraceutical verticals."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {/* FASHWASH — Foaming Face Wash (bottle) */}
            <Reveal delay={0.04}>
              <Link href="/products/averq-fashwash" className="group block overflow-hidden rounded-2xl shadow-soft hover:shadow-float transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-square bg-slate-50">
                  <Image src="/products/averq-fashwash.jpg" alt="Averiq FASHWASH Foaming Face Wash" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-bold">FASHWASH</p>
                    <p className="text-white/70 text-[10px]">Foaming Face Wash</p>
                  </div>
                </div>
              </Link>
            </Reveal>
            {/* FASHWASH — Tube in water splash */}
            <Reveal delay={0.08}>
              <Link href="/products/averq-fashwash" className="group block overflow-hidden rounded-2xl shadow-soft hover:shadow-float transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-square bg-slate-50">
                  <Image src="/products/averq-fashwash-side.jpg" alt="Averiq FASHWASH tube in water splash" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-bold">FASHWASH</p>
                    <p className="text-white/70 text-[10px]">Water-Fresh Formula</p>
                  </div>
                </div>
              </Link>
            </Reveal>
            {/* FASHWASH — Tube on surface */}
            <Reveal delay={0.12}>
              <Link href="/products/averq-fashwash" className="group block overflow-hidden rounded-2xl shadow-soft hover:shadow-float transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-square bg-slate-50">
                  <Image src="/products/averq-fashwash-back.jpg" alt="Averiq FASHWASH tube on marble surface" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-bold">FASHWASH</p>
                    <p className="text-white/70 text-[10px]">Facial Cleanser</p>
                  </div>
                </div>
              </Link>
            </Reveal>
            {/* Hair Serum */}
            <Reveal delay={0.16}>
              <Link href="/products/averfol-hair-serum" className="group block overflow-hidden rounded-2xl shadow-soft hover:shadow-float transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-square bg-slate-50">
                  <Image src="/products/averfol-hair-serum.jpg" alt="Averiq Hair Serum bottle on silk" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-bold">Hair Serum</p>
                    <p className="text-white/70 text-[10px]">Trichology Care</p>
                  </div>
                </div>
              </Link>
            </Reveal>
            {/* Sunscreen Golden Tube */}
            <Reveal delay={0.2}>
              <Link href="/products/averq-sunscreen-gel" className="group block overflow-hidden rounded-2xl shadow-soft hover:shadow-float transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-square bg-slate-50">
                  <Image src="/products/averq-sunscreen-gel.jpg" alt="Averiq Sunscreen SPF 50+ golden tube" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-bold">Sunscreen SPF 50+</p>
                    <p className="text-white/70 text-[10px]">Broad Spectrum UVA/UVB</p>
                  </div>
                </div>
              </Link>
            </Reveal>
            {/* Sunscreen Beach */}
            <Reveal delay={0.24}>
              <Link href="/products/averq-sunscreen-gel" className="group block overflow-hidden rounded-2xl shadow-soft hover:shadow-float transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-square bg-slate-50">
                  <Image src="/products/averq-sunscreen-gel-side.jpg" alt="Averiq Sunscreen SPF 50+ on beach sand" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-bold">Sunscreen SPF 50+</p>
                    <p className="text-white/70 text-[10px]">Beach Protection</p>
                  </div>
                </div>
              </Link>
            </Reveal>
            {/* Sunscreen Stone */}
            <Reveal delay={0.28}>
              <Link href="/products/averq-sunscreen-gel" className="group block overflow-hidden rounded-2xl shadow-soft hover:shadow-float transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-square bg-slate-50">
                  <Image src="/products/averq-sunscreen-gel-back.jpg" alt="Averiq Sunscreen container on stone" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-bold">Sunscreen Cream</p>
                    <p className="text-white/70 text-[10px]">Natural Mineral Protection</p>
                  </div>
                </div>
              </Link>
            </Reveal>
            {/* Supplement — Hair Growth Complex */}
            <Reveal delay={0.32}>
              <Link href="/products/averfol-tablets" className="group block overflow-hidden rounded-2xl shadow-soft hover:shadow-float transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-square bg-slate-50">
                  <Image src="/products/averfol-tablets.jpg" alt="Averiq Advanced Hair Growth Complex supplement" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-bold">Hair Growth Complex</p>
                    <p className="text-white/70 text-[10px]">Biotin + Zinc + Folic Acid</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-600 px-6 py-3 text-sm font-bold text-primary-700 transition-all hover:-translate-y-0.5 hover:bg-primary-600 hover:text-white"
            >
              Explore Full Product Range
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ PRODUCT MARQUEE (auto horizontal scroll) ============ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Full Portfolio"
            title="Formulations in Motion"
            subtitle="Scrolls on its own — hover to pause. Explore the complete Averiq range across every therapeutic vertical."
          />
        </div>
        <div className="mt-12">
          <ProductMarquee />
        </div>
      </section>

      {/* ============ WHY CHOOSE ============ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Averiq Difference"
            title="Why Healthcare Professionals Choose Averiq"
            subtitle="Three pillars behind every formulation we release."
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
        </div>
      </section>

      {/* ============ B2B FRANCHISE BANNER ============ */}
      <section className="mesh-dark py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-400">
              PCD Franchise • Third-Party Manufacturing
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Expand Your Pharmaceutical Business with Monopoly Rights in Your
              District
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Join India&apos;s fast-growing healthcare network. High profit
              margins, promotional visual aid kit, timely supply and exclusive
              territory rights.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {[
                "High profit margins & monopoly territory rights",
                "Complete promotional visual aid kit & MR bags",
                "Timely, documented supply with CoA on every batch",
                "Dedicated franchise support desk",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <Truck className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent-600/30 transition-all hover:-translate-y-0.5 hover:bg-accent-500"
              >
                Become a Partner
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/quality"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-accent-400 hover:text-accent-300"
              >
                <ShieldCheck className="h-4 w-4" />
                Our Quality Standards
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-white/10 bg-white p-6 shadow-float sm:p-8">
              <h3 className="font-display text-xl font-bold text-primary-900">
                Apply for Franchise Rights
              </h3>
              <p className="mt-1 mb-6 text-sm text-slate-500">
                Quick 60-second application — no obligations.
              </p>
              <LeadForm compact />
            </div>
          </Reveal>
        </div>

        {/* Video player inside the B2B banner */}
        <Reveal className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
          <VideoSlot
            src="/media/facility.mp4"
            title="Manufacturing & Quality in Action"
            slot="media/facility.mp4"
          />
        </Reveal>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Trusted Voices"
            title="Endorsed by Doctors & Channel Partners"
            subtitle="What healthcare professionals and distributors say about working with Averiq."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-soft">
                  <Quote className="h-7 w-7 text-primary-200" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-slate-100 pt-4">
                    <p className="text-sm font-bold text-primary-900">{t.name}</p>
                    <p className="text-xs font-medium text-slate-500">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="border-t border-slate-100 bg-white py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:px-8">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-2xl font-bold text-primary-900 sm:text-3xl">
              Need the complete product list & visual aids?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Get the Averiq corporate brochure, product monographs and price list on WhatsApp.
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
