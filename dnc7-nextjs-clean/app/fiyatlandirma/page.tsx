'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

const faqs = [
  {
    q: 'Hangi paketi seçmeliyim?',
    a: 'Yeni kurulan veya dijitale geçiş yapan işletmeler için Başlangıç paketi idealdir. Büyüme hedefi olan, reklam ve içerik stratejisine ihtiyaç duyan işletmeler için Profesyonel paket çok daha fazla değer sunar. 10+ çalışanı olan, mobil uygulama veya özel entegrasyon isteyen kurumlar için Kurumsal paket uygundur.',
  },
  {
    q: 'Sözleşme süresi ne kadar?',
    a: 'Minimum 3 aylık taahhüt ile çalışıyoruz. Uzun vadeli sözleşmelerde ek indirim uyguluyoruz. Yıllık peşin ödemelerde %15 indirim sunuyoruz.',
  },
  {
    q: 'Sonuç garantisi veriyor musunuz?',
    a: 'Evet. SEO büyümesi, reklam ROI\'ı ve sosyal medya etkileşimi için yazılı KPI taahhüdü veriyoruz. İlk 90 günde hedefleri tutturmazsak, bir sonraki ay ücretsiz hizmet veriyoruz.',
  },
  {
    q: 'Kurulum ücreti var mı?',
    a: 'Hayır. Listedeki fiyatlar aylık hizmet bedelleridir. Kurulum, entegrasyon ve onboarding süreçleri tamamen dahildir.',
  },
  {
    q: 'Paketi değiştirmek mümkün mü?',
    a: 'Evet, ihtiyaçlarınız değiştikçe paket yükseltme veya düşürme yapabilirsiniz. Değişiklikler bir sonraki fatura döneminde geçerli olur.',
  },
  {
    q: 'Raporlama nasıl yapılıyor?',
    a: 'Başlangıç paketinde aylık, Profesyonel\'de haftalık, Kurumsal\'da anlık erişimli dashboard ile raporlama yapıyoruz. Tüm raporlar Türkçe hazırlanır.',
  },
  {
    q: 'Ödeme yöntemleri neler?',
    a: 'Banka havalesi, kredi kartı ve kurumsal fatura ile ödeme kabul ediyoruz. Yıllık peşin ödemelerde %15 indirim sunuyoruz.',
  },
];

const packages = [
  {
    name: 'Başlangıç',
    persona: 'Dijitale yeni adım atan işletmeler',
    desc: 'Web sitesi, SEO temelleri ve sosyal medya yönetimiyle dijital varlığınızı kurun.',
    price: 7500,
    accent: '#10B981',
    popular: false,
    features: [
      'Kurumsal Web Sitesi (5 sayfa)',
      'Sosyal Medya Yönetimi (2 platform)',
      'Temel SEO Optimizasyonu',
      'Aylık Performans Raporu',
      'E-posta Desteği',
    ],
    excluded: [
      'AI Entegrasyonu',
      'Video Prodüksiyon',
      'Reklam Yönetimi',
      'Mobil Uygulama',
    ],
    cta: 'Hemen Başlayın',
    result: 'Müşterilerimiz ortalama 3 ayda dijital görünürlüklerini %180 artırıyor',
  },
  {
    name: 'Profesyonel',
    persona: 'Büyüme hedefleyen orta ölçekli işletmeler',
    desc: 'Reklam yönetimi, içerik stratejisi ve AI araçlarıyla rakiplerinizin önüne geçin.',
    price: 18000,
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
    cta: 'Büyümeye Başlayın',
    result: 'Ortalama reklam ROI\'ı: 4.2x — yani harcadığınız her lira 4.2 lira geri döner',
  },
  {
    name: 'Kurumsal',
    persona: 'Tam kapsamlı dijital dönüşüm isteyen kurumlar',
    desc: 'Mobil uygulama, özel AI ve dedike ekipten oluşan kurumsal dijital altyapı.',
    price: 0,
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
    cta: 'Teklif Alın',
    result: 'Kurumsal müşterilerimizin %94\'ü sözleşmesini yeniliyor',
  },
];

