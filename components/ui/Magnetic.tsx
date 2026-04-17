'use client';

import { useRef, type ReactNode, type CSSProperties } from 'react';

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
  style?: CSSProperties;
  href?: string;
  onClick?: () => void;
  as?: 'button' | 'a' | 'div';
}

export default function Magnetic({
  children,
  strength = 0.35,
  className = '',
  style,
  href,
  as: Tag = href ? 'a' : 'button',
}: MagneticProps) {
  const ref = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0,0)';
    el.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
  };

  const handleMouseEnter = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 0.15s ease-out';
  };

  const props: Record<string, unknown> = {
    ref,
    className,
    style,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
  };

  if (href && Tag === 'a') props.href = href;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Tag {...(props as any)}>{children}</Tag>;
}
