import fs from "node:fs";
import path from "node:path";

/**
 * Server-only helpers for real product media in `public/products/`.
 *
 * Real assets follow a strict naming convention so a slug is all that is
 * needed: `<slug>.jpg` for the packshot photo, `<slug>.mp4` for the product
 * film. A product may ship with either, both, or neither — pages should ask
 * these helpers instead of guessing.
 *
 * Not safe to import from client components (uses `node:fs`).
 */

const MEDIA_DIR = path.join(process.cwd(), "public", "products");

function exists(file: string): boolean {
  try {
    return fs.existsSync(path.join(MEDIA_DIR, file));
  } catch {
    return false;
  }
}

/** True when a real `<slug>.mp4` product film is present. */
export function hasProductVideo(slug: string): boolean {
  return exists(`${slug}.mp4`);
}

/** True when a real `<slug>.jpg` packshot photo is present. */
export function hasProductPhoto(slug: string): boolean {
  return exists(`${slug}.jpg`);
}

/** Public URL of the product film. Only meaningful when `hasProductVideo` is true. */
export function productVideoSrc(slug: string): string {
  return `/products/${slug}.mp4`;
}

/** Public URL of the packshot, or `null` when none exists. */
export function productPhotoSrc(slug: string): string | null {
  return hasProductPhoto(slug) ? `/products/${slug}.jpg` : null;
}

/**
 * Client-side mapping of product slugs to optimized real photo paths.
 * These are the curated lifestyle/product photos from the approved folder.
 * Falls back to SVG illustrations if no real photo is mapped.
 */
export const productRealPhotos: Record<string, {
  src: string;
  alt: string;
  blurSrc: string;
}> = {
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
  // Dermatology
  "avqlin-ad-gel": {
    src: "/optimized/product/dermatologist-exam-800w.webp",
    alt: "AVqlin AD Gel — Clindamycin Phosphate & Adapalene gel for acne vulgaris",
    blurSrc: "/optimized/quality/dermatologist-exam-blur.webp",
  },
  "isotriq-20": {
    src: "/optimized/product/lab-research-800w.webp",
    alt: "ISOTRIQ-20 — Isotretinoin 20mg capsules for severe acne",
    blurSrc: "/optimized/quality/lab-research-blur.webp",
  },
};

/** Check if a product has a real photo mapped (client-safe). */
export function hasRealPhoto(slug: string): boolean {
  return slug in productRealPhotos;
}

/** Get real photo data for a product (client-safe). */
export function getRealPhoto(slug: string) {
  return productRealPhotos[slug] || null;
}