'use client';

import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';

export default function MobilUygulamaPage() {
  const accent = '#8B5CF6';
  const features = [
    { icon: 'bi-apple', title: 'iOS Geliştirme', desc: 'Swift ile native iOS uygulamaları. App Store yayın ve optimizasyon dahil.' },
    { icon: 'bi-android2', title: 'Android Geliştirme', desc: 'Kotlin ile native Android uygulamaları. Google Play yayın süreci dahil.' },
    { icon: 'bi-phone', title: 'Cross-Platform', desc: 'React Native ile tek kod tabanından iOS ve Android uygulamaları.' },
    { icon: 'bi-bell', title: 'Push Notification', desc: 'Firebase Cloud Messaging ile akıllı bildirim stratejileri.' },
    { icon: 'bi-bar-chart-line', title: 'Analytics', desc: 'Kullanıcı davranış analizi, retention takibi ve A/B test altyapısı.' },
    { icon: 'bi-cloud-upload', title: 'App Store Yayın', desc: 'ASO optimizasyonu, store görselleri ve yayın süreç yönetimi.' },
  ];

  return (
    <>
      <CustomCursor />
      <Navigation />

      <section style={{ paddingTop: 160, paddingBottom: 80, background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08, background: `radial-gradient(circle at 30% 50%, ${accent} 0%, transparent 60%)` }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/hizmetler" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.5)', marginBottom: 32 }}>
            <i className="bi bi-arrow-left"></i> Tüm Hizmetler
          </Link>
          <div className="sec-tag" style={{ color: accent }}>Mobil Uygulama Geliştirme</div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -3, marginBottom: 20 }}>
            iOS & Android<br /><span style={{ color: accent }}>Mobil Uygulamalar</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600, marginBottom: 32 }}>
            React Native ve Swift ile native ve cross-platform uygulamalar. 
            Tasarımdan yayına kadar uçtan uca hizmet.
          </p>
          <Link href="/#iletisim" className="cta-main" style={{ background: accent }}>
            Proje Başlat <span className="ico"><i className="bi bi-arrow-right"></i></span>
          </Link>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <div className="sec-tag">Hizmetler</div>
          <h2 className="sec-title">Mobil <em>Çözümlerimiz</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20, marginTop: 48 }}>
            {features.map((f, i) => (
              <div key={i} style={{ padding: '28px 24px', borderRadius: 20, border: '1.5px solid var(--border)', background: '#fff' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: `${accent}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <i className={`bi ${f.icon}`} style={{ fontSize: 22, color: accent }}></i>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--bg3)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div className="sec-tag" style={{ justifyContent: 'center' }}>Başlayalım</div>
            <h2 className="sec-title" style={{ textAlign: 'center' }}>
              Uygulamanızı <em>hayata geçirelim</em>
            </h2>
            <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
              Mobil uygulama fikrinizi birlikte değerlendirelim.
            </p>
            <Link href="/#iletisim" className="cta-main" style={{ background: accent }}>
              Ücretsiz Keşif <span className="ico"><i className="bi bi-arrow-right"></i></span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
