'use client';

import { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

const sectors = [
  { id: 'eticaret', label: 'E-Ticaret', avgConvLift: 0.35, avgOrderValue: 250 },
  { id: 'hizmet', label: 'Hizmet / B2B', avgConvLift: 0.45, avgOrderValue: 5000 },
  { id: 'restoran', label: 'Restoran / Kafe', avgConvLift: 0.25, avgOrderValue: 180 },
  { id: 'saglik', label: 'Sağlık / Güzellik', avgConvLift: 0.4, avgOrderValue: 600 },
  { id: 'gayrimenkul', label: 'Gayrimenkul', avgConvLift: 0.3, avgOrderValue: 15000 },
  { id: 'egitim', label: 'Eğitim / Kurs', avgConvLift: 0.5, avgOrderValue: 1200 },
  { id: 'teknoloji', label: 'Teknoloji / SaaS', avgConvLift: 0.4, avgOrderValue: 800 },
  { id: 'diger', label: 'Diğer', avgConvLift: 0.3, avgOrderValue: 500 },
];

const fmt = (n: number) =>
  new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(n);

export default function RoiHesaplayiciPage() {
  const [sector, setSector] = useState<string>('');
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(1000);
  const [currentConvRate, setCurrentConvRate] = useState<number>(1.5);
  const [avgOrder, setAvgOrder] = useState<number>(500);
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const sectorData = sectors.find((s) => s.id === sector);

  const currentMonthlyRevenue = monthlyVisitors * (currentConvRate / 100) * avgOrder;
  const newConvRate = Math.min(currentConvRate * (1 + (sectorData?.avgConvLift ?? 0.35)), 12);
  const newMonthlyRevenue = monthlyVisitors * (newConvRate / 100) * avgOrder;
  const monthlyGain = newMonthlyRevenue - currentMonthlyRevenue;
  const yearlyGain = monthlyGain * 12;

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--dark)' }}>
        <section className="sec">
          <div className="wrap" style={{ maxWidth: '760px' }}>
            <Link href="/araclar" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '32px' }}>
              <i className="bi bi-arrow-left" /> Tüm Araçlar
            </Link>

            <span className="sec-tag">Ücretsiz Araç</span>
            <h1 className="sec-title" style={{ marginTop: '16px', marginBottom: '8px', color: '#fff' }}>Web Sitesi ROI Hesaplayıcı</h1>
            <p className="sec-sub" style={{ marginBottom: '48px', color: 'rgba(255,255,255,0.6)' }}>
              Yeni veya yenilenen web sitenizin size ne kadar ek gelir getirebileceğini hesaplayın.
            </p>

            {/* Form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '40px' }}>

              {/* Sector */}
              <div>
                <label style={{ fontSize: '15px', fontWeight: 600, color: '#fff', display: 'block', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--accent)' }}>01.</span> Sektörünüz nedir?
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '10px' }}>
                  {sectors.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => { setSector(s.id); setAvgOrder(s.avgOrderValue); setShowResult(false); }}
                      style={{
                        background: sector === s.id ? 'rgba(249,115,22,0.15)' : '#1a1a1a',
                        border: `1px solid ${sector === s.id ? 'var(--accent)' : 'rgba(255,255,255,0.08)'}`,
                        borderRadius: '10px',
                        padding: '12px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        color: sector === s.id ? '#fff' : 'rgba(255,255,255,0.65)',
                        fontWeight: sector === s.id ? 600 : 400,
                        transition: 'all 0.2s',
                      }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders */}
              {[
                {
                  id: 'visitors',
                  label: '02. Aylık web sitesi ziyaretçisi',
                  value: monthlyVisitors,
                  set: (v: number) => { setMonthlyVisitors(v); setShowResult(false); },
                  min: 100, max: 100000, step: 100,
                  display: monthlyVisitors.toLocaleString('tr-TR'),
                  unit: 'ziyaretçi/ay',
                },
                {
                  id: 'conv',
                  label: '03. Mevcut dönüşüm oranı',
                  value: currentConvRate,
                  set: (v: number) => { setCurrentConvRate(v); setShowResult(false); },
                  min: 0.1, max: 10, step: 0.1,
                  display: `%${currentConvRate}`,
                  unit: 'dönüşüm',
                },
                {
                  id: 'order',
                  label: '04. Ortalama sipariş/müşteri değeri',
                  value: avgOrder,
                  set: (v: number) => { setAvgOrder(v); setShowResult(false); },
                  min: 50, max: 50000, step: 50,
                  display: fmt(avgOrder),
                  unit: 'ortalama değer',
                },
              ].map((item) => (
                <div key={item.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <label style={{ fontSize: '15px', fontWeight: 600, color: '#fff' }}>
                      <span style={{ color: 'var(--accent)' }}>{item.label.slice(0, 2)}</span>{item.label.slice(2)}
                    </label>
                    <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--accent)' }}>{item.display}</span>
                  </div>
                  <input
                    type="range"
                    min={item.min}
                    max={item.max}
                    step={item.step}
                    value={item.value}
                    onChange={(e) => item.set(parseFloat(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent)' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '4px' }}>
                    <span>{item.min.toLocaleString('tr-TR')}</span>
                    <span>{item.max.toLocaleString('tr-TR')}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mevcut durum özeti */}
            <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px', marginBottom: '24px' }}>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>Mevcut aylık geliriniz (tahmini)</div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#fff' }}>{fmt(currentMonthlyRevenue)}</div>
            </div>

            {sector && !showResult && (
              <button
                onClick={() => setShowResult(true)}
                style={{ background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: '50px', padding: '16px 40px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', marginBottom: '40px' }}
              >
                ROI&apos;mi Hesapla
              </button>
            )}

            {/* Result */}
            {showResult && sector && (
              <div style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.03))', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '20px', padding: '40px', marginBottom: '40px' }}>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginBottom: '24px' }}>
                  {sectorData?.label} sektörü için ortalama <strong style={{ color: '#fff' }}>%{Math.round((sectorData?.avgConvLift ?? 0) * 100)} dönüşüm artışı</strong> baz alındı.
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                  {[
                    { label: 'Yeni Aylık Gelir', value: fmt(newMonthlyRevenue), color: '#10b981' },
                    { label: 'Aylık Kazanç', value: `+${fmt(monthlyGain)}`, color: '#10b981' },
                    { label: 'Yıllık Kazanç', value: `+${fmt(yearlyGain)}`, color: '#10b981' },
                  ].map((stat) => (
                    <div key={stat.label} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                      <div style={{ fontSize: '22px', fontWeight: 800, color: stat.color }}>{stat.value}</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginBottom: '24px' }}>
                  * Bu tahminler sektör ortalamalarına dayanmaktadır. Gerçek sonuçlar farklılık gösterebilir.
                </div>

                {!submitted ? (
                  <>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Detaylı analiz ve teklif almak ister misiniz?</div>
                    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <input type="email" required placeholder="E-posta adresiniz" value={email} onChange={(e) => setEmail(e.target.value)}
                        style={{ flex: 1, minWidth: '220px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '15px', outline: 'none' }}
                      />
                      <button type="submit" style={{ background: '#10b981', color: '#fff', border: 'none', borderRadius: '10px', padding: '12px 28px', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}>
                        Analiz Al
                      </button>
                    </form>
                  </>
                ) : (
                  <div style={{ fontSize: '16px', color: '#10b981', fontWeight: 600 }}>✓ Teşekkürler! Ekibimiz en kısa sürede sizinle iletişime geçecek.</div>
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
