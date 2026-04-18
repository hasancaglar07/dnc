'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BlogPost } from '@/data/blog';
import { IconArrowLeft, IconPlus, IconX, IconLoader2, IconWand } from '@tabler/icons-react';

const CATS = ['AI & Teknoloji', 'Web Tasarım', 'Dijital Pazarlama', 'Prodüksiyon', 'E-Ticaret'];

const inp = [
  'w-full px-4 bg-white/[0.05] border border-white/[0.08] rounded-xl',
  'text-[15px] text-white placeholder:text-white/20',
  'focus:outline-none focus:border-[#F97316]/60 focus:bg-white/[0.07]',
  'transition-all duration-150 h-12',
].join(' ');

const textArea = [
  'w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl resize-none',
  'text-[15px] text-white placeholder:text-white/20',
  'focus:outline-none focus:border-[#F97316]/60 focus:bg-white/[0.07]',
  'transition-all duration-150 leading-relaxed',
].join(' ');

const lbl = 'block text-[13px] font-semibold text-white/50 mb-2';

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6">
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-[11px] font-bold text-white/30 uppercase tracking-[0.12em] mb-5">{children}</h3>;
}

export default function BlogForm({ post, isEdit = false }: { post?: BlogPost; isEdit?: boolean }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [tagInput, setTagInput] = useState('');

  const [form, setForm] = useState<Partial<BlogPost>>(post ?? {
    id: Date.now().toString(), slug: '', title: '', excerpt: '',
    content: '', category: CATS[0], tags: [],
    author: 'DNC7 Ekibi', authorRole: '',
    date: new Date().toISOString().split('T')[0],
    readTime: '5 dk', image: '', featured: false,
  });

  const set = (k: string, v: unknown) => setForm(p => ({ ...p, [k]: v }));
  const chg = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    set(e.target.name, e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value);

  const addTag = () => {
    const t = tagInput.trim();
    if (t && !form.tags?.includes(t)) { set('tags', [...(form.tags ?? []), t]); setTagInput(''); }
  };
  const removeTag = (tag: string) => set('tags', (form.tags ?? []).filter(t => t !== tag));

  const generateSlug = () => {
    const slug = (form.title ?? '')
      .toLowerCase()
      .replace(/[ğ]/g,'g').replace(/[ü]/g,'u').replace(/[ş]/g,'s')
      .replace(/[ı]/g,'i').replace(/[ö]/g,'o').replace(/[ç]/g,'c')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    set('slug', slug);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/admin/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) router.push('/admin/blog');
      else alert('Kaydetme başarısız');
    } catch { alert('Bir hata oluştu'); }
    finally { setLoading(false); }
  };

  return (
    <form onSubmit={submit} className="max-w-6xl">

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          type="button"
          onClick={() => router.back()}
          className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.08] transition-all shrink-0"
        >
          <IconArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white">{isEdit ? 'Yazıyı Düzenle' : 'Yeni Blog Yazısı'}</h1>
          <p className="text-[14px] text-white/40 mt-0.5">{isEdit ? post?.title : 'Yeni bir içerik oluştur ve yayınla'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ── LEFT ─────────────────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-5">

          <Card>
            <SectionTitle>İçerik</SectionTitle>
            <div className="space-y-4">
              <div>
                <label className={lbl}>Başlık *</label>
                <input name="title" type="text" required value={form.title} onChange={chg} className={inp} placeholder="Yazı başlığı..." />
              </div>

              <div className="grid grid-cols-[1fr_auto_120px] gap-3 items-end">
                <div>
                  <label className={lbl}>Slug *</label>
                  <input name="slug" type="text" required value={form.slug} onChange={chg} className={inp} placeholder="url-slug" />
                </div>
                <button
                  type="button"
                  onClick={generateSlug}
                  className="h-12 px-4 bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] text-white/50 hover:text-white rounded-xl transition-all flex items-center gap-2 text-sm font-medium whitespace-nowrap"
                  title="Başlıktan üret"
                >
                  <IconWand size={15} />
                  Üret
                </button>
                <div>
                  <label className={lbl}>Okuma Süresi</label>
                  <input name="readTime" type="text" value={form.readTime} onChange={chg} className={inp} placeholder="5 dk" />
                </div>
              </div>

              <div>
                <label className={lbl}>Özet</label>
                <textarea name="excerpt" rows={3} value={form.excerpt} onChange={chg} className={textArea} placeholder="Okuyucuyu çekecek kısa özet..." />
              </div>

              <div>
                <label className={lbl}>İçerik (Markdown) *</label>
                <textarea
                  name="content"
                  rows={18}
                  required
                  value={form.content}
                  onChange={chg}
                  className={textArea + ' font-mono text-[14px]'}
                  placeholder={'# Başlık\n\n## Alt Başlık\n\nİçerik buraya...'}
                />
              </div>
            </div>
          </Card>
        </div>

        {/* ── RIGHT ────────────────────────────────────────────────── */}
        <div className="space-y-5">

          {/* Publish */}
          <Card>
            <SectionTitle>Yayınla</SectionTitle>
            <div className="space-y-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-[#F97316] hover:bg-[#ea6a0a] text-white font-bold text-[15px] rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-[#F97316]/20"
              >
                {loading ? <><IconLoader2 size={16} className="animate-spin" />Kaydediliyor...</> : (isEdit ? 'Güncelle' : 'Yayınla')}
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="w-full h-12 bg-white/[0.04] hover:bg-white/[0.07] text-white/60 hover:text-white font-semibold text-[15px] rounded-xl border border-white/[0.07] transition-all"
              >
                İptal
              </button>
            </div>
          </Card>

          {/* Category & Tags */}
          <Card>
            <SectionTitle>Kategori & Etiketler</SectionTitle>
            <div className="space-y-4">
              <div>
                <label className={lbl}>Kategori</label>
                <select name="category" value={form.category} onChange={chg} className={inp + ' pr-3'}>
                  {CATS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className={lbl}>Etiketler</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={e => setTagInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addTag(); }}}
                    placeholder="Etiket ekle..."
                    className={inp}
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                  >
                    <IconPlus size={16} />
                  </button>
                </div>
                {(form.tags?.length ?? 0) > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {form.tags?.map(tag => (
                      <span key={tag} className="inline-flex items-center gap-1.5 text-[13px] font-medium px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {tag}
                        <button type="button" onClick={() => removeTag(tag)} className="opacity-50 hover:opacity-100 transition-opacity">
                          <IconX size={11} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <label className="flex items-center gap-3 py-1">
                <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${form.featured ? 'bg-[#F97316] border-[#F97316]' : 'border-white/20 bg-white/[0.03]'}`}>
                  {form.featured && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <input type="checkbox" name="featured" checked={form.featured} onChange={chg} className="sr-only" />
                <span className="text-[14px] font-medium text-white/70">Öne çıkan yazı</span>
              </label>
            </div>
          </Card>

          {/* Image */}
          <Card>
            <SectionTitle>Kapak Görseli</SectionTitle>
            <div className="space-y-3">
              <input name="image" type="url" value={form.image} onChange={chg} className={inp} placeholder="https://..." />
              {form.image && (
                <img src={form.image} alt="" className="w-full aspect-video object-cover rounded-xl border border-white/[0.06]" />
              )}
            </div>
          </Card>

          {/* Author */}
          <Card>
            <SectionTitle>Yazar</SectionTitle>
            <div className="space-y-4">
              <div>
                <label className={lbl}>Ad Soyad</label>
                <input name="author" type="text" value={form.author} onChange={chg} className={inp} />
              </div>
              <div>
                <label className={lbl}>Unvan</label>
                <input name="authorRole" type="text" value={form.authorRole} onChange={chg} className={inp} placeholder="Teknoloji Editörü" />
              </div>
              <div>
                <label className={lbl}>Tarih</label>
                <input name="date" type="date" value={form.date} onChange={chg} className={inp} />
              </div>
            </div>
          </Card>

        </div>
      </div>
    </form>
  );
}
