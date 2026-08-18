# Averiq Lifesciences — Corporate Website

Production-ready corporate website for **Averiq Lifesciences Private Limited**
(Indore, MP — CIN `U46492MP2026PTC082170`), built from the master brief in
`Averiq_Lifesciences_Website_Master_Brief.md`.

Design system documented in **[DESIGN.md](./DESIGN.md)** (getdesign.md format).

---

## 🚀 Tech Stack (implemented)

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | **Next.js 16 (App Router)** | SSG/SSR, file routing, sitemap/robots out of the box |
| Language | **TypeScript** (strict) | Type-safe data models for products/blogs |
| Styling | **Tailwind CSS v4** | Brand tokens via `@theme` in `globals.css` |
| Icons | **lucide-react** | Clean, medical-friendly icon set |
| Motion | **framer-motion** | Scroll reveals, counters (respects reduced-motion) |
| Fonts | **Plus Jakarta Sans + Inter** (next/font) | Display/body pairing per brief |
| Data | Local TS modules (`src/data/*`) | Zero-dependency; swap for CMS later |
| SEO | Metadata API + **JSON-LD** (MedicalBusiness, Product, FAQPage, LocalBusiness) + sitemap.xml + robots.txt | |

**Why no backend yet:** every page is static; all lead capture dispatches to
WhatsApp via prefilled `wa.me` links (per brief §6.3), so the site deploys
anywhere with zero servers.

## 🗺️ Routes

- `/` — Home (hero, trust strip, verticals, featured products, B2B banner, testimonials)
- `/products` — catalog with search + category/form/Rx filters
- `/products/[slug]` — monograph page (indications, MOA, directions, regulatory tabs)
- `/partner` — PCD franchise: territory checker, support kit, multi-step application
- `/quality` — QA/QC pipeline, lab tests, certifications, pharmacovigilance
- `/about` — corporate profile, vision/mission, leadership, roadmap
- `/blog` + `/blog/[slug]` — knowledge hub
- `/contact` — info cards, departments, form, map, WhatsApp
- `/legal` — statutory disclaimer, privacy, terms

## 📁 Structure

```
src/
  app/            # routes + layout + globals.css (design tokens)
  components/     # Header, Footer, ProductCard, EnquiryModal, LeadForm,
                  # TerritoryChecker, ProductVisual (SVG packshots), Reveal, ...
  data/           # site.ts (company), products.ts (catalog), blog.ts
  lib/            # utils (cn)
public/           # logo assets (extracted from brand logo.jpeg) + favicon
DESIGN.md         # design system for AI agents (getdesign.md format)
```

## ▶️ Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export + route prerender
npm run start     # serve production build
```

> Note: if port 3000 is busy (another project), use `npm run dev -- --port 3111`.

## ☁️ Deployment

1. **Vercel** (recommended): import repo → deploy. Zero config.
2. Custom domain: point `www.averiqlifesciences.com` at Vercel; update
   `site.url` in `src/data/site.ts` first.
3. Set the real WhatsApp number + emails in `src/data/site.ts`
   (currently placeholder `+91 90000 00000`).

## 🔌 Production Checklist

- [ ] Replace placeholder phone/WhatsApp in `src/data/site.ts`
- [ ] Replace demo territory data in `TerritoryChecker.tsx` with real CRM lookup
- [ ] (Optional) Swap `src/data/*` for Sanity/Supabase; add real product photos
- [ ] Point "Download Monograph PDF" buttons at real PDF assets in `/public`
- [ ] Add Google Analytics / Search Console verification

## ⚖️ Compliance

All Rx products are marked Schedule H; the footer carries the statutory pharma
disclaimer; `CIN`, registered office and non-direct-selling notice are displayed
per Indian pharma web regulations (brief §8).
