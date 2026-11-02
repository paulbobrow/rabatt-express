import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Datenschutz" };

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">Datenschutz</h1>
      <div className="prose-re mt-6">
        <h2>1. Verantwortlicher</h2>
        <p>
          {siteConfig.operatorName}, {siteConfig.street}, {siteConfig.zipCity},{" "}
          {siteConfig.email}
        </p>
        <h2>2. Hosting</h2>
        <p>
          Die Website wird bei Vercel betrieben. Dabei können technisch notwendige
          Server-Logs (IP, Zeitpunkt, User-Agent) anfallen.
        </p>
        <h2>3. Affiliate-Tracking</h2>
        <p>
          Klicks auf Angebote laufen über unseren Redirect <code>/out/[id]</code>{" "}
          und ggf. Partnernetzwerke (z. B. AWIN). Partner können Cookies setzen, um
          Provisionen zuzuordnen.
        </p>
        <h2>4. Keine Nutzerkonten</h2>
        <p>Eine Registrierung ist nicht erforderlich.</p>
        <h2>5. Rechte</h2>
        <p>
          Du hast Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
          Datenübertragbarkeit und Widerspruch sowie Beschwerde bei einer Aufsichtsbehörde.
        </p>
      </div>
    </div>
  );
}
