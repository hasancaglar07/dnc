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
      id: Date.now(),
      name: '',
      category: categories[0],
      year: new Date().getFullYear().toString(),
      image: '',
      tags: [],
      accent: accents[0],
      description: '',
      longDescription: '',
      client: '',
      duration: '',
      team: [],
      technologies: [],
      gallery: [],
      features: [],
      challenges: '',
      solutions: '',
      results: '',
    }
  );

  const [tagInput, setTagInput] = useState('');
  const [techInput, setTechInput] = useState('');
  const [teamInput, setTeamInput] = useState('');
  const [featureInput, setFeatureInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags?.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...(prev.tags || []), tagInput.trim()],
      }));
      setTagInput('');
    }
  };

  const handleAddTech = () => {
    if (techInput.trim() && !formData.technologies?.includes(techInput.trim())) {
      setFormData(prev => ({
        ...prev,
        technologies: [...(prev.technologies || []), techInput.trim()],
      }));
      setTechInput('');
    }
  };

  const handleAddTeamMember = () => {
    if (teamInput.trim() && !formData.team?.includes(teamInput.trim())) {
      setFormData(prev => ({
        ...prev,
        team: [...(prev.team || []), teamInput.trim()],
      }));
      setTeamInput('');
    }
  };

  const handleAddFeature = () => {
    if (featureInput.trim() && !formData.features?.includes(featureInput.trim())) {
      setFormData(prev => ({
        ...prev,
        features: [...(prev.features || []), featureInput.trim()],
      }));
      setFeatureInput('');
    }
  };

  const handleRemoveItem = <T extends keyof Project>(field: T, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[])?.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/admin/projects');
      } else {
        alert('Kaydetme başarısız');
      }
    } catch {
      alert('Bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Temel Bilgiler</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Proje Adı *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Proje adı"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Kategori</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Yıl</label>
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Kısa Açıklama</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Kısa açıklama..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Uzun Açıklama</label>
                <textarea
                  name="longDescription"
                  value={formData.longDescription}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Detaylı açıklama..."
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Proje Detayları</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Müşteri</label>
                  <input
                    type="text"
                    name="client"
                    value={formData.client}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Süre</label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="3 ay"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Zorluklar</label>
                <textarea
                  name="challenges"
                  value={formData.challenges}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Proje zorlukları..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Çözümler</label>
                <textarea
                  name="solutions"
                  value={formData.solutions}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Çözümler..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Sonuçlar</label>
                <textarea
                  name="results"
                  value={formData.results}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Sonuçlar..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Yayınla</h3>
            
            <div className="space-y-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition disabled:opacity-50"
              >
                {loading ? 'Kaydediliyor...' : isEdit ? 'Güncelle' : 'Yayınla'}
              </button>
              
              <button
                type="button"
                onClick={() => router.back()}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 px-4 rounded-lg transition"
              >
                İptal
              </button>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Görsel & Renk</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Resim URL</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="/assets/images/..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Vurgu Rengi</label>
                <div className="grid grid-cols-4 gap-2">
                  {accents.map(accent => (
                    <button
                      key={accent}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, accent }))}
                      className={`w-12 h-12 rounded-lg border-2 transition ${
                        formData.accent === accent ? 'border-white scale-110' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: accent }}
                    />
                  ))}
                </div>
              </div>

              {formData.image && (
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-full aspect-video object-cover rounded-lg"
                />
              )}
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Etiketler</h3>
            
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                placeholder="Etiket ekle..."
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
              >
                <i className="bi bi-plus-lg" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm flex items-center gap-1"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('tags', i)}
                    className="hover:text-red-400"
                  >
                    <i className="bi bi-x text-xs" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Teknolojiler</h3>
            
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTech())}
                className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                placeholder="Teknoloji ekle..."
              />
              <button
                type="button"
                onClick={handleAddTech}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
              >
                <i className="bi bi-plus-lg" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.technologies?.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm flex items-center gap-1"
                >
                  {tech}
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('technologies', i)}
                    className="hover:text-red-400"
                  >
                    <i className="bi bi-x text-xs" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Takım Üyeleri</h3>
            
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={teamInput}
                onChange={(e) => setTeamInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTeamMember())}
                className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                placeholder="Rol ekle..."
              />
              <button
                type="button"
                onClick={handleAddTeamMember}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
              >
                <i className="bi bi-plus-lg" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.team?.map((member, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm flex items-center gap-1"
                >
                  {member}
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('team', i)}
                    className="hover:text-red-400"
                  >
                    <i className="bi bi-x text-xs" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Özellikler</h3>
            
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddFeature())}
                className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                placeholder="Özellik ekle..."
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
              >
                <i className="bi bi-plus-lg" />
              </button>
            </div>
            <div className="space-y-2">
              {formData.features?.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 rounded-lg text-sm text-white"
                >
                  <i className="bi bi-check-circle text-emerald-400" />
                  <span className="flex-1">{feature}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('features', i)}
                    className="text-slate-500 hover:text-red-400"
                  >
                    <i className="bi bi-x" />
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
