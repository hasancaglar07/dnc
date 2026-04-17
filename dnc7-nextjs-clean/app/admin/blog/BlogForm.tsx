'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BlogPost } from '@/data/blog';
import { IconBack, IconPlus, IconLink } from '@/components/admin/icons';

interface Props { post?: BlogPost; isEdit?: boolean }

const categories = ['AI & Teknoloji', 'Web Tasarım', 'Dijital Pazarlama', 'Prodüksiyon', 'E-Ticaret'];

const input = "w-full px-3 py-2.5 bg-[#12151A] border border-white/5 rounded-lg text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/40 transition-colors";
const label = "block text-xs font-medium text-zinc-500 mb-1.5";

export default function BlogForm({ post, isEdit = false }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [tagInput, setTagInput] = useState('');
  const [form, setForm] = useState<Partial<BlogPost>>(post || {
    id: Date.now().toString(), slug: '', title: '', excerpt: '', content: '',
    category: categories[0], tags: [], author: 'DNC7 Ekibi', authorRole: '',
    date: new Date().toISOString().split('T')[0], readTime: '5 dk', image: '', featured: false,
  });

  const set = (name: string, value: any) => setForm(prev => ({ ...prev, [name]: value }));
  const onChange = (e: any) => set(e.target.name, e.target.type === 'checkbox' ? e.target.checked : e.target.value);

  const addTag = () => {
    const t = tagInput.trim();
    if (t && !form.tags?.includes(t)) { set('tags', [...(form.tags || []), t]); setTagInput(''); }
  };
  const removeTag = (tag: string) => set('tags', form.tags?.filter(t => t !== tag) || []);

  const generateSlug = () => {
    const slug = (form.title || '').toLowerCase()
      .replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ş/g,'s').replace(/ı/g,'i').replace(/ö/g,'o').replace(/ç/g,'c')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    set('slug', slug);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/admin/blog', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      });
      if (res.ok) router.push('/admin/blog'); else alert('Kaydetme başarısız');
    } catch { alert('Bir hata oluştu'); }
    finally { setLoading(false); }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => router.back()} className="p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-colors">
          <IconBack width={18} height={18} />
        </button>
        <div>
          <h1 className="text-xl font-bold text-white">{isEdit ? 'Yazıyı Düzenle' : 'Yeni Blog Yazısı'}</h1>
          <p className="text-xs text-zinc-600 mt-0.5">{isEdit ? 'Mevcut yazıyı güncelleyin' : 'Yeni bir yazı oluşturun'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main */}
        <div className="lg:col-span-2 space-y-5">
          {/* Content Card */}
          <div className="bg-[#12151A] border border-white/5 rounded-xl p-5 space-y-4">
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">İçerik</h3>
            <div>
              <label className={label}>Başlık *</label>
              <input type="text" name="title" value={form.title} onChange={onChange} required className={input} placeholder="Blog yazısı başlığı" />
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <label className={label}>Slug *</label>
                <div className="flex gap-2">
                  <input type="text" name="slug" value={form.slug} onChange={onChange} required className={input} placeholder="url-slug" />
                  <button type="button" onClick={generateSlug} className="px-3 bg-white/5 hover:bg-white/10 text-zinc-500 hover:text-white rounded-lg transition-colors" title="Otomatik oluştur">
                    <IconLink width={16} height={16} />
                  </button>
                </div>
              </div>
              <div className="w-28">
                <label className={label}>Okuma Süresi</label>
                <input type="text" name="readTime" value={form.readTime} onChange={onChange} className={input} placeholder="5 dk" />
              </div>
            </div>
            <div>
              <label className={label}>Özet</label>
              <textarea name="excerpt" value={form.excerpt} onChange={onChange} rows={2} className={input} placeholder="Kısa özet..." />
            </div>
            <div>
              <label className={label}>İçerik (Markdown) *</label>
              <textarea name="content" value={form.content} onChange={onChange} required rows={14}
                className={`${input} font-mono text-xs leading-relaxed`} placeholder="# Başlık&#10;&#10;İçerik buraya..." />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Publish */}
          <div className="bg-[#12151A] border border-white/5 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Yayınla</h3>
            <button type="submit" disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors disabled:opacity-50">
              {loading ? 'Kaydediliyor...' : isEdit ? 'Güncelle' : 'Yayınla'}
            </button>
            <button type="button" onClick={() => router.back()}
              className="w-full bg-white/5 hover:bg-white/10 text-zinc-400 py-2.5 rounded-lg text-sm transition-colors">
              İptal
            </button>
          </div>

          {/* Category & Tags */}
          <div className="bg-[#12151A] border border-white/5 rounded-xl p-5 space-y-4">
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Kategori & Etiketler</h3>
            <div>
              <label className={label}>Kategori</label>
              <select name="category" value={form.category} onChange={onChange} className={input}>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className={label}>Etiketler</label>
              <div className="flex gap-2">
                <input type="text" value={tagInput} onChange={e => setTagInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  className={`${input} py-2`} placeholder="Etiket ekle..." />
                <button type="button" onClick={addTag} className="px-2.5 bg-white/5 hover:bg-white/10 text-zinc-500 hover:text-white rounded-lg transition-colors">
                  <IconPlus width={14} height={14} />
                </button>
              </div>
              {form.tags && form.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {form.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1 text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-md">
                      {tag}
                      <button type="button" onClick={() => removeTag(tag)} className="hover:text-red-400">×</button>
                    </span>
                  ))}
                </div>
              )}
            </div>
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input type="checkbox" name="featured" checked={form.featured} onChange={onChange}
                className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-orange-500 focus:ring-orange-500" />
              <span className="text-sm text-zinc-400">Öne çıkan yazı</span>
            </label>
          </div>

          {/* Image */}
          <div className="bg-[#12151A] border border-white/5 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Görsel</h3>
            <input type="url" name="image" value={form.image} onChange={onChange} className={input} placeholder="/assets/images/..." />
            {form.image && <img src={form.image} alt="" className="w-full h-32 object-cover rounded-lg border border-white/5" />}
          </div>

          {/* Author */}
          <div className="bg-[#12151A] border border-white/5 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Yazar</h3>
            <div>
              <label className={label}>Ad</label>
              <input type="text" name="author" value={form.author} onChange={onChange} className={input} />
            </div>
            <div>
              <label className={label}>Rol</label>
              <input type="text" name="authorRole" value={form.authorRole} onChange={onChange} className={input} placeholder="Teknoloji Editörü" />
            </div>
            <div>
              <label className={label}>Tarih</label>
              <input type="date" name="date" value={form.date} onChange={onChange} className={input} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
