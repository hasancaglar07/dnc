'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/data/blog';
import { IconPlus, IconSearch, IconEdit, IconTrash, IconStar, IconFile } from '@/components/admin/icons';

export default function AdminBlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => { fetchPosts(); }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/admin/blog');
      if (res.ok) setPosts(await res.json());
    } finally { setLoading(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bu yazıyı silmek istediğinize emin misiniz?')) return;
    const res = await fetch(`/api/admin/blog?id=${id}`, { method: 'DELETE' });
    if (res.ok) setPosts(prev => prev.filter(p => p.id !== id));
  };

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Blog Yazıları</h1>
          <p className="text-sm text-zinc-500 mt-1">{posts.length} yazı</p>
        </div>
        <Link href="/admin/blog/new"
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0">
          <IconPlus width={16} height={16} />
          Yeni Yazı
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <IconSearch width={16} height={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" />
        <input type="text" placeholder="Başlık veya kategori ara..." value={search} onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-[#12151A] border border-white/5 rounded-lg text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/40 transition-colors" />
      </div>

      {/* Table */}
      <div className="bg-[#12151A] border border-white/5 rounded-xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-zinc-600 text-sm">Yükleniyor...</div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center">
            <IconFile width={32} height={32} className="text-zinc-700 mx-auto mb-3" />
            <p className="text-zinc-500 text-sm">{search ? 'Sonuç bulunamadı' : 'Henüz blog yazısı yok'}</p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5 text-left">
                <th className="px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Yazı</th>
                <th className="px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider hidden sm:table-cell">Kategori</th>
                <th className="px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider hidden md:table-cell">Tarih</th>
                <th className="px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider hidden sm:table-cell">Durum</th>
                <th className="px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map(post => (
                <tr key={post.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      {post.image && <img src={post.image} alt="" className="w-9 h-9 rounded-lg object-cover shrink-0" />}
                      <span className="text-sm text-white truncate max-w-[200px]">{post.title}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 hidden sm:table-cell">
                    <span className="text-xs bg-white/5 text-zinc-400 px-2 py-1 rounded-md">{post.category}</span>
                  </td>
                  <td className="px-5 py-3 text-sm text-zinc-500 hidden md:table-cell">{post.date}</td>
                  <td className="px-5 py-3 hidden sm:table-cell">
                    {post.featured && (
                      <span className="inline-flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 px-2 py-1 rounded-md">
                        <IconStar width={12} height={12} />
                        Öne Çıkan
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Link href={`/admin/blog/edit/${post.id}`}
                        className="p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-colors">
                        <IconEdit width={16} height={16} />
                      </Link>
                      <button onClick={() => handleDelete(post.id)}
                        className="p-2 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-400/10 transition-colors">
                        <IconTrash width={16} height={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
