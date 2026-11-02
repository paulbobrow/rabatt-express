export type AffiliateNetwork = "direct" | "digidip" | "awin";

export type AffiliateTarget = {
  merchantUrl: string;
  network?: AffiliateNetwork;
  /** Awin: advertiser/merchant ID when using awin deep links */
  awinMerchantId?: string;
};

function digidipUrl(merchantUrl: string): string | null {
  const ref = process.env.DIGIDIP_REF?.trim();
  if (!ref) return null;
  const base =
    process.env.DIGIDIP_BASE_URL?.trim() ||
    "https://coupons-de.digidip.net/visit";
  const url = new URL(base);
  url.searchParams.set("url", merchantUrl);
  url.searchParams.set("ref", ref);
  return url.toString();
}

function awinUrl(merchantUrl: string, merchantId?: string): string | null {
  const publisherId = process.env.AWIN_PUBLISHER_ID?.trim();
  if (!publisherId) return null;
  const mid = merchantId || process.env.AWIN_DEFAULT_MERCHANT_ID?.trim();
  if (!mid) {
    // Fallback: digidip-style not available; use Awin link wrapper if only publisher set
    return null;
  }
  // Classic Awin click reference deep link pattern
  const url = new URL("https://www.awin1.com/cread.php");
  url.searchParams.set("awinmid", mid);
  url.searchParams.set("awinaffid", publisherId);
  url.searchParams.set("ued", merchantUrl);
  return url.toString();
}

/**
 * Builds the final outbound affiliate URL.
 * Priority: explicit network → DIGIDIP_REF → AWIN → direct merchant URL.
 */
export function buildAffiliateUrl(target: AffiliateTarget): string {
  const network = target.network || (process.env.AFFILIATE_DEFAULT_NETWORK as AffiliateNetwork) || "digidip";
  const merchantUrl = target.merchantUrl;

  if (network === "direct") return merchantUrl;

  if (network === "digidip" || network === "awin") {
    if (network === "digidip") {
      return digidipUrl(merchantUrl) || merchantUrl;
    }
    return awinUrl(merchantUrl, target.awinMerchantId) || digidipUrl(merchantUrl) || merchantUrl;
  }

  return digidipUrl(merchantUrl) || awinUrl(merchantUrl, target.awinMerchantId) || merchantUrl;
}

export function affiliateReady(): { digidip: boolean; awin: boolean } {
  return {
    digidip: Boolean(process.env.DIGIDIP_REF?.trim()),
    awin: Boolean(process.env.AWIN_PUBLISHER_ID?.trim()),
  };
}
