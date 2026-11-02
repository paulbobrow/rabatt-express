import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { categories } from "@/content/seed";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-ink text-white">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-base font-extrabold">{siteConfig.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
            {siteConfig.tagline}. Unabhängige Kaufberatung mit Affiliate-Links –
            Kennzeichnung erfolgt transparent.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold">Kategorien</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {categories.slice(0, 4).map((c) => (
              <li key={c.slug}>
                <Link href={`/kategorie/${c.slug}`} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold">Rechtliches</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/methodik" className="hover:text-white">
                Methodik
              </Link>
            </li>
            <li>
              <Link href="/impressum" className="hover:text-white">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-white">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
