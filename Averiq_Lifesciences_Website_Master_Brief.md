# AVERIQ LIFESCIENCES — MASTER WEBSITE SPECIFICATION & DEVELOPER BLUEPRINT
> **Document Type:** Full-Scope Product Requirements Document (PRD) & Technical Brief  
> **Target Audience:** Full-Stack Web Developers, UI/UX Designers, AI Code Generators (Cursor, Lovable, v0, Windsurf)  
> **Status:** Production Ready  
> **Version:** 1.0.0  
> **Last Updated:** 2026-08-17  

---

## 1. PROJECT EXECUTIVE SUMMARY & CLIENT INTELLIGENCE

### 1.1 Company Profile
* **Company Legal Name:** Averiq Lifesciences Private Limited
* **Corporate Identification Number (CIN):** U46492MP2026PTC082170
* **Registration Date:** February 17, 2026
* **Registrar of Companies (ROC):** ROC Gwalior (Madhya Pradesh)
* **Registered Office Address:** C23- Dilip Nagar, Khajrana, Indore, Madhya Pradesh - 452016, India
* **Authorized Capital:** ₹100,000 | **Paid-Up Capital:** ₹100,000
* **Directors / Key Executives:**
  * Mahin Khan (Director)
  * Abdul Muttalib (Director)
* **Industry Sector:** Pharmaceutical, Cosmeceutical & Life Sciences Formulations

### 1.2 Brand Philosophy & Core Motto
* **Brand Tagline:** *"Advanced • Verified • Quality"*
* **Value Proposition:** Providing scientifically formulated, clinically validated, and premium therapeutic products with a sharp focus on modern healthcare demands, ethics, and accessible medical solutions.
* **Target Audience:**
  1. **Healthcare Professionals (HCPs / Doctors / Dermatologists / Physicians):** Looking for clinical efficacy, accurate compositions, and dependable pharmacology.
  2. **B2B Channel Partners (Stockists, Distributors, PCD Franchisees, Third-Party Buyers):** Looking for monopoly rights, marketing visual aids, high margins, on-time delivery, and GMP compliance.
  3. **End Consumers / Patients:** Looking for trusted wellness, dermatological, and healthcare formulations with verified results.

### 1.3 Benchmark Analysis (Regaliz Medicare Reference)
The client provided **Regaliz Medicare** (`regalizindia.com`) as their design & feature benchmark. The website must capture the following elements from that benchmark:
* **Clean Clinical Minimalism:** Generous white space, soft slate backgrounds, and crisp typography that immediately conveys sterile medical authority.
* **Specialty Segment Categorization:** Explicit visual divisions for therapeutic verticals (Dermatology, Trichology, Cosmeceuticals, Pediatrics, General Wellness).
* **Dual Conversion Funnel:** Seamless navigation for both doctors/distributors seeking bulk partnerships and patients looking for product details.
* **Interactive Visual Aids & Formulations:** Tabbed active ingredient breakdowns, mechanism of action explanations, and downloadable product visual aids.

---

## 2. BRAND IDENTITY & DESIGN SYSTEM

### 2.1 Color Palette
The Averiq Lifesciences logo features a stylized figure blending into vibrant green leaves paired with bold royal blue typography.

| Color Name | Hex Code | RGB | Tailwind Token | Strategic Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Averiq Royal Blue** | `#0B5CAB` | `rgb(11, 92, 171)` | `primary-600` | Primary brand color, primary CTA buttons, main headers, trust anchors |
| **Averiq Deep Navy** | `#062E5B` | `rgb(6, 46, 91)` | `primary-900` | Hero backgrounds, dark footers, text headings, card borders |
| **Vitality Botanical Green** | `#16A34A` | `rgb(22, 163, 74)` | `accent-600` | Accents, success tags, natural formulation highlights, icon leaves |
| **Fresh Mint Green** | `#22C55E` | `rgb(34, 197, 94)` | `accent-500` | Hover states, glowing badges, WhatsApp integration accents |
| **Clinical Pearl White** | `#FAFCFF` | `rgb(250, 252, 255)`| `background` | Primary surface background |
| **Sterile Slate Grey** | `#F1F5F9` | `rgb(241, 245, 249)`| `muted` | Secondary card backgrounds, subtle zebra striping, table rows |
| **Medical Dark Charcoal** | `#0F172A` | `rgb(15, 23, 42)` | `foreground` | Primary typography for maximum legibility (WCAG AAA compliant) |
| **Subtle Border Slate** | `#E2E8F0` | `rgb(226, 232, 240)`| `border` | Clean, razor-thin borders and dividers |

