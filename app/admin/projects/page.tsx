'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { IconPlus, IconEdit, IconTrash, IconFolder, IconSearch } from '@/components/admin/icons';

function SkeletonCard() {
  return (
    <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden animate-pulse">
      <div className="aspect-video bg-white/[0.04]" />
      <div className="p-4 space-y-2.5">
        <div className="h-4 bg-white/[0.05] rounded w-3/4" />
        <div className="h-3 bg-white/[0.04] rounded w-1/2" />
        <div className="h-3 bg-white/[0.03] rounded w-2/3" />
      </div>
    </div>
  );
}

export default function AdminProjectsList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [mounted, setMounted] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

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
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/projects?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setProjects(prev => prev.filter(p => p.id !== id));
      } else {
        alert('Silme işlemi başarısız');
      }
    } finally {
      setDeletingId(null);
    }
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(search.toLowerCase()) ||
    project.category.toLowerCase().includes(search.toLowerCase())
  );

  // Group by year for display
  const years = Array.from(new Set(filteredProjects.map(p => p.year))).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 bg-purple-500/15 rounded-2xl flex items-center justify-center text-purple-400 border border-purple-500/20 shrink-0">
            <IconFolder width={20} height={20} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">Projeler</h1>
            <p className="text-xs text-zinc-500 mt-0.5 font-medium">
              {loading ? '...' : `${projects.length} proje`}
            </p>
          </div>
        </div>
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 shrink-0"
        >
          <IconPlus width={15} height={15} />
          Yeni Proje
        </Link>
      </div>

      {/* Search */}
      <div className={`relative transition-all duration-500 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <IconSearch width={15} height={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" />
        <input
          type="text"
          placeholder="Proje adı veya kategori ara..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.07] rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/40 focus:bg-white/[0.06] transition-all"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        )}
      </div>

      {/* Content */}
      <div className={`transition-all duration-500 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-16 text-center overflow-hidden">
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-purple-500/[0.05] rounded-full blur-3xl pointer-events-none" />
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <IconFolder width={28} height={28} className="text-purple-400/50" />
            </div>
            <p className="text-zinc-500 font-medium text-sm">
              {search ? 'Sonuç bulunamadı' : 'Henüz proje yok'}
            </p>
            {!search && (
              <Link
                href="/admin/projects/new"
                className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors"
              >
                <IconPlus width={14} height={14} />
                İlk projeyi oluştur
              </Link>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            {years.map(year => (
              <div key={year}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest">{year}</span>
                  <div className="flex-1 h-px bg-white/[0.05]" />
                  <span className="text-[11px] text-zinc-700 font-medium">
                    {filteredProjects.filter(p => p.year === year).length} proje
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredProjects
                    .filter(p => p.year === year)
                    .map((project, index) => (
                      <div
                        key={project.id}
                        className="group relative bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.11] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/25"
                        style={{ transitionDelay: `${index * 30}ms` }}
                      >
                        {/* Image */}
                        <div className="aspect-video relative overflow-hidden bg-white/[0.02]">
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={project.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center opacity-30"
                                style={{ backgroundColor: project.accent ? `${project.accent}20` : 'rgba(168,85,247,0.2)' }}
                              >
                                <IconFolder width={28} height={28} style={{ color: project.accent || '#a855f7' }} />
                              </div>
                            </div>
                          )}
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                            <Link
                              href={`/admin/projects/edit/${project.id}`}
                              className="w-10 h-10 bg-white/10 hover:bg-blue-500 backdrop-blur-md rounded-xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110 border border-white/10"
                              title="Düzenle"
                            >
                              <IconEdit width={15} height={15} />
                            </Link>
                            <button
                              onClick={() => handleDelete(project.id)}
                              disabled={deletingId === project.id}
                              className="w-10 h-10 bg-white/10 hover:bg-red-500 backdrop-blur-md rounded-xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110 border border-white/10 disabled:opacity-50"
                              title="Sil"
                            >
                              {deletingId === project.id ? (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-spin">
                                  <path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
                                </svg>
                              ) : (
                                <IconTrash width={15} height={15} />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="text-sm font-bold text-white group-hover:text-orange-300 transition-colors line-clamp-1 leading-snug">
                              {project.name}
                            </h3>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className="text-[11px] font-bold px-2 py-0.5 rounded-md border"
                              style={{
                                backgroundColor: project.accent ? `${project.accent}12` : 'rgba(168,85,247,0.08)',
                                color: project.accent || '#a855f7',
                                borderColor: project.accent ? `${project.accent}25` : 'rgba(168,85,247,0.15)',
                              }}
                            >
                              {project.category}
                            </span>
                            <span className="text-[11px] text-zinc-600 font-medium">{project.year}</span>
                          </div>
                          {project.description && (
                            <p className="text-xs text-zinc-600 mt-2 line-clamp-2 leading-relaxed">{project.description}</p>
                          )}
                        </div>

                        {/* Bottom actions - always visible on mobile */}
                        <div className="px-4 pb-4 flex items-center gap-2 lg:hidden">
                          <Link
                            href={`/admin/projects/edit/${project.id}`}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-zinc-300 bg-white/[0.05] hover:bg-blue-500/15 hover:text-blue-300 py-2 px-3 rounded-lg transition-all border border-white/[0.06] hover:border-blue-500/20"
                          >
                            <IconEdit width={12} height={12} />
                            Düzenle
                          </Link>
                          <button
                            onClick={() => handleDelete(project.id)}
                            disabled={deletingId === project.id}
                            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-red-400 bg-white/[0.03] hover:bg-red-500/10 py-2 px-3 rounded-lg transition-all border border-white/[0.06] hover:border-red-500/20 disabled:opacity-50"
                          >
                            <IconTrash width={12} height={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer count */}
      {!loading && filteredProjects.length > 0 && search && (
        <p className="text-xs text-zinc-600 text-center font-medium">
          {filteredProjects.length} / {projects.length} proje gösteriliyor
          <button onClick={() => setSearch('')} className="ml-2 text-orange-400 hover:text-orange-300 transition-colors">
            Temizle
          </button>
        </p>
      )}
    </div>
  );
}
