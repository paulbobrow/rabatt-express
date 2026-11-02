# Rabatt Express – Kaufberatungsportal

## Positionierung
Preis-Leistung & Kaufberatung (VPN, Hosting, Homeoffice, …) – **kein** Gutschein-Portal.

## Stack
Next.js · TypeScript · Tailwind · Drizzle-Schema (Postgres optional) · Vercel

## Inhalt (MVP Seed)
- Kategorien: Software, Hosting, Homeoffice, Technik, Finanzen
- Artikel: VPN-/Hosting-Vergleiche & Reviews unter `/vergleich/*` und `/tests/*`
- Redirects: `/out/[offerId]`

## Als Nächstes
1. AWIN-Programme freischalten → `awinMerchantId` / `AWIN_DEFAULT_MERCHANT_ID`
2. Digistore24 Account
3. DATABASE_URL (Neon) setzen und Seed migrieren
4. Top-20-Artikel aus Strategie-Canvas weiter befüllen

## Rechtliches
Impressum über `src/lib/site.ts` / Env · Methodik unter `/methodik`
