'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IconDashboard, IconFile, IconFolder, IconPlus, IconLogout, IconMenu, IconX } from '@/components/admin/icons';

const nav = [
  { href: '/admin', label: 'Dashboard', icon: IconDashboard, section: false },
  { href: '/admin/blog', label: 'Blog Yazıları', icon: IconFile, section: true },
  { href: '/admin/blog/new', label: 'Yeni Yazı', icon: IconPlus, section: false },
  { href: '/admin/projects', label: 'Projeler', icon: IconFolder, section: true },
  { href: '/admin/projects/new', label: 'Yeni Proje', icon: IconPlus, section: false },
];

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [counts, setCounts] = useState({ blogs: 0, projects: 0 });

  useEffect(() => {
    Promise.all([fetch('/api/admin/blog'), fetch('/api/admin/projects')])
      .then(([b, p]) => Promise.all([b.json(), p.json()]))
      .then(([b, p]) => setCounts({ blogs: b.length, projects: p.length }))
      .catch(() => {});
  }, []);

  const logout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin-login');
  };

  const isActive = (href: string) =>
    href === '/admin' ? pathname === '/admin' : pathname.startsWith(href);

  const link = (href: string, label: string, Icon: any, section: boolean) => {
    const active = isActive(href);
    return (
      <Link key={href} href={href} onClick={() => setOpen(false)}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
          ${active ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}>
        <Icon width={18} height={18} />
        <span className="flex-1">{label}</span>
        {href === '/admin/blog' && counts.blogs > 0 && (
          <span className="text-xs tabular-nums bg-white/10 px-1.5 py-0.5 rounded">{counts.blogs}</span>
        )}
        {href === '/admin/projects' && counts.projects > 0 && (
          <span className="text-xs tabular-nums bg-white/10 px-1.5 py-0.5 rounded">{counts.projects}</span>
        )}
      </Link>
    );
  };

  const navLinks = (
    <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
      {nav.map(n => (
        <div key={n.href}>
          {n.section && <div className="h-px bg-white/5 my-2" />}
          {link(n.href, n.label, n.icon, n.section)}
        </div>
      ))}
    </nav>
  );

  const userCard = (
    <div className="p-3 border-t border-white/5">
      <div className="flex items-center gap-3 px-3 py-2">
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold shrink-0">A</div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white truncate">Admin</p>
          <p className="text-xs text-zinc-500">Yönetici</p>
        </div>
        <button onClick={logout} className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-400/10 transition-colors">
          <IconLogout width={16} height={16} />
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed inset-x-0 top-0 z-50 bg-[#0B0D10]/90 backdrop-blur border-b border-white/5">
        <div className="flex items-center justify-between h-14 px-4">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white text-xs font-bold">D7</div>
            <span className="font-semibold text-white text-sm">Admin</span>
          </Link>
          <button onClick={() => setOpen(!open)} className="p-2 text-zinc-400">
            {open ? <IconX width={20} height={20} /> : <IconMenu width={20} height={20} />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/5 bg-[#0B0D10] pb-4">
            {navLinks}
            {userCard}
          </div>
        )}
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-60 bg-[#0F1115] border-r border-white/5 flex-col z-40">
        <div className="h-14 flex items-center px-4 border-b border-white/5 shrink-0">
          <Link href="/admin" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white text-xs font-bold">D7</div>
            <span className="font-semibold text-white">DNC7 Admin</span>
          </Link>
        </div>
        {navLinks}
        {userCard}
      </aside>
    </>
  );
}
