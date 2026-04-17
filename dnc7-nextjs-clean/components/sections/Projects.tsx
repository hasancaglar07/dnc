'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects, projectCategories, Project } from '@/data/projects';
import Reveal from '@/components/ui/Reveal';

function VideoCard({ project }: { project: Project }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="proj-card block" data-cat={project.category}>
      <div className="proj-img">
        {playing ? (
          <iframe
            src={`${project.videoUrl}?autoplay=1&loop=1&muted=1&background=1&byline=0&title=0&portrait=0`}
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          />
        ) : (
          <>
            <img src={project.image} alt={project.name} />
            <div className="proj-ov">
              <button
                className="proj-play-btn"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setPlaying(true); }}
                aria-label="Videoyu oynat"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
      <Link href={`/projeler/${project.id}`} className="proj-info" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
        <div className="proj-tags">
          {project.tags.map((tag, i) => <span key={i} className="ptag">{tag}</span>)}
        </div>
        <div className="proj-name">{project.name}</div>
        <div className="proj-yr">{project.year}</div>
      </Link>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projeler" className="sec proj-sec">
      <div className="wrap">
        <Reveal>
          <div className="proj-hd">
            <div>
              <div className="sec-tag">Projeler</div>
              <h2 className="sec-title">Seçkin <em>Çalışmalarımız</em></h2>
              <p className="sec-sub">Son 3 yılda tamamladığımız ödüllü projelerden seçkiler</p>
            </div>
            <a href="#iletisim" className="btn-ghost">Tüm Projeler <i className="bi bi-arrow-right"></i></a>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="proj-flt">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                className={`pf ${activeCategory === cat.toLowerCase() || (cat === 'Tümü' && activeCategory === 'all') ? 'on' : ''}`}
                onClick={() => setActiveCategory(cat === 'Tümü' ? 'all' : cat.toLowerCase())}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="proj-grid">
            {filteredProjects.map((project) => (
              project.videoUrl ? (
                <VideoCard key={project.id} project={project} />
              ) : (
                <Link key={project.id} href={`/projeler/${project.id}`} className="proj-card block" data-cat={project.category}>
                  <div className="proj-img">
                    <img src={project.image} alt={project.name} />
                    <div className="proj-ov">
                      <div className="proj-oico">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="7" y1="17" x2="17" y2="7"/>
                          <polyline points="7 7 17 7 17 17"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="proj-info">
                    <div className="proj-tags">
                      {project.tags.map((tag, i) => <span key={i} className="ptag">{tag}</span>)}
                    </div>
                    <div className="proj-name">{project.name}</div>
                    <div className="proj-yr">{project.year}</div>
                  </div>
                </Link>
              )
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
