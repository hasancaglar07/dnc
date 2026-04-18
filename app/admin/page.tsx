'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  IconArticle, IconBriefcase, IconStar, IconStack2, IconPlus,
  IconPencil, IconArrowRight, IconRefresh, IconAlertCircle, IconChevronRight,
} from '@tabler/icons-react';

interface Blog { id: string; title: string; date: string; category: string; featured?: boolean }
interface Project { id: number; name: string; year: string; category: string; accent?: string }
interface Stats { blogs: number; projects: number; featured: number }

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [seed, setSeed] = useState(0);

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Günaydın' : hour < 18 ? 'İyi günler' : 'İyi akşamlar';
  const dateStr = new Date().toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long' });

  useEffect(() => {
    const ctrl = new AbortController(); let dead = false;
    (async () => {
      try {
        setLoading(true); setError(null);
        const [bR, pR] = await Promise.all([
          fetch('/api/admin/blog', { signal: ctrl.signal, cache: 'no-store' }),
          fetch('/api/admin/projects', { signal: ctrl.signal, cache: 'no-store' }),
        ]);
        if (bR.status === 401 || pR.status === 401) { router.replace('/admin-login'); return; }
        if (!bR.ok || !pR.ok) throw new Error();
        const [b, p] = await Promise.all([bR.json(), pR.json()]);
        if (dead) return;
        const bl = Array.isArray(b) ? b as Blog[] : [];
        const pr = Array.isArray(p) ? p as Project[] : [];
        setBlogs(bl); setProjects(pr);
        setStats({ blogs: bl.length, projects: pr.length, featured: bl.filter(x => x.featured).length });
      } catch (e) {
        if (dead || (e instanceof Error && e.name === 'AbortError')) return;
        setError('Veriler yüklenemedi.');
      } finally { if (!dead) setLoading(false); }
    })();
    return () => { dead = true; ctrl.abort(); };
  }, [seed, router]);

  const STATS = [
    { key: 'blogs', label: 'Blog Yazıları', icon: IconArticle, color: 'var(--adm-blue)', href: '/admin/blog', val: stats?.blogs ?? 0 },
    { key: 'featured', label: 'Öne Çıkanlar', icon: IconStar, color: 'var(--adm-amber)', href: '/admin/blog', val: stats?.featured ?? 0 },
    { key: 'projects', label: 'Projeler', icon: IconBriefcase, color: 'var(--adm-purple)', href: '/admin/projects', val: stats?.projects ?? 0 },
    { key: 'total', label: 'Toplam', icon: IconStack2, color: 'var(--adm-green)', href: '/admin', val: (stats?.blogs ?? 0) + (stats?.projects ?? 0) },
  ];

  const ACTIONS = [
    { label: 'Yeni Blog', desc: 'İçerik oluştur', href: '/admin/blog/new', icon: IconArticle, color: 'var(--adm-blue)' },
    { label: 'Yeni Proje', desc: 'Portfolyoya ekle', href: '/admin/projects/new', icon: IconBriefcase, color: 'var(--adm-purple)' },
    { label: 'Bloglar', desc: 'Yazıları düzenle', href: '/admin/blog', icon: IconPencil, color: 'var(--adm-accent)' },
    { label: 'Projeler', desc: 'Portfolyoyu yönet', href: '/admin/projects', icon: IconBriefcase, color: 'var(--adm-green)' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--adm-text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>{dateStr}</div>
          <h1 className="adm-page-title">{greeting} 👋</h1>
          <p style={{ marginTop: 6, color: 'var(--adm-text-2)', fontSize: 14 }}>
            {loading ? 'Yükleniyor...' : stats ? `${stats.blogs + stats.projects} içerik yönetiyorsun` : '—'}
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => setSeed(v => v + 1)} disabled={loading} className="adm-btn-ghost" style={{ height: 36, padding: '0 14px', fontSize: 13 }}>
            <IconRefresh size={14} className={loading ? 'animate-spin' : ''} />
            Yenile
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, height: 36, padding: '0 14px', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.18)', borderRadius: 8, fontSize: 13, fontWeight: 600, color: 'var(--adm-green)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--adm-green)', animation: 'pulse 2s infinite' }} />
            Aktif
          </div>
        </div>
      </div>

      {error && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.18)', borderRadius: 10, fontSize: 14, color: 'var(--adm-red)' }}>
          <IconAlertCircle size={16} style={{ flexShrink: 0 }} />
          {error}
          <button onClick={() => setSeed(v => v + 1)} style={{ marginLeft: 'auto', fontSize: 13, textDecoration: 'underline', background: 'none', border: 'none', color: 'inherit' }}>Tekrar dene</button>
        </div>
      )}

      {/* Stats */}
      <div>
        <div className="adm-section-title" style={{ marginBottom: 12 }}>Genel Durum</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
          {STATS.map(s => {
            const Icon = s.icon;
            return (
              <Link key={s.key} href={s.href} style={{ textDecoration: 'none', display: 'block', padding: 20, background: 'var(--adm-surface)', border: '1px solid var(--adm-border)', borderRadius: 14, transition: 'all 0.15s', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--adm-border-hi)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--adm-border)'; (e.currentTarget as HTMLAnchorElement).style.background = 'var(--adm-surface)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
              >
                <div style={{ width: 38, height: 38, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `color-mix(in srgb, ${s.color} 12%, transparent)`, marginBottom: 16 }}>
                  <Icon size={18} style={{ color: s.color }} />
                </div>
                <div style={{ fontSize: 32, fontWeight: 700, color: 'var(--adm-text-1)', lineHeight: 1, marginBottom: 6, fontVariantNumeric: 'tabular-nums' }}>
                  {loading ? '—' : s.val}
                </div>
                <div style={{ fontSize: 13, color: 'var(--adm-text-2)', fontWeight: 500 }}>{s.label}</div>
                <IconChevronRight size={13} style={{ position: 'absolute', top: 16, right: 16, color: 'var(--adm-text-4)' }} />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Quick actions */}
      <div>
        <div className="adm-section-title" style={{ marginBottom: 12 }}>Hızlı İşlemler</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
          {ACTIONS.map(a => {
            const Icon = a.icon;
            return (
              <Link key={a.href} href={a.href} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', background: 'var(--adm-surface)', border: '1px solid var(--adm-border)', borderRadius: 12, transition: 'all 0.12s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--adm-border-hi)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--adm-surface)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--adm-border)'; }}
              >
                <div style={{ width: 38, height: 38, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: `color-mix(in srgb, ${a.color} 10%, transparent)` }}>
                  <Icon size={16} style={{ color: a.color }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--adm-text-1)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--adm-text-3)', marginTop: 2 }}>{a.desc}</div>
                </div>
                <IconArrowRight size={14} style={{ color: 'var(--adm-text-4)', flexShrink: 0 }} />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent content */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
        {/* Blogs */}
        <div style={{ background: 'var(--adm-surface)', border: '1px solid var(--adm-border)', borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1px solid var(--adm-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <IconArticle size={16} style={{ color: 'var(--adm-blue)' }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--adm-text-1)' }}>Son Yazılar</span>
            </div>
            <Link href="/admin/blog" style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--adm-text-3)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--adm-accent)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--adm-text-3)'}
            >Tümü <IconArrowRight size={11} /></Link>
          </div>
          {loading
            ? Array(4).fill(0).map((_, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.06)', flexShrink: 0, animation: 'pulse 1.5s infinite' }} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ height: 13, background: 'rgba(255,255,255,0.06)', borderRadius: 4, width: '70%' }} />
                    <div style={{ height: 11, background: 'rgba(255,255,255,0.04)', borderRadius: 4, width: '35%' }} />
                  </div>
                </div>
              ))
            : blogs.length === 0
              ? <div style={{ padding: '32px 18px', textAlign: 'center', color: 'var(--adm-text-3)', fontSize: 13 }}>Henüz yazı yok</div>
              : blogs.slice(0, 5).map(post => (
                  <Link key={post.id} href={`/admin/blog/edit/${post.id}`} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.03)', textDecoration: 'none', transition: 'background 0.1s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.03)'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(96,165,250,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <IconArticle size={14} style={{ color: 'var(--adm-blue)', opacity: 0.7 }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--adm-text-1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{post.title}</div>
                      <div style={{ fontSize: 11, color: 'var(--adm-text-3)', marginTop: 2 }}>{post.date}</div>
                    </div>
                    <IconChevronRight size={12} style={{ color: 'var(--adm-text-4)', flexShrink: 0 }} />
                  </Link>
                ))}
        </div>

        {/* Projects */}
        <div style={{ background: 'var(--adm-surface)', border: '1px solid var(--adm-border)', borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1px solid var(--adm-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <IconBriefcase size={16} style={{ color: 'var(--adm-purple)' }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--adm-text-1)' }}>Son Projeler</span>
            </div>
            <Link href="/admin/projects" style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--adm-text-3)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--adm-accent)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--adm-text-3)'}
            >Tümü <IconArrowRight size={11} /></Link>
          </div>
          {loading
            ? Array(4).fill(0).map((_, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.06)', flexShrink: 0 }} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ height: 13, background: 'rgba(255,255,255,0.06)', borderRadius: 4, width: '70%' }} />
                    <div style={{ height: 11, background: 'rgba(255,255,255,0.04)', borderRadius: 4, width: '35%' }} />
                  </div>
                </div>
              ))
            : projects.length === 0
              ? <div style={{ padding: '32px 18px', textAlign: 'center', color: 'var(--adm-text-3)', fontSize: 13 }}>Henüz proje yok</div>
              : projects.slice(0, 5).map(proj => (
                  <Link key={proj.id} href={`/admin/projects/edit/${proj.id}`} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.03)', textDecoration: 'none', transition: 'background 0.1s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.03)'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: proj.accent ? `color-mix(in srgb, ${proj.accent} 10%, transparent)` : 'rgba(167,139,250,0.1)' }}>
                      <IconBriefcase size={14} style={{ color: proj.accent || 'var(--adm-purple)', opacity: 0.8 }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--adm-text-1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{proj.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--adm-text-3)', marginTop: 2 }}>{proj.year} · {proj.category}</div>
                    </div>
                    <IconChevronRight size={12} style={{ color: 'var(--adm-text-4)', flexShrink: 0 }} />
                  </Link>
                ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '20px 24px', background: 'linear-gradient(135deg, rgba(249,115,22,0.07) 0%, rgba(249,115,22,0.02) 100%)', border: '1px solid rgba(249,115,22,0.15)', borderRadius: 14, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <IconStack2 size={20} style={{ color: 'var(--adm-accent)' }} />
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--adm-text-1)' }}>DNC7 Admin Panel</div>
            <div style={{ fontSize: 13, color: 'var(--adm-text-2)', marginTop: 2 }}>Blog ve proje içeriklerini buradan yönet.</div>
          </div>
        </div>
        <Link href="/admin/blog/new" className="adm-btn-primary">
          <IconPlus size={15} />
          Yeni İçerik
        </Link>
      </div>
    </div>
  );
}
