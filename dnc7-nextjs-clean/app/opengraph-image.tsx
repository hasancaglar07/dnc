import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const alt = 'DNC7 — Prodüksiyon, AI & Dijital Çözümler';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const heroImagePath = join(process.cwd(), 'public/assets/images/herroo.png');
  const heroImageBuffer = await readFile(heroImagePath);
  const heroImageBase64 = `data:image/png;base64,${heroImageBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          background: '#0a0a0a',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Orange glow behind person */}
        <div style={{
          position: 'absolute', bottom: -50, left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)',
          display: 'flex',
        }} />

        {/* Hero image - centered */}
        <img
          src={heroImageBase64}
          alt=""
          width={480}
          height={600}
          style={{
            position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
            objectFit: 'contain', objectPosition: 'bottom center',
          }}
        />

        {/* Gradient overlay top */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 300,
          background: 'linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)',
          display: 'flex',
        }} />

        {/* Content on top */}
        <div style={{
          position: 'absolute', top: 40, left: 0, right: 0,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          zIndex: 2,
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 12 }}>
            <span style={{ fontSize: 100, fontWeight: 900, color: '#ffffff', letterSpacing: -4 }}>DNC</span>
            <span style={{ fontSize: 100, fontWeight: 900, color: '#F97316', letterSpacing: -4 }}>7</span>
          </div>

          {/* Tagline */}
          <div style={{ fontSize: 28, fontWeight: 600, color: 'rgba(255,255,255,0.6)', display: 'flex' }}>
            Prodüksiyon · AI · Web · Mobil · Reklam
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
          height: 120, display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
          paddingBottom: 24,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            background: 'rgba(249,115,22,0.15)', padding: '8px 24px',
            borderRadius: 9999, border: '1px solid rgba(249,115,22,0.25)',
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F97316', display: 'flex' }} />
            <span style={{ fontSize: 18, fontWeight: 700, color: '#F97316' }}>dnc7.com</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
