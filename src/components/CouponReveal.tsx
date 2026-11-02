"use client";

import { useEffect, useState } from "react";
import type { Coupon, Shop } from "@/data/shops";

type Props = {
  shop: Shop;
  coupon: Coupon;
  compact?: boolean;
  /** MyDealz-Style pill CTA */
  pill?: boolean;
};

export function CouponReveal({
  shop,
  coupon,
  compact = false,
  pill = false,
}: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function reveal() {
    setOpen(true);
    setCopied(false);
    window.open(`/out/${coupon.id}`, "_blank", "noopener,noreferrer");
  }

  async function copyCode() {
    if (!coupon.code) return;
    try {
      await navigator.clipboard.writeText(coupon.code);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const ctaLabel =
    coupon.type === "code" ? "Code anzeigen" : "Deal sichern";

  return (
    <>
      {pill ? (
        <button type="button" className="btn btn-pill" onClick={reveal}>
          {ctaLabel}
        </button>
      ) : compact ? (
        <button type="button" className="btn-code-cut" onClick={reveal}>
          {ctaLabel}
        </button>
      ) : (
        <div className="coupon-actions">
          <button type="button" className="btn btn-primary" onClick={reveal}>
            {coupon.type === "code" ? "Gutschein anzeigen" : "Angebot anzeigen"}
          </button>
          <div className="code-peek">
            {coupon.type === "code" ? "********" : "Kein Code"}
          </div>
        </div>
      )}

      {open ? (
        <div
          className="overlay-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`coupon-title-${coupon.id}`}
          onClick={() => setOpen(false)}
        >
          <div
            className="overlay-card"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="overlay-head">
              <div>
                <h2 id={`coupon-title-${coupon.id}`}>{shop.name}</h2>
                <p style={{ margin: "0.35rem 0 0", opacity: 0.92 }}>
                  {coupon.title}
                </p>
              </div>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setOpen(false)}
              >
                Schließen
              </button>
            </div>
            <div className="overlay-body">
              {coupon.type === "code" && coupon.code ? (
                <>
                  <p className="muted">
                    Dein Demo-Code (kopieren und im Shop einlösen):
                  </p>
                  <div className="code-box">
                    <code>{coupon.code}</code>
                    <button type="button" className="btn btn-dark" onClick={copyCode}>
                      {copied ? "Kopiert" : "Kopieren"}
                    </button>
                  </div>
                </>
              ) : (
                <p className="muted" style={{ marginBottom: "1rem" }}>
                  Für dieses Angebot brauchst du keinen Code. Der Shop sollte
                  sich in einem neuen Tab geöffnet haben.
                </p>
              )}

              <ul className="muted" style={{ margin: "0 0 1rem", paddingLeft: "1.1rem" }}>
                {coupon.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>

              <div className="overlay-actions">
                <a
                  className="btn btn-pill"
                  href={`/out/${coupon.id}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Zum Shop von {shop.name}
                </a>
                <p className="muted">
                  * Affiliate-Link: Der Klick läuft über unseren Redirect{" "}
                  <code>/out/{coupon.id}</code>.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
