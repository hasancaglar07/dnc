'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/data/blog';
import { IconPlus, IconSearch, IconEdit, IconTrash, IconStar, IconFile } from '@/components/admin/icons';

function SkeletonRow() {
  return (
    <tr className="border-b border-white/[0.04] animate-pulse">
      <td className="px-5 py-3.5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white/[0.05] rounded-lg shrink-0" />
          <div className="h-3.5 bg-white/[0.05] rounded w-40" />
        </div>
      </td>
      <td className="px-5 py-3.5 hidden sm:table-cell"><div className="h-5 w-16 bg-white/[0.05] rounded-md" /></td>
      <td className="px-5 py-3.5 hidden md:table-cell"><div className="h-3 w-20 bg-white/[0.04] rounded" /></td>
      <td className="px-5 py-3.5 hidden sm:table-cell"><div className="h-5 w-20 bg-white/[0.04] rounded-md" /></td>
      <td className="px-5 py-3.5"><div className="h-7 w-16 bg-white/[0.04] rounded-lg ml-auto" /></td>
    </tr>
  );
}

export default function AdminBlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterFeatured, setFilterFeatured] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/admin/blog');
      if (res.ok) setPosts(await res.json());
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bu yazıyı silmek istediğinize emin misiniz?')) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/blog?id=${id}`, { method: 'DELETE' });
      if (res.ok) setPosts(prev => prev.filter(p => p.id !== id));
    } finally {
      setDeletingId(null);
    }
  };

  const filtered = posts.filter(p => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    const matchFeatured = filterFeatured ? p.featured : true;
    return matchSearch && matchFeatured;
  });

  const featuredCount = posts.filter(p => p.featured).length;

  return (
    <div className="max-w-5xl space-y-6">
      {/* Header */}
      <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 bg-blue-500/15 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20 shrink-0">
            <IconFile width={20} height={20} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">Blog Yazıları</h1>
            <p className="text-xs text-zinc-500 mt-0.5 font-medium">
              {loading ? '...' : `${posts.length} yazı`}
              {!loading && featuredCount > 0 && (
                <span className="ml-2 text-amber-400/70">• {featuredCount} öne çıkan</span>
              )}
            </p>
          </div>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 shrink-0"
        >
          <IconPlus width={15} height={15} />
          Yeni Yazı
        </Link>
      </div>

      {/* Filters */}
      <div className={`flex flex-col sm:flex-row gap-3 transition-all duration-500 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <div className="relative flex-1">
          <IconSearch width={15} height={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" />
          <input
            type="text"
            placeholder="Başlık veya kategori ara..."
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
        <button
          onClick={() => setFilterFeatured(!filterFeatured)}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 shrink-0 ${
            filterFeatured
              ? 'bg-amber-500/15 border-amber-500/30 text-amber-300'
              : 'bg-white/[0.04] border-white/[0.07] text-zinc-500 hover:text-zinc-200 hover:border-white/10'
          }`}
        >
          <IconStar width={14} height={14} />
          Öne Çıkanlar
          {featuredCount > 0 && (
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${filterFeatured ? 'bg-amber-500/20 text-amber-300' : 'bg-white/[0.06] text-zinc-500'}`}>
              {featuredCount}
            </span>
          )}
        </button>
      </div>

      {/* Table */}
      <div className={`bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-500 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        {!loading && filtered.length === 0 ? (
          <div className="p-16 text-center">
            <div className="w-14 h-14 bg-white/[0.04] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <IconFile width={24} height={24} className="text-zinc-700" />
            </div>
            <p className="text-zinc-500 text-sm font-medium">
              {search || filterFeatured ? 'Sonuç bulunamadı' : 'Henüz blog yazısı yok'}
            </p>
            {!search && !filterFeatured && (
              <Link href="/admin/blog/new" className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors">
                <IconPlus width={14} height={14} />
                İlk yazını oluştur
              </Link>
            )}
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.05]">
                <th className="px-5 py-3 text-left text-[11px] font-bold text-zinc-600 uppercase tracking-wider">Yazı</th>
                <th className="px-5 py-3 text-left text-[11px] font-bold text-zinc-600 uppercase tracking-wider hidden sm:table-cell">Kategori</th>
                <th className="px-5 py-3 text-left text-[11px] font-bold text-zinc-600 uppercase tracking-wider hidden md:table-cell">Tarih</th>
                <th className="px-5 py-3 text-left text-[11px] font-bold text-zinc-600 uppercase tracking-wider hidden sm:table-cell">Durum</th>
                <th className="px-5 py-3 text-right text-[11px] font-bold text-zinc-600 uppercase tracking-wider">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {loading
                ? Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} />)
                : filtered.map(post => (
                    <tr key={post.id} className="group hover:bg-white/[0.02] transition-colors">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          {post.image ? (
                            <img
                              src={post.image}
                              alt=""
                              className="w-9 h-9 rounded-lg object-cover shrink-0 ring-1 ring-white/10"
                            />
                          ) : (
                            <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                              <IconFile width={14} height={14} className="text-blue-400/60" />
                            </div>
                          )}
                          <span className="text-sm text-zinc-200 group-hover:text-white truncate max-w-[180px] font-medium transition-colors">{post.title}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 hidden sm:table-cell">
                        <span className="text-[11px] font-semibold bg-white/[0.06] text-zinc-400 px-2 py-1 rounded-md">{post.category}</span>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-zinc-600 hidden md:table-cell tabular-nums">{post.date}</td>
                      <td className="px-5 py-3.5 hidden sm:table-cell">
                        {post.featured ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-1 rounded-md">
                            <IconStar width={10} height={10} />
                            Öne Çıkan
                          </span>
                        ) : (
                          <span className="text-[11px] text-zinc-700 font-medium">Standart</span>
                        )}
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center justify-end gap-1">
                          <Link
                            href={`/admin/blog/edit/${post.id}`}
                            className="p-2 rounded-lg text-zinc-600 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-200"
                            title="Düzenle"
                          >
                            <IconEdit width={15} height={15} />
                          </Link>
                          <button
                            onClick={() => handleDelete(post.id)}
                            disabled={deletingId === post.id}
                            className="p-2 rounded-lg text-zinc-600 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200 disabled:opacity-50"
                            title="Sil"
                          >
                            {deletingId === post.id ? (
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-spin">
                                <path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
                              </svg>
                            ) : (
                              <IconTrash width={15} height={15} />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        )}

        {/* Footer */}
        {!loading && filtered.length > 0 && (
          <div className="px-5 py-3 border-t border-white/[0.04] flex items-center justify-between">
            <p className="text-xs text-zinc-600 font-medium">
              {filtered.length} / {posts.length} yazı gösteriliyor
            </p>
            {(search || filterFeatured) && (
              <button
                onClick={() => { setSearch(''); setFilterFeatured(false); }}
                className="text-xs text-zinc-500 hover:text-orange-400 transition-colors font-medium"
              >
                Filtreleri temizle
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
