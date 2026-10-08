export type Category =
  | "Dermatology"
  | "Cosmeceuticals"
  | "Trichology"
  | "Dental & Oral Health"
  | "Gynecology & Nutraceuticals";

export type Form =
  | "Gel"
  | "Serum"
  | "Hair Serum"
  | "Face Wash"
  | "Cream"
  | "Sunscreen"
  | "Shampoo"
  | "Capsule"
  | "Tablet";

export interface ActiveIngredient {
  name: string;
  role: string;
}

export interface WhyPoint {
  title: string;
  text: string;
}

export interface Product {
  slug: string;
  name: string;
  /** Composition / descriptor line shown under the product name */
  generic: string;
  category: Category;
  form: Form;
  pack: string;
  rx: boolean;
  featured?: boolean;
  tagline: string;
  overview: string;
  benefits: string[];
  actives: ActiveIngredient[];
  why: WhyPoint[];
  indication: string;
  directions: string[];
  safety: string[];
  storage: string;
  /** packshot palette */
  color: { from: string; to: string; text: string };
}

export const categories: Category[] = [
  "Dermatology",
  "Cosmeceuticals",
  "Trichology",
  "Dental & Oral Health",
  "Gynecology & Nutraceuticals",
];

export const forms: Form[] = [
  "Gel",
  "Serum",
  "Hair Serum",
  "Face Wash",
  "Sunscreen",
  "Shampoo",
  "Capsule",
  "Tablet",
];

