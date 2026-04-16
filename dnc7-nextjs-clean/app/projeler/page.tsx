'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';
import { projects, projectCategories } from '@/data/projects';

const categoryMap: Record<string, string> = {
  'Tümü': 'all',
  'Video': 'video',
  'Web': 'web',
  'Mobil': 'mobil',
  'Oyun': 'oyun',
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <section className="projeler-hero">
        <div className="wrap">
          <Reveal>
            <div className="sec-tag">Portfolyo</div>
            <h1 className="sec-title">Seçkin <em>Çalışmalarımız</em></h1>
            <p className="sec-sub">
              Son 3 yılda tamamladığımız ödüllü projelerden seçkiler. Her biri, müşterilerimizin vizyonunu gerçeğe dönüştürdüğümüz başarı hikayeleri.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section className="sec proj-sec">
        <div className="wrap">
          <Reveal delay={40}>
            <div className="proj-flt">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  className={`pf ${activeCategory === categoryMap[cat] ? 'on' : ''}`}
                  onClick={() => setActiveCategory(categoryMap[cat] || 'all')}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal stagger delay={80}>
            <div className="proj-grid">
              {filteredProjects.map((project) => (
                <Link key={project.id} href={`/projeler/${project.id}`} className="proj-card block">
                  <div className="proj-img">
                    <img src={project.image} alt={project.name} loading="lazy" />
                    <div className="proj-ov">
                      <div className="proj-oico">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
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

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontSize: 18, color: 'var(--muted)' }}>Bu kategoride henüz proje bulunmuyor.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="sec" style={{ background: 'var(--bg3)' }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-center">
              <div className="sec-tag" style={{ justifyContent: 'center' }}>İletişim</div>
              <h2 className="sec-title">Sizin de <em>projeniz</em> için<br />çalışalım mı?</h2>
              <p className="sec-sub">Hayalinizdeki projeyi gerçeğe dönüştürmek için sabırsızlanıyoruz.</p>
              <Link href="/#iletisim" className="cta-main">
                Teklif Al
                <span className="ico">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}


const categoryMap: Record<string, string> = {
  'Tümü': 'all',
  'Video': 'video',
  'Web': 'web',
  'Mobil': 'mobil',
  'Oyun': 'oyun',
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <section style={{ paddingTop: 160, paddingBottom: 80, background: 'var(--bg2)' }}>
        <div className="wrap">
          <div className="sec-tag">Portfolyo</div>
          <h1 className="sec-title">Seçkin <em>Çalışmalarımız</em></h1>
          <p className="sec-sub">
            Son 3 yılda tamamladığımız ödüllü projelerden seçkiler. Her biri, müşterilerimizin vizyonunu gerçeğe dönüştürdüğümüz başarı hikayeleri.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="sec proj-sec">
        <div className="wrap">
          {/* Filter */}
          <div className="proj-flt">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                className={`pf ${activeCategory === categoryMap[cat] ? 'on' : ''}`}
                onClick={() => setActiveCategory(categoryMap[cat] || 'all')}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="proj-grid">
            {filteredProjects.map((project) => (
              <Link key={project.id} href={`/projeler/${project.id}`}>
                <div className="proj-card">
                  <div className="proj-img">
                    <img src={project.image} alt={project.name} />
                    <div className="proj-ov">
                      <div className="proj-oico">
                        <i className="bi bi-arrow-up-right"></i>
                      </div>
                    </div>
                  </div>
                  <div className="proj-info">
                    <div className="proj-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="ptag">{tag}</span>
                      ))}
                    </div>
                    <div className="proj-name">{project.name}</div>
                    <div className="proj-yr">{project.year}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontSize: 18, color: 'var(--muted)' }}>Bu kategoride henüz proje bulunmuyor.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="sec" style={{ background: 'var(--bg3)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div className="sec-tag" style={{ justifyContent: 'center' }}>İletişim</div>
            <h2 className="sec-title" style={{ textAlign: 'center' }}>
              Sizin de <em>projeniz</em> için<br />çalışalım mı?
            </h2>
            <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
              Hayalinizdeki projeyi gerçeğe dönüştürmek için sabırsızlanıyoruz.
            </p>
            <Link href="/#iletisim" className="cta-main">
              Teklif Al <span className="ico"><i className="bi bi-arrow-right"></i></span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
