export const site = {
  name: "Averiq Lifesciences",
  legalName: "AVERIQ LIFESCIENCES PVT LTD.",
  cin: "U46492MP2026PTC082170",
  tagline: "Advanced • Verified • Quality",
  address: "E-49/5, First Floor, Okhla Industrial Area, Phase II, New Delhi 110020",
  city: "New Delhi",
  state: "Delhi",
  pincode: "110020",
  emailPrimary: "contact@averiqlifesciences.com",
  emailInfo: "info@averiqlifesciences.com",
  phone: "011 6931 0599",
  whatsapp: "+911169310599",
  whatsappDisplay: "011 6931 0599",
  founded: "February 2026",
  roc: "ROC Gwalior (Madhya Pradesh)",
  directors: [] as string[],
  url: "https://www.averiqlifesciences.com",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Dermatology", href: "/products?category=Dermatology" },
      { label: "Cosmeceuticals", href: "/products?category=Cosmeceuticals" },
      { label: "Trichology", href: "/products?category=Trichology" },
      { label: "General Medicine", href: "/products?category=General Medicine" },
      { label: "Nutraceuticals", href: "/products?category=Nutraceuticals" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Quality Standards", href: "/quality" },
] as const;

export const therapeuticVerticals = [
  {
    slug: "Dermatology",
    title: "Dermatology & Cosmeceuticals",
    blurb:
      "Advanced skincare, acne management, pigmentation correctors, sunscreen gels and anti-aging topicals.",
    icon: "sparkles",
  },
  {
    slug: "Trichology",
    title: "Trichology & Hair Science",
    blurb:
      "Anti-hair fall serums, peptide hair growth solutions and clarifying therapeutic shampoos.",
    icon: "flower",
  },
  {
    slug: "General Medicine",
    title: "General Medicine & Anti-Infectives",
    blurb:
      "Broad-spectrum antibiotics, analgesics, antipyretics and gastro-resistant tablets.",
    icon: "pill",
  },
  {
    slug: "Nutraceuticals",
    title: "Nutraceuticals & Dietary Supplements",
    blurb:
      "Multivitamins, antioxidant blends, mineral complexes and immunity boosters.",
    icon: "leaf",
  },
] as const;