### 2.2 Typography Hierarchy
* **Primary Display Font (Headings):** `'Plus Jakarta Sans'`, `'Montserrat'`, or `'Inter'` (Google Fonts)
  * *H1:* 36px – 48px | Font-Weight: 700 / 800 | Line-Height: 1.15
  * *H2:* 28px – 36px | Font-Weight: 700 | Line-Height: 1.25
  * *H3:* 20px – 24px | Font-Weight: 600 | Line-Height: 1.35
* **Body Font (Paragraphs, Tables, Specs):** `'Inter'`, `'Open Sans'`, or `'Roboto'`
  * *Body Regular:* 15px – 16px | Font-Weight: 400 | Line-Height: 1.6
  * *Small / Captions / Legal:* 12px – 13px | Font-Weight: 500 | Line-Height: 1.4

### 2.3 UI Components & Visual Language
* **Corner Radius:** Subtle rounded corners (`rounded-xl` / `12px` for cards, `rounded-lg` / `8px` for buttons and input fields).
* **Shadows:** Soft diffuse shadows (`shadow-sm` on rest, `shadow-lg` on hover with a slight `-translate-y-1` transition).
* **Glassmorphism / Frosted Header:** `backdrop-blur-md bg-white/85 border-b border-slate-100` for fixed navigation.
* **Micro-Interactions:** Smooth Framer Motion transitions, spring easing, and staggered fade-ins for product cards and metric counters.

---

## 3. COMPREHENSIVE SITEMAP & INFORMATION ARCHITECTURE

```
├── / (Home)
│   ├── Hero Banner with Dynamic Slider / Video
│   ├── Quality Metrics & Trust Badges (WHO-GMP / ISO / DCGI compliant)
│   ├── Featured Therapeutic Verticals
│   ├── Star Formulations & Products Carousel
│   ├── The Averiq Difference (R&D, Verification, Efficacy)
│   ├── B2B Opportunity Callout (PCD Franchise / Third-Party Contract Manufacturing)
│   ├── Testimonials / Doctor Endorsements
│   └── Quick Contact & Franchise Lead Capture Form
│
├── /about (Corporate Profile)
│   ├── Company Overview & Genesis
│   ├── Mission, Vision & Core Values
│   ├── Leadership Message (Mahin Khan & Abdul Muttalib)
│   ├── Regulatory Compliance & Quality Policy (Indore Facility & Standards)
│   └── Milestone Roadmap & Future Horizons
│
├── /products (Interactive Product Catalog)
│   ├── Therapeutic Segment Filter (Dermatology, Trichology, Cosmeceuticals, General, Nutraceuticals)
│   ├── Dosage Form Filter (Tablets, Capsules, Creams, Gels, Serums, Syrups, Injections)
│   ├── Real-time Search by Brand Name, Active Composition, or Indication
│   └── /products/[slug] (Individual Product Deep-Dive Page)
│       ├── HD Product Imagery & 3D Packaging Render
│       ├── Active Composition & Chemical Breakdown
│       ├── Therapeutic Indications & Clinical Uses
│       ├── Mechanism of Action & Key Benefits
│       ├── Packaging Details & Storage Guidelines
│       ├── Download Visual Aid / Product Monograph (PDF)
│       └── "Enquire About This Formulation" Direct Lead Modal
│
├── /partner (B2B / PCD Franchise & Third-Party Manufacturing)
│   ├── Why Partner with Averiq Lifesciences?
│   ├── PCD Franchise Model & Monopoly Distribution Rights
│   ├── Third-Party & Loan License Manufacturing Capabilities
│   ├── Marketing Support Materials (Visual Aids, MR Bags, LBLs, Samples)
│   └── Multi-Step Interactive Partnership Application Form
│
├── /quality (Quality Assurance & Compliance)
│   ├── Strict QA / QC Protocols
│   ├── High-Tech Analytical Lab Testing (HPLC, Dissolution, Stability)
│   ├── Certifications & Compliance Accreditations
│   └── Pharmacovigilance & Safety Reporting Portal
│
├── /blog (Knowledge & Medical Insights)
│   ├── Healthcare Articles & Clinical Updates
│   ├── Skincare & Haircare Formulation Guides
│   └── Company News & Product Launches
│
└── /contact (Contact & Geo-Location)
    ├── Registered Office Details (C23- Dilip Nagar, Khajrana, Indore, MP)
    ├── Interactive Google Map Embed
    ├── General Enquiry Form & Career Form
    ├── Department-Wise Contacts (Sales, Exports, Institutional Supply)
    └── Direct WhatsApp & Telegram Quick-Connect
```

