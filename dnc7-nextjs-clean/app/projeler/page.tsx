'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';
import { projects, projectCategories, Project } from '@/data/projects';

function VideoCard({ project }: { project: Project }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="proj-card block">
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
            <img src={project.image} alt={project.name} loading="lazy" />
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
                project.videoUrl ? (
                  <VideoCard key={project.id} project={project} />
                ) : (
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
                )
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
