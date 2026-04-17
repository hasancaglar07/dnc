'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

const faqs = [
  { q: 'Sözleşme süresi ne kadar?', a: 'Minimum 3 aylık taahhüt ile çalışıyoruz. Uzun vadeli sözleşmelerde ek indirim uyguluyoruz. Kurumsal paket için özel sözleşme koşulları belirliyoruz.' },
  { q: 'Kurulum ücreti var mı?', a: 'Hayır, listedeki fiyatlar aylık hizmet bedelleridir. Kurulum, entegrasyon ve onboarding süreçleri fiyata dahildir.' },
  { q: 'Paketi değiştirmek mümkün mü?', a: 'Evet, ihtiyaçlarınız değiştikçe paket yükseltme veya düşürme yapabilirsiniz. Değişiklikler bir sonraki fatura döneminde geçerli olur.' },
  { q: 'Sonuç garantisi veriyor musunuz?', a: 'Belirli performans hedeflerini yazılı taahhüt olarak sunuyoruz. SEO, reklam ROI ve sosyal medya büyümesi için ölçülebilir KPI\'lar belirliyoruz.' },
  { q: 'Raporlama nasıl yapılıyor?', a: 'Başlangıç paketinde aylık, Profesyonel\'de haftalık, Kurumsal\'da anlık erişimli dashboard ile raporlama yapıyoruz.' },
  { q: 'Ödeme yöntemleri neler?', a: 'Banka havalesi, kredi kartı ve kurumsal fatura ile ödeme kabul ediyoruz. Yıllık peşin ödemelerde %15 indirim sunuyoruz.' },
];

const packages = [
  {
    name: 'Başlangıç',
    desc: 'Dijital yolculuğuna yeni başlayan işletmeler için',
    price: '₺7.500',
    period: '/ay',
    accent: '#10B981',
    popular: false,
    features: [
      'Kurumsal Web Sitesi (5 sayfa)',
      'Sosyal Medya Yönetimi (2 platform)',
      'Aylık Performans Raporu',
      'Temel SEO Optimizasyonu',
      'E-posta Desteği',
    ],
    excluded: [
      'AI Entegrasyonu',
      'Video Prodüksiyon',
      'Reklam Yönetimi',
      'Mobil Uygulama',
    ],
  },
  {
    name: 'Profesyonel',
    desc: 'Büyüme hedefleyen orta ölçekli işletmeler için',
    price: '₺18.000',
    period: '/ay',
    accent: '#F97316',
    popular: true,
    features: [
      'Özel Web Sitesi (sınırsız sayfa)',
      'Sosyal Medya Yönetimi (4 platform)',
      'Google Ads & Meta Ads Yönetimi',
      'SEO & İçerik Stratejisi',
      'Aylık Tanıtım Videosu (1 adet)',
      'AI Chatbot Entegrasyonu',
      'Haftalık Performans Raporu',
      'Öncelikli Destek',
    ],
    excluded: [
      'Mobil Uygulama',
      'Özel AI Modeli',
    ],
  },
  {
    name: 'Kurumsal',
    desc: 'Tam kapsamlı dijital dönüşüm isteyen kurumlar için',
    price: 'Özel Fiyat',
    period: '',
    accent: '#6366F1',
    popular: false,
    features: [
      'Profesyonel paketteki her şey',
      'Mobil Uygulama Geliştirme',
      'Özel AI Model & Entegrasyon',
      'Kurumsal Tanıtım Filmi',
      'Drone Çekim Hizmeti',
      'E-Ticaret Altyapısı',
      'Dedike Proje Yöneticisi',
      '7/24 Teknik Destek',
      'Aylık Strateji Toplantısı',
    ],
    excluded: [],
  },
];

const addons = [
  { name: 'Ek Tanıtım Filmi', price: '₺25.000', icon: 'bi-camera-reels' },
  { name: 'Drone Çekim (günlük)', price: '₺8.000', icon: 'bi-airplane' },
  { name: 'Mobil Oyun Geliştirme', price: '₺50.000\'den', icon: 'bi-controller' },
  { name: 'E-Ticaret Danışmanlığı', price: '₺10.000/ay', icon: 'bi-cart4' },
];

