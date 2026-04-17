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
    { 
      title: 'Blog Yazıları', 
      value: stats.blogs, 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ), 
      bgGradient: 'from-emerald-500 to-emerald-600',
      textColor: 'text-white'
    },
    { 
      title: 'Öne Çıkanlar', 
      value: stats.featuredBlogs, 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ), 
      bgGradient: 'from-amber-400 to-amber-500',
      textColor: 'text-white'
    },
    { 
      title: 'Projeler', 
      value: stats.projects, 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      ), 
      bgGradient: 'from-blue-500 to-blue-600',
      textColor: 'text-white'
    },
    { 
      title: 'Toplam', 
      value: stats.blogs + stats.projects, 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        </svg>
      ), 
      bgGradient: 'from-purple-500 to-purple-600',
      textColor: 'text-white'
    },
  ];

  const quickActions = [
    {
      title: 'Yeni Blog Yazısı',
      desc: 'Blog içeriği ekleyin',
      href: '/admin/blog/new',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
      ),
      color: 'emerald',
      bg: 'bg-emerald-50',
      iconBg: 'bg-emerald-500',
      hoverBorder: 'hover:border-emerald-300'
    },
    {
      title: 'Yeni Proje',
      desc: 'Proje ekleyin',
      href: '/admin/projects/new',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="12" y1="8" x2="12" y2="16"/>
          <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
      ),
      color: 'blue',
      bg: 'bg-blue-50',
      iconBg: 'bg-blue-500',
      hoverBorder: 'hover:border-blue-300'
    },
    {
      title: 'Tüm Bloglar',
      desc: 'Yazıları yönetin',
      href: '/admin/blog',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="8" y1="6" x2="21" y2="6"/>
          <line x1="8" y1="12" x2="21" y2="12"/>
          <line x1="8" y1="18" x2="21" y2="18"/>
          <line x1="3" y1="6" x2="3.01" y2="6"/>
          <line x1="3" y1="12" x2="3.01" y2="12"/>
          <line x1="3" y1="18" x2="3.01" y2="18"/>
        </svg>
      ),
      color: 'amber',
      bg: 'bg-amber-50',
      iconBg: 'bg-amber-500',
      hoverBorder: 'hover:border-amber-300'
    },
    {
      title: 'Tüm Projeler',
      desc: 'Projeleri yönetin',
      href: '/admin/projects',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
      color: 'purple',
      bg: 'bg-purple-50',
      iconBg: 'bg-purple-500',
      hoverBorder: 'hover:border-purple-300'
    },
  ];

  return (
    <div className="space-y-10">
      {/* Premium Header */}
      <div className="relative overflow-hidden bg-white rounded-[32px] border-2 border-[#E5E5E5] p-10 shadow-xl shadow-[#F97316]/5">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F97316]/5 to-[#FCD34D]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#F97316]/5 to-[#FCD34D]/5 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-12 h-1 bg-[#F97316] rounded-full" />
            <span className="text-xs font-black tracking-[0.2em] text-[#F97316]">DASHBOARD</span>
          </div>
          <h1 className="text-5xl font-black text-[#0D0D0D] tracking-tight mb-3">
            Hoş Geldiniz
          </h1>
          <p className="text-[#767676] text-lg max-w-xl">
            İçerinizi kolayca yönetin. Blog yazıları ekleyin, projelerinizi sergileyin ve web sitenizi güncel tutun.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div
            key={stat.title}
            className="group relative bg-white rounded-[28px] border-2 border-[#E5E5E5] p-8 hover:shadow-2xl hover:shadow-[#F97316]/10 transition-all duration-500 overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Hover Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            
            {/* Corner Accent */}
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${stat.bgGradient} opacity-10 rounded-bl-full`} />
            
            <div className="relative z-10">
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.bgGradient} rounded-[24px] flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-[#F97316]/20`}>
                {stat.icon}
              </div>
              <div className={`text-5xl font-black text-[#0D0D0D] mb-2 ${loading ? 'animate-pulse' : ''}`}>
                {loading ? '...' : stat.value}
              </div>
              <div className="text-sm font-bold text-[#767676] uppercase tracking-wider">{stat.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-[32px] border-2 border-[#E5E5E5] p-10 shadow-xl shadow-[#F97316]/5">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-[#F97316] to-[#EA6C0A] rounded-[22px] flex items-center justify-center text-white shadow-lg shadow-[#F97316]/30">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-black text-[#0D0D0D]">Hızlı İşlemler</h2>
            <p className="text-[#767676] font-medium">Hızlıca içerik ekleyin ve yönetin</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {quickActions.map((action) => (
            <a
              key={action.href}
              href={action.href}
              className={`group relative flex items-center gap-5 p-6 bg-[#FEF9F0] hover:bg-white border-2 border-[#E5E5E5] ${action.hoverBorder} rounded-[24px] transition-all duration-500 overflow-hidden`}
            >
              {/* Hover Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <div className={`w-14 h-14 ${action.iconBg} rounded-[20px] flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                {action.icon}
              </div>
              <div className="flex-1">
                <p className="text-[#0D0D0D] font-black text-lg">{action.title}</p>
                <p className="text-sm text-[#767676] font-medium">{action.desc}</p>
              </div>
              <div className="w-12 h-12 bg-white rounded-[16px] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#F97316] group-hover:text-white transition-all duration-500 shadow-md">
                <svg className="w-5 h-5 text-[#767676] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 15 12 9 9 6"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#F97316] via-[#FB923C] to-[#EA6C0A] rounded-[32px] p-10 shadow-2xl shadow-[#F97316]/30">
        {/* Animated Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-xs font-bold text-white tracking-wider">PREMIUM</span>
            </div>
            <h3 className="text-3xl font-black text-white mb-3">DNC7 Admin Panel</h3>
            <p className="text-white/80 max-w-lg text-lg font-medium">
              Profesyonel içerik yönetimi deneyimi. Blog yazıları, projeler ve daha fazlasını tek bir yerden yönetin.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-[28px] border border-white/20 flex items-center justify-center">
              <span className="text-5xl font-black text-white/80">7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
