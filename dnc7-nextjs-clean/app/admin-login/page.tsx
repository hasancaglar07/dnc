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
    <div className="min-h-screen bg-[#FEF9F0] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Mesh Gradient */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FCD34D]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-[3px] border-t-[3px] border-[#F97316]/20 rounded-tl-3xl" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-[3px] border-b-[3px] border-[#F97316]/20 rounded-br-3xl" />

      <div className="relative w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-black tracking-[0.2em] mb-3">
            DNC<span className="relative inline-block">
              <span className="bg-gradient-to-br from-[#F97316] via-[#FCD34D] to-[#F97316] bg-clip-text text-transparent animate-shimmer">
                7
              </span>
            </span>
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#E5E5E5]/50">
            <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
            <span className="text-xs font-bold text-[#3D3D3D] tracking-widest">ADMIN PANEL</span>
          </div>
        </div>

        {/* Login Card - Premium Glass Effect */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[32px] border border-white/50 shadow-2xl shadow-[#F97316]/10 p-10 relative overflow-hidden">
          {/* Card Shine Effect */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />
          
          <div className="mb-8">
            <h2 className="text-3xl font-black text-[#0D0D0D] mb-2 tracking-tight">
              Hoş Geldiniz
            </h2>
            <p className="text-[#767676] font-medium">
              Yönetici paneline erişmek için giriş yapın
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-7">
            <div className="space-y-3">
              <label htmlFor="password" className="block text-xs font-black tracking-[0.2em] text-[#3D3D3D] uppercase">
                Şifre
              </label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/20 to-[#FCD34D]/20 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="relative w-full px-6 py-5 bg-[#F7F7F5] border-2 border-[#E5E5E5] rounded-[20px] text-[#0D0D0D] placeholder-[#767676]/50 focus:outline-none focus:border-[#F97316] focus:bg-white transition-all duration-500 font-bold text-lg"
                  placeholder="••••••••"
                  required
                />
                <div className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#F97316]/10 rounded-[12px] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-red-50/80 backdrop-blur-sm border-2 border-red-200 text-red-700 px-5 py-4 rounded-[20px] text-sm font-bold flex items-center gap-3 animate-shake">
                <div className="w-8 h-8 bg-red-500 rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </div>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group relative w-full bg-gradient-to-r from-[#F97316] to-[#EA6C0A] hover:from-[#EA6C0A] hover:to-[#F97316] text-white font-black py-5 px-8 rounded-[9999px] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-xl shadow-[#F97316]/30 hover:shadow-2xl hover:shadow-[#F97316]/40 hover:-translate-y-1 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              
              {loading ? (
                <>
                  <svg className="animate-spin" width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25"/>
                    <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  <span className="font-bold tracking-wide">GİRİŞ YAPILIYOR...</span>
                </>
              ) : (
                <>
                  <span className="font-bold tracking-wide">GİRİŞ YAP</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Footer Info */}
          <div className="mt-10 pt-8 border-t border-[#E5E5E5]/50 flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-[#10B981] rounded-full" />
            <p className="text-xs text-[#767676] font-medium tracking-wide">
              GÜVENLİ YÖNETİCİ ERİŞİMİ
            </p>
          </div>
        </div>

        {/* Version Badge */}
        <div className="mt-8 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-sm rounded-full border border-[#E5E5E5]/30">
            <span className="text-xs text-[#767676]/80 font-mono">v1.0.0</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
          background-size: 200% 100%;
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
