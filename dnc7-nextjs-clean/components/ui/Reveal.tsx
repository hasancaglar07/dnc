'use client';

import { useScrollReveal } from '@/lib/useScrollReveal';
import { type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}

export default function Reveal({ children, className = '', stagger = false, delay = 0 }: RevealProps) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${stagger ? 'reveal-stagger' : 'reveal'} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
