'use client';

import { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

const FILMS = [
  {
    id: 9,
    title: 'CW Enerji',
    sub: 'Kurumsal Tanıtım Filmi',
    year: '2025',
    tags: ['Kurumsal Film', 'Drone', '4K'],
    poster: '/assets/images/work/cw-energy/home.png',
    vimeo: 'https://player.vimeo.com/video/1116741515',
    accent: '#F97316',
    client: 'CW Energy',
  },
  {
    id: 17,
    title: 'Spice Hotel & SPA',
    sub: 'Reklam Filmi',
    year: '2026',
    tags: ['Tanıtım Filmi', 'Drone', 'Turizm'],
    poster: '/assets/images/work/spice/home.png',
    vimeo: 'https://player.vimeo.com/video/1116760970',
    accent: '#0EA5E9',
    client: 'Spice Hotel',
  },
];

function FilmCard({ film, index }: { film: typeof FILMS[0]; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="ff-card" style={{ '--ff-accent': film.accent } as React.CSSProperties}>
      {/* Thumbnail / Player */}
      <div className="ff-card-media">
        {playing ? (
          <iframe
            src={`${film.vimeo}?autoplay=1&loop=1&muted=0&byline=0&title=0&portrait=0`}
            allow="autoplay; fullscreen"
            allowFullScreen
            className="ff-card-iframe"
          />
        ) : (
          <>
            <img src={film.poster} alt={film.title} className="ff-card-poster" loading={index === 0 ? 'eager' : 'lazy'} />
            <div className="ff-card-overlay">
              <button
                className="ff-card-play"
                onClick={() => setPlaying(true)}
                aria-label={`${film.title} filmini oynat`}
              >
                <span className="ff-card-play-ring" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </button>
            </div>
          </>
        )}

        {/* Year badge */}
        <span className="ff-card-year">{film.year}</span>

        {/* Stop button when playing */}
        {playing && (
          <button className="ff-card-stop" onClick={() => setPlaying(false)} aria-label="Durdur">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />
            </svg>
          </button>
        )}
      </div>

      {/* Info */}
      <div className="ff-card-info">
        <div className="ff-card-tags">
          {film.tags.map(t => (
            <span key={t} className="ff-card-tag">{t}</span>
          ))}
        </div>
        <h3 className="ff-card-title">{film.title}</h3>
        <p className="ff-card-sub">{film.sub}</p>
        <div className="ff-card-footer">
          <span className="ff-card-client">{film.client}</span>
          <Link href={`/projeler/${film.id}`} className="ff-card-link">
            Detaylar
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedFilms() {
  return (
    <section className="ff-sec" id="filmler">
      <div className="wrap">
        <Reveal>
          <div className="ff-hd">
            <div className="ff-hd-left">
              <div className="sec-tag">Öne Çıkan Filmler</div>
              <h2 className="sec-title">Sinematik <em>Prodüksiyonlar</em></h2>
              <p className="ff-hd-desc">
                Reklam filmlerinden kurumsal tanıtımlara, kısa filmlerden drone prodüksiyonlara —
                her projeyi sinematik bir anlatıya dönüştürüyoruz.
              </p>
            </div>
            <Link href="/projeler?category=video" className="ff-hd-cta">
              Tüm Filmler
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </Reveal>

        {/* Film cards */}
        <Reveal stagger delay={60}>
          <div className="ff-grid">
            {FILMS.map((film, i) => (
              <FilmCard key={film.id} film={film} index={i} />
            ))}
          </div>
        </Reveal>

        {/* Services strip */}
        <Reveal delay={80}>
          <div className="ff-services">
            {['Reklam Filmi', 'Kurumsal Tanıtım', 'Kısa Film', 'Drone Çekim', 'Motion Graphics', 'Post Prodüksiyon'].map((s, i) => (
              <div key={s} className="ff-service-item">
                <span className="ff-service-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="ff-service-name">{s}</span>
                <span className="ff-service-arrow">→</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
