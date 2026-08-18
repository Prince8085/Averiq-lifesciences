import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Averiq Lifesciences" },
    publisher: { "@type": "Organization", name: "Averiq Lifesciences" },
  };

  return (
    <>
      <JsonLd data={schema} />
      <article className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 hover:text-primary-700"
        >
          <ArrowLeft className="h-4 w-4" />
          All articles
        </Link>
        <p className="mt-8 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">
          <span className="rounded-full bg-primary-600 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock3 className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </p>
        <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-primary-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">{post.excerpt}</p>

        <div className="mt-10 space-y-10">
          {post.body.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl font-bold text-primary-900 sm:text-2xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
          <p className="text-xs text-slate-500">
            <strong className="text-slate-700">Disclaimer:</strong> This article is
            for educational and informational purposes for healthcare
            practitioners and does not constitute medical advice. Consult a
            Registered Medical Practitioner before using any formulation.
          </p>
        </div>
      </article>
    </>
  );
}
