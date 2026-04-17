'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [stats, setStats] = useState({ blogs: 0, projects: 0 });

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
        setStats({ blogs: blogs.length, projects: projects.length });
      }
    } catch {}
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
  };

  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: 'bi-speedometer2' },
    { href: '/admin/blog', label: 'Blog Yazıları', icon: 'bi-file-text', count: stats.blogs },
    { href: '/admin/blog/new', label: 'Yeni Blog', icon: 'bi-plus-circle' },
    { href: '/admin/projects', label: 'Projeler', icon: 'bi-grid', count: stats.projects },
    { href: '/admin/projects/new', label: 'Yeni Proje', icon: 'bi-plus-circle' },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-slate-900/50 backdrop-blur-sm border-r border-slate-800">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-slate-800 px-6">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="text-xl font-bold text-emerald-400">DNC7</span>
            <span className="text-sm text-slate-400">Admin</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/admin' && pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                <i className={`bi ${item.icon} text-lg`} />
                <span className="flex-1">{item.label}</span>
                {item.count !== undefined && (
                  <span className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded-full">
                    {item.count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="border-t border-slate-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <i className="bi bi-person-fill text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Admin</p>
                <p className="text-xs text-slate-500">Yönetici</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="text-slate-400 hover:text-red-400 transition p-2"
              title="Çıkış Yap"
            >
              <i className="bi bi-box-arrow-right text-lg" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
