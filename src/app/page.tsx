import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  HeartHandshake,
  ShieldCheck,
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
import { JsonLd } from "@/components/JsonLd";
import { HeroCarousel } from "@/components/HeroCarousel";
import { TrichologyFeatureCard } from "@/components/TrichologyFeatureCard";
import { cn } from "@/lib/utils";
import { products } from "@/data/products";
import CircularGallery from "@/components/CircularGallery";
import { hasProductPhoto, productPhotoSrc } from "@/lib/product-media";

const verticalIcons = {
  Dermatology: Sparkles,
  Trichology: Flower2,
  "Dental & Oral Health": Pill,
  "Gynecology & Nutraceuticals": Leaf,
} as const;

const whyUs = [
  {
    icon: HeartHandshake,
    title: "Uncompromising Ethical Approach",
    text: "Averiq Lifesciences operates strictly on an ethical medical marketing model. We completely bypass franchise or PCD systems, choosing instead to partner directly with doctors and specialists to deliver genuine, highly effective therapeutic solutions for patients.",
  },
  {
    icon: BadgeCheck,
    title: "The Promise of Advanced • Verified • Quality",
    text: "Our guiding philosophy is the foundation of every product we offer. As a premium brand owner, we partner only with trusted and certified manufacturing units to ensure that every product meets the highest safety, quality, and industry standards.",
  },
  {
    icon: Globe2,
    title: "Future-Ready Multi-Specialty Vision",
    text: "While we currently drive innovation through cutting-edge dermatological and cosmeceutical therapies, our vision is to build a broad, comprehensive healthcare portfolio. We are actively laying the groundwork for upcoming divisions in Dental Care, Gynecology, and General Medicine.",
  },
  {
    icon: ShieldCheck,
    title: "Clinical Transparency & Trust",
    text: "Healthcare professionals choose Averiq because our therapeutic claims are scientifically backed and driven by proven efficacy. Our entire operational framework is built on absolute clinical transparency, ensuring that doctors can rely on the science and integrity behind every formulation we offer.",
  },
];

