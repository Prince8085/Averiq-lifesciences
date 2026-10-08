import { ShieldCheck, FileCheck2, Award, Landmark } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "WHO-GMP Certified",
    desc: "Strict adherence to World Health Organization Good Manufacturing Practices.",
  },
  {
    icon: FileCheck2,
    title: "Batch CoA Verified",
    desc: "100% batch testing for potency, dissolution, purity and stability.",
  },
  {
    icon: Award,
    title: "DCGI Standards",
    desc: "Formulations compliant with Drug Controller General of India guidelines.",
  },
  {
    icon: Landmark,
    title: "Registered Enterprise",
    desc: "CIN: U46492MP2026PTC082170 · Incorporated in India.",
  },
];

export function CertificationsStrip() {
  return (
    <section className="border-y border-slate-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((b) => (
            <div key={b.title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <b.icon className="h-6 w-6" />
              </span>
              <div>
                <h4 className="font-display text-sm font-bold text-primary-900">
                  {b.title}
                </h4>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
