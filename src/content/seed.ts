import type { Article, Category, Offer, Product } from "@/content/types";

export const categories: Category[] = [
  {
    slug: "software",
    name: "Software & Sicherheit",
    description:
      "VPN, Virenschutz, Passwortmanager und Cloud – klar verglichen nach Preis-Leistung.",
    priority: 1,
  },
  {
    slug: "hosting",
    name: "Webhosting & Online-Business",
    description:
      "Hosting, Domains, Website-Baukästen und Shop-Systeme für Einsteiger und Selbständige.",
    priority: 2,
  },
  {
    slug: "homeoffice",
    name: "Homeoffice",
    description:
      "Bürostühle, Schreibtische, Klima und Setup – Empfehlungen für produktives Arbeiten.",
    priority: 3,
  },
  {
    slug: "technik",
    name: "Technik & Refurbished",
    description:
      "Notebooks, Monitore und refurbished Geräte mit Fokus auf echten Spar-Effekt.",
    priority: 4,
  },
  {
    slug: "finanzen",
    name: "Finanzen & Selbständige",
    description:
      "Geschäftskonten, Buchhaltung und Steuer-Software – sobald Trust und Programme stehen.",
    priority: 5,
  },
];

export const products: Product[] = [
  {
    slug: "nordvpn",
    name: "NordVPN",
    brand: "Nord Security",
    categorySlug: "software",
    score: 9.1,
    summary:
      "Schnelles Premium-VPN mit starkem Tracking-Schutz – oft der beste Kompromiss aus Speed und Features.",
    pros: ["Schnelle Server", "Gute Apps", "Regelmäßige Deals"],
    cons: ["Nicht der günstigste Dauerpreis", "Viele Upsells im Checkout"],
  },
  {
    slug: "surfshark",
    name: "Surfshark",
    brand: "Surfshark",
    categorySlug: "software",
    score: 8.7,
    summary:
      "Sehr gutes Preis-Leistungs-VPN mit unbegrenzten Geräten – stark für Familien und Shared Accounts.",
    pros: ["Unbegrenzte Geräte", "Günstige Mehrjahres-Deals", "Solide Features"],
    cons: ["Marken-Trust etwas hinter NordVPN", "Support-Qualität schwankt"],
  },
  {
    slug: "bitdefender",
    name: "Bitdefender Total Security",
    brand: "Bitdefender",
    categorySlug: "software",
    score: 8.9,
    summary:
      "Starker Virenschutz mit niedrigem Systemverbrauch – sinnvoll als Jahresabo für Windows-Haushalte.",
    pros: ["Hohe Erkennungsraten", "Leichtgewichtig", "Gute Familienlizenzen"],
    cons: ["Interface wirkt überladen", "Extra-Features nicht immer nötig"],
  },
  {
    slug: "1password",
    name: "1Password",
    brand: "1Password",
    categorySlug: "software",
    score: 9.0,
    summary:
      "Passwortmanager mit exzellenter UX – besonders stark für Familien und gemischte Geräte.",
    pros: ["Sehr gute UX", "Watchtower", "Familien-/Team-Pläne"],
    cons: ["Kein starker Free-Plan", "Abo-Kosten laufend"],
  },
  {
    slug: "ionos",
    name: "IONOS Webhosting",
    brand: "IONOS",
    categorySlug: "hosting",
    score: 8.2,
    summary:
      "Solides Hosting für Einsteiger in DE – oft stark im Aktionspreis, später auf Vertragsdetails achten.",
    pros: ["DE-Support", "Einfacher Einstieg", "Häufige Einstiegsangebote"],
    cons: ["Verlängerungspreise prüfen", "Upselling im Account"],
  },
  {
    slug: "hostinger",
    name: "Hostinger",
    brand: "Hostinger",
    categorySlug: "hosting",
    score: 8.4,
    summary:
      "Günstiges Hosting mit modernem Panel – stark bei Preis-Leistung, wenn du wenig Support brauchst.",
    pros: ["Sehr günstige Einstiege", "Hpanel modern", "Gute Performance für den Preis"],
    cons: ["Support nicht DE-first", "Lange Laufzeiten bei Bestpreis"],
  },
  {
    slug: "strato",
    name: "STRATO Hosting",
    brand: "STRATO",
    categorySlug: "hosting",
    score: 7.8,
    summary:
      "Klassischer DE-Hoster – oft eine Alternative zu IONOS, wenn du lokale Marken bevorzugst.",
    pros: ["Bekannte DE-Marke", "Breites Portfolio"],
    cons: ["UX wirkt älter", "Preis-Leistung oft hinter Aktionshostern"],
  },
];

