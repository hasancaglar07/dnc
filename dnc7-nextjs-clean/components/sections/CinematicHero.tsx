'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Player from '@vimeo/player';

const SLIDES = [
  { vimeoId: 1116741515, title: 'CW Energy',                 category: 'Kurumsal Tanıtım Filmi',   year: '2025' },
  { vimeoId: 1116760970, title: 'Spice Hotel & SPA',          category: 'Reklam Filmi',              year: '2021' },
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

function styleIframe(container: HTMLDivElement | null) {
  if (!container) return;
  const iframe = container.querySelector('iframe');
  if (!iframe) return;
  iframe.style.position = 'absolute';
  iframe.style.top = '50%';
  iframe.style.left = '50%';
  iframe.style.width = 'max(100vw, 177.78vh)';
  iframe.style.height = 'max(100vh, 56.25vw)';
  iframe.style.transform = 'translate(-50%, -50%)';
  iframe.style.border = 'none';
  iframe.style.pointerEvents = 'none';
}

export default function CinematicHero() {
  const containerA = useRef<HTMLDivElement>(null);
  const containerB = useRef<HTMLDivElement>(null);
  const playerA = useRef<Player | null>(null);
  const playerB = useRef<Player | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeSlot = useRef<'A' | 'B'>('A');
  const preloadReady = useRef(false);

  const [current, setCurrent] = useState(FIRST_SLIDE);
  const [loaded, setLoaded] = useState(false);
  const [showA, setShowA] = useState(true);

  const getNextIndex = (idx: number) => (idx + 1) % SLIDES.length;

  const getPlayers = useCallback(() => {
    const active = activeSlot.current === 'A'
      ? { player: playerA.current, container: containerA.current }
      : { player: playerB.current, container: containerB.current };
    const standby = activeSlot.current === 'A'
      ? { player: playerB.current, container: containerB.current }
      : { player: playerA.current, container: containerA.current };
    return { active, standby };
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % SLIDES.length;
        return next;
      });
    }, DURATION);
  }, []);

  const switchToNext = useCallback((nextIdx: number) => {
    if (!preloadReady.current) return;
    preloadReady.current = false;

    const { standby } = getPlayers();

    if (activeSlot.current === 'A') {
      setShowA(false);
      playerA.current?.pause();
      standby.player?.play();
    } else {
      setShowA(true);
      playerB.current?.pause();
      standby.player?.play();
    }
    activeSlot.current = activeSlot.current === 'A' ? 'B' : 'A';
  }, [getPlayers]);

  useEffect(() => {
    if (current === FIRST_SLIDE && !loaded) return;
    switchToNext(current);
    startTimer();

    const nextIdx = getNextIndex(current);
    const { standby } = getPlayers();
    if (standby.player) {
      preloadReady.current = false;
      standby.player.loadVideo(SLIDES[nextIdx].vimeoId).then(() => {
        standby.player?.setCurrentTime(START_TIME);
        standby.player?.pause();
        preloadReady.current = true;
        styleIframe(standby.container);
      });
    }
  }, [current]);

  useEffect(() => {
    if (!containerA.current || !containerB.current) return;

    const pA = new Player(containerA.current, {
      id: SLIDES[FIRST_SLIDE].vimeoId,
      background: true,
      muted: true,
      loop: true,
      autopause: false,
      responsive: false,
      width: window.innerWidth,
      height: window.innerHeight,
    });
    playerA.current = pA;

    const pB = new Player(containerB.current, {
      id: SLIDES[getNextIndex(FIRST_SLIDE)].vimeoId,
      background: true,
      muted: true,
      loop: true,
      autopause: false,
      responsive: false,
      width: window.innerWidth,
      height: window.innerHeight,
    });
    playerB.current = pB;

    Promise.all([pA.ready(), pB.ready()]).then(() => {
      pA.setCurrentTime(START_TIME);
      pA.play();
      styleIframe(containerA.current);

      pB.setCurrentTime(START_TIME);
      pB.pause();
      styleIframe(containerB.current);

      preloadReady.current = true;
      setLoaded(true);
      startTimer();
    });

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      pA.destroy();
      pB.destroy();
    };
  }, []);

  const goTo = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent(i);
  };

  const slide = SLIDES[current];

  return (
    <section className="vh-root">
      <div className={`vh-video-wrap ${showA ? 'vh-video-wrap--in' : 'vh-video-wrap--out'}`}>
        <div ref={containerA} className="vh-player-container" />
      </div>
      <div className={`vh-video-wrap ${!showA ? 'vh-video-wrap--in' : 'vh-video-wrap--out'}`}>
        <div ref={containerB} className="vh-player-container" />
      </div>

      <div className="vh-overlay" />

      <div className={`vh-center ${loaded ? 'vh-center--in' : ''}`}>
        <div className="vh-logo">DNC<em>7</em></div>
        <p className="vh-tagline">Film · Reklam · Prodüksiyon</p>
      </div>

      <div className={`vh-info ${loaded ? 'vh-info--in' : ''}`}>
        <span className="vh-info-cat">{slide.category}</span>
        <h2 className="vh-info-title">{slide.title}</h2>
        <span className="vh-info-year">{slide.year}</span>
      </div>

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

      <div className={`vh-scroll ${loaded ? 'vh-scroll--in' : ''}`}>
        <div className="vh-scroll-line" />
        <span>Scroll</span>
      </div>

      <div className="vh-progress">
        <div key={current} className="vh-progress-fill" />
      </div>
    </section>
  );
}
