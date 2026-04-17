'use client';

import { useEffect, useState } from 'react';

interface Stats {
  blogs: number;
  projects: number;
  featuredBlogs: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({ blogs: 0, projects: 0, featuredBlogs: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [blogsRes, projectsRes] = await Promise.all([
        fetch('/api/admin/blog'),
        fetch('/api/admin/projects'),
      ]);

      if (blogsRes.ok && projectsRes.ok) {
        const blogs = await blogsRes.json();
        const projects = await projectsRes.json();
        setStats({
          blogs: blogs.length,
          projects: projects.length,
          featuredBlogs: blogs.filter((b: any) => b.featured).length,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { title: 'Blog Yazıları', value: stats.blogs, icon: 'bi-file-text', color: 'emerald' },
    { title: 'Öne Çıkan Bloglar', value: stats.featuredBlogs, icon: 'bi-star-fill', color: 'amber' },
    { title: 'Projeler', value: stats.projects, icon: 'bi-grid-fill', color: 'blue' },
    { title: 'Toplam İçerik', value: stats.blogs + stats.projects, icon: 'bi-collection-fill', color: 'purple' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-400">Hoş geldiniz! İşte içerik istatistikleriniz.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <div
            key={stat.title}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-${stat.color}-500/10 rounded-xl flex items-center justify-center`}>
                <i className={`bi ${stat.icon} text-${stat.color}-400 text-xl`} />
              </div>
            </div>
            <div className={`text-3xl font-bold text-white mb-1 ${loading ? 'animate-pulse' : ''}`}>
              {loading ? '...' : stat.value}
            </div>
            <div className="text-sm text-slate-400">{stat.title}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Hızlı İşlemler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/admin/blog/new"
            className="flex items-center gap-4 p-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-xl transition group"
          >
            <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition">
              <i className="bi bi-plus-lg text-emerald-400" />
            </div>
            <div>
              <p className="text-white font-medium">Yeni Blog Yazısı</p>
              <p className="text-sm text-slate-400">Blog içeriği ekleyin</p>
            </div>
          </a>
          <a
            href="/admin/projects/new"
            className="flex items-center gap-4 p-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-xl transition group"
          >
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition">
              <i className="bi bi-plus-lg text-blue-400" />
            </div>
            <div>
              <p className="text-white font-medium">Yeni Proje</p>
              <p className="text-sm text-slate-400">Proje ekleyin</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
