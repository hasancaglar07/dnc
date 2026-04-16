import Reveal from '@/components/ui/Reveal';

export default function Contact() {
  return (
    <section id="iletisim" className="sec contact-sec">
      <div className="wrap">
        <Reveal>
          <div className="sec-tag">İletişim</div>
          <h2 className="sec-title">Projenizi <em>Başlatalım</em></h2>
          <p className="sec-sub">Size özel çözümler için bizimle iletişime geçin</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="contact-box">
          <div className="contact-in">
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>Bize Ulaşın</h3>
              <div className="ci-row">
                <div className="ci-ico"><i className="bi bi-envelope"></i></div>
                <div className="ci-val">info@dnc7.com</div>
              </div>
              <div className="ci-row">
                <div className="ci-ico"><i className="bi bi-telephone"></i></div>
                <div className="ci-val">+90 (212) 555 0123</div>
              </div>
              <div className="ci-row">
                <div className="ci-ico"><i className="bi bi-geo-alt"></i></div>
                <div className="ci-val">Levent, İstanbul - Türkiye</div>
              </div>
              <div style={{ marginTop: '28px' }}>
                <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '12px' }}>Bizi Takip Edin</p>
                <div className="f-socs">
                  <a href="#" className="fsoc"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="fsoc"><i className="bi bi-linkedin"></i></a>
                  <a href="#" className="fsoc"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="fsoc"><i className="bi bi-youtube"></i></a>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>Mesaj Gönderin</h3>
              <form>
                <div className="f-row">
                  <input type="text" className="fin" placeholder="Adınız" />
                  <input type="text" className="fin" placeholder="Soyadınız" />
                </div>
                <input type="email" className="fin" placeholder="E-posta Adresiniz" />
                <input type="text" className="fin" placeholder="Konu" />
                <textarea className="fin fta" placeholder="Projenizden bahsedin..."></textarea>
                <button type="submit" className="btn-send">
                  Gönder <span className="arr"><i className="bi bi-arrow-up-right"></i></span>
                </button>
              </form>
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
