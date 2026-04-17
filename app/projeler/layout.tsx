import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projeler',
  description: 'DNC7 tarafından tamamlanan seçkin projeler. Video prodüksiyon, web tasarım, mobil uygulama ve oyun geliştirme çalışmalarımız.',
};

export default function ProjelerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
