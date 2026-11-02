import type { Metadata } from "next";
import { LocaleSync } from "@/components/locale-sync";
import "./globals.css";

const siteUrl = "https://tsue-global-portal.onrender.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TSUE Global — Internationalization",
    template: "%s | TSUE Global"
  },
  description: "Toshkent davlat iqtisodiyot universitetining xalqaro yo‘nalishlari bo‘yicha uch tilli mustaqil konsept-portal.",
  applicationName: "TSUE Global",
  alternates: {
    languages: {
      uz: "/uz",
      en: "/en",
      ru: "/ru"
    }
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "TSUE Global",
    title: "TSUE Global — Internationalization",
    description: "A multilingual independent concept portal for TSUE internationalization information.",
    locale: "uz_UZ",
    alternateLocale: ["en_US", "ru_RU"]
  },
  twitter: {
    card: "summary",
    title: "TSUE Global — Internationalization",
    description: "Independent multilingual concept portal."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <LocaleSync />
        {children}
      </body>
    </html>
  );
}
