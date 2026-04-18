'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const kaynaklar = [
  { label: 'Bütçe Hesaplayıcı', href: '/araclar/butce-hesaplayici', icon: 'bi-calculator' },
  { label: 'ROI Hesaplayıcı', href: '/araclar/roi-hesaplayici', icon: 'bi-graph-up-arrow' },
  { label: 'Marka Audit', href: '/araclar/marka-audit', icon: 'bi-search' },
  { label: 'Renk Paleti', href: '/araclar/renk-paleti', icon: 'bi-palette' },
  { label: 'Video Brief', href: '/araclar/video-brief', icon: 'bi-camera-reels' },
];

const hizmetler = [
  { label: 'Web Tasarım', href: '/hizmetler/web-tasarim', icon: 'bi-globe2' },
  { label: 'Mobil Uygulama', href: '/hizmetler/mobil-uygulama', icon: 'bi-phone' },
  { label: 'AI Entegrasyonu', href: '/hizmetler/ai-entegrasyonu', icon: 'bi-cpu' },
  { label: 'Prodüksiyon Filmi', href: '/hizmetler/produksiyon-filmleri', icon: 'bi-camera-reels' },
  { label: 'Drone Çekim', href: '/hizmetler/drone-cekim', icon: 'bi-airplane' },
  { label: 'Sosyal Medya', href: '/hizmetler/sosyal-medya', icon: 'bi-chat-dots' },
  { label: 'E-Ticaret', href: '/hizmetler/e-ticaret-danismanligi', icon: 'bi-bag' },
  { label: 'Reklam Yönetimi', href: '/hizmetler/reklam-yonetimi', icon: 'bi-megaphone' },
  { label: 'Mobil Oyun', href: '/hizmetler/mobil-oyun', icon: 'bi-controller' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isKaynaklarOpen, setIsKaynaklarOpen] = useState(false);
  const [mobHizmetOpen, setMobHizmetOpen] = useState(false);
  const [mobKaynaklarOpen, setMobKaynaklarOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const kaynaklarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const hasDarkHero = !isHome && (
    pathname.startsWith('/hizmetler/') ||
    pathname === '/hizmetler' ||
    pathname === '/hakkimizda' ||
    pathname === '/kaynaklar' ||
    pathname.startsWith('/kaynaklar/') ||
    pathname === '/fiyatlandirma' ||
    pathname === '/projeler' ||
    pathname.startsWith('/projeler/')
  );
  const isLight = hasDarkHero && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (kaynaklarRef.current && !kaynaklarRef.current.contains(e.target as Node)) {
        setIsKaynaklarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navLinks = [
    { label: 'Projeler', href: '/projeler', hashHref: null },
    { label: 'Hakkımızda', href: '/hakkimizda', hashHref: null },
    { label: 'Fiyatlandırma', href: '/fiyatlandirma', hashHref: null },
    { label: 'İletişim', href: '/#iletisim', hashHref: '#iletisim' },
  ];

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''} ${isLight ? 'nav-light' : ''}`}>
        <div className="nav-shell">
          <Link href="/" className="nav-logo">
            <span className="nav-logo-mark">DNC<span className="nav-logo-seven">7</span></span>
          </Link>
          <div className="nav-menu">
            <div ref={dropdownRef} className="nav-dd-wrap">
              <button
                className={`nav-dd-trigger ${isDropdownOpen ? 'on' : ''} ${pathname.startsWith('/hizmetler') ? 'active' : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
              >
                Hizmetler
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform .2s', transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className={`nav-dd ${isDropdownOpen ? 'open' : ''}`} onMouseLeave={() => setIsDropdownOpen(false)}>
                <div className="nav-dd-header">
                  <span>Hizmetlerimiz</span>
                </div>
                <div className="nav-dd-grid">
                  {hizmetler.map((h) => (
                    <Link key={h.href} href={h.href} className="nav-dd-item" onClick={() => setIsDropdownOpen(false)}>
                      <i className={`bi ${h.icon}`}></i>
                      <span>{h.label}</span>
                    </Link>
                  ))}
                </div>
                <div className="nav-dd-footer">
                  <Link href="/hizmetler" className="nav-dd-all" onClick={() => setIsDropdownOpen(false)}>
                    Tüm Hizmetleri Gör
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div ref={kaynaklarRef} className="nav-dd-wrap">
              <button
                className={`nav-dd-trigger ${isKaynaklarOpen ? 'on' : ''} ${pathname.startsWith('/araclar') ? 'active' : ''}`}
                onClick={() => setIsKaynaklarOpen(!isKaynaklarOpen)}
                onMouseEnter={() => setIsKaynaklarOpen(true)}
              >
                Kaynaklar
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform .2s', transform: isKaynaklarOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className={`nav-dd ${isKaynaklarOpen ? 'open' : ''}`} onMouseLeave={() => setIsKaynaklarOpen(false)}>
                <div className="nav-dd-header">
                  <span>Kaynaklar</span>
                </div>
                <div className="nav-dd-grid">
                  {kaynaklar.map((k) => (
                    <Link key={k.href} href={k.href} className="nav-dd-item" onClick={() => setIsKaynaklarOpen(false)}>
                      <i className={`bi ${k.icon}`}></i>
                      <span>{k.label}</span>
                    </Link>
                  ))}
                </div>
                <div className="nav-dd-footer">
                  <Link href="/araclar" className="nav-dd-all" onClick={() => setIsKaynaklarOpen(false)}>
                    Tüm Araçları Gör
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {navLinks.map((link) => (
              isHome && link.hashHref ? (
                <a key={link.label} href={link.hashHref}>{link.label}</a>
              ) : (
                <Link key={link.label} href={link.href} className={pathname.startsWith(link.href) && link.href !== '/' ? 'active' : ''}>
                  {link.label}
                </Link>
              )
            ))}
          </div>
          {isHome ? (
            <a href="#iletisim" className="nav-cta">Ücretsiz Teklif <i className="bi bi-arrow-up-right"></i></a>
          ) : (
            <Link href="/#iletisim" className="nav-cta">Ücretsiz Teklif <i className="bi bi-arrow-up-right"></i></Link>
          )}
          <button className={`nav-burger ${isMobileMenuOpen ? 'on' : ''}`} onClick={() => setIsMobileMenuOpen(true)} aria-label="Menüyü aç" aria-expanded={isMobileMenuOpen} aria-controls="mob-nav">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div id="mob-nav" className={`mob-nav ${isMobileMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Site navigasyonu" aria-hidden={!isMobileMenuOpen}>
        <div className="mob-nav-top">
          <Link href="/" className="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>DNC<span>7</span></Link>
          <button className="mob-close" onClick={() => setIsMobileMenuOpen(false)} aria-label="Menüyü kapat">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="mob-nav-links">
          <button className={`mob-link mob-hizmet-toggle ${mobHizmetOpen ? 'on' : ''}`} onClick={() => setMobHizmetOpen(!mobHizmetOpen)} style={{ animationDelay: '0ms' }}>
            <span className="mob-link-num">01</span>
            Hizmetler
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ marginLeft: 'auto', transition: 'transform .2s', transform: mobHizmetOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className={`mob-hizmet-list ${mobHizmetOpen ? 'open' : ''}`}>
            {hizmetler.map((h) => (
              <Link key={h.href} href={h.href} className="mob-hizmet-item" onClick={() => setIsMobileMenuOpen(false)}>
                <i className={`bi ${h.icon}`}></i>
                {h.label}
              </Link>
            ))}
            <Link href="/hizmetler" className="mob-hizmet-item mob-hizmet-all" onClick={() => setIsMobileMenuOpen(false)}>
              Tüm Hizmetleri Gör <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <button className={`mob-link mob-hizmet-toggle ${mobKaynaklarOpen ? 'on' : ''}`} onClick={() => setMobKaynaklarOpen(!mobKaynaklarOpen)} style={{ animationDelay: '60ms' }}>
            <span className="mob-link-num">02</span>
            Kaynaklar
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ marginLeft: 'auto', transition: 'transform .2s', transform: mobKaynaklarOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className={`mob-hizmet-list ${mobKaynaklarOpen ? 'open' : ''}`}>
            {kaynaklar.map((k) => (
              <Link key={k.href} href={k.href} className="mob-hizmet-item" onClick={() => setIsMobileMenuOpen(false)}>
                <i className={`bi ${k.icon}`}></i>
                {k.label}
              </Link>
            ))}
            <Link href="/araclar" className="mob-hizmet-item mob-hizmet-all" onClick={() => setIsMobileMenuOpen(false)}>
              Tüm Araçları Gör <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          {navLinks.map((link, i) => {
            const baseNum = i + 3;
            if (isHome && link.hashHref) {
              return (
                <a key={link.label} href={link.hashHref} className="mob-link" onClick={() => setIsMobileMenuOpen(false)} style={{ animationDelay: `${baseNum * 60}ms` }}>
                  <span className="mob-link-num">0{baseNum}</span>
                  {link.label}
                </a>
              );
            }
            return (
              <Link key={link.label} href={link.href} className="mob-link" onClick={() => setIsMobileMenuOpen(false)} style={{ animationDelay: `${baseNum * 60}ms` }}>
                <span className="mob-link-num">0{baseNum}</span>
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="mob-nav-footer">
          {isHome ? (
            <a href="#iletisim" className="cta-main" onClick={() => setIsMobileMenuOpen(false)} style={{ width: '100%', justifyContent: 'center' }}>
              Proje Başlat
              <span className="ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </span>
            </a>
          ) : (
            <Link href="/#iletisim" className="cta-main" onClick={() => setIsMobileMenuOpen(false)} style={{ width: '100%', justifyContent: 'center' }}>
              Proje Başlat
              <span className="ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
