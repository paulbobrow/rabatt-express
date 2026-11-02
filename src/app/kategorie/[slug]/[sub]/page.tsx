import Link from "next/link";
import { notFound } from "next/navigation";
import { PopularCouponCard } from "@/components/PopularCouponCard";
import { ShopLogo } from "@/components/ShopLogo";
import {
  getCategoryBySlug,
  getShopsBySubcategory,
} from "@/data/shops";

type Props = {
  params: Promise<{ slug: string; sub: string }>;
};

export function generateStaticParams() {
  const food = getCategoryBySlug("essen-trinken");
  return (
    food?.subcategories?.map((sub) => ({
      slug: "essen-trinken",
      sub: sub.slug,
    })) ?? []
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug, sub } = await params;
  const category = getCategoryBySlug(slug);
  const subcategory = category?.subcategories?.find((s) => s.slug === sub);
  if (!category || !subcategory) return { title: "Unterkategorie" };
  return {
    title: `${subcategory.label} Gutscheine – ${category.label}`,
    description: subcategory.teaser,
  };
}

export default async function SubcategoryPage({ params }: Props) {
  const { slug, sub } = await params;
  const category = getCategoryBySlug(slug);
  const subcategory = category?.subcategories?.find((s) => s.slug === sub);
  if (!category || !subcategory) notFound();

  const list = getShopsBySubcategory(slug, sub);
  const coupons = list.flatMap((shop) =>
    shop.coupons.map((coupon) => ({ shop, coupon })),
  );

  return (
    <div className="container section">
      <nav className="breadcrumbs" aria-label="Brotkrumen">
        <Link href="/">Gutscheine</Link>
        <span>/</span>
        <Link href={`/kategorie/${slug}`}>{category.label}</Link>
        <span>/</span>
        <strong>{subcategory.label}</strong>
      </nav>

      <header className="page-hero">
        <h1>{subcategory.label}</h1>
        <p>{subcategory.teaser}</p>
      </header>

      <div className="brand-grid" style={{ marginBottom: "2rem" }}>
        {list.map((shop) => (
          <Link key={shop.slug} href={`/shop/${shop.slug}`} className="brand-tile">
            <ShopLogo shop={shop} size={140} />
            <span>{shop.name}</span>
          </Link>
        ))}
      </div>

      <div className="section-head">
        <div>
          <h2>Gutscheine</h2>
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
