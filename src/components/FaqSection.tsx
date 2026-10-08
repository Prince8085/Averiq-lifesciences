"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Are Averiq Lifesciences products manufactured under WHO-GMP standards?",
    a: "Yes. All pharmaceutical, cosmeceutical, and nutraceutical formulations from Averiq Lifesciences are produced in state-of-the-art facilities adhering strictly to WHO-GMP guidelines and DCGI quality standards.",
    category: "Quality & Manufacturing",
  },
  {
    q: "How can doctors and healthcare professionals request product samples or LBLs?",
    a: "Healthcare professionals can request medical samples and LBL (Leave-Behind Literature) directly by contacting our desk at contact@averiqlifesciences.com or via WhatsApp using the quick request button on any product page.",
    category: "Doctors & Samples",
  },
  {
    q: "Are Certificates of Analysis (CoA) available for batch verification?",
    a: "Absolutely. Every batch manufactured under the Averiq Lifesciences label is subjected to rigorous analytical testing for assay potency, dissolution rate, microbiological limits, and stability. CoAs are available upon request for verification.",
    category: "Quality & Manufacturing",
  },
  {
    q: "Where is Averiq Lifesciences located and where do you ship?",
    a: "Our corporate office is situated at E-49/5, First Floor, Okhla Industrial Area, Phase II, New Delhi 110020. We supply formulations across medical institutions, stockists, and distribution networks across India.",
    category: "General",
  },
  {
    q: "What therapeutic areas does Averiq Lifesciences specialize in?",
    a: "We focus on Dermatology (anti-acne gels, retinoids, antihistamines), Cosmeceuticals (brightening & clarifying face washes and serums), Trichology (hair growth serums, anti-hair fall shampoos), and Oral / Nutraceutical care.",
    category: "Products",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Clear Answers for Healthcare Professionals & Partners"
          subtitle="Everything you need to know about our quality standards, formulation science, and distribution support."
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.q} delay={i * 0.05}>
                <div
                  className={cn(
                    "rounded-2xl border bg-white transition-all duration-300 shadow-soft overflow-hidden",
                    isOpen ? "border-primary-300 ring-2 ring-primary-500/10" : "border-slate-200/80 hover:border-slate-300"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors",
                        isOpen ? "bg-primary-600 text-white" : "bg-slate-100 text-slate-600"
                      )}>
                        Q{i + 1}
                      </span>
                      <span className="font-display text-base font-bold text-primary-900 sm:text-lg">
                        {faq.q}
                      </span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300",
                        isOpen && "rotate-180 text-primary-600"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 pt-1 sm:px-6 border-t border-slate-100">
                      <p className="text-sm leading-relaxed text-slate-600 pl-11">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
