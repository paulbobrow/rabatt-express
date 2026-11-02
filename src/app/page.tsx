import Link from "next/link";
import { CategoryIcon } from "@/components/CategoryIcon";
import { FeaturedDealCard } from "@/components/FeaturedDealCard";
import { PopularCouponCard } from "@/components/PopularCouponCard";
import { ShopLogo } from "@/components/ShopLogo";
import {
  categories,
  getAllCoupons,
  getFoodCategory,
  getShopsByCategory,
  getShopsBySubcategory,
  shops,
} from "@/data/shops";

export default function HomePage() {
  const all = getAllCoupons();
  const featured = all.slice(0, 3);
  const hottest = all.slice(0, 8);
  const food = getFoodCategory();
  const foodShops = getShopsByCategory("essen-trinken");
  const brandShops = [
    ...foodShops.slice(0, 4),
    ...shops.filter((s) => s.categorySlug !== "essen-trinken").slice(0, 8),
  ].slice(0, 12);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <h1>Hol Dir Gutscheincodes und Deals Deiner Lieblingsmarken</h1>
          <p className="hero-lead">
            Aktuelle Rabattcodes – klar sortiert nach Kategorien, mit Fokus auf
            Essen &amp; Trinken.
          </p>
          <form className="hero-search" action="/" method="get" role="search">
            <label htmlFor="q" className="sr-only">
              Shop suchen
            </label>
            <input
              id="q"
              name="q"
              placeholder="Shop suchen – z. B. Lieferando, REWE, Zalando…"
            />
            <button type="submit">Suchen</button>
          </form>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="featured-rail">
            {featured.map(({ shop, coupon }) => (
              <FeaturedDealCard key={coupon.id} shop={shop} coupon={coupon} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="kategorien">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Kategorien entdecken</h2>
              <p>Starte mit Essen &amp; Trinken – oder wähle eine weitere Kategorie.</p>
            </div>
          </div>
          <div className="category-chips">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={
                  category.slug === "essen-trinken"
                    ? "#essen-trinken"
                    : `#kat-${category.slug}`
                }
                className={`category-chip${category.slug === "essen-trinken" ? " is-primary" : ""}`}
              >
                <CategoryIcon
                  name={category.iconKey as "food" | "fashion" | "tech" | "travel" | "beauty"}
                />
                <span>{category.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="essen-trinken">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Essen &amp; Trinken</h2>
              <p>{food.teaser}</p>
            </div>
            <Link href="/kategorie/essen-trinken" className="section-link">
              Alle anzeigen
            </Link>
          </div>

          <div className="subcat-grid">
            {food.subcategories?.map((sub) => {
              const count = getShopsBySubcategory("essen-trinken", sub.slug).length;
              return (
                <Link
                  key={sub.slug}
                  href={`/kategorie/essen-trinken/${sub.slug}`}
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

          <div className="brand-grid brand-grid-compact">
            {foodShops.map((shop) => (
              <Link key={shop.slug} href={`/shop/${shop.slug}`} className="brand-tile">
                <ShopLogo shop={shop} size={140} />
                <span>{shop.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="beliebte-gutscheine">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Die heißesten Gutscheine</h2>
              <p>Hol Dir geniale Sparvorteile mit diesen aktuellen Codes.</p>
            </div>
          </div>
          <div className="popular-grid">
            {hottest.map(({ shop, coupon }) => (
              <PopularCouponCard key={coupon.id} shop={shop} coupon={coupon} />
            ))}
          </div>
        </div>
      </section>

      {categories
        .filter((c) => c.slug !== "essen-trinken")
        .map((category) => {
          const categoryShops = getShopsByCategory(category.slug).slice(0, 5);
          return (
            <section
              key={category.slug}
              className="section"
              id={`kat-${category.slug}`}
            >
              <div className="container">
                <div className="section-head">
                  <div>
                    <h2>{category.label}</h2>
                    <p>{category.teaser}</p>
                  </div>
                  <Link
                    href={`/kategorie/${category.slug}`}
                    className="section-link"
                  >
                    Alle anzeigen
                  </Link>
                </div>
                <div className="brand-grid">
                  {categoryShops.map((shop) => (
                    <Link
                      key={shop.slug}
                      href={`/shop/${shop.slug}`}
                      className="brand-tile"
                    >
                      <ShopLogo shop={shop} size={140} />
                      <span>{shop.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

      <section className="section" id="marken">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Beliebteste Marken und Onlineshops</h2>
              <p>Sparen bei den bekanntesten Shops – jetzt entdecken.</p>
            </div>
          </div>
          <div className="brand-grid">
            {brandShops.map((shop) => (
              <Link key={shop.slug} href={`/shop/${shop.slug}`} className="brand-tile">
                <ShopLogo shop={shop} size={140} />
                <span>{shop.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="seo-block">
            <h2>Finde die besten Gutscheine auf Rabatt Express</h2>
            <p>
              Wir bündeln Rabattcodes und Deals klar nach Kategorien – mit{" "}
              <strong>Essen &amp; Trinken</strong> als Schwerpunkt: Lieferdienste,
              Supermarkt, Vor Ort und Mittagstisch. Klicke auf „Code anzeigen“,
              kopiere den Code und löse ihn im Shop ein.
            </p>
            <div className="stats-row">
              <div className="stat">
                <strong>{shops.length}</strong>
                <span>Onlineshops</span>
              </div>
              <div className="stat">
                <strong>{all.length}</strong>
                <span>Aktuelle Gutscheine</span>
              </div>
              <div className="stat">
                <strong>{categories.length}</strong>
                <span>Kategorien</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
