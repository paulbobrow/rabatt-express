export type AffiliateNetwork =
  | "awin"
  | "digistore24"
  | "adcell"
  | "impact"
  | "direct"
  | "amazon";

const DEFAULT_AWIN_PUBLISHER_ID = "3142635";

export function getAwinPublisherId(): string {
  return process.env.AWIN_PUBLISHER_ID?.trim() || DEFAULT_AWIN_PUBLISHER_ID;
}

/**
 * Wraps a merchant destination URL for tracking when network credentials exist.
 * Falls back to the raw merchant URL.
 */
export function buildTrackedUrl(input: {
  merchantUrl: string;
  network?: AffiliateNetwork;
  awinMerchantId?: string;
}): string {
  const network = input.network || "direct";
  const merchantUrl = input.merchantUrl;

  if (network === "awin") {
    const mid =
      input.awinMerchantId || process.env.AWIN_DEFAULT_MERCHANT_ID?.trim();
    const publisherId = getAwinPublisherId();
    if (mid && publisherId) {
      const url = new URL("https://www.awin1.com/cread.php");
      url.searchParams.set("awinmid", mid);
      url.searchParams.set("awinaffid", publisherId);
      url.searchParams.set("ued", merchantUrl);
      return url.toString();
    }
  }

  if (network === "digistore24") {
    // Digistore deep links are usually already tracked URLs in the offer
    return merchantUrl;
  }

  return merchantUrl;
}

export function affiliateReady() {
  return {
    awin: Boolean(getAwinPublisherId()),
    awinHasMerchant: Boolean(process.env.AWIN_DEFAULT_MERCHANT_ID?.trim()),
    digistore: Boolean(process.env.DIGISTORE_AFFILIATE_ID?.trim()),
  };
}
