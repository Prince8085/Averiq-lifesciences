import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mesh-hero flex min-h-[70vh] items-center justify-center px-4 py-28">
      <div className="text-center">
        <p className="gradient-text font-display text-7xl font-extrabold sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold text-primary-900 sm:text-3xl">
          This formulation page doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-slate-600">
          The page may have moved or never existed. Let&apos;s get you back to
          the catalog.
        </p>
        <Link
          href="/products"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-primary-600/25 transition-all hover:-translate-y-0.5 hover:bg-primary-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Browse Products
        </Link>
      </div>
    </section>
  );
}
