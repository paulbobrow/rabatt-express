import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>Rabatt Express</strong>
          <p style={{ margin: "0.45rem 0 0", maxWidth: 460, opacity: 0.85 }}>
            Die schnellsten Rabattcodes im Web. Unabhängiges Demo-Portal. * Affiliate-Links: Bei
            einem Kauf über unsere Redirects können wir eine Provision erhalten.
          </p>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/#kategorien">Kategorien</Link>
          <Link href="/#top-gutscheine">Top Gutscheine</Link>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
