# Averiq Lifesciences — Combined Photo Analysis & Placement Recommendation Report

**Folders Analyzed:**
1. `clients photo/` — 16 images (client-selected)
2. `newwwwwww/` — 79 images (additional assets)

**Total: 95 images analyzed**  
**Date:** November 2026  
**Status:** For Client Review — Implementation Awaits Approval

---

## Executive Summary

| Folder | Premium Lifestyle | UI Icons/Illustrations | Stock/Generic | Total |
|--------|-------------------|------------------------|---------------|-------|
| `clients photo/` | 4 | 3 | 9 | 16 |
| `newwwwwww/` | **6** | 2 | **71** | 79 |
| **Combined** | **10** | **5** | **80** | **95** |

**Key Finding:** Only **10 images** (10.5%) are premium quality suitable for hero/editorial placement. **80 images (84%)** are low-resolution stock photos with Freepik watermarks in filenames (`F_XXXXXXXX` pattern) — **recommend discarding entirely**. The remaining 5 are small UI icons/illustrations for vectorization.

---

## 1. The "Hero Ten" — Premium Images for Primary Placement

### From `clients photo/` (4 images)

| # | Filename | Dimensions | Aspect | Size | Best Placement |
|---|----------|------------|--------|------|----------------|
| 1 | **Gentle Foamy Face Wash Ritual.png** | 1122×1402 | 0.80 (4:5) | 2.2 MB | Homepage Hero (mobile), Face Wash product pages |
| 2 | **Radiant Outdoor Sunscreen Glow.png** | 1672×941 | 1.78 (16:9) | 1.8 MB | Homepage Hero (desktop), UVRIQ Sunscreen page |
| 3 | **Scalp Serum Rituals_ Oil and Shine.png** | 1774×887 | 2.00 (2:1) | 2.3 MB | Trichology vertical card (asymmetric), Hair Serum pages |
| 4 | **Serene Natural Skincare Portrait.png** | 1122×1402 | 0.80 (4:5) | 2.2 MB | About Hero, Quality sidebar, Contact page |

### From `newwwwwww/` (6 images)

