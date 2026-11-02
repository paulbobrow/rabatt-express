import {
  integer,
  pgEnum,
  pgTable,
  real,
  serial,
  text,
  timestamp,
  boolean,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const articleTypeEnum = pgEnum("article_type", [
  "review",
  "compare",
  "guide",
  "deal",
  "hub",
]);

export const articleStatusEnum = pgEnum("article_status", [
  "draft",
  "published",
  "archived",
]);

export const categories = pgTable(
  "categories",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").notNull(),
    parentId: integer("parent_id"),
    description: text("description").notNull().default(""),
    priority: integer("priority").notNull().default(100),
    seoTitle: text("seo_title"),
  },
  (t) => [uniqueIndex("categories_slug_idx").on(t.slug)],
);

export const tags = pgTable(
  "tags",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").notNull(),
  },
  (t) => [uniqueIndex("tags_slug_idx").on(t.slug)],
);

export const merchants = pgTable("merchants", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  network: text("network").notNull(),
  programId: text("program_id"),
  cookieDays: integer("cookie_days").default(30),
  active: boolean("active").notNull().default(true),
});

export const products = pgTable(
  "products",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").notNull(),
    categoryId: integer("category_id").references(() => categories.id),
    brand: text("brand"),
    score: real("score"),
    summary: text("summary"),
  },
  (t) => [uniqueIndex("products_slug_idx").on(t.slug)],
);

export const offers = pgTable("offers", {
  id: serial("id").primaryKey(),
  productId: integer("product_id")
    .notNull()
    .references(() => products.id),
  merchantId: integer("merchant_id")
    .notNull()
    .references(() => merchants.id),
  url: text("url").notNull(),
  priceLabel: text("price_label"),
  currency: text("currency").default("EUR"),
  validTo: timestamp("valid_to"),
  ctaLabel: text("cta_label").default("Zum Angebot"),
  active: boolean("active").notNull().default(true),
});

export const redirects = pgTable(
  "redirects",
  {
    id: serial("id").primaryKey(),
    publicId: text("public_id").notNull(),
    offerId: integer("offer_id")
      .notNull()
      .references(() => offers.id),
    active: boolean("active").notNull().default(true),
  },
  (t) => [uniqueIndex("redirects_public_id_idx").on(t.publicId)],
);

export const articles = pgTable(
  "articles",
  {
    id: serial("id").primaryKey(),
    type: articleTypeEnum("type").notNull(),
    status: articleStatusEnum("status").notNull().default("draft"),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    excerpt: text("excerpt").notNull().default(""),
    categoryId: integer("category_id").references(() => categories.id),
    heroKeyword: text("hero_keyword"),
    publishedAt: timestamp("published_at"),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (t) => [uniqueIndex("articles_slug_idx").on(t.slug)],
);

export const articleProducts = pgTable("article_products", {
  id: serial("id").primaryKey(),
  articleId: integer("article_id")
    .notNull()
    .references(() => articles.id),
  productId: integer("product_id")
    .notNull()
    .references(() => products.id),
  rank: integer("rank"),
  verdict: text("verdict"),
});

export const clicks = pgTable("clicks", {
  id: serial("id").primaryKey(),
  offerId: integer("offer_id").references(() => offers.id),
  articleId: integer("article_id"),
  subId: text("sub_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  uaHash: text("ua_hash"),
});
