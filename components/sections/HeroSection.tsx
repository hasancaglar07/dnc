'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Magnetic from '@/components/ui/Magnetic';

const Hero3DCanvas = dynamic(() => import('@/components/ui/Hero3DPremium'), { ssr: false });

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="hero-v2" ref={sectionRef}>
      {/* Three.js premium background */}
      <div className="hero-v2-three">
        <Hero3DCanvas />
      </div>

      {/* Background decorative elements */}
      <div className="hero-v2-bg-decor">
        <div className="hero-v2-mesh-gradient" />
        <div className="hero-v2-mesh-gradient hero-v2-mesh-gradient-2" />
        <div className="hero-v2-grid-pattern" />
      </div>

      <div className="hero-v2-noise" />

      {/* Left side vertical line */}
      <div className={`hero-v2-side-line ${loaded ? 'in' : ''}`}>
        <div className="hero-v2-side-line-fill" />
      </div>

      {/* Top right decorative tag */}
      <div className={`hero-v2-corner-tag ${loaded ? 'in' : ''}`}>
        <span>DNC</span><span className="hero-v2-corner-tag-seven">7</span>
      </div>

      {/* Fingertip black speech bubble — "Keşfet" callout near her finger */}
      <a href="#hizmetler" className={`hero-v2-bubble ${loaded ? 'in' : ''}`} aria-label="Hizmetlerimizi Keşfet">
        <span className="hero-v2-bubble-top">Hizmetleri</span>
        <span className="hero-v2-bubble-bottom">Keşfet</span>
        <span className="hero-v2-bubble-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
          </svg>
        </span>
        <span className="hero-v2-bubble-tail" />
      </a>

      {/* Rotating circular stamp badge */}
      <div className={`hero-v2-stamp ${loaded ? 'in' : ''}`} aria-hidden="true">
        <svg viewBox="0 0 200 200" className="hero-v2-stamp-text">
          <defs>
            <path id="heroStampCircle" d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0" />
          </defs>
          <text fontSize="15" fontWeight="800" letterSpacing="5" fill="currentColor">
            <textPath href="#heroStampCircle">DNC7 · CREATIVE DIGITAL AGENCY · EST 2012 · </textPath>
          </text>
        </svg>
        <div className="hero-v2-stamp-center">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
          </svg>
        </div>
      </div>

      <div className="wrap hero-v2-wrap">
        {/* Mobile-only watermark behind content */}
        <span className="hero-v2-mobile-watermark" aria-hidden="true">DNC<em>7</em></span>

        {/* Mobile sparkle decorations around medallion */}
        <span className="hero-v2-mobile-decor hero-v2-mobile-decor-1" aria-hidden="true">✦</span>
        <span className="hero-v2-mobile-decor hero-v2-mobile-decor-2" aria-hidden="true">◆</span>
        <span className="hero-v2-mobile-decor hero-v2-mobile-decor-3" aria-hidden="true">+</span>

        <div className="hero-v2-left">
          <h1 className={`hero-v2-title ${loaded ? 'in' : ''}`}>
            <span className="hero-v2-line">
              <span className="hero-v2-word" style={{ animationDelay: '0.15s' }}>Dijitalde</span>
              <span className="hero-v2-word hero-v2-accent hero-v2-shimmer" style={{ animationDelay: '0.25s' }}>Satışlarınızı</span>
            </span>
            <span className="hero-v2-line">
              <span className="hero-v2-word" style={{ animationDelay: '0.35s' }}>Katlayan</span>
            </span>
            <span className="hero-v2-line">
              <span className="hero-v2-word hero-v2-outline" style={{ animationDelay: '0.45s' }}>Güç.</span>
            </span>
          </h1>

          <p className={`hero-v2-sub ${loaded ? 'in' : ''}`}>
            250+ projede ortalama %80 dönüşüm artışı. AI, video prodüksiyon ve web çözümleriyle markanızı rakiplerinizin önüne geçirin.
          </p>

          <div className={`hero-v2-status ${loaded ? 'in' : ''}`}>
            <span className="hero-v2-status-pulse">
              <span className="hero-v2-status-dot" />
              <span className="hero-v2-status-ring" />
            </span>
            <span className="hero-v2-status-text">Nisan ayında sadece 3 yeni proje kabul ediyoruz</span>
            <span className="hero-v2-status-sep">·</span>
            <span className="hero-v2-status-meta">Ort. yanıt 2 saat</span>
          </div>

          <div className={`hero-v2-actions ${loaded ? 'in' : ''}`}>
            <Magnetic strength={0.4}>
              <a href="#iletisim" className="hero-v2-cta-main">
                <span>Ücretsiz Strateji Toplantısı</span>
                <span className="hero-v2-cta-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a href="#projeler" className="hero-v2-cta-sec">
                Projelerimiz
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Photo — absolute on desktop, centered medallion on mobile */}
        <div className={`hero-v2-right ${loaded ? 'in' : ''}`}>
          <div className="hero-v2-photo-halo" aria-hidden="true" />
          <div className="hero-v2-photo-glow" />
          <Image
            src="/assets/images/herroo.png"
            alt="DNC7 Dijital Ajans"
            width={800}
            height={1000}
            className="hero-v2-photo"
            priority
          />
          <div className="hero-v2-float hero-v2-float-1 hero-v2-float-desktop">
            <i className="bi bi-star-fill" style={{ color: 'var(--accent)', fontSize: 12 }} />
            <span>250+ Proje</span>
          </div>
          <div className="hero-v2-float hero-v2-float-2 hero-v2-float-desktop">
            <i className="bi bi-check-lg" style={{ color: '#fff', fontSize: 16 }} />
          </div>
          <div className="hero-v2-float hero-v2-float-3 hero-v2-float-desktop">
            <i className="bi bi-trophy-fill" style={{ color: '#F59E0B', fontSize: 12 }} />
            <span>Premium</span>
          </div>
          {/* Mobile floats — compact chips shown only on mobile */}
          <div className="hero-v2-float hero-v2-float-m1 hero-v2-float-mobile">
            <i className="bi bi-star-fill" style={{ color: 'var(--accent)', fontSize: 10 }} />
            <span>250+</span>
          </div>
          <div className="hero-v2-float hero-v2-float-m2 hero-v2-float-mobile">
            <i className="bi bi-trophy-fill" style={{ color: '#F59E0B', fontSize: 10 }} />
            <span>12+ Yıl</span>
          </div>
        </div>

        <div className={`hero-v2-stats ${loaded ? 'in' : ''}`}>
          <div className="hero-v2-stat">
            <span className="hero-v2-stat-num">12+</span>
            <span className="hero-v2-stat-label">Yıllık Deneyim</span>
          </div>
          <div className="hero-v2-stat-divider" />
          <div className="hero-v2-stat">
            <span className="hero-v2-stat-num">250+</span>
            <span className="hero-v2-stat-label">Tamamlanan Proje</span>
          </div>
          <div className="hero-v2-stat-divider" />
          <div className="hero-v2-stat">
            <span className="hero-v2-stat-num">85+</span>
            <span className="hero-v2-stat-label">Mutlu Müşteri</span>
          </div>
          <div className="hero-v2-stat-divider" />
          <div className="hero-v2-stat">
            <span className="hero-v2-stat-num">9</span>
            <span className="hero-v2-stat-label">Farklı Hizmet</span>
          </div>
        </div>

        <div className={`hero-v2-marquee ${loaded ? 'in' : ''}`} aria-hidden="true">
          <div className="hero-v2-marquee-track">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="hero-v2-marquee-group">
                <span>Next.js</span><span className="hero-v2-marquee-sep">◆</span>
                <span>Three.js</span><span className="hero-v2-marquee-sep">◆</span>
                <span>AI & LLM</span><span className="hero-v2-marquee-sep">◆</span>
                <span>React Native</span><span className="hero-v2-marquee-sep">◆</span>
                <span>Drone 4K</span><span className="hero-v2-marquee-sep">◆</span>
                <span>Prodüksiyon</span><span className="hero-v2-marquee-sep">◆</span>
                <span>E-Ticaret</span><span className="hero-v2-marquee-sep">◆</span>
                <span>SEO</span><span className="hero-v2-marquee-sep">◆</span>
                <span>WebGL</span><span className="hero-v2-marquee-sep">◆</span>
                <span>Motion</span><span className="hero-v2-marquee-sep">◆</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`hero-v2-scroll ${loaded ? 'in' : ''}`}>
        <div className="hero-v2-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
