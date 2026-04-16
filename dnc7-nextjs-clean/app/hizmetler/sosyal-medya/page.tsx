import Preloader from '@/components/layout/Preloader';
import CustomCursor from '@/components/layout/CustomCursor';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

export default function SocialMediaPage() {
  const skills = [
    { name: 'Instagram Yönetimi', level: 95, icon: '📸' },
    { name: 'TikTok Content', level: 92, icon: '🎵' },
    { name: 'LinkedIn B2B', level: 88, icon: '💼' },
    { name: 'YouTube SEO', level: 85, icon: '🎬' },
    { name: 'Content Strategy', level: 90, icon: '📝' },
    { name: 'Copywriting', level: 87, icon: '✍️' },
    { name: 'Video Editing', level: 83, icon: '🎞️' },
    { name: 'Analytics', level: 86, icon: '📊' },
  ];

  const platforms = [
    { name: 'Instagram', category: 'Görsel İçerik', followers: '100K+' },
    { name: 'TikTok', category: 'Video İçerik', followers: '500K+' },
    { name: 'LinkedIn', category: 'B2B', followers: '50K+' },
    { name: 'YouTube', category: 'Video Platform', followers: '200K+' },
    { name: 'Twitter/X', category: 'Mikroblog', followers: '80K+' },
    { name: 'Facebook', category: 'Sosyal Ağ', followers: '150K+' },
  ];

  const services = [
    {
      icon: '📱',
      title: 'Sosyal Medya Yönetimi',
      desc: 'Markanızın tüm sosyal medya hesaplarını profesyonelce yönetiyoruz. İçerik planlama, takvim oluşturma ve yayınlama.',
      price: '₺15.000 - ₺60.000 / ay'
    },
    {
      icon: '✨',
      title: 'İçerik Prodüksiyonu',
      desc: 'Fotoğraf, video, story ve reels içerikleri üretiyoruz. Profesyonel ekip ve ekipmanlarla.',
      price: '₺10.000 - ₺40.000 / ay'
    },
    {
      icon: '📊',
      title: 'Topluluk Yönetimi',
      desc: 'Takipçilerinizle etkileşim kuruyor, soruları yanıtlıyor, topluluğunuzu büyütüyoruz.',
      price: '₺8.000 - ₺30.000 / ay'
    },
    {
      icon: '🎯',
      title: 'Reklam Yönetimi',
      desc: 'Meta Ads, TikTok Ads, LinkedIn Ads ile hedef kitlenize ulaşın. ROI odaklı reklam kampanyaları.',
      price: '₺20.000 - ₺100.000 / ay'
    },
    {
      icon: '📈',
      title: 'Influencer Marketing',
      desc: 'Markanız için uygun influencerları buluyor, işbirliği yapıyoruz.',
      price: '₺25.000 - ₺150.000 / kampanya'
    },
    {
      icon: '🔍',
      title: 'Sosyal Medya Analizi',
      desc: 'Performans raporları, etkileşim analizi ve optimizasyon önerileri.',
      price: '₺5.000 - ₺20.000 / ay'
    },
  ];

  const process = [
    { step: '01', title: 'Analiz', desc: 'Mevcut durumunuzu analiz ediyor, hedefleri belirliyoruz.' },
    { step: '02', title: 'Strateji', desc: 'İçerik stratejisi oluşturuyor, takvimi planlıyoruz.' },
    { step: '03', title: 'Üretim', desc: 'İçerikleri üretiyor, düzenliyor ve yayınlıyoruz.' },
    { step: '04', title: 'Raporlama', desc: 'Aylık performans raporları sunuyoruz.' },
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
          backgroundImage: 'radial-gradient(circle at 20% 50%, #F59E0B 0%, transparent 50%), radial-gradient(circle at 80% 80%, #FBBF24 0%, transparent 50%)'
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
              color: '#F59E0B',
              marginBottom: '20px'
            }}>
              <span style={{ width: '18px', height: '2px', backgroundColor: '#F59E0B', borderRadius: '2px' }}></span>
              Hizmet Detayı
            </div>

            <div style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              marginBottom: '24px'
            }}>
              Sosyal Medya <span style={{ color: '#F59E0B' }}>Yönetimi</span>
            </div>

            <p style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              marginBottom: '32px'
            }}>
              Instagram, TikTok, LinkedIn ve YouTube için içerik stratejisi ve topluluk yönetimi.
              Markanızı sosyal medyada büyütüyoruz.
            </p>

            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#iletisim" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                backgroundColor: '#F59E0B',
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
          <h2 className="sec-title">Sosyal Medya <em>Yetenekler</em></h2>

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
                  <div style={{ width: `${skill.level}%`, height: '100%', background: '#F59E0B', borderRadius: '3px' }}></div>
                </div>
                <div style={{ fontSize: '13px', color: '#888', fontWeight: 600 }}>{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-tag">Platformlar</div>
          <h2 className="sec-title">Uzman Olduğumuz <em>Platformlar</em></h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '18px',
            marginTop: '48px'
          }}>
            {platforms.map((platform, idx) => (
              <div key={idx} style={{
                background: '#F7F7F5',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{ width: '50px', height: '50px', background: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                  {platform.name === 'Instagram' && '📸'}
                  {platform.name === 'TikTok' && '🎵'}
                  {platform.name === 'LinkedIn' && '💼'}
                  {platform.name === 'YouTube' && '🎬'}
                  {platform.name === 'Twitter/X' && '💬'}
                  {platform.name === 'Facebook' && '👥'}
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#0D0D0D', marginBottom: '2px' }}>{platform.name}</div>
                  <div style={{ fontSize: '12px', color: '#888' }}>{platform.category} • {platform.followers} takipçi</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ backgroundColor: '#F7F7F5' }}>
        <div className="wrap">
          <div className="sec-tag">Hizmet Paketleri</div>
          <h2 className="sec-title">Sosyal Medya <em>Hizmetleri</em></h2>

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
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#F59E0B', padding: '8px 16px', background: 'rgba(245,158,11,0.08)', borderRadius: '8px', display: 'inline-block' }}>{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-tag">Çalışma Süreci</div>
          <h2 className="sec-title">4 Adımda <em>Sosyal Medya Yönetimi</em></h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginTop: '48px'
          }}>
            {process.map((item, idx) => (
              <div key={idx} style={{ position: 'relative', textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', fontWeight: 900, color: 'rgba(245,158,11,0.15)', lineHeight: 1, marginBottom: '8px' }}>{item.step}</div>
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
        background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div className="wrap">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '16px' }}>
            Sosyal Medya Projenizi Başlatalım
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 32px', opacity: 0.9 }}>
            Markanızı sosyal medyada büyütmek için sabırsızlanıyoruz.
          </p>
          <a href="#iletisim" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '9px',
            backgroundColor: '#fff',
            color: '#F59E0B',
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
