import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/content/ArticlePage";
import { articles, getArticle } from "@/content/seed";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles
    .filter((a) => a.type === "guide" || a.type === "hub")
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Ratgeber" };
  return { title: article.title, description: article.excerpt };
}

export default async function RatgeberPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || (article.type !== "guide" && article.type !== "hub")) {
    notFound();
  }
  return <ArticlePage article={article} />;
}
