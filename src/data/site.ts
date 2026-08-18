export const site = {
  name: "Averiq Lifesciences",
  legalName: "Averiq Lifesciences Private Limited",
  cin: "U46492MP2026PTC082170",
  tagline: "Advanced • Verified • Quality",
  address: "C23- Dilip Nagar, Khajrana, Indore, Madhya Pradesh - 452016, India",
  city: "Indore",
  state: "Madhya Pradesh",
  pincode: "452016",
  emailPrimary: "contact@averiqlifesciences.com",
  emailInfo: "info@averiqlifesciences.com",
  phone: "+91 90000 00000",
  whatsapp: "+919000000000",
  whatsappDisplay: "+91 90000 00000",
  founded: "February 2026",
  roc: "ROC Gwalior (Madhya Pradesh)",
  directors: ["Mahin Khan", "Abdul Muttalib"],
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
  { label: "PCD Franchise", href: "/partner" },
  { label: "Quality Standards", href: "/quality" },
  { label: "Contact", href: "/contact" },
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
