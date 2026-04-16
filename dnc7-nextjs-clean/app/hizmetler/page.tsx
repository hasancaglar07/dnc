'use client';

import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import { services } from '@/data/services';

const serviceDetails: Record<number, { slug: string; features: string[]; tools: string[] }> = {
  1: { slug: 'drone-cekim', features: ['4K/8K Çekim', 'Senaryo Yazımı', 'Post-Prodüksiyon', 'Color Grading', 'Ses Tasarımı', 'Motion Graphics'], tools: ['RED V-RAPTOR 8K', 'Arri Alexa Mini', 'DaVinci Resolve', 'After Effects'] },
  2: { slug: 'ai-entegrasyonu', features: ['GPT-4 Chatbot', 'İçerik Otomasyonu', 'Veri Analizi', 'API Entegrasyon', 'Süreç Optimizasyonu', 'Custom AI Modelleri'], tools: ['OpenAI', 'LangChain', 'Python', 'TensorFlow'] },
  3: { slug: 'drone-cekim', features: ['4K Hava Çekimi', 'Thermal Kamera', 'Panoramik Görüntü', 'Lisanslı Operatör', 'İnşaat Takibi', 'Etkinlik Çekimi'], tools: ['DJI Mavic 3 Pro', 'DJI Inspire 3', 'Thermal Cam', 'Premiere Pro'] },
  4: { slug: 'web-tasarim', features: ['UI/UX Tasarım', 'Responsive Design', 'SEO Optimizasyonu', 'E-Ticaret', 'CMS Entegrasyonu', 'Performans'], tools: ['React', 'Next.js', 'Tailwind CSS', 'Figma', 'WordPress'] },
  5: { slug: 'mobil-uygulama', features: ['iOS Geliştirme', 'Android Geliştirme', 'Cross-Platform', 'Push Notification', 'Analytics', 'App Store Yayın'], tools: ['React Native', 'Swift', 'Kotlin', 'Firebase'] },
  6: { slug: 'mobil-oyun', features: ['Oyun Tasarımı', '3D Modelleme', 'Ses Efektleri', 'Monetizasyon', 'ASO', 'Multiplayer'], tools: ['Unity 3D', 'C#', 'Blender', 'FMOD'] },
  7: { slug: 'sosyal-medya', features: ['İçerik Stratejisi', 'Topluluk Yönetimi', 'Reklam Yönetimi', 'Influencer Marketing', 'Analiz & Raporlama', 'Kriz Yönetimi'], tools: ['Meta Business', 'Hootsuite', 'Canva', 'Google Analytics'] },
  8: { slug: 'e-ticaret-danismanligi', features: ['Pazar Yeri Entegrasyonu', 'Ödeme Altyapısı', 'Stok Yönetimi', 'Kargo Entegrasyonu', 'Satış Optimizasyonu', 'Müşteri Analizi'], tools: ['Shopify', 'WooCommerce', 'Trendyol API', 'Google Merchant'] },
  9: { slug: 'reklam-yonetimi', features: ['Arama Ağı Reklamları', 'Görüntülü Reklamlar', 'Video Reklamlar', 'Remarketing', 'A/B Test', 'Dönüşüm Takibi'], tools: ['Google Ads', 'Meta Ads Manager', 'TikTok Ads', 'Google Tag Manager'] },
};

