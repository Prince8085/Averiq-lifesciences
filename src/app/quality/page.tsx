import type { Metadata } from "next";
import {
  ShieldCheck,
  FileCheck2,
  BellRing,
  BadgeCheck,
  HeartHandshake,
  Check,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Quality & Assurance",
  description:
    "Advance Verified Quality at Averiq Lifesciences — how we select what we supply, the documentation we provide, and our commitment to ethical, transparent pharmaceutical marketing.",
};

const process = [
  {
    icon: HeartHandshake,
    title: "Elite Partner Selection",
    text: "We collaborate exclusively with state-of-the-art, WHO-GMP-certified manufacturing units. Before initiating any partnership, we meticulously evaluate the facility's audit history, certifications, and past compliance records to ensure they meet our exacting corporate standards.",
  },
  {
    icon: FileCheck2,
    title: "Scientific Formulation Review",
    text: "Whether it is our current advanced dermatological range or our upcoming Dental and Gynecology divisions, every formulation is thoroughly vetted. Active ingredients, compositional balance, and product stability are verified against the latest clinical needs and medical research.",
  },
  {
    icon: BadgeCheck,
    title: "Absolute Regulatory Compliance",
    text: "We strictly adhere to all Indian cosmetic and pharmaceutical regulations. Every product label, packaging design, and therapeutic claim undergoes a rigorous legal and clinical review. We ensure absolute accuracy — what is stated on the label is exactly what is delivered in the formulation, with zero exaggerated claims.",
  },
  {
    icon: BellRing,
    title: "Batch-to-Batch Consistency",
    text: "Our quality control does not end at the product launch. We implement continuous monitoring protocols to ensure that from the first batch to the hundredth, the safety, efficacy, and premium quality of our products remain unequivocally consistent.",
  },
];

const documents = [
  {
    title: "Clear Composition & Strength",
    text: "Accurate and completely transparent declarations of all active ingredients.",
  },
  {
    title: "Authentic Batch Records",
    text: "Verified batch analysis and testing documents provided by our certified manufacturing partners.",
  },
  {
    title: "Honest Clinical Claims",
    text: "Scientifically backed therapeutic indications without overstated or misleading results.",
  },
  {
    title: "Optimal Storage Guidelines",
    text: "Clear, practical instructions for shelf-life and storage to ensure maximum product efficacy reaches the end-user.",
  },
];

export default function QualityPage() {
  return (
    <>
      {/* Hero */}
      <section className="mesh-hero pb-16 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-600">
              Quality & Assurance
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-primary-900 sm:text-4xl lg:text-5xl">
              Advance Verified Quality:{" "}
              <span className="gradient-text">Our Ultimate Benchmark</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Averiq Lifesciences is a strictly ethical pharmaceutical company.
              As a premium brand owner, our focus goes beyond simply bringing
              products to market; we are dedicated to delivering a standard of
              quality that doctors and healthcare professionals can trust
              without hesitation. &ldquo;Advance Verified Quality&rdquo; is not
              just our tagline — it is the foundational promise behind every
              formulation that carries the Averiq name.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Stringent Process"
            title="The Four Pillars of Averiq's Quality Control"
            subtitle="Operating as a brand-building entity rather than a direct manufacturer requires exceptional oversight. Our selection and monitoring processes are among the most rigorous in the industry. No product enters the Averiq portfolio until it clears these four critical steps:"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="relative h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
                  <span className="absolute -top-3 left-6 rounded-full bg-primary-600 px-3 py-1 text-[11px] font-extrabold text-white">
                    Step {i + 1}
                  </span>
                  <span className="mt-2 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-md shadow-primary-600/25">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-primary-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Clinical Transparency */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-600">
                Clinical Transparency
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-primary-900 sm:text-3xl">
                Complete Clinical Transparency
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                We believe in empowering healthcare professionals with the
                precise, honest documentation they need to prescribe with
                absolute confidence. Our clinical transparency model includes:
              </p>
              <div className="mt-8 space-y-5">
                {documents.map((d) => (
                  <div key={d.title} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    <div>
                      <p className="text-sm font-bold text-primary-900">
                        {d.title}
                      </p>
                      <p className="text-sm text-slate-600">{d.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-float">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Our Quality Pledge
                </p>
                <div className="mt-5 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 p-6 text-sm">
                  <p className="font-display font-bold text-white">
                    Our Quality Pledge
                  </p>
                  <p className="mt-3 italic leading-relaxed text-primary-100">
                    &ldquo;For us, quality is not a choice; it is a fundamental
                    responsibility. We are committed to supplying only safe,
                    highly effective, and strictly compliant products to the
                    healthcare professionals who prescribe them. At Averiq
                    Lifesciences, patient safety and clinical integrity will
                    always take precedence over business.&rdquo;
                  </p>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                    <div>
                      <p className="text-sm font-bold text-primary-900">
                        What Our Commitment Covers
                      </p>
                      <ul className="mt-2 space-y-2">
                        {[
                          "Sourced from trusted, WHO-GMP-certified manufacturing partners",
                          "Compositions aligned with Indian regulatory requirements",
                          "Rx and OTC status clearly declared on every product",
                          "Batch documentation available with each consignment",
                        ].map((c) => (
                          <li
                            key={c}
                            className="flex items-start gap-2 text-sm text-slate-700"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Responsive Clinical Support */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-start gap-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-soft sm:flex-row sm:items-center sm:p-10">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/25">
                <BellRing className="h-7 w-7" />
              </span>
              <div className="flex-1">
                <h2 className="font-display text-2xl font-bold text-primary-900">
                  Responsive Clinical Support
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                  We stand completely behind the quality of every Averiq
                  product. If healthcare professionals or patients have any
                  queries regarding our product documentation, ingredient
                  formulation, or overall quality, our support team is always
                  accessible. We are committed to addressing all product-related
                  feedback promptly to maintain the highest standards of clinical
                  trust.
                </p>
              </div>
              <a
                href="mailto:careers@averiqlifesciences.com"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary-600 px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-700"
              >
                <BellRing className="h-4 w-4" />
                Contact Our Team
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
