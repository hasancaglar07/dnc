'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  // Pages with dark hero backgrounds need light nav
  const hasDarkHero = !isHome && (
    pathname.startsWith('/hizmetler/') ||
    pathname === '/hizmetler' ||
    pathname === '/hakkimizda' ||
    pathname === '/blog' ||
    pathname.startsWith('/blog/') ||
    pathname === '/fiyatlandirma'
  );
  const isLight = hasDarkHero && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Hizmetler', href: '/hizmetler', hashHref: '#hizmetler' },
    { label: 'Projeler', href: '/projeler', hashHref: null },
    { label: 'Blog', href: '/blog', hashHref: null },
    { label: 'Fiyatlandırma', href: '/fiyatlandirma', hashHref: null },
    { label: 'İletişim', href: '/#iletisim', hashHref: '#iletisim' },
  ];

  const NavLink = ({ label, href, hashHref }: { label: string; href: string; hashHref: string | null }) => {
    // If on homepage and has hash, use anchor tag for smooth scroll
    if (isHome && hashHref) {
      return <a href={hashHref}>{label}</a>;
    }
    return (
      <Link href={href} className={pathname.startsWith(href) && href !== '/' ? 'active' : ''}>
        {label}
      </Link>
    );
  };

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''} ${isLight ? 'nav-light' : ''}`}>
        <div className="nav-shell">
          <Link href="/" className="nav-logo">
            <span className="nav-logo-mark">DNC<span className="nav-logo-seven">7</span></span>
          </Link>
          <div className="nav-menu">
            {links.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </div>
          {isHome ? (
            <a href="#iletisim" className="nav-cta">
              Ücretsiz Teklif <i className="bi bi-arrow-up-right"></i>
            </a>
          ) : (
            <Link href="/#iletisim" className="nav-cta">
              Ücretsiz Teklif <i className="bi bi-arrow-up-right"></i>
            </Link>
          )}
          <button
            className={`nav-burger ${isMobileMenuOpen ? 'on' : ''}`}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Menüyü aç"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mob-nav"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div
        id="mob-nav"
        className={`mob-nav ${isMobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigasyonu"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mob-nav-top">
          <Link href="/" className="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>DNC<span>7</span></Link>
          <button className="mob-close" onClick={() => setIsMobileMenuOpen(false)} aria-label="Menüyü kapat">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="mob-nav-links">
          {links.map((link, i) => {
            if (isHome && link.hashHref) {
              return (
                <a key={link.label} href={link.hashHref} className="mob-link" onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${i * 60}ms` }}>
                  <span className="mob-link-num">0{i + 1}</span>
                  {link.label}
                </a>
              );
            }
            return (
              <Link key={link.label} href={link.href} className="mob-link" onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${i * 60}ms` }}>
                <span className="mob-link-num">0{i + 1}</span>
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="mob-nav-footer">
          {isHome ? (
            <a href="#iletisim" className="cta-main" onClick={() => setIsMobileMenuOpen(false)}
              style={{ width: '100%', justifyContent: 'center' }}>
              Proje Başlat
              <span className="ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </span>
            </a>
          ) : (
            <Link href="/#iletisim" className="cta-main" onClick={() => setIsMobileMenuOpen(false)}
              style={{ width: '100%', justifyContent: 'center' }}>
              Proje Başlat
              <span className="ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
