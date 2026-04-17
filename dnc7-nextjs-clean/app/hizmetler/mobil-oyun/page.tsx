'use client';

import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import ServiceCROSections from '@/components/sections/ServiceCROSections';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

export default function MobilOyunPage() {
  const accent = '#EC4899';

  const features = [
    { icon: 'bi-controller', title: 'Oyun Tasarımı', desc: 'Oyun mekaniği, level design ve monetizasyon stratejisi ile kapsamlı oyun tasarımı.' },
    { icon: 'bi-box', title: '3D Modelleme', desc: 'Blender ve Maya ile karakter, ortam ve nesne 3D modelleme.' },
    { icon: 'bi-music-note-beamed', title: 'Ses Efektleri', desc: 'FMOD ile immersive ses tasarımı ve orijinal oyun müzikleri.' },
    { icon: 'bi-cash-coin', title: 'Monetizasyon', desc: 'IAP, rewarded ads ve abonelik modelleri ile gelir optimizasyonu.' },
    { icon: 'bi-google-play', title: 'ASO', desc: 'App Store Optimization ile organik indirmeleri artırma stratejisi.' },
    { icon: 'bi-people-fill', title: 'Multiplayer', desc: 'Photon ve Mirror Networking ile gerçek zamanlı çok oyunculu altyapı.' },
  ];

  const stats = [
    { num: '40+', label: 'Yayınlanan Oyun' },
    { num: '10M+', label: 'Toplam İndirme' },
    { num: '4.5+', label: 'Ort. Store Puanı' },
    { num: '%15', label: 'Ort. IAP Oranı' },
  ];

  const genres = [
    { icon: 'bi-lightning', title: 'Hyper-Casual', desc: 'Basit ama bağımlılık yapan mekanikler, hızlı geliştirme döngüsü.' },
    { icon: 'bi-puzzle', title: 'Puzzle', desc: 'Beyin egzersizi ve bulmaca oyunları, yüksek retansiyon.' },
    { icon: 'bi-trophy', title: 'Casual', desc: 'Geniş kitlelere hitap eden, günlük oturum oyunları.' },
    { icon: 'bi-map', title: 'Strateji', desc: 'Derinlikli strateji ve simülasyon oyunları, güçlü topluluk.' },
  ];

  const process = [
    { step: '01', icon: 'bi-lightbulb', title: 'Konsept', desc: 'Oyun mekaniği, hedef kitle ve monetizasyon modeli belirlenir.' },
    { step: '02', icon: 'bi-pencil-square', title: 'Prototip', desc: 'Core loop prototip ile oynanabilirlik ve eğlence faktörü test edilir.' },
    { step: '03', icon: 'bi-code-slash', title: 'Geliştirme', desc: 'Unity ile tam geliştirme, sanat, ses ve entegrasyonlar.' },
    { step: '04', icon: 'bi-rocket-takeoff', title: 'Soft Launch & Scale', desc: 'Soft launch, data analizi, optimizasyon ve küresel yayın.' },
  ];

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
          <div className="sec-tag" style={{ color: accent }}>Mobil Oyun</div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -3, marginBottom: 20 }}>
            Unity ile<br /><span style={{ color: accent }}>Mobil Oyun</span> Yapımı
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600, marginBottom: 32 }}>
            Hyper-casual'dan strateji oyunlarına — Unity 3D ile monetizasyon odaklı,
            milyonlarca indirme hedefleyen mobil oyunlar geliştiriyoruz.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.45)', marginBottom: 16 }}>
            <i className="bi bi-tag" style={{ marginRight: 6 }}></i>Başlangıç fiyatı: <strong style={{ color: accent }}>₺50.000</strong>&apos;den
          </p>
          <Link href="/#iletisim" className="cta-main" style={{ background: accent }}>
            Oyun Geliştir <span className="ico"><i className="bi bi-arrow-right"></i></span>
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
            <h2 className="sec-title">Oyun <em>Geliştirme</em> Hizmetlerimiz</h2>
            <p className="sec-sub">Oyun fikrinizden küresel store yayınına kadar her adım bizde.</p>
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
            <div className="sec-tag">Türler</div>
            <h2 className="sec-title">Uzman Olduğumuz <em>Oyun Türleri</em></h2>
          </Reveal>
          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, marginTop: 48 }}>
              {genres.map((g, i) => (
                <div key={i} style={{ padding: '32px 28px', borderRadius: 20, border: '1.5px solid var(--border)', background: 'var(--bg2)' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${accent}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <i className={`bi ${g.icon}`} style={{ fontSize: 24, color: accent }}></i>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>{g.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted)' }}>{g.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag" style={{ justifyContent: 'center' }}>Süreç</div>
            <h2 className="sec-title" style={{ textAlign: 'center' }}>Oyun <em>Geliştirme</em> Sürecimiz</h2>
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

      <ServiceCROSections slug="mobil-oyun" accent={accent} />

      <section className="sec" style={{ background: 'var(--bg3)' }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-center">
              <div className="sec-tag" style={{ justifyContent: 'center' }}>Başlayalım</div>
              <h2 className="sec-title" style={{ textAlign: 'center' }}>Oyun fikrinizi <em>milyonlara</em> ulaştıralım</h2>
              <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
                Oyun konseptinizi paylaşın, ücretsiz proje değerlendirmesi yapalım.
              </p>
              <Link href="/#iletisim" className="cta-main" style={{ background: accent }}>
                Ücretsiz Danışmanlık <span className="ico"><i className="bi bi-arrow-right"></i></span>
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
