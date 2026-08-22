"use client";

import { MessageSquareText } from "lucide-react";
import { site } from "@/data/site";
import type { Product } from "@/data/products";

/**
 * Opens WhatsApp with a pre-filled product enquiry message.
 * No modal — direct WhatsApp redirect with full product details.
 */
export function EnquiryButton({
  product,
  label = "Enquire on WhatsApp",
  className = "",
}: {
  product?: Product | string;
  label?: string;
  className?: string;
}) {
  const name = typeof product === "string" ? product : product?.name || "General Enquiry";
  const details = typeof product === "object" && product
    ? `\n\nProduct: ${product.name}\nComposition: ${product.generic}\nForm: ${product.form} | Pack: ${product.pack}\n${product.rx ? "Type: Rx (Schedule H)" : "Type: OTC"}`
    : "";

  const message = `Hi Averiq Lifesciences 👋

I'm interested in the following product and would like to know more about availability, pricing, and ordering.

${details || `Product: ${name}`}

Please share the details. Thank you!`;

  const waUrl = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-md shadow-[#25D366]/25 transition-all hover:-translate-y-0.5 hover:bg-[#20BD5C] hover:shadow-lg hover:shadow-[#25D366]/30 " +
        className
      }
    >
      <MessageSquareText className="h-4 w-4" />
      {label}
    </a>
  );
}