export default function HizmetlerPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <section style={{ paddingTop: 160, paddingBottom: 80, background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'radial-gradient(circle at 20% 50%, #F97316 0%, transparent 50%), radial-gradient(circle at 80% 80%, #6366F1 0%, transparent 50%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="sec-tag" style={{ color: 'var(--accent)' }}>Hizmetlerimiz</div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -3, marginBottom: 20 }}>
            Dijital Dünyada<br /><span style={{ color: 'var(--accent)' }}>Tam Hizmet</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600 }}>
            Prodüksiyon, AI entegrasyonu, web-mobil geliştirme ve sosyal medya yönetimi — 
            markanızın dijital dönüşümünde uçtan uca çözüm ortağınızız.
          </p>
        </div>
      </section>

      {/* All Services */}
      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {services.map((service, idx) => {
              const detail = serviceDetails[service.id];
              return (
                <div
                  key={service.id}
                  style={{
                    background: '#fff',
                    border: '1.5px solid var(--border)',
                    borderRadius: 24,
                    overflow: 'hidden',
                    transition: 'all .3s var(--ease)',
                  }}
                >
                  {/* Header */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr auto',
                    alignItems: 'center',
                    gap: 24,
                    padding: '32px 36px',
                    borderBottom: '1px solid var(--border)',
                  }}>
                    <div style={{
                      fontSize: '2.8rem',
                      fontWeight: 900,
                      color: `${service.accent}25`,
                      lineHeight: 1,
                    }}>
                      {service.number}
                    </div>
                    <div>
                      <h2 style={{
                        fontSize: '1.4rem',
                        fontWeight: 800,
                        color: 'var(--text)',
                        marginBottom: 6,
                      }}>
                        <span style={{ color: service.accent }}>●</span>{' '}
                        {service.name}
                      </h2>
                      <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 600 }}>
                        {service.description}
                      </p>
                    </div>
                    <Link
                      href={`/hizmetler/${detail?.slug || ''}`}
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        border: '2px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--muted)',
                        transition: 'all .2s',
                        flexShrink: 0,
                      }}
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </div>

                  {/* Details */}
                  <div style={{ padding: '28px 36px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                    {/* Features */}
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14 }}>Özellikler</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {detail?.features.map((f, i) => (
                          <span key={i} style={{
                            fontSize: 13,
                            fontWeight: 600,
                            padding: '6px 14px',
                            borderRadius: 8,
                            background: `${service.accent}08`,
                            color: service.accent,
                            border: `1px solid ${service.accent}20`,
                          }}>
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tags / Tools */}
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14 }}>Teknolojiler</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {detail?.tools.map((t, i) => (
                          <span key={i} style={{
                            fontSize: 13,
                            fontWeight: 600,
                            padding: '6px 14px',
                            borderRadius: 8,
                            background: 'var(--bg2)',
                            color: 'var(--text2)',
                            border: '1px solid var(--border)',
                          }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="sec-tag" style={{ justifyContent: 'center' }}>Süreç</div>
          <h2 className="sec-title" style={{ textAlign: 'center' }}>Nasıl <em>Çalışıyoruz?</em></h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 48 }}>
            {[
              { step: '01', title: 'Keşif', desc: 'Projenizi dinliyor, hedeflerinizi ve ihtiyaçlarınızı belirliyoruz.', icon: 'bi-search' },
              { step: '02', title: 'Strateji', desc: 'Doğru çözümü tasarlıyor, yol haritasını çiziyoruz.', icon: 'bi-map' },
              { step: '03', title: 'Üretim', desc: 'Uzman ekibimizle projeyi hayata geçiriyoruz.', icon: 'bi-gear-wide-connected' },
              { step: '04', title: 'Teslimat', desc: 'Test, optimizasyon ve lansman ile projeyi tamamlıyoruz.', icon: 'bi-rocket-takeoff' },
            ].map((item, i) => (
              <div key={i} style={{ position: 'relative', padding: '32px 24px', borderRadius: 20, border: '1.5px solid var(--border)', background: 'var(--bg2)' }}>
                <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'rgba(249,115,22,.1)', lineHeight: 1, marginBottom: 12 }}>{item.step}</div>
                <i className={`bi ${item.icon}`} style={{ fontSize: 28, color: 'var(--accent)', marginBottom: 12, display: 'block' }}></i>
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
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div className="sec-tag" style={{ justifyContent: 'center' }}>İletişim</div>
            <h2 className="sec-title" style={{ textAlign: 'center' }}>
              Projenizi <em>başlatalım</em> mı?
            </h2>
            <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
              Hangi hizmete ihtiyacınız olursa olsun, size özel bir çözüm üretiyoruz.
            </p>
            <Link href="/#iletisim" className="cta-main">
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
