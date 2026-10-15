// Central content configuration — edit ONLY this file to update the whole site.
// All components, SEO tags and contact buttons read from here.
// Replace placeholder prices, links, address and working hours with real data.

export type Service = {
  title: string;
  description: string;
  price: string;
  duration: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  label: string;
};

export type WhyPoint = {
  title: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const siteConfig = {
  // Brand identity
  businessName: "Silk & Shine Studio",
  tagline: "Professional Hair Straightening & Restoration",
  taglineShort: "Silk & Shine",

  // Hero section
  hero: {
    badge: "Premium formulas · Healthy shine",
    title: "Silky, Healthy, Perfectly Straight Hair",
    subtitle:
      "Keratin, botox, nanoplasty and reconstruction — custom treatment for your hair type, with a glossy salon finish that lasts for months.",
    primaryCtaLabel: "Message on Telegram",
    secondaryCtaLabel: "Message on WhatsApp",
    note: "Free consultation · Reply within an hour",
    heroImage: "/hero.jpg",
    heroImageAlt: "Model with long silky straight shiny hair after keratin treatment",
    stats: [
      { value: "500+", label: "Happy clients" },
      { value: "4-6 mo", label: "Lasting smoothness" },
      { value: "100%", label: "Premium formulas" },
    ],
  },

  // Navigation links (anchor ids must match section ids)
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Why Me", href: "#why-me" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // Services — six cards
  services: [
    {
      title: "Keratin Straightening",
      description:
        "Classic smoothing for frizzy, wavy hair. Seals the cuticle for mirror shine.",
      price: "from $80",
      duration: "2-3 hours",
    },
    {
      title: "Hair Botox",
      description:
        "Deep nourishment and softness. Ideal for thin, tired or bleached hair.",
      price: "from $70",
      duration: "1.5-2 hours",
    },
    {
      title: "Nanoplasty",
      description:
        "Next-generation straightening with a natural look. Great for thick, curly hair.",
      price: "from $90",
      duration: "2.5-3.5 hours",
    },
    {
      title: "Bio-Straightening",
      description:
        "Gentle amino-acid smoothing with no harsh fumes. For sensitive scalps.",
      price: "from $85",
      duration: "2-3 hours",
    },
    {
      title: "Hair Reconstruction",
      description:
        "Intensive repair for damaged, brittle ends. Restores shine step by step.",
      price: "from $60",
      duration: "1-2 hours",
    },
    {
      title: "Custom Work",
      description:
        "Complex cases and corrections after other salons. Personal formula.",
      price: "from $XX",
      duration: "By consultation",
    },
  ] as Service[],

  // Results gallery — drop files into /public/gallery and update src paths here.
  gallery: [
    { src: "/gallery/result-1.jpg", alt: "Keratin straightening result 1", label: "Keratin - Before / After" },
    { src: "/gallery/result-2.jpg", alt: "Hair botox result 2", label: "Botox - Before / After" },
    { src: "/gallery/result-3.jpg", alt: "Nanoplasty result 3", label: "Nanoplasty - Before / After" },
    { src: "/gallery/result-4.jpg", alt: "Bio-straightening result 4", label: "Bio - Before / After" },
    { src: "/gallery/result-5.jpg", alt: "Hair reconstruction result 5", label: "Reconstruction - Before / After" },
    { src: "/gallery/result-6.jpg", alt: "Custom hair work result 6", label: "Custom - Before / After" },
  ] as GalleryItem[],

  // Why choose me — four points
  whyPoints: [
    {
      title: "Premium-class formulas",
      text: "Only tested professional products, selected for your hair type and history.",
    },
    {
      title: "Hair safety first",
      text: "Temperature, timing and diagnosis are controlled - no burnt or over-dried hair.",
    },
    {
      title: "Custom approach",
      text: "Every head is different. Formula, mix and technique are tailored to you.",
    },
    {
      title: "Long-lasting results",
      text: "Smoothness for months with simple aftercare and a free follow-up consultation.",
    },
  ] as WhyPoint[],

  // FAQ — five questions
  faq: [
    {
      question: "How long do the results last?",
      answer:
        "Typically 3 to 6 months depending on the treatment, your hair type and aftercare. Keratin and nanoplasty last the longest; botox and reconstruction are repeated every 2-4 months for best effect.",
    },
    {
      question: "How should I care for my hair afterwards?",
      answer:
        "Use sulfate-free shampoo, avoid washing for 24-48 hours after straightening, limit sea water and chlorine, and use heat protection when styling. You will receive a personal aftercare checklist.",
    },
    {
      question: "Is it safe for my hair?",
      answer:
        "Yes, when diagnosed and applied correctly. I check hair history and elasticity, then choose temperature and formula accordingly. Damaged hair starts with reconstruction.",
    },
    {
      question: "How long does the appointment take?",
      answer:
        "Most treatments take 1.5 to 3.5 hours depending on length, thickness and service. Custom work is estimated during a free online consultation with photos.",
    },
    {
      question: "How do I book?",
      answer:
        "Message me on Telegram or WhatsApp with a photo of your hair in daylight. I will suggest the best treatment, price and available time. No prepayment for first visit.",
    },
  ] as FaqItem[],

  // Contact and socials — replace with real links
  socials: {
    telegram: "https://t.me/your_username",
    whatsapp: "https://wa.me/10000000000",
    tiktok: "https://tiktok.com/@your_username",
    instagram: "https://instagram.com/your_username",
  },

  contact: {
    address: "123 Beauty Street, Your City",
    workingHours: "Mon-Sat, 10:00-19:00, by appointment",
    phoneNote: "Fastest reply on Telegram and WhatsApp",
  },

  footerNote:
    "Professional hair straightening and restoration. Premium formulas, custom approach.",

  // SEO and sharing
  metadata: {
    title: "Silk and Shine Studio - Keratin, Botox and Nanoplasty | Silky Straight Hair",
    description:
      "Professional keratin straightening, hair botox, nanoplasty, bio-straightening and reconstruction. Premium formulas, custom approach, long-lasting silky results.",
  },
};

export type SiteConfig = typeof siteConfig;
