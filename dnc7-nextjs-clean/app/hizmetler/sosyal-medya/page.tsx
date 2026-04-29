'use client';

import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import ServiceCROSections from '@/components/sections/ServiceCROSections';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

export default function SosyalMedyaPage() {
  const accent = '#F59E0B';

  const features = [
    { icon: 'bi-kanban', title: 'İçerik Stratejisi', desc: 'Markanıza özel içerik takvimi, ton ve mesaj stratejisi geliştiriyoruz.' },
    { icon: 'bi-people', title: 'Topluluk Yönetimi', desc: 'Yorumlar, DM\'ler ve etkileşimlere profesyonel ve zamanında yanıt.' },
    { icon: 'bi-megaphone', title: 'Reklam Yönetimi', desc: 'Meta, TikTok ve LinkedIn\'de hedef kitleye yönelik ücretli kampanyalar.' },
    { icon: 'bi-person-badge', title: 'Influencer Marketing', desc: 'Markanıza uygun influencer keşfi, anlaşma ve kampanya yönetimi.' },
    { icon: 'bi-graph-up', title: 'Analiz & Raporlama', desc: 'Aylık detaylı rapor, KPI takibi ve strateji optimizasyonu.' },
    { icon: 'bi-shield-exclamation', title: 'Kriz Yönetimi', desc: 'Olası itibar krizlerinde 7/24 hızlı müdahale ve iletişim planlaması.' },
  ];

  const stats = [
    { num: '200+', label: 'Yönetilen Hesap' },
    { num: '50M+', label: 'Toplam Erişim' },
    { num: '%380', label: 'Ort. Etkileşim Artışı' },
    { num: '4 Yıl', label: 'Sektör Deneyimi' },
  ];

  const platforms = [
    { icon: 'bi-instagram', name: 'Instagram', desc: 'Reels, Stories ve Feed içerikleri ile görsel marka kimliği.' },
    { icon: 'bi-tiktok', name: 'TikTok', desc: 'Viral potansiyelli kısa video içerikleri ve trend takibi.' },
    { icon: 'bi-linkedin', name: 'LinkedIn', desc: 'B2B iletişim, düşünce liderliği ve kurumsal içerikler.' },
    { icon: 'bi-youtube', name: 'YouTube', desc: 'Uzun form video içerikler, SEO optimizasyonu ve kanal büyütme.' },
  ];

  const process = [
    { step: '01', icon: 'bi-search', title: 'Analiz', desc: 'Mevcut hesap, rakip ve hedef kitle analizi ile fırsat belirleme.' },
    { step: '02', icon: 'bi-map', title: 'Strateji', desc: 'Platform seçimi, içerik türleri ve yayın takvimi planlaması.' },
    { step: '03', icon: 'bi-camera', title: 'Üretim', desc: 'Görsel, video ve metin içerikler ile hikaye anlatımı.' },
    { step: '04', icon: 'bi-bar-chart', title: 'Ölçüm & Optimizasyon', desc: 'Haftalık takip, A/B test ve aylık performans raporu.' },
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
          <div className="sec-tag" style={{ color: accent }}>Sosyal Medya</div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -3, marginBottom: 20 }}>
            Sosyal Medyada<br /><span style={{ color: accent }}>Fark Yaratın</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600, marginBottom: 32 }}>
            Instagram, TikTok, LinkedIn ve YouTube için strateji, içerik ve topluluk yönetimi.
            Veriye dayalı yaklaşımla markanızı büyütüyoruz.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.45)', marginBottom: 16 }}>
            <i className="bi bi-tag" style={{ marginRight: 6 }}></i>Aylık paketler: <strong style={{ color: accent }}>₺7.500</strong>&apos;den
          </p>
          <Link href="/iletisim" className="cta-main" style={{ background: accent }}>
            Ücretsiz Hesap Analizi <span className="ico"><i className="bi bi-arrow-right"></i></span>
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
            <h2 className="sec-title">Sosyal Medya <em>Çözümlerimiz</em></h2>
            <p className="sec-sub">İçerik üretiminden kriz yönetimine kadar tüm ihtiyaçlarınızı karşılıyoruz.</p>
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
            <div className="sec-tag">Platformlar</div>
            <h2 className="sec-title">Aktif Olduğumuz <em>Platformlar</em></h2>
          </Reveal>
          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginTop: 48 }}>
              {platforms.map((p, i) => (
                <div key={i} style={{ padding: '28px 24px', borderRadius: 20, border: '1.5px solid var(--border)', background: 'var(--bg2)' }}>
                  <i className={`bi ${p.icon}`} style={{ fontSize: 32, color: accent, marginBottom: 14, display: 'block' }}></i>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>{p.name}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted)' }}>{p.desc}</p>
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
            <h2 className="sec-title" style={{ textAlign: 'center' }}>Yönetim <em>Sürecimiz</em></h2>
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

      <ServiceCROSections slug="sosyal-medya" accent={accent} />

      <section className="sec" style={{ background: 'var(--bg3)' }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-center">
              <div className="sec-tag" style={{ justifyContent: 'center' }}>Başlayalım</div>
              <h2 className="sec-title" style={{ textAlign: 'center' }}>Sosyal medyada <em>öne çıkın</em></h2>
              <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
                Ücretsiz hesap analizi ile mevcut durumunuzu değerlendirelim, büyüme fırsatlarını ortaya çıkaralım.
              </p>
              <Link href="/iletisim" className="cta-main" style={{ background: accent }}>
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
