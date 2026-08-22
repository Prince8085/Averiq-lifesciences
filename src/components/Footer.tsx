import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  ShieldCheck,
  Landmark,
} from "lucide-react";
import { site, therapeuticVerticals } from "@/data/site";
import { LogoLockup } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="mesh-dark text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <LogoLockup dark className="w-44" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Scientifically formulated, clinically validated and premium
              therapeutic products — engineered under rigorous global quality
              benchmarks in Indore, serving healthcare across India.
            </p>
            <p className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
              <Landmark className="h-3.5 w-3.5 text-accent-500" />
              CIN: {site.cin}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["About Us", "/about"],
                ["Products", "/products"],
                ["Quality Standards", "/quality"],
                ["Knowledge Hub", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 transition-colors hover:text-accent-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Therapeutic areas */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Therapeutic Areas
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {therapeuticVerticals.map((v) => (
                <li key={v.slug}>
                  <Link
                    href={`/products?category=${encodeURIComponent(v.slug)}`}
                    className="text-slate-400 transition-colors hover:text-accent-400"
                  >
                    {v.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <span>
                  <a
                    href={`mailto:${site.emailPrimary}`}
                    className="hover:text-accent-400"
                  >
                    {site.emailPrimary}
                  </a>
                  <br />
                  <a
                    href={`mailto:${site.emailInfo}`}
                    className="hover:text-accent-400"
                  >
                    {site.emailInfo}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <a
                  href={`tel:${site.phone.replace(/\D/g, "")}`}
                  className="hover:text-accent-400"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <a
                  href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-400"
                >
                  WhatsApp: {site.whatsappDisplay}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 shrink-0 text-accent-500" />
              WHO-GMP certified manufacturing partner
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-slate-500">
            The information provided on this website is intended solely for
            educational and informational purposes for healthcare practitioners
            and business associates. It does not constitute medical advice or
            substitute professional diagnosis. Formulations marked with Rx are
            Schedule H drugs and are to be sold by retail only on the
            prescription of a Registered Medical Practitioner. Averiq
            Lifesciences Private Limited does not sell prescription
            pharmaceuticals directly to retail consumers online.
          </p>
          <div className="mt-4 flex flex-col items-start justify-between gap-3 text-xs text-slate-500 sm:flex-row sm:items-center">
            <p>
              © 2026 {site.legalName}. All Rights Reserved. | {site.cin}
            </p>
            <div className="flex gap-5">
              <Link href="/legal#privacy" className="hover:text-accent-400">
                Privacy Policy
              </Link>
              <Link href="/legal#terms" className="hover:text-accent-400">
                Terms of Use
              </Link>
              <Link href="/legal#disclaimer" className="hover:text-accent-400">
                Statutory Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
