import Link from "next/link";
import { CouponCard } from "@/components/CouponCard";
import { PopularCouponCard } from "@/components/PopularCouponCard";
import { ShopLogo } from "@/components/ShopLogo";
import {
  categories,
  getAllCoupons,
  getShopsByCategory,
  shops,
} from "@/data/shops";

export default function HomePage() {
  const popularCoupons = getAllCoupons().slice(0, 12);
  const newestCoupons = getAllCoupons().slice().reverse().slice(0, 5);
  const trendingShops = shops.filter((shop) => shop.rank === 1);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-kicker">Beliebte Gutscheine · täglich frisch</div>
          <h1>Beliebte Gutscheine und Coupons – für dich getestet</h1>
          <p className="hero-lead">
            Deine freundliche Quelle für Rabattcodes. Suche den Shop, zeige den Code und spare
            beim Checkout.
          </p>
          <form className="hero-search" action="/" method="get" role="search">
            <label htmlFor="q" className="visually-hidden" style={{ position: "absolute", left: -9999 }}>
              Shop suchen
            </label>
            <input
              id="q"
              name="q"
              placeholder="Suchbegriff oder Shopname eingeben – z.B. Zalando…"
            />
            <button type="submit">Suchen</button>
          </form>
        </div>
      </section>

      <div className="container notice">
        * Affiliate-Hinweis: Bei Käufen über unsere Redirects können wir eine Provision erhalten.
        Alle Codes sind Demo-Platzhalter.
      </div>

      <section className="section" id="beliebte-gutscheine">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Beliebte Gutscheine und Coupons</h2>
              <p>Täglich für dich getestet – mit echten Shop-Logos.</p>
            </div>
          </div>
          <div className="popular-grid">
            {popularCoupons.map(({ shop, coupon }) => (
              <PopularCouponCard key={coupon.id} shop={shop} coupon={coupon} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="kategorien">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Unsere beliebtesten Kategorien</h2>
              <p>Essen, Mode, Elektronik, Reisen und Beauty.</p>
            </div>
          </div>
          <div className="category-rail">
            {categories.map((category) => (
              <a key={category.slug} href={`#kat-${category.slug}`} className="category-chip">
                <span className="icon" aria-hidden>
                  {category.icon}
                </span>
                <strong>{category.label}</strong>
                <span>{category.teaser}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {categories.map((category) => {
        const categoryShops = getShopsByCategory(category.slug);
        return (
          <section key={category.slug} className="section" id={`kat-${category.slug}`}>
            <div className="container">
              <div className="category-block">
                <div className="category-block-head">
                  <h2>
                    {category.icon} {category.label} – Top Shops
                  </h2>
                  <a href="#beliebte-gutscheine">Zu den beliebten Gutscheinen</a>
                </div>
                <div className="shop-grid">
                  {categoryShops.map((shop) => (
                    <Link key={shop.slug} href={`/shop/${shop.slug}`} className="shop-card">
                      {shop.rank === 1 ? (
                        <span className="shop-rank-badge">Top Gutschein</span>
                      ) : (
                        <span className="shop-rank">#{shop.rank}</span>
                      )}
                      <ShopLogo shop={shop} size={110} />
                      <h3>{shop.name}</h3>
                      <span className="btn btn-dark">{shop.name} Gutschein</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="section" id="top-gutscheine">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Neueste Gutscheine</h2>
              <p>Frisch eingepflegte Demo-Codes zum Ausprobieren.</p>
            </div>
          </div>
          <div className="layout-split">
            <div className="coupon-list">
              {newestCoupons.map(({ shop, coupon }) => (
                <CouponCard key={coupon.id} shop={shop} coupon={coupon} showShopName />
              ))}
            </div>
            <aside className="sidebar-stack">
              <div className="side-card">
                <h2>Highlights</h2>
                <ul className="side-list">
                  {trendingShops.map((shop) => (
                    <li key={shop.slug}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem" }}>
                        <ShopLogo shop={shop} size={64} />
                        {shop.name}
                      </span>
                      <Link
                        className="btn btn-dark"
                        href={`/shop/${shop.slug}`}
                        style={{ width: "auto", paddingInline: "0.8rem" }}
                      >
                        Gutschein
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="seo-block">
            <h2>Deine zuverlässige Quelle für Gutscheine von Online-Shops</h2>
            <p>
              Wie bei COUPONS.DE stehen Suche, beliebte Gutscheine mit Logos und klare
              „Zum Code“-Buttons im Mittelpunkt – bei uns hell, freundlich und mit sauberem
              Affiliate-Redirect.
            </p>
            <div className="stats-row">
              <div className="stat">
                <strong>{categories.length}</strong>
                <span>Top-Kategorien</span>
              </div>
              <div className="stat">
                <strong>{shops.length}</strong>
                <span>Shops mit Logo</span>
              </div>
              <div className="stat">
                <strong>{getAllCoupons().length}</strong>
                <span>Demo-Gutscheine</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
