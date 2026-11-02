import type { Article } from "@/content/types";

export function articleHref(article: Article): string {
  if (article.type === "review") return `/tests/${article.slug}`;
  if (article.type === "compare") return `/vergleich/${article.slug}`;
  if (article.type === "deal") return `/deals/${article.slug}`;
  return `/ratgeber/${article.slug}`;
}
