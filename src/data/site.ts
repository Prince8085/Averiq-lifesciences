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
    href: "/#products",
    children: [
      { label: "Dermatology" },
      { label: "Cosmeceuticals" },
      { label: "Trichology" },
      { label: "Dental & Oral Health" },
      { label: "Gynecology & Nutraceuticals" },
    ],
  },
  { label: "Contact", href: "/contact" },
] as const;

export const therapeuticVerticals = [
  {
    slug: "Dermatology",
    title: "Dermatology & Cosmeceuticals",
    blurb:
      "Advanced skincare, acne management, pigmentation correctors, sunscreens and therapeutic topicals.",
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
    slug: "Dental & Oral Health",
    title: "Dental & Oral Health",
    blurb:
      "Oral care and dental therapeutic formulations — an expanding Averiq range.",
    icon: "pill",
  },
  {
    slug: "Gynecology & Nutraceuticals",
    title: "Gynecology & Nutraceuticals",
    blurb:
      "Women's health formulations alongside multivitamins, mineral complexes and nutraceutical support.",
    icon: "leaf",
  },
] as const;
