'use client';

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';
import { blogPosts, getBlogPost } from '@/data/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 9999, background: 'rgba(0,0,0,0.08)' }}>
      <div style={{ height: '100%', background: 'var(--accent)', width: `${progress}%`, transition: 'width .1s linear', borderRadius: '0 2px 2px 0' }} />
    </div>
  );
}

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let isFirst = true;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} style={{ paddingLeft: 0, marginBottom: 28, listStyle: 'none' }}>
          {listItems.map((item, i) => (
            <li key={i} style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--text2)', marginBottom: 10, paddingLeft: 28, position: 'relative' }}
              dangerouslySetInnerHTML={{ __html: `<span style="position:absolute;left:0;color:var(--accent);font-weight:800">→</span>${item.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text);font-weight:700">$1</strong>')}` }}
            />
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) { flushList(); return; }

    if (trimmed.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={i} style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', marginTop: 40, marginBottom: 14, letterSpacing: -0.5 }}>
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={i} style={{ fontSize: 28, fontWeight: 900, color: 'var(--text)', marginTop: 56, marginBottom: 16, letterSpacing: -1, lineHeight: 1.15, borderTop: '1.5px solid var(--border)', paddingTop: 40 }}>
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith('- ')) {
      listItems.push(trimmed.slice(2));
    } else if (trimmed.startsWith('> ')) {
      flushList();
      elements.push(
        <blockquote key={i} style={{ margin: '32px 0', padding: '24px 28px', borderLeft: '4px solid var(--accent)', background: 'var(--bg2)', borderRadius: '0 16px 16px 0' }}>
          <p style={{ fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, color: 'var(--text)', fontWeight: 500, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
          />
        </blockquote>
      );
    } else {
      flushList();
      const html = trimmed.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text);font-weight:700">$1</strong>');
      if (isFirst) {
        isFirst = false;
        elements.push(
          <p key={i} style={{ fontSize: 18, lineHeight: 1.9, color: 'var(--text2)', marginBottom: 20 }}
            dangerouslySetInnerHTML={{ __html: `<span style="float:left;font-size:4.5rem;line-height:0.8;font-weight:900;color:var(--accent);margin-right:8px;margin-top:6px;font-style:italic">${html[0]}</span>${html.slice(1)}` }}
          />
        );
      } else {
        elements.push(
          <p key={i} style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--text2)', marginBottom: 20 }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      }
    }
  });
  flushList();
  return elements;
}

