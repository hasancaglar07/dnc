'use client';

import { useEffect, useState, type ComponentType } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IconFile, IconFolder, IconPlus, IconStar, IconEdit, IconArrowRight } from '@/components/admin/icons';

interface BlogItem {
  id: string;
  title: string;
  date: string;
  category: string;
  featured?: boolean;
}

interface ProjectItem {
  id: number;
  name: string;
  year: string;
  category: string;
  accent?: string;
}

interface Stats {
  blogs: number;
  projects: number;
  featured: number;
}

const statCards: {
  key: string;
  label: string;
  gradient: string;
  iconBg: string;
  iconColor: string;
  getValue: (s: Stats) => number;
  icon: ComponentType<{ width?: number; height?: number; className?: string }>;
  href: string;
}[] = [
  {
    key: 'blogs',
    label: 'Blog Yazıları',
    gradient: 'from-blue-500/10 to-blue-600/5',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-400',
    getValue: s => s.blogs,
    icon: IconFile,
    href: '/admin/blog',
  },
  {
    key: 'featured',
    label: 'Öne Çıkanlar',
    gradient: 'from-amber-500/10 to-amber-600/5',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
    getValue: s => s.featured,
    icon: IconStar,
    href: '/admin/blog',
  },
  {
    key: 'projects',
    label: 'Projeler',
    gradient: 'from-purple-500/10 to-purple-600/5',
    iconBg: 'bg-purple-500/15',
    iconColor: 'text-purple-400',
    getValue: s => s.projects,
    icon: IconFolder,
    href: '/admin/projects',
  },
  {
    key: 'total',
    label: 'Toplam İçerik',
    gradient: 'from-emerald-500/10 to-emerald-600/5',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
    getValue: s => s.blogs + s.projects,
    icon: IconFolder,
    href: '/admin',
  },
];

const quickActions = [
  {
    title: 'Yeni Blog Yazısı',
    desc: 'İçerik oluştur ve yayınla',
    href: '/admin/blog/new',
    icon: IconFile,
    color: 'from-blue-500/20 to-blue-600/5 border-blue-500/20',
    iconColor: 'text-blue-400 bg-blue-500/10',
    hoverColor: 'hover:border-blue-500/40',
  },
  {
    title: 'Yeni Proje Ekle',
    desc: 'Portföye yeni çalışma ekle',
    href: '/admin/projects/new',
    icon: IconFolder,
    color: 'from-purple-500/20 to-purple-600/5 border-purple-500/20',
    iconColor: 'text-purple-400 bg-purple-500/10',
    hoverColor: 'hover:border-purple-500/40',
  },
  {
    title: 'Blogları Yönet',
    desc: 'Tüm yazıları düzenle',
    href: '/admin/blog',
    icon: IconEdit,
    color: 'from-orange-500/10 to-orange-600/5 border-orange-500/15',
    iconColor: 'text-orange-400 bg-orange-500/10',
    hoverColor: 'hover:border-orange-500/40',
  },
  {
    title: 'Projeleri Yönet',
    desc: 'Tüm projeleri incele',
    href: '/admin/projects',
    icon: IconPlus,
    color: 'from-emerald-500/10 to-emerald-600/5 border-emerald-500/15',
    iconColor: 'text-emerald-400 bg-emerald-500/10',
    hoverColor: 'hover:border-emerald-500/40',
  },
];

