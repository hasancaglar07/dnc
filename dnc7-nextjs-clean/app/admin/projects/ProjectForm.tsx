'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Project } from '@/data/projects';
import {
  IconArrowLeft, IconPlus, IconX, IconLoader2,
  IconEye, IconExternalLink, IconCheck, IconUpload,
  IconPhoto, IconTrash, IconVideo, IconLink,
  IconStar, IconChartBar,
} from '@tabler/icons-react';

/* ─────────────────── constants ───────────────────────────── */
const CATS = ['video', 'web', 'mobil', 'oyun', 'marka'];
const ACCENTS = ['#F97316', '#10B981', '#8B5CF6', '#EC4899', '#0EA5E9', '#EF4444', '#F59E0B'];

/* ─────────────────── style tokens ────────────────────────── */
const inp = 'w-full h-11 px-4 bg-[#1c1e22] border border-white/[0.09] rounded-xl text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-[#F97316]/60 focus:bg-[#1f2126] transition-colors';
const txa = 'w-full px-4 py-3 bg-[#1c1e22] border border-white/[0.09] rounded-xl text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-[#F97316]/60 focus:bg-[#1f2126] transition-colors resize-none leading-relaxed';
const lbl = 'block text-[12px] font-semibold text-white/40 mb-1.5 tracking-wide';

function SectionCard({ title, subtitle, icon: Icon, children }: {
  title: string; subtitle?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        {Icon && (
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <Icon size={14} className="text-white/50" />
          </div>
        )}
        <div>
          <p className="text-[13px] font-semibold text-white/70">{title}</p>
          {subtitle && <p className="text-[11px] text-white/30 mt-0.5">{subtitle}</p>}
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

/* ─────────────────── Image upload ────────────────────────── */
function ImageUpload({ value, onChange, label = 'Görsel', aspectRatio = '16/9' }: {
  value: string; onChange: (url: string) => void;
  label?: string; aspectRatio?: string;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [mode, setMode] = useState<'upload' | 'url'>('upload');
  const [urlInput, setUrlInput] = useState(value || '');
  const [err, setErr] = useState('');

  const upload = async (file: File) => {
    setUploading(true); setErr('');
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Yükleme başarısız');
      onChange(data.url);
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setUploading(false);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) upload(file);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className={lbl}>{label}</label>
        <div className="flex gap-1">
          {(['upload', 'url'] as const).map(m => (
            <button key={m} type="button" onClick={() => setMode(m)}
              className="text-[11px] px-2.5 py-1 rounded-lg transition-colors"
              style={{ background: mode === m ? 'rgba(249,115,22,0.12)' : 'rgba(255,255,255,0.05)', color: mode === m ? '#F97316' : 'rgba(255,255,255,0.35)', border: `1px solid ${mode === m ? 'rgba(249,115,22,0.22)' : 'transparent'}` }}>
              {m === 'upload' ? 'Yükle' : 'URL'}
            </button>
          ))}
        </div>
      </div>

      {/* Current image */}
      {value && (
        <div className="relative mb-3 rounded-xl overflow-hidden group" style={{ aspectRatio }}>
          <img src={value} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button type="button" onClick={() => onChange('')}
              className="flex items-center gap-1.5 text-[12px] font-semibold text-white px-3 py-1.5 rounded-lg bg-red-500/80 hover:bg-red-500 transition-colors">
              <IconTrash size={12} />Kaldır
            </button>
          </div>
        </div>
      )}

      {mode === 'upload' ? (
        <div
          className="relative border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-2 py-6 transition-colors"
          style={{ borderColor: uploading ? '#F97316' : 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}
          onDrop={onDrop}
          onDragOver={e => e.preventDefault()}
        >
          <input ref={fileRef} type="file" accept="image/*" className="hidden"
            onChange={e => { const f = e.target.files?.[0]; if (f) upload(f); }} />
          {uploading ? (
            <IconLoader2 size={24} className="text-[#F97316] animate-spin" />
          ) : (
            <>
              <IconUpload size={20} className="text-white/25" />
              <p className="text-[13px] text-white/40">Sürükle bırak veya <button type="button" onClick={() => fileRef.current?.click()} className="text-[#F97316] underline">seç</button></p>
              <p className="text-[11px] text-white/20">PNG, JPG, WebP — maks. 10MB</p>
            </>
          )}
        </div>
      ) : (
        <div className="flex gap-2">
          <input type="url" value={urlInput} onChange={e => setUrlInput(e.target.value)}
            placeholder="https://..."
            className={inp}
            onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); onChange(urlInput); } }} />
          <button type="button" onClick={() => onChange(urlInput)}
            className="h-11 px-4 rounded-xl text-[13px] font-semibold transition-colors whitespace-nowrap"
            style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.22)', color: '#F97316' }}>
            Ekle
          </button>
        </div>
      )}
      {err && <p className="mt-2 text-[12px] text-red-400">{err}</p>}
    </div>
  );
}

