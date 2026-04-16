import Preloader from '@/components/layout/Preloader';
import CustomCursor from '@/components/layout/CustomCursor';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

export default function DronePage() {
  const skills = [
    { name: '4K/8K Çekim', level: 95, icon: '🚁' },
    { name: 'Cinematography', level: 90, icon: '🎬' },
    { name: 'Flight Planning', level: 92, icon: '📋' },
    { name: 'Hava Fotogrametri', level: 85, icon: '🗺️' },
    { name: 'Video Editing', level: 88, icon: '✂️' },
    { name: 'Color Grading', level: 82, icon: '🎨' },
    { name: 'Thermal Imaging', level: 78, icon: '🌡️' },
    { name: 'Night Flight', level: 85, icon: '🌙' },
  ];

  const equipment = [
    { name: 'DJI Mavic 3 Pro', category: 'Kamera' },
    { name: 'DJI Inspire 3', category: 'Kamera' },
    { name: 'DJI Mini 4 Pro', category: 'Kamera' },
    { name: 'Autel Dragonfish', category: 'İHA' },
    { name: 'DJI RC Pro', category: 'Kontrol' },
    { name: 'Thermal Camera', category: 'Termal' },
  ];

  const services = [
    {
      icon: '🏗️',
      title: 'İnşaat Takibi',
      desc: 'Proje ilerlemesini hava拍摄记录下来。Aylık raporlama ve time-lapse video.',
      price: '₺15.000 - ₺75.000'
    },
    {
      icon: '🏢',
      title: 'Gayrimenkul Çekimi',
      desc: 'Konut, ofis ve arazi için etkileyici hava görüntüleri.',
      price: '₺8.000 - ₺40.000'
    },
    {
      icon: '🎉',
      title: 'Etkinlik Çekimi',
      desc: 'Düğün, festival, konser gibi etkinliklerin epik hava görüntüleri.',
      price: '₺12.000 - ₺60.000'
    },
    {
      icon: '🌆',
      title: 'Şehir Panoraması',
      desc: 'Şehir veya bölgenizin en iyi açıdan tanıtım videosu.',
      price: '₺20.000 - ₺100.000'
    },
    {
      icon: '🏭',
      title: 'Endüstriyel İnceleme',
      desc: 'Gemi, boru hattı, solar panel gibi tesislerin hava incelemesi.',
      price: '₺10.000 - ₺50.000'
    },
    {
      icon: '🎬',
      title: 'Sinematik Çekim',
      desc: 'Film, dizi ve reklam için profesyonel sinematik hava görüntüleri.',
      price: '₺25.000 - ₺150.000'
    },
  ];

  const process = [
    { step: '01', title: 'Planlama', desc: 'Uçuş rotasını planlıyor, izinleri alıyoruz.' },
    { step: '02', title: 'Keşif', desc: 'Lokasyonu inceliyor, riskleri değerlendiriyoruz.' },
    { step: '03', title: 'Çekim', desc: 'Lisanslı pilotlarımızla güvenli uçuş gerçekleştiriyoruz.' },
    { step: '04', title: 'Post-Prodüksiyon', desc: 'Kurgu, renk ve ses ile teslim ediyoruz.' },
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
          backgroundImage: 'radial-gradient(circle at 20% 50%, #0EA5E9 0%, transparent 50%), radial-gradient(circle at 80% 80%, #06B6D4 0%, transparent 50%)'
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
              color: '#0EA5E9',
              marginBottom: '20px'
            }}>
              <span style={{ width: '18px', height: '2px', backgroundColor: '#0EA5E9', borderRadius: '2px' }}></span>
              Hizmet Detayı
            </div>

            <div style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              marginBottom: '24px'
            }}>
              Drone <span style={{ color: '#0EA5E9' }}>Çekimleri</span>
            </div>

            <p style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              marginBottom: '32px'
            }}>
              Lisanslı drone operatörlerimizle 4K sinematik hava çekimleri. İnşaat takibi,
              etkinlik, gayrimenkul ve tanıtım için profesyonel çözüm.
            </p>

            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#iletisim" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                backgroundColor: '#0EA5E9',
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
          <h2 className="sec-title">Profesyonel <em>Yetenekler</em></h2>

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
                  <div style={{ width: `${skill.level}%`, height: '100%', background: '#0EA5E9', borderRadius: '3px' }}></div>
                </div>
                <div style={{ fontSize: '13px', color: '#888', fontWeight: 600 }}>{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-tag">Ekipmanlarımız</div>
          <h2 className="sec-title">Sektör Lideri <em>Teknoloji</em></h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '18px',
            marginTop: '48px'
          }}>
            {equipment.map((eq, idx) => (
              <div key={idx} style={{
                background: '#F7F7F5',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{ width: '50px', height: '50px', background: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🚁</div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#0D0D0D', marginBottom: '2px' }}>{eq.name}</div>
                  <div style={{ fontSize: '12px', color: '#888' }}>{eq.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="wrap">
          <div className="sec-tag">Hizmet Paketleri</div>
          <h2 className="sec-title">Drone <em>Hizmetleri</em></h2>

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
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#0EA5E9', padding: '8px 16px', background: 'rgba(14,165,233,0.08)', borderRadius: '8px', display: 'inline-block' }}>{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-tag">Çalışma Süreci</div>
          <h2 className="sec-title">4 Adımda <em>Drone Çekimi</em></h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginTop: '48px'
          }}>
            {process.map((item, idx) => (
              <div key={idx} style={{ position: 'relative', textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', fontWeight: 900, color: 'rgba(14,165,233,0.15)', lineHeight: 1, marginBottom: '8px' }}>{item.step}</div>
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
        background: 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div className="wrap">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '16px' }}>
            Drone Projenizi Başlatalım
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 32px', opacity: 0.9 }}>
            Projenizin en iyi açıdan görüntülenmesi için sabırsızlanıyoruz.
          </p>
          <a href="#iletisim" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '9px',
            backgroundColor: '#fff',
            color: '#0EA5E9',
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
