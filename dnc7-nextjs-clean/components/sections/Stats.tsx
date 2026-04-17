'use client';

import { type ReactElement } from 'react';
import { useCountUp } from '@/lib/useCountUp';
import { stats } from '@/data/stats';

interface StatItemProps {
  number: string;
  label: string;
  icon: ReactElement;
}

function parseNumber(raw: string): { target: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { target: 0, suffix: raw };
  return { target: parseInt(match[1], 10), suffix: match[2] };
}

function AnimatedStat({ number, label, icon }: StatItemProps) {
  const { target, suffix } = parseNumber(number);
  const { value, ref } = useCountUp({ target, duration: 1800 });
  const done = value >= target;

  return (
    <div
      className={`stat-b ${done ? 'stat-done' : ''}`}
      ref={ref as React.RefObject<HTMLDivElement>}
      data-ghost={number}
    >
      <span className="stat-ghost" aria-hidden="true">{number}</span>
      <span className="stat-icon" aria-hidden="true">{icon}</span>
      <div className="stat-n">
        <span className="stat-count">{value}</span>
        <em>{suffix}</em>
      </div>
      <div className="stat-l">{label}</div>
      <span className="stat-spark" aria-hidden="true" />
    </div>
  );
}

const statIcons: ReactElement[] = [
  <i key="1" className="bi bi-briefcase-fill" />,
  <i key="2" className="bi bi-people-fill" />,
  <i key="3" className="bi bi-calendar-heart-fill" />,
  <i key="4" className="bi bi-award-fill" />,
];

export default function Stats() {
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
        <div className="stats-g">
          {stats.map((stat, idx) => (
            <AnimatedStat
              key={stat.id}
              number={stat.number}
              label={stat.label}
              icon={statIcons[idx] || <i className="bi bi-star-fill" />}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
