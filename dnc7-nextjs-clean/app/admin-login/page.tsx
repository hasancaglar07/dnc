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
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center p-6">
      {/* Background Lines */}
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white/5" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-white/5" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-white/5" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-white/5" />
        <div className="absolute top-0 left-0 w-1/4 h-px bg-white/5" />
        <div className="absolute top-0 right-1/4 w-3/4 h-px bg-white/5" />
        <div className="absolute bottom-0 left-0 w-1/4 h-px bg-white/5" />
        <div className="absolute bottom-0 right-1/4 w-3/4 h-px bg-white/5" />
      </div>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black tracking-[0.2em] mb-2 text-white">
            DNC
            <span className="text-[#F97316]">7</span>
          </h1>
          <p className="text-white/60 text-sm font-medium tracking-wider">YÖNETİCİ PANEL</p>
        </div>

        {/* Login Card - Minimal */}
        <div className="bg-[#1a1a1a]/80 backdrop-blur-xl rounded-[2px] border border-white/10 p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Giriş Yap</h2>
            <p className="text-white/60 text-sm">
              Yönetici paneline erişmek için şifrenizi girin
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-xs font-bold text-white/80 mb-3 uppercase tracking-wider">
                Şifre
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#F97316] transition-colors duration-300 font-medium"
                  placeholder="•••••••••"
                  required
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 text-sm font-medium">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#F97316] hover:bg-[#EA6C0A] text-white font-bold py-4 px-6 rounded-[2px] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25"/>
                    <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Giriş yapılıyor...
                </>
              ) : (
                <>
                  Giriş Yap
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 5 5"/>
                  </svg>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-white/40 font-medium">
              Şifre: <span className="text-white/60">admin123</span>
            </p>
          </div>
        </div>
      </div>

      {/* Corner Lines Decor */}
      <div className="fixed top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20" />
      <div className="fixed top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/20" />
      <div className="fixed bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/20" />
      <div className="fixed bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/20" />
    </div>
  );
}
