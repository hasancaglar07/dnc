export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-g">
          <div>
            <a href="#" className="f-logo">DNC<span>7</span></a>
            <p className="f-desc">
              Prodüksiyon, AI entegrasyonu ve dijital çözümler konusunda 12 yıllık deneyimle markanızı büyütüyoruz.
            </p>
            <div className="f-socs">
              <a href="#" className="fsoc"><i className="bi bi-instagram"></i></a>
              <a href="#" className="fsoc"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="fsoc"><i className="bi bi-twitter"></i></a>
              <a href="#" className="fsoc"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          <div className="fc">
            <div className="fc-title">Hizmetler</div>
            <a href="#hizmetler">Prodüksiyon</a>
            <a href="#hizmetler">AI Entegrasyon</a>
            <a href="#hizmetler">Web Tasarım</a>
            <a href="#hizmetler">Mobil Uygulama</a>
          </div>

          <div className="fc">
            <div className="fc-title">Şirket</div>
            <a href="#ekip">Hakkımızda</a>
            <a href="#projeler">Projeler</a>
            <a href="#referanslar">Referanslar</a>
            <a href="#iletisim">İletişim</a>
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
          <div className="f-copy">© 2025 DNC7. Tüm hakları saklıdır.</div>
          <div className="f-leg">
            <a href="#">Gizlilik Politikası</a>
            <a href="#">Kullanım Şartları</a>
            <a href="#">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
