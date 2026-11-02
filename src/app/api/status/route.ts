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
      awinMerchantConfigured: affiliate.awinHasMerchant,
      canEarn: affiliate.digidip || affiliate.awin,
      /** true only when clicks can actually wrap via Awin/Digidip */
      canTrackClicks:
        affiliate.digidip || (affiliate.awin && affiliate.awinHasMerchant),
    },
  });
}
