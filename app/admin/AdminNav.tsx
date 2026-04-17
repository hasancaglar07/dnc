'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, type ComponentType } from 'react';
import { IconDashboard, IconFile, IconFolder, IconPlus, IconLogout, IconMenu, IconX, IconArrowRight } from '@/components/admin/icons';

type IconComponent = ComponentType<{ width?: number; height?: number; className?: string }>;

interface NavItem {
  href: string;
  label: string;
  icon: IconComponent;
  badge?: 'blogs' | 'projects';
  divider?: boolean;
  sectionLabel?: string;
}

const nav: NavItem[] = [
  { href: '/admin', label: 'Dashboard', icon: IconDashboard },
  { href: '/admin/blog', label: 'Blog Yazıları', icon: IconFile, badge: 'blogs', divider: true, sectionLabel: 'İÇERİK' },
  { href: '/admin/blog/new', label: 'Yeni Yazı', icon: IconPlus },
  { href: '/admin/projects', label: 'Projeler', icon: IconFolder, badge: 'projects', divider: true, sectionLabel: 'PROJELER' },
  { href: '/admin/projects/new', label: 'Yeni Proje', icon: IconPlus },
];

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [counts, setCounts] = useState({ blogs: 0, projects: 0 });

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    const loadCounts = async () => {
      try {
        const [blogRes, projectRes] = await Promise.all([
          fetch('/api/admin/blog', { signal: controller.signal, cache: 'no-store' }),
          fetch('/api/admin/projects', { signal: controller.signal, cache: 'no-store' }),
        ]);

        if (blogRes.status === 401 || projectRes.status === 401) {
          router.replace('/admin-login');
          return;
        }

        if (!blogRes.ok || !projectRes.ok) return;

        const [blogData, projectData] = await Promise.all([blogRes.json(), projectRes.json()]);
        if (cancelled) return;
        setCounts({
          blogs: Array.isArray(blogData) ? blogData.length : 0,
          projects: Array.isArray(projectData) ? projectData.length : 0,
        });
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          setCounts({ blogs: 0, projects: 0 });
        }
      }
    };

    loadCounts();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [router]);

  const logout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin-login');
  };

  const isActive = (href: string) =>
    href === '/admin' ? pathname === '/admin' : pathname.startsWith(href);

  const NavLink = ({ item }: { item: NavItem }) => {
    const Icon = item.icon;
    const active = isActive(item.href);
    const count = item.badge ? counts[item.badge] : 0;

    return (
      <Link
        href={item.href}
        onClick={() => setOpen(false)}
        className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
          active
            ? 'bg-gradient-to-r from-orange-500/20 to-orange-500/5 text-white border border-orange-500/20'
            : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04] border border-transparent'
        }`}
      >
        {active && (
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-orange-500 rounded-r-full" />
        )}
        <span className={`flex-shrink-0 transition-colors ${active ? 'text-orange-400' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
          <Icon width={17} height={17} />
        </span>
        <span className="flex-1 truncate">{item.label}</span>
        {count > 0 && item.badge && (
          <span className={`text-[10px] font-bold tabular-nums px-1.5 py-0.5 rounded-md ${
            active ? 'bg-orange-500/20 text-orange-300' : 'bg-white/[0.06] text-zinc-500'
          }`}>
            {count}
          </span>
        )}
        {active && (
          <span className="text-orange-500/50">
            <IconArrowRight width={12} height={12} />
          </span>
        )}
      </Link>
    );
  };

  const navContent = (
    <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
      {nav.map((item) => (
        <div key={item.href}>
          {item.divider && (
            <div className="pt-4 pb-2 px-3">
              <p className="text-[10px] font-bold text-zinc-600 tracking-widest uppercase">
                {item.sectionLabel}
              </p>
            </div>
          )}
          <NavLink item={item} />
        </div>
      ))}
    </nav>
  );

  const siteLink = (
    <div className="px-3 pb-3">
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.04] border border-transparent hover:border-white/5 transition-all duration-200"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        <span>Siteyi Görüntüle</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto opacity-50">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </a>
    </div>
  );

  const userCard = (
    <div className="p-3 border-t border-white/[0.05]">
      <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.03] transition-colors group">
        <div className="relative shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-orange-500/20">
            A
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0F1217]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-zinc-100 truncate">Admin</p>
          <p className="text-[11px] text-zinc-500">dnc7.com.tr</p>
        </div>
        <button
          onClick={logout}
          className="p-1.5 rounded-lg text-zinc-600 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200 opacity-0 group-hover:opacity-100"
          title="Çıkış Yap"
          aria-label="Çıkış Yap"
        >
          <IconLogout width={14} height={14} />
        </button>
      </div>
    </div>
  );

  const logoArea = (
    <div className="h-14 flex items-center px-4 border-b border-white/[0.05] shrink-0">
      <Link href="/admin" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white text-xs font-extrabold shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
          D7
        </div>
        <div>
          <span className="font-bold text-white text-sm block leading-tight">DNC7</span>
          <span className="text-[10px] text-zinc-500 font-medium tracking-wider uppercase">Admin</span>
        </div>
      </Link>
    </div>
  );

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed inset-x-0 top-0 z-50 bg-[#0B0D10]/95 backdrop-blur-md border-b border-white/[0.06]">
        <div className="flex items-center justify-between h-14 px-4">
          <Link href="/admin" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white text-xs font-extrabold">
              D7
            </div>
            <span className="font-bold text-white text-sm">DNC7 Admin</span>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          >
            {open ? <IconX width={20} height={20} /> : <IconMenu width={20} height={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40 pt-14">
          <button
            type="button"
            aria-label="Menüyü kapat"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <div className="relative h-full w-72 bg-[#0F1217] border-r border-white/[0.08] flex flex-col shadow-2xl shadow-black/40">
            {navContent}
            {siteLink}
            {userCard}
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-60 bg-[#0F1217] border-r border-white/[0.07] flex-col z-40 shadow-xl shadow-black/20">
        {logoArea}
        {navContent}
        {siteLink}
        {userCard}
      </aside>
    </>
  );
}
