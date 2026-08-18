# DESIGN.md — Averiq Lifesciences

> A design-system reference for AI coding agents working on the Averiq Lifesciences website.
> Format follows the getdesign.md / Google DESIGN.md convention. Source of truth:
> `src/app/globals.css` (design tokens) and the original brand brief + logo analysis.

## 1. Overview

Averiq Lifesciences is a pharmaceutical / cosmeceutical / nutraceutical manufacturer
based in Indore, India. Tagline: **"Advanced • Verified • Quality"**.

Design personality: **clean clinical minimalism** — generous white space, soft slate
backgrounds, crisp typography, green↔blue gradient accents that echo the brand logo
(a stylized figure blending into vibrant green leaves + bold royal-blue wordmark).
The site serves two audiences simultaneously: **HCPs/distributors** (bulk, PCD
franchise, clinical data) and **patients/consumers** (product details, trust).

Always build with authority + approachability: medical precision in language,
human warmth in tone. Never busy, never sterile.

## 2. Colors

Palette is defined as Tailwind v4 tokens in `globals.css` (`--color-*`).

### Brand primaries
| Token | Hex | Usage |
| --- | --- | --- |
| `primary-600` | `#0B5CAB` | Primary CTA buttons, links, active states, trust anchors |
| `primary-700` | `#0A4E93` | Primary button hover |
| `primary-900` | `#062E5B` | Headings, hero text, dark sections, footer bg |
| `primary-950` | `#041D3A` | Deepest navy, overlay scrims |
| `accent-500` | `#22C55E` | Hover accents, glowing badges, WhatsApp accents |
| `accent-600` | `#16A34A` | Success states, "Verified" highlights, checkmarks |

### Neutrals
| Token | Hex | Usage |
| --- | --- | --- |
| `background` | `#FAFCFF` | Page background (clinical pearl white) |
| `muted` | `#F1F5F9` | Alternating section backgrounds |
| `border` | `#E2E8F0` | Thin borders, dividers |
| `foreground` | `#0F172A` | Body text (WCAG AAA) |

### Rules
- **Gradient text** (`.gradient-text`): `#22C55E → #16A34A → #0B5CAB → #0A4E93`,
  used sparingly on one key phrase per hero (never on body copy).
- Accent green is for *life/verification/success*; primary blue is for *action/navigation*.
- Do not use red for errors on primary CTAs; use slate + amber tones for warnings.
- Dark sections use `.mesh-dark` (navy base + green/blue radial glows).

## 3. Typography

- **Display:** Plus Jakarta Sans (`--font-display`) — headings, buttons, metric numbers.
- **Body:** Inter (`--font-sans`).

| Level | Size | Weight | Line height |
| --- | --- | --- | --- |
| H1 | 36–54px (`text-4xl`–`text-5xl`) | 800 | 1.12 |
| H2 | 30–36px (`text-3xl`–`text-4xl`) | 700 | 1.2 |
| H3 | 18–24px | 600 | 1.35 |
| Body | 14–16px | 400 | 1.6 |
| Eyebrow | 11–12px uppercase | 700 | tracking `0.22em` |
| Small/legal | 12–13px | 500 | 1.4 |

### Rules
- Headings: `tracking-tight`, navy (`text-primary-900`), never gradient whole headings.
- Eyebrow labels above section titles: uppercase, `tracking-[0.22em]`, primary-600.
- Numbers/statistics: display font, extrabold, with green suffix (`+`, `%`).

## 4. Layout & Spacing

- Page max width: `max-w-7xl` (1280px), gutters `px-4 sm:px-6 lg:px-8`.
- Section rhythm: `py-20 sm:py-24`.
- Section heading block: eyebrow → H2 → subtitle paragraph (`max-w-2xl`, centered or left).
- Grids: verticals/products `grid-cols-1 → sm:grid-cols-2 → lg:grid-cols-3/4`.
- Spacing scale: Tailwind defaults; use consistent gaps (`gap-4/5/6` between cards).
- Hero: split layout `lg:grid-cols-[1.1fr_0.9fr]`, mesh gradient bg, generous `pt-28+`.

## 5. Elevation & Depth

- Cards: `border-slate-100 + shadow-soft` at rest.
- Hover: `-translate-y-1.5 + shadow-float` with 300ms transition.
- Floating badges on hero visuals: `shadow-float`, `bg-white/95`, `backdrop-blur`.
- **Glassmorphism** only on the fixed header (`.glass`: `bg-white/85`, `blur(12px)`).
- No heavy drop shadows on images — keep the clinical feel.

## 6. Motion

- Scroll reveals: fade + `translateY(24px)`, 600ms, `ease: [0.21,0.65,0.36,1]`,
  once, viewport margin `-60px` (see `Reveal.tsx`).
- Micro-interactions: button hover `-translate-y-0.5`; icon tiles `scale-110` on hover.
- Counters: count-up on scroll into view, 1400ms, ease-out cubic.
- Respect `prefers-reduced-motion` (Reveal already disables via `useReducedMotion`).
- Keep motion subtle — clinical, not playful.

## 7. Iconography

- **lucide-react** only. Thin strokes (default), `h-4`–`h-7`.
- Icon tiles: 44–56px rounded-2xl gradient squares (primary or accent) with white icon.
- Common associations: leaf/flask = formulations & nutraceuticals; shield = quality &
  certification; truck = supply chain; message/phone = leads & WhatsApp; pin = territory.

## 8. Imagery

- Product "packshots" are **inline SVG illustrations** (`ProductVisual.tsx`), one per
  dosage form (tube, dropper, spray, capsules, tablets, bottle), tinted by the
  product's gradient on a soft white radial wash. No photography required.
- Logo assets in `/public`: `averiq-logo.png` (full lockup, footer/hero),
  `averiq-wordmark.png`, `icon.png` (favicon/app icon).
- Floating trust badges: white glass chips with green/blue icon + short label.

## 9. Components & Patterns

### Header (fixed, glass on scroll)
Logo left → center nav (Products = dropdown) → right: ghost "Request Product List"
(WhatsApp) + primary "Partner With Us". Mobile: hamburger + slide-down panel.

### Product Card
Badges (category + Rx) → packshot on gradient wash → name, generic composition,
tagline → "View Details" (ghost) + "Enquire" (primary) → "Full monograph →" link.

### Buttons
- Primary: `bg-primary-600`, rounded-lg, bold, hover `-translate-y-0.5` + glow shadow.
- Ghost: border `slate-200`, white bg.
- Green CTA: `bg-accent-600` (WhatsApp / franchise), stronger glow.

### Forms & Leads
- Native HTML validation + inline labels; inputs `rounded-lg border-slate-200`,
  focus ring `primary-500/primary-100`.
- All leads dispatch to WhatsApp via prefilled `wa.me` text (see `EnquiryModal`,
  `LeadForm`). Success state = green check panel, never a dead end.

### Dark sections
Navy `mesh-dark` background; white headings; `text-slate-300` body; green accents;
white/10 borders for cards.

### Tabs (product monograph)
4 tabs: Indications / Mechanism of Action / Directions & Precautions / Packaging &
Regulatory. Active tab = primary underline + tinted bg.

### Badges
`Rx` = blue outline; `OTC` = green outline; category pill = white/slate ring.
Uppercase, 10–11px, bold.