export const offers: Offer[] = [
  {
    id: "nordvpn-official",
    productSlug: "nordvpn",
    merchantName: "NordVPN",
    network: "direct",
    url: "https://nordvpn.com/",
    priceLabel: "Deal prüfen",
    ctaLabel: "NordVPN Angebot ansehen",
  },
  {
    id: "surfshark-official",
    productSlug: "surfshark",
    merchantName: "Surfshark",
    network: "direct",
    url: "https://surfshark.com/",
    priceLabel: "Deal prüfen",
    ctaLabel: "Surfshark Angebot ansehen",
  },
  {
    id: "bitdefender-official",
    productSlug: "bitdefender",
    merchantName: "Bitdefender",
    network: "direct",
    url: "https://www.bitdefender.de/",
    priceLabel: "Aktueller Preis",
    ctaLabel: "Bitdefender Angebot",
  },
  {
    id: "1password-official",
    productSlug: "1password",
    merchantName: "1Password",
    network: "direct",
    url: "https://1password.com/",
    priceLabel: "Ab Familientarif",
    ctaLabel: "1Password starten",
  },
  {
    id: "ionos-official",
    productSlug: "ionos",
    merchantName: "IONOS",
    network: "direct",
    url: "https://www.ionos.de/",
    priceLabel: "Einstiegsangebot",
    ctaLabel: "IONOS Hosting prüfen",
  },
  {
    id: "hostinger-official",
    productSlug: "hostinger",
    merchantName: "Hostinger",
    network: "direct",
    url: "https://www.hostinger.de/",
    priceLabel: "Bestpreis-Aktionen",
    ctaLabel: "Hostinger Deal",
  },
  {
    id: "strato-official",
    productSlug: "strato",
    merchantName: "STRATO",
    network: "direct",
    url: "https://www.strato.de/",
    priceLabel: "Tarife vergleichen",
    ctaLabel: "STRATO ansehen",
  },
];

