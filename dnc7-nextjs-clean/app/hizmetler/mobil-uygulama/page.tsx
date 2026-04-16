import Preloader from '@/components/layout/Preloader';
import CustomCursor from '@/components/layout/CustomCursor';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

export default function MobilePage() {
  const skills = [
    { name: 'React Native', level: 94, icon: '📱' },
    { name: 'Swift / SwiftUI', level: 90, icon: '🍎' },
    { name: 'Kotlin', level: 88, icon: '🤖' },
    { name: 'Flutter', level: 85, icon: '🦋' },
    { name: 'iOS Development', level: 92, icon: '📲' },
    { name: 'Android Development', level: 91, icon: '🤖' },
    { name: 'App Store Optimization', level: 86, icon: '📊' },
    { name: 'Push Notifications', level: 89, icon: '🔔' },
  ];

  const services = [
    {
      icon: '🛒',
      title: 'E-Ticaret Uygulaması',
      desc: 'iOS ve Android için kullanıcı dostu e-ticaret uygulaması. Ödeme entegrasyonu dahil.',
      price: '₺100.000 - ₺500.000'
    },
    {
      icon: '🏢',
      title: 'Kurumsal Uygulama',
      desc: 'İş süreçlerinizi yönetecek özel kurumsal mobil uygulama çözümleri.',
      price: '₺80.000 - ₺400.000'
    },
    {
      icon: '🎯',
      title: 'Startup MVP',
      desc: 'Fikrinizi hızlıca pazara sokacak minimum viable product.',
      price: '₺60.000 - ₺300.000'
    },
    {
      icon: '🍔',
      title: 'Yemek Teslimat',
      desc: 'Restoranlar için sipariş ve teslimat yönetim sistemi.',
      price: '₺120.000 - ₺600.000'
    },
    {
      icon: '🏥',
      title: 'Sağlık Uygulaması',
      desc: 'Randevu, takip ve telemedicine özellikli sağlık uygulamaları.',
      price: '₺150.000 - ₺750.000'
    },
    {
      icon: '📊',
      title: 'Dashboard Uygulaması',
      desc: 'Veri analizi ve raporlama için mobil dashboard çözümleri.',
      price: '₺90.000 - ₺450.000'
    },
  ];

  const process = [
    { step: '01', title: 'Keşif', desc: 'İhtiyaçlarınızı belirliyor, MVP özelliklerini planlıyoruz.' },
    { step: '02', title: 'Tasarım', desc: 'UI/UX tasarımı ile kullanıcı deneyimini oluşturuyoruz.' },
    { step: '03', title: 'Geliştirme', desc: 'Native veya cross-platform ile uygulamanızı kodluyoruz.' },
    { step: '04', title: 'Yayın', desc: 'App Store ve Play Store\'da yayınlıyoruz.' },
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
          backgroundImage: 'radial-gradient(circle at 20% 50%, #8B5CF6 0%, transparent 50%), radial-gradient(circle at 80% 80%, #A855F7 0%, transparent 50%)'
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
              color: '#8B5CF6',
              marginBottom: '20px'
            }}>
              <span style={{ width: '18px', height: '2px', backgroundColor: '#8B5CF6', borderRadius: '2px' }}></span>
              Hizmet Detayı
            </div>

            <div style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              marginBottom: '24px'
            }}>
              Mobil Uygulama <span style={{ color: '#8B5CF6' }}>Geliştirme</span>
            </div>

            <p style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              marginBottom: '32px'
            }}>
              iOS & Android için React Native ve Swift ile native ve cross-platform uygulamalar.
              Kullanıcı deneyimi odaklı, yüksek performanslı mobil çözümler.
            </p>

            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#iletisim" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                backgroundColor: '#8B5CF6',
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
          <h2 className="sec-title">Mobil <em>Yetenekler</em></h2>

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
                  <div style={{ width: `${skill.level}%`, height: '100%', background: '#8B5CF6', borderRadius: '3px' }}></div>
                </div>
                <div style={{ fontSize: '13px', color: '#888', fontWeight: 600 }}>{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="wrap">
          <div className="sec-tag">Hizmet Paketleri</div>
          <h2 className="sec-title">Mobil <em>Hizmetleri</em></h2>

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
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#8B5CF6', padding: '8px 16px', background: 'rgba(139,92,246,0.08)', borderRadius: '8px', display: 'inline-block' }}>{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-tag">Çalışma Süreci</div>
          <h2 className="sec-title">4 Adımda <em>Mobil Geliştirme</em></h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginTop: '48px'
          }}>
            {process.map((item, idx) => (
              <div key={idx} style={{ position: 'relative', textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', fontWeight: 900, color: 'rgba(139,92,246,0.15)', lineHeight: 1, marginBottom: '8px' }}>{item.step}</div>
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
        background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div className="wrap">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '16px' }}>
            Mobil Projenizi Başlatalım
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 32px', opacity: 0.9 }}>
            Mobil uygulamanızı kullanıcıların cebine taşımak için sabırsızlanıyoruz.
          </p>
          <a href="#iletisim" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '9px',
            backgroundColor: '#fff',
            color: '#8B5CF6',
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