const addons = [
  { name: 'Ek Tanıtım Filmi', price: '₺25.000', icon: 'bi-camera-reels', desc: 'Profesyonel senaryo ve kurgu dahil' },
  { name: 'Drone Çekim (günlük)', price: '₺8.000', icon: 'bi-airplane', desc: 'Lisanslı pilot ve ekipman dahil' },
  { name: 'Mobil Oyun Geliştirme', price: '₺50.000\'den', icon: 'bi-controller', desc: 'iOS & Android, play-store yayın dahil' },
  { name: 'E-Ticaret Danışmanlığı', price: '₺10.000/ay', icon: 'bi-cart4', desc: 'Altyapı seçimi, UX ve dönüşüm optimizasyonu' },
];

const trustStats = [
  { value: '120+', label: 'Mutlu Müşteri' },
  { value: '%94', label: 'Yenileme Oranı' },
  { value: '4.2x', label: 'Ortalama ROI' },
  { value: '8 Yıl', label: 'Sektör Deneyimi' },
];

const comparisonRows = [
  { feature: 'Web Sitesi', starter: 'Kurumsal (5 sayfa)', pro: 'Özel (sınırsız sayfa)', ent: 'Tam özel + E-Ticaret' },
  { feature: 'Sosyal Medya', starter: '2 Platform', pro: '4 Platform', ent: 'Sınırsız Platform' },
  { feature: 'SEO', starter: 'Temel', pro: 'Gelişmiş + İçerik Stratejisi', ent: 'Enterprise SEO' },
  { feature: 'Reklam Yönetimi', starter: '—', pro: 'Google + Meta Ads', ent: 'Tüm Platformlar' },
  { feature: 'Video Prodüksiyon', starter: '—', pro: 'Aylık 1 Adet', ent: 'Kurumsal Film + Drone' },
  { feature: 'AI Entegrasyonu', starter: '—', pro: 'Chatbot', ent: 'Özel AI Modeli' },
  { feature: 'Mobil Uygulama', starter: '—', pro: '—', ent: 'iOS & Android' },
  { feature: 'Raporlama', starter: 'Aylık', pro: 'Haftalık', ent: 'Anlık Dashboard' },
  { feature: 'Destek', starter: 'E-posta', pro: 'Öncelikli', ent: '7/24 Dedike' },
  { feature: 'Performans Garantisi', starter: '—', pro: '✓', ent: '✓' },
];

