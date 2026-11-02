import Link from "next/link";
import { ArticleBody } from "@/components/content/ArticleBody";
import { CompareTable } from "@/components/commerce/CompareTable";
import { OfferBox } from "@/components/commerce/OfferBox";
import {
  getCategory,
  getPrimaryOffer,
  getProduct,
} from "@/content/seed";
import type { Article } from "@/content/types";

export function ArticlePage({ article }: { article: Article }) {
  const category = getCategory(article.categorySlug);
  const productModels = article.productSlugs
    .map((slug) => getProduct(slug))
    .filter(Boolean);
  const winner = article.winnerSlug
    ? getProduct(article.winnerSlug)
    : productModels[0];
  const winnerOffer = winner ? getPrimaryOffer(winner.slug) : undefined;

  const compareRows = productModels.map((product) => ({
    product: product!,
    offer: getPrimaryOffer(product!.slug),
    highlight: product!.slug === article.winnerSlug,
  }));

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <nav className="flex flex-wrap gap-2 text-sm text-muted">
        <Link href="/" className="hover:text-brand">
          Start
        </Link>
        <span>/</span>
        {category ? (
          <>
            <Link href={`/kategorie/${category.slug}`} className="hover:text-brand">
              {category.name}
            </Link>
            <span>/</span>
          </>
        ) : null}
        <span className="text-ink">{article.title}</span>
      </nav>

      <header className="mt-6 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-wide text-brand">
          {article.type === "compare"
            ? "Vergleich"
            : article.type === "review"
              ? "Test / Review"
              : "Ratgeber"}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
          {article.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted">{article.excerpt}</p>
        <p className="mt-2 text-xs text-muted">
          Keyword-Fokus: {article.heroKeyword} · Stand{" "}
          {new Date(article.publishedAt).toLocaleDateString("de-DE")}
        </p>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-8">
          {article.type === "compare" && compareRows.length > 1 ? (
            <CompareTable rows={compareRows} />
          ) : null}

          {winner && winnerOffer && article.type === "review" ? (
            <div className="lg:hidden">
              <OfferBox product={winner} offer={winnerOffer} />
            </div>
          ) : null}

          <ArticleBody article={article} />

          {productModels.map((product) => {
            if (!product) return null;
            return (
              <div key={product.slug} className="rounded-2xl border border-line bg-surface p-5">
                <h3 className="text-lg font-extrabold">{product.name}</h3>
                <p className="mt-2 text-sm text-muted">{product.summary}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase text-brand">Stärken</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                      {product.pros.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-accent">Schwächen</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                      {product.cons.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          {winner && winnerOffer ? (
            <div className="hidden lg:block">
              <OfferBox product={winner} offer={winnerOffer} />
            </div>
          ) : null}
          <div className="rounded-2xl border border-line bg-bg p-4 text-sm text-muted">
            <p className="font-bold text-ink">Transparenz</p>
            <p className="mt-2">
              Wir erhalten ggf. eine Provision, wenn du über unsere Links kaufst.
              Das beeinflusst nicht den Preis. Details:{" "}
              <Link href="/methodik" className="font-bold text-brand">
                Methodik
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
