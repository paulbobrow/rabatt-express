import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { categories } from "@/content/seed";

export function SiteHeader() {
  const nav = categories.slice(0, 4);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-6 px-4">
        <Link href="/" className="flex shrink-0 flex-col leading-tight">
          <span className="text-[15px] font-extrabold tracking-tight">
            {siteConfig.name}
          </span>
          <span className="hidden text-[11px] text-muted sm:block">
            Preis-Leistung zuerst
          </span>
        </Link>

        <nav className="hidden flex-1 items-center gap-1 md:flex" aria-label="Hauptnavigation">
          {nav.map((c) => (
            <Link
              key={c.slug}
              href={`/kategorie/${c.slug}`}
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-ink hover:bg-bg"
            >
              {c.name.split("&")[0].trim()}
            </Link>
          ))}
          <Link
            href="/methodik"
            className="rounded-full px-3 py-1.5 text-sm font-semibold text-muted hover:bg-bg hover:text-ink"
          >
            Methodik
          </Link>
        </nav>

        <Link
          href="/vergleich/beste-vpn-2026"
          className="ml-auto rounded-full bg-brand px-3.5 py-2 text-sm font-bold text-white hover:bg-brand-dark"
        >
          Top-Vergleiche
        </Link>
      </div>
    </header>
  );
}
