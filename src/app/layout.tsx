import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "TSUE Global — Internationalization", template: "%s | TSUE Global" },
  description: "Toshkent davlat iqtisodiyot universitetining xalqaro yo‘nalishlari uchun mustaqil konsept-portal.",
  applicationName: "TSUE Global"
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uz"><body>{children}</body></html>;
}
