import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--dark)', color: '#fff', textAlign: 'center' }}>
      <div>
        <div style={{ fontSize: 'clamp(8rem, 20vw, 14rem)', fontWeight: 900, lineHeight: 1, color: 'var(--accent)', opacity: 0.15, letterSpacing: -8 }}>404</div>
        <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, marginTop: -40, marginBottom: 16 }}>Sayfa Bulunamadı</h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,.5)', marginBottom: 32, maxWidth: 400, margin: '0 auto 32px' }}>
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--accent)', color: '#fff', fontWeight: 700, fontSize: 16, padding: '16px 32px', borderRadius: 9999, textDecoration: 'none' }}>
          Anasayfaya Dön
        </Link>
      </div>
    </div>
  );
}
