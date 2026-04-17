'use client';

import { useState, useEffect, useCallback } from 'react';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !sessionStorage.getItem('exitPopupShown')) {
      setShow(true);
      sessionStorage.setItem('exitPopupShown', 'true');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [handleMouseLeave]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: integrate with email service
    setSubmitted(true);
    setTimeout(() => setShow(false), 2500);
  };

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'fadeIn .3s ease',
      }}
      onClick={() => setShow(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--dark, #0a0a0a)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '16px', padding: '40px', maxWidth: '460px', width: '90%',
          position: 'relative', textAlign: 'center',
        }}
      >
        <button
          onClick={() => setShow(false)}
          style={{
            position: 'absolute', top: '12px', right: '16px',
            background: 'none', border: 'none', color: 'var(--text2, #888)',
            fontSize: '24px', cursor: 'pointer', lineHeight: 1,
          }}
          aria-label="Kapat"
        >
          ×
        </button>

        <div style={{ fontSize: '48px', marginBottom: '12px' }}>🎁</div>
        <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
          Bekleyin, gitmeden önce...
        </h3>
        <p style={{ color: 'var(--text2, #aaa)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
          <strong style={{ color: '#FF6B35' }}>Ücretsiz dijital danışmanlık</strong> için e-postanızı bırakın.
          Uzman ekibimiz projenizi değerlendirsin.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input
              type="email"
              required
              placeholder="E-posta adresiniz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '14px 16px', borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)',
                color: '#fff', fontSize: '15px', outline: 'none',
              }}
            />
            <button
              type="submit"
              className="btn-orange"
              style={{ width: '100%', padding: '14px', fontSize: '15px', fontWeight: 600 }}
            >
              Ücretsiz Danışmanlık Al
            </button>
            <p style={{ fontSize: '12px', color: 'var(--text2, #666)', margin: 0 }}>
              Spam göndermiyoruz. İstediğiniz zaman çıkabilirsiniz.
            </p>
          </form>
        ) : (
          <div style={{ padding: '20px 0' }}>
            <div style={{ fontSize: '40px', marginBottom: '8px' }}>✅</div>
            <p style={{ color: '#10B981', fontWeight: 600, fontSize: '16px' }}>
              Teşekkürler! En kısa sürede size ulaşacağız.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
