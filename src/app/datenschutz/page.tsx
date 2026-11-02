import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <div className="container section">
      <div className="side-card" style={{ maxWidth: 720 }}>
        <h1 style={{ marginTop: 0 }}>Datenschutzerklärung</h1>
        <p className="muted">
          Basis-Text für den Launch. Vor Go-Live idealerweise von einer Vorlage (z. B. eRecht24 /
          Datenschutz-Generator) auf deine Hosting-/Analytics-Tools anpassen.
        </p>

        <h2 style={{ fontSize: "1.05rem" }}>1. Verantwortlicher</h2>
        <p>
          {siteConfig.operatorName}
          <br />
          {siteConfig.street}
          <br />
          {siteConfig.zipCity}
          <br />
          E-Mail: {siteConfig.email}
        </p>

        <h2 style={{ fontSize: "1.05rem" }}>2. Hosting</h2>
        <p>
          Die Website wird bei einem Hosting-Anbieter (z. B. Vercel) betrieben. Dabei können
          Server-Logfiles (IP-Adresse, Zeitpunkt, User-Agent) technisch notwendig verarbeitet
          werden.
        </p>

        <h2 style={{ fontSize: "1.05rem" }}>3. Affiliate-Links / Tracking durch Partner</h2>
        <p>
          Wenn du auf „Gutschein anzeigen“ / „Zum Code“ klickst, wirst du über unseren Redirect{" "}
          <code>/out/[id]</code> zu Partnernetzwerken (z. B. Digidip, Awin) und anschließend zum
          Händler weitergeleitet. Die Partner können Cookies und Tracking-Parameter setzen, um
          Provisionen zuzuordnen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
          Interesse an der Finanzierung des kostenlosen Angebots) bzw. – soweit erforderlich –
          deine Einwilligung.
        </p>

        <h2 style={{ fontSize: "1.05rem" }}>4. Keine Nutzerkonten</h2>
        <p>
          Für die Nutzung der Gutscheinseite ist keine Registrierung nötig. Wir speichern keine
          Kundenkonten.
        </p>

        <h2 style={{ fontSize: "1.05rem" }}>5. Deine Rechte</h2>
        <p>
          Du hast Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch. Außerdem besteht ein Beschwerderecht bei einer
          Datenschutzaufsichtsbehörde.
        </p>

        <h2 style={{ fontSize: "1.05rem" }}>6. Kontakt</h2>
        <p>
          Datenschutz-Anfragen an{" "}
          <a href={`mailto:${siteConfig.email}`} style={{ color: "var(--red)" }}>
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
