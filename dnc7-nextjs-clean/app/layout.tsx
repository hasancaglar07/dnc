import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "DNC7 — Prodüksiyon, AI & Dijital Çözümler",
    template: "%s | DNC7",
  },
  description: "Kurumsal tanıtım, reklam, AI entegrasyonu, web-mobil geliştirme ve dijital çözümler. 12 yıllık deneyimle markanızı büyütüyoruz.",
  keywords: ["prodüksiyon", "AI entegrasyonu", "web tasarım", "mobil uygulama", "dijital ajans", "reklam yönetimi", "e-ticaret"],
  authors: [{ name: "DNC7" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "DNC7",
    title: "DNC7 — Prodüksiyon, AI & Dijital Çözümler",
    description: "Kurumsal tanıtım, reklam, AI entegrasyonu ve dijital çözümler.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DNC7 — Prodüksiyon, AI & Dijital Çözümler",
    description: "Kurumsal tanıtım, reklam, AI entegrasyonu ve dijital çözümler.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" data-scroll-behavior="smooth" className={jakarta.variable}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}>{children}</body>
    </html>
  );
}
