'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/data/blog';
import { IconPlus, IconSearch, IconPencil, IconTrash, IconStar, IconArticle, IconX, IconLoader2 } from '@tabler/icons-react';

export default function AdminBlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [onlyFeatured, setOnlyFeatured] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/admin/blog').then(r => r.ok ? r.json() : []).then(setPosts).finally(() => setLoading(false));
  }, []);

  const del = async (id: string) => {
    if (!confirm('Bu yazıyı silmek istediğine emin misin?')) return;
    setDeleting(id);
    const r = await fetch(`/api/admin/blog?id=${id}`, { method: 'DELETE' });
    if (r.ok) setPosts(p => p.filter(x => x.id !== id));
    setDeleting(null);
  };

  const filtered = posts.filter(p => {
    const q = search.toLowerCase();
    return (p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)) && (!onlyFeatured || p.featured);
  });

  const featCount = posts.filter(p => p.featured).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 900 }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconArticle size={20} style={{ color: 'var(--adm-blue)' }} />
          </div>
          <div>
            <h1 className="adm-page-title">Blog Yazıları</h1>
            <div style={{ fontSize: 13, color: 'var(--adm-text-3)', marginTop: 2 }}>
              {loading ? '—' : `${posts.length} yazı`}
              {!loading && featCount > 0 && <span style={{ color: 'var(--adm-amber)', marginLeft: 8 }}>· {featCount} öne çıkan</span>}
            </div>
          </div>
        </div>
        <Link href="/admin/blog/new" className="adm-btn-primary"><IconPlus size={15} />Yeni Yazı</Link>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
          <IconSearch size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--adm-text-3)', pointerEvents: 'none' }} />
          <input
            type="text"
            placeholder="Başlık veya kategori ara..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="adm-input"
            style={{ paddingLeft: 38, paddingRight: search ? 38 : 14 }}
          />
          {search && (
            <button onClick={() => setSearch('')} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--adm-text-3)', display: 'flex', padding: 4 }}>
              <IconX size={13} />
            </button>
          )}
        </div>
        <button
          onClick={() => setOnlyFeatured(v => !v)}
          style={{ display: 'flex', alignItems: 'center', gap: 8, height: 44, padding: '0 16px', borderRadius: 10, fontSize: 14, fontWeight: 600, border: '1px solid', transition: 'all 0.12s', background: onlyFeatured ? 'rgba(251,191,36,0.1)' : 'var(--adm-surface)', borderColor: onlyFeatured ? 'rgba(251,191,36,0.25)' : 'var(--adm-border)', color: onlyFeatured ? 'var(--adm-amber)' : 'var(--adm-text-2)' }}
        >
          <IconStar size={14} />
          Öne Çıkanlar
          {featCount > 0 && <span style={{ fontSize: 11, fontWeight: 700, padding: '1px 6px', borderRadius: 5, background: onlyFeatured ? 'rgba(251,191,36,0.15)' : 'rgba(255,255,255,0.07)', color: 'inherit' }}>{featCount}</span>}
        </button>
      </div>

      {/* Table */}
      <div style={{ background: 'var(--adm-surface)', border: '1px solid var(--adm-border)', borderRadius: 14, overflow: 'hidden' }}>
        {!loading && filtered.length === 0 ? (
          <div style={{ padding: '60px 20px', textAlign: 'center' }}>
            <IconArticle size={32} style={{ color: 'var(--adm-text-4)', margin: '0 auto 12px' }} />
            <div style={{ fontSize: 14, color: 'var(--adm-text-3)' }}>{search || onlyFeatured ? 'Sonuç bulunamadı' : 'Henüz yazı yok'}</div>
            {!search && !onlyFeatured && <Link href="/admin/blog/new" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 12, fontSize: 14, fontWeight: 600, color: 'var(--adm-accent)', textDecoration: 'none' }}><IconPlus size={14} />İlk yazını oluştur</Link>}
          </div>
        ) : (
          <table className="adm-table">
            <thead>
              <tr>
                <th>Yazı</th>
                <th className="hidden sm:table-cell">Kategori</th>
                <th className="hidden md:table-cell">Tarih</th>
                <th className="hidden sm:table-cell">Durum</th>
                <th style={{ textAlign: 'right' }}>İşlem</th>
              </tr>
            </thead>
            <tbody>
              {loading
                ? Array(5).fill(0).map((_, i) => (
                    <tr key={i}>
                      <td><div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.06)', flexShrink: 0 }} />
                        <div style={{ height: 13, background: 'rgba(255,255,255,0.06)', borderRadius: 4, width: 180 }} />
                      </div></td>
                      <td className="hidden sm:table-cell"><div style={{ height: 22, background: 'rgba(255,255,255,0.05)', borderRadius: 6, width: 70 }} /></td>
                      <td className="hidden md:table-cell"><div style={{ height: 13, background: 'rgba(255,255,255,0.04)', borderRadius: 4, width: 80 }} /></td>
                      <td className="hidden sm:table-cell"><div style={{ height: 22, background: 'rgba(255,255,255,0.04)', borderRadius: 6, width: 80 }} /></td>
                      <td><div style={{ height: 28, background: 'rgba(255,255,255,0.04)', borderRadius: 6, width: 60, marginLeft: 'auto' }} /></td>
                    </tr>
                  ))
                : filtered.map(post => (
                    <tr key={post.id}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          {post.image
                            ? <img src={post.image} alt="" style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'cover', flexShrink: 0, border: '1px solid var(--adm-border)' }} />
                            : <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(96,165,250,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <IconArticle size={14} style={{ color: 'var(--adm-blue)', opacity: 0.6 }} />
                              </div>}
                          <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--adm-text-1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 220 }}>{post.title}</span>
                        </div>
                      </td>
                      <td className="hidden sm:table-cell">
                        <span style={{ fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 6, background: 'rgba(255,255,255,0.06)', color: 'var(--adm-text-2)' }}>{post.category}</span>
                      </td>
                      <td className="hidden md:table-cell" style={{ fontVariantNumeric: 'tabular-nums', fontSize: 13 }}>{post.date}</td>
                      <td className="hidden sm:table-cell">
                        {post.featured
                          ? <span className="adm-badge" style={{ background: 'rgba(251,191,36,0.1)', color: 'var(--adm-amber)', border: '1px solid rgba(251,191,36,0.2)' }}><IconStar size={10} />Öne Çıkan</span>
                          : <span style={{ fontSize: 13, color: 'var(--adm-text-3)' }}>Standart</span>}
                      </td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4 }}>
                          <Link href={`/admin/blog/edit/${post.id}`} className="adm-btn-icon" title="Düzenle"
                            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--adm-blue)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(96,165,250,0.25)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--adm-text-2)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--adm-border)'; }}
                          ><IconPencil size={14} /></Link>
                          <button onClick={() => del(post.id)} disabled={deleting === post.id} className="adm-btn-icon" title="Sil"
                            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--adm-red)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(248,113,113,0.25)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--adm-text-2)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--adm-border)'; }}
                          >{deleting === post.id ? <IconLoader2 size={14} className="animate-spin" /> : <IconTrash size={14} />}</button>
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        )}
        {!loading && filtered.length > 0 && (
          <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 13, color: 'var(--adm-text-3)' }}>
            <span>{filtered.length === posts.length ? `${posts.length} yazı` : `${filtered.length} / ${posts.length}`}</span>
            {(search || onlyFeatured) && <button onClick={() => { setSearch(''); setOnlyFeatured(false); }} style={{ background: 'none', border: 'none', fontSize: 13, color: 'var(--adm-text-3)', textDecoration: 'underline' }}>Temizle</button>}
          </div>
        )}
      </div>
    </div>
  );
}
