'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Project } from '@/data/projects';
import Reveal from '@/components/ui/Reveal';

const CAT_MAP: Record<string, { label: string; color: string }> = {
  video: { label: 'Video', color: '#F97316' },
  web:   { label: 'Web',   color: '#10B981' },
  mobil: { label: 'Mobil', color: '#8B5CF6' },
  oyun:  { label: 'Oyun',  color: '#EC4899' },
};

const FILTERS = [
  { key: 'all',   label: 'Tümü' },
  { key: 'video', label: 'Video' },
  { key: 'web',   label: 'Web' },
  { key: 'mobil', label: 'Mobil' },
  { key: 'oyun',  label: 'Oyun' },
];

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const cat = CAT_MAP[project.category] ?? { label: project.category, color: '#F97316' };
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className={`pc2-card ${featured ? 'pc2-card--featured' : ''}`}>
      {/* Image */}
      <div className="pc2-img">
        {project.videoUrl && playing ? (
          <iframe
            src={`${project.videoUrl}?autoplay=1&loop=1&muted=1&background=1&byline=0&title=0&portrait=0`}
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          />
        ) : (
          <img src={project.image} alt={project.name} loading={index < 2 ? 'eager' : 'lazy'} />
        )}

        {/* Hover overlay */}
        {!(project.videoUrl && playing) && (
          <div className="pc2-overlay">
            {project.videoUrl ? (
              <button
                className="pc2-play"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setPlaying(true); }}
                aria-label="Videoyu oynat"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </button>
            ) : (
              <Link href={`/projeler/${project.id}`} className="pc2-overlay-inner" tabIndex={-1}>
                <p className="pc2-overlay-desc">{project.description}</p>
                <span className="pc2-overlay-cta">
                  İncele
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Info row */}
      <Link href={`/projeler/${project.id}`} className="pc2-info">
        <span className="pc2-num">{num}</span>
        <div className="pc2-info-mid">
          <span className="pc2-cat" style={{ color: cat.color, background: `${cat.color}12` }}>
            {cat.label}
          </span>
          <span className="pc2-name">{project.name}</span>
        </div>
        <span className="pc2-year">{project.year}</span>
        <span className="pc2-arrow" aria-hidden>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
          </svg>
        </span>
      </Link>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects').then(r => r.ok ? r.json() : []).then(setProjects);
  }, []);

  const filtered = active === 'all'
    ? projects
    : projects.filter((p: Project) => p.category === active);

  const counts: Record<string, number> = { all: projects.length };
  projects.forEach((p: Project) => { counts[p.category] = (counts[p.category] ?? 0) + 1; });

  return (
    <section id="projeler" className="sec proj2-sec">
      <div className="wrap">

        {/* Header */}
        <Reveal>
          <div className="proj2-hd">
            <div>
              <div className="sec-tag">Projeler</div>
              <h2 className="sec-title">Seçkin <em>Çalışmalarımız</em></h2>
            </div>
            <Link href="/projeler" className="proj2-all-link">
              Tümünü Gör
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal delay={40}>
          <div className="proj2-filters">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`proj2-pill ${active === f.key ? 'proj2-pill--on' : ''}`}
                onClick={() => setActive(f.key)}
              >
                {f.label}
                <span className="proj2-pill-count">
                  {counts[f.key] ?? 0}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <Reveal stagger delay={60}>
          <div className={`pc2-grid ${active === 'all' ? 'pc2-grid--featured' : ''}`}>
            {filtered.map((project: Project, i: number) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                featured={active === 'all' && i === 0}
              />
            ))}
          </div>
        </Reveal>

        {/* Bottom CTA */}
        {filtered.length > 0 && (
          <Reveal delay={80}>
            <div className="proj2-footer">
              <div className="proj2-footer-count">
                <span>{filtered.length}</span> proje gösteriliyor
              </div>
              <Link href="/projeler" className="btn-ghost">
                Tüm Projeleri Gör
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </Reveal>
        )}

      </div>
    </section>
  );
}
