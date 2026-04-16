'use client';

import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';

export default function EticaretDanismanligiPage() {
  const features = [
    { icon: 'bi-shop', title: 'Mağaza Kurulumu', desc: 'Shopify, WooCommerce veya özel e-ticaret altyapısı ile mağazanızı kuruyoruz.' },
    { icon: 'bi-graph-up-arrow', title: 'Satış Optimizasyonu', desc: 'Dönüşüm oranlarını artırmak için UX, fiyatlandırma ve ürün stratejileri.' },
    { icon: 'bi-box-seam', title: 'Pazar Yeri Entegrasyonu', desc: 'Trendyol, Hepsiburada, Amazon ve N11 mağaza yönetimi ve entegrasyonu.' },
    { icon: 'bi-credit-card', title: 'Ödeme Altyapısı', desc: 'iyzico, PayTR, Stripe gibi ödeme sistemlerinin entegrasyonu ve güvenlik.' },
    { icon: 'bi-truck', title: 'Kargo & Lojistik', desc: 'Aras, MNG, Yurtiçi kargo entegrasyonu, otomatik etiketleme ve takip.' },
    { icon: 'bi-bar-chart-line', title: 'Analiz & Raporlama', desc: 'Satış, müşteri ve stok analitiği. Veri odaklı büyüme stratejileri.' },
  ];

  const packages = [
    { name: 'Başlangıç', price: '₺15.000', features: ['Mağaza Kurulumu', '5 Ürün Girişi', 'Ödeme Entegrasyonu', '1 Ay Destek'] },
    { name: 'Büyüme', price: '₺45.000', features: ['Mağaza + Pazar Yeri', '50 Ürün Girişi', 'SEO Optimizasyonu', 'Kargo Entegrasyonu', '3 Ay Destek'] },
    { name: 'Kurumsal', price: '₺120.000+', features: ['Özel Altyapı', 'Sınırsız Ürün', 'ERP Entegrasyonu', 'Çoklu Pazar Yeri', '12 Ay Destek', 'Danışmanlık'] },
  ];

  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08, background: 'radial-gradient(circle at 30% 50%, #14B8A6 0%, transparent 60%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/hizmetler" className="back-link">
            <i className="bi bi-arrow-left"></i> Tüm Hizmetler
          </Link>
          <div className="sec-tag" style={{ color: '#14B8A6' }}>E-Ticaret Danışmanlığı</div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -3, marginBottom: 20 }}>
            Online Satışta<br /><span style={{ color: '#14B8A6' }}>Büyüme Ortağınız</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600, marginBottom: 32 }}>
            Mağaza kurulumundan pazar yeri entegrasyonuna, ödeme sistemlerinden lojistiğe — 
            e-ticaret operasyonunuzun her adımında yanınızdayız.
          </p>
          <Link href="/#iletisim" className="cta-main" style={{ background: '#14B8A6' }}>
            Ücretsiz Danışmanlık <span className="ico"><i className="bi bi-arrow-right"></i></span>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <div className="sec-tag">Hizmetler</div>
          <h2 className="sec-title">Neler <em>Yapıyoruz?</em></h2>
          <div className="feature-grid">
            {features.map((f, i) => (
              <div key={i} style={{ padding: '28px 24px', borderRadius: 20, border: '1.5px solid var(--border)', background: '#fff' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: '#14B8A612', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <i className={`bi ${f.icon}`} style={{ fontSize: 22, color: '#14B8A6' }}></i>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="sec-tag" style={{ justifyContent: 'center' }}>Paketler</div>
          <h2 className="sec-title" style={{ textAlign: 'center' }}>Fiyat <em>Paketleri</em></h2>
          <div className="package-grid">
            {packages.map((pkg, i) => (
              <div key={i} style={{ padding: '40px 32px', borderRadius: 24, border: i === 1 ? '2px solid #14B8A6' : '1.5px solid var(--border)', background: i === 1 ? '#14B8A605' : '#fff', position: 'relative' }}>
                {i === 1 && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#14B8A6', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 16px', borderRadius: 9999, letterSpacing: 1, textTransform: 'uppercase' }}>Popüler</div>}
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>{pkg.name}</h3>
                <div style={{ fontSize: 32, fontWeight: 900, color: '#14B8A6', marginBottom: 24 }}>{pkg.price}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, textAlign: 'left' }}>
                  {pkg.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text2)' }}>
                      <i className="bi bi-check-circle-fill" style={{ color: '#14B8A6', fontSize: 16 }}></i> {f}
                    </div>
                  ))}
                </div>
                <Link href="/#iletisim" className="cta-main" style={{ background: i === 1 ? '#14B8A6' : 'var(--text)', marginTop: 28, width: '100%', justifyContent: 'center' }}>
                  Teklif Al
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
