'use client';

import { useState, useEffect, useRef } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'complete' | 'exit'>('loading');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let current = 0;
    const timer = setInterval(() => {
      // Eased progress — starts fast, slows near end
      const remaining = 100 - current;
      const increment = Math.max(0.5, remaining * 0.08 + Math.random() * 3);
      current = Math.min(current + increment, 100);
      setProgress(current);

      if (current >= 100) {
        clearInterval(timer);
        setPhase('complete');
        setTimeout(() => setPhase('exit'), 600);
        setTimeout(() => setIsLoading(false), 1200);
      }
    }, 40);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  const p = Math.round(progress);

  return (
    <div
      ref={containerRef}
      className={`preloader-new ${phase === 'exit' ? 'preloader-exit' : ''}`}
    >
      {/* Animated background lines */}
      <div className="preloader-lines">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="preloader-line"
            style={{
              left: `${20 * (i + 1)}%`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className="preloader-center">
        {/* Logo */}
        <div className={`preloader-logo ${phase === 'complete' ? 'preloader-logo-done' : ''}`}>
          <span className="preloader-logo-d">D</span>
          <span className="preloader-logo-n">N</span>
          <span className="preloader-logo-c">C</span>
          <span className="preloader-logo-7">7</span>
        </div>

        {/* Progress number */}
        <div className="preloader-number">
          <span className="preloader-num-value">{p}</span>
          <span className="preloader-num-percent">%</span>
        </div>

        {/* Progress bar */}
        <div className="preloader-bar">
          <div
            className="preloader-bar-fill"
            style={{ width: `${progress}%` }}
          />
          <div
            className="preloader-bar-glow"
            style={{ left: `${progress}%` }}
          />
        </div>

        {/* Status text */}
        <div className="preloader-status">
          {p < 30 && 'Yükleniyor...'}
          {p >= 30 && p < 70 && 'Deneyim hazırlanıyor...'}
          {p >= 70 && p < 100 && 'Neredeyse hazır...'}
          {p >= 100 && 'Hoş geldiniz'}
        </div>
      </div>

      {/* Corner accents */}
      <div className="preloader-corner preloader-corner-tl" />
      <div className="preloader-corner preloader-corner-br" />
    </div>
  );
}
