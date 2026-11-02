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

### A) Domain
1. Bei einem Registrar `rabatt-express.de` kaufen (DENIC/Provider deiner Wahl).
2. DNS später auf Vercel zeigen (Vercel zeigt die Records).

### B) Hosting / Deploy
1. Account bei [vercel.com](https://vercel.com) erstellen.
2. GitHub/GitLab-Account + Repo `rabatt-express` anlegen und pushen.
3. In Vercel: „Import Project“ → dieses Repo.
4. Environment Variables aus `.env.example` setzen (siehe unten).
5. Deploy starten, Domain in Vercel verbinden.

### C) Rechtliches
1. Echte Angaben eintragen (Env in Vercel):
   - `NEXT_PUBLIC_OPERATOR_NAME`
   - `NEXT_PUBLIC_OPERATOR_STREET`
   - `NEXT_PUBLIC_OPERATOR_ZIP_CITY`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - optional Telefon / USt-IdNr.
2. Datenschutz bei Bedarf mit Generator finalisieren (Analytics/Cookies).

### D) Affiliate-Netzwerke (Geld verdienen)
1. Bei **Digidip** als Publisher registrieren → `DIGIDIP_REF` erhalten.
2. Optional **Awin** Publisher-Account → `AWIN_PUBLISHER_ID` (+ Merchant-IDs).
3. Programme/Shops freischalten lassen (kann dauern).
4. IDs in Vercel Env speichern und neu deployen.
5. Test: Gutschein klicken → URL sollte Digidip/Awin enthalten → Shop öffnet.
6. Provisionen im Netzwerk-Dashboard prüfen.

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
