'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { useCountUp } from '@/lib/useCountUp';
import { stats } from '@/data/stats';

function parseNumber(raw: string): { target: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { target: 0, suffix: raw };
  return { target: parseInt(match[1], 10), suffix: match[2] };
}

const statMeta = [
  { color: '#F97316', emoji: '💼' },
  { color: '#3B82F6', emoji: '🤝' },
  { color: '#A855F7', emoji: '📅' },
  { color: '#10B981', emoji: '🏆' },
];

function AnimatedStat({ number, label, index }: { number: string; label: string; index: number }) {
  const { target, suffix } = parseNumber(number);
  const { value, ref } = useCountUp({ target, duration: 1800 });
  const done = value >= target;
  const meta = statMeta[index] || statMeta[0];

  return (
    <div
      className={`stat-card ${done ? 'stat-card--done' : ''}`}
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ '--stat-accent': meta.color } as React.CSSProperties}
    >
      <div className="stat-card__glow" aria-hidden="true" />
      <div className="stat-card__icon">{meta.emoji}</div>
      <div className="stat-card__number">
        <span className="stat-card__count">{value}</span>
        <span className="stat-card__suffix">{suffix}</span>
      </div>
      <div className="stat-card__label">{label}</div>
      <div className="stat-card__bar" aria-hidden="true">
        <div className="stat-card__bar-fill" style={{ width: done ? '100%' : '0%' }} />
      </div>
    </div>
  );
}

export default function Stats() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const checkActive = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.stat-card') as HTMLElement;
    if (!card) return;
    const cardW = card.offsetWidth + 14;
    const idx = Math.round(el.scrollLeft / cardW);
    setActiveIdx(Math.min(idx, stats.length - 1));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkActive();
    el.addEventListener('scroll', checkActive, { passive: true });
    window.addEventListener('resize', checkActive);
    return () => {
      el.removeEventListener('scroll', checkActive);
      window.removeEventListener('resize', checkActive);
    };
  }, [checkActive]);

  function scrollTo(idx: number) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.stat-card') as HTMLElement;
    if (!card) return;
    const cardW = card.offsetWidth + 14;
    el.scrollTo({ left: idx * cardW, behavior: 'smooth' });
  }

  return (
    <section className="stats-sec">
      <div className="stats-bg-decor" aria-hidden="true">
        <span className="stats-orb stats-orb-1" />
        <span className="stats-orb stats-orb-2" />
        <span className="stats-grid-lines" />
      </div>
      <div className="wrap">
        <div className="stats-intro">
          <span className="stats-kicker">RAKAMLARLA DNC7</span>
          <h2 className="stats-title">
            12 yıl<span className="stats-title-dot">.</span> 250+ proje<span className="stats-title-dot">.</span> <em>Sıfır tesadüf.</em>
          </h2>
        </div>

        <div className="stats-track-wrap">
          <div className="stats-g" ref={trackRef}>
            {stats.map((stat, idx) => (
              <AnimatedStat
                key={stat.id}
                number={stat.number}
                label={stat.label}
                index={idx}
              />
            ))}
          </div>

          <div className="stats-dots">
            {stats.map((_, idx) => (
              <button
                key={idx}
                className={`stats-dot ${idx === activeIdx ? 'stats-dot--active' : ''}`}
                onClick={() => scrollTo(idx)}
                aria-label={`İstatistik ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
