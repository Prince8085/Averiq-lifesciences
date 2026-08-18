import type { Metadata } from "next";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Building2,
  BriefcaseBusiness,
  Globe2,
  Send,
} from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Averiq Lifesciences — registered office in Indore, MP. General enquiries, sales, exports and institutional supply. WhatsApp quick-connect available.",
};

const departments = [
  {
    icon: BriefcaseBusiness,
    title: "Sales & Distribution",
    email: "sales@averiqlifesciences.com",
  },
  {
    icon: Globe2,
    title: "Exports & Institutional Supply",
    email: "exports@averiqlifesciences.com",
  },
  {
    icon: Building2,
    title: "Corporate & Franchise",
    email: "partner@averiqlifesciences.com",
  },
];

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.legalName,
  image: `${site.url}/averiq-logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "C23- Dilip Nagar, Khajrana",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452016",
    addressCountry: "IN",
  },
  telephone: site.phone,
  email: site.emailPrimary,
  url: site.url,
  openingHours: "Mo-Sa 09:30-18:30",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactJsonLd} />

      <section className="mesh-hero pb-12 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-600">
              Contact Us
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-primary-900 sm:text-4xl lg:text-5xl">
              Let&apos;s Talk Healthcare
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Doctors, distributors, franchisees and patients — our desk
              responds within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Info cards */}
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: MapPin,
                t: "Registered Office",
                lines: [site.address],
              },
              {
                icon: Mail,
                t: "Email",
                lines: [site.emailPrimary, site.emailInfo],
              },
              {
                icon: Phone,
                t: "Phone / WhatsApp",
                lines: [site.phone, `WhatsApp: ${site.whatsappDisplay}`],
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-md shadow-primary-600/25">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-display text-base font-bold text-primary-900">
                    {c.t}
                  </h2>
                  {c.lines.map((l) => (
                    <p key={l} className="mt-1.5 text-sm text-slate-600">
                      {l}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Department contacts */}
          <Reveal className="mt-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {departments.map((d) => (
                <a
                  key={d.title}
                  href={`mailto:${d.email}`}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-float"
                >
                  <d.icon className="h-6 w-6 shrink-0 text-accent-600" />
                  <div>
                    <p className="text-sm font-bold text-primary-900">{d.title}</p>
                    <p className="text-xs font-medium text-slate-500">{d.email}</p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Form + map */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft">
                <h2 className="font-display text-xl font-bold text-primary-900">
                  Send a Message
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  For general enquiries, careers or product information.
                </p>
                <ContactForm />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft">
                <iframe
                  title="Averiq Lifesciences — Registered Office, Indore"
                  src="https://www.google.com/maps?q=Khajrana,+Indore,+Madhya+Pradesh+452016&output=embed"
                  className="min-h-72 w-full flex-1 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="flex items-center gap-3 border-t border-slate-100 p-5">
                  <MessageCircle className="h-5 w-5 shrink-0 text-accent-600" />
                  <p className="text-sm text-slate-600">
                    Prefer instant? Message us on{" "}
                    <a
                      href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-accent-600 hover:text-accent-700"
                    >
                      WhatsApp
                    </a>{" "}
                    — fastest response.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  return (
    <form
      action={`mailto:${site.emailPrimary}`}
      method="post"
      encType="text/plain"
      className="mt-6 grid gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">
            Name *
          </span>
          <input
            required
            name="name"
            placeholder="Your name"
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">
            Email *
          </span>
          <input
            required
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1 block text-sm font-semibold text-slate-700">
          Subject
        </span>
        <select
          name="subject"
          defaultValue="General Enquiry"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
        >
          <option>General Enquiry</option>
          <option>Product Information</option>
          <option>PCD Franchise</option>
          <option>Third-Party Manufacturing</option>
          <option>Exports</option>
          <option>Careers</option>
        </select>
      </label>
      <label className="block">
        <span className="mb-1 block text-sm font-semibold text-slate-700">
          Message *
        </span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="How can we help?"
          className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/25"
      >
        <Send className="h-4 w-4" />
        Send Message
      </button>
    </form>
  );
}
