import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>Rabatt Express</strong>
          <p style={{ margin: "0.45rem 0 0", maxWidth: 460, opacity: 0.85 }}>
            Gutscheine &amp; Rabattcodes – mit Fokus auf Essen &amp; Trinken. *
            Affiliate-Links: Bei einem Kauf über unsere Redirects können wir eine
            Provision erhalten.
          </p>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/kategorie/essen-trinken">Essen &amp; Trinken</Link>
          <Link href="/#beliebte-gutscheine">Top Gutscheine</Link>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
