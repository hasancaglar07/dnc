'use client';

import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import ServiceCROSections from '@/components/sections/ServiceCROSections';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

export default function MobilUygulamaPage() {
  const accent = '#8B5CF6';

  const features = [
    { icon: 'bi-apple', title: 'iOS Geliştirme', desc: 'Swift ve SwiftUI ile App Store\'a hazır, native iOS uygulamaları.' },
    { icon: 'bi-android2', title: 'Android Geliştirme', desc: 'Kotlin ile Google Play\'e hazır, yüksek performanslı Android uygulamaları.' },
    { icon: 'bi-phone', title: 'Cross-Platform', desc: 'React Native ile tek kod tabanından iOS ve Android\'e yayınlama.' },
    { icon: 'bi-bell', title: 'Push Notification', desc: 'Firebase Cloud Messaging ile akıllı bildirim sistemleri.' },
    { icon: 'bi-bar-chart-line', title: 'Analytics', desc: 'Mixpanel, Amplitude ve Firebase ile kullanıcı davranışı takibi.' },
    { icon: 'bi-shop', title: 'App Store Yayın', desc: 'App Store ve Google Play başvuru, inceleme ve yayınlama süreçleri.' },
  ];

  const stats = [
    { num: '80+', label: 'Yayınlanan Uygulama' },
    { num: '4.7', label: 'Ort. App Store Puanı' },
    { num: '2M+', label: 'Toplam İndirme' },
    { num: '12 Hafta', label: 'Ort. Geliştirme Süresi' },
  ];

  const process = [
    { step: '01', icon: 'bi-lightbulb', title: 'Konsept & UX', desc: 'Kullanıcı araştırması, wireframe ve interaktif prototip hazırlama.' },
    { step: '02', icon: 'bi-palette', title: 'UI Tasarım', desc: 'Platform kurallarına uygun, markanızı yansıtan görsel tasarım.' },
    { step: '03', icon: 'bi-code-slash', title: 'Geliştirme', desc: 'Agile metodoloji ile sprint bazlı geliştirme ve düzenli demo.' },
    { step: '04', icon: 'bi-rocket-takeoff', title: 'Test & Yayın', desc: 'Kapsamlı QA, beta test ve store yayınlama süreçleri.' },
  ];

  const technologies = ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase', 'GraphQL', 'Node.js', 'PostgreSQL'];

  return (
    <>
      <CustomCursor />
      <Navigation />

      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08, background: `radial-gradient(circle at 30% 50%, ${accent} 0%, transparent 60%)` }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/hizmetler" className="back-link">
            <i className="bi bi-arrow-left"></i> Tüm Hizmetler
          </Link>
          <div className="sec-tag" style={{ color: accent }}>Mobil Uygulama</div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -3, marginBottom: 20 }}>
            iOS & Android<br /><span style={{ color: accent }}>Mobil Uygulamalar</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600, marginBottom: 32 }}>
            React Native, Swift ve Kotlin ile native ve cross-platform uygulamalar.
            Tasarımdan App Store yayınına kadar uçtan uca hizmet.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.45)', marginBottom: 16 }}>
            <i className="bi bi-tag" style={{ marginRight: 6 }}></i>Başlangıç fiyatı: <strong style={{ color: accent }}>₺40.000</strong>&apos;den
          </p>
          <Link href="/#iletisim" className="cta-main" style={{ background: accent }}>
            Uygulama Geliştir <span className="ico"><i className="bi bi-arrow-right"></i></span>
          </Link>
        </div>
        <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,.08)', marginTop: 64 }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {stats.map((s, i) => (
                <div key={i} style={{ padding: '28px 20px', borderRight: i < 3 ? '1px solid rgba(255,255,255,.08)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 900, color: accent, lineHeight: 1, marginBottom: 6 }}>{s.num}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag">Hizmetler</div>
            <h2 className="sec-title">Mobil <em>Çözümlerimiz</em></h2>
            <p className="sec-sub">Her platformda mükemmel kullanıcı deneyimi sunuyoruz.</p>
          </Reveal>
          <Reveal stagger>
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
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag">Teknolojiler</div>
            <h2 className="sec-title">Kullandığımız <em>Teknolojiler</em></h2>
          </Reveal>
          <Reveal stagger>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 40 }}>
              {technologies.map((t, i) => (
                <span key={i} style={{ fontSize: 14, fontWeight: 700, padding: '10px 20px', borderRadius: 9999, border: `1.5px solid ${accent}25`, background: `${accent}08`, color: accent }}>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag" style={{ justifyContent: 'center' }}>Süreç</div>
            <h2 className="sec-title" style={{ textAlign: 'center' }}>Geliştirme <em>Sürecimiz</em></h2>
          </Reveal>
          <Reveal stagger>
            <div className="hiz-process-grid" style={{ marginTop: 48 }}>
              {process.map((item, i) => (
                <div key={i} style={{ padding: '32px 24px', borderRadius: 20, border: '1.5px solid var(--border)', background: '#fff' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 900, color: `${accent}15`, lineHeight: 1, marginBottom: 12 }}>{item.step}</div>
                  <i className={`bi ${item.icon}`} style={{ fontSize: 26, color: accent, marginBottom: 12, display: 'block' }}></i>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceCROSections slug="mobil-uygulama" accent={accent} />

      <section className="sec" style={{ background: 'var(--bg3)' }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-center">
              <div className="sec-tag" style={{ justifyContent: 'center' }}>Başlayalım</div>
              <h2 className="sec-title" style={{ textAlign: 'center' }}>Uygulamanızı <em>hayata</em> geçirelim</h2>
              <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
                Mobil uygulama fikrinizi gerçeğe dönüştürmek için hemen konuşalım.
              </p>
              <Link href="/#iletisim" className="cta-main" style={{ background: accent }}>
                Ücretsiz Keşif <span className="ico"><i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
