"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  const products = navLinks.find((l) => l.label === "Products");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled || mobileOpen
          ? "glass border-slate-200/70 shadow-sm"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Averiq Lifesciences home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            "children" in link ? (
              <div
                key={link.label}
                className="group relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                    pathname.startsWith("/products")
                      ? "text-primary-600"
                      : "text-slate-700 hover:text-primary-600"
                  )}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      productsOpen && "rotate-180"
                    )}
                  />
                </Link>
                <div
                  className={cn(
                    "invisible absolute left-0 top-full w-60 translate-y-1 rounded-xl border border-slate-100 bg-white/95 p-2 opacity-0 shadow-float backdrop-blur transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
                    productsOpen && "visible translate-y-0 opacity-100"
                  )}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-primary-50 hover:text-primary-700"
                    >
                      {child.label}
                    </Link>
                  ))}
                  <Link
                    href="/products"
                    className="mt-1 block rounded-lg border-t border-slate-100 px-3 py-2 text-sm font-bold text-primary-600 hover:bg-primary-50"
                  >
                    View all products →
                  </Link>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                  pathname === link.href
                    ? "text-primary-600"
                    : "text-slate-700 hover:text-primary-600"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Right CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-primary-300 hover:text-primary-700"
          >
            <Phone className="h-4 w-4 text-accent-600" />
            Request Product List
          </a>
          <Link
            href="/partner"
            className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/25"
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="border-t border-slate-100 bg-white/95 px-4 pb-6 pt-2 backdrop-blur lg:hidden"
          aria-label="Mobile"
        >
          {navLinks.map((link) =>
            "children" in link ? (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-2 py-2.5 text-sm font-bold text-slate-800"
                >
                  {link.label}
                </Link>
                <div className="mb-1 ml-3 border-l border-slate-200 pl-3">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block py-1.5 text-sm font-medium text-slate-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="block px-2 py-2.5 text-sm font-bold text-slate-800"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="mt-3 flex flex-col gap-2 px-2">
            <a
              href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700"
            >
              <Phone className="h-4 w-4 text-accent-600" />
              Request Product List
            </a>
            <Link
              href="/partner"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-bold text-white"
            >
              Partner With Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
