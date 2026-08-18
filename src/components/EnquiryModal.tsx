"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { X, CheckCircle2, Send, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

interface EnquiryState {
  open: boolean;
  product?: string;
  openEnquiry: (product?: string) => void;
  closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryState | null>(null);

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used within EnquiryProvider");
  return ctx;
}

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<string | undefined>();

  const openEnquiry = useCallback((p?: string) => {
    setProduct(p);
    setOpen(true);
  }, []);
  const closeEnquiry = useCallback(() => setOpen(false), []);

  return (
    <EnquiryContext.Provider value={{ open, product, openEnquiry, closeEnquiry }}>
      {children}
      {open && <EnquiryModal product={product} onClose={closeEnquiry} />}
    </EnquiryContext.Provider>
  );
}

function EnquiryModal({
  product,
  onClose,
}: {
  product?: string;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      "Enquiry — Averiq Lifesciences Website",
      `Name: ${data.get("name")}`,
      `Mobile: ${data.get("mobile")}`,
      `City: ${data.get("city")}`,
      `Interest: ${data.get("interest") || product || "General enquiry"}`,
      `Message: ${data.get("message") || "-"}`,
    ].join("\n");
    const wa = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(wa, "_blank");
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-primary-950/50 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Enquiry form"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-float"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
          <div>
            <h3 className="font-display text-lg font-bold text-white">
              {submitted ? "Enquiry Sent" : "Enquire About This Formulation"}
            </h3>
            {product && !submitted && (
              <p className="text-xs font-medium text-primary-100">
                {product} — bulk supply / PCD availability
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-white/80 hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-10 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-accent-600" />
            <h4 className="mt-4 font-display text-xl font-bold text-primary-900">
              Thank you — enquiry recorded
            </h4>
            <p className="mx-auto mt-2 max-w-sm text-sm text-slate-600">
              Your enquiry has been prepared on WhatsApp. Send it to reach our
              sales desk instantly — our team typically responds within one
              business day.
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-primary-700"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 px-6 py-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1 block font-semibold text-slate-700">
                  Full Name *
                </span>
                <input
                  required
                  name="name"
                  placeholder="Dr. / Mr. / Ms. ..."
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-semibold text-slate-700">
                  Mobile / WhatsApp *
                </span>
                <input
                  required
                  type="tel"
                  name="mobile"
                  pattern="[0-9+ -]{10,15}"
                  placeholder="+91 ..."
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1 block font-semibold text-slate-700">
                  City / State
                </span>
                <input
                  name="city"
                  placeholder="Indore, MP"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-semibold text-slate-700">
                  I am a *
                </span>
                <select
                  name="interest"
                  defaultValue={product ? "Bulk Buyer / Distributor" : ""}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  <option>Doctor / Healthcare Professional</option>
                  <option>Bulk Buyer / Distributor</option>
                  <option>PCD Franchisee</option>
                  <option>Third-Party Manufacturing</option>
                  <option>Patient / Consumer</option>
                </select>
              </label>
            </div>
            <label className="block text-sm">
              <span className="mb-1 block font-semibold text-slate-700">
                Message
              </span>
              <textarea
                name="message"
                rows={3}
                placeholder="Products of interest, quantities, territory ..."
                className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/25"
            >
              <Send className="h-4 w-4" />
              Submit Enquiry
            </button>
            <p className="flex items-center gap-1.5 text-xs text-slate-500">
              <MessageCircle className="h-3.5 w-3.5 text-accent-600" />
              Submits directly to our WhatsApp sales desk for instant follow-up.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
