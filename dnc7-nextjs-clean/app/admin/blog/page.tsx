'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/data/blog';

export default function AdminBlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/admin/blog');
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) return;

    try {
      const res = await fetch(`/api/admin/blog?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setPosts(posts.filter(p => p.id !== id));
      }
    } catch (error) {
      alert('Silme işlemi başarısız');
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.category.toLowerCase().includes(search.toLowerCase())
  );

  const TableSkeleton = () => (
    <div className="space-y-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="bg-[#1a1a1a]/50 border border-white/10 rounded-xl p-4 animate-pulse">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/5 rounded-xl"></div>
            <div className="flex-1">
              <div className="w-48 h-4 bg-white/5 rounded-lg mb-2"></div>
              <div className="w-32 h-3 bg-white/5 rounded-lg"></div>
            </div>
          </div>
        </div>
      ))}
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
        {/* Table Skeleton */}
        <TableSkeleton />
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
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-2xl flex items-center justify-center text-emerald-400 border border-emerald-500/20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-black text-white tracking-tight">Blog Yazıları</h1>
            <p className="text-white/50 text-sm font-medium">{posts.length} yazı</p>
          </div>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F97316] to-[#EA6C0A] hover:from-[#ff8c42] hover:to-[#F97316] text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-[#F97316]/20 hover:shadow-xl hover:shadow-[#F97316]/30 hover:scale-105 hover:-translate-y-0.5"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Yeni Yazı
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
          placeholder="Başlık veya kategori ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-14 pr-5 py-4 bg-[#1a1a1a]/50 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-[#F97316]/50 focus:bg-[#1a1a1a] transition-all duration-300 font-medium"
        />
      </div>

      {/* Posts List */}
      <div className={`space-y-3 transition-all duration-700 delay-200 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {filteredPosts.length === 0 ? (
          <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-2xl p-16 text-center overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="w-20 h-20 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
            </div>
            <p className="text-white/50 font-medium">
              {search ? 'Sonuç bulunamadı' : 'Henüz blog yazısı yok'}
            </p>
          </div>
        ) : (
          filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 hover:border-white/20 rounded-2xl p-4 overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Glow Effect */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors duration-300"></div>
              
              <div className="relative flex items-center gap-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-xl border border-white/10 group-hover:border-emerald-500/30 transition-colors duration-300"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold truncate group-hover:text-emerald-400 transition-colors duration-300">{post.title}</p>
                  <p className="text-sm text-white/40 font-medium truncate">{post.slug}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-flex px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-xl text-sm font-bold border border-emerald-500/20">
                    {post.category}
                  </span>
                  <span className="hidden sm:block text-sm text-white/40 font-medium">{post.date}</span>
                  {post.featured ? (
                    <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 border border-amber-500/20">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    </div>
                  ) : null}
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/blog/edit/${post.id}`}
                      className="w-10 h-10 flex items-center justify-center rounded-xl text-white/40 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
                      title="Düzenle"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="w-10 h-10 flex items-center justify-center rounded-xl text-white/40 hover:text-red-400 hover:bg-red-500/20 transition-all duration-300 hover:scale-110"
                      title="Sil"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
