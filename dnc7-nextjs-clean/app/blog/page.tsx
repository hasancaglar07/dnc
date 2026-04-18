'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';
import { type BlogPost } from '@/data/blog';

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/api/posts').then(r => r.ok ? r.json() : []).then(setBlogPosts);
  }, []);

  const filtered = blogPosts.filter((p) => {
    const matchesCategory = activeCategory === 'Tümü' || p.category === activeCategory;
    const matchesSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featured = blogPosts.filter((p) => p.featured);
  const blogCategories = ['Tümü', ...Array.from(new Set(blogPosts.map(p => p.category)))];

  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'radial-gradient(circle at 20% 50%, #F97316 0%, transparent 50%), radial-gradient(circle at 80% 80%, #6366F1 0%, transparent 50%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div className="sec-tag" style={{ color: 'var(--accent)' }}>Blog</div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 20 }}>
              Dijital Dünyadan<br /><span style={{ color: 'var(--accent)' }}>İçgörüler</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600 }}>
              AI, web tasarım, dijital pazarlama ve prodüksiyon hakkında güncel yazılar, rehberler ve sektör analizleri.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Posts */}
      {featured.length > 0 && (
        <section className="sec" style={{ background: '#fff' }}>
          <div className="wrap">
            <Reveal>
              <div className="sec-tag">Öne Çıkan</div>
              <h2 className="sec-title">Editör <em>Seçkisi</em></h2>
            </Reveal>
            <Reveal stagger>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24, marginTop: 40 }}>
                {featured.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ borderRadius: 20, overflow: 'hidden', border: '1.5px solid var(--border)', background: 'var(--bg2)', transition: 'transform .3s, box-shadow .3s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,.08)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      <div style={{ aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                        <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', top: 12, left: 12, background: 'var(--accent)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 6, letterSpacing: 0.5 }}>
                          ÖNE ÇIKAN
                        </div>
                      </div>
                      <div style={{ padding: '24px' }}>
                        <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)' }}>{post.category}</span>
                          <span style={{ fontSize: 12, color: 'var(--muted)' }}>•</span>
                          <span style={{ fontSize: 12, color: 'var(--muted)' }}>{post.readTime}</span>
                        </div>
                        <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text)', lineHeight: 1.3, marginBottom: 8 }}>{post.title}</h3>
                        <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{post.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag">Tüm Yazılar</div>
            <h2 className="sec-title">Blog <em>Arşivi</em></h2>
          </Reveal>

          {/* Search Bar */}
          <Reveal delay={30}>
            <div style={{ marginTop: 32, position: 'relative', maxWidth: 480 }}>
              <i className="bi bi-search" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)', fontSize: 16, pointerEvents: 'none' }}></i>
              <input
                type="text"
                placeholder="Yazı veya etiket ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', padding: '14px 16px 14px 44px', borderRadius: 12, border: '1.5px solid var(--border)', background: '#fff', fontSize: 15, color: 'var(--text)', outline: 'none', transition: 'border-color .2s', fontFamily: 'inherit' }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', display: 'flex', alignItems: 'center' }}>
                  <i className="bi bi-x-circle-fill" style={{ fontSize: 16 }}></i>
                </button>
              )}
            </div>
          </Reveal>

          <Reveal delay={40}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 32, marginBottom: 40 }}>
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`pf ${activeCategory === cat ? 'on' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              {filtered.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ borderRadius: 20, overflow: 'hidden', border: '1.5px solid var(--border)', background: '#fff', transition: 'transform .3s, box-shadow .3s', height: '100%' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,.08)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{ aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                      <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '24px' }}>
                      <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)' }}>{post.category}</span>
                        <span style={{ fontSize: 12, color: 'var(--muted)' }}>•</span>
                        <span style={{ fontSize: 12, color: 'var(--muted)' }}>{post.readTime}</span>
                        <span style={{ fontSize: 12, color: 'var(--muted)' }}>•</span>
                        <span style={{ fontSize: 12, color: 'var(--muted)' }}>{new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', lineHeight: 1.3, marginBottom: 8 }}>{post.title}</h3>
                      <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{post.excerpt}</p>
                      <div style={{ marginTop: 16, fontSize: 14, fontWeight: 700, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 6 }}>
                        Devamını Oku <i className="bi bi-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <i className="bi bi-search" style={{ fontSize: 40, color: 'var(--border)', display: 'block', marginBottom: 16 }}></i>
              <p style={{ fontSize: 18, color: 'var(--muted)' }}>{searchQuery ? `"${searchQuery}" için sonuç bulunamadı.` : 'Bu kategoride henüz yazı bulunmuyor.'}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="sec" style={{ background: 'var(--bg3)' }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-center">
              <div className="sec-tag" style={{ justifyContent: 'center' }}>Bülten</div>
              <h2 className="sec-title" style={{ textAlign: 'center' }}>Yeni yazılardan <em>haberdar olun</em></h2>
              <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
                Dijital dünyadan en güncel içgörüleri e-posta kutunuza gönderelim.
              </p>
              <Link href="/#iletisim" className="cta-main">
                Abone Ol <span className="ico"><i className="bi bi-arrow-right"></i></span>
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
