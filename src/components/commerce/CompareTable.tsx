import Link from "next/link";
import type { Offer, Product } from "@/content/types";

type Row = {
  product: Product;
  offer?: Offer;
  highlight?: boolean;
};

type Props = {
  rows: Row[];
};

export function CompareTable({ rows }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-surface">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="border-b border-line bg-bg/80 text-xs uppercase tracking-wide text-muted">
          <tr>
            <th className="px-4 py-3 font-bold">Produkt</th>
            <th className="px-4 py-3 font-bold">Score</th>
            <th className="px-4 py-3 font-bold">Kurzfazit</th>
            <th className="px-4 py-3 font-bold">Angebot</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ product, offer, highlight }) => (
            <tr
              key={product.slug}
              className={
                highlight
                  ? "border-b border-line bg-emerald-50/60 last:border-0"
                  : "border-b border-line last:border-0"
              }
            >
              <td className="px-4 py-4 font-bold">
                {product.name}
                {highlight ? (
                  <span className="ml-2 rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                    Tipp
                  </span>
                ) : null}
              </td>
              <td className="px-4 py-4 font-extrabold">{product.score.toFixed(1)}</td>
              <td className="px-4 py-4 text-muted">{product.summary}</td>
              <td className="px-4 py-4">
                {offer ? (
                  <Link
                    href={`/out/${offer.id}`}
                    rel="nofollow sponsored noopener"
                    target="_blank"
                    className="inline-flex rounded-full bg-brand px-3 py-2 text-xs font-bold text-white hover:bg-brand-dark"
                  >
                    Zum Angebot
                  </Link>
                ) : (
                  <span className="text-muted">–</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
