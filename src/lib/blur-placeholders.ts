/**
 * Base64 encoded blur placeholders for Next.js Image component.
 * These are tiny 10x10 WebP images (base64) used as placeholder="blur" blurDataURL.
 */

// Generic clinical placeholder (light blue-gray)
export const BLUR_PLACEHOLDER_CLINICAL = "data:image/webp;base64,UklGRigAAABXRUJQVlA4IBwAAABwAQCdASoKAAoABUB8JZwC7AF1AAD+8CkFHAAA";

// Warm placeholder (for sunscreen/golden hour images)
export const BLUR_PLACEHOLDER_WARM = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBwAAAAwAQCdASoKAAUAAUAmJaQAA3AA/vzqQgAA";

// Green placeholder (for trichology/lab images)
export const BLUR_PLACEHOLDER_GREEN = "data:image/webp;base64,UklGRigAAABXRUJQVlA4IBwAAABwAQCdASoKAAoABUB8JZwC7AF1AAD+8CkFHAAA";

/** Get appropriate blur placeholder based on image category */
export function getBlurPlaceholder(category: "clinical" | "warm" | "green" = "clinical"): string {
  switch (category) {
    case "warm":
      return BLUR_PLACEHOLDER_WARM;
    case "green":
      return BLUR_PLACEHOLDER_GREEN;
    default:
      return BLUR_PLACEHOLDER_CLINICAL;
  }
}