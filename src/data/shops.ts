import type { AffiliateNetwork } from "@/lib/affiliate";

export type CouponType = "code" | "deal";

export type Coupon = {
  id: string;
  title: string;
  discountLabel: string;
  type: CouponType;
  code: string | null;
  details: string[];
  exclusive?: boolean;
  /** Final merchant URL – wrapped via /out + Digidip/Awin */
  merchantUrl: string;
  /** ISO date – optional expiry for automation */
  expiresAt?: string;
  lastCheckedAt?: string;
  source?: string;
};

export type Shop = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  logoText: string;
  accent: string;
  rank: number;
  affiliateNetwork?: AffiliateNetwork;
  awinMerchantId?: string;
  coupons: Coupon[];
};

export type Category = {
  slug: string;
  label: string;
  icon: string;
  teaser: string;
};

/** Top-gesuchte Gutschein-Themen im DACH-Raum (MVP-Auswahl). */
export const categories: Category[] = [
  {
    slug: "essen-bestellen",
    label: "Essen bestellen",
    icon: "🍔",
    teaser: "Lieferdienste & Takeaway",
  },
  {
    slug: "mode",
    label: "Mode",
    icon: "👗",
    teaser: "Fashion, Schuhe & Brands",
  },
  {
    slug: "elektronik",
    label: "Elektronik",
    icon: "💻",
    teaser: "Technik, Gaming & Gadgets",
  },
  {
    slug: "reisen",
    label: "Reisen",
    icon: "✈️",
    teaser: "Hotels, Flüge & Urlaub",
  },
  {
    slug: "beauty",
    label: "Beauty",
    icon: "💄",
    teaser: "Pflege, Make-up & Parfum",
  },
];

function coupon(
  partial: Omit<Coupon, "details"> & { details?: string[] },
): Coupon {
  return {
    details: partial.details ?? ["Demo-Code – nur für MVP-Tests"],
    ...partial,
  };
}

