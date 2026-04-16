'use client';

import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';

export default function SosyalMedyaPage() {
  const accent = '#F59E0B';
  const features = [
    { icon: 'bi-pencil-square', title: 'İçerik Stratejisi', desc: 'Markanıza özel içerik planı, editoryal takvim ve kreatif konseptler.' },
    { icon: 'bi-chat-dots', title: 'Topluluk Yönetimi', desc: 'Yorum, mesaj ve etkileşim yönetimi ile sadık bir topluluk oluşturun.' },
    { icon: 'bi-megaphone', title: 'Reklam Yönetimi', desc: 'Meta ve TikTok reklamları ile organik büyümeyi destekleyin.' },
    { icon: 'bi-star', title: 'Influencer Marketing', desc: 'Doğru influencer eşleştirmesi ve kampanya yönetimi.' },
    { icon: 'bi-clipboard-data', title: 'Analiz & Raporlama', desc: 'Aylık performans raporları, rakip analizi ve büyüme önerileri.' },
    { icon: 'bi-shield-exclamation', title: 'Kriz Yönetimi', desc: 'Sosyal medya krizlerinde hızlı müdahale ve itibar koruma stratejileri.' },
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
          <div className="sec-tag" style={{ color: accent }}>Sosyal Medya Yönetimi</div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -3, marginBottom: 20 }}>
            Sosyal Medyada<br /><span style={{ color: accent }}>Güçlü Varlık</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600, marginBottom: 32 }}>
            Instagram, TikTok, LinkedIn ve YouTube için içerik stratejisi ve 
            topluluk yönetimi ile markanızı büyütün.
          </p>
          <Link href="/#iletisim" className="cta-main" style={{ background: accent }}>
            Ücretsiz Strateji Görüşmesi <span className="ico"><i className="bi bi-arrow-right"></i></span>
          </Link>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <div className="sec-tag">Hizmetler</div>
          <h2 className="sec-title">Sosyal Medya <em>Çözümlerimiz</em></h2>
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
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--bg3)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="cta-center">
            <div className="sec-tag" style={{ justifyContent: 'center' }}>Başlayalım</div>
            <h2 className="sec-title" style={{ textAlign: 'center' }}>
              Sosyal medyanızı <em>profesyonellere</em> bırakın
            </h2>
            <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
              Markanız için özel sosyal medya stratejisi oluşturalım.
            </p>
            <Link href="/#iletisim" className="cta-main" style={{ background: accent }}>
              Teklif Al <span className="ico"><i className="bi bi-arrow-right"></i></span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
