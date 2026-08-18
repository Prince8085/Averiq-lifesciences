export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  body: { heading: string; paragraphs: string[] }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "science-behind-niacinamide-acne",
    title: "The Science Behind Niacinamide in Acne Management",
    excerpt:
      "Why dermatologists pair clindamycin with 4% nicotinamide — and how the combination outperforms monotherapy in inflammatory acne.",
    category: "Dermatology",
    date: "2026-07-28",
    readTime: "6 min read",
    author: "Averiq R&D Desk",
    body: [
      {
        heading: "A pairing that works at two levels",
        paragraphs: [
          "Acne vulgaris is a multifactorial disease driven by follicular hyperkeratinization, Cutibacterium acnes colonization, sebum overproduction and inflammation. Single-mechanism treatments frequently fall short because they address only one of these drivers. This is why fixed-dose topical combinations have become the standard of care in clinical dermatology.",
          "Clindamycin phosphate (1% w/w) acts as a protein-synthesis inhibitor on C. acnes, reducing bacterial load and the release of pro-inflammatory free fatty acids. Nicotinamide (4% w/w) — also known as niacinamide — brings a complementary anti-inflammatory and sebum-modulating effect, without contributing to antibiotic resistance.",
        ],
      },
      {
        heading: "The evidence base",
        paragraphs: [
          "Controlled studies of the clindamycin + nicotinamide combination have demonstrated significant reductions in inflammatory lesion counts, typically visible within 4–8 weeks of twice-daily application. The vehicle matters too: a hydro-gel base delivers rapid absorption with a non-greasy finish that improves long-term compliance — a frequent failure point in acne therapy.",
          "At Averiq Lifesciences, our Avercin Gel is formulated on exactly this rationale, with batch-tested content uniformity and pH-matched skin compatibility.",
        ],
      },
      {
        heading: "The clinician takeaway",
        paragraphs: [
          "For inflammatory acne with papules and pustules, a clindamycin + nicotinamide hydro-gel offers an evidence-backed, resistance-conscious first-line option — especially for patients who cannot tolerate benzoyl peroxide or retinoids.",
          "Always remind patients that prescription topical therapy works on a continuum: visible improvement takes weeks, and consistency beats intensity.",
        ],
      },
    ],
  },
  {
    slug: "trichology-trends-2026",
    title: "Trichology Trends 2026: Peptide Serums & Follicle Science",
    excerpt:
      "From Redensyl to Procapil — the active ingredients reshaping hair-growth therapy and what formulators are doing differently.",
    category: "Trichology",
    date: "2026-07-15",
    readTime: "5 min read",
    author: "Averiq R&D Desk",
    body: [
      {
        heading: "Beyond minoxidil",
        paragraphs: [
          "For decades, minoxidil and finasteride dominated the hair-restoration conversation. Today's trichology market is broadening toward biomimetic peptides and plant-derived actives that target the hair follicle's stem-cell niche without systemic hormonal effects.",
          "Redensyl is a combination of dihydroquercetin-glucoside and glycine, shown to stimulate dermal papilla cells and extend the anagen phase. Procapil couples matrikine peptides with apigenin and biotin to counter follicle fibrosis — the process that progressively miniaturizes hair follicles in androgenetic alopecia.",
        ],
      },
      {
        heading: "Why the delivery vehicle matters",
        paragraphs: [
          "Hair-growth actives must reach the dermal papilla at the base of the follicle, which sits several millimeters below the skin surface. Modern leave-on serum vehicles use penetration enhancers and low-molecular-weight carriers to improve follicular delivery — making spray serums with optimized vehicles more effective than simple lotions at equal concentrations.",
          "Averfol Hair Serum pairs Procapil 3%, Redensyl 3% and Anagain 2% in a non-greasy spray vehicle designed for daily use, with a 90-day evaluation window for visible density changes.",
        ],
      },
      {
        heading: "Setting realistic expectations",
        paragraphs: [
          "Trichology products are slow cosmetics: users should expect the first signs of reduced shedding in 6–8 weeks and measurable density improvements by month three. Consistent daily application is non-negotiable — follicle cycling takes time.",
        ],
      },
    ],
  },
  {
    slug: "pcd-franchise-guide-mp",
    title: "A Practical Guide to Starting a PCD Pharma Franchise in Madhya Pradesh",
    excerpt:
      "Monopoly rights, drug license requirements, investment budgets and the exact steps to launch your own pharma distribution business in MP.",
    category: "Business",
    date: "2026-06-30",
    readTime: "8 min read",
    author: "Business Desk",
    body: [
      {
        heading: "What a PCD franchise actually is",
        paragraphs: [
          "PCD (Propaganda Cum Distribution) is India's dominant pharma distribution model: a manufacturer grants a distributor monopoly rights for a defined territory, and the distributor markets the company's branded formulations to doctors, chemists and hospitals. The distributor benefits from an established product portfolio and promotional support; the company gains regional market coverage.",
          "In Madhya Pradesh — and Indore in particular — the model has grown rapidly because of the state's strong chemist network and proximity to major manufacturing hubs.",
        ],
      },
      {
        heading: "Licensing requirements",
        paragraphs: [
          "To operate as a PCD franchisee you generally need a wholesale drug license (Form 20B/21B) under the Drugs and Cosmetics Act, 1940, issued by the state licensing authority. A GST registration is required for invoicing, and many companies also ask for a copy of your premises proof and identity documents.",
          "If you don't hold a drug license yet, many manufacturers — including Averiq — allow you to apply and complete documentation while your license is being processed.",
        ],
      },
      {
        heading: "Budget expectations",
        paragraphs: [
          "Entry-level franchises typically require an investment of ₹50,000 – ₹2,00,000 covering initial stock, promotional material and deposit. The sweet spot for most new distributors is ₹2–5 lakhs, which supports a wider portfolio and stronger territory coverage. Beyond ₹5 lakhs, companies usually offer expanded monopoly areas and additional marketing support.",
        ],
      },
      {
        heading: "Choosing the right partner",
        paragraphs: [
          "Evaluate three things above all: product quality (WHO-GMP certified manufacturing), on-time supply reliability, and the marketing support kit — visual aids, reminder cards, samples and MR bags. A company that invests in your promotion is investing in your territory's growth.",
        ],
      },
    ],
  },
  {
    slug: "vitamin-d3-calcium-bone-health",
    title: "Vitamin D3 & Calcium: Why 'More' Is Not 'Better'",
    excerpt:
      "Dosing rationale for bone health supplements — and why bioavailability and patient adherence matter more than milligram counts.",
    category: "Nutraceuticals",
    date: "2026-06-10",
    readTime: "4 min read",
    author: "Averiq R&D Desk",
    body: [
      {
        heading: "The absorption problem",
        paragraphs: [
          "Calcium carbonate is the most common calcium salt in supplements, but its absorption depends on gastric acid. Taking it with food — especially a meal containing some fat — meaningfully improves uptake. Vitamin D3's role is decisive here: cholecalciferol drives the intestinal transporters that actually move calcium into the bloodstream.",
          "This is why fixed-dose combinations such as calcium + D3 + zinc outperform plain calcium in real-world adherence and efficacy: one tablet covers the entire absorption cascade.",
        ],
      },
      {
        heading: "Dosing logic for the Indian population",
        paragraphs: [
          "The Indian diet is frequently low in both calcium and vitamin D, with widespread insufficiency documented across urban populations. A daily supplement delivering elemental calcium 500mg alongside vitamin D3 2000 IU provides a maintenance dose that is safe for long-term use while correcting the deficiency gap that diet alone rarely closes.",
          "Avercal-HD is formulated to this specification, with a coated tablet design that minimizes GI discomfort — the most common reason patients abandon calcium therapy.",
        ],
      },
      {
        heading: "Compliance is the real medicine",
        paragraphs: [
          "Clinical outcomes in bone health track adherence more closely than any single ingredient's dose. Choose formulations patients can sustain: once-daily dosing, small tablet size, and no gastric distress. Everything else is secondary.",
        ],
      },
    ],
  },
];