---

## 4. DETAILED PAGE-BY-PAGE WIREFRAME SPECIFICATIONS

### 4.1 Home Page (`/`)

#### Section 1: Sticky Navigation Bar
* **Left:** Averiq Lifesciences Logo (High-res SVG/PNG with blue text and green dynamic leaf icon).
* **Center Navigation Links:**
  * Home
  * About Us
  * Products (Dropdown with categories: Dermatology, Cosmeceuticals, Trichology, General Pharma)
  * PCD Franchise & Manufacturing
  * Quality Standards
  * Contact Us
* **Right CTA:**
  * "Request Product List" (Secondary Ghost Button - opens PDF download modal)
  * "Partner With Us" (Primary Royal Blue Button with green hover glow)

#### Section 2: Hero Section (Above the Fold)
* **Heading (H1):** *"Advancing Healthcare Through Verified Scientific Innovation"*
* **Subheading:** *"Averiq Lifesciences delivers state-of-the-art pharmaceutical and cosmeceutical formulations engineered under rigorous global quality benchmarks. Based in Indore, serving healthcare across India."*
* **Key CTAs:**
  * Primary: `Explore Products →` (Routes to `/products`)
  * Secondary: `PCD Franchise Enquiry` (Opens lead popup or routes to `/partner`)
* **Hero Visual:** Split layout or interactive 3D carousel showcasing blister packs, sterile cosmetic dropper bottles, and clinical laboratory imagery with floating badges:
  * `✓ WHO-GMP Certified Manufacturing Standard`
  * `✓ 100% Tested Active Ingredients`
  * `✓ Pan-India Distribution Support`

#### Section 3: Trust & Quality Indicators Bar (Counter Strip)
* **Metric 1:** `50+` Formulations in Pipeline & Active Distribution
* **Metric 2:** `100%` Batch Consistency & Lab Verification
* **Metric 3:** `DCGI & FDA` Approved Compositions
* **Metric 4:** `Pan-India` Logistics & On-Time Supply

#### Section 4: Therapeutic Verticals (Interactive Cards with Hover Expansion)
1. **Dermatology & Cosmeceuticals:** Advanced skincare, acne management, pigmentation correctors, sunscreen gels, and anti-aging topicals.
2. **Trichology & Hair Science:** Anti-hair fall serums, peptide hair growth solutions, clarifying therapeutic shampoos.
3. **General Medicine & Anti-Infectives:** Broad-spectrum antibiotics, analgesics, antipyretics, and gastro-resistant tablets.
4. **Nutraceuticals & Dietary Supplements:** Multivitamins, antioxidant blends, mineral complexes, and immunity boosters.

#### Section 5: Featured Product Showcase (Regaliz Style Carousel)
* Product cards featuring:
  * Crisp White Packaging render on soft gradient background
  * Brand Name + Active Composition (e.g., *Averiq Glyco-Clear Cream: Glycolic Acid 6% + Kojic Acid 2%*)
  * Dosage Form Badge: *Lotion / Tablet / Serum*
  * Quick Actions: "View Details" & "Enquire"

