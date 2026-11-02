# Rabatt Express – Go-Live Checkliste

## Von der KI bereits erledigt
- Next.js MVP (Landing, Shops, Reveal, `/out` Redirect)
- Helles Coupons.de-ähnliches Layout + Logos
- Affiliate-Wrapper (`src/lib/affiliate.ts`) für Digidip/Awin
- Env-Template (`.env.example`)
- Vercel-Config (`vercel.json`, Region Frankfurt)
- Sitemap + robots.txt
- Impressum/Datenschutz aus Env-Vars
- Status-API: `GET /api/status`
- Feed-Importer: `npm run import:coupons`
- GitHub Action Workflow für täglichen Import

## Du musst selbst erledigen (kein Zugriff der KI)

### A) Domain — erledigt
- `rabatt-express.de` bei IONOS gekauft
- Apex A → Vercel, `www` CNAME → `cname.vercel-dns.com`
- Live: https://rabatt-express.de

### B) Hosting / Deploy — weitgehend erledigt
1. ~~Account bei [vercel.com](https://vercel.com) erstellen.~~
2. ~~Repo pushen + Vercel Import.~~
3. Environment Variables setzen (siehe C + D unten) → Redeploy.
4. ~~Domain in Vercel verbinden.~~

### C) Rechtliches — erledigt (Basis)
- Betreiber: Paul Bobrow, Bergstraße 3/2, 69469 Weinheim
- Kontakt: info@rabatt-express.de
- Eingetragen in `src/lib/site.ts` (Impressum + Datenschutz)
- Optional später: Telefon / USt-IdNr. über Env
- Datenschutz bei Bedarf mit Generator finalisieren (Analytics/Cookies)

### D) Affiliate-Netzwerke — als Nächstes
**Wichtig:** Digidip ist **invite-only** (kein offenes Signup). Einstieg über
https://www.digidip.net/ → „Request an invite“ / Contact, Website `https://rabatt-express.de` angeben.
Freischaltung kann dauern oder abgelehnt werden.

**Praktischer Start für Anfänger: Awin** (offene Bewerbung):
1. Publisher bei https://www.awin.com/de/publisher anmelden.
2. Website einreichen, Programme (Shops) beantragen.
3. In Vercel Env:
   - `AFFILIATE_DEFAULT_NETWORK` = `awin`
   - `AWIN_PUBLISHER_ID` = deine Publisher-ID
   - `AWIN_DEFAULT_MERCHANT_ID` = Merchant-ID eines freigeschalteten Shops (später pro Shop verfeinern)
4. Redeploy.
5. Test: https://rabatt-express.de/api/status → `canEarn: true`  
   und `/out/...` → Location enthält `awin1.com` (nicht direkt den Shop).

**Wenn Digidip kommt:** `DIGIDIP_REF` setzen, `AFFILIATE_DEFAULT_NETWORK=digidip`.

### E) Automatisierung anschließen
1. Sobald du einen Coupon-Feed hast: URL als GitHub Secret `COUPON_FEED_URL`.
2. Workflow „Import coupon feed“ läuft täglich oder manuell.
3. Später: Import Ergebnis automatisch in `shops`-Daten/DB schreiben (nächster Ausbau).

## Empfohlene Env auf Vercel (Minimum)
```
NEXT_PUBLIC_SITE_URL=https://rabatt-express.de
NEXT_PUBLIC_SITE_DOMAIN=rabatt-express.de
NEXT_PUBLIC_OPERATOR_NAME=...
NEXT_PUBLIC_OPERATOR_STREET=...
NEXT_PUBLIC_OPERATOR_ZIP_CITY=...
NEXT_PUBLIC_CONTACT_EMAIL=...
AFFILIATE_DEFAULT_NETWORK=digidip
DIGIDIP_REF=...
```

## Schnelltest nach Deploy
- `/` lädt
- `/shop/lieferando` lädt
- „Zum Code“ öffnet Overlay + neuen Tab
- `/out/lieferando-app` redirected
- `/api/status` zeigt `canEarn: true` sobald Digidip/Awin gesetzt ist
