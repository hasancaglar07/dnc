import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import CustomCursor from '@/components/layout/CustomCursor';
import Reveal from '@/components/ui/Reveal';
import Contact from '@/components/sections/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'DNC7 ile iletişime geçin. Web tasarım, mobil uygulama, AI entegrasyonu ve prodüksiyon hizmetleri hakkında bilgi alın.',
};

export default function IletisimPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.07, backgroundImage: 'radial-gradient(circle at 15% 50%, #F97316 0%, transparent 45%), radial-gradient(circle at 85% 20%, #6366F1 0%, transparent 45%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div className="sec-tag" style={{ color: 'var(--accent)' }}>İletişim</div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)', fontWeight: 900, lineHeight: 1.03, letterSpacing: -3, marginBottom: 24 }}>
              Bizimle<br /><span style={{ color: 'var(--accent)' }}>İletişime Geçin</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 640 }}>
              Projenizi konuşmak, teklif almak veya sadece merhaba demek için bize ulaşın. 
              2 saat içinde dönüş yapıyoruz.
            </p>
          </Reveal>
        </div>
      </section>

      <Contact />

      <Footer />
      <ScrollToTop />
    </>
  );
}
