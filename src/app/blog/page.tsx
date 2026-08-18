import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, PenLine } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Knowledge Hub & Medical Insights",
  description:
    "Clinical updates, skincare & haircare formulation guides and pharma business insights from Averiq Lifesciences.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  return (
    <>
      <section className="mesh-hero pb-12 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Knowledge Hub"
            title="Medical Insights & Clinical Updates"
            subtitle="Evidence-backed reads for healthcare professionals, formulators and pharma entrepreneurs."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group flex flex-col gap-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-float lg:flex-row lg:items-center"
            >
              <div className="flex-1">
                <p className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">
                  <span className="rounded-full bg-primary-600 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    Featured
                  </span>
                  <span>{featured.category}</span>
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock3 className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </p>
                <h2 className="mt-4 font-display text-2xl font-bold text-primary-900 transition-colors group-hover:text-primary-600">
                  {featured.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                  {featured.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-accent-600">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-float"
                >
                  <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-primary-600">
                    <PenLine className="h-3.5 w-3.5" />
                    {post.category}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug text-primary-900 transition-colors group-hover:text-primary-600">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock3 className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
