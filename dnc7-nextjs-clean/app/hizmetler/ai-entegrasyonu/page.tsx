'use client';

import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';

export default function AIEntegrasyonuPage() {
  const accent = '#6366F1';
  const features = [
    { icon: 'bi-robot', title: 'GPT-4 Chatbot', desc: 'Müşteri hizmetleri ve satış süreçlerinizi 7/24 çalışan akıllı chatbotlarla otomatikleştirin.' },
    { icon: 'bi-gear-wide-connected', title: 'Süreç Otomasyonu', desc: 'Tekrarlayan iş süreçlerini AI ile otomatikleştirerek verimliliği artırın.' },
    { icon: 'bi-file-earmark-text', title: 'İçerik Üretimi', desc: 'Blog, sosyal medya ve ürün açıklamaları için AI destekli içerik oluşturma.' },
    { icon: 'bi-graph-up-arrow', title: 'Veri Analizi', desc: 'Büyük veri setlerinden anlamlı içgörüler çıkaran AI analiz çözümleri.' },
    { icon: 'bi-plug', title: 'API Entegrasyon', desc: 'Mevcut sistemlerinize OpenAI, Claude ve diğer AI API entegrasyonları.' },
    { icon: 'bi-cpu', title: 'Custom AI Modelleri', desc: 'İşletmenize özel eğitilmiş yapay zeka modelleri geliştiriyoruz.' },
  ];

  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08, background: `radial-gradient(circle at 30% 50%, ${accent} 0%, transparent 60%)` }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/hizmetler" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.5)', marginBottom: 32 }}>
            <i className="bi bi-arrow-left"></i> Tüm Hizmetler
          </Link>
          <div className="sec-tag" style={{ color: accent }}>AI Entegrasyonu</div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -3, marginBottom: 20 }}>
            Yapay Zeka ile<br /><span style={{ color: accent }}>İş Süreçlerinizi</span> Dönüştürün
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600, marginBottom: 32 }}>
            GPT-4 tabanlı chatbotlar, içerik otomasyonu ve AI destekli iş süreci optimizasyonu 
            ile dijital dönüşümünüzü hızlandırın.
          </p>
          <Link href="/#iletisim" className="cta-main" style={{ background: accent }}>
            Ücretsiz AI Danışmanlığı <span className="ico"><i className="bi bi-arrow-right"></i></span>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <div className="sec-tag">Hizmetler</div>
          <h2 className="sec-title">AI <em>Çözümlerimiz</em></h2>
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

      {/* CTA */}
      <section className="sec" style={{ background: 'var(--bg3)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div className="sec-tag" style={{ justifyContent: 'center' }}>Başlayalım</div>
            <h2 className="sec-title" style={{ textAlign: 'center' }}>
              AI ile işinizi <em>geleceğe</em> taşıyın
            </h2>
            <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
              İşletmenize özel AI çözümlerini birlikte keşfedelim.
            </p>
            <Link href="/#iletisim" className="cta-main" style={{ background: accent }}>
              Ücretsiz Danışmanlık <span className="ico"><i className="bi bi-arrow-right"></i></span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
