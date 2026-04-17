'use client';

import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import ServiceCROSections from '@/components/sections/ServiceCROSections';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

export default function ETicaretDanismanligiPage() {
  const accent = '#14B8A6';

  const features = [
    { icon: 'bi-shop', title: 'Pazar Yeri Entegrasyonu', desc: 'Trendyol, Hepsiburada, Amazon ve N11 entegrasyonları ile çoklu kanal satışı.' },
    { icon: 'bi-credit-card', title: 'Ödeme Altyapısı', desc: 'Güvenli ödeme sistemleri, taksit seçenekleri ve fraud önleme çözümleri.' },
    { icon: 'bi-box-seam', title: 'Stok Yönetimi', desc: 'Gerçek zamanlı stok takibi, otomatik sipariş ve depo yönetim sistemi.' },
    { icon: 'bi-truck', title: 'Kargo Entegrasyonu', desc: 'Yurtiçi Kargo, Aras, MNG ve uluslararası kargo entegrasyonları.' },
    { icon: 'bi-graph-up-arrow', title: 'Satış Optimizasyonu', desc: 'Dönüşüm oranı optimizasyonu, sepet değeri artırma ve upsell stratejileri.' },
    { icon: 'bi-person-check', title: 'Müşteri Analizi', desc: 'Satın alma davranışı analizi, RFM segmentasyonu ve kişiselleştirme.' },
  ];

  const stats = [
    { num: '₺200M+', label: 'Yönetilen Satış Hacmi' },
    { num: '%45', label: 'Ort. Dönüşüm Artışı' },
    { num: '70+', label: 'E-Ticaret Müşterisi' },
    { num: '15+', label: 'Entegre Platform' },
  ];

  const platforms = [
    { name: 'Shopify', icon: 'bi-bag-check' },
    { name: 'WooCommerce', icon: 'bi-wordpress' },
    { name: 'Magento', icon: 'bi-grid' },
    { name: 'Trendyol', icon: 'bi-shop' },
    { name: 'Hepsiburada', icon: 'bi-bag' },
    { name: 'Amazon', icon: 'bi-box' },
    { name: 'Google Merchant', icon: 'bi-google' },
    { name: 'Meta Commerce', icon: 'bi-meta' },
  ];

  const process = [
    { step: '01', icon: 'bi-search', title: 'Pazar Analizi', desc: 'Rakip analizi, fiyatlandırma stratejisi ve pazar fırsatlarını belirleme.' },
    { step: '02', icon: 'bi-gear', title: 'Altyapı Kurulum', desc: 'Platform seçimi, entegrasyonlar ve ödeme sistemlerini hayata geçirme.' },
    { step: '03', icon: 'bi-rocket-takeoff', title: 'Lansman', desc: 'Ürün listeleme, SEO optimizasyonu ve ilk satış kampanyaları.' },
    { step: '04', icon: 'bi-bar-chart-line', title: 'Büyüme', desc: 'Veri analizine dayalı optimizasyon, ölçekleme ve yeni kanal açılımları.' },
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
          <div className="sec-tag" style={{ color: accent }}>E-Ticaret Danışmanlığı</div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -3, marginBottom: 20 }}>
            Online Satışlarınızı<br /><span style={{ color: accent }}>Büyütün</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600, marginBottom: 32 }}>
            Shopify, WooCommerce ve pazar yeri entegrasyonları ile e-ticaret altyapınızı güçlendirin.
            Veriye dayalı stratejilerle satışlarınızı artırın.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.45)', marginBottom: 16 }}>
            <i className="bi bi-tag" style={{ marginRight: 6 }}></i>Başlangıç fiyatı: <strong style={{ color: accent }}>₺10.000</strong>&apos;den
          </p>
          <Link href="/#iletisim" className="cta-main" style={{ background: accent }}>
            Ücretsiz E-Ticaret Analizi <span className="ico"><i className="bi bi-arrow-right"></i></span>
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
            <h2 className="sec-title">E-Ticaret <em>Çözümlerimiz</em></h2>
            <p className="sec-sub">Başlangıçtan büyümeye kadar her aşamada yanınızdayız.</p>
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
            <div className="sec-tag">Platformlar & Entegrasyonlar</div>
            <h2 className="sec-title">Çalıştığımız <em>Platformlar</em></h2>
            <p className="sec-sub">15+ platform ve pazar yeri ile entegrasyon deneyimine sahibiz.</p>
          </Reveal>
          <Reveal stagger>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 40 }}>
              {platforms.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 20px', borderRadius: 14, border: `1.5px solid ${accent}25`, background: `${accent}06` }}>
                  <i className={`bi ${p.icon}`} style={{ fontSize: 18, color: accent }}></i>
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{p.name}</span>
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
            <h2 className="sec-title" style={{ textAlign: 'center' }}>E-Ticaret <em>Sürecimiz</em></h2>
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

      <ServiceCROSections slug="e-ticaret-danismanligi" accent={accent} />

      <section className="sec" style={{ background: 'var(--dark)' }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-center" style={{ color: '#fff' }}>
              <div className="sec-tag" style={{ justifyContent: 'center', color: accent }}>Başlayalım</div>
              <h2 className="sec-title" style={{ textAlign: 'center', color: '#fff' }}>
                E-ticaret potansiyelinizi <em style={{ color: accent }}>keşfedelim</em>
              </h2>
              <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px', color: 'rgba(255,255,255,.55)' }}>
                Mevcut mağazanızı ücretsiz analiz edelim veya sıfırdan e-ticaret altyapınızı birlikte kuralım.
              </p>
              <Link href="/#iletisim" className="cta-main" style={{ background: accent }}>
                Ücretsiz Analiz İsteyin <span className="ico"><i className="bi bi-arrow-right"></i></span>
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
