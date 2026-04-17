import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ExitIntentPopup from "@/components/layout/ExitIntentPopup";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CookieConsent from "@/components/layout/CookieConsent";
import SchemaOrg from "@/components/layout/SchemaOrg";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";

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
    images: [{ url: "https://dnc7.com/og-image.png", width: 1200, height: 630, alt: "DNC7 Dijital Ajans" }],
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
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="İstanbul" />
        <meta name="geo.position" content="41.0082;28.9784" />
        <meta name="ICBM" content="41.0082, 28.9784" />
        <meta name="language" content="Turkish" />
        <meta name="rating" content="general" />
        <link rel="canonical" href="https://dnc7.com" />
        <SchemaOrg />
        {/* Google Analytics - TODO: Replace G-XXXXXXXXXX with real ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');` }} />
      </head>
      <body className={jakarta.className}>
        {children}
        <ExitIntentPopup />
        <WhatsAppButton />
        <CookieConsent />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
