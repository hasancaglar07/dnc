'use client';

import { useState, useCallback } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function luminance({ r, g, b }: { r: number; g: number; b: number }) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(hex1: string, hex2: string) {
  const l1 = luminance(hexToRgb(hex1));
  const l2 = luminance(hexToRgb(hex2));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function getWCAGLevel(ratio: number, isLargeText = false) {
  if (isLargeText) {
    if (ratio >= 4.5) return { level: 'AAA', color: '#10b981' };
    if (ratio >= 3) return { level: 'AA', color: '#10b981' };
    return { level: 'Fail', color: '#ef4444' };
  }
  if (ratio >= 7) return { level: 'AAA', color: '#10b981' };
  if (ratio >= 4.5) return { level: 'AA', color: '#10b981' };
  if (ratio >= 3) return { level: 'AA (Büyük Metin)', color: '#f59e0b' };
  return { level: 'Fail', color: '#ef4444' };
}

function harmonize(hex: string): string[] {
  const { r, g, b } = hexToRgb(hex);
  // Complementary: rotate hue ~180
  const comp = `#${[r, g, b].map((c) => (255 - c).toString(16).padStart(2, '0')).join('')}`;
  // Lighter
  const light = `#${[r, g, b].map((c) => Math.min(255, c + 60).toString(16).padStart(2, '0')).join('')}`;
  // Darker
  const dark = `#${[r, g, b].map((c) => Math.max(0, c - 60).toString(16).padStart(2, '0')).join('')}`;
  return [hex, light, dark, comp];
}

const presets = [
  { label: 'DNC7 Orange', fg: '#F97316', bg: '#111111' },
  { label: 'Classic Black', fg: '#ffffff', bg: '#000000' },
  { label: 'Navy Blue', fg: '#ffffff', bg: '#1e3a5f' },
  { label: 'Warning', fg: '#111111', bg: '#fbbf24' },
];

export default function RenkPaletiPage() {
  const [fg, setFg] = useState('#F97316');
  const [bg, setBg] = useState('#111111');

  const ratio = contrastRatio(fg, bg);
  const ratioFixed = ratio.toFixed(2);
  const wcag = getWCAGLevel(ratio);
  const wcagLarge = getWCAGLevel(ratio, true);
  const palette = harmonize(fg);

  const apply = useCallback((preset: typeof presets[0]) => {
    setFg(preset.fg);
    setBg(preset.bg);
  }, []);

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
            <h1 className="sec-title" style={{ marginTop: '16px', marginBottom: '8px', color: '#fff' }}>Renk Paleti Uyumluluk Testi</h1>
            <p className="sec-sub" style={{ marginBottom: '48px', color: 'rgba(255,255,255,0.6)' }}>
              Marka renklerinizin kontrast oranını ve WCAG erişilebilirlik uyumluluğunu test edin.
            </p>

            {/* Color pickers */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
              {[
                { label: 'Metin / Ön plan Rengi', value: fg, set: setFg },
                { label: 'Arka Plan Rengi', value: bg, set: setBg },
              ].map(({ label, value, set }) => (
                <div key={label} style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px' }}>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>{label}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <input
                      type="color"
                      value={value}
                      onChange={(e) => set(e.target.value)}
                      style={{ width: '52px', height: '52px', border: 'none', borderRadius: '10px', cursor: 'pointer', background: 'none' }}
                    />
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff', fontFamily: 'monospace' }}>{value.toUpperCase()}</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>
                        rgb({hexToRgb(value).r}, {hexToRgb(value).g}, {hexToRgb(value).b})
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Presets */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '10px' }}>Hızlı örnekler:</div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {presets.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => apply(p)}
                    style={{
                      background: p.bg,
                      color: p.fg,
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '50px',
                      padding: '8px 16px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Preview */}
            <div style={{ background: bg, borderRadius: '16px', padding: '32px', marginBottom: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: fg, marginBottom: '8px' }}>Büyük Metin Örneği (18pt+)</div>
              <div style={{ fontSize: '16px', color: fg, marginBottom: '12px' }}>Bu normal metin boyutu örneğidir. Okunabilirlik testi yapılıyor.</div>
              <div style={{ fontSize: '13px', color: fg, opacity: 0.8 }}>Küçük metin — bu boyut erişilebilirlik açısından daha kritiktir.</div>
            </div>

            {/* Results */}
            <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '32px', marginBottom: '32px' }}>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '24px' }}>Kontrast Analizi</div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: '#111', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: '#fff' }}>{ratioFixed}:1</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>Kontrast Oranı</div>
                </div>
                <div style={{ background: '#111', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: wcag.color }}>{wcag.level}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>Normal Metin</div>
                </div>
                <div style={{ background: '#111', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: wcagLarge.color }}>{wcagLarge.level}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>Büyük Metin</div>
                </div>
              </div>

              {/* WCAG guide */}
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.8 }}>
                <strong style={{ color: 'rgba(255,255,255,0.6)' }}>WCAG 2.1 Rehberi:</strong><br />
                AA (Normal metin): minimum 4.5:1 · AA (Büyük metin): minimum 3:1 · AAA: minimum 7:1
              </div>
            </div>

            {/* Palette suggestion */}
            <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '32px' }}>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>Renk Paleti Önerisi</div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {palette.map((color, i) => {
                  const labels = ['Ana Renk', 'Açık Ton', 'Koyu Ton', 'Tamamlayıcı'];
                  return (
                    <div key={color} style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '12px',
                        background: color,
                        marginBottom: '8px',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }} />
                      <div style={{ fontSize: '11px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.6)' }}>{color.toUpperCase()}</div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>{labels[i]}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
