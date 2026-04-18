'use client';

import { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

const categories = [
  { id: 'landing', label: 'Landing Page', base: 8000, icon: '🖥️' },
  { id: 'kurumsal', label: 'Kurumsal Web Sitesi', base: 18000, icon: '🏢' },
  { id: 'eticaret', label: 'E-Ticaret Platformu', base: 35000, icon: '🛒' },
  { id: 'mobil', label: 'Mobil Uygulama', base: 45000, icon: '📱' },
  { id: 'tanitim', label: 'Tanıtım Filmi', base: 25000, icon: '🎬' },
  { id: 'reklam', label: 'Reklam Filmi', base: 15000, icon: '📺' },
  { id: 'logo', label: 'Logo & Marka Kimliği', base: 6000, icon: '✏️' },
  { id: 'ai', label: 'AI Entegrasyonu', base: 30000, icon: '🤖' },
];

const extras: { id: string; label: string; cost: number }[] = [
  { id: 'seo', label: 'SEO Optimizasyonu', cost: 3000 },
  { id: 'blog', label: 'Blog / İçerik Yönetimi', cost: 2500 },
  { id: 'cok_dil', label: 'Çok Dil Desteği', cost: 4000 },
  { id: 'odeme', label: 'Ödeme Entegrasyonu', cost: 3500 },
  { id: 'animasyon', label: 'İleri Animasyon & 3D', cost: 8000 },
  { id: 'bakim', label: 'Yıllık Bakım Paketi', cost: 6000 },
  { id: 'reklam_yonetimi', label: 'Reklam Yönetimi (3 ay)', cost: 9000 },
  { id: 'analytics', label: 'Analytics Dashboard', cost: 5000 },
];

const timelines = [
  { id: 'hizli', label: 'Hızlı (2-4 hafta)', multiplier: 1.3 },
  { id: 'normal', label: 'Normal (4-8 hafta)', multiplier: 1.0 },
  { id: 'esnek', label: 'Esnek (8+ hafta)', multiplier: 0.9 },
];

export default function ButceHesaplayiciPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState('normal');
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const catData = categories.find((c) => c.id === selectedCategory);
  const timelineData = timelines.find((t) => t.id === selectedTimeline)!;
  const extrasCost = selectedExtras.reduce((sum, id) => {
    const e = extras.find((ex) => ex.id === id);
    return sum + (e?.cost ?? 0);
  }, 0);
  const base = catData?.base ?? 0;
  const total = Math.round((base + extrasCost) * timelineData.multiplier);
  const low = Math.round(total * 0.85);
  const high = Math.round(total * 1.2);

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fmt = (n: number) =>
    new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(n);

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--dark)' }}>
        <section className="sec">
          <div className="wrap" style={{ maxWidth: '820px' }}>
            <Link href="/araclar" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '32px' }}>
              <i className="bi bi-arrow-left" /> Tüm Araçlar
            </Link>

            <span className="sec-tag">Ücretsiz Araç</span>
            <h1 className="sec-title" style={{ marginTop: '16px', marginBottom: '8px', color: '#fff' }}>Proje Bütçe Hesaplayıcı</h1>
            <p className="sec-sub" style={{ marginBottom: '48px', color: 'rgba(255,255,255,0.6)' }}>
              Projenizin türünü ve ihtiyaçlarınızı seçin, tahmini bütçe aralığınızı anında öğrenin.
            </p>

            {/* Step 1 */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
                <span style={{ color: 'var(--accent)' }}>01.</span> Proje türünü seçin
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setSelectedCategory(cat.id); setShowResult(false); }}
                    style={{
                      background: selectedCategory === cat.id ? 'rgba(249,115,22,0.15)' : '#1a1a1a',
                      border: `1px solid ${selectedCategory === cat.id ? 'var(--accent)' : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: '12px',
                      padding: '16px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>{cat.icon}</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>{cat.label}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
                      {fmt(cat.base)}&apos;den başlayan
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
                <span style={{ color: 'var(--accent)' }}>02.</span> Ek özellikler (opsiyonel)
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '10px' }}>
                {extras.map((ex) => (
                  <button
                    key={ex.id}
                    onClick={() => toggleExtra(ex.id)}
                    style={{
                      background: selectedExtras.includes(ex.id) ? 'rgba(249,115,22,0.15)' : '#1a1a1a',
                      border: `1px solid ${selectedExtras.includes(ex.id) ? 'var(--accent)' : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: '10px',
                      padding: '12px 16px',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.2s',
                    }}
                  >
                    <span style={{ fontSize: '14px', color: '#fff' }}>{ex.label}</span>
                    <span style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 600 }}>+{fmt(ex.cost)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
                <span style={{ color: 'var(--accent)' }}>03.</span> Teslimat süresi
              </h2>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {timelines.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTimeline(t.id)}
                    style={{
                      background: selectedTimeline === t.id ? 'rgba(249,115,22,0.15)' : '#1a1a1a',
                      border: `1px solid ${selectedTimeline === t.id ? 'var(--accent)' : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: '10px',
                      padding: '12px 20px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: '#fff',
                      fontWeight: 600,
                      transition: 'all 0.2s',
                    }}
                  >
                    {t.label}
                    {t.multiplier !== 1 && (
                      <span style={{ marginLeft: '8px', color: t.multiplier > 1 ? '#ef4444' : '#10b981', fontSize: '12px' }}>
                        {t.multiplier > 1 ? `+${Math.round((t.multiplier - 1) * 100)}%` : `-${Math.round((1 - t.multiplier) * 100)}%`}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Calculate button */}
            {selectedCategory && !showResult && (
              <button
                onClick={() => setShowResult(true)}
                style={{
                  background: 'var(--accent)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '16px 40px',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  marginBottom: '40px',
                  transition: 'opacity 0.2s',
                }}
              >
                Bütçemi Hesapla
              </button>
            )}

            {/* Result */}
            {showResult && selectedCategory && (
              <div style={{
                background: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.05))',
                border: '1px solid rgba(249,115,22,0.3)',
                borderRadius: '20px',
                padding: '40px',
                marginBottom: '40px',
              }}>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>Tahmini Bütçe Aralığı</div>
                <div style={{ fontSize: '42px', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>
                  {fmt(low)} — {fmt(high)}
                </div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginBottom: '32px' }}>
                  *Bu rakamlar tahmini olup proje kapsamına göre değişebilir.
                </div>

                {!submitted ? (
                  <>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>
                      Detaylı teklif almak ister misiniz?
                    </div>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <input
                        type="email"
                        required
                        placeholder="E-posta adresiniz"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          flex: 1,
                          minWidth: '220px',
                          background: 'rgba(255,255,255,0.08)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          borderRadius: '10px',
                          padding: '12px 16px',
                          color: '#fff',
                          fontSize: '15px',
                          outline: 'none',
                        }}
                      />
                      <button
                        type="submit"
                        style={{
                          background: 'var(--accent)',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '10px',
                          padding: '12px 28px',
                          fontSize: '15px',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        Teklif Al
                      </button>
                    </form>
                  </>
                ) : (
                  <div style={{ fontSize: '16px', color: '#10b981', fontWeight: 600 }}>
                    ✓ Teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
