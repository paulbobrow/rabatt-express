import type { AffiliateNetwork } from "@/lib/affiliate";

export type ArticleType = "review" | "compare" | "guide" | "deal" | "hub";

export type Category = {
  slug: string;
  name: string;
  description: string;
  priority: number;
};

export type Product = {
  slug: string;
  name: string;
  brand: string;
  categorySlug: string;
  score: number;
  summary: string;
  pros: string[];
  cons: string[];
};

export type Offer = {
  id: string;
  productSlug: string;
  merchantName: string;
  network: AffiliateNetwork;
  url: string;
  awinMerchantId?: string;
  priceLabel: string;
  ctaLabel: string;
};

export type ArticleSection = {
  heading: string;
  body: string[];
};

export type Article = {
  slug: string;
  type: ArticleType;
  title: string;
  excerpt: string;
  categorySlug: string;
  heroKeyword: string;
  publishedAt: string;
  productSlugs: string[];
  winnerSlug?: string;
  sections: ArticleSection[];
  faq?: { q: string; a: string }[];
};
