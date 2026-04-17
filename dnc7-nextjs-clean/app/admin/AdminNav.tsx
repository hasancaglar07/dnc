'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [stats, setStats] = useState({ blogs: 0, projects: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        const blogsData = await blogsRes.json();
        const projectsData = await projectsRes.json();
        setStats({ blogs: blogsData.length, projects: projectsData.length });
      }
    } catch {}
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin-login');
  };

  const navItems = [
    { href: '/admin', label: 'Dashboard', shortLabel: 'Dash', icon: 'dashboard' },
    { href: '/admin/blog', label: 'Blog Yazıları', shortLabel: 'Blog', count: stats.blogs, icon: 'blog' },
    { href: '/admin/blog/new', label: 'Yeni Blog', shortLabel: '+Blog', icon: 'new' },
    { href: '/admin/projects', label: 'Projeler', shortLabel: 'Proje', count: stats.projects, icon: 'grid' },
    { href: '/admin/projects/new', label: 'Yeni Proje', shortLabel: '+Proje', icon: 'new' },
  ];

  const icons = {
    dashboard: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    blog: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    new: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"/>
        <line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    ),
    grid: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  };

  return (
    <>
      {/* Desktop Sidebar - Sol Taraf */}
      <aside className="hidden lg:flex fixed left-0 top-0 z-40 h-screen w-72 bg-[#0d0d0d] border-r border-white/10 flex flex-col">
        {/* Logo Section */}
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <Link href="/admin" className="flex items-center gap-3 group">
            <div className="relative">
              <span className="text-2xl font-black tracking-[0.15em]">
                DNC<span className="text-[#F97316] group-hover:text-[#ff8c42] transition-colors duration-300">7</span>
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F97316] group-hover:w-full transition-all duration-300"></div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/admin' && pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F97316] to-[#EA6C0A] text-white shadow-lg shadow-[#F97316]/20'
                    : 'text-white/60 hover:bg-white/5 hover:text-white hover:shadow-lg hover:shadow-black/20'
                }`}
              >
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/20 to-transparent rounded-xl"></div>
                )}
                
                {icons[item.icon as keyof typeof icons]}
                
                <span className="flex-1 font-medium text-sm">{item.label}</span>
                
                {item.count !== undefined && (
                  <span className={`text-xs font-bold px-2 py-1 rounded ${
                    isActive 
                      ? 'bg-white/20' 
                      : 'bg-white/10'
                  }`}>
                    {item.count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-white/10 bg-gradient-to-t from-[#0a0a0a] to-transparent">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F97316] to-[#EA6C0A] rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-[#F97316]/20">
                A
              </div>
              <div>
                <p className="text-sm font-medium text-white">Admin</p>
                <p className="text-xs text-white/40">Yönetici</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-white/60 hover:text-red-400 hover:bg-red-500/20 transition-all duration-300 hover:scale-105"
              title="Çıkış Yap"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="text-xl font-black tracking-[0.15em]">
              DNC<span className="text-[#F97316]">7</span>
            </span>
          </Link>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12"/>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18"/>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0d0d0d]/95 backdrop-blur-xl border-b border-white/10 animate-in slide-in-from-top duration-300">
            <nav className="py-4 px-4 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href ||
                  (item.href !== '/admin' && pathname.startsWith(item.href));
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#F97316] to-[#EA6C0A] text-white shadow-lg shadow-[#F97316]/20'
                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {icons[item.icon as keyof typeof icons]}
                    <span className="flex-1 font-medium text-sm">{item.label}</span>
                    {item.count !== undefined && (
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        isActive ? 'bg-white/20' : 'bg-white/10'
                      }`}>
                        {item.count}
                      </span>
                    )}
                  </Link>
                );
              })}
              
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/20 transition-all duration-300 font-medium text-sm hover:scale-[1.02]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                Çıkış Yap
              </button>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