export const shops: Shop[] = [
  // Essen bestellen
  {
    slug: "lieferando",
    name: "Lieferando",
    category: "Essen bestellen",
    categorySlug: "essen-bestellen",
    rank: 1,
    shortDescription: "Essen bestellen von tausenden Restaurants – oft mit App-Rabatt und Aktionen.",
    logoText: "Lieferando",
    accent: "#ff8000",
    coupons: [
      coupon({
        id: "lieferando-app",
        title: "App-Rabatt für deine nächste Bestellung",
        discountLabel: "15% Gutschein",
        type: "code",
        code: "APP15DEMO",
        exclusive: true,
        merchantUrl: "https://www.lieferando.de/",
      }),
    ],
  },
  {
    slug: "uber-eats",
    name: "Uber Eats",
    category: "Essen bestellen",
    categorySlug: "essen-bestellen",
    rank: 2,
    shortDescription: "Essen, Lebensmittel und mehr – mit aktuellen Uber Eats Rabattcodes sparen.",
    logoText: "Uber Eats",
    accent: "#06c167",
    coupons: [
      coupon({
        id: "uber-eats-neu",
        title: "Rabatt für Neukunden",
        discountLabel: "10€ Gutschein",
        type: "code",
        code: "NEU10DEMO",
        merchantUrl: "https://www.ubereats.com/de",
      }),
    ],
  },
  {
    slug: "wolt",
    name: "Wolt",
    category: "Essen bestellen",
    categorySlug: "essen-bestellen",
    rank: 3,
    shortDescription: "Schnelle Lieferung aus Restaurants und Stores – prüfe aktuelle Wolt Codes.",
    logoText: "Wolt",
    accent: "#009de0",
    coupons: [
      coupon({
        id: "wolt-deal",
        title: "Aktion ohne Mindestbestellwert",
        discountLabel: "Deal Angebot",
        type: "deal",
        code: null,
        details: ["Kein Code nötig", "Demo-Angebot"],
        merchantUrl: "https://wolt.com/de",
      }),
    ],
  },
  {
    slug: "burgerme",
    name: "burgerme",
    category: "Essen bestellen",
    categorySlug: "essen-bestellen",
    rank: 4,
    shortDescription: "Burger-Delivery mit regelmäßigen Gutscheinaktionen.",
    logoText: "burgerme",
    accent: "#c8102e",
    coupons: [
      coupon({
        id: "burgerme-5",
        title: "5€ Rabatt ab 20€",
        discountLabel: "5€ Gutschein",
        type: "code",
        code: "BURGER5",
        merchantUrl: "https://www.burgerme.de/",
      }),
    ],
  },
  {
    slug: "mcdonalds",
    name: "McDonald's",
    category: "Essen bestellen",
    categorySlug: "essen-bestellen",
    rank: 5,
    shortDescription: "App-Deals und Coupons für McDonald's Bestellungen.",
    logoText: "McDonald's",
    accent: "#ffc72c",
    coupons: [
      coupon({
        id: "mcd-app",
        title: "App-Angebot der Woche",
        discountLabel: "Deal Angebot",
        type: "deal",
        code: null,
        details: ["Kein Code nötig", "In der App einlösen"],
        merchantUrl: "https://www.mcdonalds.de/",
      }),
    ],
  },

  // Mode
  {
    slug: "zalando",
    name: "Zalando",
    category: "Mode",
    categorySlug: "mode",
    rank: 1,
    shortDescription: "Fashion von hunderten Marken – mit Zalando Rabattcodes und Sale-Deals.",
    logoText: "ZALANDO",
    accent: "#ff6900",
    coupons: [
      coupon({
        id: "zalando-20",
        title: "20% auf die erste Bestellung",
        discountLabel: "20% Gutschein",
        type: "code",
        code: "WILLKOMMEN20",
        merchantUrl: "https://www.zalando.de/",
      }),
    ],
  },
  {
    slug: "about-you",
    name: "ABOUT YOU",
    category: "Mode",
    categorySlug: "mode",
    rank: 2,
    shortDescription: "Trendmode und Influencer-Styles – oft mit Neukunden-Codes.",
    logoText: "ABOUT YOU",
    accent: "#111111",
    coupons: [
      coupon({
        id: "ay-15",
        title: "15% Neukunden-Rabatt",
        discountLabel: "15% Gutschein",
        type: "code",
        code: "AY15DEMO",
        exclusive: true,
        merchantUrl: "https://www.aboutyou.de/",
      }),
    ],
  },
  {
    slug: "otto",
    name: "Otto",
    category: "Mode",
    categorySlug: "mode",
    rank: 3,
    shortDescription: "Mode, Wohnen und mehr – Otto Gutscheine für den nächsten Einkauf.",
    logoText: "OTTO",
    accent: "#e4032e",
    coupons: [
      coupon({
        id: "otto-15",
        title: "15€ Rabatt ab 100€",
        discountLabel: "15€ Gutschein",
        type: "code",
        code: "OTTO15DEMO",
        merchantUrl: "https://www.otto.de/",
      }),
    ],
  },
  {
    slug: "nike",
    name: "Nike",
    category: "Mode",
    categorySlug: "mode",
    rank: 4,
    shortDescription: "Sportschuhe und Apparel – aktuelle Nike Rabattcodes und Member-Deals.",
    logoText: "NIKE",
    accent: "#111111",
    coupons: [
      coupon({
        id: "nike-10-student",
        title: "10% Rabattcode für Studierende",
        discountLabel: "10% Gutschein",
        type: "code",
        code: "STUDENT10",
        merchantUrl: "https://www.nike.com/de/",
      }),
    ],
  },
  {
    slug: "hm",
    name: "H&M",
    category: "Mode",
    categorySlug: "mode",
    rank: 5,
    shortDescription: "Fast Fashion mit Member-Preisen und saisonalen Coupons.",
    logoText: "H&M",
    accent: "#e50010",
    coupons: [
      coupon({
        id: "hm-member",
        title: "Member-Angebot im Sale",
        discountLabel: "Deal Angebot",
        type: "deal",
        code: null,
        details: ["Kein Code nötig"],
        merchantUrl: "https://www2.hm.com/de_de/index.html",
      }),
    ],
  },

  // Elektronik
  {
    slug: "mediamarkt",
    name: "MediaMarkt",
    category: "Elektronik",
    categorySlug: "elektronik",
    rank: 1,
    shortDescription: "Technik, Gaming und Haushaltsgeräte – MediaMarkt Coupons und Wochenend-Deals.",
    logoText: "MediaMarkt",
    accent: "#df0000",
    coupons: [
      coupon({
        id: "mm-10",
        title: "10% auf ausgewählte Technik",
        discountLabel: "10% Gutschein",
        type: "code",
        code: "TECH10DEMO",
        merchantUrl: "https://www.mediamarkt.de/",
      }),
    ],
  },
  {
    slug: "saturn",
    name: "Saturn",
    category: "Elektronik",
    categorySlug: "elektronik",
    rank: 2,
    shortDescription: "Elektronik-Deals und Saturn-Gutscheine für Technik-Fans.",
    logoText: "Saturn",
    accent: "#000000",
    coupons: [
      coupon({
        id: "saturn-deal",
        title: "Top-Angebot der Woche",
        discountLabel: "Deal Angebot",
        type: "deal",
        code: null,
        details: ["Kein Code nötig"],
        merchantUrl: "https://www.saturn.de/",
      }),
    ],
  },
  {
    slug: "amazon",
    name: "Amazon",
    category: "Elektronik",
    categorySlug: "elektronik",
    rank: 3,
    shortDescription: "Blitzangebote und Coupons – Amazon Gutscheine für viele Kategorien.",
    logoText: "amazon",
    accent: "#ff9900",
    coupons: [
      coupon({
        id: "amazon-coupon",
        title: "Produkt-Coupon im Warenkorb",
        discountLabel: "Deal Angebot",
        type: "deal",
        code: null,
        details: ["Kein Code nötig", "Coupon am Artikel aktivieren"],
        merchantUrl: "https://www.amazon.de/",
      }),
    ],
  },
  {
    slug: "alternate",
    name: "Alternate",
    category: "Elektronik",
    categorySlug: "elektronik",
    rank: 4,
    shortDescription: "PC-Hardware und Gaming – Alternate Rabatte und Bundle-Deals.",
    logoText: "Alternate",
    accent: "#e30613",
    coupons: [
      coupon({
        id: "alternate-5",
        title: "5% auf ausgewählte Hardware",
        discountLabel: "5% Gutschein",
        type: "code",
        code: "HW5DEMO",
        merchantUrl: "https://www.alternate.de/",
      }),
    ],
  },
  {
    slug: "cyberport",
    name: "Cyberport",
    category: "Elektronik",
    categorySlug: "elektronik",
    rank: 5,
    shortDescription: "Apple, Notebooks und mehr – Cyberport Gutscheincodes im Check.",
    logoText: "Cyberport",
    accent: "#009fe3",
    coupons: [
      coupon({
        id: "cyberport-10",
        title: "10€ ab 100€ Bestellwert",
        discountLabel: "10€ Gutschein",
        type: "code",
        code: "CP10DEMO",
        merchantUrl: "https://www.cyberport.de/",
      }),
    ],
  },

  // Reisen
  {
    slug: "booking",
    name: "Booking.com",
    category: "Reisen",
    categorySlug: "reisen",
    rank: 1,
    shortDescription: "Hotels weltweit – Genius-Rabatte und Booking Gutscheinaktionen.",
    logoText: "Booking",
    accent: "#003580",
    coupons: [
      coupon({
        id: "booking-genius",
        title: "Genius-Rabatt auf ausgewählte Hotels",
        discountLabel: "Deal Angebot",
        type: "deal",
        code: null,
        details: ["Kein Code nötig", "Account erforderlich"],
        merchantUrl: "https://www.booking.com/",
      }),
    ],
  },
  {
    slug: "expedia",
    name: "Expedia",
    category: "Reisen",
    categorySlug: "reisen",
    rank: 2,
    shortDescription: "Flüge, Hotels und Pakete – Expedia Coupons für den nächsten Trip.",
    logoText: "Expedia",
    accent: "#ffc72c",
    coupons: [
      coupon({
        id: "expedia-50",
        title: "Bis zu 50€ Rabatt auf Hotels",
        discountLabel: "50€ Gutschein",
        type: "code",
        code: "HOTEL50DEMO",
        merchantUrl: "https://www.expedia.de/",
      }),
    ],
  },
  {
    slug: "tui",
    name: "TUI",
    category: "Reisen",
    categorySlug: "reisen",
    rank: 3,
    shortDescription: "Pauschalreisen und mehr – TUI Gutscheincodes für den Urlaub.",
    logoText: "TUI",
    accent: "#1a1f71",
    coupons: [
      coupon({
        id: "tui-80",
        title: "Bis zu 80€ Rabatt dank Gutscheincode",
        discountLabel: "80€ Gutschein",
        type: "code",
        code: "TUI80DEMO",
        exclusive: true,
        merchantUrl: "https://www.tui.com/de/",
      }),
    ],
  },
  {
    slug: "check24-reisen",
    name: "CHECK24 Reisen",
    category: "Reisen",
    categorySlug: "reisen",
    rank: 4,
    shortDescription: "Reisevergleich mit Aktionen – CHECK24 Gutscheine für Hotels & Flüge.",
    logoText: "CHECK24",
    accent: "#0066cc",
    coupons: [
      coupon({
        id: "check24-deal",
        title: "Aktionspreis im Reisevergleich",
        discountLabel: "Deal Angebot",
        type: "deal",
        code: null,
        details: ["Kein Code nötig"],
        merchantUrl: "https://urlaub.check24.de/",
      }),
    ],
  },
  {
    slug: "lastminute",
    name: "Lastminute.de",
    category: "Reisen",
    categorySlug: "reisen",
    rank: 5,
    shortDescription: "Kurzfristige Reisedeals – Lastminute Gutscheine und Specials.",
    logoText: "Lastminute",
    accent: "#e31c3d",
    coupons: [
      coupon({
        id: "lm-30",
        title: "30€ Rabatt auf ausgewählte Reisen",
        discountLabel: "30€ Gutschein",
        type: "code",
        code: "LM30DEMO",
        merchantUrl: "https://www.lastminute.de/",
      }),
    ],
  },

  // Beauty
  {
    slug: "douglas",
    name: "Douglas",
    category: "Beauty",
    categorySlug: "beauty",
    rank: 1,
    shortDescription: "Parfum, Make-up und Pflege – Douglas Coupons und Beauty-Card Deals.",
    logoText: "Douglas",
    accent: "#000000",
    coupons: [
      coupon({
        id: "douglas-20",
        title: "20% auf Beauty-Highlights",
        discountLabel: "20% Gutschein",
        type: "code",
        code: "BEAUTY20",
        merchantUrl: "https://www.douglas.de/",
      }),
    ],
  },
  {
    slug: "flaconi",
    name: "flaconi",
    category: "Beauty",
    categorySlug: "beauty",
    rank: 2,
    shortDescription: "Online-Parfümerie mit häufigen flaconi Rabattcodes.",
    logoText: "flaconi",
    accent: "#e91e8c",
    coupons: [
      coupon({
        id: "flaconi-10",
        title: "10% auf die Bestellung",
        discountLabel: "10% Gutschein",
        type: "code",
        code: "FLA10DEMO",
        exclusive: true,
        merchantUrl: "https://www.flaconi.de/",
      }),
    ],
  },
  {
    slug: "notino",
    name: "Notino",
    category: "Beauty",
    categorySlug: "beauty",
    rank: 3,
    shortDescription: "Große Parfum-Auswahl – Notino Aktionscodes und Sale.",
    logoText: "Notino",
    accent: "#6b2d8b",
    coupons: [
      coupon({
        id: "notino-20",
        title: "Bis zu 20% Aktionscode",
        discountLabel: "20% Gutschein",
        type: "code",
        code: "NOTINO20",
        merchantUrl: "https://www.notino.de/",
      }),
    ],
  },
  {
    slug: "sephora",
    name: "Sephora",
    category: "Beauty",
    categorySlug: "beauty",
    rank: 4,
    shortDescription: "Beauty-Trends und Marken – Sephora Angebote und Member-Vorteile.",
    logoText: "Sephora",
    accent: "#000000",
    coupons: [
      coupon({
        id: "sephora-deal",
        title: "Aktuelle Beauty-Aktion",
        discountLabel: "Deal Angebot",
        type: "deal",
        code: null,
        details: ["Kein Code nötig"],
        merchantUrl: "https://www.sephora.de/",
      }),
    ],
  },
  {
    slug: "rossmann",
    name: "Rossmann",
    category: "Beauty",
    categorySlug: "beauty",
    rank: 5,
    shortDescription: "Drogerie-Deals online – Rossmann Gutscheine und App-Coupons.",
    logoText: "Rossmann",
    accent: "#c60c30",
    coupons: [
      coupon({
        id: "rossmann-app",
        title: "App-Coupon der Woche",
        discountLabel: "Deal Angebot",
        type: "deal",
        code: null,
        details: ["In der Rossmann-App einlösen"],
        merchantUrl: "https://www.rossmann.de/",
      }),
    ],
  },
];

export function getShopBySlug(slug: string): Shop | undefined {
  return shops.find((shop) => shop.slug === slug);
}

export function getCouponById(id: string): { shop: Shop; coupon: Coupon } | undefined {
  for (const shop of shops) {
    const coupon = shop.coupons.find((item) => item.id === id);
    if (coupon) return { shop, coupon };
  }
  return undefined;
}

export function getAllCoupons() {
  return shops.flatMap((shop) =>
    shop.coupons.map((coupon) => ({
      shop,
      coupon,
    })),
  );
}

export function getShopsByCategory(categorySlug: string): Shop[] {
  return shops
    .filter((shop) => shop.categorySlug === categorySlug)
    .sort((a, b) => a.rank - b.rank);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
