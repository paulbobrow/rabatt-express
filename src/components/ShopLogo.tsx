import Image from "next/image";
import type { Shop } from "@/data/shops";

type Props = {
  shop: Shop;
  /** Display width in px – height follows 2:1 like coupons.de */
  size?: number;
  className?: string;
};

export function ShopLogo({ shop, size = 120, className = "" }: Props) {
  const height = Math.round(size / 2);
  return (
    <span
      className={`shop-logo-frame ${className}`}
      style={{ width: size, height }}
    >
      <Image
        src={`/logos/${shop.slug}.png`}
        alt={`${shop.name} Logo`}
        width={size * 2}
        height={height * 2}
        className="shop-logo-img"
        sizes={`${size}px`}
      />
    </span>
  );
}
