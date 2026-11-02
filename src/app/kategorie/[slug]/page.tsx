import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryIcon } from "@/components/CategoryIcon";
import { PopularCouponCard } from "@/components/PopularCouponCard";
import { ShopLogo } from "@/components/ShopLogo";
import {
  categories,
  getCategoryBySlug,
  getShopsByCategory,
  getShopsBySubcategory,
} from "@/data/shops";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Kategorie" };
  return {
    title: `${category.label} Gutscheine`,
    description: category.teaser,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryShops = getShopsByCategory(slug);
  const coupons = categoryShops.flatMap((shop) =>
    shop.coupons.map((coupon) => ({ shop, coupon })),
  );

  return (
    <div className="container section">
      <nav className="breadcrumbs" aria-label="Brotkrumen">
        <Link href="/">Gutscheine</Link>
        <span>/</span>
        <strong>{category.label}</strong>
      </nav>

      <header className="page-hero">
        <h1>{category.label} Gutscheine</h1>
        <p>{category.teaser}</p>
      </header>

      {category.subcategories?.length ? (
        <div className="subcat-grid" style={{ marginBottom: "1.5rem" }}>
          {category.subcategories.map((sub) => {
            const count = getShopsBySubcategory(slug, sub.slug).length;
            return (
              <Link
                key={sub.slug}
                href={`/kategorie/${slug}/${sub.slug}`}
                className="subcat-card"
              >
                <span className="subcat-icon">
                  <CategoryIcon name={sub.icon} />
                </span>
                <span className="subcat-copy">
                  <strong>{sub.label}</strong>
                  <span>{sub.teaser}</span>
                  <em>{count} Shops</em>
                </span>
              </Link>
            );
          })}
        </div>
      ) : null}

      <div className="section-head">
        <div>
          <h2>Shops in {category.label}</h2>
        </div>
      </div>
      <div className="brand-grid" style={{ marginBottom: "2rem" }}>
        {categoryShops.map((shop) => (
          <Link key={shop.slug} href={`/shop/${shop.slug}`} className="brand-tile">
            <ShopLogo shop={shop} size={140} />
            <span>{shop.name}</span>
          </Link>
        ))}
      </div>

      <div className="section-head">
        <div>
          <h2>Aktuelle Gutscheine</h2>
        </div>
      </div>
      <div className="popular-grid">
        {coupons.map(({ shop, coupon }) => (
          <PopularCouponCard key={coupon.id} shop={shop} coupon={coupon} />
        ))}
      </div>
    </div>
  );
}