export default function BlogDetailPage({ params }: Props) {
  const { slug } = use(params);
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <ReadingProgress />
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08, background: 'radial-gradient(circle at 30% 50%, #F97316 0%, transparent 60%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,.5)', fontSize: 14, fontWeight: 600, marginBottom: 24, textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,.9)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,.5)')}
            >
              <i className="bi bi-arrow-left"></i> Blog&apos;a Dön
            </Link>
            <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent)', background: 'rgba(249,115,22,.15)', padding: '5px 14px', borderRadius: 8, letterSpacing: 0.5 }}>{post.category}</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', display: 'flex', alignItems: 'center', gap: 5 }}>
                <i className="bi bi-clock"></i> {post.readTime}
              </span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', display: 'flex', alignItems: 'center', gap: 5 }}>
                <i className="bi bi-calendar3"></i> {new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.9rem, 5vw, 3.4rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: -1.5, marginBottom: 28, maxWidth: 820 }}>
              {post.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(249,115,22,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="bi bi-person-fill" style={{ fontSize: 20, color: 'var(--accent)' }}></i>
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{post.author}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginTop: 2 }}>DNC7 Dijital Ajans</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Image */}
      <section style={{ background: '#fff', paddingBottom: 0 }}>
        <div className="wrap" style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ borderRadius: 24, overflow: 'hidden', marginTop: -48, position: 'relative', aspectRatio: '16/9', boxShadow: '0 24px 80px rgba(0,0,0,.14)' }}>
            <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 64, alignItems: 'start' }}>
            {/* Article */}
            <article>
              {renderContent(post.content)}

              {/* Tags */}
              <div style={{ marginTop: 56, paddingTop: 28, borderTop: '1.5px solid var(--border)' }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14 }}>Etiketler</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {post.tags.map((tag, i) => (
                    <span key={i} style={{ fontSize: 13, fontWeight: 600, padding: '6px 14px', borderRadius: 8, background: 'var(--bg2)', color: 'var(--text2)', border: '1px solid var(--border)', transition: 'background .2s' }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Paylaş:</span>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://dnc7.com/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)', textDecoration: 'none', border: '1.5px solid var(--border)', transition: 'border-color .2s, color .2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#000'; e.currentTarget.style.color = '#000'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; }}
                >
                  <i className="bi bi-twitter-x" style={{ fontSize: 15 }}></i>
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://dnc7.com/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)', textDecoration: 'none', border: '1.5px solid var(--border)', transition: 'border-color .2s, color .2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0A66C2'; e.currentTarget.style.color = '#0A66C2'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; }}
                >
                  <i className="bi bi-linkedin" style={{ fontSize: 15 }}></i>
                </a>
                <a href={`https://wa.me/?text=${encodeURIComponent(`${post.title} — https://dnc7.com/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)', textDecoration: 'none', border: '1.5px solid var(--border)', transition: 'border-color .2s, color .2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#25D366'; e.currentTarget.style.color = '#25D366'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; }}
                >
                  <i className="bi bi-whatsapp" style={{ fontSize: 15 }}></i>
                </a>
              </div>

              {/* Author Card */}
              <div style={{ marginTop: 48, padding: '32px', borderRadius: 24, background: 'var(--bg2)', border: '1.5px solid var(--border)' }}>
                <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(249,115,22,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="bi bi-person-fill" style={{ fontSize: 28, color: 'var(--accent)' }}></i>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>Yazar</div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 4 }}>{post.author}</div>
                    <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>DNC7 Dijital Ajans içerik ekibi. AI, web tasarım ve dijital pazarlama alanlarında içerik üretiyor.</div>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside style={{ position: 'sticky', top: 100 }}>
              {/* Table of contents hint */}
              <div style={{ padding: '24px', borderRadius: 20, background: 'var(--bg2)', border: '1.5px solid var(--border)', marginBottom: 24 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>Bu Yazıda</div>
                <div style={{ fontSize: 14, color: 'var(--text2)', fontWeight: 600, lineHeight: 1.6 }}>{post.excerpt}</div>
              </div>

              {/* CTA */}
              <div style={{ padding: '28px 24px', borderRadius: 20, background: 'var(--dark)', color: '#fff', textAlign: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>Proje Başlat</div>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,.65)', lineHeight: 1.6, marginBottom: 20 }}>
                  Bu konuda yardıma mı ihtiyacınız var? Uzman ekibimizle konuşun.
                </p>
                <Link href="/#iletisim" style={{ display: 'block', padding: '12px 20px', borderRadius: 12, background: 'var(--accent)', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', textAlign: 'center' }}>
                  Ücretsiz Görüşme
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag">İlgili Yazılar</div>
            <h2 className="sec-title">Bunları da <em>Okuyun</em></h2>
          </Reveal>
          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginTop: 40 }}>
              {relatedPosts.map((rp) => (
                <Link key={rp.id} href={`/blog/${rp.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ borderRadius: 20, overflow: 'hidden', border: '1.5px solid var(--border)', background: '#fff', transition: 'transform .3s, box-shadow .3s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,.08)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{ aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                      <Image src={rp.image} alt={rp.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '20px' }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent)' }}>{rp.category}</span>
                      <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--text)', lineHeight: 1.3, marginTop: 8, marginBottom: 8 }}>{rp.title}</h3>
                      <span style={{ fontSize: 13, color: 'var(--muted)' }}>{rp.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
