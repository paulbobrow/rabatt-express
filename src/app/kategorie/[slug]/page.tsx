import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categories,
  getArticlesByCategory,
  getCategory,
  products,
} from "@/content/seed";
import { articleHref } from "@/lib/article-path";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Kategorie" };
  return { title: category.name, description: category.description };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const list = getArticlesByCategory(slug);
  const categoryProducts = products.filter((p) => p.categorySlug === slug);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <nav className="flex gap-2 text-sm text-muted">
        <Link href="/" className="hover:text-brand">
          Start
        </Link>
        <span>/</span>
        <span className="text-ink">{category.name}</span>
      </nav>

      <header className="mt-6 max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          {category.name}
        </h1>
        <p className="mt-3 text-base text-muted">{category.description}</p>
      </header>

      {list.length ? (
        <section className="mt-10">
          <h2 className="text-xl font-extrabold">Ratgeber & Vergleiche</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {list.map((article) => (
              <Link
                key={article.slug}
                href={articleHref(article)}
                className="rounded-2xl border border-line bg-surface p-5 hover:border-brand/40"
              >
                <h3 className="font-extrabold leading-snug">{article.title}</h3>
                <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <p className="mt-10 rounded-2xl border border-dashed border-line bg-bg p-6 text-sm text-muted">
          Inhalte für diese Kategorie folgen als Nächstes im Redaktionsplan.
        </p>
      )}

      {categoryProducts.length ? (
        <section className="mt-10">
          <h2 className="text-xl font-extrabold">Produkte im Überblick</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {categoryProducts.map((product) => (
              <div
                key={product.slug}
                className="rounded-2xl border border-line bg-surface p-4"
              >
                <p className="font-extrabold">{product.name}</p>
                <p className="mt-1 text-xs text-muted">{product.brand}</p>
                <p className="mt-2 text-sm text-muted line-clamp-3">
                  {product.summary}
                </p>
                <p className="mt-3 text-sm font-bold text-brand">
                  Score {product.score.toFixed(1)}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
