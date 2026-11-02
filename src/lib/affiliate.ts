export type AffiliateNetwork = "direct" | "digidip" | "awin";

export type AffiliateTarget = {
  merchantUrl: string;
  network?: AffiliateNetwork;
  /** Awin: advertiser/merchant ID when using awin deep links */
  awinMerchantId?: string;
};

/** Live publisher ID – override via AWIN_PUBLISHER_ID if needed */
const DEFAULT_AWIN_PUBLISHER_ID = "3142635";

function getAwinPublisherId(): string {
  return process.env.AWIN_PUBLISHER_ID?.trim() || DEFAULT_AWIN_PUBLISHER_ID;
}

function getDefaultNetwork(): AffiliateNetwork {
  return (
    (process.env.AFFILIATE_DEFAULT_NETWORK as AffiliateNetwork) || "awin"
  );
}

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
  const publisherId = getAwinPublisherId();
  if (!publisherId) return null;
  const mid = merchantId || process.env.AWIN_DEFAULT_MERCHANT_ID?.trim();
  if (!mid) {
    // Need advertiser MID from an approved Awin programme
    return null;
  }
  const url = new URL("https://www.awin1.com/cread.php");
  url.searchParams.set("awinmid", mid);
  url.searchParams.set("awinaffid", publisherId);
  url.searchParams.set("ued", merchantUrl);
  return url.toString();
}

/**
 * Builds the final outbound affiliate URL.
 * Priority: explicit network → Awin (with MID) → Digidip → direct merchant URL.
 */
export function buildAffiliateUrl(target: AffiliateTarget): string {
  const network = target.network || getDefaultNetwork();
  const merchantUrl = target.merchantUrl;

  if (network === "direct") return merchantUrl;

  if (network === "digidip") {
    return digidipUrl(merchantUrl) || merchantUrl;
  }

  if (network === "awin") {
    return (
      awinUrl(merchantUrl, target.awinMerchantId) ||
      digidipUrl(merchantUrl) ||
      merchantUrl
    );
  }

  return (
    awinUrl(merchantUrl, target.awinMerchantId) ||
    digidipUrl(merchantUrl) ||
    merchantUrl
  );
}

export function affiliateReady(): {
  digidip: boolean;
  awin: boolean;
  awinHasMerchant: boolean;
} {
  return {
    digidip: Boolean(process.env.DIGIDIP_REF?.trim()),
    awin: Boolean(getAwinPublisherId()),
    awinHasMerchant: Boolean(process.env.AWIN_DEFAULT_MERCHANT_ID?.trim()),
  };
}
