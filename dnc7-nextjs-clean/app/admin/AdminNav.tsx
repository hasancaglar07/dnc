'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  IconLayoutDashboard, IconArticle, IconPlus,
  IconBriefcase, IconLogout, IconMenu2, IconX,
  IconExternalLink, IconChevronRight,
} from '@tabler/icons-react';

type Item = {
  href: string; label: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  badge?: 'blogs' | 'projects'; exact?: boolean;
};
type Group = { section: string; items: Item[] };
type Entry = Item | Group;
const isGroup = (e: Entry): e is Group => 'section' in e;

const NAV: Entry[] = [
  { href: '/admin', label: 'Dashboard', icon: IconLayoutDashboard, exact: true },
  { section: 'İçerik', items: [
    { href: '/admin/blog', label: 'Blog Yazıları', icon: IconArticle, badge: 'blogs' },
    { href: '/admin/blog/new', label: 'Yeni Yazı', icon: IconPlus },
  ]},
  { section: 'Portfolyo', items: [
    { href: '/admin/projects', label: 'Projeler', icon: IconBriefcase, badge: 'projects' },
    { href: '/admin/projects/new', label: 'Yeni Proje', icon: IconPlus },
  ]},
];

function NavItem({ item, counts, pathname, onClose }: {
  item: Item; counts: { blogs: number; projects: number };
  pathname: string; onClose?: () => void;
}) {
  const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
  const Icon = item.icon;
  const count = item.badge ? counts[item.badge] : 0;
  return (
    <Link href={item.href} onClick={onClose} className={`adm-nav-item${active ? ' active' : ''}`}>
      <span style={{ flexShrink: 0, color: active ? 'var(--adm-accent)' : 'var(--adm-text-3)', display: 'flex' }}>
        <Icon size={16} strokeWidth={active ? 2.5 : 1.8} />
      </span>
      <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.label}</span>
      {count > 0 && item.badge && (
        <span style={{
          fontSize: 11, fontWeight: 700, padding: '1px 6px', borderRadius: 5,
          background: active ? 'var(--adm-accent-lo)' : 'rgba(255,255,255,0.06)',
          color: active ? 'var(--adm-accent)' : 'var(--adm-text-3)',
        }}>{count}</span>
      )}
      {active && <IconChevronRight size={11} style={{ flexShrink: 0, opacity: 0.4, color: 'var(--adm-accent)' }} />}
    </Link>
  );
}

