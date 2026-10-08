import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ChevronRight,
  MessageCircle,
  CheckCircle2,
  Pill,
  Package,
  Shield,
  AlertTriangle,
  FileText,
  Building2,
} from "lucide-react";
import { products, getProduct } from "@/data/products";
import { site } from "@/data/site";
import { ProductVisual } from "@/components/ProductVisual";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductTabs } from "@/components/ProductTabs";
import { EnquiryButton } from "@/components/EnquiryButton";
import { ProductMonographButton } from "@/components/ProductMonographButton";
import { VideoSlot } from "@/components/VideoSlot";
import { JsonLd } from "@/components/JsonLd";
import { hasProductVideo, productPhotoSrc, productVideoSrc } from "@/lib/product-media";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — ${product.generic}`,
    description: `${product.name} (${product.generic}). ${product.tagline}. ${product.indication} Pack: ${product.pack}.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  // Only advertise a product film when a real file exists for this slug;
  // products without one simply skip the section (no placeholder on the live site).
  const hasFilm = hasProductVideo(product.slug);
  const poster = productPhotoSrc(product.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: `${product.generic} — ${product.tagline}`,
    category: product.category,
    brand: { "@type": "Brand", name: site.name },
    manufacturer: {
      "@type": "Organization",
      name: site.legalName,
      address: site.address,
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Dosage Form", value: product.form },
      { "@type": "PropertyValue", name: "Pack Size", value: product.pack },
      { "@type": "PropertyValue", name: "Prescription Status", value: product.rx ? "Rx (Schedule H)" : "OTC" },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />

      <section className="mesh-hero pb-12 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-500"
          >
            <Link href="/" className="hover:text-primary-700">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/#products" className="hover:text-primary-700">
              Products
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>{product.category}</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-primary-700">{product.name}</span>
          </nav>

          {/* Trust badges — top strip */}
          <RevealProduct>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-[11px] font-bold text-accent-700">
                <Shield className="h-3.5 w-3.5" />
                WHO-GMP Certified
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-[11px] font-bold text-primary-700">
                <FileText className="h-3.5 w-3.5" />
                Batch Tested & CoA Available
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-bold text-slate-600">
                <Building2 className="h-3.5 w-3.5" />
                Made in India
              </span>
            </div>
          </RevealProduct>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Photo / packshot gallery */}
            <ProductGallery
              product={product}
              badges={
                <>
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-600 shadow-sm ring-1 ring-slate-100">
                    {product.category}
                  </span>
                  {product.rx && (
                    <span className="rounded-full bg-red-600/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-red-700 ring-1 ring-red-600/20">
                      Rx — Schedule H
                    </span>
                  )}
                </>
              }
            />

            {/* Info */}
            <div>
              <h1 className="font-display text-3xl font-extrabold tracking-tight text-primary-900 sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-2 text-sm font-semibold text-slate-600 sm:text-base">
                {product.generic}
              </p>
              <p className="mt-3 text-sm font-medium text-slate-700">
                {product.tagline}
              </p>

              {/* Key info cards */}
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-100 bg-white p-4">
                  <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    <Pill className="h-3.5 w-3.5" /> Form
                  </p>
                  <p className="mt-1 text-sm font-bold text-primary-900">{product.form}</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-white p-4">
                  <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    <Package className="h-3.5 w-3.5" /> Pack
                  </p>
                  <p className="mt-1 text-sm font-bold text-primary-900">{product.pack}</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-white p-4">
                  <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    <Shield className="h-3.5 w-3.5" /> Type
                  </p>
                  <p className="mt-1 text-sm font-bold text-primary-900">
                    {product.rx ? "Rx — Schedule H" : "OTC"}
                  </p>
                </div>
              </div>

              {/* Rx Warning */}
              {product.rx && (
                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4">
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                    <div>
                      <p className="text-sm font-bold text-red-800">Prescription Required</p>
                      <p className="mt-1 text-xs text-red-700">
                        This is a Schedule H drug. To be sold only on the prescription of a Registered Medical Practitioner.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Key benefits */}
              <ul className="mt-6 space-y-2.5">
                {product.benefits.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <EnquiryButton product={product} />
                <ProductMonographButton product={product} />
              </div>
              <p className="mt-4 text-xs text-slate-500">
                <MessageCircle className="mr-1 inline h-3.5 w-3.5 text-[#25D366]" />
                Send a WhatsApp message with full product details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ===== Product film — rendered only for products that actually have one ===== */}
          {hasFilm && (
            <div className="mb-14">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-accent-600">
                    Product Film
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-extrabold text-primary-900 sm:text-3xl">
                    Watch {product.name} in Action
                  </h2>
                  <p className="mt-1.5 max-w-xl text-sm text-slate-500">
                    See the texture, application and packaging up close.
                  </p>
                </div>
              </div>
              <VideoSlot
                src={productVideoSrc(product.slug)}
                title={`${product.name} — product film`}
                poster={poster ?? undefined}
              />
            </div>
          )}

          <ProductTabs product={product} />

          {/* Trust strip at bottom */}
          <div className="mt-16 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
            <div className="flex flex-wrap items-center justify-center gap-6 text-center">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Shield className="h-5 w-5 text-accent-600" />
                <span className="font-semibold">WHO-GMP Certified</span>
              </div>
              <div className="h-4 w-px bg-slate-200" />
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <FileText className="h-5 w-5 text-primary-600" />
                <span className="font-semibold">Certificate of Analysis</span>
              </div>
              <div className="h-4 w-px bg-slate-200" />
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Building2 className="h-5 w-5 text-accent-600" />
                <span className="font-semibold">Manufactured in India</span>
              </div>
            </div>
          </div>

          {/* Related products */}
          <div className="mt-16">
            <h2 className="font-display text-xl font-bold text-primary-900">
              More in {product.category}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products
                .filter((p) => p.slug !== product.slug && p.category === product.category)
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft transition-all hover:-translate-y-1 hover:shadow-float"
                  >
                    <ProductVisual
                      form={p.form}
                      name={p.name}
                      from={p.color.from}
                      to={p.color.to}
                      className="h-16 w-16 shrink-0"
                    />
                    <div>
                      <p className="font-display text-sm font-bold text-primary-900 group-hover:text-primary-600">
                        {p.name}
                      </p>
                      <p className="mt-0.5 line-clamp-2 text-xs text-slate-500">{p.generic}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/** Simple wrapper to avoid importing the full Reveal animation on a server component */
function RevealProduct({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
