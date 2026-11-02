import Link from "next/link";
import type { Coupon, Shop } from "@/data/shops";
import { CouponReveal } from "@/components/CouponReveal";
import { ShopLogo } from "@/components/ShopLogo";

type Props = {
  shop: Shop;
  coupon: Coupon;
};

export function PopularCouponCard({ shop, coupon }: Props) {
  return (
    <article className="popular-card">
      {coupon.exclusive ? <span className="exclusive-ribbon">exklusiv</span> : null}

      <Link href={`/shop/${shop.slug}`} className="popular-card-logo">
        <ShopLogo shop={shop} size={120} />
      </Link>

      <p className="popular-card-title">
        <strong>{coupon.discountLabel}</strong> {coupon.title}
      </p>

      <div className="popular-card-cut">
        <CouponReveal shop={shop} coupon={coupon} compact />
      </div>

      <Link href={`/shop/${shop.slug}`} className="popular-card-more">
        Alle {shop.name} Gutscheine anzeigen
      </Link>
    </article>
  );
}
