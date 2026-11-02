import type { Metadata } from "next";
import { isLegalPlaceholder, siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Impressum" };

export default function ImpressumPage() {
  const placeholder = isLegalPlaceholder();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">Impressum</h1>
      {placeholder ? (
        <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
          Platzhalter aktiv – Betreiberdaten prüfen.
        </p>
      ) : null}
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
        <p>
          <strong className="text-ink">{siteConfig.name}</strong>
          <br />
          {siteConfig.operatorName}
          <br />
          {siteConfig.street}
          <br />
          {siteConfig.zipCity}
        </p>
        <p>
          E-Mail:{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-bold text-brand">
            {siteConfig.email}
          </a>
        </p>
        {siteConfig.vatId ? <p>USt-IdNr.: {siteConfig.vatId}</p> : null}
        <p>
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:{" "}
          {siteConfig.operatorName}
        </p>
      </div>
    </div>
  );
}