#### Section 6: Why Healthcare Professionals Choose Averiq
* **3-Column Feature Grid:**
  1. *Advanced Molecular Formulations:* Enhanced bioavailability and superior patient compliance.
  2. *Verified Quality Control:* Every batch backed by Certificate of Analysis (CoA) and zero-tolerance QC.
  3. *Uncompromising Ethics:* 100% transparent compositions with zero misleading claims.

#### Section 7: B2B / PCD Franchise Banner (High-Conversion Callout)
* Dark navy background with luminous green gradient accent.
* Copy: *"Expand Your Pharmaceutical Business with Averiq Monopoly Rights in Your District."*
* Benefits list: High profit margins, promotional visual aid kit, timely supply, monopoly territory rights.
* Direct Lead Form embedded inline (Name, Mobile, City/State, Drug License Yes/No).

#### Section 8: Footer
* **Column 1:** Brand logo, tagline (*Advanced • Verified • Quality*), brief about statement, CIN Number (`CIN: U46492MP2026PTC082170`).
* **Column 2 (Quick Links):** About, Products, PCD Franchise, Quality Policy, Blogs, Careers.
* **Column 3 (Therapeutic Areas):** Dermatology, Trichology, Cosmeceuticals, Nutraceuticals, General Healthcare.
* **Column 4 (Contact & Address):**
  * Registered Office: C23- Dilip Nagar, Khajrana, Indore, MP 452016
  * Email: `contact@averiqlifesciences.com` / `info@averiqlifesciences.com`
  * Phone / WhatsApp: Direct click-to-chat link
* **Bottom Bar:** © 2026 Averiq Lifesciences Private Limited. All Rights Reserved. | Statutory Pharma Disclaimer | Privacy Policy | Terms of Use.

---

### 4.2 Products Catalog Page (`/products`)

#### Interactive Features Required:
1. **Faceted Filter Sidebar (Desktop) / Slide-over Drawer (Mobile):**
   * *Therapeutic Category:* All, Dermatology, Trichology, Cosmeceuticals, General, Nutraceuticals.
   * *Form Factor:* Tablets, Capsules, Topicals (Creams/Gels/Lotions), Syrups, Serums.
   * *Prescription Status:* Rx (Prescription), OTC (Over-The-Counter).
2. **Instant Search Bar:** Live search filtering by Brand Name, Active API (e.g., *Niacinamide, Paracetamol, Itraconazole*), or Indication (*Anti-Acne, Anti-Fungal, Pain Relief*).
3. **Product Card Architecture:**
   ```
   +--------------------------------------------------+
   | [Category Badge: Dermatology]    [Rx Badge]     |
   |                                                  |
   |             [HD Product Image]                   |
   |                                                  |
   | **AVERCIN-GEL**                                  |
   | *Clindamycin Phosphate 1% + Nicotinamide 4%*     |
   | Pack Size: 20g Lami Tube                         |
   |                                                  |
   | [ View Details Button ]   [ Enquire (WhatsApp) ] |
   +--------------------------------------------------+
   ```

---

### 4.3 Individual Product Detail Page (`/products/[slug]`)

* **Breadcrumb Navigation:** `Home > Products > Dermatology > Avercin Gel`
* **Left Column:** Multi-angle packaging gallery with image zoom capability + 360-degree rotation view placeholder.
* **Right Column:**
  * **Product Title (H1):** `AVERCIN-GEL`
  * **Generic Formulation:** `Clindamycin Phosphate IP 1.0% w/w + Nicotinamide IP 4.0% w/w`
  * **Therapeutic Segment:** Dermatology / Acne Vulgaris Management
  * **Dosage Form & Packaging:** 20g premium aluminum-barrier laminated tube in UV-varnished carton.
  * **Key Highlights (Bullet Points with Green Checkmarks):**
    * Dual-action antimicrobial and anti-inflammatory synergy
    * Non-greasy, fast-absorbing hydro-gel base
    * Clinically proven reduction in inflammatory acne lesions
  * **Action Buttons:**
    * `[ Enquire for Bulk Supply / PCD ]` (Opens lead modal with pre-selected product name)
    * `[ Download Product Monograph PDF ]`
