import { NextResponse } from "next/server";
import { getCouponById } from "@/data/shops";
import { buildAffiliateUrl } from "@/lib/affiliate";

type Params = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, { params }: Params) {
  const { id } = await params;
  const match = getCouponById(id);

  if (!match) {
    return NextResponse.redirect(new URL("/", request.url), 302);
  }

  const destination = buildAffiliateUrl({
    merchantUrl: match.coupon.merchantUrl,
    network: match.shop.affiliateNetwork,
    awinMerchantId: match.shop.awinMerchantId,
  });

  const response = NextResponse.redirect(destination, 302);
  response.headers.set("Referrer-Policy", "no-referrer");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  response.headers.set("Cache-Control", "no-store");
  return response;
}
