import Preloader from '@/components/layout/Preloader';
import CustomCursor from '@/components/layout/CustomCursor';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

export default function GamePage() {
  const skills = [
    { name: 'Unity 3D', level: 93, icon: '🎮' },
    { name: 'C# Programming', level: 90, icon: '💻' },
    { name: 'Game Design', level: 88, icon: '🎨' },
    { name: '2D/3D Art', level: 82, icon: '🖼️' },
    { name: 'Level Design', level: 85, icon: '🗺️' },
    { name: 'Monetization', level: 87, icon: '💰' },
    { name: 'ASO', level: 84, icon: '📊' },
    { name: 'Multiplayer', level: 80, icon: '👥' },
  ];

  const services = [
    {
      icon: '🧩',
      title: 'Casual Oyunlar',
      desc: 'Her yaştan oyuncu için kolay öğrenilebilir, bağımlılık yapıcı casual oyunlar.',
      price: '₺80.000 - ₺400.000'
    },
    {
      icon: '⚡',
      title: 'Hyper-Casual',
      desc: 'Kısa oyun döngüleri, viral potansiyelli hyper-casual oyunlar.',
      price: '₺50.000 - ₺250.000'
    },
    {
      icon: '🎯',
      title: 'Puzzle & Strategy',
      desc: 'Beyin jimnastiği sevenler için bulmaca ve strateji oyunları.',
      price: '₺100.000 - ₺500.000'
    },
    {
      icon: '🏃',
      title: 'Endless Runner',
      desc: 'Sonsuz koşu oyunları. Karakter tasarımı ve mekanikler dahil.',
      price: '₺70.000 - ₺350.000'
    },
    {
      icon: '🎲',
      title: 'Simulation',
      desc: 'Gerçek simülasyon oyunları. İşletme, şehir, tarım vb.',
      price: '₺120.000 - ₺600.000'
    },
    {
      icon: '🌍',
      title: 'Multiplayer',
      desc: 'Online çok oyunculu oyunlar. Real-time multiplayer desteği.',
      price: '₺150.000 - ₺750.000'
    },
  ];

  const process = [
    { step: '01', title: 'Konsept', desc: 'Oyun fikrinizi geliştiriyor, mekaniği planlıyoruz.' },
    { step: '02', title: 'Prototip', desc: 'Oynanabilir prototip oluşturuyor, test ediyoruz.' },
    { step: '03', title: 'Geliştirme', desc: 'Unity 3D ile oyununuzu kodluyor ve tasarlıyoruz.' },
    { step: '04', title: 'Yayın', desc: 'App Store, Play Store\'da yayınlıyoruz.' },
  ];

  const features = [
    { title: 'Cross-Platform', desc: 'Tek kod tabanı ile iOS ve Android', icon: '🔄' },
    { title: 'In-App Purchases', desc: 'Gelir modeli entegrasyonu', icon: '💳' },
    { title: 'Ads Integration', desc: 'Reklam geliri optimizasyonu', icon: '📺' },
    { title: 'Analytics', desc: 'Oyuncu davranışı analitiği', icon: '📊' },
    { title: 'Push Notifications', desc: 'Oyuncu etkileşimi bildirimleri', icon: '🔔' },
    { title: 'Cloud Save', desc: 'Bulut tabanlı kayıt sistemi', icon: '☁️' },
  ];

  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navigation />

      <section className="service-hero" style={{
        height: '100vh',
        minHeight: '700px',
        background: 'linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: 'radial-gradient(circle at 20% 50%, #EC4899 0%, transparent 50%), radial-gradient(circle at 80% 80%, #F472B6 0%, transparent 50%)'
        }}></div>

        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px', color: '#fff' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: '#EC4899',
              marginBottom: '20px'
            }}>
              <span style={{ width: '18px', height: '2px', backgroundColor: '#EC4899', borderRadius: '2px' }}></span>
              Hizmet Detayı
            </div>

            <div style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              marginBottom: '24px'
            }}>
              Mobil Oyun <span style={{ color: '#EC4899' }}>Yapımı</span>
            </div>

            <p style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              marginBottom: '32px'
            }}>
              Unity 3D ile casual, hyper-casual ve strateji oyunları. Monetizasyon ve ASO
              ile gelir elde eden başarılı mobil oyunlar geliştiriyoruz.
            </p>

            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#iletisim" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                backgroundColor: '#EC4899',
                color: '#fff',
                fontWeight: 700,
                fontSize: '14px',
                padding: '14px 28px',
                borderRadius: '9999px',
                textDecoration: 'none'
              }}>
                Proje Başlat <span style={{ fontSize: '16px' }}>→</span>
              </a>
              <a href="#hizmetler" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: '1.5px solid rgba(255,255,255,0.3)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '14px',
                padding: '14px 24px',
                borderRadius: '9999px',
                textDecoration: 'none'
              }}>
                Tüm Hizmetler
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="wrap">
          <div className="sec-tag">Uzmanlık Alanlarımız</div>
          <h2 className="sec-title">Oyun <em>Yetenekler</em></h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginTop: '48px'
          }}>
            {skills.map((skill, idx) => (
              <div key={idx} style={{
                background: '#fff',
                border: '1px solid #E5E5E5',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '12px' }}>{skill.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#0D0D0D', marginBottom: '12px' }}>{skill.name}</div>
                <div style={{ width: '100%', height: '6px', background: '#F0EDE8', borderRadius: '3px', overflow: 'hidden', marginBottom: '8px' }}>
                  <div style={{ width: `${skill.level}%`, height: '100%', background: '#EC4899', borderRadius: '3px' }}></div>
                </div>
                <div style={{ fontSize: '13px', color: '#888', fontWeight: 600 }}>{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-tag">Oyun Özellikleri</div>
          <h2 className="sec-title">Geliştirdiğimiz <em>Özellikler</em></h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '18px',
            marginTop: '48px'
          }}>
            {features.map((feature, idx) => (
              <div key={idx} style={{
                background: '#F7F7F5',
                borderRadius: '12px',
                padding: '24px'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0D0D0D', marginBottom: '6px' }}>{feature.title}</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#888' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="wrap">
          <div className="sec-tag">Hizmet Paketleri</div>
          <h2 className="sec-title">Oyun <em>Hizmetleri</em></h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginTop: '48px'
          }}>
            {services.map((service, idx) => (
              <div key={idx} style={{
                background: '#fff',
                border: '1px solid #E5E5E5',
                borderRadius: '20px',
                padding: '32px'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0D0D0D', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#888', marginBottom: '16px' }}>{service.desc}</p>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#EC4899', padding: '8px 16px', background: 'rgba(236,72,153,0.08)', borderRadius: '8px', display: 'inline-block' }}>{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-tag">Çalışma Süreci</div>
          <h2 className="sec-title">4 Adımda <em>Oyun Geliştirme</em></h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginTop: '48px'
          }}>
            {process.map((item, idx) => (
              <div key={idx} style={{ position: 'relative', textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', fontWeight: 900, color: 'rgba(236,72,153,0.15)', lineHeight: 1, marginBottom: '8px' }}>{item.step}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0D0D0D', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#888' }}>{item.desc}</p>
                {idx < process.length - 1 && (
                  <div style={{ position: 'absolute', top: '50%', right: '-12px', width: '24px', height: '2px', background: '#E5E5E5' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{
        background: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div className="wrap">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '16px' }}>
            Oyun Projenizi Başlatalım
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 32px', opacity: 0.9 }}>
            Mobil oyununuzu milyonlarca oyuncuya ulaştırmak için sabırsızlanıyoruz.
          </p>
          <a href="#iletisim" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '9px',
            backgroundColor: '#fff',
            color: '#EC4899',
            fontWeight: 700,
            fontSize: '15px',
            padding: '16px 32px',
            borderRadius: '9999px',
            textDecoration: 'none'
          }}>
            Teklif Alın <span style={{ fontSize: '16px' }}>→</span>
          </a>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
