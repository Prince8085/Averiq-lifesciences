"use client";

import { MessageSquareText } from "lucide-react";
import { useEnquiry } from "@/components/EnquiryModal";

export function EnquiryButton({
  product,
  label = "Enquire for Bulk Supply / PCD",
  className = "",
}: {
  product?: string;
  label?: string;
  className?: string;
}) {
  const { openEnquiry } = useEnquiry();
  return (
    <button
      onClick={() => openEnquiry(product)}
      className={
        "inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-primary-600/25 transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/30 " +
        className
      }
    >
      <MessageSquareText className="h-4 w-4" />
      {label}
    </button>
  );
}
