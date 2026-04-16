'use client';

import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';

export default function ReklamYonetimiPage() {
  const features = [
    { icon: 'bi-google', title: 'Google Ads', desc: 'Arama ağı, görüntülü ağ, alışveriş ve YouTube reklamları ile hedef kitlenize ulaşın.' },
    { icon: 'bi-meta', title: 'Meta Ads', desc: 'Facebook ve Instagram reklamları ile sosyal medyada görünürlüğünüzü artırın.' },
    { icon: 'bi-tiktok', title: 'TikTok Ads', desc: 'Gen Z ve Millennial kitlelere TikTok reklam kampanyaları ile ulaşın.' },
    { icon: 'bi-bullseye', title: 'Remarketing', desc: 'Sizi ziyaret eden ama dönüşüm yapmayan kullanıcıları geri kazanın.' },
    { icon: 'bi-clipboard-data', title: 'A/B Test', desc: 'Reklam metin, görsel ve hedefleme seçeneklerini test ederek en iyi performansı bulun.' },
    { icon: 'bi-funnel', title: 'Dönüşüm Takibi', desc: 'Google Tag Manager, Meta Pixel ve sunucu taraflı izleme ile eksiksiz veri.' },
  ];

  const stats = [
    { num: '500+', label: 'Yönetilen Kampanya' },
    { num: '₺50M+', label: 'Reklam Bütçesi' },
    { num: '%340', label: 'Ort. ROAS Artışı' },
    { num: '120+', label: 'Mutlu Müşteri' },
  ];

  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08, background: 'radial-gradient(circle at 30% 50%, #EF4444 0%, transparent 60%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/hizmetler" className="back-link">
            <i className="bi bi-arrow-left"></i> Tüm Hizmetler
          </Link>
          <div className="sec-tag" style={{ color: '#EF4444' }}>Reklam Yönetimi</div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -3, marginBottom: 20 }}>
            ROI Odaklı<br /><span style={{ color: '#EF4444' }}>Dijital Reklam</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600, marginBottom: 32 }}>
            Google Ads, Meta Ads ve TikTok Ads üzerinde data-driven kampanyalar. 
            Her kuruşunuzun geri dönüşünü maksimize ediyoruz.
          </p>
          <Link href="/#iletisim" className="cta-main" style={{ background: '#EF4444' }}>
            Ücretsiz Reklam Analizi <span className="ico"><i className="bi bi-arrow-right"></i></span>
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-sec" style={{ padding: '0' }}>
        <div className="wrap">
          <div className="stats-g">
            {stats.map((s, i) => (
              <div key={i} className="stat-b">
                <div className="stat-n">{s.num}</div>
                <div className="stat-l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <div className="sec-tag">Hizmetler</div>
          <h2 className="sec-title">Reklam <em>Çözümlerimiz</em></h2>
          <div className="feature-grid">
            {features.map((f, i) => (
              <div key={i} style={{ padding: '28px 24px', borderRadius: 20, border: '1.5px solid var(--border)', background: '#fff' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: '#EF444412', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <i className={`bi ${f.icon}`} style={{ fontSize: 22, color: '#EF4444' }}></i>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="sec-tag" style={{ justifyContent: 'center' }}>Süreç</div>
          <h2 className="sec-title" style={{ textAlign: 'center' }}>Reklam <em>Sürecimiz</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 48 }}>
            {[
              { step: '01', title: 'Analiz', desc: 'Mevcut hesap, rakip ve pazar analizi.', icon: 'bi-search' },
              { step: '02', title: 'Strateji', desc: 'Hedef kitle, bütçe ve kanal planlaması.', icon: 'bi-diagram-3' },
              { step: '03', title: 'Lansman', desc: 'Kampanya kurulumu, reklam metinleri ve görseller.', icon: 'bi-play-circle' },
              { step: '04', title: 'Optimizasyon', desc: 'Sürekli A/B test, bid yönetimi ve ölçekleme.', icon: 'bi-sliders' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '32px 24px', borderRadius: 20, border: '1.5px solid var(--border)', background: 'var(--bg2)' }}>
                <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#EF444415', lineHeight: 1, marginBottom: 12 }}>{item.step}</div>
                <i className={`bi ${item.icon}`} style={{ fontSize: 28, color: '#EF4444', marginBottom: 12, display: 'block' }}></i>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted)' }}>{item.desc}</p>
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
              Reklam bütçenizden <em>maksimum</em> verim alın
            </h2>
            <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
              Ücretsiz reklam hesap analizi ile mevcut durumunuzu değerlendirelim.
            </p>
            <Link href="/#iletisim" className="cta-main" style={{ background: '#EF4444' }}>
              Ücretsiz Analiz İsteyin <span className="ico"><i className="bi bi-arrow-right"></i></span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
