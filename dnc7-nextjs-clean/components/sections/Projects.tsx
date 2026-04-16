'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects, projectCategories } from '@/data/projects';
import Reveal from '@/components/ui/Reveal';

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
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
