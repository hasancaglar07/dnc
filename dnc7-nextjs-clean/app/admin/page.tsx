'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IconFile, IconFolder, IconPlus, IconArrowRight, IconStar } from '@/components/admin/icons';

interface Stats { blogs: number; projects: number; featured: number }

const statCards: { key: string; label: string; color: string; getValue: (s: Stats) => number; icon: any }[] = [
  { key: 'blogs', label: 'Blog Yazıları', color: 'text-blue-400 bg-blue-400/10', getValue: s => s.blogs, icon: IconFile },
  { key: 'featured', label: 'Öne Çıkanlar', color: 'text-amber-400 bg-amber-400/10', getValue: s => s.featured, icon: IconStar },
  { key: 'projects', label: 'Projeler', color: 'text-purple-400 bg-purple-400/10', getValue: s => s.projects, icon: IconFolder },
  { key: 'total', label: 'Toplam İçerik', color: 'text-emerald-400 bg-emerald-400/10', getValue: s => s.blogs + s.projects, icon: IconFolder },
];

const actions = [
  { title: 'Yeni Blog', desc: 'Yazı oluştur', href: '/admin/blog/new', icon: IconFile },
  { title: 'Yeni Proje', desc: 'Proje ekle', href: '/admin/projects/new', icon: IconFolder },
  { title: 'Blogları Yönet', desc: 'Tüm yazılar', href: '/admin/blog', icon: IconPlus },
  { title: 'Projeleri Yönet', desc: 'Tüm projeler', href: '/admin/projects', icon: IconPlus },
];

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    Promise.all([fetch('/api/admin/blog'), fetch('/api/admin/projects')])
      .then(([b, p]) => Promise.all([b.json(), p.json()]))
      .then(([blogs, projects]) => setStats({
        blogs: blogs.length,
        projects: projects.length,
        featured: blogs.filter((b: any) => b.featured).length,
      }))
      .catch(() => {});
  }, []);

  return (
    <div className="max-w-5xl space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-sm text-zinc-500 mt-1">
            {stats ? `${stats.blogs + stats.projects} içerik yönetiliyor` : 'Yükleniyor...'}
          </p>
        </div>
        {stats && (
          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-lg">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Canlı
          </div>
        )}
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map(card => {
          const Icon = card.icon;
          const [textColor, bgColor] = card.color.split(' ');
          return (
            <div key={card.key} className="bg-[#12151A] border border-white/5 rounded-xl p-5">
              <div className={`w-10 h-10 rounded-lg ${bgColor} ${textColor} flex items-center justify-center mb-3`}>
                <Icon width={20} height={20} />
              </div>
              <p className="text-2xl font-bold text-white">
                {stats ? card.getValue(stats) : '—'}
              </p>
              <p className="text-xs text-zinc-500 mt-0.5">{card.label}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-3">Hızlı İşlemler</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {actions.map(a => {
            const Icon = a.icon;
            return (
              <Link key={a.href} href={a.href}
                className="group flex items-center gap-3 bg-[#12151A] border border-white/5 hover:border-orange-500/30 rounded-xl p-4 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/5 group-hover:bg-orange-500/10 flex items-center justify-center text-zinc-500 group-hover:text-orange-400 transition-colors shrink-0">
                  <Icon width={18} height={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white group-hover:text-orange-400 transition-colors truncate">{a.title}</p>
                  <p className="text-xs text-zinc-600 truncate">{a.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Info */}
      <div className="bg-orange-500/5 border border-orange-500/10 rounded-xl p-5 flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
          <IconFile width={20} height={20} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">DNC7 Admin Panel</h3>
          <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
            Blog yazıları ve projeler ekleyerek web sitenizi güncel tutun. Sol menüden içeriklere ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
