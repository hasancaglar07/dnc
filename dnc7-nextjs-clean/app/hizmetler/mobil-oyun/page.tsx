'use client';

import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';

export default function MobilOyunPage() {
  const accent = '#EC4899';
  const features = [
    { icon: 'bi-controller', title: 'Oyun Tasarımı', desc: 'Game design document, mekanik tasarımı ve level design ile sağlam temeller.' },
    { icon: 'bi-box', title: '3D Modelleme', desc: 'Karakter, ortam ve obje modelleme ile görsel olarak etkileyici oyunlar.' },
    { icon: 'bi-music-note-beamed', title: 'Ses Efektleri', desc: 'Orijinal müzik ve ses efektleri ile oyun deneyimini zenginleştirin.' },
    { icon: 'bi-currency-dollar', title: 'Monetizasyon', desc: 'In-app purchase, rewarded ads ve subscription modelleri ile gelir stratejisi.' },
    { icon: 'bi-graph-up', title: 'ASO', desc: 'App Store Optimization ile oyununuzun indirme sayısını artırın.' },
    { icon: 'bi-people', title: 'Multiplayer', desc: 'Gerçek zamanlı ve sıra tabanlı multiplayer altyapı geliştirme.' },
  ];

  return (
    <>
      <CustomCursor />
      <Navigation />

      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08, background: `radial-gradient(circle at 30% 50%, ${accent} 0%, transparent 60%)` }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/hizmetler" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.5)', marginBottom: 32 }}>
            <i className="bi bi-arrow-left"></i> Tüm Hizmetler
          </Link>
          <div className="sec-tag" style={{ color: accent }}>Mobil Oyun Yapımı</div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -3, marginBottom: 20 }}>
            Unity 3D ile<br /><span style={{ color: accent }}>Mobil Oyunlar</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600, marginBottom: 32 }}>
            Casual, hyper-casual ve strateji oyunları. Konseptten markete kadar 
            tam kapsamlı oyun geliştirme hizmeti.
          </p>
          <Link href="/#iletisim" className="cta-main" style={{ background: accent }}>
            Oyun Fikrinizi Paylaşın <span className="ico"><i className="bi bi-arrow-right"></i></span>
          </Link>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <div className="sec-tag">Hizmetler</div>
          <h2 className="sec-title">Oyun <em>Çözümlerimiz</em></h2>
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
              Oyun fikrinizi <em>hayata geçirelim</em>
            </h2>
            <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
              Oyun konseptinizi birlikte değerlendirelim.
            </p>
            <Link href="/#iletisim" className="cta-main" style={{ background: accent }}>
              Ücretsiz Konsept Görüşmesi <span className="ico"><i className="bi bi-arrow-right"></i></span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