* **Detailed Tabs Below the Fold:**
  * **Tab 1: Indications & Clinical Uses** (Acne vulgaris, comedones, pustules, redness reduction).
  * **Tab 2: Mechanism of Action (Pharmacology)** (Inhibition of *Cutibacterium acnes* protein synthesis + sebum modulation).
  * **Tab 3: Direction for Use & Precautions** (Application guidelines, contraindications, storage below 25°C).
  * **Tab 4: Packaging & Regulatory Info** (Schedule H Prescription Drug Warning, Batch stability data).

---

### 4.4 Partner With Us / PCD Franchise Page (`/partner`)

This is the primary B2B revenue driver for the Averiq web portal.

* **Top Value Proposition:** *"Join India's Fast-Growing Healthcare Network — Monopoly PCD Pharma Franchise & Third-Party Manufacturing."*
* **Interactive Territory Availability Checker:** Input Pincode or District → Checks if territory is open for exclusive franchise rights.
* **Franchise Support Kit Breakdown (Illustrated Grid):**
  1. *Visual Aids & LBLs (Leave Behind Literature)*
  2. *Doctor Reminder Cards & Catch Covers*
  3. *Sample Kits & Promotional Gifts (Pens, Notepads, MR Bags)*
  4. *Digital Marketing & Local Lead Forwarding Support*
* **Lead Generation Application Form:**
  * Full Name
  * Business / Firm Name
  * Email & WhatsApp Mobile Number
  * State & Targeted District / Territory
  * Years of Pharma Experience (Dropdown: 0-2 yrs, 2-5 yrs, 5+ yrs)
  * Drug License Available? (Yes / Applied / No)
  * GST Number (Optional / Input)
  * Investment Budget Range (₹50,000 - ₹2 Lakhs, ₹2 - ₹5 Lakhs, ₹5 Lakhs+)
  * Message / Products of Interest

---

## 5. SEED DATA: SAMPLE PRODUCT CATALOG (FOR READY INGESTION)

The developer can seed the database with these initial sample products across Averiq's core therapeutic verticals:

| Product Name | Category | Active Composition | Dosage Form | Pack Size | Indications |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Avercin Gel** | Dermatology | Clindamycin Phosphate 1% + Nicotinamide 4% w/w | Hydro-Gel | 20g Tube | Acne vulgaris, inflammatory papules |
| **Averiq Glow Serum** | Cosmeceuticals | Vitamin C 15% + Ferulic Acid 0.5% + Hyaluronic Acid 1% | Topical Serum | 30ml Dropper | Skin brightening, hyperpigmentation, anti-aging |
| **Averzole-IT 200** | Dermatology | Itraconazole 200mg (Dual Coated Pellets) | Hard Gelatin Capsule | 10x1x10 Alu-Alu | Recurrent fungal infections, tinea cruris |
| **Averfol Hair Serum** | Trichology | Procapil 3% + Redensyl 3% + Anagain 2% + Biotin | Hair Serum | 60ml Spray Bottle | Alopecia, telogen effluvium, hair density |
| **Avermol-650** | General Medicine | Paracetamol (Acetaminophen) 650mg | Tablet | 10x10 Blister | Fever, pain relief, post-vaccine fever |
| **Averpan-DSR** | Gastroenterology | Pantoprazole Sodium 40mg + Domperidone 30mg SR | Capsule | 10x10 Alu-Alu | GERD, hyperacidity, peptic ulcers |
| **Avercal-HD** | Nutraceuticals | Calcium Carbonate 1250mg + Vit D3 2000 IU + Zinc 7.5mg | Tablet | 10x15 Blister | Osteoporosis, bone density, calcium deficiency |

---

