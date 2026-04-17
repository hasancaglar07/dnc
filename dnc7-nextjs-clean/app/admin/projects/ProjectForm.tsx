'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Project } from '@/data/projects';

interface ProjectFormProps {
  project?: Project;
  isEdit?: boolean;
}

const categories = ['video', 'web', 'mobil', 'oyun'];
const accents = ['#F97316', '#10B981', '#8B5CF6', '#EC4899', '#0EA5E9', '#EF4444', '#F59E0B'];

export default function ProjectForm({ project, isEdit = false }: ProjectFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<Partial<Project>>(
    project || {
      id: Date.now(), name: '', category: categories[0],
      year: new Date().getFullYear().toString(), image: '',
      tags: [], accent: accents[0], description: '',
      longDescription: '', client: '', duration: '',
      team: [], technologies: [], gallery: [],
      features: [], challenges: '', solutions: '', results: '',
    }
  );

  const [tagInput, setTagInput] = useState('');
  const [techInput, setTechInput] = useState('');
  const [teamInput, setTeamInput] = useState('');
  const [featureInput, setFeatureInput] = useState('');

  const inputClass = "w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#F97316]/40 focus:bg-white/[0.06] transition-all duration-300";
  const labelClass = "block text-xs font-bold text-white/50 uppercase tracking-wider mb-2";
  const sectionTitle = (color: string, title: string) => (
    <div className="flex items-center gap-2 mb-5">
      <div className={`w-1.5 h-5 bg-gradient-to-b ${color} rounded-full`}></div>
      <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider">{title}</h3>
    </div>
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addItem = (field: keyof Project, input: string, setter: (v: string) => void) => {
    if (input.trim() && !((formData[field] as string[])?.includes(input.trim()))) {
      setFormData(prev => ({ ...prev, [field]: [...((prev[field] as string[]) || []), input.trim()] }));
      setter('');
    }
  };

  const removeItem = (field: keyof Project, index: number) => {
    setFormData(prev => ({ ...prev, [field]: (prev[field] as string[])?.filter((_, i) => i !== index) }));
  };

  const tagList = (items: string[] | undefined, field: keyof Project, color: string) => (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {items?.map((item, i) => (
        <span key={i} className={`px-2.5 py-1 ${color}/10 ${color.replace('/10', '/400')} rounded-lg text-xs font-medium flex items-center gap-1 border ${color}/15`}
          style={{ backgroundColor: `color-mix(in srgb, ${color} 10%, transparent)`, color: color, borderColor: `color-mix(in srgb, ${color} 20%, transparent)` }}>
          {item}
          <button type="button" onClick={() => removeItem(field, i)} className="hover:text-red-400 transition-colors">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </span>
      ))}
    </div>
  );

  const addInputRow = (placeholder: string, value: string, onChange: (v: string) => void, onAdd: () => void) => (
    <div className="flex gap-2">
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), onAdd())}
        className={`${inputClass} py-2.5`} placeholder={placeholder} />
      <button type="button" onClick={onAdd}
        className="px-3 bg-white/[0.06] hover:bg-white/[0.1] text-white/60 hover:text-white rounded-xl transition-all">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
    </div>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) router.push('/admin/projects');
      else alert('Kaydetme başarısız');
    } catch { alert('Bir hata oluştu'); }
    finally { setLoading(false); }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => router.back()}
          className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div>
          <h1 className="text-xl font-extrabold text-white tracking-tight">{isEdit ? 'Projeyi Düzenle' : 'Yeni Proje'}</h1>
          <p className="text-xs text-white/35 mt-0.5">{isEdit ? 'Mevcut projeyi güncelleyin' : 'Yeni bir proje oluşturun'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
            {sectionTitle('from-[#F97316] to-orange-300', 'Temel Bilgiler')}
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Proje Adı *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Proje adı" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Kategori</label>
                  <select name="category" value={formData.category} onChange={handleChange} className={inputClass}>
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Yıl</label>
                  <input type="text" name="year" value={formData.year} onChange={handleChange} className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Kısa Açıklama</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows={2} className={inputClass} placeholder="Kısa açıklama..." />
              </div>
              <div>
                <label className={labelClass}>Uzun Açıklama</label>
                <textarea name="longDescription" value={formData.longDescription} onChange={handleChange} rows={4} className={inputClass} placeholder="Detaylı açıklama..." />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
            {sectionTitle('from-blue-500 to-blue-300', 'Proje Detayları')}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Müşteri</label>
                  <input type="text" name="client" value={formData.client} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Süre</label>
                  <input type="text" name="duration" value={formData.duration} onChange={handleChange} placeholder="3 ay" className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Zorluklar</label>
                <textarea name="challenges" value={formData.challenges} onChange={handleChange} rows={2} className={inputClass} placeholder="Proje zorlukları..." />
              </div>
              <div>
                <label className={labelClass}>Çözümler</label>
                <textarea name="solutions" value={formData.solutions} onChange={handleChange} rows={2} className={inputClass} placeholder="Çözümler..." />
              </div>
              <div>
                <label className={labelClass}>Sonuçlar</label>
                <textarea name="results" value={formData.results} onChange={handleChange} rows={2} className={inputClass} placeholder="Sonuçlar..." />
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-5">
          {/* Publish */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
            {sectionTitle('from-emerald-500 to-emerald-300', 'Yayınla')}
            <div className="space-y-3">
              <button type="submit" disabled={loading}
                className="w-full bg-gradient-to-r from-[#F97316] to-orange-600 hover:from-orange-500 hover:to-[#F97316] text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 disabled:opacity-50 shadow-lg shadow-orange-500/15">
                {loading ? 'Kaydediliyor...' : isEdit ? 'Güncelle' : 'Yayınla'}
              </button>
              <button type="button" onClick={() => router.back()}
                className="w-full bg-white/[0.04] hover:bg-white/[0.08] text-white/60 hover:text-white py-3 px-4 rounded-xl transition-all text-sm font-medium">
                İptal
              </button>
            </div>
          </div>

          {/* Image & Color */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
            {sectionTitle('from-purple-500 to-purple-300', 'Görsel & Renk')}
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Resim URL</label>
                <input type="url" name="image" value={formData.image} onChange={handleChange} className={inputClass} placeholder="/assets/images/..." />
              </div>
              <div>
                <label className={labelClass}>Vurgu Rengi</label>
                <div className="flex flex-wrap gap-2">
                  {accents.map(accent => (
                    <button key={accent} type="button" onClick={() => setFormData(prev => ({ ...prev, accent }))}
                      className={`w-10 h-10 rounded-xl transition-all duration-200 ${formData.accent === accent ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0a0a0a] scale-110' : 'hover:scale-105'}`}
                      style={{ backgroundColor: accent }} />
                  ))}
                </div>
              </div>
              {formData.image && (
                <img src={formData.image} alt="Preview" className="w-full aspect-video object-cover rounded-xl border border-white/[0.06]" />
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
            {sectionTitle('from-emerald-500 to-emerald-300', 'Etiketler')}
            {addInputRow('Etiket ekle...', tagInput, setTagInput, () => addItem('tags', tagInput, setTagInput))}
            {tagList(formData.tags, 'tags', '#10B981')}
          </div>

          {/* Technologies */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
            {sectionTitle('from-blue-500 to-blue-300', 'Teknolojiler')}
            {addInputRow('Teknoloji ekle...', techInput, setTechInput, () => addItem('technologies', techInput, setTechInput))}
            {tagList(formData.technologies, 'technologies', '#0EA5E9')}
          </div>

          {/* Team */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
            {sectionTitle('from-purple-500 to-purple-300', 'Takım')}
            {addInputRow('Rol ekle...', teamInput, setTeamInput, () => addItem('team', teamInput, setTeamInput))}
            {tagList(formData.team, 'team', '#8B5CF6')}
          </div>

          {/* Features */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
            {sectionTitle('from-amber-500 to-amber-300', 'Özellikler')}
            {addInputRow('Özellik ekle...', featureInput, setFeatureInput, () => addItem('features', featureInput, setFeatureInput))}
            <div className="space-y-1.5 mt-2">
              {formData.features?.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white/[0.04] rounded-lg text-xs text-white/80">
                  <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  <span className="flex-1">{feature}</span>
                  <button type="button" onClick={() => removeItem('features', i)} className="text-white/25 hover:text-red-400 transition-colors">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
