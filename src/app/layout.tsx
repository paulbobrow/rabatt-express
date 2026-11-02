import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: "Rabatt Express – Gutscheine & Rabattcodes",
    template: "%s | Rabatt Express",
  },
  description:
    "Aktuelle Gutscheine und Rabattcodes. Schwerpunkt Essen & Trinken: Lieferdienste, Supermarkt, Vor Ort und Mittagstisch.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className={manrope.variable}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