## 6. TECHNICAL ARCHITECTURE & RECOMMENDED STACK

```
[ Client Browser / Doctor / Distributor ]
                  │
                  ▼
[ Next.js 14/15 App Router on Vercel ]
  ├── UI Layer: Tailwind CSS + Shadcn UI + Lucide Icons + Framer Motion
  ├── State & Data: React Server Components + TanStack React Query
  └── Forms: React Hook Form + Zod Validation Schema
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
[ Headless CMS / DB ]   [ Micro-Integrations & Lead Automation ]
  • Sanity.io / Supabase  • WhatsApp Business Webhook (Instant Alert)
  • PostgreSQL via Drizzle • Resend / Nodemailer (Email Notification)
  • Cloudinary / AWS S3   • Telegram Bot Notification
    (PDF Visual Aids &    • Google Sheets / CRM Sync
     WebP Assets)
```

### 6.1 Frontend Stack Specifications
* **Framework:** Next.js 14+ (App Router with SSR and Static Generation for SEO).
* **Language:** TypeScript (`strict: true`).
* **Styling:** Tailwind CSS with CSS Variables for theming.
* **Component Library:** Radix UI / Shadcn UI (accessible, zero bloat).
* **Icons:** `lucide-react` (clean medical and modern UI icons).
* **Animations:** `framer-motion` (smooth tab switches, reveal animations, modal popups).

### 6.2 Backend & Data Management
* **Database / Headless CMS Options:**
  * *Option A (Lightweight & Rapid):* Sanity.io CMS (Schema defined for `product`, `category`, `blog`, `inquiry`).
  * *Option B (Custom DB):* Supabase / PostgreSQL with Prisma or Drizzle ORM.
* **Asset Storage:** Cloudinary or AWS S3 for WebP packaging photos and downloadable PDF visual aids.

### 6.3 Automation & Integrations (Critical for Sales Execution)
1. **Instant WhatsApp Lead Dispatch:**
   * When a doctor or distributor fills an enquiry on `/partner` or `/products/[slug]`, trigger an automated WhatsApp alert to Averiq management (`+91-XXXXXXXXXX`) containing lead name, phone, city, and interest.
2. **Email Auto-Responder:**
   * Send the prospect an automated branded email containing Averiq's Corporate Brochure & Product Visual Aid PDF.
3. **Google Sheets / CRM Ingestion:**
   * Store every lead entry into a secure Google Sheet or CRM pipeline for easy follow-up.

---

## 7. COPYWRITING ASSETS & READY-TO-USE CONTENT

### 7.1 About Us Page Copy

#### Company Overview
> *"Averiq Lifesciences Private Limited is a forward-thinking Indian pharmaceutical enterprise incorporated in Indore, Madhya Pradesh. Driven by our foundational pillar—**Advanced, Verified, Quality**—we are dedicated to developing and distributing high-efficacy healthcare, dermatological, and cosmeceutical solutions. We bridge the gap between advanced medical chemistry and clinical practicality, ensuring patients and medical practitioners receive formulations of unimpeachable purity and therapeutic potency."*

#### Vision Statement
> *"To be recognized as India's most dependable and scientifically progressive life sciences organization, empowering healthcare professionals with world-class formulations and fostering sustainable entrepreneurship through ethical PCD pharma distribution."*

#### Mission Statement
> 1. **Quality Without Compromise:** Adhere to stringently audited WHO-GMP manufacturing protocols.
> 2. **Innovation in Formulation:** Enhance drug bio-availability, patient comfort, and clinical outcomes.
> 3. **Partner Empowerment:** Build transparent, mutually profitable networks with distributors and stockists nationwide.

#### Leadership Message (Directors: Mahin Khan & Abdul Muttalib)
> *"At Averiq Lifesciences, we believe healthcare is a sacred trust. Our goal from day one in Indore has been to create formulations that doctors prescribe with absolute confidence. As we expand our therapeutic footprint across dermatology, cosmeceuticals, and general health, we remain grounded in our core ethos: rigorous verification, advanced molecular design, and uncompromising quality."*

---

