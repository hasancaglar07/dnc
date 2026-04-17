import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hizmetler',
  description: 'DNC7 dijital ajans hizmetleri: Prodüksiyon, AI entegrasyonu, web tasarım, mobil uygulama, e-ticaret danışmanlığı ve reklam yönetimi.',
};

export default function HizmetlerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
