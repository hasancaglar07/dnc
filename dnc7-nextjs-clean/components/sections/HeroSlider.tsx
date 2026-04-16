'use client';

import { useState, useEffect, useRef, type ReactElement } from 'react';
import { services } from '@/data/services';
import dynamic from 'next/dynamic';
const Hero3DBackground = dynamic(() => import('@/components/ui/Hero3DBackground'), { ssr: false });
import HeroBackground from '@/components/ui/HeroBackground';
import Magnetic from '@/components/ui/Magnetic';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

const serviceIcons: Record<number, ReactElement> = {
  1: <i className="bi bi-camera-reels" style={{ fontSize: 48 }}></i>,
  2: <i className="bi bi-rocket-takeoff" style={{ fontSize: 48 }}></i>,
  3: <i className="bi bi-cpu" style={{ fontSize: 48 }}></i>,
  4: <i className="bi bi-laptop" style={{ fontSize: 48 }}></i>,
  5: <i className="bi bi-phone" style={{ fontSize: 48 }}></i>,
  6: <i className="bi bi-controller" style={{ fontSize: 48 }}></i>,
  7: <i className="bi bi-megaphone" style={{ fontSize: 48 }}></i>,
  8: <i className="bi bi-cart4" style={{ fontSize: 48 }}></i>,
  9: <i className="bi bi-badge-ad" style={{ fontSize: 48 }}></i>,
};

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isMobile = useIsMobile(900);
  const SLIDE_DURATION = 6000;

  const goTo = (idx: number) => {
    if (isAnimating || idx === currentIndex) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex(idx);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const next = () => goTo((currentIndex + 1) % services.length);
  const prev = () => goTo((currentIndex - 1 + services.length) % services.length);

  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / SLIDE_DURATION, 1);
      setProgress(p);
      if (p < 1) {
        progressRef.current = setTimeout(tick, 30);
      } else {
        goTo((currentIndex + 1) % services.length);
      }
    };
    progressRef.current = setTimeout(tick, 30);
    return () => { if (progressRef.current) clearTimeout(progressRef.current); };
  }, [currentIndex]);

  // Mouse parallax handler
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;   // -1..1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;  // -1..1
    setMouse({ x, y });
  };

  const handleMouseLeave = () => setMouse({ x: 0, y: 0 });

  const s = services[currentIndex];

  return (
    <section
      className="hero-new"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* BG: Three.js on desktop, lightweight canvas on mobile */}
      {isMobile ? (
        <HeroBackground accentColor={s.accent} particleCount={30} />
      ) : (
        <Hero3DBackground accentColor={s.accent} />
      )}
      
      {/* Noise overlay */}
      <div className="hero-noise" />

      {/* Large decorative number — parallax */}
      <div
        className="hero-big-num"
        style={{
          color: s.accent,
          transform: `translate(${mouse.x * 18}px, ${mouse.y * 10}px)`,
          transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {String(currentIndex + 1).padStart(2, '0')}
      </div>

      {/* Content */}
      <div className="wrap hero-wrap">
        <div className="hero-layout">
          {/* Left: Main content */}
          <div className="hero-left">
            {/* Breadcrumb */}
            <div className="hero-crumb" style={{ color: s.accent }}>
              <span className="hero-crumb-line" style={{ background: s.accent }}></span>
              <span>{String(currentIndex + 1).padStart(2, '0')}</span>
              <span style={{ opacity: 0.4 }}>/</span>
              <span style={{ opacity: 0.4 }}>{String(services.length).padStart(2, '0')}</span>
              <span style={{ opacity: 0.5 }}>—</span>
              <span>Hizmetlerimiz</span>
            </div>

            {/* Title */}
            <h1 className="hero-title" key={`title-${currentIndex}`}>
              {s.name.split(' ').map((word, i) => (
                <span key={i} className="hero-word">
                  <span 
                    className="hero-word-in"
                    style={{ 
                      animationDelay: `${i * 80}ms`,
                      color: i === 0 ? s.accent : 'var(--text)'
                    }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            {/* Description */}
            <p className="hero-desc" key={`desc-${currentIndex}`}>
              {s.description}
            </p>

            {/* Tags */}
            <div className="hero-tags" key={`tags-${currentIndex}`}>
              {s.tags.slice(0, 4).map((tag, i) => (
                <span 
                  key={i} 
                  className="hero-tag"
                  style={{ 
                    animationDelay: `${300 + i * 60}ms`,
                    borderColor: i < 2 ? `${s.accent}50` : 'var(--border)',
                    color: i < 2 ? s.accent : 'var(--muted)',
                    background: i < 2 ? `${s.accent}08` : 'transparent'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Mobile service badge (visible only on mobile) */}
            <div className="hero-mob-badge" key={`mob-${currentIndex}`} style={{ borderColor: `${s.accent}30` }}>
              <div className="hero-mob-icon" style={{ color: s.accent, background: `${s.accent}10` }}>
                {serviceIcons[s.id]}
              </div>
              <div className="hero-mob-info">
                <span className="hero-mob-name">{s.name}</span>
                <div className="hero-mob-bar">
                  <div className="hero-mob-bar-fill" style={{ background: s.accent, width: `${progress * 100}%` }}></div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="hero-actions" key={`acts-${currentIndex}`}>
              <Magnetic strength={0.4}>
                <a href="#hizmetler" className="hero-cta-primary" style={{ background: s.accent }}>
                  <span>Keşfet</span>
                  <span className="hero-cta-arrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a href="#iletisim" className="hero-cta-ghost">
                  Teklif Al
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Right: Visual Card */}
          <div className="hero-right">
            <div
              className="hero-card"
              key={`card-${currentIndex}`}
              style={{
                transform: `translate(${mouse.x * -12}px, ${mouse.y * -8}px) rotateY(${mouse.x * 4}deg) rotateX(${-mouse.y * 3}deg)`,
                transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              <div className="hero-card-glow" style={{ background: s.accent }}></div>
              <div className="hero-card-inner" style={{ borderColor: `${s.accent}20` }}>
                <div className="hero-card-icon" style={{ color: s.accent, background: `${s.accent}08` }}>
                  {serviceIcons[s.id]}
                </div>
                <div className="hero-card-label">{s.name}</div>
                <div className="hero-card-bar">
                  <div className="hero-card-bar-fill" style={{ background: s.accent, width: `${progress * 100}%` }}></div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="hero-float hero-float-1" style={{ borderColor: `${s.accent}30` }}>
                <i className="bi bi-star-fill" style={{ color: s.accent, fontSize: 12 }}></i>
                <span>Premium</span>
              </div>
              <div className="hero-float hero-float-2" style={{ background: s.accent }}>
                <i className="bi bi-check-lg" style={{ color: '#fff', fontSize: 16 }}></i>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="hero-bottom">
          <div className="hero-dots">
            {services.map((srv, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`hero-dot ${i === currentIndex ? 'on' : ''}`}
                style={{ 
                  borderColor: i === currentIndex ? s.accent : 'var(--border)',
                  background: i === currentIndex ? `${s.accent}10` : 'transparent'
                }}
              >
                <span className="hero-dot-pip" style={{ background: i === currentIndex ? s.accent : 'rgba(0,0,0,.15)' }}></span>
                <span className="hero-dot-label">{String(i + 1).padStart(2, '0')}</span>
              </button>
            ))}
          </div>
          <div className="hero-arrows">
            <button className="hero-arr" onClick={prev} disabled={isAnimating}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button className="hero-arr" onClick={next} disabled={isAnimating}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Progress bar at very bottom */}
      <div className="hero-progress">
        <div className="hero-progress-fill" style={{ width: `${progress * 100}%`, background: s.accent }}></div>
      </div>
    </section>
  );
}
