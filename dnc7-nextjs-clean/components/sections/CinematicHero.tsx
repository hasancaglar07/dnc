'use client';

import { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';

const SLIDES = [
  { vimeoId: 1116741515, title: 'CW Energy',                 category: 'Kurumsal Tanıtım Filmi',   year: '2025' },
  { vimeoId: 1116760970, title: 'Spice Hotel & SPA',          category: 'Sinematik Tanıtım Filmi',  year: '2021' },
  { vimeoId: 1184357793, title: 'Q Lounge',                  category: 'Reklam Filmi',             year: '2026' },
  { vimeoId: 1184347798, title: 'Martı Resort',              category: 'Reklam Filmi',             year: '2026' },
  { vimeoId: 1184345822, title: 'Elika Cave',                category: 'Reklam Filmi',             year: '2026' },
  { vimeoId: 1184343554, title: 'Cappadocia & Sacred House', category: 'Reklam Filmi',             year: '2026' },
  { vimeoId: 1116793981, title: 'Güney Seracılık',           category: 'Kurumsal Tanıtım Filmi',   year: '2025' },
  { vimeoId: 1116770115, title: 'Kadir Alkan',               category: 'Şube Tanıtım Filmi',       year: '2025' },
  { vimeoId: 1184365782, title: 'Coinfeedback.io',           category: 'Manifest Video',           year: '2026' },
  { vimeoId: 1184365492, title: 'Coinfeedback.io',           category: 'Reklam Filmi',             year: '2026' },
  { vimeoId: 1184362781, title: 'Çayır Çayır',              category: 'Yalçın Topyanak — Klip',   year: '2026' },
  { vimeoId: 1184359223, title: 'Oversize & Papabenj',       category: 'Isabella — Klip',          year: '2026' },
  { vimeoId: 1184349027, title: 'Melis Sökmen',              category: 'Sonralar — Müzik Klibi',   year: '2026' },
  { vimeoId: 1116802661, title: 'Insammer',                  category: 'Vampires — Müzik Klibi',   year: '2025' },
  { vimeoId: 1116733533, title: 'Yeşim & Ahmet',             category: 'Love Story',               year: '2025' },
];

const FIRST_SLIDE = 1;
const DURATION = 25000;
const START_TIME = 4;

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef    = useRef<Player | null>(null);
  const timerRef     = useRef<ReturnType<typeof setInterval> | null>(null);

  const [current, setCurrent]         = useState(FIRST_SLIDE);
  const [loaded, setLoaded]           = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, DURATION);
  };

  const advance = () => {
    setCurrent(prev => {
      const next = (prev + 1) % SLIDES.length;
      loadSlide(next);
      return next;
    });
  };

  const goTo = (i: number) => {
    if (transitioning) return;
    if (timerRef.current) clearInterval(timerRef.current);
    loadSlide(i);
    setCurrent(i);
    startTimer();
  };

  const loadSlide = (i: number) => {
    if (!playerRef.current) return;
    setTransitioning(true);
    playerRef.current.loadVideo(SLIDES[i].vimeoId).then(() => {
      playerRef.current?.setCurrentTime(START_TIME);
      playerRef.current?.play();
      setTimeout(() => setTransitioning(false), 400);
    });
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const player = new Player(containerRef.current, {
      id: SLIDES[FIRST_SLIDE].vimeoId,
      background: true,
      muted: true,
      loop: true,
      autopause: false,
      responsive: false,
      width: window.innerWidth,
      height: window.innerHeight,
    });

    playerRef.current = player;

    player.ready().then(() => {
      player.setCurrentTime(START_TIME);
      player.play();
      setLoaded(true);
      startTimer();

      // Make the internal iframe fill the container via cover
      const iframe = containerRef.current?.querySelector('iframe');
      if (iframe) {
        iframe.style.position = 'absolute';
        iframe.style.top = '50%';
        iframe.style.left = '50%';
        iframe.style.width = 'max(100vw, 177.78vh)';
        iframe.style.height = 'max(100vh, 56.25vw)';
        iframe.style.transform = 'translate(-50%, -50%)';
        iframe.style.border = 'none';
        iframe.style.pointerEvents = 'none';
      }
    });

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      player.destroy();
    };
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="vh-root">

      {/* ── VIMEO PLAYER CONTAINER ── */}
      <div className={`vh-video-wrap ${transitioning ? 'vh-video-wrap--out' : 'vh-video-wrap--in'}`}>
        <div ref={containerRef} className="vh-player-container" />
      </div>

      {/* ── OVERLAY ── */}
      <div className="vh-overlay" />

      {/* ── CENTER LOGO ── */}
      <div className={`vh-center ${loaded ? 'vh-center--in' : ''}`}>
        <div className="vh-logo">DNC<em>7</em></div>
        <p className="vh-tagline">Film · Reklam · Prodüksiyon</p>
      </div>

      {/* ── BOTTOM LEFT INFO ── */}
      <div className={`vh-info ${loaded ? 'vh-info--in' : ''} ${transitioning ? 'vh-info--out' : ''}`}>
        <span className="vh-info-cat">{slide.category}</span>
        <h2 className="vh-info-title">{slide.title}</h2>
        <span className="vh-info-year">{slide.year}</span>
      </div>

      {/* ── BOTTOM RIGHT NAV ── */}
      <div className={`vh-nav ${loaded ? 'vh-nav--in' : ''}`}>
        <div className="vh-dots">
          {SLIDES.map((s, i) => (
            <button
              key={i}
              className={`vh-dot ${i === current ? 'vh-dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={s.title}
            />
          ))}
        </div>
        <span className="vh-nav-count">
          {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
        </span>
      </div>

      {/* ── SCROLL HINT ── */}
      <div className={`vh-scroll ${loaded ? 'vh-scroll--in' : ''}`}>
        <div className="vh-scroll-line" />
        <span>Scroll</span>
      </div>

      {/* ── PROGRESS BAR ── */}
      <div className="vh-progress">
        <div key={current} className="vh-progress-fill" />
      </div>

    </section>
  );
}