function SidebarInner({ pathname, counts, onClose, onLogout }: {
  pathname: string; counts: { blogs: number; projects: number };
  onClose?: () => void; onLogout: () => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

      {/* Logo */}
      <div style={{ height: 60, display: 'flex', alignItems: 'center', padding: '0 16px', borderBottom: '1px solid var(--adm-border)', flexShrink: 0 }}>
        <Link href="/admin" onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: 'var(--adm-accent)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: 'white', fontWeight: 900,
            fontSize: 12, letterSpacing: '-0.5px',
            boxShadow: '0 4px 12px rgba(249,115,22,0.3)',
          }}>D7</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--adm-text-1)', lineHeight: 1.2 }}>DNC7</div>
            <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--adm-text-3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Admin</div>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: 2, overflowY: 'auto' }}>
        {NAV.map((entry, i) => {
          if (isGroup(entry)) return (
            <div key={i} style={{ paddingTop: i === 0 ? 0 : 16 }}>
              <div style={{ padding: '0 12px 6px', fontSize: 10, fontWeight: 700, color: 'var(--adm-text-4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {entry.section}
              </div>
              {entry.items.map(item => <NavItem key={item.href} item={item} counts={counts} pathname={pathname} onClose={onClose} />)}
            </div>
          );
          return <NavItem key={entry.href} item={entry} counts={counts} pathname={pathname} onClose={onClose} />;
        })}
      </nav>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid var(--adm-border)', flexShrink: 0 }}>
        <div style={{ padding: '8px 10px' }}>
          <a href="/" target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 8, fontSize: 13, color: 'var(--adm-text-3)', textDecoration: 'none', transition: 'all 0.12s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--adm-text-2)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.04)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--adm-text-3)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
          >
            <IconExternalLink size={14} />
            <span style={{ flex: 1 }}>Siteyi Görüntüle</span>
          </a>
        </div>
        <div style={{ padding: '6px 10px 10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 8 }}
            className="group"
          >
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 9,
                background: 'linear-gradient(135deg, var(--adm-accent), #c2410c)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontWeight: 700, fontSize: 13,
              }}>A</div>
              <span style={{
                position: 'absolute', bottom: -2, right: -2,
                width: 10, height: 10, background: '#34D399',
                borderRadius: '50%', border: '2px solid var(--adm-sidebar)',
              }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--adm-text-1)', lineHeight: 1.3 }}>Admin</div>
              <div style={{ fontSize: 11, color: 'var(--adm-text-3)' }}>dnc7.com.tr</div>
            </div>
            <button onClick={onLogout}
              style={{ width: 28, height: 28, borderRadius: 7, border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--adm-text-3)', transition: 'all 0.12s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--adm-red)'; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(248,113,113,0.1)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--adm-text-3)'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
              title="Çıkış"
            >
              <IconLogout size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [counts, setCounts] = useState({ blogs: 0, projects: 0 });

  useEffect(() => {
    const ctrl = new AbortController();
    (async () => {
      try {
        const [bR, pR] = await Promise.all([
          fetch('/api/admin/blog', { signal: ctrl.signal, cache: 'no-store' }),
          fetch('/api/admin/projects', { signal: ctrl.signal, cache: 'no-store' }),
        ]);
        if (bR.status === 401) { router.replace('/admin-login'); return; }
        if (!bR.ok || !pR.ok) return;
        const [b, p] = await Promise.all([bR.json(), pR.json()]);
        setCounts({ blogs: Array.isArray(b) ? b.length : 0, projects: Array.isArray(p) ? p.length : 0 });
      } catch {}
    })();
    return () => ctrl.abort();
  }, [router]);

  const logout = async () => { await fetch('/api/admin/auth', { method: 'DELETE' }); router.push('/admin-login'); };

  const SIDEBAR_W = 240;

  return (
    <>
      {/* Mobile top bar */}
      <div style={{
        position: 'fixed', inset: '0 0 auto', height: 64, zIndex: 50,
        background: 'rgba(12,13,16,0.95)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--adm-border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px',
      }} className="lg:hidden">
        <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: 'var(--adm-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 900, fontSize: 11 }}>D7</div>
          <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--adm-text-1)' }}>DNC7 Admin</span>
        </Link>
        <button onClick={() => setOpen(!open)} style={{ width: 38, height: 38, borderRadius: 9, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--adm-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--adm-text-2)' }}>
          {open ? <IconX size={18} /> : <IconMenu2 size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div key="bd" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}
              onClick={() => setOpen(false)}
              style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
              className="lg:hidden"
            />
            <motion.div key="dw" initial={{ x: -SIDEBAR_W - 20 }} animate={{ x: 0 }} exit={{ x: -SIDEBAR_W - 20 }}
              transition={{ type: 'spring', stiffness: 420, damping: 38 }}
              style={{ position: 'fixed', left: 0, top: 0, bottom: 0, zIndex: 50, width: SIDEBAR_W, background: 'var(--adm-sidebar)', borderRight: '1px solid var(--adm-border)' }}
              className="lg:hidden"
            >
              <SidebarInner pathname={pathname} counts={counts} onClose={() => setOpen(false)} onLogout={logout} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop sidebar — part of flex row, sticky */}
      <aside
        className="hidden lg:block"
        style={{
          width: SIDEBAR_W, flexShrink: 0,
          height: '100dvh', position: 'sticky', top: 0,
          background: 'var(--adm-sidebar)',
          borderRight: '1px solid var(--adm-border)',
          overflowY: 'auto',
        }}
      >
        <SidebarInner pathname={pathname} counts={counts} onLogout={logout} />
      </aside>
    </>
  );
}
