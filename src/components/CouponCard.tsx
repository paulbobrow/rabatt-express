import type { Coupon, Shop } from "@/data/shops";
import { CouponReveal } from "@/components/CouponReveal";
import { ShopLogo } from "@/components/ShopLogo";

type Props = {
  shop: Shop;
  coupon: Coupon;
  showShopName?: boolean;
};

export function CouponCard({ shop, coupon, showShopName = false }: Props) {
  return (
    <article className="coupon-card">
      <div className="coupon-logo-wrap">
        <ShopLogo shop={shop} size={96} />
        <span className={`coupon-type-tag ${coupon.type === "code" ? "code" : "deal"}`}>
          {coupon.discountLabel}
        </span>
      </div>
      <div className="coupon-body">
        {showShopName ? <span className="pill">{shop.name}</span> : null}
        <h3 style={{ marginTop: showShopName ? "0.45rem" : 0 }}>{coupon.title}</h3>
        <p>
          {coupon.exclusive ? "Exklusiv · " : ""}
          {coupon.type === "code" ? "Code nach Klick sichtbar" : "Direkt zum Angebot"}
        </p>
      </div>
      <CouponReveal shop={shop} coupon={coupon} />
    </article>
  );
}
