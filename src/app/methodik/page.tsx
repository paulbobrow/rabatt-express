import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Methodik",
  description:
    "So bewertet Rabatt Express Produkte, Vergleiche und Affiliate-Empfehlungen.",
};

export default function MethodikPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">Methodik</h1>
      <p className="mt-3 text-muted">
        Wir sind ein Affiliate-Portal mit redaktionellem Anspruch – kein
        klassisches Gutschein-Portal.
      </p>

      <div className="prose-re mt-8">
        <h2>Was wir bewerten</h2>
        <p>
          Preis-Leistung, Alltagstauglichkeit, Vertragsfallen (Verlängerung,
          Laufzeit), Support und Transparenz. Marketingversprechen allein reichen
          nicht.
        </p>
        <h2>Affiliate & Kennzeichnung</h2>
        <p>
          Links zu Anbietern können Affiliate-Links sein. Wenn du darüber kaufst,
          erhalten wir ggf. eine Provision. Der Preis für dich bleibt gleich. Auf
          Angebotsboxen und in Tabellen kennzeichnen wir das.
        </p>
        <h2>Unabhängigkeit</h2>
        <p>
          Rankings folgen unserer Bewertungslogik. Provisionen allein entscheiden
          nicht über den „Tipp“. Schlechte Produkte empfehlen wir nicht, nur weil
          sie tracken.
        </p>
        <h2>Fehler & Updates</h2>
        <p>
          Preise und Deals ändern sich. Wir aktualisieren Seiten, sobald wir
          Abweichungen feststellen. Feedback an{" "}
          <Link href="mailto:info@rabatt-express.de" className="font-bold text-brand">
            info@rabatt-express.de
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
