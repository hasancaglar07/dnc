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
        const blogs = await blogsRes.json();
        const projects = await projectsRes.json();
        setStats({ blogs: blogs.length, projects: projects.length });
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    blog: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    new: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="12" y1="5" x2="12" y2="19"/>
        <line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    ),
    grid: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  };

  return (
    <>
      {/* Desktop Sidebar - Premium Glass Effect */}
      <aside className="hidden lg:flex fixed left-0 top-0 z-40 h-screen w-80 bg-white/80 backdrop-blur-xl border-r-2 border-[#E5E5E5]/50 flex flex-col">
        {/* Logo Section */}
        <div className="h-24 flex items-center px-8 border-b-2 border-[#E5E5E5]/50">
          <Link href="/admin" className="flex items-center gap-3 group">
            <div className="relative">
              <span className="text-3xl font-black tracking-[0.15em]">
                DNC
                <span className="relative inline-block">
                  <span className="bg-gradient-to-br from-[#F97316] via-[#FCD34D] to-[#F97316] bg-clip-text text-transparent animate-shimmer">
                    7
                  </span>
                </span>
              </span>
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#F97316]/20 to-[#FCD34D]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="w-px h-8 bg-[#E5E5E5]/30 mx-2" />
            <span className="text-xs font-black tracking-widest text-[#767676] bg-[#FEF9F0] px-3 py-1.5 rounded-full border border-[#E5E5E5]/50">
              ADMIN
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-8 px-6 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/admin' && pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex items-center gap-4 px-6 py-4 rounded-[20px] transition-all duration-500 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F97316] to-[#EA6C0A] text-white shadow-lg shadow-[#F97316]/30'
                    : 'text-[#3D3D3D] hover:bg-[#FEF9F0] hover:text-[#0D0D0D]'
                }`}
              >
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-white rounded-r-full" />
                )}
                
                <div className={`w-11 h-11 rounded-[16px] flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-white/20' 
                    : 'bg-[#FEF9F0] group-hover:bg-[#F97316] group-hover:text-white'
                }`}>
                  {icons[item.icon as keyof typeof icons]}
                </div>
                <span className="flex-1 font-bold text-sm tracking-wide">{item.label}</span>
                {item.count !== undefined && (
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'bg-[#FEF9F0] text-[#767676]'
                  }`}>
                    {item.count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Section - Premium */}
        <div className="p-6 border-t-2 border-[#E5E5E5]/50">
          <div className="relative group">
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/10 to-[#FCD34D]/10 rounded-[24px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex items-center justify-between bg-[#FEF9F0] rounded-[24px] p-4 border-2 border-[#E5E5E5]/50 group-hover:border-[#F97316]/30 transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-13 h-13 bg-gradient-to-br from-[#F97316] to-[#EA6C0A] rounded-[20px] flex items-center justify-center text-white font-black text-lg shadow-lg">
                    A
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#10B981] rounded-full border-2 border-white" />
                </div>
                <div>
                  <p className="text-sm font-black text-[#0D0D0D]">Administrator</p>
                  <p className="text-xs text-[#767676] font-medium">Yönetici Paneli</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-11 h-11 flex items-center justify-center rounded-[16px] hover:bg-red-50 text-[#767676] hover:text-red-500 transition-all duration-300 group-hover:scale-110"
                title="Çıkış Yap"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header - Premium */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b-2 border-[#E5E5E5]/50">
        <div className="flex items-center justify-between h-20 px-6">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-[0.15em]">
              DNC<span className="bg-gradient-to-br from-[#F97316] to-[#EA6C0A] bg-clip-text text-transparent">7</span>
            </span>
            <span className="text-xs font-bold text-[#767676] bg-[#FEF9F0] px-2.5 py-1 rounded-full border border-[#E5E5E5]/50">
              ADMIN
            </span>
          </Link>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative w-12 h-12 flex items-center justify-center rounded-[16px] bg-[#FEF9F0] hover:bg-[#F97316] hover:text-white transition-all duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/10 to-[#FCD34D]/10 rounded-[16px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <svg className="relative" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12"/>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18"/>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/80 backdrop-blur-xl border-b-2 border-[#E5E5E5]/50">
            <nav className="py-6 px-6 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== '/admin' && pathname.startsWith(item.href));
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-4 px-6 py-4 rounded-[20px] transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#F97316] to-[#EA6C0A] text-white'
                        : 'text-[#3D3D3D] hover:bg-[#FEF9F0]'
                    }`}
                  >
                    <div className={`w-11 h-11 rounded-[16px] flex items-center justify-center ${
                      isActive ? 'bg-white/20' : 'bg-[#FEF9F0]'
                    }`}>
                      {icons[item.icon as keyof typeof icons]}
                    </div>
                    <span className="flex-1 font-bold text-sm">{item.label}</span>
                    {item.count !== undefined && (
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                        isActive ? 'bg-white/20' : 'bg-[#FEF9F0] text-[#767676]'
                      }`}>
                        {item.count}
                      </span>
                    )}
                  </Link>
                );
              })}
              
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-4 px-6 py-4 rounded-[20px] text-red-500 hover:bg-red-50 transition-all duration-300 font-bold text-sm"
              >
                <div className="w-11 h-11 bg-red-50 rounded-[16px] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    <polyline points="16 17 21 12 16 7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                  </svg>
                </div>
                Çıkış Yap
              </button>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
