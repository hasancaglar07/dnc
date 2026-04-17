import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'DNC7 — Prodüksiyon, AI & Dijital Çözümler';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  // Load hero image
  const heroImageData = await fetch(
    new URL('../public/assets/images/herroo.png', import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#0a0a0a',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #0a0a0a 50%, rgba(249,115,22,0.08) 100%)',
        }} />

        {/* Border */}
        <div style={{ position: 'absolute', inset: 30, border: '2px solid rgba(249,115,22,0.12)', borderRadius: 20, display: 'flex' }} />

        {/* Hero image - right side */}
        <div style={{
          position: 'absolute', right: 0, bottom: 0, width: 500, height: 630,
          display: 'flex', overflow: 'hidden',
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImageData as unknown as string}
            alt=""
            width={500}
            height={630}
            style={{ objectFit: 'cover', objectPosition: 'top center', opacity: 0.6 }}
          />
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            background: 'linear-gradient(to right, #0a0a0a 0%, transparent 40%, transparent 100%)',
          }} />
        </div>

        {/* Content - left side */}
        <div style={{
          position: 'relative', display: 'flex', flexDirection: 'column',
          justifyContent: 'center', padding: '80px 80px', zIndex: 1, flex: 1,
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 20 }}>
            <span style={{ fontSize: 120, fontWeight: 900, color: '#ffffff', letterSpacing: -5 }}>DNC</span>
            <span style={{ fontSize: 120, fontWeight: 900, color: '#F97316', letterSpacing: -5 }}>7</span>
          </div>

          {/* Tagline */}
          <div style={{ fontSize: 32, fontWeight: 600, color: 'rgba(255,255,255,0.55)', marginBottom: 12, display: 'flex' }}>
            Prodüksiyon · AI · Web · Mobil
          </div>

          {/* Description */}
          <div style={{ fontSize: 22, fontWeight: 400, color: 'rgba(255,255,255,0.3)', display: 'flex' }}>
            Dijital Dünyada Tam Hizmet Ajansı
          </div>

          {/* URL badge */}
          <div style={{
            marginTop: 32, display: 'flex', alignItems: 'center', gap: 8,
            background: 'rgba(249,115,22,0.12)', padding: '10px 20px',
            borderRadius: 9999, border: '1px solid rgba(249,115,22,0.2)',
            width: 'fit-content',
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F97316', display: 'flex' }} />
            <span style={{ fontSize: 16, fontWeight: 700, color: '#F97316' }}>dnc7.com</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
