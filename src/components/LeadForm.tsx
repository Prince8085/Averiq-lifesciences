"use client";

import { useState } from "react";
import { CheckCircle2, Send, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

const inputCls =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100";
const labelCls = "mb-1 block text-sm font-semibold text-slate-700";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const lines = [
      "PCD Franchise Application — Averiq Lifesciences",
      `Name: ${d.get("name")}`,
      `Firm: ${d.get("firm") || "-"}`,
      `Mobile/WhatsApp: ${d.get("mobile")}`,
      `Email: ${d.get("email") || "-"}`,
      `State: ${d.get("state")}`,
      `District: ${d.get("district")}`,
      `Experience: ${d.get("experience")}`,
      `Drug License: ${d.get("license")}`,
      `GST: ${d.get("gst") || "-"}`,
      `Budget: ${d.get("budget")}`,
      `Interest: ${d.get("message") || "-"}`,
    ].join("\n");
    window.open(
      `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(lines)}`,
      "_blank"
    );
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent-200 bg-accent-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent-600" />
        <h4 className="mt-4 font-display text-xl font-bold text-primary-900">
          Application received!
        </h4>
        <p className="mx-auto mt-2 max-w-sm text-sm text-slate-600">
          Your application has been prepared on WhatsApp. Our franchise desk
          will review your territory and revert within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {!compact && (
        <div className="grid gap-4 sm:grid-cols-2">
          <label>
            <span className={labelCls}>Full Name *</span>
            <input required name="name" placeholder="Your full name" className={inputCls} />
          </label>
          <label>
            <span className={labelCls}>Business / Firm Name</span>
            <input name="firm" placeholder="Firm / company name" className={inputCls} />
          </label>
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span className={labelCls}>WhatsApp Mobile Number *</span>
          <input
            required
            type="tel"
            name="mobile"
            pattern="[0-9+ -]{10,15}"
            placeholder="+91 ..."
            className={inputCls}
          />
        </label>
        <label>
          <span className={labelCls}>Email</span>
          <input type="email" name="email" placeholder="you@example.com" className={inputCls} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span className={labelCls}>State *</span>
          <input required name="state" placeholder="Madhya Pradesh" className={inputCls} />
        </label>
        <label>
          <span className={labelCls}>Targeted District / Territory *</span>
          <input required name="district" placeholder="e.g. Indore, Gwalior" className={inputCls} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <label>
          <span className={labelCls}>Pharma Experience</span>
          <select name="experience" defaultValue="" className={inputCls}>
            <option value="" disabled>
              Select
            </option>
            <option>0–2 years</option>
            <option>2–5 years</option>
            <option>5+ years</option>
          </select>
        </label>
        <label>
          <span className={labelCls}>Drug License</span>
          <select name="license" defaultValue="" className={inputCls}>
            <option value="" disabled>
              Select
            </option>
            <option>Yes — available</option>
            <option>Applied</option>
            <option>No — need guidance</option>
          </select>
        </label>
        <label>
          <span className={labelCls}>GST Number (optional)</span>
          <input name="gst" placeholder="23XXXXX..." className={inputCls} />
        </label>
      </div>
      {!compact && (
        <>
          <label>
            <span className={labelCls}>Investment Budget Range</span>
            <select name="budget" defaultValue="" className={inputCls}>
              <option value="" disabled>
                Select range
              </option>
              <option>₹50,000 – ₹2,00,000</option>
              <option>₹2 – ₹5 Lakhs</option>
              <option>₹5 Lakhs+</option>
            </select>
          </label>
          <label>
            <span className={labelCls}>Products of Interest / Message</span>
            <textarea
              name="message"
              rows={3}
              placeholder="Dermatology range, hair care, monopoly requirements ..."
              className={inputCls + " resize-none"}
            />
          </label>
        </>
      )}
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/25"
      >
        <Send className="h-4 w-4" />
        Apply for Franchise
      </button>
      <p className="flex items-center gap-1.5 text-xs text-slate-500">
        <MessageCircle className="h-3.5 w-3.5 text-accent-600" />
        Dispatched instantly to our franchise desk via WhatsApp.
      </p>
    </form>
  );
}
