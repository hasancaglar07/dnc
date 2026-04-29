'use client';

import Link from 'next/link';

const services = [
  { label: 'Web Tasarım', href: '/hizmetler/web-tasarim' },
  { label: 'Mobil Uygulama', href: '/hizmetler/mobil-uygulama' },
  { label: 'AI Entegrasyonu', href: '/hizmetler/ai-entegrasyonu' },
  { label: 'Prodüksiyon Filmi', href: '/hizmetler/produksiyon-filmleri' },
  { label: 'Drone Çekim', href: '/hizmetler/drone-cekim' },
  { label: 'Sosyal Medya', href: '/hizmetler/sosyal-medya' },
  { label: 'E-Ticaret', href: '/hizmetler/e-ticaret-danismanligi' },
  { label: 'Reklam Yönetimi', href: '/hizmetler/reklam-yonetimi' },
  { label: 'Mobil Oyun', href: '/hizmetler/mobil-oyun' },
];

const company = [
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Projeler', href: '/projeler' },
  { label: 'Araçlar', href: '/araclar' },
  { label: 'Fiyatlandırma', href: '/fiyatlandirma' },
  { label: 'İletişim', href: '/iletisim' },
];

const legal = [
  { label: 'Gizlilik Politikası', href: '/gizlilik' },
  { label: 'Kullanım Şartları', href: '/kullanim-sartlari' },
];

const resources = [
  { label: 'Bütçe Hesaplayıcı', href: '/araclar/butce-hesaplayici' },
  { label: 'ROI Hesaplayıcı', href: '/araclar/roi-hesaplayici' },
  { label: 'Marka Audit', href: '/araclar/marka-audit' },
  { label: 'Renk Paleti', href: '/araclar/renk-paleti' },
  { label: 'Video Brief', href: '/araclar/video-brief' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="f-top">
          <div className="f-brand">
            <Link href="/" className="f-logo">DNC<span>7</span></Link>
            <p className="f-desc">
              Prodüksiyon, AI entegrasyonu ve dijital çözümler konusunda 12 yıllık deneyimle markanızı büyütüyoruz.
            </p>
            <div className="f-socs">
              <a href="https://instagram.com/dnc7" target="_blank" rel="noopener noreferrer" className="fsoc" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="https://linkedin.com/company/dnc7" target="_blank" rel="noopener noreferrer" className="fsoc" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="https://twitter.com/dnc7" target="_blank" rel="noopener noreferrer" className="fsoc" aria-label="X"><i className="bi bi-twitter-x"></i></a>
              <a href="https://youtube.com/@dnc7" target="_blank" rel="noopener noreferrer" className="fsoc" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          <div className="f-links-area">
            <div className="f-col">
              <div className="fc-title">Hizmetler</div>
              {services.map((s) => (
                <Link key={s.href} href={s.href}>{s.label}</Link>
              ))}
            </div>
            <div className="f-col">
              <div className="fc-title">Şirket</div>
              {company.map((c) => (
                <Link key={c.href} href={c.href}>{c.label}</Link>
              ))}
              <div className="fc-title" style={{ marginTop: '20px' }}>Yasal</div>
              {legal.map((l) => (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              ))}
            </div>
            <div className="f-col">
              <div className="fc-title">Kaynaklar</div>
              {resources.map((t) => (
                <Link key={t.href} href={t.href}>{t.label}</Link>
              ))}
            </div>
            <div className="f-col">
              <div className="fc-title">Bülten</div>
              <p className="f-nl-text">Yeni projeler ve haberlerden haberdar olun</p>
              <form onSubmit={(e) => e.preventDefault()} className="f-nl-form">
                <label htmlFor="footer-email" className="sr-only">E-posta adresiniz</label>
                <input id="footer-email" type="email" className="nl-in" placeholder="E-posta adresiniz" autoComplete="email" aria-label="E-posta adresiniz" />
                <button type="submit" className="nl-btn">Abone Ol</button>
              </form>
            </div>
          </div>
        </div>

        <div className="f-divider">
          <div className="f-div-line" />
          <div className="f-div-dots">
            <span /><span /><span />
          </div>
          <div className="f-div-line" />
        </div>

        <div className="f-bottom">
          <div className="f-copy">© {new Date().getFullYear()} DNC7. Tüm hakları saklıdır.</div>
          <div className="f-tagline">Dijitalin Yeni Çağı</div>
          <div className="f-leg">
            {legal.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
