import Link from "next/link";
import type { Coupon, Shop } from "@/data/shops";
import { CouponReveal } from "@/components/CouponReveal";
import { ShopLogo } from "@/components/ShopLogo";

type Props = {
  shop: Shop;
  coupon: Coupon;
};

/** Große Banner-Karte im MyDealz-Stil */
export function FeaturedDealCard({ shop, coupon }: Props) {
  return (
    <article className="featured-card">
      <div className="featured-card-logo">
        <ShopLogo shop={shop} size={160} />
      </div>
      <div className="featured-card-body">
        <p className="featured-card-brand">{shop.name}</p>
        <h3 className="featured-card-discount">{coupon.discountLabel}</h3>
        <p className="featured-card-title">{coupon.title}</p>
        <div className="featured-card-actions">
          <CouponReveal shop={shop} coupon={coupon} pill />
          <Link href={`/shop/${shop.slug}`} className="featured-card-more">
            Alle {shop.name} Gutscheine
          </Link>
        </div>
      </div>
    </article>
  );
}
