"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";

export function FloatingWhatsApp() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  const waUrl = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi Averiq Lifesciences 👋\nI would like to inquire about your product range and availability."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 print:hidden">
      {/* Tooltip / Popup pill */}
      <div className="hidden sm:flex items-center gap-2 rounded-full bg-white py-2 pl-4 pr-3 text-xs font-semibold text-slate-800 shadow-float border border-slate-100 animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Medical Desk Support</span>
        <button
          onClick={() => setClosed(true)}
          className="ml-1 text-slate-400 hover:text-slate-600 rounded-full p-0.5"
          aria-label="Close widget"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Averiq Lifesciences on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 hover:bg-[#20BD5C] hover:shadow-xl hover:shadow-[#25D366]/40 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      >
        <MessageCircle className="h-7 w-7 transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
}
