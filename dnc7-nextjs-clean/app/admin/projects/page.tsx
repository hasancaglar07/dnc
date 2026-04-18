'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { IconPlus, IconPencil, IconTrash, IconBriefcase, IconSearch, IconX, IconLoader2 } from '@tabler/icons-react';

export default function AdminProjectsList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deleting, setDeleting] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/admin/projects').then(r => r.ok ? r.json() : []).then(setProjects).finally(() => setLoading(false));
  }, []);

  const del = async (id: number) => {
    if (!confirm('Bu projeyi silmek istediğine emin misin?')) return;
    setDeleting(id);
    const r = await fetch(`/api/admin/projects?id=${id}`, { method: 'DELETE' });
    if (r.ok) setProjects(p => p.filter(x => x.id !== id));
    else alert('Silme başarısız');
    setDeleting(null);
  };

  const filtered = projects.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  const years = [...new Set(filtered.map(p => p.year))].sort((a, b) => Number(b) - Number(a));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconBriefcase size={20} style={{ color: 'var(--adm-purple)' }} />
          </div>
          <div>
            <h1 className="adm-page-title">Projeler</h1>
            <div style={{ fontSize: 13, color: 'var(--adm-text-3)', marginTop: 2 }}>{loading ? '—' : `${projects.length} proje`}</div>
          </div>
        </div>
        <Link href="/admin/projects/new" className="adm-btn-primary"><IconPlus size={15} />Yeni Proje</Link>
      </div>

      {/* Search */}
      <div style={{ position: 'relative', maxWidth: 400 }}>
        <IconSearch size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--adm-text-3)', pointerEvents: 'none' }} />
        <input type="text" placeholder="Proje ara..." value={search} onChange={e => setSearch(e.target.value)} className="adm-input" style={{ paddingLeft: 38, paddingRight: search ? 38 : 14 }} />
        {search && <button onClick={() => setSearch('')} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--adm-text-3)', display: 'flex', padding: 4 }}><IconX size={13} /></button>}
      </div>

      {/* Content */}
      {loading ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {Array(6).fill(0).map((_, i) => (
            <div key={i} style={{ background: 'var(--adm-surface)', border: '1px solid var(--adm-border)', borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ aspectRatio: '16/9', background: 'rgba(255,255,255,0.06)' }} />
              <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ height: 14, background: 'rgba(255,255,255,0.06)', borderRadius: 4, width: '70%' }} />
                <div style={{ height: 12, background: 'rgba(255,255,255,0.04)', borderRadius: 4, width: '45%' }} />
              </div>
            </div>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div style={{ background: 'var(--adm-surface)', border: '1px solid var(--adm-border)', borderRadius: 14, padding: '60px 20px', textAlign: 'center' }}>
          <IconBriefcase size={32} style={{ color: 'var(--adm-text-4)', margin: '0 auto 12px' }} />
          <div style={{ fontSize: 14, color: 'var(--adm-text-3)' }}>{search ? 'Sonuç bulunamadı' : 'Henüz proje yok'}</div>
          {!search && <Link href="/admin/projects/new" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 12, fontSize: 14, fontWeight: 600, color: 'var(--adm-accent)', textDecoration: 'none' }}><IconPlus size={14} />İlk projeyi oluştur</Link>}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {years.map(year => (
            <div key={year}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--adm-text-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{year}</span>
                <div style={{ flex: 1, height: 1, background: 'var(--adm-border)' }} />
                <span style={{ fontSize: 11, color: 'var(--adm-text-4)' }}>{filtered.filter(p => p.year === year).length} proje</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
                {filtered.filter(p => p.year === year).map(proj => (
                  <div key={proj.id} style={{ background: 'var(--adm-surface)', border: '1px solid var(--adm-border)', borderRadius: 14, overflow: 'hidden', transition: 'all 0.15s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--adm-border-hi)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--adm-border)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
                  >
                    {/* Image */}
                    <div style={{ aspectRatio: '16/9', background: '#0d0f12', position: 'relative', overflow: 'hidden' }}>
                      {proj.image
                        ? <img src={proj.image} alt={proj.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                            onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'}
                            onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'}
                          />
                        : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <IconBriefcase size={28} style={{ color: proj.accent || 'var(--adm-purple)', opacity: 0.2 }} />
                          </div>}
                      {/* Hover actions */}
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'all 0.2s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,0,0,0.6)'; Array.from((e.currentTarget as HTMLDivElement).children).forEach(c => (c as HTMLElement).style.opacity = '1'); }}
                        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,0,0,0)'; Array.from((e.currentTarget as HTMLDivElement).children).forEach(c => (c as HTMLElement).style.opacity = '0'); }}
                      >
                        <Link href={`/admin/projects/edit/${proj.id}`} style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', transition: 'background 0.1s', opacity: 0 }}
                          onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = 'var(--adm-blue)'}
                          onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.12)'}
                        ><IconPencil size={15} /></Link>
                        <button onClick={() => del(proj.id)} disabled={deleting === proj.id} style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'background 0.1s', opacity: 0 }}
                          onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = 'var(--adm-red)'}
                          onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.12)'}
                        >{deleting === proj.id ? <IconLoader2 size={14} className="animate-spin" /> : <IconTrash size={14} />}</button>
                      </div>
                    </div>

                    {/* Info */}
                    <div style={{ padding: '14px 16px' }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--adm-text-1)', marginBottom: 8, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{proj.name}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: 12, fontWeight: 600, padding: '2px 10px', borderRadius: 6, background: proj.accent ? `color-mix(in srgb, ${proj.accent} 10%, transparent)` : 'rgba(167,139,250,0.1)', color: proj.accent || 'var(--adm-purple)', border: `1px solid ${proj.accent ? `color-mix(in srgb, ${proj.accent} 20%, transparent)` : 'rgba(167,139,250,0.18)'}` }}>{proj.category}</span>
                        <span style={{ fontSize: 12, color: 'var(--adm-text-3)' }}>{proj.year}</span>
                      </div>
                      {proj.description && <p style={{ fontSize: 12, color: 'var(--adm-text-3)', marginTop: 8, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', lineHeight: 1.5 }}>{proj.description}</p>}
                      {/* Mobile actions */}
                      <div className="lg:hidden" style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                        <Link href={`/admin/projects/edit/${proj.id}`} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, height: 36, borderRadius: 8, background: 'rgba(96,165,250,0.08)', border: '1px solid rgba(96,165,250,0.15)', color: 'var(--adm-blue)', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}><IconPencil size={13} />Düzenle</Link>
                        <button onClick={() => del(proj.id)} disabled={deleting === proj.id} style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.12)', color: 'var(--adm-red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconTrash size={13} /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
