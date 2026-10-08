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
