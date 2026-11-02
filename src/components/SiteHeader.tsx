import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="brand" aria-label="Rabatt Express Startseite">
            <Image
              className="brand-logo"
              src="/logo.jpg"
              alt="Rabatt Express Ticket Logo"
              width={40}
              height={40}
              priority
            />
            <div className="brand-copy">
              <strong>Rabatt Express</strong>
              <span>Die schnellsten Rabattcodes im Web</span>
            </div>
          </Link>

          <form className="header-search" action="/" method="get" role="search">
            <label
              htmlFor="header-q"
              className="visually-hidden"
              style={{ position: "absolute", left: -9999 }}
            >
              Shop suchen
            </label>
            <input
              id="header-q"
              name="q"
              placeholder="Suchbegriff oder Shopname eingeben – z.B. Lieferando…"
            />
            <button type="submit">Suchen</button>
          </form>
        </div>

        <nav className="nav-bar" aria-label="Hauptnavigation">
          <Link href="/#beliebte-gutscheine">Beliebte Gutscheine</Link>
          <Link href="/#kategorien">Kategorien</Link>
          <Link href="/#kat-essen-bestellen">Top Shops</Link>
        </nav>

        <div className="trust-strip">
          <span>✂ Geprüfte Demo-Codes</span>
          <span>🛍 25 Shops & Marken</span>
          <span>✓ Hell, klar & affiliate-ready</span>
        </div>
      </div>
    </header>
  );
}
