'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/data/blog';

export default function AdminBlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
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
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[18px] flex items-center justify-center text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-black text-[#0D0D0D] tracking-tight">Blog Yazıları</h1>
              <p className="text-[#767676] text-sm font-medium">{posts.length} yazı</p>
            </div>
          </div>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-3 bg-[#F97316] hover:bg-[#EA6C0A] text-white px-6 py-4 rounded-[9999px] font-bold transition-all duration-300 shadow-lg shadow-[#F97316]/20 hover:shadow-xl hover:shadow-[#F97316]/30 hover:-translate-y-0.5"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Yeni Yazı
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
          placeholder="Başlık veya kategori ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-14 pr-5 py-4 bg-white border-2 border-[#E5E5E5] rounded-[18px] text-[#0D0D0D] placeholder-[#767676]/50 focus:outline-none focus:border-[#F97316] transition-all duration-300 font-medium"
        />
      </div>

      {/* Posts List */}
      <div className="bg-white rounded-[22px] border-2 border-[#E5E5E5] overflow-hidden">
        {filteredPosts.length === 0 ? (
          <div className="p-16 text-center">
            <div className="w-20 h-20 bg-[#F7F7F5] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="text-[#767676]" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
            </div>
            <p className="text-[#767676] font-medium">
              {search ? 'Sonuç bulunamadı' : 'Henüz blog yazısı yok'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F7F7F5] border-b-2 border-[#E5E5E5]">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#767676] uppercase tracking-wider">Başlık</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#767676] uppercase tracking-wider">Kategori</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#767676] uppercase tracking-wider">Tarih</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#767676] uppercase tracking-wider">Öne Çıkan</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-[#767676] uppercase tracking-wider">İşlemler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E5]">
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-[#F7F7F5] transition-colors duration-200">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-12 h-12 object-cover rounded-[14px] border-2 border-[#E5E5E5]"
                        />
                        <div>
                          <p className="text-[#0D0D0D] font-bold">{post.title}</p>
                          <p className="text-sm text-[#767676] font-medium">{post.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 rounded-full text-sm font-bold">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[#767676] font-medium">{post.date}</td>
                    <td className="px-6 py-4">
                      {post.featured ? (
                        <svg className="text-amber-500" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      ) : (
                        <svg className="text-[#E5E5E5]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/blog/edit/${post.id}`}
                          className="w-10 h-10 flex items-center justify-center rounded-[12px] text-[#767676] hover:text-blue-500 hover:bg-blue-50 transition-all duration-300"
                          title="Düzenle"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                          </svg>
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="w-10 h-10 flex items-center justify-center rounded-[12px] text-[#767676] hover:text-red-500 hover:bg-red-50 transition-all duration-300"
                          title="Sil"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
