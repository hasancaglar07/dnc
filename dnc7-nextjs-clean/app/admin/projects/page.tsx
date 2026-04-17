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
    } catch {
      alert('Silme işlemi başarısız');
    }
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(search.toLowerCase()) ||
    project.category.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/[0.04] rounded-2xl animate-pulse"></div>
            <div className="w-48 h-7 bg-white/[0.04] rounded-lg animate-pulse"></div>
          </div>
          <div className="w-32 h-11 bg-white/[0.04] rounded-xl animate-pulse"></div>
        </div>
        <div className="w-full h-12 bg-white/[0.04] rounded-xl animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden animate-pulse">
              <div className="aspect-video bg-white/[0.04]"></div>
              <div className="p-5 space-y-3">
                <div className="w-3/4 h-5 bg-white/[0.04] rounded-lg"></div>
                <div className="w-1/2 h-4 bg-white/[0.04] rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all duration-700 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/5 rounded-2xl flex items-center justify-center text-purple-400 border border-purple-500/20">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18"/>
              <path d="M9 21V9"/>
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">Projeler</h1>
            <p className="text-sm text-white/40 mt-0.5">{projects.length} proje</p>
          </div>
        </div>
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#F97316] to-orange-600 hover:from-orange-500 hover:to-[#F97316] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
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
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text"
          placeholder="Proje adı veya kategori ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#F97316]/40 focus:bg-white/[0.06] transition-all duration-300"
        />
      </div>

      {/* Projects Grid */}
      <div className={`transition-all duration-700 delay-200 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {filteredProjects.length === 0 ? (
          <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-16 text-center overflow-hidden">
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-400/60">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18"/>
                <path d="M9 21V9"/>
              </svg>
            </div>
            <p className="text-white/40 font-medium text-sm">
              {search ? 'Sonuç bulunamadı' : 'Henüz proje yok'}
            </p>
            {!search && (
              <Link href="/admin/projects/new" className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#F97316] hover:text-orange-400 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                İlk projeni oluştur
              </Link>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {/* Image */}
                <div className="aspect-video relative overflow-hidden bg-white/[0.02]">
                  {project.image ? (
                    <img src={project.image} alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/10">
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                    </div>
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Link href={`/admin/projects/edit/${project.id}`}
                      className="w-11 h-11 bg-white/10 hover:bg-[#F97316] backdrop-blur-sm rounded-xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                      title="Düzenle">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    </Link>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="w-11 h-11 bg-white/10 hover:bg-red-500 backdrop-blur-sm rounded-xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                      title="Sil">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-white group-hover:text-[#F97316] transition-colors line-clamp-1">{project.name}</h3>
                    <span className="text-[10px] font-bold text-white/25 bg-white/[0.05] px-2 py-0.5 rounded-md shrink-0 ml-2">{project.year}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md border"
                      style={{ backgroundColor: `${project.accent}12`, color: project.accent, borderColor: `${project.accent}25` }}>
                      {project.category}
                    </span>
                  </div>
                  {project.description && (
                    <p className="text-xs text-white/30 line-clamp-2">{project.description}</p>
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
