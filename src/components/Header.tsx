"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { products, type Category } from "@/data/products";

function itemsFor(label: string) {
  return products.filter((p) => p.category === (label as Category));
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setProductsOpen(false);
    setActiveCategory(null);
  };

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
                    "invisible absolute left-0 top-full z-50 w-72 translate-y-1 rounded-xl border border-slate-100 bg-white/95 p-1.5 opacity-0 shadow-float backdrop-blur transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
                    productsOpen && "visible translate-y-0 opacity-100"
                  )}
                >
                  {link.children.map((child) => {
                    const items = itemsFor(child.label);
                    const isOpen = activeCategory === child.label;
                    return (
                      <div key={child.label}>
                        <button
                          type="button"
                          onClick={() => setActiveCategory(isOpen ? null : child.label)}
                          onMouseEnter={() => setActiveCategory(child.label)}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                        >
                          <span>{child.label}</span>
                          <ChevronDown
                            className={cn(
                              "h-3.5 w-3.5 text-slate-400 transition-transform duration-200",
                              isOpen && "rotate-180"
                            )}
                          />
                        </button>
                        {isOpen && (
                          <div className="ml-2 border-l-2 border-primary-100 pb-1 pl-2">
                            {items.length > 0 ? (
                              items.map((p) => (
                                <Link
                                  key={p.slug}
                                  href={`/products/${p.slug}`}
                                  onClick={closeMenus}
                                  className="block rounded-md px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-primary-50 hover:text-primary-600"
                                >
                                  {p.name}
                                </Link>
                              ))
                            ) : (
                              <span className="block px-2.5 py-1.5 text-xs text-slate-400">
                                Coming soon
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
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
            href="/contact"
            className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/25"
          >
            Contact Us
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
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-slate-100 bg-white/95 px-4 pb-6 pt-2 backdrop-blur lg:hidden"
          aria-label="Mobile"
        >
          {navLinks.map((link) =>
            "children" in link ? (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={closeMenus}
                  className="block px-2 py-2.5 text-sm font-bold text-slate-800"
                >
                  {link.label}
                </Link>
                <div className="mb-1 ml-3 border-l border-slate-200 pl-3">
                  {link.children.map((child) => {
                    const items = itemsFor(child.label);
                    const isOpen = activeCategory === child.label;
                    return (
                      <div key={child.label}>
                        <button
                          type="button"
                          onClick={() => setActiveCategory(isOpen ? null : child.label)}
                          className="flex w-full items-center justify-between py-1.5 text-sm font-medium text-slate-600"
                        >
                          <span>{child.label}</span>
                          <ChevronDown
                            className={cn(
                              "h-3 w-3 text-slate-400 transition-transform duration-200",
                              isOpen && "rotate-180"
                            )}
                          />
                        </button>
                        {isOpen && (
                          <div className="ml-2 border-l border-primary-100 pb-1 pl-2">
                            {items.length > 0 ? (
                              items.map((p) => (
                                <Link
                                  key={p.slug}
                                  href={`/products/${p.slug}`}
                                  onClick={closeMenus}
                                  className="block rounded px-2 py-0.5 text-xs text-slate-500 hover:text-primary-600"
                                >
                                  {p.name}
                                </Link>
                              ))
                            ) : (
                              <span className="block px-2 py-0.5 text-xs text-slate-400">
                                Coming soon
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenus}
                className="block px-2 py-2.5 text-sm font-bold text-slate-800"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="sticky bottom-0 border-t border-slate-100 bg-white/95 px-2 pb-2 pt-3">
            <div className="flex flex-col gap-2">
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
                href="/contact"
                onClick={closeMenus}
                className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-bold text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
