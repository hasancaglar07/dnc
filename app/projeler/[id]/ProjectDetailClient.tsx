'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import { projects, type Project } from '@/data/projects';

function AnimateOnScroll({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

export default function ProjectDetailClient({ id }: { id: string }) {
  const projectId = parseInt(id);
  const project = projects.find((p: Project) => p.id === projectId);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  if (!project) {
    return (
      <>
        <CustomCursor />
        <Navigation />
        <div className="pdet-empty">
          <h1 className="sec-title">Proje Bulunamadı</h1>
          <Link href="/projeler" className="cta-main" style={{ marginTop: 24 }}>
            Projelere Dön <span className="ico"><i className="bi bi-arrow-right"></i></span>
          </Link>
        </div>
        <Footer />
        <ScrollToTop />
      </>
    );
  }

  const resultStats = project.results ? project.results.split(',').map(s => s.trim()).filter(Boolean) : [];
  const currentIdx = projects.findIndex(p => p.id === projectId);
  const nextProject = projects[(currentIdx + 1) % projects.length];

  return (
    <>
      <CustomCursor />
      <Navigation />

      <section className="pdet-hero">
        <div className="pdet-hero-bg" style={{ background: `linear-gradient(135deg, ${project.accent}08 0%, ${project.accent}03 50%, transparent 100%)` }} />
        <div className="wrap">
          <div className="pdet-hero-inner">
            <div className="pdet-hero-content" style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'translateY(0)' : 'translateY(50px)', transition: 'all 0.9s cubic-bezier(.22,1,.36,1)' }}>
              <Link href="/projeler" className="pdet-back"><i className="bi bi-arrow-left"></i><span>Tüm Projeler</span></Link>
              <div className="pdet-tags">
                {project.tags.map((tag, i) => (<span key={i} className="pdet-tag" style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}08` }}>{tag}</span>))}
                <span className="pdet-tag pdet-tag-year">{project.year}</span>
              </div>
              <h1 className="pdet-title">{project.name}</h1>
              <p className="pdet-desc">{project.longDescription || project.description}</p>
            </div>
            <div className="pdet-meta-strip" style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.9s cubic-bezier(.22,1,.36,1) 0.2s' }}>
              {[
                { label: 'Müşteri', value: project.client || 'Gizli', icon: 'bi-building' },
                { label: 'Süre', value: project.duration || '-', icon: 'bi-clock' },
                { label: 'Yıl', value: project.year, icon: 'bi-calendar3' },
                { label: 'Kategori', value: project.category.charAt(0).toUpperCase() + project.category.slice(1), icon: 'bi-tag' },
              ].map((item, i) => (
                <div key={i} className="pdet-meta-item">
                  <div className="pdet-meta-icon" style={{ background: `${project.accent}12`, color: project.accent }}><i className={`bi ${item.icon}`}></i></div>
                  <div><div className="pdet-meta-label">{item.label}</div><div className="pdet-meta-value">{item.value}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimateOnScroll>
        <section className="pdet-showcase">
          <div className="wrap">
            <div className="pdet-showcase-frame" style={{ borderColor: `${project.accent}15` }}>
              <div className="pdet-showcase-inner" style={{ background: `linear-gradient(135deg, ${project.accent}06, ${project.accent}02)` }}>
                <div className="pdet-showcase-content">
                  <div className="pdet-showcase-emoji">
                    {project.category === 'video' && '🎬'}
                    {project.category === 'web' && '💻'}
                    {project.category === 'mobil' && '📱'}
                    {project.category === 'oyun' && '🎮'}
                  </div>
                  <div className="pdet-showcase-label"><div className="pdet-showcase-dot" style={{ background: project.accent }}></div>Proje Görseli</div>
                </div>
              </div>
              <div className="pdet-corner pdet-corner-tl" style={{ borderColor: project.accent }}></div>
              <div className="pdet-corner pdet-corner-br" style={{ borderColor: project.accent }}></div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {project.features && (
        <section className="sec pdet-features-sec">
          <div className="wrap">
            <AnimateOnScroll><div className="sec-tag">Özellikler</div><h2 className="sec-title">Öne Çıkan <em>Özellikler</em></h2><p className="sec-sub">Projenin sunduğu benzersiz özellikler ve yetenekler</p></AnimateOnScroll>
            <div className="pdet-features-grid">
              {project.features.map((feature, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="pdet-feature-card">
                    <div className="pdet-feature-num" style={{ color: `${project.accent}25` }}>{String(i + 1).padStart(2, '0')}</div>
                    <div className="pdet-feature-icon" style={{ background: `${project.accent}12` }}><i className="bi bi-check-lg" style={{ color: project.accent }}></i></div>
                    <p className="pdet-feature-text">{feature}</p>
                    <div className="pdet-feature-line" style={{ background: `${project.accent}20` }}></div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.technologies && (
        <section className="sec" style={{ background: '#fff' }}>
          <div className="wrap">
            <AnimateOnScroll><div className="sec-tag">Teknoloji Yığını</div><h2 className="sec-title">Kullanılan <em>Teknolojiler</em></h2><p className="sec-sub">Modern ve güvenilir teknoloji altyapısı</p></AnimateOnScroll>
            <div className="pdet-tech-grid">
              {project.technologies.map((tech, i) => (
                <AnimateOnScroll key={i} delay={i * 60}>
                  <div className="pdet-tech-card">
                    <div className="pdet-tech-icon" style={{ background: `${project.accent}10`, color: project.accent }}><i className="bi bi-gear-wide-connected"></i></div>
                    <span className="pdet-tech-name">{tech}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {(project.challenges || project.solutions) && (
        <section className="sec pdet-process-sec">
          <div className="wrap">
            <AnimateOnScroll><div style={{ textAlign: 'center', marginBottom: 64 }}><div className="sec-tag" style={{ justifyContent: 'center' }}>Süreç</div><h2 className="sec-title" style={{ textAlign: 'center' }}>Problem & <em>Çözüm</em></h2></div></AnimateOnScroll>
            <div className="pdet-process-grid">
              {project.challenges && (<AnimateOnScroll delay={0}><div className="pdet-process-card pdet-process-challenge"><div className="pdet-process-badge pdet-badge-red"><i className="bi bi-lightning-charge-fill"></i></div><div className="pdet-process-step">01</div><h3 className="pdet-process-title">Meydan Okuma</h3><p className="pdet-process-text">{project.challenges}</p><div className="pdet-process-line" style={{ background: 'linear-gradient(180deg, #ef4444, transparent)' }}></div></div></AnimateOnScroll>)}
              <div className="pdet-process-arrow"><i className="bi bi-arrow-right"></i></div>
              {project.solutions && (<AnimateOnScroll delay={150}><div className="pdet-process-card pdet-process-solution"><div className="pdet-process-badge pdet-badge-green"><i className="bi bi-rocket-takeoff-fill"></i></div><div className="pdet-process-step">02</div><h3 className="pdet-process-title">Çözüm</h3><p className="pdet-process-text">{project.solutions}</p><div className="pdet-process-line" style={{ background: 'linear-gradient(180deg, #22c55e, transparent)' }}></div></div></AnimateOnScroll>)}
            </div>
          </div>
        </section>
      )}

      {project.results && (
        <section className="sec pdet-results-sec" style={{ background: 'var(--dark)' }}>
          <div className="wrap">
            <AnimateOnScroll><div style={{ textAlign: 'center', marginBottom: 64 }}><div className="sec-tag" style={{ justifyContent: 'center' }}>Sonuçlar</div><h2 className="sec-title" style={{ textAlign: 'center', color: '#fff' }}>Elde Edilen <em>Başarılar</em></h2></div></AnimateOnScroll>
            <div className="pdet-results-grid">
              {resultStats.map((stat, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="pdet-result-card"><div className="pdet-result-glow" style={{ background: project.accent }}></div><div className="pdet-result-icon" style={{ background: `${project.accent}20`, color: project.accent }}><i className={`bi ${i === 0 ? 'bi-graph-up-arrow' : i === 1 ? 'bi-speedometer2' : 'bi-trophy-fill'}`}></i></div><p className="pdet-result-text">{stat}</p></div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.testimonial && (
        <section className="sec" style={{ background: 'var(--bg2)' }}>
          <div className="wrap">
            <AnimateOnScroll>
              <div className="pdet-testimonial">
                <div className="pdet-testimonial-quote" style={{ color: `${project.accent}20` }}>"</div>
                <blockquote className="pdet-testimonial-text">{project.testimonial.text}</blockquote>
                <div className="pdet-testimonial-author">
                  <div className="pdet-testimonial-avatar" style={{ background: `${project.accent}15`, color: project.accent }}>{project.testimonial.author.charAt(0)}</div>
                  <div><div className="pdet-testimonial-name">{project.testimonial.author}</div><div className="pdet-testimonial-role">{project.testimonial.role}</div></div>
                </div>
                <div className="pdet-testimonial-stars">{[...Array(5)].map((_, i) => (<i key={i} className="bi bi-star-fill" style={{ color: project.accent }}></i>))}</div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {project.team && (
        <section className="sec" style={{ background: '#fff' }}>
          <div className="wrap">
            <AnimateOnScroll><div className="sec-tag">Ekip</div><h2 className="sec-title">Proje <em>Ekibi</em></h2><p className="sec-sub">Bu projede emeği geçen uzman kadro</p></AnimateOnScroll>
            <div className="pdet-team-grid">
              {project.team.map((member, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div className="pdet-team-card"><div className="pdet-team-avatar" style={{ background: `${project.accent}10`, color: project.accent }}><i className="bi bi-person-fill"></i></div><span className="pdet-team-name">{member}</span></div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {nextProject && nextProject.id !== project.id && (
        <section className="pdet-next">
          <Link href={`/projeler/${nextProject.id}`} className="pdet-next-link">
            <div className="wrap"><AnimateOnScroll><div className="pdet-next-inner"><div className="pdet-next-label">Sonraki Proje</div><h2 className="pdet-next-title" style={{ color: nextProject.accent }}>{nextProject.name}</h2><div className="pdet-next-arrow" style={{ background: nextProject.accent }}><i className="bi bi-arrow-right"></i></div></div></AnimateOnScroll></div>
          </Link>
        </section>
      )}

      <section className="sec pdet-cta-sec">
        <div className="wrap">
          <AnimateOnScroll>
            <div className="pdet-cta">
              <div className="pdet-cta-glow" style={{ background: project.accent }}></div>
              <div className="sec-tag" style={{ justifyContent: 'center' }}>İletişim</div>
              <h2 className="sec-title" style={{ textAlign: 'center' }}>Sizin de <em>projeniz</em> için<br />çalışalım mı?</h2>
              <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>Hayalinizdeki projeyi gerçeğe dönüştürmek için sabırsızlanıyoruz.</p>
              <div className="pdet-cta-actions">
                <Link href="/#contact" className="cta-main">Teklif Al <span className="ico"><i className="bi bi-arrow-right"></i></span></Link>
                <Link href="/projeler" className="cta-sec">Diğer Projeler</Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
