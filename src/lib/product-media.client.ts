/**
 * Client-side mapping of product slugs to optimized real photo paths.
 * These are the curated lifestyle/product photos from the approved folder.
 * Falls back to SVG illustrations if no real photo is mapped.
 *
 * Safe to import from client components (no Node.js dependencies).
 */

/** Photo data structure for client-side use */
export interface ProductPhotoData {
  src: string;
  alt: string;
  blurSrc: string;
}

/** Client-safe mapping of product slugs to real photo data */
export const productRealPhotos: Record<string, ProductPhotoData> = {
  // Cosmeceuticals
  "lumiriq-ac-face-wash": {
    src: "/optimized/product/face-wash-ritual-800w.webp",
    alt: "LUMIRIQ AC Face Wash — Gentle foaming cleanser for acne-prone skin",
    blurSrc: "/optimized/hero/face-wash-ritual-blur.webp",
  },
  "lumiriq-glow-face-wash": {
    src: "/optimized/product/face-wash-ritual-800w.webp",
    alt: "LUMIRIQ GLOW Face Wash — Brightening cleanser for pigmentation care",
    blurSrc: "/optimized/hero/face-wash-ritual-blur.webp",
  },
  "uvriq-sunscreen": {
    src: "/optimized/product/sunscreen-glow-800w.webp",
    alt: "UVRIQ Whipped Invisible Sunscreen — SPF 50+ broad spectrum protection",
    blurSrc: "/optimized/hero/sunscreen-glow-blur.webp",
  },
  "lumiriq-ac-serum": {
    src: "/optimized/product/applying-serum-800w.webp",
    alt: "LUMIRIQ AC Face Serum — Clarifying serum for acne-prone skin",
    blurSrc: "/optimized/product/applying-serum-blur.webp",
  },
  // Trichology
  "rootriq-pro-hair-serum": {
    src: "/optimized/product/scalp-serum-rituals-800w.webp",
    alt: "ROOTRIQ PRO Hair Serum — Advanced hair growth formulation with Procapil, Redensyl, Anagain",
    blurSrc: "/optimized/verticals/scalp-serum-rituals-blur.webp",
  },
  "rootriq-ahf-shampoo": {
    src: "/optimized/product/applying-serum-800w.webp",
    alt: "ROOTRIQ AHF Shampoo — Hair strengthening shampoo with Redensyl & AnaGain complex",
    blurSrc: "/optimized/product/applying-serum-blur.webp",
  },
  "rootriq-h-tablets": {
    src: "/optimized/product/scalp-care-dropper-800w.webp",
    alt: "ROOTRIQ-H Tablets — Therapeutic-dose hair nutrition formula",
    blurSrc: "/optimized/product/scalp-care-dropper-blur.webp",
  },
  // Dermatology
  "avqlin-ad-gel": {
    src: "/optimized/product/applying-serum-800w.webp",
    alt: "AVqlin AD Gel — Clindamycin Phosphate & Adapalene gel for acne vulgaris",
    blurSrc: "/optimized/product/applying-serum-blur.webp",
  },
  "isotriq-20": {
    src: "/optimized/product/lab-research-800w.webp",
    alt: "ISOTRIQ-20 — Isotretinoin 20mg capsules for severe acne",
    blurSrc: "/optimized/quality/lab-research-blur.webp",
  },
  "atariq-25": {
    src: "/optimized/product/applying-serum-800w.webp",
    alt: "ATARIQ 25 — Hydroxyzine Hydrochloride tablets for allergic skin conditions",
    blurSrc: "/optimized/product/applying-serum-blur.webp",
  },
};

/** Check if a product has a real photo mapped (client-safe). */
export function hasRealPhoto(slug: string): boolean {
  return slug in productRealPhotos;
}

/** Get real photo data for a product (client-safe). */
export function getRealPhoto(slug: string): ProductPhotoData | null {
  return productRealPhotos[slug] || null;
}