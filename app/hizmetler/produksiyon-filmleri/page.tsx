'use client';

import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import ServiceCROSections from '@/components/sections/ServiceCROSections';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

export default function ProduksiyonFilmleriPage() {
  const accent = '#F97316';

  const features = [
    { icon: 'bi-camera-reels', title: '4K / 8K Video', desc: 'RED V-RAPTOR ve Arri Alexa ile sinema kalitesinde kurumsal ve reklam filmleri.' },
    { icon: 'bi-journal-text', title: 'Senaryo Yazımı', desc: 'Markanızın hikayesini anlatan profesyonel senaryo ve storyboard hazırlığı.' },
    { icon: 'bi-scissors', title: 'Post-Prodüksiyon', desc: 'Kurgu, renk düzeltme ve görsel efektler ile kusursuz son ürün.' },
    { icon: 'bi-palette2', title: 'Color Grading', desc: 'DaVinci Resolve ile profesyonel renk grading ve sinematik görünüm.' },
    { icon: 'bi-soundwave', title: 'Ses Tasarımı', desc: 'Orijinal müzik, seslendirme ve ses efektleri ile etkileyici ses deneyimi.' },
    { icon: 'bi-stars', title: 'Motion Graphics', desc: 'After Effects ile animasyon, infografik ve görsel efekt prodüksiyonu.' },
  ];

  const stats = [
    { num: '150+', label: 'Üretilen Film' },
    { num: '8K', label: 'Max Çözünürlük' },
    { num: '500K+', label: 'Ort. İlk Hafta İzlenme' },
    { num: '%85', label: 'Ort. İzlenme Oranı' },
  ];

  const process = [
    { step: '01', icon: 'bi-chat-quote', title: 'Brifing', desc: 'Hedeflerinizi, hedef kitlenizi ve marka kimliğinizi derinlemesine anlıyoruz.' },
    { step: '02', icon: 'bi-journal-text', title: 'Senaryo & Storyboard', desc: 'Yaratıcı ekibimiz senaryo yazar, görsel dili storyboard ile belirler.' },
    { step: '03', icon: 'bi-camera-video', title: 'Çekim', desc: 'Profesyonel ekipman ve deneyimli ekiple stüdyo veya lokasyon çekimleri.' },
    { step: '04', icon: 'bi-film', title: 'Post-Prodüksiyon', desc: 'Kurgu, renk grading, ses tasarımı ve son onayın ardından teslimat.' },
  ];

  const equipment = [
    { name: 'RED V-RAPTOR 8K', icon: 'bi-camera-reels' },
    { name: 'Arri Alexa Mini LF', icon: 'bi-camera-reels' },
    { name: 'DJI Ronin 4D', icon: 'bi-camera-video' },
    { name: 'DaVinci Resolve', icon: 'bi-palette2' },
    { name: 'Adobe After Effects', icon: 'bi-stars' },
    { name: 'Pro Tools', icon: 'bi-soundwave' },
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
          <div className="sec-tag" style={{ color: accent }}>Prodüksiyon Filmleri</div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -3, marginBottom: 20 }}>
            Sinematik<br /><span style={{ color: accent }}>Video Prodüksiyon</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600, marginBottom: 32 }}>
            Kurumsal tanıtım, reklam ve sinematik video prodüksiyonu.
            Senaryo yazımından post-prodüksiyona, 4K/8K çözünürlük ile eksiksiz hizmet.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.45)', marginBottom: 16 }}>
            <i className="bi bi-tag" style={{ marginRight: 6 }}></i>Başlangıç fiyatı: <strong style={{ color: accent }}>₺25.000</strong>&apos;den
          </p>
          <Link href="/iletisim" className="cta-main" style={{ background: accent }}>
            Proje Başlat <span className="ico"><i className="bi bi-arrow-right"></i></span>
          </Link>
        </div>

        <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,.08)', marginTop: 64 }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {stats.map((s, i) => (
                <div key={i} style={{ padding: '28px 20px', borderRight: i < 3 ? '1px solid rgba(255,255,255,.08)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, color: accent, lineHeight: 1, marginBottom: 6 }}>{s.num}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag">Hizmetler</div>
            <h2 className="sec-title">Prodüksiyon <em>Çözümlerimiz</em></h2>
            <p className="sec-sub">Senaryo yazımından teslimat aşamasına kadar her şeyi üstleniyoruz.</p>
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

      {/* Equipment */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag">Ekipman</div>
            <h2 className="sec-title">Profesyonel <em>Ekipman</em> Parkuru</h2>
            <p className="sec-sub">En son teknoloji ekipmanlarla en yüksek kaliteyi sunuyoruz.</p>
          </Reveal>
          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 48 }}>
              {equipment.map((e, i) => (
                <div key={i} style={{ padding: '24px 20px', borderRadius: 16, border: '1.5px solid var(--border)', background: 'var(--bg2)', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${accent}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`bi ${e.icon}`} style={{ fontSize: 20, color: accent }}></i>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{e.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag" style={{ justifyContent: 'center' }}>Süreç</div>
            <h2 className="sec-title" style={{ textAlign: 'center' }}>Prodüksiyon <em>Sürecimiz</em></h2>
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

      <ServiceCROSections slug="produksiyon-filmleri" accent={accent} />

      {/* CTA */}
      <section className="sec" style={{ background: 'var(--bg3)' }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-center">
              <div className="sec-tag" style={{ justifyContent: 'center' }}>Başlayalım</div>
              <h2 className="sec-title" style={{ textAlign: 'center' }}>
                Markanızın hikayesini <em>anlatmaya</em> hazır mısınız?
              </h2>
              <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
                Prodüksiyon ihtiyaçlarınız için hemen iletişime geçin.
              </p>
              <Link href="/iletisim" className="cta-main" style={{ background: accent }}>
                Ücretsiz Keşif Toplantısı <span className="ico"><i className="bi bi-arrow-right"></i></span>
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
