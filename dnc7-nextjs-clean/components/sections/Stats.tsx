'use client';

import { useRef, type ReactNode } from 'react';
import { useCountUp } from '@/lib/useCountUp';

interface StatItemProps {
  number: string; // e.g. "250+", "85+", "12"
  label: string;
}

function parseNumber(raw: string): { target: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { target: 0, suffix: raw };
  return { target: parseInt(match[1], 10), suffix: match[2] };
}

function AnimatedStat({ number, label }: StatItemProps) {
  const { target, suffix } = parseNumber(number);
  const { value, ref } = useCountUp({ target, duration: 1600 });

  return (
    <div className="stat-b" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="stat-n">
        <span className="stat-count">{value}</span>
        <em>{suffix}</em>
      </div>
      <div className="stat-l">{label}</div>
    </div>
  );
}

import { stats } from '@/data/stats';

export default function Stats() {
  return (
    <section className="stats-sec">
      <div className="wrap">
        <div className="stats-g">
          {stats.map((stat) => (
            <AnimatedStat key={stat.id} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
