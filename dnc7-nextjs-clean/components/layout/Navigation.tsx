'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Hizmetler', href: '/hizmetler', hashHref: '#hizmetler' },
    { label: 'Projeler', href: '/projeler', hashHref: null },
    { label: 'Ekip', href: '/#ekip', hashHref: '#ekip' },
    { label: 'Referanslar', href: '/#referanslar', hashHref: '#referanslar' },
    { label: 'İletişim', href: '/#iletisim', hashHref: '#iletisim' },
  ];

  const NavLink = ({ label, href, hashHref }: { label: string; href: string; hashHref: string | null }) => {
    // If on homepage and has hash, use anchor tag for smooth scroll
    if (isHome && hashHref) {
      return <a href={hashHref}>{label}</a>;
    }
    return (
      <Link href={hashHref ? href : href} className={pathname === href ? 'active' : ''}>
        {label}
      </Link>
    );
  };

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-shell">
          <Link href="/" className="nav-logo">DNC<span>7</span></Link>
          <div className="nav-menu">
            {links.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </div>
          {isHome ? (
            <a href="#iletisim" className="nav-cta">
              Proje Başlat <i className="bi bi-arrow-up-right"></i>
            </a>
          ) : (
            <Link href="/#iletisim" className="nav-cta">
              Proje Başlat <i className="bi bi-arrow-up-right"></i>
            </Link>
          )}
          <button className="nav-burger" onClick={() => setIsMobileMenuOpen(true)}>
            <i className="bi bi-list"></i>
          </button>
        </div>
      </nav>

      <div className={`mob-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="mob-close" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
        {links.map((link) => {
          if (isHome && link.hashHref) {
            return <a key={link.label} href={link.hashHref} onClick={() => setIsMobileMenuOpen(false)}>{link.label}</a>;
          }
          return (
            <Link key={link.label} href={link.hashHref ? link.href : link.href} onClick={() => setIsMobileMenuOpen(false)}>
              {link.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
