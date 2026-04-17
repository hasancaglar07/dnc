'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Project } from '@/data/projects';

export default function AdminProjectsList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center gap-3 text-[#767676]">
          <svg className="animate-spin" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25"/>
            <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          <span className="font-medium">Yükleniyor...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[18px] flex items-center justify-center text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-black text-[#0D0D0D] tracking-tight">Projeler</h1>
              <p className="text-[#767676] text-sm font-medium">{projects.length} proje</p>
            </div>
          </div>
        </div>
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-3 bg-[#F97316] hover:bg-[#EA6C0A] text-white px-6 py-4 rounded-[9999px] font-bold transition-all duration-300 shadow-lg shadow-[#F97316]/20 hover:shadow-xl hover:shadow-[#F97316]/30 hover:-translate-y-0.5"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Yeni Proje
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <svg className="absolute left-5 top-1/2 -translate-y-1/2 text-[#767676]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text"
          placeholder="Proje adı veya kategori ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-14 pr-5 py-4 bg-white border-2 border-[#E5E5E5] rounded-[18px] text-[#0D0D0D] placeholder-[#767676]/50 focus:outline-none focus:border-[#F97316] transition-all duration-300 font-medium"
        />
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="bg-white rounded-[22px] border-2 border-[#E5E5E5] p-16 text-center">
          <div className="w-20 h-20 bg-[#F7F7F5] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="text-[#767676]" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="3" y1="9" x2="21" y2="9"/>
              <line x1="9" y1="21" x2="9" y2="9"/>
            </svg>
          </div>
          <p className="text-[#767676] font-medium">
            {search ? 'Sonuç bulunamadı' : 'Henüz proje yok'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-[22px] border-2 border-[#E5E5E5] overflow-hidden hover:shadow-lg hover:shadow-[#F97316]/5 hover:border-[#F97316]/20 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="aspect-video bg-[#F7F7F5] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <Link
                      href={`/admin/projects/edit/${project.id}`}
                      className="w-11 h-11 bg-white hover:bg-[#F97316] hover:text-white rounded-[14px] flex items-center justify-center text-[#0D0D0D] shadow-lg transition-all duration-300"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    </Link>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="w-11 h-11 bg-white hover:bg-red-500 hover:text-white rounded-[14px] flex items-center justify-center text-red-500 shadow-lg transition-all duration-300"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-[#0D0D0D] text-lg flex-1">{project.name}</h3>
                  <span className="text-xs font-bold text-[#767676] bg-[#F7F7F5] px-2.5 py-1 rounded-full">{project.year}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-3 py-1 text-xs font-bold rounded-full"
                    style={{ 
                      backgroundColor: `${project.accent}15`, 
                      color: project.accent 
                    }}
                  >
                    {project.category}
                  </span>
                </div>
                
                {project.description && (
                  <p className="text-sm text-[#767676] line-clamp-2 mb-3">{project.description}</p>
                )}
                
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs text-[#767676] font-medium">
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
  );
}
