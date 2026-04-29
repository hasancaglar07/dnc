'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import { Project } from '@/data/projects';
import type { ReactElement } from 'react';

const CAT_CONFIG: Record<string, { color: string; bg: string; label: string }> = {
  all:   { color: '#0D0D0D', bg: 'rgba(13,13,13,.08)',    label: 'Tümü' },
  video: { color: '#F97316', bg: 'rgba(249,115,22,.1)',   label: 'Video' },
  web:   { color: '#10B981', bg: 'rgba(16,185,129,.1)',   label: 'Web' },
  mobil: { color: '#8B5CF6', bg: 'rgba(139,92,246,.1)',   label: 'Mobil' },
  oyun:  { color: '#EC4899', bg: 'rgba(236,72,153,.1)',   label: 'Oyun' },
};

const CAT_ICONS: Record<string, ReactElement> = {
  all: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/>
      <rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/>
    </svg>
  ),
  video: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  ),
  web: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  mobil: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/>
    </svg>
  ),
  oyun: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/>
      <circle cx="15" cy="11" r="1" fill="currentColor"/><circle cx="17" cy="13" r="1" fill="currentColor"/>
      <path d="M6 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3"/>
      <rect x="6" y="3" width="12" height="4" rx="2"/>
    </svg>
  ),
};

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <polygon points="6 3 20 12 6 21 6 3"/>
    </svg>
  );
}

function VideoCard({ project, index }: { project: Project; index: number }) {
  const [playing, setPlaying] = useState(false);
  const cat = CAT_CONFIG[project.category] ?? CAT_CONFIG.video;

  return (
    <div
      className="pv2-card"
      style={{ '--pv2-cat-color': cat.color } as React.CSSProperties}
    >
      <span className="pv2-card-num">{String(index + 1).padStart(2, '0')}</span>
      <div className="pv2-card-img">
        {playing ? (
          <iframe
            src={`${project.videoUrl}?autoplay=1&loop=1&muted=1&background=1&byline=0&title=0&portrait=0`}
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          />
        ) : (
          <>
            <img src={project.image} alt={project.name} loading="lazy" />
            <button
              className="pv2-play-btn"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setPlaying(true); }}
              aria-label="Videoyu oynat"
            >
              <PlayIcon />
            </button>
            <div className="pv2-card-ov">
              <p className="pv2-card-ov-desc">{project.description}</p>
              <span className="pv2-card-ov-cta">
                İncele <ArrowIcon />
              </span>
            </div>
          </>
        )}
      </div>
      <Link
        href={`/projeler/${project.id}`}
        style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
      >
        <div className="pv2-card-info">
          <div className="pv2-card-info-left">
            <div
              className="pv2-cat-badge"
              style={{ color: cat.color, background: cat.bg }}
            >
              {CAT_ICONS[project.category]}
              {cat.label}
            </div>
            <div className="pv2-card-name">{project.name}</div>
          </div>
          <span className="pv2-card-yr">{project.year}</span>
        </div>
      </Link>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cat = CAT_CONFIG[project.category] ?? CAT_CONFIG.web;

  return (
    <Link
      href={`/projeler/${project.id}`}
      className="pv2-card"
      style={{ '--pv2-cat-color': cat.color } as React.CSSProperties}
    >
      <span className="pv2-card-num">{String(index + 1).padStart(2, '0')}</span>
      <div className="pv2-card-img">
        <img src={project.image} alt={project.name} loading="lazy" />
        <div className="pv2-card-ov">
          <p className="pv2-card-ov-desc">{project.description}</p>
          <span className="pv2-card-ov-cta">
            İncele <ArrowIcon />
          </span>
        </div>
      </div>
      <div className="pv2-card-info">
        <div className="pv2-card-info-left">
          <div
            className="pv2-cat-badge"
            style={{ color: cat.color, background: cat.bg }}
          >
            {CAT_ICONS[project.category]}
            {cat.label}
          </div>
          <div className="pv2-card-name">{project.name}</div>
        </div>
        <span className="pv2-card-yr">{project.year}</span>
      </div>
    </Link>
  );
}

const CATEGORIES = [
  { key: 'all',   label: 'Tümü' },
  { key: 'video', label: 'Video' },
  { key: 'web',   label: 'Web' },
  { key: 'mobil', label: 'Mobil' },
  { key: 'oyun',  label: 'Oyun' },
];

export default function ProjectsPage() {
  const [active, setActive] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects').then(r => r.ok ? r.json() : []).then(setProjects);
  }, []);

  const filtered = active === 'all'
    ? projects
    : projects.filter((p) => p.category === active);

  const counts: Record<string, number> = { all: projects.length };
  projects.forEach((p) => { counts[p.category] = (counts[p.category] ?? 0) + 1; });

  const isFeatured = active === 'all';

  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* HERO */}
      <section className="pv2-hero">
        <div className="pv2-hero-noise" />
        <div className="pv2-hero-glow" />
        <div className="pv2-hero-grid" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="pv2-tag">Portfolyo</div>
          <h1 className="pv2-hero-title">
            Seçkin<br />
            <em>Çalışma</em>
            <span className="pv2-title-outline">larımız</span>
          </h1>
          <p className="pv2-hero-sub">
            Son 3 yılda tamamladığımız ödüllü projelerden seçkiler. Her biri,
            müşterilerimizin vizyonunu gerçeğe dönüştürdüğümüz başarı hikayeleri.
          </p>
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="wrap">
            <div className="pv2-stats">
              {[
                { num: '250+', label: 'Tamamlanan Proje' },
                { num: '4',    label: 'Uzmanlaştığımız Alan' },
                { num: '85+',  label: 'Mutlu Müşteri' },
                { num: '3',    label: 'Yıllık Deneyim' },
              ].map((s, i) => (
                <div key={i} className="pv2-stat">
                  <div className="pv2-stat-num">{s.num}</div>
                  <div className="pv2-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <div className="pv2-filter-wrap">
        <div className="wrap">
          <div className="pv2-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                className={`pv2-filter-btn${active === cat.key ? ' active' : ''}`}
                data-cat={cat.key}
                onClick={() => setActive(cat.key)}
              >
                <span
                  className="pv2-filter-dot"
                  style={{ background: CAT_CONFIG[cat.key]?.color }}
                />
                {cat.label}
                {counts[cat.key] !== undefined && (
                  <span className="pv2-filter-count">{counts[cat.key]}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GRID */}
      <section className="pv2-section">
        <div className="wrap">
          <div className={`pv2-grid${isFeatured ? ' pv2-has-featured' : ''}`}>
            {filtered.length === 0 ? (
              <div className="pv2-empty">
                <div className="pv2-empty-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--muted)' }}>
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </div>
                <p style={{ fontSize: 18, color: 'var(--muted)', marginTop: 16 }}>
                  Bu kategoride henüz proje bulunmuyor.
                </p>
              </div>
            ) : (
              filtered.map((project, i) =>
                project.videoUrl ? (
                  <VideoCard key={project.id} project={project} index={i} />
                ) : (
                  <ProjectCard key={project.id} project={project} index={i} />
                )
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pv2-cta">
        <div className="pv2-cta-glow" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="pv2-cta-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            İletişim
          </div>
          <h2 className="pv2-cta-title">
            Sizin de <em>projeniz</em><br />için çalışalım mı?
          </h2>
          <p className="pv2-cta-sub">
            Hayalinizdeki projeyi gerçeğe dönüştürmek için sabırsızlanıyoruz.
          </p>
          <Link href="/iletisim" className="pv2-cta-btn">
            Teklif Al
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