export const articles: Article[] = [
  {
    slug: "beste-vpn-2026",
    type: "compare",
    title: "Beste VPN 2026: Vergleich für Deutschland",
    excerpt:
      "Welche VPN-Dienste lohnen sich wirklich? Wir vergleichen Speed, Preis-Leistung, Streaming und Datenschutz – ohne Coupon-Spam.",
    categorySlug: "software",
    heroKeyword: "beste vpn",
    publishedAt: "2026-11-02",
    productSlugs: ["nordvpn", "surfshark"],
    winnerSlug: "nordvpn",
    sections: [
      {
        heading: "Kurzfazit",
        body: [
          "Für die meisten Nutzer in Deutschland ist NordVPN aktuell der beste Gesamtpaket-Kompromiss: schnell, ausgereifte Apps, regelmäßige Mehrjahres-Deals.",
          "Wenn Preis und viele Geräte priorisiert werden, ist Surfshark oft die bessere Preis-Leistung.",
        ],
      },
      {
        heading: "Wonach wir bewerten",
        body: [
          "Wir gewichten Geschwindigkeit, Transparenz (No-Logs), Alltagstauglichkeit der Apps, Kundenservice und den effektiven Jahrespreis inkl. typischer Rabatte – nicht den Listenpreis.",
          "Streaming-Kompatibilität testen wir stichprobenartig; Anbieter ändern Freigaben häufig.",
        ],
      },
      {
        heading: "Für wen welches VPN?",
        body: [
          "Streaming & Allround: eher NordVPN.",
          "Familie / viele Geräte / Budget: eher Surfshark.",
          "Maximale Privacy-Hardliner: zusätzlich Mullvad o. Ä. prüfen (weniger Deal-getrieben).",
        ],
      },
    ],
    faq: [
      {
        q: "Ist ein kostenloses VPN genug?",
        a: "Für gelegentliches Surfen manchmal – für Streaming, Speed und Vertrauen meist nicht. Bezahlte Anbieter finanzieren Infrastruktur und Support.",
      },
      {
        q: "Brauche ich ein VPN im Homeoffice?",
        a: "Auf öffentlichen WLANs und bei sensiblen Logins oft ja. Firmeneigene Lösungen haben Vorrang, falls vorhanden.",
      },
    ],
  },
  {
    slug: "nordvpn-erfahrung",
    type: "review",
    title: "NordVPN Erfahrung: Lohnt sich der Deal?",
    excerpt:
      "Ehrlicher Blick auf Stärken, Schwächen und für wen NordVPN aktuell Sinn ergibt.",
    categorySlug: "software",
    heroKeyword: "nordvpn erfahrung",
    publishedAt: "2026-11-02",
    productSlugs: ["nordvpn"],
    winnerSlug: "nordvpn",
    sections: [
      {
        heading: "Das Wichtigste",
        body: [
          "NordVPN gehört zu den ausgereiftesten Consumer-VPNs. Die Apps sind stabil, die Serverwahl ist groß, Threat Protection ist für viele ein Plus.",
          "Der Dauerpreis ohne Aktion ist hoch – sinnvoll ist der Einstieg über laufende Mehrjahres-Angebote.",
        ],
      },
      {
        heading: "Schwächen",
        body: [
          "Checkout und Upsells können aggressiv wirken. Wer absolute Minimal-UI will, findet schlankere Alternativen.",
        ],
      },
    ],
  },
  {
    slug: "surfshark-vs-nordvpn",
    type: "compare",
    title: "Surfshark vs NordVPN: Was lohnt sich?",
    excerpt:
      "Direkter Vergleich der beiden Meistverkauften – Fokus auf Preis-Leistung statt Marketing.",
    categorySlug: "software",
    heroKeyword: "surfshark vs nordvpn",
    publishedAt: "2026-11-02",
    productSlugs: ["surfshark", "nordvpn"],
    winnerSlug: "surfshark",
    sections: [
      {
        heading: "Ergebnis",
        body: [
          "NordVPN wirkt oft „premiumer“ und etwas runder im Alltag. Surfshark gewinnt klar bei Gerätenull-Limit und häufig beim effektiven Preis.",
          "Unsere Default-Empfehlung für Sparfüchse: Surfshark. Für maximale Bequemlichkeit: NordVPN.",
        ],
      },
    ],
  },
  {
    slug: "bester-virenschutz-2026",
    type: "compare",
    title: "Bester Virenschutz 2026 im Vergleich",
    excerpt:
      "Welcher Schutz bringt echten Mehrwert – und wann reicht Windows Defender?",
    categorySlug: "software",
    heroKeyword: "bester virenschutz",
    publishedAt: "2026-11-02",
    productSlugs: ["bitdefender"],
    winnerSlug: "bitdefender",
    sections: [
      {
        heading: "Kurzfazit",
        body: [
          "Für viele Privatanwender reicht Windows Defender + Vernunft. Wer mehr will (Familienlizenzen, Extra-Module), ist mit Bitdefender oft gut beraten.",
        ],
      },
    ],
  },
  {
    slug: "passwortmanager-vergleich",
    type: "compare",
    title: "Passwortmanager Vergleich: 1Password und Alternativen",
    excerpt:
      "Warum ein Manager Pflicht ist – und welches Modell sich für Familien rechnet.",
    categorySlug: "software",
    heroKeyword: "passwortmanager vergleich",
    publishedAt: "2026-11-02",
    productSlugs: ["1password"],
    winnerSlug: "1password",
    sections: [
      {
        heading: "Empfehlung",
        body: [
          "1Password punktet mit UX und Familienfunktionen. Wer Open-Source bevorzugt, sollte Bitwarden parallel prüfen.",
        ],
      },
    ],
  },
  {
    slug: "webhosting-vergleich-deutschland",
    type: "compare",
    title: "Webhosting Vergleich Deutschland 2026",
    excerpt:
      "IONOS, Hostinger, STRATO – welcher Hoster für Einsteiger und kleine Projekte?",
    categorySlug: "hosting",
    heroKeyword: "webhosting vergleich",
    publishedAt: "2026-11-02",
    productSlugs: ["hostinger", "ionos", "strato"],
    winnerSlug: "hostinger",
    sections: [
      {
        heading: "Kurzfazit",
        body: [
          "Für maximale Preis-Leistung oft Hostinger. Für DE-Support und einfache Einstiege häufig IONOS. STRATO als lokale Alternative, wenn Markenvertrauen zählt.",
          "Wichtig: Immer Verlängerungspreis und Mindestlaufzeit lesen – der Lockvogel-Monatspreis allein sagt wenig.",
        ],
      },
      {
        heading: "Worauf achten",
        body: [
          "SSD/NVMe, Traffic-Fairness, automatische Backups, Staging, E-Mail-Postfächer und wie transparent der Support erreichbar ist.",
        ],
      },
    ],
    faq: [
      {
        q: "Shared Hosting oder VPS?",
        a: "Für die erste Website reicht Shared Hosting. VPS lohnt bei eigenen Apps, mehr Kontrolle oder höherem Traffic.",
      },
    ],
  },
  {
    slug: "ionos-erfahrung",
    type: "review",
    title: "IONOS Erfahrung: Preis-Leistung ehrlich bewertet",
    excerpt:
      "Was IONOS gut macht – und wo du im Kleingedruckten genau hinsehen solltest.",
    categorySlug: "hosting",
    heroKeyword: "ionos erfahrung",
    publishedAt: "2026-11-02",
    productSlugs: ["ionos"],
    winnerSlug: "ionos",
    sections: [
      {
        heading: "Fazit",
        body: [
          "IONOS ist ein solider Einstieg mit deutschem Support. Die Aktionspreise können stark sein – plane den Preis nach dem Aktionszeitraum mit ein.",
        ],
      },
    ],
  },
  {
    slug: "hostinger-test",
    type: "review",
    title: "Hostinger Test: günstig – aber gut genug?",
    excerpt:
      "Wann Hostinger die richtige Wahl ist – und wann du zu einem DE-Hoster greifen solltest.",
    categorySlug: "hosting",
    heroKeyword: "hostinger test",
    publishedAt: "2026-11-02",
    productSlugs: ["hostinger"],
    winnerSlug: "hostinger",
    sections: [
      {
        heading: "Fazit",
        body: [
          "Für preisbewusste Einsteiger mit WordPress oft ja. Wenn du Telefon-Support auf Deutsch brauchst, eher IONOS oder STRATO vergleichen.",
        ],
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getOfferById(id: string) {
  return offers.find((o) => o.id === id);
}

export function getOffersForProduct(productSlug: string) {
  return offers.filter((o) => o.productSlug === productSlug);
}

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string) {
  return articles.filter((a) => a.categorySlug === categorySlug);
}

export function getPrimaryOffer(productSlug: string) {
  return getOffersForProduct(productSlug)[0];
}
