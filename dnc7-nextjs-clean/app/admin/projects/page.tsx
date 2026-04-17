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
        <div className="text-slate-400">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Projeler</h1>
          <p className="text-slate-400">{projects.length} proje</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition"
        >
          <i className="bi bi-plus-lg" />
          Yeni Proje
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          placeholder="Proje adı veya kategori ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-12 text-center text-slate-500">
          <i className="bi bi-grid text-4xl mb-4 block" />
          {search ? 'Sonuç bulunamadı' : 'Henüz proje yok'}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition group"
            >
              <div className="aspect-video bg-slate-800 relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                  <Link
                    href={`/admin/projects/edit/${project.id}`}
                    className="w-10 h-10 bg-blue-500/90 hover:bg-blue-500 rounded-lg flex items-center justify-center text-white"
                  >
                    <i className="bi bi-pencil" />
                  </Link>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="w-10 h-10 bg-red-500/90 hover:bg-red-500 rounded-lg flex items-center justify-center text-white"
                  >
                    <i className="bi bi-trash" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-white font-semibold">{project.name}</h3>
                  <span className="text-xs text-slate-500">{project.year}</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-2 py-1 text-xs rounded-full"
                    style={{ backgroundColor: `${project.accent}20`, color: project.accent }}
                  >
                    {project.category}
                  </span>
                </div>
                {project.description && (
                  <p className="text-sm text-slate-400 line-clamp-2">{project.description}</p>
                )}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs text-slate-500">
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