function SkeletonCard() {
  return (
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 animate-pulse">
      <div className="w-10 h-10 rounded-xl bg-white/[0.06] mb-4" />
      <div className="w-16 h-8 bg-white/[0.06] rounded-lg mb-2" />
      <div className="w-24 h-3 bg-white/[0.04] rounded" />
    </div>
  );
}

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshSeed, setRefreshSeed] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        const [blogRes, projectRes] = await Promise.all([
          fetch('/api/admin/blog', { signal: controller.signal, cache: 'no-store' }),
          fetch('/api/admin/projects', { signal: controller.signal, cache: 'no-store' }),
        ]);

        if (blogRes.status === 401 || projectRes.status === 401) {
          router.replace('/admin-login');
          return;
        }

        if (!blogRes.ok || !projectRes.ok) throw new Error('Dashboard verileri yüklenemedi');

        const [blogData, projectData] = await Promise.all([blogRes.json(), projectRes.json()]);
        const safeBlogs = Array.isArray(blogData) ? (blogData as BlogItem[]) : [];
        const safeProjects = Array.isArray(projectData) ? (projectData as ProjectItem[]) : [];

        if (cancelled) return;

        setBlogs(safeBlogs);
        setProjects(safeProjects);
        setStats({
          blogs: safeBlogs.length,
          projects: safeProjects.length,
          featured: safeBlogs.filter(item => Boolean(item.featured)).length,
        });
      } catch (err) {
        if (cancelled) return;
        if (err instanceof Error && err.name === 'AbortError') return;
        setError('Veriler yüklenirken bir sorun oluştu.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [refreshSeed, router]);

  const featuredBlogs = blogs.filter(item => item.featured).slice(0, 4);
  const latestProjects = projects.slice(0, 4);
  const latestBlogs = blogs.slice(0, 4);

  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? 'Günaydın' : hour < 18 ? 'İyi günler' : 'İyi akşamlar';

  return (
    <div className="max-w-6xl space-y-6 lg:space-y-8">
      {/* Header */}
      <div className={`transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm text-zinc-500 font-medium mb-1">{greeting} 👋</p>
            <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">Admin Dashboard</h1>
            <p className="text-sm text-zinc-500 mt-1">
              {loading ? (
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 border-2 border-zinc-600 border-t-zinc-300 rounded-full animate-spin" />
                  Yükleniyor...
                </span>
              ) : stats ? (
                `Toplam ${stats.blogs + stats.projects} içerik yönetiliyor`
              ) : 'Veriler yüklenemedi'}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setRefreshSeed(v => v + 1)}
              disabled={loading}
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 bg-white/[0.06] hover:bg-white/[0.1] disabled:opacity-50 px-3.5 py-2 rounded-xl transition-all border border-white/[0.06] hover:border-white/10"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={loading ? 'animate-spin' : ''}>
                <path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
                <path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
              </svg>
              Yenile
            </button>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-500/10 px-3.5 py-2 rounded-xl border border-emerald-500/20">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Çevrimiçi
            </div>
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-3 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          {error}
          <button onClick={() => setRefreshSeed(v => v + 1)} className="ml-auto text-xs underline hover:no-underline">Tekrar dene</button>
        </div>
      )}

      {/* Stat Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Genel Durum</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
            : statCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <Link
                    href={card.href}
                    key={card.key}
                    className={`group relative bg-gradient-to-br ${card.gradient} border border-white/[0.07] hover:border-white/[0.12] rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className={`w-10 h-10 rounded-xl ${card.iconBg} ${card.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon width={18} height={18} />
                    </div>
                    <p className="text-3xl font-extrabold text-white tabular-nums">
                      {stats ? card.getValue(stats) : '—'}
                    </p>
                    <p className="text-xs text-zinc-500 mt-1 font-medium">{card.label}</p>
                    <span className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600">
                      <IconArrowRight width={14} height={14} />
                    </span>
                  </Link>
                );
              })}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Hızlı İşlemler</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.href + action.title}
                href={action.href}
                className={`group flex items-center gap-3.5 bg-gradient-to-br ${action.color} ${action.hoverColor} rounded-xl p-4 transition-all duration-200 hover:shadow-md hover:shadow-black/20`}
              >
                <div className={`w-10 h-10 rounded-xl ${action.iconColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon width={18} height={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white group-hover:text-white truncate">{action.title}</p>
                  <p className="text-xs text-zinc-500 truncate mt-0.5">{action.desc}</p>
                </div>
                <span className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500">
                  <IconArrowRight width={14} height={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Content Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Blogs */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.05]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center">
                <IconFile width={14} height={14} />
              </div>
              <h3 className="text-sm font-bold text-white">Son Blog Yazıları</h3>
            </div>
            <Link href="/admin/blog" className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-orange-400 transition-colors">
              Tümü <IconArrowRight width={11} height={11} />
            </Link>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="px-5 py-3.5 flex items-center gap-3 animate-pulse">
                  <div className="w-8 h-8 bg-white/[0.05] rounded-lg shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-3 bg-white/[0.05] rounded w-3/4" />
                    <div className="h-2.5 bg-white/[0.03] rounded w-1/3" />
                  </div>
                </div>
              ))
            ) : latestBlogs.length === 0 ? (
              <div className="px-5 py-8 text-center text-sm text-zinc-600">Henüz blog yazısı yok</div>
            ) : (
              latestBlogs.map(post => (
                <Link
                  key={post.id}
                  href={`/admin/blog/edit/${post.id}`}
                  className="flex items-center gap-3 px-5 py-3.5 hover:bg-white/[0.03] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <IconFile width={13} height={13} className="text-blue-400/70" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-zinc-200 group-hover:text-white truncate transition-colors font-medium">{post.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-zinc-600">{post.date}</span>
                      {post.featured && (
                        <span className="inline-flex items-center gap-0.5 text-[10px] text-amber-400/70 font-medium">
                          <IconStar width={9} height={9} />
                          Öne Çıkan
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-zinc-700 group-hover:text-zinc-500 transition-colors shrink-0">
                    <IconArrowRight width={12} height={12} />
                  </span>
                </Link>
              ))
            )}
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.05]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-purple-500/15 text-purple-400 flex items-center justify-center">
                <IconFolder width={14} height={14} />
              </div>
              <h3 className="text-sm font-bold text-white">Son Projeler</h3>
            </div>
            <Link href="/admin/projects" className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-orange-400 transition-colors">
              Tümü <IconArrowRight width={11} height={11} />
            </Link>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="px-5 py-3.5 flex items-center gap-3 animate-pulse">
                  <div className="w-8 h-8 bg-white/[0.05] rounded-lg shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-3 bg-white/[0.05] rounded w-3/4" />
                    <div className="h-2.5 bg-white/[0.03] rounded w-1/3" />
                  </div>
                </div>
              ))
            ) : latestProjects.length === 0 ? (
              <div className="px-5 py-8 text-center text-sm text-zinc-600">Henüz proje yok</div>
            ) : (
              latestProjects.map(project => (
                <Link
                  key={project.id}
                  href={`/admin/projects/edit/${project.id}`}
                  className="flex items-center gap-3 px-5 py-3.5 hover:bg-white/[0.03] transition-colors group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: project.accent ? `${project.accent}18` : 'rgba(255,255,255,0.05)' }}
                  >
                    <IconFolder width={13} height={13} style={{ color: project.accent || '#a855f7' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-zinc-200 group-hover:text-white truncate transition-colors font-medium">{project.name}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-zinc-600">{project.year}</span>
                      <span className="text-[10px] text-zinc-600">•</span>
                      <span className="text-[10px] text-zinc-500">{project.category}</span>
                    </div>
                  </div>
                  <span className="text-zinc-700 group-hover:text-zinc-500 transition-colors shrink-0">
                    <IconArrowRight width={12} height={12} />
                  </span>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="flex items-start gap-4 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-2xl p-5">
        <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-400 shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-white">DNC7 Admin Panel</h3>
          <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
            Blog yazıları ve projeler ekleyerek web sitenizi güncel tutun. Sol menüden içeriklere ulaşabilirsiniz.
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold text-orange-300 hover:text-orange-200 bg-orange-500/10 hover:bg-orange-500/20 px-3 py-2 rounded-lg transition-all border border-orange-500/20"
        >
          <IconPlus width={12} height={12} />
          Yazı Ekle
        </Link>
      </div>
    </div>
  );
}
