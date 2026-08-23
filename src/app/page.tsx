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
} from "lucide-react";
import { site, therapeuticVerticals } from "@/data/site";
import { featuredProducts } from "@/data/products";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { JsonLd } from "@/components/JsonLd";

const verticalIcons = {
  Dermatology: Sparkles,
  Trichology: Flower2,
  "General Medicine": Pill,
  Nutraceuticals: Leaf,
};

const whyUs = [
  {
    icon: FlaskConical,
    title: "Science-Backed Formulations",
    text: "Modern drug-delivery science with clinically validated active ingredients for effective therapeutic outcomes.",
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
          <Reveal delay={0.24}>
            <div className="mt-10">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-8 py-4 text-sm font-bold text-white shadow-md shadow-primary-600/25 transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/30"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
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
            subtitle="Explore our range of pharmaceutical and cosmeceutical products."
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
        </div>
      </section>

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