export default function FiyatlandirmaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [showComparison, setShowComparison] = useState(false);

  const getPrice = (price: number) => {
    if (price === 0) return 'Özel Fiyat';
    const p = billing === 'yearly' ? Math.round(price * 0.85) : price;
    return `₺${p.toLocaleString('tr-TR')}`;
  };

  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.07, backgroundImage: 'radial-gradient(circle at 20% 50%, #F97316 0%, transparent 50%), radial-gradient(circle at 80% 80%, #6366F1 0%, transparent 50%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div className="sec-tag" style={{ color: 'var(--accent)' }}>Şeffaf Fiyatlandırma</div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 20 }}>
              Gizli maliyet yok.<br /><span style={{ color: 'var(--accent)' }}>Sürpriz fatura yok.</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.65)', maxWidth: 580, marginBottom: 40 }}>
              İhtiyacınıza göre büyüyen paketler. İlk 90 günde sonuç almazsanız bir ay ücretsiz çalışıyoruz.
            </p>

            {/* Trust stats */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 48px' }}>
              {trustStats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: '#fff', letterSpacing: -1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', fontWeight: 500, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Billing toggle */}
      <section style={{ background: 'var(--bg2)', padding: '32px 0', borderBottom: '1.5px solid var(--border)' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: billing === 'monthly' ? 'var(--text)' : 'var(--muted)' }}>Aylık</span>
          <button
            onClick={() => setBilling(b => b === 'monthly' ? 'yearly' : 'monthly')}
            style={{
              width: 52, height: 28, borderRadius: 14, border: 'none', cursor: 'pointer', position: 'relative',
              background: billing === 'yearly' ? 'var(--accent)' : 'var(--border)', transition: 'background .2s',
            }}
          >
            <div style={{
              position: 'absolute', top: 4, left: billing === 'yearly' ? 28 : 4,
              width: 20, height: 20, borderRadius: '50%', background: '#fff', transition: 'left .2s',
              boxShadow: '0 1px 4px rgba(0,0,0,.2)',
            }} />
          </button>
          <span style={{ fontSize: 14, fontWeight: 600, color: billing === 'yearly' ? 'var(--text)' : 'var(--muted)' }}>
            Yıllık
            <span style={{
              marginLeft: 8, fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 20,
              background: 'rgba(249,115,22,.12)', color: 'var(--accent)',
            }}>
              %15 İndirim
            </span>
          </span>
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
                  boxShadow: pkg.popular ? '0 24px 64px rgba(249,115,22,.14)' : '0 4px 24px rgba(0,0,0,.04)',
                  transition: 'transform .2s, box-shadow .2s',
                }}>
                  {pkg.popular && (
                    <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: '#fff', fontSize: 11, fontWeight: 800, padding: '6px 20px', borderRadius: 20, letterSpacing: 1, whiteSpace: 'nowrap' }}>
                      EN ÇOK TERCİH EDİLEN
                    </div>
                  )}

                  {/* Icon */}
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: `${pkg.accent}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <div style={{ width: 14, height: 14, borderRadius: '50%', background: pkg.accent }}></div>
                  </div>

                  <div style={{ fontSize: 11, fontWeight: 700, color: pkg.accent, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
                    {pkg.persona}
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 900, color: 'var(--text)', marginBottom: 8 }}>{pkg.name}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 28, lineHeight: 1.65 }}>{pkg.desc}</p>

                  {/* Price */}
                  <div style={{ marginBottom: 12 }}>
                    {pkg.price === 0 ? (
                      <span style={{ fontSize: 30, fontWeight: 900, color: 'var(--text)' }}>Özel Fiyat</span>
                    ) : (
                      <>
                        <span style={{ fontSize: 38, fontWeight: 900, color: 'var(--text)' }}>{getPrice(pkg.price)}</span>
                        <span style={{ fontSize: 15, color: 'var(--muted)', fontWeight: 600 }}>/ay</span>
                        {billing === 'yearly' && (
                          <div style={{ fontSize: 12, color: pkg.accent, fontWeight: 600, marginTop: 4 }}>
                            Yılda ₺{(pkg.price * 0.15 * 12).toLocaleString('tr-TR')} tasarruf
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Result badge */}
                  <div style={{ marginBottom: 28, padding: '10px 14px', borderRadius: 10, background: `${pkg.accent}0d`, borderLeft: `3px solid ${pkg.accent}` }}>
                    <span style={{ fontSize: 12, color: pkg.accent, fontWeight: 600, lineHeight: 1.5 }}>{pkg.result}</span>
                  </div>

                  {/* Features */}
                  <div style={{ flex: 1, marginBottom: 32 }}>
                    {pkg.features.map((f, fi) => (
                      <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 11 }}>
                        <i className="bi bi-check-circle-fill" style={{ color: pkg.accent, fontSize: 15, flexShrink: 0, marginTop: 1 }}></i>
                        <span style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                    {pkg.excluded.map((f, fi) => (
                      <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 11, opacity: 0.35 }}>
                        <i className="bi bi-x-circle" style={{ fontSize: 15, flexShrink: 0, marginTop: 1 }}></i>
                        <span style={{ fontSize: 14, textDecoration: 'line-through', lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/#iletisim" className={pkg.popular ? 'cta-main' : 'cta-sec'} style={{ width: '100%', justifyContent: 'center', ...(pkg.popular ? {} : { borderColor: 'var(--border)' }) }}>
                    {pkg.cta}
                    <span className="ico"><i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Compare toggle */}
          <Reveal>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <button
                onClick={() => setShowComparison(!showComparison)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600, color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <i className={`bi bi-${showComparison ? 'chevron-up' : 'table'}`}></i>
                {showComparison ? 'Karşılaştırmayı Gizle' : 'Tüm Özellikleri Karşılaştır'}
              </button>
            </div>
          </Reveal>

          {/* Comparison table */}
          {showComparison && (
            <Reveal>
              <div style={{ marginTop: 32, overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: 16, overflow: 'hidden', border: '1.5px solid var(--border)', background: '#fff' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg2)' }}>
                      <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: 13, fontWeight: 700, color: 'var(--muted)', width: '28%' }}>Özellik</th>
                      {packages.map((pkg, i) => (
                        <th key={i} style={{ padding: '16px 20px', textAlign: 'center', fontSize: 14, fontWeight: 800, color: pkg.popular ? 'var(--accent)' : 'var(--text)' }}>
                          {pkg.name}
                          {pkg.popular && <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--accent)', marginTop: 2 }}>★ EN POPÜLER</div>}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={i} style={{ borderTop: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg2)' }}>
                        <td style={{ padding: '14px 20px', fontSize: 13, fontWeight: 600, color: 'var(--text2)' }}>{row.feature}</td>
                        {[row.starter, row.pro, row.ent].map((val, vi) => (
                          <td key={vi} style={{ padding: '14px 20px', textAlign: 'center', fontSize: 13, color: val === '—' ? 'var(--border)' : 'var(--text)' }}>
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Value proposition strip */}
      <section style={{ background: 'var(--dark)', padding: '56px 0' }}>
        <div className="wrap">
          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
              {[
                { icon: 'bi-shield-check', title: '90 Gün Performans Garantisi', desc: 'Hedefleri tutturmazsak bir sonraki ay ücretsiz.' },
                { icon: 'bi-graph-up-arrow', title: 'Ölçülebilir KPI\'lar', desc: 'SEO, ROI ve büyüme hedefleri yazılı taahhütle belirlenir.' },
                { icon: 'bi-headset', title: 'Türkçe Dedike Destek', desc: 'Raporlardan stratejiye kadar her şey Türkçe yürütülür.' },
                { icon: 'bi-arrow-repeat', title: 'İhtiyaca Göre Ölçeklenir', desc: 'İşletmeniz büyüdükçe paketinizi kolayca yükseltebilirsiniz.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(249,115,22,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`bi ${item.icon}`} style={{ fontSize: 20, color: 'var(--accent)' }}></i>
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              {addons.map((a, i) => (
                <div key={i} style={{ padding: '28px 24px', borderRadius: 20, border: '1.5px solid var(--border)', background: 'var(--bg2)', display: 'flex', gap: 16, alignItems: 'flex-start', transition: 'border-color .2s' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(249,115,22,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`bi ${a.icon}`} style={{ fontSize: 22, color: 'var(--accent)' }}></i>
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{a.name}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 8, lineHeight: 1.5 }}>{a.desc}</div>
                    <div style={{ fontSize: 14, color: 'var(--accent)', fontWeight: 700 }}>{a.price}</div>
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
            <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 48px' }}>Satın almadan önce bilmeniz gereken her şey.</p>
          </Reveal>
          <Reveal stagger>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i}
                  style={{ borderRadius: 16, border: `1.5px solid ${openFaq === i ? 'var(--accent)' : 'var(--border)'}`, background: '#fff', overflow: 'hidden', transition: 'border-color .2s' }}
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

      {/* CTA */}
      <section className="sec" style={{ background: 'var(--bg3)' }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-center">
              <div className="sec-tag" style={{ justifyContent: 'center' }}>Özel Proje?</div>
              <h2 className="sec-title" style={{ textAlign: 'center' }}>
                Paketlere sığmayan bir <em>projeniz mi var?</em>
              </h2>
              <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 16px' }}>
                Büyük ölçekli projeler, özel entegrasyonlar ve kurumsal çözümler için size özel fiyat teklifi hazırlıyoruz.
              </p>
              <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--muted)', margin: '0 auto 36px' }}>
                Ortalama teklif hazırlama süremiz: <strong>24 saat</strong>
              </p>
              <Link href="/#iletisim" className="cta-main">
                Ücretsiz Teklif Alın <span className="ico"><i className="bi bi-arrow-right"></i></span>
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
