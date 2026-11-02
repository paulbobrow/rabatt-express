import type { MetadataRoute } from "next";
import { categories, shops } from "@/data/shops";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const categoryUrls = categories.flatMap((category) => {
    const main = {
      url: `${base}/kategorie/${category.slug}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.9,
    };
    const subs =
      category.subcategories?.map((sub) => ({
        url: `${base}/kategorie/${category.slug}/${sub.slug}`,
        lastModified: now,
        changeFrequency: "daily" as const,
        priority: 0.85,
      })) ?? [];
    return [main, ...subs];
  });

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    ...categoryUrls,
    ...shops.map((shop) => ({
      url: `${base}/shop/${shop.slug}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
  ];
}