/* ─────────────────── Gallery manager ─────────────────────── */
function GalleryManager({ items, onChange }: { items: string[]; onChange: (v: string[]) => void }) {
  const [uploading, setUploading] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const upload = async (file: File) => {
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (res.ok) onChange([...items, data.url]);
    } finally { setUploading(false); }
  };

  const addUrl = () => {
    if (urlInput.trim() && !items.includes(urlInput.trim())) {
      onChange([...items, urlInput.trim()]);
      setUrlInput('');
    }
  };

  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-3">
      {items.length > 0 && (
        <div className="grid grid-cols-2 gap-2">
          {items.map((img, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden group" style={{ aspectRatio: '16/9' }}>
              <img src={img} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button type="button" onClick={() => remove(i)}
                  className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center text-white">
                  <IconTrash size={13} />
                </button>
              </div>
              <span className="absolute top-1.5 left-1.5 text-[10px] font-bold bg-black/60 text-white/60 px-1.5 py-0.5 rounded">{i + 1}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <input type="url" value={urlInput} onChange={e => setUrlInput(e.target.value)}
          placeholder="URL ile ekle..." className={inp}
          onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addUrl(); } }} />
        <button type="button" onClick={addUrl}
          className="h-11 px-4 rounded-xl text-[13px] font-semibold whitespace-nowrap"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}>
          <IconLink size={14} />
        </button>
        <button type="button" onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="h-11 px-4 rounded-xl text-[13px] font-semibold whitespace-nowrap flex items-center gap-1.5 transition-colors"
          style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', color: '#F97316' }}>
          {uploading ? <IconLoader2 size={14} className="animate-spin" /> : <IconUpload size={14} />}
          Yükle
        </button>
        <input ref={fileRef} type="file" accept="image/*" multiple className="hidden"
          onChange={async e => {
            for (const f of Array.from(e.target.files ?? [])) await upload(f);
          }} />
      </div>
    </div>
  );
}