export default function FiyatlandirmaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'radial-gradient(circle at 20% 50%, #F97316 0%, transparent 50%), radial-gradient(circle at 80% 80%, #6366F1 0%, transparent 50%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div className="sec-tag" style={{ color: 'var(--accent)' }}>Fiyatlandırma</div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 20 }}>
              Şeffaf <span style={{ color: 'var(--accent)' }}>Fiyatlandırma</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600 }}>
              İhtiyacınıza uygun paketi seçin veya size özel bir teklif alalım. Gizli maliyet yok, sürpriz fatura yok.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Packages */}
      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <Reveal stagger>
            <div className="package-grid">
              {packages.map((pkg, i) => (
                <div key={i} style={{
                  borderRadius: 24, padding: '40px 32px', background: '#fff',
                  border: pkg.popular ? '2px solid var(--accent)' : '1.5px solid var(--border)',
                  position: 'relative', display: 'flex', flexDirection: 'column',
                  boxShadow: pkg.popular ? '0 20px 60px rgba(249,115,22,.12)' : 'none',
                }}>
                  {pkg.popular && (
                    <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: '#fff', fontSize: 12, fontWeight: 700, padding: '6px 20px', borderRadius: 20, letterSpacing: 0.5 }}>
                      EN POPÜLER
                    </div>
                  )}
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: `${pkg.accent}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: pkg.accent }}></div>
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', marginBottom: 6 }}>{pkg.name}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 24, lineHeight: 1.6 }}>{pkg.desc}</p>

                  <div style={{ marginBottom: 32 }}>
                    <span style={{ fontSize: 36, fontWeight: 900, color: 'var(--text)' }}>{pkg.price}</span>
                    <span style={{ fontSize: 15, color: 'var(--muted)', fontWeight: 600 }}>{pkg.period}</span>
                  </div>

                  <div style={{ flex: 1, marginBottom: 32 }}>
                    {pkg.features.map((f, fi) => (
                      <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                        <i className="bi bi-check-circle-fill" style={{ color: pkg.accent, fontSize: 16, flexShrink: 0 }}></i>
                        <span style={{ fontSize: 14, color: 'var(--text2)' }}>{f}</span>
                      </div>
                    ))}
                    {pkg.excluded.map((f, fi) => (
                      <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, opacity: 0.4 }}>
                        <i className="bi bi-x-circle" style={{ fontSize: 16, flexShrink: 0 }}></i>
                        <span style={{ fontSize: 14, textDecoration: 'line-through' }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/#iletisim" className={pkg.popular ? 'cta-main' : 'cta-sec'} style={{ width: '100%', justifyContent: 'center', ...(pkg.popular ? {} : { borderColor: 'var(--border)' }) }}>
                    {pkg.price === 'Özel Fiyat' ? 'Teklif Al' : 'Başla'}
                    <span className="ico"><i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Add-ons */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag" style={{ justifyContent: 'center' }}>Ek Hizmetler</div>
            <h2 className="sec-title" style={{ textAlign: 'center' }}>Paketinize <em>Ekleyin</em></h2>
            <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              İhtiyacınıza göre tek seferlik veya aylık ek hizmetler
            </p>
          </Reveal>
          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {addons.map((a, i) => (
                <div key={i} style={{ padding: '28px 24px', borderRadius: 20, border: '1.5px solid var(--border)', background: 'var(--bg2)', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(249,115,22,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`bi ${a.icon}`} style={{ fontSize: 22, color: 'var(--accent)' }}></i>
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>{a.name}</div>
                    <div style={{ fontSize: 14, color: 'var(--accent)', fontWeight: 600 }}>{a.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap" style={{ maxWidth: 780, margin: '0 auto' }}>
          <Reveal>
            <div className="sec-tag" style={{ justifyContent: 'center' }}>SSS</div>
            <h2 className="sec-title" style={{ textAlign: 'center' }}>Sıkça <em>Sorulan Sorular</em></h2>
            <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 48px' }}>Fiyatlandırma hakkında merak ettiğiniz her şey.</p>
          </Reveal>
          <Reveal stagger>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
              <div key={i} style={{ borderRadius: 16, border: `1.5px solid ${openFaq === i ? 'var(--accent)' : 'var(--border)'}`, background: '#fff', overflow: 'hidden', transition: 'border-color .2s' }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', padding: '20px 24px', border: 'none', background: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 16, fontWeight: 700, color: 'var(--text)', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
                  >
                    {faq.q}
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: openFaq === i ? 'var(--accent)' : 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: 12, transition: 'background .2s' }}>
                      <i className={`bi bi-${openFaq === i ? 'dash' : 'plus'}`} style={{ fontSize: 18, color: openFaq === i ? '#fff' : 'var(--accent)' }}></i>
                    </div>
                  </button>
                  <div style={{ maxHeight: openFaq === i ? 200 : 0, opacity: openFaq === i ? 1 : 0, overflow: 'hidden', transition: 'all .3s ease', padding: openFaq === i ? '0 24px 20px' : '0 24px' }}>
                    <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ-like */}
      <section className="sec" style={{ background: 'var(--bg3)' }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-center">
              <div className="sec-tag" style={{ justifyContent: 'center' }}>Özel Proje?</div>
              <h2 className="sec-title" style={{ textAlign: 'center' }}>
                Paketlere sığmayan bir <em>projeniz mi var?</em>
              </h2>
              <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
                Büyük ölçekli projeler, özel entegrasyonlar ve kurumsal çözümler için size özel fiyat teklifi hazırlıyoruz.
              </p>
              <Link href="/#iletisim" className="cta-main">
                Özel Teklif Al <span className="ico"><i className="bi bi-arrow-right"></i></span>
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
