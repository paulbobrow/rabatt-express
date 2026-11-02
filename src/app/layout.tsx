import type { Metadata } from "next";
import { Outfit, Sora } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: {
    default: "Rabatt Express – Gutscheine & Rabattcodes",
    template: "%s | Rabatt Express",
  },
  description:
    "Die schnellsten Rabattcodes im Web. Aktuelle Gutscheine für Essen, Mode, Elektronik, Reisen und Beauty.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className={`${outfit.variable} ${sora.variable}`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
