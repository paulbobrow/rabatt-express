/**
 * Site/legal config via env – fill these in Vercel before go-live.
 */
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Rabatt Express",
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || "rabatt-express.de",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rabatt-express.de",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@rabatt-express.de",
  operatorName: process.env.NEXT_PUBLIC_OPERATOR_NAME || "[VOR- UND NACHNAME]",
  street: process.env.NEXT_PUBLIC_OPERATOR_STREET || "[STRASSE NR.]",
  zipCity: process.env.NEXT_PUBLIC_OPERATOR_ZIP_CITY || "[PLZ ORT]",
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
