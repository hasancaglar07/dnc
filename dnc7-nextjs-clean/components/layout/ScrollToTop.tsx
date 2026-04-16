'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: '26px',
        right: '26px',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: 'var(--accent)',
        color: '#fff',
        border: 'none',
        fontSize: '17px',
        cursor: 'pointer',
        zIndex: 200,
        boxShadow: '0 8px 24px rgba(249,115,22,0.3)',
        transition: 'all 0.15s'
      }}
    >
      ↑
    </button>
  );
}
