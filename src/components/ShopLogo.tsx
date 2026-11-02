"use client";

import Image from "next/image";
import { useState } from "react";
import type { Shop } from "@/data/shops";

type Props = {
  shop: Shop;
  /** Display width in px – height follows ~2:1 */
  size?: number;
  className?: string;
};

export function ShopLogo({ shop, size = 120, className = "" }: Props) {
  const height = Math.round(size / 2);
  const [failed, setFailed] = useState(shop.hasLogo === false);

  if (failed) {
    const initials = shop.logoText
      .split(/\s+/)
      .map((part) => part[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();
    return (
      <span
        className={`shop-logo-frame shop-logo-fallback ${className}`}
        style={{
          width: size,
          height,
          color: shop.accent,
        }}
        aria-label={`${shop.name} Logo`}
      >
        {initials}
      </span>
    );
  }

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
        onError={() => setFailed(true)}
      />
    </span>
  );
}
