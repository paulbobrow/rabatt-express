export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Rabatt Express",
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || "rabatt-express.de",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rabatt-express.de",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@rabatt-express.de",
  tagline: "Preis-Leistung zuerst – Kaufberatung mit Deal-Radar",
  operatorName: process.env.NEXT_PUBLIC_OPERATOR_NAME || "Paul Bobrow",
  street: process.env.NEXT_PUBLIC_OPERATOR_STREET || "Bergstraße 3/2",
  zipCity: process.env.NEXT_PUBLIC_OPERATOR_ZIP_CITY || "69469 Weinheim",
  phone: process.env.NEXT_PUBLIC_OPERATOR_PHONE || "",
  vatId: process.env.NEXT_PUBLIC_VAT_ID || "",
};

export function isLegalPlaceholder(): boolean {
  return (
    siteConfig.operatorName.includes("[") ||
    siteConfig.street.includes("[") ||
    siteConfig.zipCity.includes("[")
  );
}