| # | Filename | Dimensions | Aspect | Size | Best Placement |
|---|----------|------------|--------|------|----------------|
| 5 | **Scalp Care with a Glass Dropper-2.png** | 1122×1402 | 0.80 (4:5) | 2.3 MB | **Trichology Hero** (alternate to #3), ROOTRIQ PRO page |
| 6 | **Dermatologist Examining Patient's Skin.png** | 1448×1086 | 1.33 (4:3) | 2.2 MB | **Quality/Trust Hero**, About "Clinical Transparency", Dermatology vertical |
| 7 | **Applying Hair Serum with a Dropper-1.png** | 1122×1402 | 0.80 (4:5) | 2.0 MB | **Trichology product ritual**, ROOTRIQ AHF Shampoo page |
| 8 | **Skincare Research in the Modern Lab.png** | 1672×941 | 1.78 (16:9) | 1.8 MB | **Quality Hero**, "Four Pillars" section, R&D credibility |
| 9 | **imgi_32_5-image-collage-scaled-e1773576706913.png** | 844×1500 | 0.56 (9:16) | 1.6 MB | **Gallery/Collage section** (vertical storytelling) |
| 10 | **imgi_31_website-model-copy-1-e1773577738722.png** | 1024×1132 | 0.90 (10:11) | 1.3 MB | **About/Team section**, "Meet Our Experts" if added |

---

## 2. Specialized Assets (Named Purpose Files)

| Filename | Dimensions | Aspect | Size | Purpose | Recommendation |
|----------|------------|--------|------|---------|----------------|
| **imgi_43_SUNSCREEN.jpg** | 1600×569 | 2.81 (ultra-wide) | 121 KB | Sunscreen banner | Use as **UVRIQ page header banner** (crop to 16:9) |
| **imgi_38_HOEMPAGE-BANNER_1.jpg** | 880×726 | 1.21 | 102 KB | Homepage banner | **Discard** — low res, typo in filename, generic |
| **imgi_252_1024W_F_495998927_...jpg** | 1024×2855 | 0.36 (ultra-tall) | 564 KB | Infographic | **Discard** — stock, weird aspect, Freepik watermark |
| **imgi_1_Untitled-design-2023-09-15T105115.067.png** | 638×526 | 1.21 | 531 KB | Canva design export | **Discard** — "Untitled design", low res, amateur |

---

## 3. UI Icons / Small Illustrations (Vectorize These)

| Filename | Dimensions | Size | Source Folder | Likely Content |
|----------|------------|------|---------------|----------------|
| `imgi_67_ANTI-AGING-4.png` | 320×285 | 143 KB | clients photo | Anti-aging serum drop/leaf |
| `imgi_69_5.png` / `imgi_69_5 (1).png` | 320×285 | 159 KB | **Both folders** | Skincare flask/droplet (duplicate) |
| `imgi_80_HAIR-NOURISHMENT-8.png` | 300×271 | 124 KB | clients photo | Hair strand/oil drop |
| `imgi_56_360_F_1992756948_...webp` | 880×360 | 13 KB | newwwwwww | Tiny banner — **discard** |

**Action:** Trace to SVG, use as inline components for badges, category pills, "Clinically Proven" chips.

---

## 4. Stock Photos — DISCARD (80 images)

**All 71 JPEGs from `newwwwwww/` + 9 from `clients photo/` share these traits:**
- Filename pattern: `imgi_XXX_1000_F_XXXXXXXX_...` (Freepik/Shutterstock IDs)
- Dimensions: Mostly 1000×558, 1000×667, 1000×747 (standard stock ratios)
- File sizes: 50–240 KB (heavily compressed)
- Content: Generic labs, doctors in coats, test tubes, pills, abstract science backgrounds
- **Zero brand alignment** — indistinguishable from any pharma website

**Verdict:** **Do not use anywhere visible.** If client insists, only as:
- 5% opacity blurred texture behind `.mesh-dark` sections
- **Strongly recommend:** Delete or archive; replace with CSS gradients

---

## 5. Combined Placement Strategy — All 10 Premium Images

### HOMEPAGE

```
┌────────────────────────────────────────────────────────────────────┐
│ HERO SECTION (Responsive Image Swap)                               │
│ ┌────────────────────────────────────────────────────────────────┐ │
│ │ MOBILE/TABLET (<1024px):                                        │ │
│ │   Gentle Foamy Face Wash Ritual (4:5 portrait)                 │ │
│ │   Full-bleed, frosted glass content overlay                    │ │
│ │                                                                 │ │
│ │ DESKTOP (≥1024px):                                              │ │
│ │   Radiant Outdoor Sunscreen Glow (16:9) — PRIMARY              │ │
│ │   OR Skincare Research in Modern Lab (16:9) — ALTERNATE        │ │
│ │   Split: Image 60% | Content 40% (lg:grid-cols-[1.1fr_0.9fr])  │ │
│ └────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ THERAPEUTIC VERTICALS (4-Card Grid → 3 Icons + 1 Feature)        │
│ ┌──────────────┐ ┌──────────────┐ ┌────────────────────────────┐  │
│ │ Dermatology  │ │Cosmeceuticals│ │ TRICHOLOGY (FEATURE CARD)  │  │
│ │   (icon)     │ │   (icon)     │ │  ┌──────────────────────┐  │  │
│ └──────────────┘ └──────────────┘ │  │ Scalp Serum Rituals  │  │  │
│ ┌──────────────┐                  │  │ (2:1 ultra-wide)     │  │  │
│ │Gyn/Nutraceut │                  │  │  Spans 2 cols on lg  │  │  │
│ │   (icon)     │                  │  └──────────────────────┘  │  │
│ └──────────────┘                  └────────────────────────────┘  │
│        ▲                                                            │
│   Uses: Scalp Care with Glass Dropper-2 (alt)                    │
└────────────────────────────────────────────────────────────────────┘
```

### ABOUT US PAGE

```
┌────────────────────────────────────────────────────────────────────┐
│ WHO WE ARE HERO                                                     │
│ ┌────────────────────────────────────────────────────────────────┐ │
│ │ Serene Natural Skincare Portrait (4:5)                         │ │
│ │ Left: Image 45% | Right: Content 55% (lg:grid-cols-[0.9fr_1.1fr])│
│ │ "Ethical pharma, human-first" — portrait proves it             │ │
│ └────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ OUR PHILOSOPHY / VISION & MISSION — Keep icon cards (consistent)  │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ OPTIONAL: "OUR EXPERTS" SECTION (New)                              │
│ ┌────────────────────────────────────────────────────────────────┐ │
│ │ imgi_31_website-model-copy (10:11) — Doctor/Researcher portrait│ │
│ │ Grid of 3-4 expert cards if team page added                    │ │
│ └────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
```

### QUALITY & ASSURANCE PAGE

```
┌────────────────────────────────────────────────────────────────────┐
│ HERO — Keep typography-focused (current mesh-hero works)           │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ FOUR PILLARS — Keep icon cards                                     │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ CLINICAL TRANSPARENCY (Split Layout)                               │
│ ┌──────────────────────────┐ ┌──────────────────────────────────┐ │
│ │ Content: Checklist items │ │ Dermatologist Examining Patient  │ │
│ │ (left, 60%)              │ │ Skin (4:3, right 40%)            │ │
│ │                          │ │ "Real doctors. Real verification."│ │
│ └──────────────────────────┘ └──────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ QUALITY PLEDGE BOX — Add lab image as subtle bg                    │
│ ┌────────────────────────────────────────────────────────────────┐ │
│ │ Skincare Research in Modern Lab (16:9) at 10% opacity          │ │
│ │ Behind gradient pledge box — reinforces "science-backed"       │ │
│ └────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
```

### PRODUCT DETAIL PAGES (Featured Products)

| Product | Primary Hero Image | Alternate/Crop |
|---------|-------------------|----------------|
| **LUMIRIQ AC Face Wash** | Gentle Foamy Face Wash Ritual | — |
| **LUMIRIQ GLOW Face Wash** | Gentle Foamy Face Wash Ritual (diff crop) | — |
| **UVRIQ Sunscreen** | Radiant Outdoor Sunscreen Glow | imgi_43_SUNSCREEN (cropped 16:9) |
| **ROOTRIQ PRO Hair Serum** | Scalp Serum Rituals Oil and Shine | Scalp Care with Glass Dropper-2 |
| **ROOTRIQ AHF Shampoo** | Applying Hair Serum with Dropper-1 | Scalp Serum Rituals (crop) |
| **AVqlin AD Gel** | Dermatologist Examining Patient | Skincare Research in Lab |
| **ISOTRIQ-20** | Skincare Research in Modern Lab | — |

### TRICHOLOGY-SPECIFIC PLACEMENTS

```
┌────────────────────────────────────────────────────────────────────┐
│ TRICHOLOGY VERTICAL CARD (Homepage) — ASYMMETRIC FEATURE          │
│ ┌────────────────────────────────────────────────────────────────┐ │
│ │  ┌─────────────────────────┐ ┌─────────────────────────────┐  │ │
│ │  │ SCALP SERUM RITUALS     │ │ Trichology & Hair Science   │  │ │
│ │  │ (2:1 ultra-wide)        │ │ Anti-hair fall serums,      │  │ │
│ │  │ Spans full card width   │ │ peptide hair growth...      │  │ │
│ │  │ on mobile, 60% on lg    │ │ [View range →]              │  │ │
│ │  └─────────────────────────┘ └─────────────────────────────┘  │ │
│ └────────────────────────────────────────────────────────────────┘ │
│   Primary: Scalp Serum Rituals Oil and Shine                      │
│   Alternate: Scalp Care with Glass Dropper-2                     │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ ROOTRIQ PRO HAIR SERUM PRODUCT PAGE                                │
│ ┌────────────────────────────────────────────────────────────────┐ │
│ │ Hero: Applying Hair Serum with Dropper-1 (4:5 portrait)        │ │
│ │ Shows ritual: dropper → scalp → massage                        │ │
│ └────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
```

### GALLERY / "SCIENCE IN ACTION" SECTION (Optional New Section)

```
┌────────────────────────────────────────────────────────────────────┐
│ 2×2 GRID (Desktop) / CAROUSEL (Mobile)                             │
│ ┌──────────────────┐ ┌──────────────────┐                         │
│ │ Face Wash Ritual │ │ Sunscreen Glow   │  → Cosmeceuticals      │
│ │ (4:5)            │ │ (16:9)           │                         │
│ ├──────────────────┤ ├──────────────────┤                         │
│ │ Scalp Serum 2:1  │ │ Dermatologist    │  → Trichology/Derm     │
│ │ (2:1)            │ │ Examining (4:3)  │                         │
│ └──────────────────┘ └──────────────────┘                         │
│   Hover: Zoom + Category Label + "Explore Range"                  │
│   Unified "Clinical Cool" color grading                            │
└────────────────────────────────────────────────────────────────────┘
```

---

## 6. Image Optimization Specifications

### 6.1 Responsive Variants Needed (Per Premium Image)

| Base Image | Breakpoints | Formats | Naming Convention |
|------------|-------------|---------|-------------------|
| All 10 premium | 320w, 640w, 1024w, 1280w, 1920w | WebP + AVIF | `{slug}-{width}w.{webp|avif}` |
| Hero images | Add 2560w for 4K | WebP + AVIF | — |
| Product crops | 400w, 600w, 800w (card sizes) | WebP + AVIF | `{slug}-card-{width}w.{webp|avif}` |

### 6.2 Color Grading: "Clinical Cool" LUT

| Adjustment | Value | Reason |
|------------|-------|--------|
| Saturation | -10% | Remove "lifestyle warmth", clinical feel |
| Contrast | +5% | Crisp, premium definition |
| Shadows | +8% Blue lift | Match `--primary-900` (#062E5B) |
| Midtones | +5% Green lift | Match `--accent-500` (#22C55E) |
| Highlights | -3% | Preserve skin detail, avoid blowout |
| **Exceptions** | | |
| Sunscreen Glow | Keep warmth | "Vitality/outdoor" is the proof point |
| Lab images | Extra blue lift | Reinforce "scientific/clinical" |

### 6.3 Cropping Variants Per Image

| Image | Hero Crop | Product Card Crop | OG/Social Crop |
|-------|-----------|-------------------|----------------|
| Face Wash Ritual | 4:5 (mobile hero) | 1:1 (card) | 1200×630 (1.91:1) |
| Sunscreen Glow | 16:9 (desktop hero) | 4:3 (product) | 1200×630 |
| Scalp Serum Rituals | 2:1 (feature card) | 1:1 (card) | 1200×630 (center) |
| Serene Portrait | 4:5 (about hero) | 3:4 (sidebar) | 1200×630 |
| Scalp Care Dropper | 4:5 (trich hero) | 1:1 | 1200×630 |
| Dermatologist Exam | 4:3 (quality split) | 1:1 | 1200×630 |
| Applying Serum | 4:5 (product hero) | 1:1 | 1200×630 |
| Lab Research | 16:9 (quality bg) | 4:3 | 1200×630 |
| Collage (vertical) | 9:16 (story) | — | — |
| Model Portrait | 10:11 (team) | 1:1 | — |

---

## 7. Asset Organization (Final Structure)

```
public/
├── optimized/
│   ├── hero/
│   │   ├── face-wash-ritual-{320,640,1024,1280,1920,2560}w.{webp,avif}
│   │   ├── sunscreen-glow-{320,640,1024,1280,1920,2560}w.{webp,avif}
│   │   ├── scalp-serum-rituals-{320,640,1024,1280,1920,2560}w.{webp,avif}
│   │   ├── skincare-portrait-{320,640,1024,1280,1920}w.{webp,avif}
│   │   ├── scalp-care-dropper-{320,640,1024,1280,1920}w.{webp,avif}
│   │   ├── dermatologist-exam-{320,640,1024,1280,1920}w.{webp,avif}
│   │   ├── applying-serum-{320,640,1024,1280,1920}w.{webp,avif}
│   │   ├── lab-research-{320,640,1024,1280,1920,2560}w.{webp,avif}
│   │   └── sunscreen-banner-{320,640,1024,1280,1920}w.{webp,avif}
│   ├── product/
│   │   ├── lumiriq-ac-face-wash-{400,600,800}w.{webp,avif}
│   │   ├── lumiriq-glow-face-wash-{400,600,800}w.{webp,avif}
│   │   ├── uvriq-sunscreen-{400,600,800}w.{webp,avif}
│   │   ├── rootriq-pro-serum-{400,600,800}w.{webp,avif}
│   │   ├── rootriq-ahf-shampoo-{400,600,800}w.{webp,avif}
│   │   ├── avqlin-ad-gel-{400,600,800}w.{webp,avif}
│   │   └── isotriq-20-{400,600,800}w.{webp,avif}
│   ├── verticals/
│   │   ├── trichology-feature-{320,640,1024,1280,1920}w.{webp,avif}
│   │   └── dermatology-trust-{320,640,1024,1280,1920}w.{webp,avif}
│   ├── gallery/
│   │   ├── science-collage-{320,640,1024}w.{webp,avif}
│   │   └── science-grid-{320,640,1024,1280}w.{webp,avif}
│   └── icons/
│       ├── anti-aging.svg
│       ├── skincare-science.svg
│       ├── hair-nourishment.svg
│       └── dermatology-trust.svg
├── originals/ (archived — 95 files)
└── discarded/ (80 stock photos — optional archive)
```

---

## 8. Implementation Phases

### Phase 1: Asset Preparation (Week 1)
- [ ] Color-grade 10 premium images ("Clinical Cool" LUT)
- [ ] Generate all responsive WebP/AVIF variants (sharp script)
- [ ] Vectorize 4 UI icons → SVG components
- [ ] Create crop variants per specification table
- [ ] Organize into `/public/optimized/` structure

### Phase 2: Homepage Hero (Week 1-2)
- [ ] Modify `src/app/page.tsx` Hero section
- [ ] Add responsive image swap (mobile: Face Wash, desktop: Sunscreen/Lab)
- [ ] Implement frosted glass overlay (`.glass` + gradient scrim)
- [ ] Test all breakpoints, Lighthouse performance

### Phase 3: Section Enhancements (Week 2)
- [ ] Trichology asymmetric feature card (Homepage)
- [ ] About Hero portrait layout
- [ ] Quality Clinical Transparency split (Dermatologist image)
- [ ] Quality Pledge lab background (10% opacity)

### Phase 4: Product Pages (Week 2-3)
- [ ] Update `src/lib/product-media.ts` with real photo mappings
- [ ] Modify `ProductVisual.tsx` to use `<Image>` for featured products
- [ ] Fallback to SVG illustrations for non-featured products

### Phase 5: Optional Gallery Section (Week 3)
- [ ] New "Science in Action" component
- [ ] 2×2 grid + carousel, hover interactions
- [ ] Link each to therapeutic vertical

### Phase 6: Polish & Audit (Week 3)
- [ ] Blur-up placeholders (20px base64 blurhash)
- [ ] Scroll reveals (reuse `Reveal` component)
- [ ] Lighthouse audit: Images >90, Performance >90
- [ ] Cross-browser testing

---

## 9. Client Decisions Required

| # | Decision | Options | Recommendation |
|---|----------|---------|----------------|
| 1 | **Approve 10 premium images** for primary placement | Yes / No / Subset | **Yes** — all 10 are editorial quality |
| 2 | **Discard 80 stock photos** | Yes / Keep some | **Yes** — they dilute premium positioning |
| 3 | **Vectorize 4 UI icons** to SVG | Yes / Keep PNG | **Yes** — scalable, themeable, performant |
| 4 | **Color grading: "Clinical Cool"** | Approve / Adjust | **Approve** — matches brand system |
| 5 | **Asymmetric Trichology card** (breaks 4-grid) | Approve / Keep symmetric | **Approve** — creates visual hierarchy |
| 6 | **Responsive Hero swap** (mobile vs desktop image) | Approve / Single image | **Approve** — optimal for each viewport |
| 7 | **"Science in Action" gallery section** | Add / Skip | **Add** — showcases all 10 premium assets |
| 8 | **Product page hero replacements** (7 featured products) | All / Select few | **All** — consistent premium experience |

---

## 10. Design System Compliance Verification

| Token/Component | Current | Photo Integration | Status |
|-----------------|---------|-------------------|--------|
| `--background` (#FAFCFF) | Page bg | Glass overlays respect | ✅ |
| `--primary-600` (#0B5CAB) | CTAs | Scrim gradients use primary | ✅ |
| `--accent-500` (#22C55E) | Success | Green midtone lift in grading | ✅ |
| `--font-display` (Plus Jakarta) | Headings | All overlay text uses | ✅ |
| `--font-sans` (Inter) | Body | Captions/alt text | ✅ |
| `mesh-hero` gradient | Hero bg | Photos enhance/replace | ✅ |
| `shadow-soft/float` | Cards | Image containers match | ✅ |
| `rounded-2xl/3xl` | Cards | All image frames | ✅ |
| `transition-300/500` | Hover | Image hover scale | ✅ |
| `Reveal` component | Scroll | All new images wrapped | ✅ |

---

## Appendix: Quick Reference — Image to Section Mapping

| Image | Primary Section | Secondary | Component/File to Modify |
|-------|----------------|-----------|-------------------------|
| Face Wash Ritual | Homepage Hero (mobile) | LUMIRIQ Face Wash pages | `page.tsx`, `ProductVisual.tsx` |
| Sunscreen Glow | Homepage Hero (desktop) | UVRIQ page | `page.tsx`, `ProductVisual.tsx` |
| Scalp Serum Rituals | Trichology Vertical (Homepage) | ROOTRIQ PRO page | `page.tsx`, `ProductVisual.tsx` |
| Serene Portrait | About Hero | Quality sidebar | `about/page.tsx`, `quality/page.tsx` |
| Scalp Care Dropper | Trichology Hero (alt) | ROOTRIQ PRO page | `page.tsx` (alt), `ProductVisual.tsx` |
| Dermatologist Exam | Quality Clinical Transparency | Dermatology vertical | `quality/page.tsx`, `page.tsx` (vertical) |
| Applying Serum | ROOTRIQ AHF Shampoo page | Trichology ritual proof | `ProductVisual.tsx` |
| Lab Research | Quality Pledge bg (10%) | AVqlin/ISOTRIQ pages | `quality/page.tsx`, `ProductVisual.tsx` |
| Collage (vertical) | Science in Action Gallery | — | New `Gallery.tsx` component |
| Model Portrait | Team/Experts section (if added) | — | New `Team.tsx` component |

---

**End of Combined Report**

*Analysis based on 95 images across 2 folders, existing codebase (`src/`), design system (`globals.css`, `DESIGN.md`), and product catalog (`products.ts`). Ready for implementation upon approval.*