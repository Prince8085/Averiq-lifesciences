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
];
