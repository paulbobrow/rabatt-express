import Link from "next/link";
import type { Offer, Product } from "@/content/types";

type Props = {
  product: Product;
  offer: Offer;
  badge?: string;
};

export function OfferBox({ product, offer, badge = "Unsere Empfehlung" }: Props) {
  return (
    <aside className="rounded-2xl border border-line bg-surface p-5">
      <p className="text-xs font-bold uppercase tracking-wide text-brand">{badge}</p>
      <h2 className="mt-1 text-xl font-extrabold tracking-tight">{product.name}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{product.summary}</p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs text-muted">Preis / Deal</p>
          <p className="text-lg font-extrabold">{offer.priceLabel}</p>
        </div>
        <p className="rounded-full bg-bg px-3 py-1 text-sm font-bold">
          Score {product.score.toFixed(1)}
        </p>
      </div>
      <Link
        href={`/out/${offer.id}`}
        rel="nofollow sponsored noopener"
        target="_blank"
        className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-brand-dark"
      >
        {offer.ctaLabel}
      </Link>
      <p className="mt-3 text-[11px] leading-snug text-muted">
        * Affiliate-Link: Bei einem Kauf über diesen Link können wir eine Provision
        erhalten – ohne Mehrkosten für dich.
      </p>
    </aside>
  );
}
