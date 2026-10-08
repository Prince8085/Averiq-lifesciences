"use client";

import { Download } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductMonographButton({ product }: { product: Product }) {
  const handleDownload = () => {
    // Set document title temporarily for print filename suggestion
    const oldTitle = document.title;
    document.title = `${product.name} - Product Monograph (Averiq Lifesciences)`;
    window.print();
    setTimeout(() => {
      document.title = oldTitle;
    }, 1000);
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-primary-300 hover:bg-slate-50 hover:text-primary-800 hover:shadow"
    >
      <Download className="h-4 w-4 text-primary-600" />
      <span>Download Product Monograph (PDF)</span>
    </button>
  );
}
