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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
        setStats({
          blogs: blogsData.length,
          projects: projectsData.length,
          featuredBlogs: blogsData.filter((b: any) => b.featured).length,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const quickActions = [
    {
      title: 'Yeni Blog',
      desc: 'Blog yazısı ekle',
      href: '/admin/blog/new',
      gradient: 'from-emerald-500/20 to-emerald-600/5',
      borderColor: 'hover:border-emerald-500/50',
      glowColor: 'group-hover:shadow-emerald-500/20',
      iconColor: 'text-emerald-400',
      iconBg: 'bg-emerald-500/10',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="12" y1="18" x2="12" y2="12"/>
          <line x1="9" y1="15" x2="15" y2="15"/>
        </svg>
      )
    },
    {
      title: 'Yeni Proje',
      desc: 'Proje ekle',
      href: '/admin/projects/new',
      gradient: 'from-blue-500/20 to-blue-600/5',
      borderColor: 'hover:border-blue-500/50',
      glowColor: 'group-hover:shadow-blue-500/20',
      iconColor: 'text-blue-400',
      iconBg: 'bg-blue-500/10',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <line x1="12" y1="8" x2="12" y2="16"/>
          <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
      )
    },
    {
      title: 'Bloglar',
      desc: 'Tüm yazıları listele',
      href: '/admin/blog',
      gradient: 'from-amber-500/20 to-amber-600/5',
      borderColor: 'hover:border-amber-500/50',
      glowColor: 'group-hover:shadow-amber-500/20',
      iconColor: 'text-amber-400',
      iconBg: 'bg-amber-500/10',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6"/>
          <line x1="8" y1="12" x2="21" y2="12"/>
          <line x1="8" y1="18" x2="21" y2="18"/>
          <line x1="3" y1="6" x2="3.01" y2="6"/>
          <line x1="3" y1="12" x2="3.01" y2="12"/>
          <line x1="3" y1="18" x2="3.01" y2="18"/>
        </svg>
      )
    },
    {
      title: 'Projeler',
      desc: 'Tüm projeleri listele',
      href: '/admin/projects',
      gradient: 'from-purple-500/20 to-purple-600/5',
      borderColor: 'hover:border-purple-500/50',
      glowColor: 'group-hover:shadow-purple-500/20',
      iconColor: 'text-purple-400',
      iconBg: 'bg-purple-500/10',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      )
    },
  ];

  interface StatCard {
    label: string;
    value: number;
    gradient: string;
    bgGradient: string;
    borderColor: string;
    hoverBorder: string;
    glowColor: string;
    iconColor: string;
    icon: React.ReactNode;
  }

  const statCards: StatCard[] = [
    {
      label: 'Blog Yazıları',
      value: stats.blogs,
      gradient: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-500/10 to-emerald-600/5',
      borderColor: 'border-emerald-500/20',
      hoverBorder: 'hover:border-emerald-500/40',
      glowColor: 'group-hover:shadow-emerald-500/20',
      iconColor: 'text-emerald-400',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
      )
    },
    {
      label: 'Öne Çıkanlar',
      value: stats.featuredBlogs,
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-500/10 to-amber-600/5',
      borderColor: 'border-amber-500/20',
      hoverBorder: 'hover:border-amber-500/40',
      glowColor: 'group-hover:shadow-amber-500/20',
      iconColor: 'text-amber-400',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      )
    },
    {
      label: 'Projeler',
      value: stats.projects,
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-500/10 to-blue-600/5',
      borderColor: 'border-blue-500/20',
      hoverBorder: 'hover:border-blue-500/40',
      glowColor: 'group-hover:shadow-blue-500/20',
      iconColor: 'text-blue-400',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      )
    },
    {
      label: 'Toplam İçerik',
      value: stats.blogs + stats.projects,
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-500/10 to-purple-600/5',
      borderColor: 'border-purple-500/20',
      hoverBorder: 'hover:border-purple-500/40',
      glowColor: 'group-hover:shadow-purple-500/20',
      iconColor: 'text-purple-400',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      )
    },
  ];

  const StatCardSkeleton = () => (
    <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] backdrop-blur-sm rounded-2xl border border-white/10 p-6 overflow-hidden">
      <div className="animate-pulse">
        <div className="flex items-center justify-between mb-4">
          <div className="w-14 h-14 bg-white/5 rounded-xl"></div>
          <div className="w-12 h-8 bg-white/5 rounded-lg"></div>
        </div>
        <div className="w-24 h-4 bg-white/5 rounded-lg"></div>
      </div>
    </div>
  );

  const ActionCardSkeleton = () => (
    <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] backdrop-blur-sm rounded-2xl border border-white/10 p-6 overflow-hidden">
      <div className="animate-pulse">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/5 rounded-xl"></div>
          <div className="flex-1">
            <div className="w-20 h-5 bg-white/5 rounded-lg mb-2"></div>
            <div className="w-32 h-4 bg-white/5 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-8 border-b border-white/10 transition-all duration-700 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Dashboard
          </h1>
          <p className="text-white/50 font-medium mt-2 text-lg">
            {loading ? 'Yükleniyor...' : `${stats.blogs + stats.projects} içerik yönetiliyor`}
          </p>
        </div>
        {!loading && (
          <div className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F97316]/20 to-[#EA6C0A]/10 rounded-xl border border-[#F97316]/20 transition-all duration-500 ${
            mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            <div className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#F97316]">Canlı</span>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          <>
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
          </>
        ) : (
          statCards.map((card, index) => (
            <div
              key={card.label}
              className={`group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] backdrop-blur-sm rounded-2xl border ${card.borderColor} ${card.hoverBorder} p-6 overflow-hidden transition-all duration-300 hover:scale-[1.02] ${card.glowColor} hover:shadow-2xl ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient Glow Effect */}
              <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${card.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 ${card.bgGradient} rounded-xl flex items-center justify-center ${card.iconColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    {card.icon}
                  </div>
                  <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br ${card.gradient}`}>
                    {card.value}
                  </div>
                </div>
                <p className="text-sm font-medium text-white/60">{card.label}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Quick Actions */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {loading ? (
          <>
            <ActionCardSkeleton />
            <ActionCardSkeleton />
          </>
        ) : (
          quickActions.map((action, index) => (
            <a
              key={action.href}
              href={action.href}
              className={`group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] backdrop-blur-sm rounded-2xl border border-white/10 ${action.borderColor} p-6 overflow-hidden transition-all duration-300 hover:scale-[1.02] ${action.glowColor} hover:shadow-2xl ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: `${400 + index * 100}ms`,
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Glow Effect */}
              <div className={`absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br ${action.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative flex items-center gap-4">
                <div className={`w-14 h-14 ${action.iconBg} rounded-xl flex items-center justify-center ${action.iconColor} transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                  {action.icon}
                </div>
                <div className="flex-1">
                  <p className="text-white font-bold text-lg">{action.title}</p>
                  <p className="text-sm text-white/50">{action.desc}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#F97316]/20 transition-all duration-300">
                  <svg className="w-5 h-5 text-white/40 group-hover:text-[#F97316] group-hover:translate-x-0.5 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </div>
              </div>
            </a>
          ))
        )}
      </div>

      {/* Info Box */}
      <div className={`relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#F97316]/30 p-6 overflow-hidden transition-all duration-300 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {/* Glow Effect */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-[#F97316]/20 to-[#EA6C0A]/10 rounded-full blur-3xl"></div>
        
        <div className="relative flex items-start gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-[#F97316]/20 to-[#EA6C0A]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#F97316]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-xl mb-2">DNC7 Admin Panel</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              İçerik yönetimi için modern arayüz. Blog yazıları ekleyin, projelerinizi sergileyin ve web sitenizi güncel tutun.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
            <span className="text-xs text-white/40">v2.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
