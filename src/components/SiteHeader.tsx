import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-top">
        <Link href="/" className="brand" aria-label="Rabatt Express Startseite">
          <Image
            className="brand-logo"
            src="/logo.jpg"
            alt="Rabatt Express"
            width={36}
            height={36}
            priority
          />
          <strong>Rabatt Express</strong>
        </Link>

        <nav className="header-nav" aria-label="Hauptnavigation">
          <Link href="/">Gutscheine</Link>
          <Link href="/#essen-trinken">Essen &amp; Trinken</Link>
          <Link href="/#beliebte-gutscheine">Top Gutscheine</Link>
          <Link href="/#kategorien">Kategorien</Link>
        </nav>

        <form className="header-search" action="/" method="get" role="search">
          <label htmlFor="header-q" className="sr-only">
            Shop suchen
          </label>
          <input id="header-q" name="q" placeholder="Shop suchen" />
          <button type="submit" aria-label="Suchen">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </form>
      </div>
    </header>
  );
}
