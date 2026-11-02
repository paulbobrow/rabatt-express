import { NextResponse } from "next/server";
import { getOfferById, getProduct } from "@/content/seed";
import { buildTrackedUrl } from "@/lib/affiliate";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_request: Request, context: Ctx) {
  const { id } = await context.params;
  const offer = getOfferById(id);

  if (!offer) {
    return NextResponse.redirect(new URL("/", process.env.NEXT_PUBLIC_SITE_URL || "https://rabatt-express.de"), 302);
  }

  const product = getProduct(offer.productSlug);
  const target = buildTrackedUrl({
    merchantUrl: offer.url,
    network: offer.network,
    awinMerchantId: offer.awinMerchantId,
  });

  const response = NextResponse.redirect(target, 302);
  response.headers.set("Referrer-Policy", "no-referrer");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  response.headers.set(
    "X-Affiliate-Product",
    product?.slug ?? offer.productSlug,
  );
  return response;
}
