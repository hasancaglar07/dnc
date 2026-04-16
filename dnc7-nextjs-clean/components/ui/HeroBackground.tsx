'use client';

import { useRef, useEffect, useCallback } from 'react';

interface Props {
  accentColor?: string;
  particleCount?: number;
}

export default function HeroBackground({ accentColor = '#F97316', particleCount = 40 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      w = rect?.width || window.innerWidth;
      h = rect?.height || window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // Particles
    const accent = hexToRgb(accentColor);
    const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number; phase: number }[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2.5 + 0.5,
        o: Math.random() * 0.4 + 0.1,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Gradient orbs
    const orbs = [
      { x: 0.25, y: 0.4, r: 0.35, color: accent, opacity: 0.04, speed: 0.0003 },
      { x: 0.7, y: 0.6, r: 0.3, color: accent, opacity: 0.03, speed: 0.0004 },
      { x: 0.5, y: 0.2, r: 0.25, color: { r: 100, g: 100, b: 255 }, opacity: 0.02, speed: 0.0002 },
    ];

    let t = 0;
    const draw = () => {
      t++;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Draw gradient orbs
      for (const orb of orbs) {
        const ox = (orb.x + Math.sin(t * orb.speed) * 0.08 + (mx - 0.5) * 0.05) * w;
        const oy = (orb.y + Math.cos(t * orb.speed * 1.3) * 0.06 + (my - 0.5) * 0.05) * h;
        const or = orb.r * Math.min(w, h);
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, or);
        grad.addColorStop(0, `rgba(${orb.color.r},${orb.color.g},${orb.color.b},${orb.opacity})`);
        grad.addColorStop(1, `rgba(${orb.color.r},${orb.color.g},${orb.color.b},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = `rgba(${accent.r},${accent.g},${accent.b},0.04)`;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.06;
            ctx.strokeStyle = `rgba(${accent.r},${accent.g},${accent.b},${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        p.x += p.vx + (mx - 0.5) * 0.15;
        p.y += p.vy + (my - 0.5) * 0.15;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        const pulse = Math.sin(t * 0.02 + p.phase) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accent.r},${accent.g},${accent.b},${p.o * pulse})`;
        ctx.fill();
      }

      // Subtle grid dots
      const gridSize = 60;
      const gridOpacity = 0.025;
      for (let gx = 0; gx < w; gx += gridSize) {
        for (let gy = 0; gy < h; gy += gridSize) {
          ctx.beginPath();
          ctx.arc(gx, gy, 0.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,0,0,${gridOpacity})`;
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [accentColor, particleCount]);

  useEffect(() => {
    const cleanup = init();

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });

    return () => {
      cleanup?.();
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
