# Media Slots

Drop real assets in here and they light up automatically — no code changes needed.

## 🎬 Videos

| File | Where it plays |
| --- | --- |
| `hero.mp4` | Homepage "Healthcare in Motion" band — **auto-plays, muted, loops** (16:9, ≤10MB, H.264 recommended) |
| `facility.mp4` | Homepage **PCD franchise banner** — "Manufacturing & Quality in Action" (auto-plays, muted, loops) |
| `products/<slug>.mp4` | **Every product detail page** — "Watch <product> in Action" film band (auto-plays, muted, loops) |
| `hero-poster.jpg` | Poster frame shown while the hero video buffers |

Until a file exists, an animated branded placeholder renders in its place.

## 🎞️ Product films

Each product detail page has its own video band. Drop `products/<slug>.mp4` in and
it **auto-plays, muted and looping** right beside the product details. Until the file
exists, an animated branded placeholder with the exact file path shows instead.

Example: `public/products/averq-fashwash.mp4`, `public/products/averq-sunscreen-gel.mp4`.

- Format: MP4 (H.264), 16:9, ≤10MB recommended, landscape.
- Film ideas: texture squeeze, gel spread, serum dropper, packshot rotation, real-life usage clip.

## 📷 Product Photos

| File | Where it shows |
| --- | --- |
| `products/<slug>-front.jpg` | Product card + gallery main view + marquee tile |
| `products/<slug>-side.jpg` | Gallery "Side" thumbnail |
| `products/<slug>-back.jpg` | Gallery "Back" thumbnail |

`<slug>` = the product URL slug, e.g. `avercin-gel`, `averiq-glow-serum`, `averfol-hair-serum`.

- Size: square (1:1), 800×800px+ recommended, JPG/WebP.
- While a photo is missing, the branded SVG packshot illustration shows instead.
- The 360° view auto-rotates the packshot — replace it later with a real 360° video/render.

## ✍️ Tips

- Compress videos with `ffmpeg -i in.mp4 -c:v libx264 -crf 26 -preset slow -movflags +faststart hero.mp4`
- Compress photos to WebP with `ffmpeg -i in.jpg -q:v 75 out.webp` (rename to `.jpg` or update `ProductImage.tsx`)
