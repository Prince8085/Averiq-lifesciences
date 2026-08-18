import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Legal & Compliance",
  description:
    "Statutory pharma disclaimer, privacy policy and terms of use for Averiq Lifesciences.",
};

const sections = [
  {
    id: "disclaimer",
    title: "Statutory Pharma Disclaimer",
    body: [
      "The information provided on this website is intended solely for educational and informational purposes for healthcare practitioners and business associates. It does not constitute medical advice or substitute professional diagnosis or treatment.",
      "Formulations marked with Rx are Schedule H drugs under the Drugs and Cosmetics Act, 1940, and are to be sold by retail only on the prescription of a Registered Medical Practitioner.",
      "Averiq Lifesciences Private Limited is a registered corporate manufacturer and wholesale distributor. We do not sell prescription pharmaceuticals directly to retail consumers online.",
      "Product claims are based on published literature and manufacturer data. Always consult a physician before using any pharmaceutical, cosmeceutical or nutraceutical product.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    body: [
      "We collect information you voluntarily provide through enquiry forms, partnership applications and contact messages — including your name, contact details, location and business information.",
      "This information is used solely to respond to your enquiry, process partnership applications, and provide product information you request. We do not sell or rent your personal data to third parties.",
      "Enquiries submitted via WhatsApp are transmitted through WhatsApp's encrypted channel to our official business account.",
      "You may request access to, correction of, or deletion of your personal data at any time by writing to " + site.emailPrimary + ".",
    ],
  },
  {
    id: "terms",
    title: "Terms of Use",
    body: [
      "By accessing this website you agree to use its content for lawful, informational purposes only. Product information is provided for healthcare professionals and business associates in India.",
      "All content, branding, logos and product names are the property of " + site.legalName + " and may not be reproduced without written consent.",
      "Prices, pack configurations and product availability may change without notice. Please contact our sales desk for the current product list and rates.",
      "Averiq Lifesciences is not liable for any loss arising from reliance on website content. For medical advice, always consult a Registered Medical Practitioner.",
      "These terms are governed by the laws of India, with jurisdiction at Indore, Madhya Pradesh.",
    ],
  },
];

export default function LegalPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-600">
        Legal & Compliance
      </p>
      <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-primary-900 sm:text-4xl">
        Statutory Information
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {site.legalName} | CIN: {site.cin} | {site.address}
      </p>

      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-7 shadow-soft"
          >
            <h2 className="font-display text-xl font-bold text-primary-900">
              {s.title}
            </h2>
            <div className="mt-4 space-y-3">
              {s.body.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
