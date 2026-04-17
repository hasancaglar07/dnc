'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
  };

  const reject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9980,
      background: 'var(--dark, #0a0a0a)', borderTop: '1px solid rgba(255,255,255,.1)',
      padding: '16px 0',
      animation: 'fadeIn .4s ease',
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', lineHeight: 1.6, flex: 1, minWidth: 280, margin: 0 }}>
          🍪 Deneyiminizi iyileştirmek için çerezler kullanıyoruz.{' '}
          <Link href="/gizlilik" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Gizlilik politikamızı</Link> inceleyebilirsiniz.
        </p>
        <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
          <button onClick={reject} style={{
            padding: '8px 20px', borderRadius: 8, fontSize: 13, fontWeight: 600,
            border: '1px solid rgba(255,255,255,.15)', background: 'transparent', color: 'rgba(255,255,255,.6)', cursor: 'pointer',
          }}>Reddet</button>
          <button onClick={accept} style={{
            padding: '8px 20px', borderRadius: 8, fontSize: 13, fontWeight: 700,
            border: 'none', background: 'var(--accent, #F97316)', color: '#fff', cursor: 'pointer',
          }}>Kabul Et</button>
        </div>
      </div>
    </div>
  );
}