export const products: Product[] = [
  /* ──────────── DERMATOLOGY ──────────── */
  {
    slug: "avqlin-ad-gel",
    name: "AVqlin AD Gel",
    generic: "Clindamycin Phosphate & Adapalene Gel",
    category: "Dermatology",
    form: "Gel",
    pack: "20 gm Tube",
    rx: true,
    featured: true,
    tagline: "Advanced Microsphere Technology · Anti-acne topical gel",
    overview:
      "AVqlin AD Gel is a topical dermatological preparation combining Clindamycin Phosphate and Adapalene, designed for the management of acne vulgaris. The formulation features Advanced Microsphere Technology, designed to support uniform distribution of the active ingredients and consistent topical application.",
    benefits: [
      "Helps manage acne vulgaris",
      "Helps reduce acne-associated inflammatory lesions",
      "Adapalene helps normalize follicular keratinization",
      "Clindamycin provides topical antibacterial activity",
      "Advanced Microsphere Technology supports uniform topical application",
      "Convenient combination of complementary anti-acne actions",
    ],
    actives: [
      {
        name: "Adapalene",
        role: "A topical retinoid that helps normalize abnormal follicular cell turnover and helps prevent formation of comedonal lesions.",
      },
      {
        name: "Clindamycin Phosphate",
        role: "A topical lincosamide antibiotic that provides antibacterial activity against acne-associated bacteria and helps manage inflammation.",
      },
    ],
    why: [
      {
        title: "Dual-Action Acne Management",
        text: "Combines the complementary actions of Adapalene + Clindamycin Phosphate in a single topical formulation.",
      },
      {
        title: "Advanced Microsphere Technology",
        text: "A sophisticated formulation approach designed to support uniform dispersion and consistent delivery of the active ingredients across the treated area.",
      },
    ],
    indication:
      "For the topical management of acne vulgaris, as directed by the physician.",
    directions: [
      "Apply a thin layer to the affected area as directed by the dermatologist / physician.",
      "For external use only. Avoid contact with eyes, lips and mucosal surfaces.",
    ],
    safety: [
      "Use only as directed by the physician.",
      "Initial dryness, redness, peeling or irritation may occur.",
      "Avoid excessive sun exposure and use suitable sunscreen during treatment.",
      "Do not apply to severely irritated or damaged skin unless advised by a physician.",
      "Keep out of reach of children.",
    ],
    storage:
      "Store in a cool, dry place, away from direct sunlight and excessive heat. Keep the container tightly closed.",
    color: { from: "#7c3aed", to: "#0b5cab", text: "#ffffff" },
  },
  {
    slug: "isotriq-20",
    name: "ISOTRIQ-20",
    generic: "Isotretinoin Capsules IP 20 mg",
    category: "Dermatology",
    form: "Capsule",
    pack: "20 mg Capsules (Alu-Alu Blister)",
    rx: true,
    featured: true,
    tagline: "Oral retinoid therapy · Severe acne management",
    overview:
      "ISOTRIQ-20 is an oral dermatological formulation containing Isotretinoin 20 mg, a systemic retinoid used for the treatment of severe, treatment-resistant acne vulgaris. It works by reducing sebaceous gland activity, controlling excess sebum production and targeting key factors involved in acne development.",
    benefits: [
      "Helps manage severe, treatment-resistant acne vulgaris",
      "Significantly reduces excess sebum production",
      "Helps reduce inflammatory acne lesions",
      "Supports normalization of follicular keratinization",
      "Helps reduce the formation of new acne lesions",
      "Provides a systemic treatment option for severe acne under specialist supervision",
    ],
    actives: [
      {
        name: "Isotretinoin IP 20 mg",
        role: "A systemic retinoid derived from vitamin A that acts on multiple factors involved in acne development — reducing sebaceous gland size and activity, decreasing excessive sebum secretion, normalizing follicular keratinization and reducing acne-associated inflammation.",
      },
    ],
    why: [
      {
        title: "Sebum Regulation",
        text: "Reduces excessive oil production.",
      },
      {
        title: "Follicular Normalization",
        text: "Helps prevent clogged pores.",
      },
      {
        title: "Anti-Inflammatory Action",
        text: "Helps reduce acne-associated inflammation.",
      },
      {
        title: "Acne Bacterial Environment",
        text: "Reduced sebum indirectly creates less favourable conditions for C. acnes proliferation.",
      },
    ],
    indication:
      "For the treatment of severe, treatment-resistant acne vulgaris, including severe nodular acne, under specialist medical supervision.",
    directions: [
      "Take orally strictly as prescribed by the dermatologist.",
      "Dosage and treatment duration depend on individual patient requirements and clinical assessment.",
      "Prescription medicine. Not intended for self-medication.",
    ],
    safety: [
      "Strictly contraindicated during pregnancy due to the risk of severe birth defects.",
      "Effective pregnancy prevention and pregnancy testing are required for patients who can become pregnant, according to the prescribing protocol.",
      "May cause dryness of lips, skin and eyes.",
      "Liver function and lipid levels require monitoring as advised by the physician.",
      "Avoid vitamin A supplements and tetracycline antibiotics unless specifically assessed by the prescribing specialist.",
      "Do not donate blood during treatment and for at least one month after stopping treatment.",
      "Use only under the supervision of a qualified dermatologist.",
    ],
    storage:
      "Store in a cool, dry and dark place below 25°C, protected from direct sunlight, heat and moisture.",
    color: { from: "#dc2626", to: "#991b1b", text: "#ffffff" },
  },
  {
    slug: "atariq-25",
    name: "ATARIQ 25",
    generic: "Hydroxyzine Hydrochloride Tablets I.P. 25 mg",
    category: "Dermatology",
    form: "Tablet",
    pack: "10 × 10 Tablets",
    rx: true,
    tagline: "Antihistamine · Anti-pruritic therapy",
    overview:
      "ATARIQ 25 contains Hydroxyzine Hydrochloride 25 mg, an antihistamine used for the management of itching and allergic skin conditions. It provides effective symptomatic relief under medical supervision.",
    benefits: [
      "Helps relieve itching and pruritus",
      "Helps manage symptoms associated with allergic skin conditions",
      "Provides antihistaminic action",
      "Supports symptomatic relief of allergy-related discomfort",
    ],
    actives: [
      {
        name: "Hydroxyzine Hydrochloride I.P. 25 mg",
        role: "An antihistamine that helps reduce the effects of histamine and provides relief from itching and allergic symptoms.",
      },
    ],
    why: [],
    indication:
      "For the management of itching and allergic skin conditions, as directed by the physician.",
    directions: ["Take as directed by the physician."],
    safety: [
      "Prescription medicine. Use only under medical supervision.",
      "May cause drowsiness or sedation. Avoid driving or operating machinery if affected.",
      "Avoid alcohol unless advised otherwise by your physician.",
      "Keep out of reach of children.",
    ],
    storage:
      "Store in a cool, dry place away from direct sunlight and moisture.",
    color: { from: "#2563eb", to: "#1e40af", text: "#ffffff" },
  },
  /* ──────────── COSMECEUTICALS ──────────── */
  {
    slug: "lumiriq-ac-face-wash",
    name: "LUMIRIQ AC Face Wash",
    generic:
      "Clarifying Face Wash · Potassium Azeloyl Diglycinate, Glycolic Acid, Salicylic Acid, Niacinamide, Zinc PCA & Witch Hazel",
    category: "Cosmeceuticals",
    form: "Face Wash",
    pack: "75 ml",
    rx: false,
    featured: true,
    tagline: "For acne & skin rejuvenation",
    overview:
      "Lumiriq AC is a refreshing clarifying face wash formulated with Potassium Azeloyl Diglycinate, Glycolic Acid, Salicylic Acid, Niacinamide, Zinc PCA and Witch Hazel. It gently cleanses the skin while helping control excess oil, refine pores and improve the appearance of acne-prone skin.",
    benefits: [
      "Deep cleansing",
      "Helps control excess oil",
      "Helps refine and unclog pores",
      "Supports clearer-looking skin",
      "Helps improve skin texture",
      "Suitable for oily and acne-prone skin",
    ],
    actives: [
      {
        name: "Potassium Azeloyl Diglycinate",
        role: "Helps support oil control and skin clarification.",
      },
      {
        name: "Salicylic Acid",
        role: "Helps unclog pores and remove excess buildup.",
      },
      {
        name: "Glycolic Acid",
        role: "Provides gentle exfoliation and helps refine skin texture.",
      },
      {
        name: "Niacinamide",
        role: "Helps support skin clarity and the skin barrier.",
      },
      {
        name: "Zinc PCA",
        role: "Helps control excess oil and supports acne-prone skin.",
      },
      {
        name: "Witch Hazel",
        role: "Helps soothe the skin and supports excess oil control.",
      },
    ],
    why: [],
    indication: "For acne-prone and oily skin, as part of a daily cleansing routine.",
    directions: [
      "Wet your face and dispense a small amount of Lumiriq AC Face Wash onto your fingertips.",
      "Gently massage over the face in circular motions, avoiding the eye area.",
      "Rinse thoroughly with water and pat dry.",
    ],
    safety: [
      "For external use only. Avoid contact with eyes and mouth.",
      "If irritation or rash occurs, discontinue use and consult a dermatologist.",
    ],
    storage: "Store in a cool, dry place. Keep the container tightly closed.",
    color: { from: "#0d9488", to: "#065f46", text: "#ffffff" },
  },
  {
    slug: "lumiriq-glow-face-wash",
    name: "LUMIRIQ GLOW Face Wash",
    generic:
      "Brightening & Pigmentation Care Face Wash · Clair Blanche-III™, B-White™ (Oligopeptide-68), Kojic Acid Dipalmitate, Alpha Arbutin, Niacinamide & Licorice Extract",
    category: "Cosmeceuticals",
    form: "Face Wash",
    pack: "75 g",
    rx: false,
    featured: true,
    tagline: "Cleanse · Brighten · Even",
    overview:
      "Lumiriq Glow is a gentle, sulphate-free brightening face wash formulated with advanced pigmentation-care actives to help reduce the appearance of pigmentation, even skin tone and maintain skin hydration. It provides gentle cleansing while leaving the skin fresh, smooth and radiant.",
    benefits: [
      "Helps reduce the appearance of pigmentation",
      "Helps even skin tone",
      "Provides gentle cleansing",
      "Helps maintain skin hydration",
      "Supports brighter, clearer-looking skin",
      "Suitable for daily use",
    ],
    actives: [
      {
        name: "Clair Blanche-III™",
        role: "A premium multi-active brightening complex by Ichimaru Pharcos, Japan, designed to target multiple pathways involved in pigmentation and support a brighter, more even-looking complexion.",
      },
      {
        name: "B-White™ (Oligopeptide-68)",
        role: "An advanced brightening peptide by Clariant, designed to support melanin regulation and improve the appearance of uneven pigmentation.",
      },
      {
        name: "Kojic Acid Dipalmitate",
        role: "Helps support pigmentation control and brighter-looking skin.",
      },
      {
        name: "Alpha Arbutin",
        role: "Helps reduce the appearance of pigmentation and uneven skin tone.",
      },
      {
        name: "Niacinamide",
        role: "Helps improve skin clarity and supports the skin barrier.",
      },
      {
        name: "Licorice Extract",
        role: "Helps soothe the skin and supports a brighter, more even-looking complexion.",
      },
    ],
    why: [
      {
        title: "Sulphate Free",
        text: "A gentle cleansing base that respects the skin barrier.",
      },
      {
        title: "Gentle & Non-Stripping",
        text: "Cleanses without leaving the skin tight or dry.",
      },
      {
        title: "Dermatologically Tested",
        text: "Suitable for all skin types, including daily use.",
      },
    ],
    indication:
      "For pigmentation-prone, uneven or dull skin, as part of a daily brightening routine.",
    directions: [
      "Wet your face, take a small amount of Lumiriq Glow Face Wash and gently massage over the face in circular motions.",
      "Rinse thoroughly with water and pat dry.",
    ],
    safety: [
      "For external use only. Avoid contact with eyes.",
      "If irritation or rash occurs, discontinue use and consult a dermatologist.",
    ],
    storage:
      "Store in a cool, dry place away from direct sunlight. Keep the container tightly closed.",
    color: { from: "#ec4899", to: "#be185d", text: "#ffffff" },
  },
  {
    slug: "lumiriq-ac-serum",
    name: "LUMIRIQ AC Face Serum",
    generic:
      "Clarifying Face Serum · Salicylic Acid, Niacinamide, Zinc PCA & ACZero™ with Hyaluronic Acid, Aquaxyl™ & Ceramide Complex",
    category: "Cosmeceuticals",
    form: "Serum",
    pack: "30 ml",
    rx: false,
    featured: true,
    tagline: "Multi-active complex for acne-prone skin",
    overview:
      "Lumiriq AC is a multi-active clarifying face serum formulated for acne-prone skin. Its advanced combination of Salicylic Acid, Niacinamide, Zinc PCA and ACZero™ helps unclog pores, control excess oil, reduce the appearance of acne marks and support a healthy skin barrier. Enriched with Hyaluronic Acid, Aquaxyl™ and Ceramide Complex for balanced hydration and skin comfort.",
    benefits: [
      "Helps unclog pores",
      "Helps control acne and excess oil",
      "Helps reduce the appearance of acne marks",
      "Supports a healthy skin barrier",
      "Provides balanced hydration",
      "Helps soothe acne-prone skin",
      "Promotes clearer, smoother-looking skin",
    ],
    actives: [
      {
        name: "Salicylic Acid",
        role: "Helps unclog pores and remove excess buildup for clearer-looking skin.",
      },
      {
        name: "Niacinamide",
        role: "Helps reduce the appearance of acne marks and supports skin clarity.",
      },
      {
        name: "Zinc PCA",
        role: "Helps control excess oil and supports acne-prone skin.",
      },
      {
        name: "ACZero™",
        role: "Provides anti-acne and soothing support for clearer, calmer-looking skin.",
      },
      {
        name: "Hyaluronic Acid",
        role: "Helps provide deep hydration and maintain skin moisture.",
      },
      {
        name: "Aquaxyl™",
        role: "Supports long-lasting moisture and hydration.",
      },
      {
        name: "Ceramide Complex",
        role: "Helps strengthen and support the skin barrier.",
      },
    ],
    why: [],
    indication:
      "For acne-prone skin with excess oil, congested pores and post-acne marks.",
    directions: [
      "Cleanse your face with a gentle facial cleanser and pat dry.",
      "Apply a small amount of Lumiriq AC serum onto the palm or directly onto the desired areas.",
      "Gently massage until fully absorbed. Follow with a moisturizer if required.",
    ],
    safety: [
      "For external use only. Avoid contact with eyes.",
      "If irritation or rash occurs, discontinue use and consult a dermatologist.",
    ],
    storage:
      "Store in a cool, dry place away from direct sunlight. Keep the container tightly closed.",
    color: { from: "#0891b2", to: "#0e7490", text: "#ffffff" },
  },
  {
    slug: "uvriq-sunscreen",
    name: "UVRIQ Whipped Invisible Sunscreen",
    generic:
      "SPF 50+ | PA+++ · Broad Spectrum UVA & UVB Protection",
    category: "Cosmeceuticals",
    form: "Sunscreen",
    pack: "50 gm",
    rx: false,
    featured: true,
    tagline: "Ultra-light, non-greasy, invisible finish",
    overview:
      "UVRIQ Whipped Invisible Sunscreen is an ultra-light, non-greasy sunscreen formulated to provide broad-spectrum UVA & UVB protection. Its lightweight whipped texture offers a fast-absorbing, invisible finish without leaving a white cast.",
    benefits: [
      "SPF 50+ broad-spectrum protection",
      "PA+++ UVA protection",
      "Photostable UV filter system",
      "Ultra-light whipped texture",
      "Fast absorbing, non-greasy finish",
      "No white cast · Non-comedogenic",
      "Suitable for all skin types",
    ],
    actives: [
      {
        name: "Niacinamide",
        role: "Helps support the skin barrier and overall skin appearance.",
      },
      {
        name: "Vitamin E",
        role: "Provides antioxidant support and helps maintain skin conditioning.",
      },
      {
        name: "Alpha Glucosyl Rutin",
        role: "Provides antioxidant support and complements daily skin protection.",
      },
    ],
    why: [],
    indication:
      "For daily broad-spectrum sun protection for all skin types.",
    directions: [
      "Apply generously and evenly to the face and exposed skin as the last step of your morning skincare routine.",
      "Reapply as required, especially after sweating or prolonged sun exposure.",
    ],
    safety: [
      "For external use only. Avoid direct contact with eyes.",
      "If irritation occurs, discontinue use and consult a dermatologist.",
    ],
    storage:
      "Store in a cool, dry place away from direct sunlight. Keep the container tightly closed.",
    color: { from: "#f59e0b", to: "#ea580c", text: "#ffffff" },
  },
  /* ──────────── TRICHOLOGY ──────────── */
  {
    slug: "rootriq-pro-hair-serum",
    name: "ROOTRIQ PRO Hair Serum",
    generic:
      "Advanced Clinically Studied Actives Complex · Procapil® 3%, Redensyl® 3%, Anagain™ 2%, Follicusan™ 1%, Rice Exosome 1%, Root Biotech, Anagelin, Caffeine & Biotin",
    category: "Trichology",
    form: "Hair Serum",
    pack: "50 ml",
    rx: false,
    featured: true,
    tagline: "Hair growth serum · For all hair types · Men & women",
    overview:
      "ROOTRIQ PRO Hair Serum is an advanced multi-active hair serum formulated to reduce hair fall, support hair growth, improve hair density and strengthen hair roots. Its powerful combination of clinically studied hair-growth actives and scalp-supporting ingredients provides comprehensive care for healthier-looking hair.",
    benefits: [
      "Helps reduce hair fall",
      "Supports hair growth",
      "Helps improve hair density",
      "Helps strengthen hair roots",
      "Supports a healthy scalp environment",
      "Helps maintain the natural hair-growth cycle",
    ],
    actives: [
      { name: "Procapil® 3%", role: "Helps reduce hair fall and supports stronger hair anchoring." },
      { name: "Redensyl® 3%", role: "Supports hair density and promotes healthy hair growth." },
      { name: "Anagain™ 2%", role: "Helps revitalize hair follicles and support the natural hair-growth cycle." },
      { name: "Follicusan™ 1%", role: "Helps nourish and strengthen the hair-root environment." },
      { name: "Rice Exosome 1%", role: "Supports scalp renewal and a healthy scalp environment." },
      { name: "Root Biotech", role: "Advanced botanical active supporting hair follicle and scalp care." },
      { name: "Anagelin", role: "Helps support hair follicle vitality and healthy hair growth." },
      { name: "Caffeine", role: "Supports scalp and hair-root care and a healthy hair-growth environment." },
      { name: "Biotin", role: "Supports healthy-looking and stronger hair." },
    ],
    why: [],
    indication:
      "For hair fall, thinning hair and reduced hair density in men and women.",
    directions: [
      "Apply a generous amount directly onto the scalp and massage gently with fingertips.",
      "Use AM/PM as directed.",
    ],
    safety: [
      "For external use only. Avoid contact with eyes.",
      "In case of irritation or rash, discontinue use and consult a dermatologist.",
      "A patch test is recommended before first use.",
    ],
    storage:
      "Store in a cool, dry place away from direct sunlight. Keep the container tightly closed.",
    color: { from: "#059669", to: "#047857", text: "#ffffff" },
  },
  {
    slug: "rootriq-ahf-shampoo",
    name: "ROOTRIQ AHF Shampoo",
    generic:
      "Hair Strengthening Shampoo · Redensyl® & AnaGain™ Complex, Hydrolyzed Protein, Caffeine, Zinc PCA & Panthenol",
    category: "Trichology",
    form: "Shampoo",
    pack: "Hair Strengthening Shampoo",
    rx: false,
    tagline: "Strengthen · Nourish · Balance",
    overview:
      "ROOTRIQ AHF is an advanced hair-strengthening shampoo formulated with Redensyl® & AnaGain™ Complex, Hydrolyzed Protein, Caffeine, Zinc PCA and Panthenol. It gently cleanses the scalp while helping reduce hair fall, strengthen hair and maintain a healthy scalp environment.",
    benefits: [
      "Helps reduce hair fall",
      "Strengthens weak and fragile hair",
      "Helps nourish hair roots",
      "Supports a healthy scalp environment",
      "Helps improve hair texture and manageability",
      "Helps maintain stronger, healthier-looking hair",
    ],
    actives: [
      { name: "Redensyl®", role: "Helps support the natural hair-growth cycle and promotes healthier-looking hair." },
      { name: "AnaGain™", role: "Helps support hair follicle activity and the natural hair-growth cycle." },
      { name: "Hydrolyzed Protein", role: "Helps strengthen and condition the hair fibre while improving hair texture." },
      { name: "Caffeine", role: "Provides scalp and hair-root support for healthier-looking hair." },
      { name: "Zinc PCA", role: "Helps balance excess scalp oil and supports a healthy scalp environment." },
      { name: "Panthenol", role: "Helps moisturize, condition and improve the smoothness of hair." },
    ],
    why: [],
    indication:
      "For hair fall, weak and fragile hair and an unbalanced scalp.",
    directions: [
      "Wet hair thoroughly. Apply an adequate amount of ROOTRIQ AHF to the scalp and hair.",
      "Gently massage into a rich lather and rinse thoroughly. Repeat if required.",
      "Use regularly for best results.",
    ],
    safety: [
      "For external use only. Avoid contact with eyes.",
      "If irritation or rash occurs, discontinue use and consult a dermatologist.",
    ],
    storage:
      "Store in a cool, dry place away from direct sunlight. Keep the container tightly closed.",
    color: { from: "#16a34a", to: "#065f46", text: "#ffffff" },
  },
  /* ──────────── GYNECOLOGY & NUTRACEUTICALS ──────────── */
  {
    slug: "rootriq-h-tablets",
    name: "ROOTRIQ-H Tablets",
    generic:
      "Therapeutic-Dose Hair Nutrition Formula · D-Biotin, N-Acetyl L-Cysteine, Calcium Pantothenate, Selenium, Copper, Zinc, Manganese & Folic Acid",
    category: "Gynecology & Nutraceuticals",
    form: "Tablet",
    pack: "10 Tablets",
    rx: false,
    featured: true,
    tagline: "Therapeutic-dose nutritional support for healthy hair",
    overview:
      "ROOTRIQ-H is a therapeutic-dose nutritional formula combining Biotin, N-Acetyl L-Cysteine, Calcium Pantothenate, Selenium, Copper, Zinc, Manganese and Folic Acid. It is designed to provide targeted nutritional support for healthy hair growth, stronger hair roots and overall hair wellness.",
    benefits: [
      "Supports healthy hair growth",
      "Helps provide targeted hair nutrition",
      "Supports stronger hair roots",
      "Supports healthy hair structure",
      "Helps maintain overall hair and scalp wellness",
    ],
    actives: [
      { name: "D-Biotin", role: "Supports healthy hair growth and stronger-looking hair." },
      { name: "N-Acetyl L-Cysteine", role: "Provides cysteine support for healthy keratin formation." },
      { name: "Calcium Pantothenate", role: "Supports nutritional requirements for healthy hair maintenance." },
      { name: "Selenium", role: "Provides antioxidant nutritional support for hair and scalp." },
      { name: "Zinc", role: "Supports normal hair and scalp health." },
      { name: "Copper", role: "Supports normal hair pigmentation and connective tissue health." },
      { name: "Manganese", role: "Provides essential nutritional support for connective tissue and hair health." },
      { name: "Folic Acid", role: "Supports normal cell growth and renewal." },
    ],
    why: [
      {
        title: "Therapeutic-Dose Formula",
        text: "A carefully formulated combination of essential vitamins, minerals and amino-acid support designed to provide targeted nutritional support for hair health.",
      },
    ],
    indication:
      "Targeted nutritional support for healthy hair growth and stronger hair roots.",
    directions: ["Take as directed by the physician."],
    safety: [
      "Use under medical guidance.",
      "Keep out of reach of children.",
    ],
    storage:
      "Store in a cool, dry and dark place. Protect from direct sunlight and moisture.",
    color: { from: "#16a34a", to: "#15803d", text: "#ffffff" },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function featuredProducts() {
  return products.filter((p) => p.featured);
}

export function productsByCategory(category: Category) {
  return products.filter((p) => p.category === category);
}
