'use client';

import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';

export default function DroneCekimPage() {
  const accent = '#0EA5E9';
  const features = [
    { icon: 'bi-camera-video', title: '4K Hava Çekimi', desc: 'Sinematik kalitede 4K drone görüntüleri ile projenizi havadan belgeleyin.' },
    { icon: 'bi-thermometer-half', title: 'Thermal Kamera', desc: 'Enerji kaybı tespiti, yangın önleme ve endüstriyel inceleme için thermal çekim.' },
    { icon: 'bi-image', title: 'Panoramik Görüntü', desc: '360 derece panoramik hava fotoğrafları ve sanal tur içerikleri.' },
    { icon: 'bi-shield-check', title: 'Lisanslı Operatör', desc: 'SHGM lisanslı drone pilotları ile güvenli ve yasal uçuş operasyonları.' },
    { icon: 'bi-building', title: 'İnşaat Takibi', desc: 'Şantiye ilerleme takibi, harita çıkarma ve ortofoto üretimi.' },
    { icon: 'bi-calendar-event', title: 'Etkinlik Çekimi', desc: 'Festival, konser ve kurumsal etkinliklerinizi havadan kayıt altına alın.' },
  ];

  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08, background: `radial-gradient(circle at 30% 50%, ${accent} 0%, transparent 60%)` }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/hizmetler" className="back-link">
            <i className="bi bi-arrow-left"></i> Tüm Hizmetler
          </Link>
          <div className="sec-tag" style={{ color: accent }}>Drone Çekim</div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -3, marginBottom: 20 }}>
            Profesyonel<br /><span style={{ color: accent }}>Hava Çekimleri</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600, marginBottom: 32 }}>
            Lisanslı drone operatörlerimizle 4K sinematik hava çekimleri. 
            Thermal kamera desteği ile endüstriyel çözümler.
          </p>
          <Link href="/#iletisim" className="cta-main" style={{ background: accent }}>
            Teklif Alın <span className="ico"><i className="bi bi-arrow-right"></i></span>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <div className="sec-tag">Hizmetler</div>
          <h2 className="sec-title">Drone <em>Çözümlerimiz</em></h2>
          <div className="feature-grid">
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

      {/* CTA */}
      <section className="sec" style={{ background: 'var(--bg3)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="cta-center">
            <div className="sec-tag" style={{ justifyContent: 'center' }}>Başlayalım</div>
            <h2 className="sec-title" style={{ textAlign: 'center' }}>
              Projenizi <em>havadan</em> görüntüleyelim
            </h2>
            <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
              Drone çekim ihtiyaçlarınız için hemen iletişime geçin.
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
