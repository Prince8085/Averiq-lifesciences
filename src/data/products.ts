export type Category =
  | "Dermatology"
  | "Cosmeceuticals"
  | "Trichology"
  | "General Medicine"
  | "Nutraceuticals";

export type Form =
  | "Gel"
  | "Serum"
  | "Capsule"
  | "Tablet"
  | "Hair Serum"
  | "Cream"
  | "Face Wash";

export interface Product {
  slug: string;
  name: string;
  generic: string;
  category: Category;
  form: Form;
  pack: string;
  rx: boolean;
  featured?: boolean;
  tagline: string;
  indications: string[];
  highlights: string[];
  moa: string;
  directions: string[];
  regulatory: string[];
  /** packshot palette */
  color: { from: string; to: string; text: string };
}

export const categories: Category[] = [
  "Dermatology",
  "Cosmeceuticals",
  "Trichology",
  "General Medicine",
  "Nutraceuticals",
];

export const forms: Form[] = [
  "Gel",
  "Serum",
  "Hair Serum",
  "Cream",
  "Face Wash",
  "Capsule",
  "Tablet",
];

export const products: Product[] = [
  /* ──────────── COSMECEUTICALS ──────────── */
  {
    slug: "averq-fashwash",
    name: "Averq FashWash Face Wash",
    generic: "Salicylic Acid IP 2% w/w + Niacinamide IP 4% w/w",
    category: "Cosmeceuticals",
    form: "Face Wash",
    pack: "100g Squeeze Tube with Flip-Cap",
    rx: false,
    featured: true,
    tagline: "Deep-clean anti-acne daily face wash",
    indications: [
      "Oily and acne-prone skin",
      "Blackheads & whiteheads (comedones)",
      "Excess sebum and visible pores",
      "Dull, congested skin texture",
    ],
    highlights: [
      "2% salicylic acid (BHA) unclogs pores from within",
      "Niacinamide 4% controls oil and soothes redness",
      "Sulfate-light, pH 5.5 skin-friendly foaming base",
      "Gentle enough for twice-daily use",
    ],
    moa:
      "Salicylic acid is a lipophilic beta-hydroxy acid that penetrates sebum-filled pores, dissolves the intercellular cement holding dead skin cells, and exfoliates from within to clear comedones. Niacinamide reduces sebum production, calms inflammation, and strengthens the skin barrier, keeping pores clean longer after each wash.",
    directions: [
      "Wet face, massage a pea-sized amount for 30–60 seconds",
      "Pay extra attention to T-zone and acne-prone areas",
      "Rinse thoroughly with lukewarm water; use 1–2 times daily",
      "Avoid eye contact — rinse immediately with water if contact occurs",
    ],
    regulatory: [
      "OTC cosmeceutical — for external use only",
      "Pack: 100g squeeze tube with flip-cap, in printed carton",
      "Dermatologically tested, paraben-reduced formula",
      "Shelf life: 24 months from date of manufacture",
    ],
    color: { from: "#0d9488", to: "#065f46", text: "#ffffff" },
  },
  {
    slug: "averq-sunscreen-gel",
    name: "Averq Sunscreen Gel SPF 50+",
    generic: "Zinc Oxide 12% + Octinoxate 7.5% + Niacinamide 2% — SPF 50+ PA++++",
    category: "Cosmeceuticals",
    form: "Gel",
    pack: "50g Aluminium Tube",
    rx: false,
    featured: true,
    tagline: "Non-greasy broad-spectrum photoprotection",
    indications: [
      "Daily UVA & UVB protection (SPF 50+ PA++++)",
      "Prevention of photoaging and pigmentation",
      "Post-procedure / post-peel sun protection",
      "Tan prevention in outdoor exposure",
    ],
    highlights: [
      "Broad-spectrum SPF 50+ PA++++ dual-filter system",
      "Matte, non-greasy gel finish — suits Indian skin",
      "Niacinamide soothes and repairs post-sun skin",
      "Water-resistant up to 80 minutes",
    ],
    moa:
      "Zinc oxide physically reflects and scatters both UVA and UVB rays across the skin surface, while octinoxate absorbs UVB energy and converts it to harmless heat. Niacinamide adds antioxidant defense and accelerates barrier repair, reducing cumulative photodamage and pigment formation.",
    directions: [
      "Apply liberally 20 minutes before sun exposure",
      "Use a generous layer — about 2 finger-lengths for the face",
      "Reapply every 2–3 hours, and after swimming or sweating",
      "Use daily even on cloudy days or indoors near windows",
    ],
    regulatory: [
      "OTC cosmeceutical — for external use only",
      "Pack: 50g aluminium tube in printed carton",
      "Manufactured under WHO-GMP; complies with Indian cosmetic rules",
      "Shelf life: 24 months from date of manufacture",
    ],
    color: { from: "#f59e0b", to: "#ea580c", text: "#ffffff" },
  },
  /* ──────────── TRICHOLOGY ──────────── */
  {
    slug: "averfol-hair-serum",
    name: "Averfol Hair Serum",
    generic: "Procapil 3% + Redensyl 3% + Anagain 2% + Biotin",
    category: "Trichology",
    form: "Hair Serum",
    pack: "60ml Spray Bottle",
    rx: false,
    featured: true,
    tagline: "Science-backed hair regrowth & density",
    indications: [
      "Androgenetic alopecia (male & female pattern)",
      "Telogen effluvium and stress-related shedding",
      "Thinning hair and reduced hair density",
      "Postpartum hair fall",
    ],
    highlights: [
      "Triple-actives: Procapil, Redensyl & Anagain",
      "Clinically studied actives for visible density in 90 days",
      "Non-greasy, leave-on spray — no residue",
      "Suitable for daily use on all hair types",
    ],
    moa:
      "Redensyl stimulates dermal papilla cell proliferation and promotes the anagen (growth) phase of the hair cycle. Procapil combines matrikine peptides and apigenin to inhibit follicle fibrosis and DHT-related miniaturization, while Anagain reactivates dormant follicles and biotin supports keratin synthesis for stronger hair shafts.",
    directions: [
      "Spray 4–6 pumps directly onto dry scalp, focusing on thinning areas",
      "Massage gently for 1–2 minutes for absorption",
      "Use once daily, preferably at night; do not rinse",
      "Use consistently for a minimum of 90 days for best results",
    ],
    regulatory: [
      "OTC cosmeceutical — for external use only",
      "Pack: 60ml amber spray bottle with metered nozzle",
      "Dermatologically and trichologically tested",
      "Shelf life: 24 months from date of manufacture",
    ],
    color: { from: "#16a34a", to: "#062e5b", text: "#ffffff" },
  },
  {
    slug: "rootriq-pro-hair-serum",
    name: "ROOTRIQ Pro Hair Serum",
    generic: "Redensyl + Procapil + Anagain + Biotin Hair Growth Serum",
    category: "Trichology",
    form: "Hair Serum",
    pack: "60ml Dropper Bottle",
    rx: false,
    featured: true,
    tagline: "Advanced multi-action hair regrowth serum",
    indications: [
      "Androgenetic alopecia (male & female pattern hair loss)",
      "Telogen effluvium and stress-related hair shedding",
      "Thinning hair and reduced hair density",
      "Postpartum hair fall and nutritional hair thinning",
    ],
    highlights: [
      "Triple-actives: Redensyl, Procapil & Anagain",
      "Biotin supports keratin infrastructure for stronger strands",
      "Non-greasy, lightweight dropper application",
      "Visible improvement in density within 8–12 weeks",
    ],
    moa:
      "Redensyl stimulates dermal papilla cell proliferation and promotes the anagen (growth) phase. Procapil combines matrikine peptides and apigenin to inhibit follicle fibrosis and DHT-related miniaturization. Anagain reactivates dormant follicles by modulating the hair cycle pathway. Biotin serves as a coenzyme for carboxylases essential to keratin synthesis.",
    directions: [
      "Apply 4–6 drops directly onto dry scalp, focusing on thinning areas",
      "Massage gently for 1–2 minutes for better absorption",
      "Use once daily, preferably at night; do not rinse",
      "Use consistently for a minimum of 90 days for visible results",
    ],
    regulatory: [
      "OTC cosmeceutical — for external use only",
      "Pack: 60ml amber glass dropper bottle with tamper-evident seal",
      "Dermatologically and trichologically tested",
      "Shelf life: 24 months from date of manufacture",
    ],
    color: { from: "#059669", to: "#047857", text: "#ffffff" },
  },
  /* ──────────── DERMATOLOGY ──────────── */
  {
    slug: "avqlin-ad",
    name: "AVQLIN AD Gel",
    generic: "Clindamycin Phosphate IP 1.0% w/w + Adapalene IP 0.1% w/w",
    category: "Dermatology",
    form: "Gel",
    pack: "20gm Printed Nozzle Tube",
    rx: true,
    tagline: "Clindamycin + Adapalene dual-action acne therapy",
    indications: [
      "Moderate to severe acne vulgaris",
      "Inflammatory papules and pustules",
      "Comedonal acne with post-inflammatory pigmentation",
      "Maintenance of acne clearance",
    ],
    highlights: [
      "Clindamycin suppresses C. acnes colonization",
      "Adapalene normalizes follicular keratinization",
      "Non-greasy gel base for improved compliance",
      "Once-daily nighttime application",
    ],
    moa:
      "Clindamycin is a lincosamide antibiotic that inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit, suppressing Cutibacterium acnes growth. Adapalene, a third-generation retinoid, binds nuclear retinoic acid receptors (RAR-beta/gamma) to normalize follicular epithelial desquamation, preventing microcomedone formation.",
    directions: [
      "Apply a thin layer to clean, dry skin once daily at bedtime",
      "Start on alternate nights for the first two weeks",
      "Use moisturizer and SPF 50+ sunscreen every morning",
      "Avoid waxing, other retinoids and harsh scrubs during therapy",
    ],
    regulatory: [
      "Schedule H — Prescription Drug. To be sold on the prescription of a Registered Medical Practitioner only.",
      "Pack: 20gm printed nozzle tube, length 110mm",
      "Store below 30°C, protected from direct sunlight",
      "Shelf life: 24 months from date of manufacture",
    ],
    color: { from: "#7c3aed", to: "#0b5cab", text: "#ffffff" },
  },
  {
    slug: "isotriq-20",
    name: "ISOTRIQ-20",
    generic: "Isotretinoin Capsules IP 20 mg",
    category: "Dermatology",
    form: "Capsule",
    pack: "10x10 Alu-Alu Blister",
    rx: true,
    tagline: "Severe recalcitrant nodular acne therapy",
    indications: [
      "Severe nodulocystic acne unresponsive to oral antibiotics",
      "Recalcitrant acne causing scarring",
      "Acne with severe psychological impact",
      "Rosacea (off-label, specialist-directed)",
    ],
    highlights: [
      "Gold-standard oral retinoid for severe acne",
      "Reduces sebum production by up to 90%",
      "Addresses all four pathogenic factors of acne",
      "Long-term remission after a single course",
    ],
    moa:
      "Isotretinoin is a systemic retinoid that profoundly reduces sebaceous gland size and sebum output, normalizes follicular keratinization, reduces Cutibacterium acnes colonization, and exerts anti-inflammatory effects — addressing all four pathogenic drivers of acne in a single agent.",
    directions: [
      "0.5–1.0 mg/kg/day in two divided doses with food for 15–20 weeks",
      "Total cumulative dose target: 120–150 mg/kg for optimal remission",
      "Monthly liver function and lipid panel monitoring",
      "Strict pregnancy prevention (Category X) — pregnancy test required",
    ],
    regulatory: [
      "Schedule H — Prescription Drug. To be sold on the prescription of a Registered Medical Practitioner only.",
      "Pack: 10x10 Alu-Alu blister strips",
      "REMS compliance required",
      "Shelf life: 24 months from date of manufacture",
    ],
    color: { from: "#dc2626", to: "#991b1b", text: "#ffffff" },
  },
  {
    slug: "lumiriq-ac",
    name: "LUMIRIQ AC",
    generic: "Clindamycin Phosphate + Adapalene + Niacinamide Cream",
    category: "Dermatology",
    form: "Cream",
    pack: "20g Tube",
    rx: true,
    tagline: "Triple-action acne cream formulation",
    indications: [
      "Mild to moderate acne vulgaris",
      "Inflammatory papules and comedones",
      "Post-inflammatory hyperpigmentation",
      "Acne-prone sensitive skin",
    ],
    highlights: [
      "Clindamycin + Adapalene + Niacinamide in a single cream",
      "Cream base suitable for dry or sensitive skin types",
      "Anti-inflammatory, antimicrobial and sebum-regulating",
      "Well-tolerated for extended treatment courses",
    ],
    moa:
      "Clindamycin inhibits C. acnes protein synthesis via 50S ribosomal binding. Adapalene normalizes follicular keratinization through RAR-beta/gamma activation. Niacinamide reduces sebum production, blocks melanosome transfer, and strengthens the skin barrier — a triple-pathway approach to acne management.",
    directions: [
      "Apply a thin layer to clean, dry skin once or twice daily",
      "Use in the evening for best results; apply moisturizer if dryness occurs",
      "Use broad-spectrum SPF 50+ sunscreen every morning",
      "Discontinue if excessive irritation, peeling or dryness occurs",
    ],
    regulatory: [
      "Schedule H — Prescription Drug. To be sold on the prescription of a Registered Medical Practitioner only.",
      "Pack: 20g aluminium tube in printed carton",
      "Store below 25°C, protected from light",
      "Shelf life: 24 months from date of manufacture",
    ],
    color: { from: "#ec4899", to: "#be185d", text: "#ffffff" },
  },
  /* ──────────── GENERAL MEDICINE ──────────── */
  {
    slug: "ataariq-25",
    name: "ATARIQ 25",
    generic: "Hydroxyzine Hydrochloride Tablets I.P. 25 mg",
    category: "General Medicine",
    form: "Tablet",
    pack: "10x10 Tablets",
    rx: true,
    tagline: "Antihistamine & anxiolytic therapy",
    indications: [
      "Urticaria (hives) and allergic skin conditions",
      "Anxiety and tension associated with dermatological conditions",
      "Pruritus (chronic itching)",
      "Sedation pre- and post-procedural",
    ],
    highlights: [
      "25mg hydroxyzine for reliable antihistamine action",
      "Mild anxiolytic — useful in psychodermatology",
      "Non-sedating at low doses, sedating at higher doses",
      "Well-tolerated with minimal anticholinergic effects",
    ],
    moa:
      "Hydroxyzine is a first-generation antihistamine (H1-receptor inverse agonist) that competitively blocks histamine at H1 receptors, reducing allergic symptoms. It also exerts anxiolytic activity via central 5-HT2A antagonism and mild sedation through H1 blockade in the CNS.",
    directions: [
      "25–50 mg three to four times daily, or as directed by physician",
      "Elderly or hepatic impairment: start at 25 mg daily",
      "May cause drowsiness — avoid driving if sedated",
      "Not recommended in pregnancy (Category C)",
    ],
    regulatory: [
      "Schedule H — Prescription Drug. To be sold on the prescription of a Registered Medical Practitioner only.",
      "Pack: 10x10 blister strip",
      "Store below 30°C, protected from light and moisture",
      "Shelf life: 36 months from date of manufacture",
    ],
    color: { from: "#2563eb", to: "#1e40af", text: "#ffffff" },
  },
  /* ──────────── NUTRACEUTICALS ──────────── */
  {
    slug: "rootriq-h",
    name: "ROOTRIQ-H Tablets",
    generic: "D-Biotin, N-Acetyl L-Cysteine, Calcium Pantothenate, Selenium, Copper, Zinc, Manganese & Folic Acid Tablets",
    category: "Nutraceuticals",
    form: "Tablet",
    pack: "10x1x10 Tablets",
    rx: false,
    featured: true,
    tagline: "Complete hair & skin nutrition complex",
    indications: [
      "Nutritional hair thinning and shedding",
      "Weak, brittle and slow-growing hair",
      "Biotin and micronutrient deficiency",
      "Supportive therapy alongside topical hair serums",
    ],
    highlights: [
      "D-Biotin for keratin production",
      "N-Acetyl L-Cysteine for antioxidant support",
      "Selenium, Zinc, Copper & Manganese for follicle nourishment",
      "Folic Acid & Calcium Pantothenate for cell regeneration",
    ],
    moa:
      "D-Biotin acts as a coenzyme for carboxylases essential to keratin production. N-Acetyl L-Cysteine provides sulfur amino acids for disulfide bond formation in keratin. Calcium Pantothenate (Vitamin B5) supports adrenal function and hair cortex nourishment. Selenium, Zinc, Copper and Manganese are essential trace minerals that support follicle cell division, protein synthesis and antioxidant defense.",
    directions: [
      "Take one tablet twice daily after meals, or as directed",
      "Continue for 3–6 months for visible improvement",
      "Do not exceed the recommended daily dose",
      "Keep out of reach of children",
    ],
    regulatory: [
      "OTC nutraceutical dietary supplement — not a medicine",
      "Pack: 10x1x10 blister strip",
      "Contains no added sugar or artificial colors",
      "Shelf life: 24 months from date of manufacture",
    ],
    color: { from: "#16a34a", to: "#15803d", text: "#ffffff" },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function featuredProducts() {
  return products.filter((p) => p.featured);
}