/* ─────────────────── Chip input ──────────────────────────── */
function ChipField({ label, items, input, onInput, onAdd, onRemove, placeholder, color }: {
  label: string; items: string[]; input: string;
  onInput: (v: string) => void; onAdd: () => void;
  onRemove: (i: number) => void; placeholder: string; color: string;
}) {
  return (
    <div>
      <label className={lbl}>{label}</label>
      <div className="flex gap-2 mb-2">
        <input type="text" value={input} onChange={e => onInput(e.target.value)} placeholder={placeholder}
          className={inp}
          onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); onAdd(); } }} />
        <button type="button" onClick={onAdd}
          className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${color}12`, border: `1px solid ${color}20`, color }}>
          <IconPlus size={15} />
        </button>
      </div>
      {items.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {items.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 text-[13px] font-medium px-2.5 py-1 rounded-lg"
              style={{ background: `${color}12`, color, border: `1px solid ${color}20` }}>
              {item}
              <button type="button" onClick={() => onRemove(i)} className="opacity-40 hover:opacity-100 transition-opacity">
                <IconX size={10} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────── Metrics editor ──────────────────────── */
function MetricsEditor({ items, onChange }: {
  items: { label: string; value: string; period: string }[];
  onChange: (v: { label: string; value: string; period: string }[]) => void;
}) {
  const add = () => onChange([...items, { label: '', value: '', period: '' }]);
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const update = (i: number, field: string, val: string) =>
    onChange(items.map((m, idx) => idx === i ? { ...m, [field]: val } : m));

  return (
    <div className="space-y-2">
      {items.map((m, i) => (
        <div key={i} className="flex gap-2 items-center p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <input value={m.value} onChange={e => update(i, 'value', e.target.value)}
            placeholder="500K+" className={inp + ' flex-1'} />
          <input value={m.label} onChange={e => update(i, 'label', e.target.value)}
            placeholder="Görüntülenme" className={inp + ' flex-1'} />
          <input value={m.period} onChange={e => update(i, 'period', e.target.value)}
            placeholder="İlk hafta" className={inp + ' flex-1'} />
          <button type="button" onClick={() => remove(i)}
            className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-white/25 hover:text-red-400 hover:bg-red-500/10 transition-all"
            style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
            <IconTrash size={14} />
          </button>
        </div>
      ))}
      <button type="button" onClick={add}
        className="w-full h-10 rounded-xl flex items-center justify-center gap-2 text-[13px] font-medium transition-colors"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid dashed rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.35)' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'white')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}>
        <IconPlus size={14} />Metrik Ekle
      </button>
    </div>
  );
}

/* ─────────────────── Main form ───────────────────────────── */
type F = Partial<Project>;

export default function ProjectForm({ project, isEdit = false }: { project?: Project; isEdit?: boolean }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const accent = (project?.accent || '#F97316');

  /* chip inputs */
  const [tagIn, setTagIn] = useState('');
  const [techIn, setTechIn] = useState('');
  const [teamIn, setTeamIn] = useState('');
  const [featIn, setFeatIn] = useState('');

  const [form, setForm] = useState<F>(project ?? {
    id: Date.now(),
    name: '', category: CATS[0], year: String(new Date().getFullYear()),
    image: '', tags: [], accent: '#F97316',
    description: '', longDescription: '',
    client: '', clientUrl: '', duration: '',
    team: [], technologies: [], gallery: [], features: [],
    challenges: '', solutions: '', results: '',
    videoUrl: '', metrics: [],
    testimonial: undefined,
  });

  const set = (k: string, v: unknown) => setForm(p => ({ ...p, [k]: v }));
  const chg = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    set(e.target.name, e.target.value);

  const addChip = (field: keyof F, val: string, clear: () => void) => {
    if (!val.trim()) return;
    const arr = (form[field] as string[]) ?? [];
    if (!arr.includes(val.trim())) set(field, [...arr, val.trim()]);
    clear();
  };
  const removeChip = (field: keyof F, i: number) =>
    set(field, ((form[field] as string[]) ?? []).filter((_, idx) => idx !== i));

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSaved(true);
        setTimeout(() => router.push('/admin/projects'), 800);
      } else alert('Kaydetme başarısız');
    } catch { alert('Bir hata oluştu'); }
    finally { setSaving(false); }
  };

  const currentAccent = (form.accent as string) || '#F97316';

  return (
    <form onSubmit={save} className="max-w-5xl">

      {/* ── Top bar ─────────────────────────────────────────── */}
      <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => router.back()}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-white transition-colors shrink-0"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <IconArrowLeft size={18} />
          </button>
          <div>
            <h1 className="text-xl font-bold text-white leading-tight">
              {isEdit ? 'Projeyi Düzenle' : 'Yeni Proje'}
            </h1>
            <p className="text-[13px] text-white/30 mt-0.5">
              {isEdit ? project?.name : 'Portfolyona yeni çalışma ekle'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isEdit && (
            <a href={`/projeler/${project?.id}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-9 px-4 rounded-xl text-[13px] font-medium text-white/50 hover:text-white transition-all"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <IconExternalLink size={13} />Sitede Gör
            </a>
          )}
          <button type="submit" disabled={saving || saved}
            className="inline-flex items-center gap-2 h-9 px-5 rounded-xl text-[13px] font-bold text-white transition-all"
            style={{ background: saved ? '#10B981' : currentAccent, boxShadow: `0 4px 16px ${currentAccent}30`, opacity: (saving || saved) ? 0.7 : 1 }}>
            {saving ? <><IconLoader2 size={13} className="animate-spin" />Kaydediliyor...</>
              : saved ? <><IconCheck size={13} />Kaydedildi!</>
              : isEdit ? 'Değişiklikleri Kaydet' : 'Yayınla'}
          </button>
        </div>
      </div>

      {/* ── Two column ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">

        {/* LEFT ─────────────────────────────────────────────── */}
        <div className="space-y-5">

          {/* 1 — Hero section */}
          <SectionCard title="Hero Bölümü" subtitle="Proje sayfasının başlığı ve meta bilgileri" icon={IconEye}>
            <div className="space-y-4">
              <div>
                <label className={lbl}>Proje Adı <span className="text-[#F97316]">*</span></label>
                <input name="name" required value={form.name || ''} onChange={chg}
                  className={inp} placeholder="Projenin tam adı" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={lbl}>Kategori</label>
                  <select name="category" value={form.category || ''} onChange={chg}
                    className={inp} style={{ paddingRight: 12 }}>
                    {CATS.map(c => <option key={c} value={c} style={{ background: '#1c1e22' }}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
                  </select>
                </div>
                <div>
                  <label className={lbl}>Yıl</label>
                  <input name="year" value={form.year || ''} onChange={chg}
                    className={inp} placeholder="2024" />
                </div>
              </div>
              <div>
                <label className={lbl}>Kısa Açıklama <span className="text-white/20 font-normal">(kart görünümünde)</span></label>
                <textarea name="description" rows={2} value={form.description || ''} onChange={chg}
                  className={txa} placeholder="Proje kartlarında görünecek kısa açıklama..." />
              </div>
              <div>
                <label className={lbl}>Hero Açıklaması <span className="text-white/20 font-normal">(proje sayfası başlığı)</span></label>
                <textarea name="longDescription" rows={4} value={form.longDescription || ''} onChange={chg}
                  className={txa} placeholder="Ziyaretçinin proje sayfasında ilk okuduğu detaylı açıklama..." />
              </div>
              <ChipField label="Etiketler" items={(form.tags as string[]) ?? []}
                input={tagIn} onInput={setTagIn}
                onAdd={() => addChip('tags', tagIn, () => setTagIn(''))}
                onRemove={i => removeChip('tags', i)}
                placeholder="Web, UI/UX, Mobil..." color="#10B981" />
            </div>
          </SectionCard>

          {/* 2 — Meta strip */}
          <SectionCard title="Meta Bilgileri" subtitle="Hero bölümünün alt şeridinde görünür" icon={IconLink}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={lbl}>Müşteri</label>
                <input name="client" value={form.client || ''} onChange={chg}
                  className={inp} placeholder="Şirket / Marka adı" />
              </div>
              <div>
                <label className={lbl}>Süre</label>
                <input name="duration" value={form.duration || ''} onChange={chg}
                  className={inp} placeholder="3 ay" />
              </div>
              <div>
                <label className={lbl}>Müşteri Web Sitesi</label>
                <input name="clientUrl" type="url" value={form.clientUrl || ''} onChange={chg}
                  className={inp} placeholder="https://musteri.com" />
              </div>
            </div>
          </SectionCard>

          {/* 3 — Showcase image */}
          <SectionCard title="Ana Görsel" subtitle="Hero'nun altındaki büyük showcase görseli" icon={IconPhoto}>
            <ImageUpload
              value={(form.image as string) || ''}
              onChange={url => set('image', url)}
              label="Showcase Görseli"
              aspectRatio="16/7"
            />
          </SectionCard>

          {/* 4 — Video */}
          <SectionCard title="Video" subtitle="YouTube veya Vimeo embed URL'i" icon={IconVideo}>
            <label className={lbl}>Video URL</label>
            <input name="videoUrl" type="url" value={(form.videoUrl as string) || ''} onChange={chg}
              className={inp} placeholder="https://youtube.com/embed/..." />
            <p className="text-[11px] text-white/25 mt-1.5">YouTube embed: youtube.com/embed/VIDEO_ID — Vimeo: player.vimeo.com/video/ID</p>
          </SectionCard>

          {/* 5 — Gallery */}
          <SectionCard title="Vaka Galerisi" subtitle={`${((form.gallery as string[]) ?? []).length} görsel — proje sayfasındaki 'Ekran Görüntüleri' bölümü`} icon={IconPhoto}>
            <GalleryManager
              items={(form.gallery as string[]) ?? []}
              onChange={v => set('gallery', v)}
            />
          </SectionCard>

          {/* 6 — Features */}
          <SectionCard title="Öne Çıkan Özellikler" subtitle="'Özellikler' grid bölümü" icon={IconCheck}>
            <ChipField label="Özellikler" items={(form.features as string[]) ?? []}
              input={featIn} onInput={setFeatIn}
              onAdd={() => addChip('features', featIn, () => setFeatIn(''))}
              onRemove={i => removeChip('features', i)}
              placeholder="4K sinematik çekimler, Ses tasarımı..."
              color={currentAccent} />
          </SectionCard>

          {/* 7 — Technologies */}
          <SectionCard title="Kullanılan Teknolojiler" subtitle="'Teknoloji Yığını' bölümü" icon={IconStar}>
            <ChipField label="Teknolojiler" items={(form.technologies as string[]) ?? []}
              input={techIn} onInput={setTechIn}
              onAdd={() => addChip('technologies', techIn, () => setTechIn(''))}
              onRemove={i => removeChip('technologies', i)}
              placeholder="Next.js, Figma, After Effects..."
              color="#0EA5E9" />
          </SectionCard>

          {/* 8 — Process */}
          <SectionCard title="Problem & Çözüm Süreci" subtitle="'Süreç' bölümündeki iki kart" icon={IconArrowLeft}>
            <div className="space-y-4">
              <div>
                <label className={lbl}>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
                    Zorluklar / Meydan Okuma
                  </span>
                </label>
                <textarea name="challenges" rows={3} value={form.challenges || ''} onChange={chg}
                  className={txa} placeholder="Projede karşılaşılan temel zorluklar..." />
              </div>
              <div>
                <label className={lbl}>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    Çözümler
                  </span>
                </label>
                <textarea name="solutions" rows={3} value={form.solutions || ''} onChange={chg}
                  className={txa} placeholder="Uygulanan çözüm yaklaşımları..." />
              </div>
            </div>
          </SectionCard>

          {/* 9 — Metrics */}
          <SectionCard title="Başarı Metrikleri" subtitle="Sayılarla başarı bölümü" icon={IconChartBar}>
            <MetricsEditor
              items={(form.metrics as { label: string; value: string; period: string }[]) ?? []}
              onChange={v => set('metrics', v)}
            />
          </SectionCard>

          {/* 10 — Results */}
          <SectionCard title="Sonuçlar" subtitle="Koyu arka planlı 'Elde Edilen Başarılar' bölümü — virgülle ayır" icon={IconStar}>
            <label className={lbl}>Sonuçlar <span className="text-white/20 font-normal">(virgülle ayrılmış)</span></label>
            <textarea name="results" rows={2} value={form.results || ''} onChange={chg}
              className={txa} placeholder="İlk haftada 500K+ views, %85 izlenme oranı, %40 artan web trafiği" />
            <p className="text-[11px] text-white/20 mt-1.5">Her virgül sonrası ayrı bir başarı kartı olur.</p>
          </SectionCard>

          {/* 11 — Testimonial */}
          <SectionCard title="Müşteri Referansı" subtitle="'Müşteri yorumu' bölümü" icon={IconStar}>
            <div className="space-y-3">
              <div>
                <label className={lbl}>Yorum</label>
                <textarea rows={3} value={form.testimonial?.text || ''} onChange={e => set('testimonial', { ...(form.testimonial ?? {}), text: e.target.value })}
                  className={txa} placeholder="Harika bir iş çıkardılar, markamızı tam olarak yansıtıyor..." />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={lbl}>Yorum Yapan</label>
                  <input type="text" value={form.testimonial?.author || ''} onChange={e => set('testimonial', { ...(form.testimonial ?? {}), author: e.target.value })}
                    className={inp} placeholder="Ahmet Yılmaz" />
                </div>
                <div>
                  <label className={lbl}>Unvanı / Şirketi</label>
                  <input type="text" value={form.testimonial?.role || ''} onChange={e => set('testimonial', { ...(form.testimonial ?? {}), role: e.target.value })}
                    className={inp} placeholder="CEO, TechStart" />
                </div>
              </div>
            </div>
          </SectionCard>

          {/* 12 — Team */}
          <SectionCard title="Proje Ekibi" subtitle="'Ekip' bölümündeki üyeler" icon={IconStar}>
            <ChipField label="Ekip Üyeleri" items={(form.team as string[]) ?? []}
              input={teamIn} onInput={setTeamIn}
              onAdd={() => addChip('team', teamIn, () => setTeamIn(''))}
              onRemove={i => removeChip('team', i)}
              placeholder="Yönetmen, UI Designer, Backend Dev..."
              color="#A78BFA" />
          </SectionCard>
        </div>

        {/* RIGHT ─────────────────────────────────────────────── */}
        <div className="space-y-4">

          {/* Save */}
          <div className="rounded-2xl p-5 space-y-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.1em]">Yayınla</p>
            <button type="submit" disabled={saving || saved}
              className="w-full h-11 font-bold text-[14px] rounded-xl flex items-center justify-center gap-2 transition-all"
              style={{ background: saved ? '#10B981' : currentAccent, color: 'white', boxShadow: `0 4px 16px ${currentAccent}25`, opacity: (saving || saved) ? 0.75 : 1 }}>
              {saving ? <><IconLoader2 size={15} className="animate-spin" />Kaydediliyor...</>
                : saved ? <><IconCheck size={15} />Kaydedildi!</>
                : isEdit ? 'Değişiklikleri Kaydet' : 'Yayınla'}
            </button>
            <button type="button" onClick={() => router.back()}
              className="w-full h-11 text-[13px] font-medium rounded-xl border transition-colors"
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'white')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
              İptal
            </button>
            {isEdit && (
              <a href={`/projeler/${project?.id}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 h-10 text-[13px] rounded-xl transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'white')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)')}>
                <IconExternalLink size={13} />Sitede Önizle
              </a>
            )}
          </div>

          {/* Vurgu rengi */}
          <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.1em] mb-4">Vurgu Rengi</p>
            <div className="grid grid-cols-7 gap-2 mb-3">
              {ACCENTS.map(a => (
                <button key={a} type="button" onClick={() => set('accent', a)}
                  className="aspect-square rounded-xl transition-all relative"
                  style={{
                    background: a,
                    boxShadow: form.accent === a ? `0 0 0 2px #111214, 0 0 0 4px ${a}` : 'none',
                    transform: form.accent === a ? 'scale(1.08)' : 'scale(0.92)',
                  }}>
                  {form.accent === a && <IconCheck size={11} className="absolute inset-0 m-auto text-white drop-shadow" />}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: `${currentAccent}10`, border: `1px solid ${currentAccent}20` }}>
              <div className="w-4 h-4 rounded-full" style={{ background: currentAccent }} />
              <span className="text-[12px] font-mono" style={{ color: currentAccent }}>{currentAccent}</span>
            </div>
          </div>

          {/* Durum özeti */}
          <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.1em] mb-3">İçerik Durumu</p>
            <div className="space-y-2">
              {[
                { label: 'Başlık', ok: !!(form.name) },
                { label: 'Ana Görsel', ok: !!(form.image) },
                { label: 'Açıklama', ok: !!(form.description || form.longDescription) },
                { label: 'Müşteri Bilgisi', ok: !!(form.client) },
                { label: 'Etiketler', ok: ((form.tags as string[]) ?? []).length > 0 },
                { label: 'Galeri', ok: ((form.gallery as string[]) ?? []).length > 0 },
                { label: 'Sonuçlar', ok: !!(form.results) },
                { label: 'Referans', ok: !!(form.testimonial?.text) },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-[12px]" style={{ color: item.ok ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)' }}>{item.label}</span>
                  <div className="w-4 h-4 rounded-full flex items-center justify-center"
                    style={{ background: item.ok ? 'rgba(52,211,153,0.15)' : 'rgba(255,255,255,0.05)' }}>
                    {item.ok
                      ? <IconCheck size={9} className="text-emerald-400" />
                      : <span className="w-1.5 h-1.5 rounded-full bg-white/15 block" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </form>
  );
}
