'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

const videoRefs = [
  {
    id: 'CghBKEBAr73',
    type: 'reel',
    title: 'Referans Video 01',
    href: 'https://www.instagram.com/reel/CghBKEBAr73/?igsh=NmxmcW9hcDlubWtl',
    embed: 'https://www.instagram.com/reel/CghBKEBAr73/embed',
  },
  {
    id: 'CTp0o6rAgwl',
    type: 'tv',
    title: 'Referans Video 02',
    href: 'https://www.instagram.com/tv/CTp0o6rAgwl/?igsh=OTJsdmVlM2Rjam13',
    embed: 'https://www.instagram.com/tv/CTp0o6rAgwl/embed',
  },
  {
    id: 'CQvAbSHgwL-',
    type: 'post',
    title: 'Referans Video 03',
    href: 'https://www.instagram.com/p/CQvAbSHgwL-/?igsh=MXVvcXR6OTFlYXQzMg==',
    embed: 'https://www.instagram.com/p/CQvAbSHgwL-/embed',
  },
  {
    id: 'CL4gzEYgh_l',
    type: 'tv',
    title: 'Referans Video 04',
    href: 'https://www.instagram.com/tv/CL4gzEYgh_l/?igsh=MWM2NnlvdW83Nm80Mg==',
    embed: 'https://www.instagram.com/tv/CL4gzEYgh_l/embed',
  },
  {
    id: 'CHaxkuTJIdj',
    type: 'tv',
    title: 'Referans Video 05',
    href: 'https://www.instagram.com/tv/CHaxkuTJIdj/?igsh=MWlpMXViMm5qZWFsZA==',
    embed: 'https://www.instagram.com/tv/CHaxkuTJIdj/embed',
  },
  {
    id: 'CFMSYaVJhim',
    type: 'tv',
    title: 'Referans Video 06',
    href: 'https://www.instagram.com/tv/CFMSYaVJhim/?igsh=MW1iNzhnMHZvbmgzOA==',
    embed: 'https://www.instagram.com/tv/CFMSYaVJhim/embed',
  },
];

function VideoCard({
  embed,
  title,
}: {
  embed: string;
  title: string;
}) {
  return (
    <article className="video-ref-card">
      <div className="video-ref-frame-wrap">
        <iframe
          src={embed}
          className="video-ref-frame"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          title={title}
        />
      </div>
    </article>
  );
}

export default function Stats() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const checkActive = useCallback(() => {
    const el = trackRef.current;
    if (!el || window.innerWidth > 768) return;
    const card = el.querySelector('.video-ref-card') as HTMLElement | null;
    if (!card) return;
    const cardW = card.offsetWidth + 14;
    const idx = Math.round(el.scrollLeft / cardW);
    setActiveIdx(Math.min(idx, videoRefs.length - 1));
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
    const card = el.querySelector('.video-ref-card') as HTMLElement | null;
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
          <span className="stats-kicker">REFERANS VİDEOLAR</span>
          <h2 className="stats-title">
            DNC7<span className="stats-title-dot">.</span> video projeleri<span className="stats-title-dot">.</span> <em>öne çıkan işler.</em>
          </h2>
        </div>
        <div className="stats-track-wrap">
          <div className="stats-g video-ref-grid" ref={trackRef}>
            {videoRefs.map((video, idx) => (
              <VideoCard
                key={video.id}
                title={video.title}
                embed={video.embed}
              />
            ))}
          </div>
          <div className="stats-dots">
            {videoRefs.map((_, idx) => (
              <button
                key={idx}
                className={`stats-dot ${idx === activeIdx ? 'stats-dot--active' : ''}`}
                onClick={() => scrollTo(idx)}
                aria-label={`Video ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