const heroPanels = [
  {
    label: "Our Vision",
    icon: Eye,
    tile: "from-primary-600 to-primary-700 shadow-primary-600/25",
    text: "To be a trusted and leading name in the Indian pharmaceutical sector, recognized for our ethical standards, premium product quality, and diverse multi-specialty healthcare offerings.",
  },
  {
    label: "Our Mission",
    icon: Target,
    tile: "from-accent-500 to-accent-600 shadow-accent-500/25",
    text: "To continuously expand our therapeutic reach by introducing scientifically backed formulations across various medical disciplines, ensuring that healthcare professionals have access to the best possible treatments for their patients.",
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

const galleryItems = products
  .filter((p) => hasProductPhoto(p.slug))
  .map((p) => ({
    image: productPhotoSrc(p.slug) as string,
    text: p.name,
    description: `${p.generic} · ${p.form}`,
    alt: `${p.name} — ${p.form} packshot`,
  }));

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />

      {/* ============ HERO ============ */}
            <section className="relative overflow-hidden min-h-screen bg-[#f8faf6]">
              <Image
                src="/media/hero/radiant-skincare-botanical.webp"
                alt=""
                fill
                priority
                sizes="100vw"
                className="hidden object-cover object-center sm:block"
              />
              {/* Keep the existing hero content while removing the rotating background carousel. */}
              <HeroCarousel
                slides={[]}
                interval={6000}
                alt="Averiq Lifesciences — Advancing Healthcare Ethically"
                priority
              />
            </section>

      {/* ============ WELCOME ============ */}
            <section className="relative overflow-hidden border-y border-slate-100 pt-8 pb-20 sm:pt-8 sm:pb-24">
              {/* Background Image - Scientist in Lab */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/optimized/about/lab-scientist-background-1920w.webp"
                  alt="Averiq Lifesciences — Pharmaceutical Research Laboratory"
                  fill
                  priority={false}
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRigAAABXRUJQVlA4IBwAAABwAQCdASoKAAoABUB8JZwC7AF1AAD+8CkFHAAA"
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover object-right"
                  quality={90}
                />
                {/* Subtle gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40 sm:from-white sm:via-white/80 sm:to-transparent" />
                {/* Bottom wave/gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-900/40 to-transparent" />
              </div>

              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeading
                  eyebrow="Introduction"
                  title="Welcome to Averiq Lifesciences"
                  subtitle="An ethical, quality-driven pharmaceutical company built for long-term therapeutic partnerships."
                />
                <Reveal delay={0.08}>
                                  <div className="mx-auto mt-12 max-w-2xl space-y-5 text-left prose-body text-slate-600">
                    <p>
                      At Averiq Lifesciences Private Limited, we are committed to
                      elevating patient care through a specialized and diverse
                      healthcare portfolio. As an ethical pharmaceutical company, we
                      partner closely with medical professionals to provide highly
                      effective, compliant, and quality-assured treatments.
                    </p>
                    <p>
                      Driven by our core philosophy of Advanced • Verified • Quality,
                      our journey begins with cutting-edge dermatological and
                      cosmeceutical therapies, with a strong, steadfast vision to
                      expand into comprehensive multi-specialty medicine. Whether it
                      is our current specialized ranges or our upcoming therapeutic
                      divisions, our focus remains unchanged: improving lives through
                      science.
                    </p>
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
                              subtitle="Explicit therapeutic divisions so doctors and patients find exactly what they need."
                            />
                            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                              {therapeuticVerticals.map((v, i) => {
                                const Icon = verticalIcons[v.slug];
                                const isComingSoon = "comingSoon" in v && v.comingSoon;
                                return (
                                  <Reveal key={v.slug} delay={i * 0.07}>
                                    {isComingSoon ? (
                                      <div className="group flex h-full flex-col rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 shadow-soft transition-all duration-300">
                                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 text-slate-400 shadow-sm">
                                          <Icon className="h-6 w-6" />
                                        </span>
                                        <h3 className="mt-5 font-display text-lg font-bold text-slate-500">
                                          {v.title}
                                        </h3>
                                        <p className="mt-2 flex-1 prose-body text-slate-400">
                                          {v.blurb}
                                        </p>
                                        <span className="mt-4 inline-flex items-center gap-1.5">
                                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider">
                                            Coming Soon
                                          </span>
                                        </span>
                                      </div>
                                    ) : (
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
                                        <p className="mt-2 flex-1 prose-body text-slate-600">
                                                                      {v.blurb}
                                                                    </p>
                                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-accent-600">
                                          View range
                                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                        </span>
                                      </Link>
                                    )}
                                  </Reveal>
                                );
                              })}
                            </div>
                          </div>
                        </section>

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

      {/* ============ WHY CHOOSE AVERIQ ============ */}
      <section className="border-t border-slate-100 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Averiq Difference"
            title="Why Choose Averiq"
            subtitle="What sets Averiq apart as an ethical, quality-driven pharmaceutical company."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.07}>
                <div className="group relative h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-float">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-md shadow-primary-600/25 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold leading-snug text-primary-900">
                    {item.title}
                  </h3>
                  <span className="mt-3 block h-1 w-10 rounded-full bg-gradient-to-r from-accent-500 to-primary-600" />
                  <p className="mt-4 prose-body text-slate-600">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

            {/* ============ PRODUCT GALLERY ============ */}
      <section className="border-t border-slate-100 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Product Gallery"
            title="Explore Our Formulations"
            subtitle="Drag, scroll or swipe through the Averiq range — open any packshot to read its composition."
          />
        </div>
        <div className="relative mt-10 h-[440px] sm:h-[560px] lg:h-[620px]">
          <CircularGallery
            items={galleryItems}
            bend={2.6}
            itemAspect={0.8}
            gap={0.24}
            borderRadius={0.06}
            textColor="#0f172a"
            font="bold 30px ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
            scrollSpeed={2}
            scrollEase={0.06}
            autoScroll={0.25}
            fadeEdges={0.1}
            shadow={0.3}
          />
        </div>
      </section>

            
{/* ============ FINAL CTA ============ */}
                              <section className="mesh-dark border-t border-slate-800 py-16 text-slate-300">
                                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:px-8">
                                  <div className="text-center lg:text-left">
                                    <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                                      Get in Touch with Averiq Lifesciences
                                    </h2>
                                    <p className="mt-2 text-[17px] font-semibold leading-[1.85] text-slate-200">
                                      Connect with our desk for product inquiries, institutional supply, or general information.
                                    </p>
                                  </div>
                                  <div className="flex flex-wrap justify-center gap-3">
                                    <a
                                      href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi Averiq Lifesciences — I would like to inquire about your product range.")}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent-600/25 transition-all hover:-translate-y-0.5 hover:bg-accent-500"
                                    >
                                      <MessagesSquare className="h-4 w-4" />
                                      Request Product Information
                                    </a>
                                    <Link
                                      href="/contact"
                                      className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                                    >
                                      Contact Our Desk
                                    </Link>
                                  </div>
                                </div>
                              </section>
    </>
  );
}
