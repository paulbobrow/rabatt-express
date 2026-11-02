import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/content/ArticlePage";
import { articles, getArticle } from "@/content/seed";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles
    .filter((a) => a.type === "review")
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || article.type !== "review") return { title: "Test" };
  return { title: article.title, description: article.excerpt };
}

export default async function TestPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || article.type !== "review") notFound();
  return <ArticlePage article={article} />;
}
