import { NextResponse } from "next/server";
import { shops, getAllCoupons } from "@/data/shops";
import { affiliateReady } from "@/lib/affiliate";
import { isLegalPlaceholder, siteConfig } from "@/lib/site";

export async function GET() {
  const affiliate = affiliateReady();

  return NextResponse.json({
    ok: true,
    site: {
      name: siteConfig.name,
      domain: siteConfig.domain,
      url: siteConfig.url,
    },
    counts: {
      shops: shops.length,
      coupons: getAllCoupons().length,
    },
    readiness: {
      legalComplete: !isLegalPlaceholder(),
      digidipConfigured: affiliate.digidip,
      awinConfigured: affiliate.awin,
      canEarn:
        affiliate.digidip ||
        Boolean(process.env.AWIN_PUBLISHER_ID?.trim()),
    },
  });
}
