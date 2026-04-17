'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        router.push('/admin');
      } else {
        setError(data.error || 'Giriş başarısız');
      }
    } catch {
      setError('Bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F97316]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Corner Decorations */}
      <div className="fixed top-6 left-6 w-12 h-12 border-l border-t border-white/10 rounded-tl-sm" />
      <div className="fixed top-6 right-6 w-12 h-12 border-r border-t border-white/10 rounded-tr-sm" />
      <div className="fixed bottom-6 left-6 w-12 h-12 border-l border-b border-white/10 rounded-bl-sm" />
      <div className="fixed bottom-6 right-6 w-12 h-12 border-r border-b border-white/10 rounded-br-sm" />

      <div className="w-full max-w-sm relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#FCD34D] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-xl shadow-orange-500/20">
            <span className="text-white font-black text-xl">D7</span>
          </div>
          <h1 className="text-3xl font-black tracking-[0.15em] text-white mb-1">
            DNC<span className="text-[#F97316]">7</span>
          </h1>
          <p className="text-white/30 text-xs font-semibold tracking-[0.25em] uppercase">Yönetici Paneli</p>
        </div>

        {/* Card */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-8">
          <div className="mb-7">
            <h2 className="text-lg font-bold text-white mb-1">Hoş Geldiniz</h2>
            <p className="text-white/35 text-sm">Devam etmek için giriş yapın</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2">
                Şifre
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[#F97316]/40 focus:bg-white/[0.06] transition-all duration-300 text-sm"
                  placeholder="••••••••"
                  required
                />
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-white/15" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm font-medium">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#F97316] to-orange-600 hover:from-orange-500 hover:to-[#F97316] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2.5 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 text-sm"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25"/>
                    <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Giriş yapılıyor...
                </>
              ) : (
                <>
                  Giriş Yap
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer hint */}
        <p className="text-center text-[10px] text-white/15 mt-6 font-medium tracking-wider">
          Şifre: admin123
        </p>
      </div>
    </div>
  );
}
