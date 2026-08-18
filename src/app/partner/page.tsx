import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  FileText,
  StickyNote,
  Gift,
  Megaphone,
  BadgePercent,
  Truck,
  ShieldCheck,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { TerritoryChecker } from "@/components/TerritoryChecker";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "PCD Pharma Franchise & Third-Party Manufacturing",
  description:
    "Join the Averiq Lifesciences PCD pharma franchise network — monopoly distribution rights in Madhya Pradesh and across India, high margins, full marketing kit, WHO-GMP certified manufacturing.",
};

const supportKit = [
  {
    icon: FileText,
    title: "Visual Aids & LBLs",
    text: "Professionally designed leave-behind literature, product visual aids and branded prescription pads.",
  },
  {
    icon: StickyNote,
    title: "Doctor Reminder Cards",
    text: "Catch covers, reminder cards and brand reminders that keep your portfolio top-of-mind.",
  },
  {
    icon: Gift,
    title: "Sample Kits & Gifts",
    text: "Product samples, pens, notepads and MR bags to fuel every field visit.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Support",
    text: "Local lead forwarding, branded WhatsApp assets and social media creatives for your territory.",
  },
];

const franchiseBenefits = [
  "Monopoly distribution rights in your district",
  "High profit margins on the full product range",
  "On-time documented supply with CoA on every batch",
  "No minimum investment barriers to start",
  "Complete promotional & marketing support kit",
  "Dedicated franchise relationship manager",
];

const faqs = [
  {
    q: "What investment is required to start a PCD franchise?",
    a: "Entry-level franchises typically begin around ₹50,000. Most partners choose the ₹2–5 lakh range for a wider portfolio and stronger territory coverage. Higher investments unlock expanded monopoly areas and additional support.",
  },
  {
    q: "Do I need a drug license to become a franchisee?",
    a: "A wholesale drug license (Form 20B/21B) is required to operate. If you don't have one yet, you can apply and complete the documentation while your license is being processed — our desk guides you through it.",
  },
  {
    q: "Which territories are available?",
    a: "Use the territory checker above to check a pincode or district instantly. We grant exclusive monopoly rights for defined territories across Madhya Pradesh and expanding pan-India.",
  },
  {
    q: "How does third-party / loan license manufacturing work?",
    a: "We manufacture your formulations at our WHO-GMP certified facility under your brand name, with complete documentation, stability data and regulatory support. Share your product list for a quote.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function PartnerPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="mesh-hero pb-14 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-600">
              B2B • PCD Franchise • Third-Party Manufacturing
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-primary-900 sm:text-4xl lg:text-5xl">
              Join India&apos;s Fast-Growing Healthcare Network —{" "}
              <span className="gradient-text">Monopoly PCD Pharma Franchise</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Exclusive territory rights, high margins and a complete marketing
              arsenal — powered by WHO-GMP certified manufacturing in Indore,
              Madhya Pradesh.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              { icon: BadgePercent, t: "High Margins", s: "Best-in-class MRP margins" },
              { icon: Truck, t: "On-Time Supply", s: "Documented dispatch, pan-India" },
              { icon: ShieldCheck, t: "GMP Certified", s: "WHO-GMP compliant facility" },
            ].map((x) => (
              <div
                key={x.t}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-soft backdrop-blur"
              >
                <x.icon className="h-6 w-6 shrink-0 text-accent-600" />
                <div>
                  <p className="text-sm font-bold text-primary-900">{x.t}</p>
                  <p className="text-xs text-slate-500">{x.s}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Territory checker */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="flex items-center gap-2 text-primary-600">
                <MapPin className="h-5 w-5" />
                <h2 className="font-display text-2xl font-bold text-primary-900 sm:text-3xl">
                  Check Your Territory Availability
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Enter your pincode or district to instantly verify whether
                exclusive monopoly rights are open in your area. Open
                territories can be reserved with your application.
              </p>
              <div className="mt-6 space-y-3">
                {franchiseBenefits.map((b) => (
                  <p key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                    {b}
                  </p>
                ))}
              </div>
              <Link
                href="/quality"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 hover:text-primary-700"
              >
                Review our quality standards <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <TerritoryChecker />
              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 text-xs text-slate-500 shadow-soft">
                <p className="flex items-center gap-2 font-bold text-primary-900">
                  <Building2 className="h-4 w-4 text-accent-600" />
                  Also manufacturing for your brand?
                </p>
                <p className="mt-1.5 leading-relaxed">
                  Third-party and loan-license manufacturing available at our
                  Indore facility — tablets, capsules, gels, creams, serums and
                  more. Share your formulation list for a confidential quote.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Support kit */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Franchise Support Kit"
            title="Everything You Need to Win Your Market"
            subtitle="A complete promotional arsenal, supplied free with every franchise partnership."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {supportKit.map((k, i) => (
              <Reveal key={k.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-md shadow-accent-500/25">
                    <k.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-primary-900">
                    {k.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{k.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-20" id="apply">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl shadow-float">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="mesh-dark p-8 sm:p-10">
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Start Your Franchise Application
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Fill the application and our franchise desk will connect with
                  you within one business day with territory confirmation,
                  product list and the complete support kit overview.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    ["1", "Share your details & target territory"],
                    ["2", "Verify drug license & budget fit"],
                    ["3", "Receive agreement, product list & kit"],
                    ["4", "Launch with onboarding support"],
                  ].map(([n, t]) => (
                    <div key={n} className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-xs font-extrabold text-accent-400 ring-1 ring-accent-500/40">
                        {n}
                      </span>
                      <p className="pt-1 text-sm font-medium text-slate-200">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 sm:p-10">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Franchise Questions, Answered" />
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-primary-900 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-xl text-accent-600 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
