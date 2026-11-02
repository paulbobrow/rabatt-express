import Link from "next/link";
import { articles, categories, products } from "@/content/seed";
import { articleHref } from "@/lib/article-path";

export default function HomePage() {
  const featured = articles.slice(0, 4);
  const starters = categories.filter((c) => c.priority <= 3);

  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
          <p className="text-sm font-bold uppercase tracking-wide text-brand">
            Verbraucherportal · kein Gutschein-Spam
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
            Kaufberatung mit Fokus auf echte Preis-Leistung
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Vergleiche, Tests und klare Empfehlungen für Studenten, Familien,
            Selbständige und Homeoffice – damit du sparst, ohne Qualität zu
            verschenken.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/vergleich/beste-vpn-2026"
              className="rounded-full bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-brand-dark"
            >
              VPN-Vergleich öffnen
            </Link>
            <Link
              href="/vergleich/webhosting-vergleich-deutschland"
              className="rounded-full border border-line bg-bg px-5 py-3 text-sm font-bold hover:bg-white"
            >
              Hosting vergleichen
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">Start-Kategorien</h2>
            <p className="mt-1 text-sm text-muted">
              Höchstes Affiliate- und SEO-Potenzial zuerst.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {starters.map((category) => (
            <Link
              key={category.slug}
              href={`/kategorie/${category.slug}`}
              className="rounded-2xl border border-line bg-surface p-5 transition hover:border-brand/40"
            >
              <h3 className="text-lg font-extrabold">{category.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {category.description}
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-brand">
                Zur Kategorie
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Aktuelle Kaufberatungen
          </h2>
          <p className="mt-1 text-sm text-muted">
            Redaktionelle Vergleiche – mit gekennzeichneten Affiliate-Links.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {featured.map((article) => (
              <Link
                key={article.slug}
                href={articleHref(article)}
                className="rounded-2xl border border-line bg-bg/50 p-5 hover:bg-bg"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-brand">
                  {article.type === "compare"
                    ? "Vergleich"
                    : article.type === "review"
                      ? "Test"
                      : "Ratgeber"}
                </p>
                <h3 className="mt-2 text-lg font-extrabold leading-snug">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-extrabold tracking-tight">
          So arbeiten wir
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Preis-Leistung zuerst",
              d: "Nicht der teuerste „Testsieger“, sondern was sich rechnet.",
            },
            {
              t: "Transparente Empfehlungen",
              d: "Affiliate-Links sind gekennzeichnet. Du zahlst keinen Aufpreis.",
            },
            {
              t: "Kein Coupon-Portal",
              d: "Keine Code-Walls – sondern Vergleiche, Reviews und Kaufberatung.",
            },
          ].map((item) => (
            <div key={item.t} className="rounded-2xl border border-line bg-surface p-5">
              <h3 className="font-extrabold">{item.t}</h3>
              <p className="mt-2 text-sm text-muted">{item.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Aktuell {articles.length} redaktionelle Seiten · {products.length} Produkte im
          Seed · Methodik unter{" "}
          <Link href="/methodik" className="font-bold text-brand">
            /methodik
          </Link>
          .
        </p>
      </section>
    </>
  );
}