## 8. STATUTORY & COMPLIANCE REQUIREMENTS

Every pharmaceutical website in India must include strict regulatory disclaimers:
1. **Schedule H / Prescription Disclaimer:**
   > *"The information provided on this website is intended solely for educational and informational purposes for healthcare practitioners and business associates. It does not constitute medical advice or substitute professional diagnosis. Formulations marked with Rx are Schedule H drugs and are to be sold by retail only on the prescription of a Registered Medical Practitioner."*
2. **Non-Direct Selling Notice:**
   > *"Averiq Lifesciences Private Limited is a registered corporate manufacturer and wholesale distributor. We do not sell prescription pharmaceuticals directly to retail consumers online."*
3. **Corporate Registration Display:**
   > *"Averiq Lifesciences Private Limited | CIN: U46492MP2026PTC082170 | Registered Office: C23- Dilip Nagar, Khajrana, Indore, MP 452016, India."*

---

## 9. SEO & PERFORMANCE OPTIMIZATION CHECKLIST

### 9.1 High-Value Target Keywords for Ranking
* *PCD Pharma Franchise in Madhya Pradesh / Indore*
* *Third-Party Pharma Manufacturer in Indore*
* *Dermatology and Cosmeceutical Pharma Company India*
* *Averiq Lifesciences Products & Formulations*
* *Top PCD Pharma Franchise Company with Monopoly Rights*
* *Trichology & Hair Growth Serum Pharma Manufacturer*

### 9.2 Schema.org Structured Data
Implement JSON-LD Schema on every page:
* `MedicalBusiness` / `Corporation` schema on Homepage.
* `Product` and `Drug` schema on every `/products/[slug]` page.
* `FAQPage` schema on the `/partner` PCD franchise page.
* `LocalBusiness` schema targeting Indore / ROC Gwalior jurisdiction.

### 9.3 Performance KPIs
* **Core Web Vitals:** LCP < 1.2s, FID < 50ms, CLS < 0.05.
* **Lighthouse Score:** 95+ on Performance, Accessibility, Best Practices, and SEO.
* **Asset Optimization:** All product packaging images converted to WebP/AVIF format with explicit aspect-ratio containers.

---

## 10. STEP-BY-STEP DEVELOPER IMPLEMENTATION ROADMAP

```
Phase 1: Project Scaffolding & Setup (Days 1–2)
 ├── Initialize Next.js 14+ with TypeScript, Tailwind, Lucide, and Shadcn
 ├── Configure Averiq Brand Color tokens in tailwind.config.ts
 └── Setup Layout, Navigation, and Footer with CIN & legal info

Phase 2: Database & Product Catalog Engine (Days 3–5)
 ├── Build Product schema (Category, Composition, Dosage, Pack, Indication)
 ├── Ingest seed data (Avercin Gel, Averiq Glow Serum, Averfol, etc.)
 ├── Implement client-side filtering, category tabs, and dynamic search
 └── Build dynamic [slug] product detail templates with PDF download triggers

Phase 3: B2B Funnels & Lead Generation (Days 6–7)
 ├── Build PCD Franchise & Third-Party Manufacturing interactive forms
 ├── Setup Form Validation with Zod & React Hook Form
 └── Wire webhooks for instant WhatsApp and Email notifications to sales team

Phase 4: Static & Compliance Pages (Days 8–9)
 ├── About Us page with Directors' message & Indore corporate profile
 ├── Quality Assurance page with QC/QA workflows & certification badges
 └── Statutory Disclaimers, Privacy Policy, Terms, and Contact Page with Maps

Phase 5: SEO, Performance & Testing (Days 10–11)
 ├── Inject JSON-LD Schema (MedicalBusiness, Product, LocalBusiness)
 ├── Optimize image pipelines and Core Web Vitals
 └── Mobile responsiveness and cross-browser QA testing

Phase 6: Deployment & Client Handoff (Day 12)
 ├── Deploy to Vercel with custom domain integration
 └── Deliver Admin/CMS walkthrough to Averiq Lifesciences team
```
