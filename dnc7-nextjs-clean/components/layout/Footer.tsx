import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-g">
          <div>
            <Link href="/" className="f-logo">DNC<span>7</span></Link>
            <p className="f-desc">
              Prodüksiyon, AI entegrasyonu ve dijital çözümler konusunda 12 yıllık deneyimle markanızı büyütüyoruz.
            </p>
            <div className="f-socs">
              <a href="https://instagram.com/dnc7" target="_blank" rel="noopener noreferrer" className="fsoc"><i className="bi bi-instagram"></i></a>
              <a href="https://linkedin.com/company/dnc7" target="_blank" rel="noopener noreferrer" className="fsoc"><i className="bi bi-linkedin"></i></a>
              <a href="https://twitter.com/dnc7" target="_blank" rel="noopener noreferrer" className="fsoc"><i className="bi bi-twitter-x"></i></a>
              <a href="https://youtube.com/@dnc7" target="_blank" rel="noopener noreferrer" className="fsoc"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          <div className="fc">
            <div className="fc-title">Hizmetler</div>
            <Link href="/hizmetler">Tüm Hizmetler</Link>
            <Link href="/hizmetler/ai-entegrasyonu">AI Entegrasyon</Link>
            <Link href="/hizmetler/web-tasarim">Web Tasarım</Link>
            <Link href="/hizmetler/e-ticaret-danismanligi">E-Ticaret</Link>
            <Link href="/hizmetler/reklam-yonetimi">Reklam Yönetimi</Link>
          </div>

          <div className="fc">
            <div className="fc-title">Şirket</div>
            <Link href="/projeler">Projeler</Link>
            <Link href="/hizmetler">Hizmetler</Link>
            <Link href="/#ekip">Ekip</Link>
            <Link href="/#referanslar">Referanslar</Link>
            <Link href="/#iletisim">İletişim</Link>
          </div>

          <div>
            <div className="fc-title">Bülten</div>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.28)', marginBottom: '12px' }}>
              Yeni projeler ve haberlerden haberdar olun
            </p>
            <input type="email" className="nl-in" placeholder="E-posta adresiniz" />
            <button className="nl-btn">Abone Ol</button>
          </div>
        </div>

        <div className="f-bot">
          <div className="f-copy">© {new Date().getFullYear()} DNC7. Tüm hakları saklıdır.</div>
          <div className="f-leg">
            <Link href="/gizlilik">Gizlilik Politikası</Link>
            <Link href="/kullanim-sartlari">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
