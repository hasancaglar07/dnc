'use client';

import { useState, useEffect } from 'react';

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="mobile-sticky-cta" style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9970,
      background: 'var(--dark, #0a0a0a)', borderTop: '1px solid rgba(255,255,255,.1)',
      padding: '10px 16px', display: 'none',
      gap: 8, animation: 'fadeIn .3s ease',
    }}>
      <a href="tel:+905543794695" style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        padding: '12px 0', borderRadius: 10, background: 'rgba(255,255,255,.08)',
        color: '#fff', fontSize: 13, fontWeight: 700, textDecoration: 'none',
      }}>
        <i className="bi bi-telephone-fill" style={{ fontSize: 14 }}></i> Ara
      </a>
      <a href="https://wa.me/905543794695" target="_blank" rel="noopener noreferrer" style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        padding: '12px 0', borderRadius: 10, background: '#25D366',
        color: '#fff', fontSize: 13, fontWeight: 700, textDecoration: 'none',
      }}>
        <i className="bi bi-whatsapp" style={{ fontSize: 14 }}></i> WhatsApp
      </a>
    </div>
  );
}
