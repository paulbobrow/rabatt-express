# Rabatt Express

Verbraucherportal für **Preis-Leistungs-Kaufberatung** (Affiliate) – nicht als klassische Gutscheinseite.

## Lokal

```bash
npm install
npm run dev
```

## Wichtige Routen

- `/` – Start
- `/kategorie/software` · `/kategorie/hosting`
- `/vergleich/beste-vpn-2026`
- `/tests/nordvpn-erfahrung`
- `/out/[id]` – Affiliate-Redirect
- `/methodik` · `/impressum` · `/datenschutz`

## Daten

Aktuell: Typed Seed in `src/content/seed.ts`.  
Postgres-Schema: `src/db/schema.ts` (aktivieren via `DATABASE_URL`).
