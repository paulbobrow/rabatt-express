import Link from "next/link";
import { notFound } from "next/navigation";
import { CouponCard } from "@/components/CouponCard";
import { ShopLogo } from "@/components/ShopLogo";
import { getShopBySlug, shops } from "@/data/shops";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return shops.map((shop) => ({ slug: shop.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const shop = getShopBySlug(slug);
  if (!shop) return { title: "Shop nicht gefunden" };
  return {
    title: `${shop.name} Gutschein & Rabattcode`,
    description: shop.shortDescription,
  };
}

export default async function ShopPage({ params }: Props) {
  const { slug } = await params;
  const shop = getShopBySlug(slug);
  if (!shop) notFound();

  return (
    <div className="container">
      <nav className="breadcrumbs" aria-label="Brotkrumen">
        <Link href="/">Startseite</Link>
        <span>/</span>
        <span>{shop.category}</span>
        <span>/</span>
        <strong>{shop.name} Gutschein</strong>
      </nav>

      <section className="shop-hero">
        <ShopLogo shop={shop} size={140} />
        <div>
          <h1 style={{ margin: "0 0 0.45rem", color: "var(--ink)" }}>
            {shop.name} Gutschein
          </h1>
          <p className="muted" style={{ margin: 0, maxWidth: "62ch" }}>
            {shop.shortDescription}
          </p>
          <p className="notice" style={{ marginTop: "0.9rem" }}>
            * Affiliate-Links: Klicks öffnen den Shop über `/out/[id]`. Codes sind Demo-Daten.
          </p>
        </div>
      </section>

      <div className="layout-split" style={{ marginBottom: "2rem" }}>
        <section>
          <div className="section-head">
            <h2>Aktuelle {shop.name} Rabattcodes</h2>
          </div>
          <div className="coupon-list">
            {shop.coupons.map((coupon) => (
              <CouponCard key={coupon.id} shop={shop} coupon={coupon} />
            ))}
          </div>
        </section>

        <aside className="sidebar-stack">
          <div className="side-card">
            <h2>Sparmöglichkeiten</h2>
            <ul className="side-list">
              <li>
                <span>Gutscheine</span>
                <strong>{shop.coupons.length}</strong>
              </li>
              <li>
                <span>Codes</span>
                <strong>{shop.coupons.filter((c) => c.type === "code").length}</strong>
              </li>
              <li>
                <span>Angebote</span>
                <strong>{shop.coupons.filter((c) => c.type === "deal").length}</strong>
              </li>
            </ul>
          </div>

          <div className="side-card">
            <h2>So funktioniert es</h2>
            <ol className="muted" style={{ margin: 0, paddingLeft: "1.1rem" }}>
              <li>Gutschein anzeigen klicken</li>
              <li>Code kopieren (falls vorhanden)</li>
              <li>Im Shop-Warenkorb einlösen</li>
            </ol>
          </div>

          <div className="side-card">
            <h2>Weitere Shops</h2>
            <ul className="side-list">
              {shops
                .filter((item) => item.slug !== shop.slug)
                .slice(0, 4)
                .map((item) => (
                  <li key={item.slug}>
                    <span>{item.name}</span>
                    <Link href={`/shop/${item.slug}`}>Öffnen</Link>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
