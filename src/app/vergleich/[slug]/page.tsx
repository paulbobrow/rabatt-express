import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/content/ArticlePage";
import { articles, getArticle } from "@/content/seed";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles
    .filter((a) => a.type === "compare")
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || article.type !== "compare") return { title: "Vergleich" };
  return { title: article.title, description: article.excerpt };
}

export default async function VergleichPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || article.type !== "compare") notFound();
  return <ArticlePage article={article} />;
}
