import Preloader from '@/components/layout/Preloader';
import CustomCursor from '@/components/layout/CustomCursor';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

export default function WebPage() {
  const skills = [
    { name: 'React / Next.js', level: 95, icon: '⚛️' },
    { name: 'TypeScript', level: 92, icon: '📘' },
    { name: 'UI/UX Tasarım', level: 88, icon: '🎨' },
    { name: 'Tailwind CSS', level: 93, icon: '💅' },
    { name: 'Node.js', level: 87, icon: '🟢' },
    { name: 'PostgreSQL', level: 85, icon: '🐘' },
    { name: 'REST API', level: 90, icon: '🔌' },
    { name: 'SEO', level: 82, icon: '🔍' },
  ];

  const technologies = [
    { name: 'React 19', category: 'Frontend' },
    { name: 'Next.js 15', category: 'Framework' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Framer Motion', category: 'Animation' },
    { name: 'Vercel', category: 'Hosting' },
  ];

  const services = [
    {
      icon: '💼',
      title: 'Kurumsal Web Sitesi',
      desc: 'Markanızı en iyi temsil eden, dönüşüm odaklı kurumsal web sitesi.',
      price: '₺40.000 - ₺200.000'
    },
    {
      icon: '🛒',
      title: 'E-Ticaret Platformu',
      desc: 'Satış odaklı, kullanıcı dostu e-ticaret sitesi. Ödeme entegrasyonu dahil.',
      price: '₺75.000 - ₺400.000'
    },
    {
      icon: '🎯',
      title: 'Landing Page',
      desc: 'Tek sayfa üzerinden yüksek dönüşüm sağlayan landing page tasarımları.',
      price: '₺15.000 - ₺60.000'
    },
    {
      icon: '📱',
      title: 'Responsive Tasarım',
      desc: 'Tüm cihazlarda mükemmel görünen mobil uyumlu web siteleri.',
      price: '₺30.000 - ₺150.000'
    },
    {
      icon: '🔧',
      title: 'Web Uygulaması',
      desc: 'Karmaşık iş süreçlerinizi dijitalleştiren özel web uygulamaları.',
      price: '₺100.000 - ₺500.000'
    },
    {
      icon: '🚀',
      title: 'SEO Optimizasyonu',
      desc: 'Arama motorlarında üst sıralarda yer almanızı sağlayan SEO çalışması.',
      price: '₺20.000 - ₺100.000'
    },
  ];

  const process = [
    { step: '01', title: 'Analiz', desc: 'İhtiyaçlarınızı analiz ediyor, hedef kitleyi belirliyoruz.' },
    { step: '02', title: 'Tasarım', desc: 'UI/UX tasarımı ile kullanıcı deneyimini planlıyoruz.' },
    { step: '03', title: 'Geliştirme', desc: 'Modern teknolojiler ile web sitenizi kodluyoruz.' },
    { step: '04', title: 'Yayın', desc: 'Test ve optimizasyon sonrası sitenizi yayına alıyoruz.' },
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
          backgroundImage: 'radial-gradient(circle at 20% 50%, #10B981 0%, transparent 50%), radial-gradient(circle at 80% 80%, #059669 0%, transparent 50%)'
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
              color: '#10B981',
              marginBottom: '20px'
            }}>
              <span style={{ width: '18px', height: '2px', backgroundColor: '#10B981', borderRadius: '2px' }}></span>
              Hizmet Detayı
            </div>

            <div style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              marginBottom: '24px'
            }}>
              Web Tasarım <span style={{ color: '#10B981' }}>& Geliştirme</span>
            </div>

            <p style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              marginBottom: '32px'
            }}>
              Dönüşüm odaklı, yüksek performanslı kurumsal siteler ve e-ticaret platformları.
              UI/UX tasarımdan geliştirmeye, SEO'dan hıza tam paket.
            </p>

            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#iletisim" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                backgroundColor: '#10B981',
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
          <h2 className="sec-title">Web <em>Yetenekler</em></h2>

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
                  <div style={{ width: `${skill.level}%`, height: '100%', background: '#10B981', borderRadius: '3px' }}></div>
                </div>
                <div style={{ fontSize: '13px', color: '#888', fontWeight: 600 }}>{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-tag">Teknolojiler</div>
          <h2 className="sec-title">Kullandığımız <em>Teknoloji</em></h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '18px',
            marginTop: '48px'
          }}>
            {technologies.map((tech, idx) => (
              <div key={idx} style={{
                background: '#F7F7F5',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{ width: '50px', height: '50px', background: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>⚛️</div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#0D0D0D', marginBottom: '2px' }}>{tech.name}</div>
                  <div style={{ fontSize: '12px', color: '#888' }}>{tech.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="wrap">
          <div className="sec-tag">Hizmet Paketleri</div>
          <h2 className="sec-title">Web <em>Hizmetleri</em></h2>

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
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#10B981', padding: '8px 16px', background: 'rgba(16,185,129,0.08)', borderRadius: '8px', display: 'inline-block' }}>{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-tag">Çalışma Süreci</div>
          <h2 className="sec-title">4 Adımda <em>Web Geliştirme</em></h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginTop: '48px'
          }}>
            {process.map((item, idx) => (
              <div key={idx} style={{ position: 'relative', textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', fontWeight: 900, color: 'rgba(16,185,129,0.15)', lineHeight: 1, marginBottom: '8px' }}>{item.step}</div>
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
        background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div className="wrap">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '16px' }}>
            Web Projenizi Başlatalım
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 32px', opacity: 0.9 }}>
            İşinizi dijitale taşımak için sabırsızlanıyoruz.
          </p>
          <a href="#iletisim" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '9px',
            backgroundColor: '#fff',
            color: '#10B981',
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
