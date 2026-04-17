import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';
import { blogPosts, getBlogPost } from '@/data/blog';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Yazı Bulunamadı' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function renderContent(content: string) {
  // Simple markdown-like rendering
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} style={{ paddingLeft: 20, marginBottom: 20 }}>
          {listItems.map((item, i) => (
            <li key={i} style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text2)', marginBottom: 6 }}
              dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
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
      elements.push(<h3 key={i} style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', marginTop: 32, marginBottom: 12 }}>{trimmed.slice(4)}</h3>);
    } else if (trimmed.startsWith('## ')) {
      flushList();
      elements.push(<h2 key={i} style={{ fontSize: 26, fontWeight: 900, color: 'var(--text)', marginTop: 40, marginBottom: 16 }}>{trimmed.slice(3)}</h2>);
    } else if (trimmed.startsWith('- ')) {
      listItems.push(trimmed.slice(2));
    } else {
      flushList();
      elements.push(
        <p key={i} style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--text2)', marginBottom: 16 }}
          dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text)">$1</strong>') }}
        />
      );
    }
  });
  flushList();
  return elements;
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08, background: 'radial-gradient(circle at 30% 50%, #F97316 0%, transparent 60%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,.5)', fontSize: 14, fontWeight: 600, marginBottom: 24, textDecoration: 'none' }}>
              <i className="bi bi-arrow-left"></i> Blog
            </Link>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)', background: 'rgba(249,115,22,.15)', padding: '4px 12px', borderRadius: 6 }}>{post.category}</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <i className="bi bi-clock"></i> {post.readTime}
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: -1.5, marginBottom: 24, maxWidth: 800 }}>
              {post.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="bi bi-person" style={{ fontSize: 18, color: 'rgba(255,255,255,.6)' }}></i>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{post.author}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}>
                  {new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Image */}
      <section style={{ background: '#fff' }}>
        <div className="wrap" style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ borderRadius: 20, overflow: 'hidden', marginTop: -40, position: 'relative', aspectRatio: '16/9', boxShadow: '0 20px 60px rgba(0,0,0,.12)' }}>
            <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap" style={{ maxWidth: 760, margin: '0 auto' }}>
          <Reveal>
            <article>
              {renderContent(post.content)}
            </article>

            {/* Tags */}
            <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {post.tags.map((tag, i) => (
                  <span key={i} style={{ fontSize: 13, fontWeight: 600, padding: '6px 14px', borderRadius: 8, background: 'var(--bg2)', color: 'var(--text2)', border: '1px solid var(--border)' }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Paylaş:</span>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://dnc7.com/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)', textDecoration: 'none' }}>
                <i className="bi bi-twitter-x" style={{ fontSize: 15 }}></i>
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://dnc7.com/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)', textDecoration: 'none' }}>
                <i className="bi bi-linkedin" style={{ fontSize: 15 }}></i>
              </a>
            </div>
          </Reveal>
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
                  <div className="blog-related-card" style={{ borderRadius: 20, overflow: 'hidden', border: '1.5px solid var(--border)', background: '#fff', transition: 'transform .3s' }}>
                    <div style={{ aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                      <Image src={rp.image} alt={rp.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '20px' }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)' }}>{rp.category}</span>
                      <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--text)', lineHeight: 1.3, marginTop: 8 }}>{rp.title}</h3>
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
