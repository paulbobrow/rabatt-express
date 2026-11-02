import type { Metadata } from "next";
import { isLegalPlaceholder, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  const placeholder = isLegalPlaceholder();

  return (
    <div className="container section">
      <div className="side-card" style={{ maxWidth: 720 }}>
        <h1 style={{ marginTop: 0 }}>Impressum</h1>
        {placeholder ? (
          <p className="notice">
            Platzhalter aktiv: Bitte in Vercel die Env-Vars{" "}
            <code>NEXT_PUBLIC_OPERATOR_*</code> setzen, bevor die Seite öffentlich beworben wird.
          </p>
        ) : null}

        <p>
          <strong>{siteConfig.name}</strong>
          <br />
          {siteConfig.operatorName}
          <br />
          {siteConfig.street}
          <br />
          {siteConfig.zipCity}
        </p>

        <p>
          E-Mail:{" "}
          <a href={`mailto:${siteConfig.email}`} style={{ color: "var(--red)" }}>
            {siteConfig.email}
          </a>
          {siteConfig.phone ? (
            <>
              <br />
              Telefon: {siteConfig.phone}
            </>
          ) : null}
        </p>

        {siteConfig.vatId ? (
          <p>Umsatzsteuer-ID: {siteConfig.vatId}</p>
        ) : (
          <p className="muted">
            Falls vorhanden: USt-IdNr. über <code>NEXT_PUBLIC_VAT_ID</code> ergänzen.
          </p>
        )}

        <p>
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: {siteConfig.operatorName}
        </p>

        <p className="muted">
          Domain: {siteConfig.domain}
        </p>
      </div>
    </div>
  );
}
