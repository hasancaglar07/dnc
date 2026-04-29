'use client';

import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import ServiceCROSections from '@/components/sections/ServiceCROSections';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

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

  const stats = [
    { num: '60+', label: 'AI Projesi' },
    { num: '%70', label: 'Ort. Verimlilik Artışı' },
    { num: '3 Hafta', label: 'Ort. Entegrasyon Süresi' },
    { num: '24/7', label: 'Kesintisiz Çalışma' },
  ];

  const process = [
    { step: '01', icon: 'bi-search', title: 'İhtiyaç Analizi', desc: 'İş süreçlerinizi ve AI\'nın değer katabileceği alanları birlikte belirleriz.' },
    { step: '02', icon: 'bi-diagram-3', title: 'Çözüm Tasarımı', desc: 'İşletmenize özel AI mimarisi ve entegrasyon planı hazırlarız.' },
    { step: '03', icon: 'bi-code-square', title: 'Geliştirme', desc: 'API entegrasyonları, custom model eğitimi ve arayüz geliştirme.' },
    { step: '04', icon: 'bi-rocket-takeoff', title: 'Lansman & Destek', desc: 'Test, optimizasyon, yayına alma ve sürekli izleme ile destek.' },
  ];

  const useCases = [
    { icon: 'bi-headset', title: 'Müşteri Hizmetleri', desc: 'Sık soruları otomatik yanıtlayan, karmaşık konuları insan temsilcisine yönlendiren chatbot.' },
    { icon: 'bi-pen', title: 'İçerik Otomasyonu', desc: 'Ürün açıklamaları, blog yazıları ve sosyal medya içeriklerini otomatik üret.' },
    { icon: 'bi-bar-chart', title: 'Satış Tahmini', desc: 'Geçmiş verilerden öğrenerek stok planlaması ve satış tahminleri.' },
    { icon: 'bi-translate', title: 'Çok Dilli Destek', desc: 'Anında çeviri ve lokalizasyon ile global pazarlara açıl.' },
  ];

  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08, background: `radial-gradient(circle at 30% 50%, ${accent} 0%, transparent 60%), radial-gradient(circle at 80% 20%, #F97316 0%, transparent 50%)` }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/hizmetler" className="back-link">
            <i className="bi bi-arrow-left"></i> Tüm Hizmetler
          </Link>
          <div className="sec-tag" style={{ color: accent }}>AI Entegrasyonu</div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -3, marginBottom: 20 }}>
            Yapay Zeka ile<br /><span style={{ color: accent }}>İş Süreçlerini</span> Dönüştürün
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600, marginBottom: 32 }}>
            GPT-4 tabanlı chatbotlar, içerik otomasyonu ve AI destekli iş süreci optimizasyonu
            ile dijital dönüşümünüzü hızlandırın.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.45)', marginBottom: 16 }}>
            <i className="bi bi-tag" style={{ marginRight: 6 }}></i>Başlangıç fiyatı: <strong style={{ color: accent }}>₺20.000</strong>&apos;den
          </p>
          <Link href="/iletisim" className="cta-main" style={{ background: accent }}>
            Ücretsiz AI Danışmanlığı <span className="ico"><i className="bi bi-arrow-right"></i></span>
          </Link>
        </div>

        {/* Stats strip */}
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
            <h2 className="sec-title">AI <em>Çözümlerimiz</em></h2>
            <p className="sec-sub">İşletmenizin her alanında yapay zekayı devreye sokuyoruz.</p>
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

      {/* Use Cases */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag">Kullanım Alanları</div>
            <h2 className="sec-title">AI Nerede <em>Fark Yaratır?</em></h2>
            <p className="sec-sub">Farklı sektörlerde somut değer katan AI uygulamaları.</p>
          </Reveal>
          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, marginTop: 48 }}>
              {useCases.map((u, i) => (
                <div key={i} style={{ padding: '32px 28px', borderRadius: 20, border: '1.5px solid var(--border)', background: 'var(--bg2)', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${accent}10`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`bi ${u.icon}`} style={{ fontSize: 24, color: accent }}></i>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--text)' }}>{u.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted)' }}>{u.desc}</p>
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
            <h2 className="sec-title" style={{ textAlign: 'center' }}>Nasıl <em>Çalışıyoruz?</em></h2>
          </Reveal>
          <Reveal stagger>
            <div className="hiz-process-grid" style={{ marginTop: 48 }}>
              {process.map((item, i) => (
                <div key={i} style={{ padding: '32px 24px', borderRadius: 20, border: '1.5px solid var(--border)', background: '#fff', textAlign: 'left' }}>
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

      <ServiceCROSections slug="ai-entegrasyonu" accent={accent} />

      {/* CTA */}
      <section className="sec" style={{ background: 'var(--dark)' }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-center" style={{ color: '#fff' }}>
              <div className="sec-tag" style={{ justifyContent: 'center', color: accent }}>Başlayalım</div>
              <h2 className="sec-title" style={{ textAlign: 'center', color: '#fff' }}>
                AI ile işinizi <em style={{ color: accent }}>geleceğe</em> taşıyın
              </h2>
              <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px', color: 'rgba(255,255,255,.55)' }}>
                İşletmenize özel AI çözümlerini birlikte keşfedelim. Ücretsiz danışmanlık görüşmesi için hemen ulaşın.
              </p>
              <Link href="/iletisim" className="cta-main" style={{ background: accent }}>
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
