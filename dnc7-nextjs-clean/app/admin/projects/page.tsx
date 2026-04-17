'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Project } from '@/data/projects';

export default function AdminProjectsList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/admin/projects');
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Bu projeyi silmek istediğinizden emin misiniz?')) return;

    try {
      const res = await fetch(`/api/admin/projects?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setProjects(projects.filter(p => p.id !== id));
      }
    } catch (error) {
      alert('Silme işlemi başarısız');
    }
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(search.toLowerCase()) ||
    project.category.toLowerCase().includes(search.toLowerCase())
  );

  const ProjectCardSkeleton = () => (
    <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden animate-pulse">
      <div className="aspect-video bg-white/5"></div>
      <div className="p-5 space-y-3">
        <div className="w-3/4 h-5 bg-white/5 rounded-lg"></div>
        <div className="w-1/2 h-4 bg-white/5 rounded-lg"></div>
        <div className="w-full h-16 bg-white/5 rounded-lg"></div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/5 rounded-xl animate-pulse"></div>
            <div className="w-48 h-8 bg-white/5 rounded-lg animate-pulse"></div>
          </div>
          <div className="w-32 h-12 bg-white/5 rounded-xl animate-pulse"></div>
        </div>
        {/* Search Skeleton */}
        <div className="w-full h-14 bg-white/5 rounded-xl animate-pulse"></div>
        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all duration-700 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <line x1="3" y1="9" x2="21" y2="9"/>
              <line x1="9" y1="21" x2="9" y2="9"/>
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-black text-white tracking-tight">Projeler</h1>
            <p className="text-white/50 text-sm font-medium">{projects.length} proje</p>
          </div>
        </div>
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F97316] to-[#EA6C0A] hover:from-[#ff8c42] hover:to-[#F97316] text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-[#F97316]/20 hover:shadow-xl hover:shadow-[#F97316]/30 hover:scale-105 hover:-translate-y-0.5"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Yeni Proje
        </Link>
      </div>

      {/* Search */}
      <div className={`relative transition-all duration-700 delay-100 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <svg className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text"
          placeholder="Proje adı veya kategori ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-14 pr-5 py-4 bg-[#1a1a1a]/50 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-[#F97316]/50 focus:bg-[#1a1a1a] transition-all duration-300 font-medium"
        />
      </div>

      {/* Projects Grid */}
      <div className={`transition-all duration-700 delay-200 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {filteredProjects.length === 0 ? (
          <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-2xl p-16 text-center overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-400">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
            </div>
            <p className="text-white/50 font-medium">
              {search ? 'Sonuç bulunamadı' : 'Henüz proje yok'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {/* Glow Effect */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:opacity-50 transition-opacity duration-300"></div>
                
                {/* Image */}
                <div className="aspect-video bg-[#1a1a1a] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Link
                      href={`/admin/projects/edit/${project.id}`}
                      className="w-12 h-12 bg-white/10 hover:bg-[#F97316] backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110"
                      title="Düzenle"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    </Link>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="w-12 h-12 bg-white/10 hover:bg-red-500 backdrop-blur-sm rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                      title="Sil"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 relative">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-white text-lg flex-1 group-hover:text-[#F97316] transition-colors duration-300">{project.name}</h3>
                    <span className="text-xs font-bold text-white/40 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">{project.year}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="px-3 py-1.5 text-xs font-bold rounded-xl border border-white/10"
                      style={{ 
                        backgroundColor: `${project.accent}15`, 
                        color: project.accent 
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                  
                  {project.description && (
                    <p className="text-sm text-white/50 line-clamp-2 mb-3">{project.description}</p>
                  )}
                  
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs text-white/30 font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
