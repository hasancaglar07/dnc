'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects, projectCategories } from '@/data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projeler" className="sec proj-sec">
      <div className="wrap">
        <div className="proj-hd">
          <div>
            <div className="sec-tag">Projeler</div>
            <h2 className="sec-title">Seçkin <em>Çalışmalarımız</em></h2>
            <p className="sec-sub">Son 3 yılda tamamladığımız ödüllü projelerden seçkiler</p>
          </div>
          <a href="#iletisim" className="btn-ghost">Tüm Projeler <i className="bi bi-arrow-right"></i></a>
        </div>

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

        <div className="proj-grid">
          {filteredProjects.map((project) => (
            <Link key={project.id} href={`/projeler/${project.id}`} className="proj-card block" data-cat={project.category}>
              <div className="proj-img">
                <img src={project.image} alt={project.name} />
                <div className="proj-ov"><div className="proj-oico"><i className="bi bi-arrow-up-right"></i></div></div>
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
      </div>
    </section>
  );
}
