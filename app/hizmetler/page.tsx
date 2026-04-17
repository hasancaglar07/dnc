'use client';

import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';
import { services } from '@/data/services';

const serviceDetails: Record<number, { slug: string; features: string[]; tools: string[] }> = {
  1: { slug: 'produksiyon-filmleri', features: ['4K/8K Çekim', 'Senaryo Yazımı', 'Post-Prodüksiyon', 'Color Grading', 'Ses Tasarımı', 'Motion Graphics'], tools: ['RED V-RAPTOR 8K', 'Arri Alexa Mini', 'DaVinci Resolve', 'After Effects'] },
  2: { slug: 'ai-entegrasyonu', features: ['GPT-4 Chatbot', 'İçerik Otomasyonu', 'Veri Analizi', 'API Entegrasyon', 'Süreç Optimizasyonu', 'Custom AI Modelleri'], tools: ['OpenAI', 'LangChain', 'Python', 'TensorFlow'] },
  3: { slug: 'drone-cekim', features: ['4K Hava Çekimi', 'Thermal Kamera', 'Panoramik Görüntü', 'Lisanslı Operatör', 'İnşaat Takibi', 'Etkinlik Çekimi'], tools: ['DJI Mavic 3 Pro', 'DJI Inspire 3', 'Thermal Cam', 'Premiere Pro'] },
  4: { slug: 'web-tasarim', features: ['UI/UX Tasarım', 'Responsive Design', 'SEO Optimizasyonu', 'E-Ticaret', 'CMS Entegrasyonu', 'Performans'], tools: ['React', 'Next.js', 'Tailwind CSS', 'Figma', 'WordPress'] },
  5: { slug: 'mobil-uygulama', features: ['iOS Geliştirme', 'Android Geliştirme', 'Cross-Platform', 'Push Notification', 'Analytics', 'App Store Yayın'], tools: ['React Native', 'Swift', 'Kotlin', 'Firebase'] },
  6: { slug: 'mobil-oyun', features: ['Oyun Tasarımı', '3D Modelleme', 'Ses Efektleri', 'Monetizasyon', 'ASO', 'Multiplayer'], tools: ['Unity 3D', 'C#', 'Blender', 'FMOD'] },
  7: { slug: 'sosyal-medya', features: ['İçerik Stratejisi', 'Topluluk Yönetimi', 'Reklam Yönetimi', 'Influencer Marketing', 'Analiz & Raporlama', 'Kriz Yönetimi'], tools: ['Meta Business', 'Hootsuite', 'Canva', 'Google Analytics'] },
  8: { slug: 'e-ticaret-danismanligi', features: ['Pazar Yeri Entegrasyonu', 'Ödeme Altyapısı', 'Stok Yönetimi', 'Kargo Entegrasyonu', 'Satış Optimizasyonu', 'Müşteri Analizi'], tools: ['Shopify', 'WooCommerce', 'Trendyol API', 'Google Merchant'] },
  9: { slug: 'reklam-yonetimi', features: ['Arama Ağı Reklamları', 'Görüntülü Reklamlar', 'Video Reklamlar', 'Remarketing', 'A/B Test', 'Dönüşüm Takibi'], tools: ['Google Ads', 'Meta Ads Manager', 'TikTok Ads', 'Google Tag Manager'] },
};

const steps = [
  { step: '01', title: 'Keşif', desc: 'Projenizi dinliyor, hedeflerinizi ve ihtiyaçlarınızı belirliyoruz.', icon: 'bi-search' },
  { step: '02', title: 'Strateji', desc: 'Doğru çözümü tasarlıyor, yol haritasını çiziyoruz.', icon: 'bi-map' },
  { step: '03', title: 'Üretim', desc: 'Uzman ekibimizle projeyi hayata geçiriyoruz.', icon: 'bi-gear-wide-connected' },
  { step: '04', title: 'Teslimat', desc: 'Test, optimizasyon ve lansman ile projeyi tamamlıyoruz.', icon: 'bi-rocket-takeoff' },
];

export default function HizmetlerPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'radial-gradient(circle at 20% 50%, #F97316 0%, transparent 50%), radial-gradient(circle at 80% 80%, #6366F1 0%, transparent 50%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div className="sec-tag" style={{ color: 'var(--accent)' }}>Hizmetlerimiz</div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 20 }}>
              Dijital Dünyada<br /><span style={{ color: 'var(--accent)' }}>Tam Hizmet</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600 }}>
              Prodüksiyon, AI entegrasyonu, web-mobil geliştirme ve sosyal medya yönetimi —
              markanızın dijital dönüşümünde uçtan uca çözüm ortağınızız.
            </p>
          </Reveal>
        </div>
      </section>

      {/* All Services */}
      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {services.map((service) => {
              const detail = serviceDetails[service.id];
              return (
                <Reveal key={service.id}>
                  <div className="hiz-card">
                    {/* Header */}
                    <div className="hiz-card-header">
                      <div className="hiz-card-num" style={{
                        fontSize: '2.8rem', fontWeight: 900,
                        color: `${service.accent}25`, lineHeight: 1,
                      }}>
                        {service.number}
                      </div>
                      <div>
                        <h2 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 800, color: 'var(--text)', marginBottom: 6 }}>
                          <span style={{ color: service.accent }}>● </span>
                          {service.name}
                        </h2>
                        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>
                          {service.description}
                        </p>
                      </div>
                      <Link href={`/hizmetler/${detail?.slug || ''}`} className="svc-arr" aria-label={`${service.name} detayı`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                        </svg>
                      </Link>
                    </div>

                    {/* Body */}
                    <div className="hiz-card-body">
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>Özellikler</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {detail?.features.map((f, i) => (
                            <span key={i} style={{
                              fontSize: 13, fontWeight: 600, padding: '6px 14px',
                              borderRadius: 8, background: `${service.accent}08`,
                              color: service.accent, border: `1px solid ${service.accent}20`,
                            }}>{f}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>Teknolojiler</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {detail?.tools.map((t, i) => (
                            <span key={i} style={{
                              fontSize: 13, fontWeight: 600, padding: '6px 14px',
                              borderRadius: 8, background: 'var(--bg2)',
                              color: 'var(--text2)', border: '1px solid var(--border)',
                            }}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal>
            <div className="sec-tag" style={{ justifyContent: 'center' }}>Süreç</div>
            <h2 className="sec-title" style={{ textAlign: 'center' }}>Nasıl <em>Çalışıyoruz?</em></h2>
          </Reveal>
          <Reveal stagger>
            <div className="hiz-process-grid">
              {steps.map((item, i) => (
                <div key={i} style={{ padding: '32px 24px', borderRadius: 20, border: '1.5px solid var(--border)', background: 'var(--bg2)', textAlign: 'left' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 900, color: 'rgba(249,115,22,.1)', lineHeight: 1, marginBottom: 12 }}>{item.step}</div>
                  <i className={`bi ${item.icon}`} style={{ fontSize: 26, color: 'var(--accent)', marginBottom: 12, display: 'block' }}></i>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="sec" style={{ background: 'var(--bg3)' }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-center">
              <div className="sec-tag" style={{ justifyContent: 'center' }}>İletişim</div>
              <h2 className="sec-title">Projenizi <em>başlatalım</em> mı?</h2>
              <p className="sec-sub">Hangi hizmete ihtiyacınız olursa olsun, size özel bir çözüm üretiyoruz.</p>
              <Link href="/#iletisim" className="cta-main">
                Teklif Al
                <span className="ico">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
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
