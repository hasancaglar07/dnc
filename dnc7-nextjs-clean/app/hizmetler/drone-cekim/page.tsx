'use client';

import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import ServiceCROSections from '@/components/sections/ServiceCROSections';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

export default function DroneCekimPage() {
  const accent = '#0EA5E9';

  const features = [
    { icon: 'bi-camera-video', title: '4K Hava Çekimi', desc: 'Sinematik kalitede 4K drone görüntüleri ile projenizi havadan belgeleyin.' },
    { icon: 'bi-thermometer-half', title: 'Thermal Kamera', desc: 'Enerji kaybı tespiti, yangın önleme ve endüstriyel inceleme için thermal çekim.' },
    { icon: 'bi-image', title: 'Panoramik Görüntü', desc: '360 derece panoramik hava fotoğrafları ve sanal tur içerikleri.' },
    { icon: 'bi-shield-check', title: 'Lisanslı Operatör', desc: 'SHGM lisanslı drone pilotları ile güvenli ve yasal uçuş operasyonları.' },
    { icon: 'bi-building', title: 'İnşaat Takibi', desc: 'Şantiye ilerleme takibi, harita çıkarma ve ortofoto üretimi.' },
    { icon: 'bi-calendar-event', title: 'Etkinlik Çekimi', desc: 'Festival, konser ve kurumsal etkinliklerinizi havadan kayıt altına alın.' },
  ];

  const stats = [
    { num: '300+', label: 'Tamamlanan Uçuş' },
    { num: '8K', label: 'Max Video Çözünürlük' },
    { num: 'SHGM', label: 'Lisanslı Operatörler' },
    { num: '30+', label: 'Şehirde Hizmet' },
  ];

  const useCases = [
    { icon: 'bi-buildings', title: 'Gayrimenkul', desc: 'Villa, site ve ticari alanları havadan en güzel açıdan belgeleyin.' },
    { icon: 'bi-hammer', title: 'İnşaat & Mühendislik', desc: 'Şantiye takibi, ilerleme raporu ve 3D harita çıkarma.' },
    { icon: 'bi-film', title: 'Sinema & Reklam', desc: 'Reklam filmleri ve sinematik prodüksiyonlar için hava sekansları.' },
    { icon: 'bi-tree', title: 'Tarım & Çevre', desc: 'Tarla analizi, sulama optimizasyonu ve çevre izleme.' },
  ];

  const process = [
    { step: '01', icon: 'bi-map', title: 'Saha Keşfi', desc: 'Çekim lokasyonunu analiz eder, izin gerekliliklerini ve uçuş planını belirleriz.' },
    { step: '02', icon: 'bi-file-earmark-check', title: 'İzin & Planlama', desc: 'Gerekli SHGM izinleri ve hava saahası koordinasyonunu tamamlarız.' },
    { step: '03', icon: 'bi-camera-video', title: 'Çekim', desc: 'Deneyimli pilotlarımızla planlanan senaryoya göre güvenli çekim.' },
    { step: '04', icon: 'bi-film', title: 'Post-Prodüksiyon', desc: 'Kurgu, renk grading ve teslimat — genellikle 48 saat içinde.' },
  ];

  return (
    <>
      <CustomCursor />
      <Navigation />

      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08, background: `radial-gradient(circle at 30% 50%, ${accent} 0%, transparent 60%)` }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/hizmetler" className="back-link">
            <i className="bi bi-arrow-left"></i> Tüm Hizmetler
          </Link>
          <div className="sec-tag" style={{ color: accent }}>Drone Çekim</div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -3, marginBottom: 20 }}>
            Profesyonel<br /><span style={{ color: accent }}>Hava Çekimleri</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 600, marginBottom: 32 }}>
            SHGM lisanslı drone operatörlerimizle 4K sinematik hava çekimleri.
            Thermal kamera desteği ile endüstriyel çözümler.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.45)', marginBottom: 16 }}>
            <i className="bi bi-tag" style={{ marginRight: 6 }}></i>Başlangıç fiyatı: <strong style={{ color: accent }}>₺8.000</strong>&apos;den
          </p>
          <Link href="/iletisim" className="cta-main" style={{ background: accent }}>
            Teklif Alın <span className="ico"><i className="bi bi-arrow-right"></i></span>
          </Link>
        </div>
        <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,.08)', marginTop: 64 }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {stats.map((s, i) => (
                <div key={i} style={{ padding: '28px 20px', borderRight: i < 3 ? '1px solid rgba(255,255,255,.08)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 900, color: accent, lineHeight: 1, marginBottom: 6 }}>{s.num}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag">Hizmetler</div>
            <h2 className="sec-title">Drone <em>Çözümlerimiz</em></h2>
            <p className="sec-sub">Her sektöre özel hava görüntüleme çözümleri sunuyoruz.</p>
          </Reveal>
          <Reveal stagger>
            <div className="feature-grid">
              {features.map((f, i) => (
                <div key={i} style={{ padding: '28px 24px', borderRadius: 20, border: '1.5px solid var(--border)', background: '#fff' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: `${accent}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <i className={`bi ${f.icon}`} style={{ fontSize: 22, color: accent }}></i>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag">Kullanım Alanları</div>
            <h2 className="sec-title">Hangi <em>Sektörlere</em> Hizmet Veriyoruz?</h2>
          </Reveal>
          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, marginTop: 48 }}>
              {useCases.map((u, i) => (
                <div key={i} style={{ padding: '32px 28px', borderRadius: 20, border: '1.5px solid var(--border)', background: 'var(--bg2)' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${accent}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <i className={`bi ${u.icon}`} style={{ fontSize: 24, color: accent }}></i>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>{u.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted)' }}>{u.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag" style={{ justifyContent: 'center' }}>Süreç</div>
            <h2 className="sec-title" style={{ textAlign: 'center' }}>Nasıl <em>Çalışıyoruz?</em></h2>
          </Reveal>
          <Reveal stagger>
            <div className="hiz-process-grid" style={{ marginTop: 48 }}>
              {process.map((item, i) => (
                <div key={i} style={{ padding: '32px 24px', borderRadius: 20, border: '1.5px solid var(--border)', background: '#fff' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 900, color: `${accent}15`, lineHeight: 1, marginBottom: 12 }}>{item.step}</div>
                  <i className={`bi ${item.icon}`} style={{ fontSize: 26, color: accent, marginBottom: 12, display: 'block' }}></i>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceCROSections slug="drone-cekim" accent={accent} />

      <section className="sec" style={{ background: 'var(--bg3)' }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-center">
              <div className="sec-tag" style={{ justifyContent: 'center' }}>Başlayalım</div>
              <h2 className="sec-title" style={{ textAlign: 'center' }}>Projenizi <em>havadan</em> görüntüleyelim</h2>
              <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
                Drone çekim ihtiyaçlarınız için hemen iletişime geçin. 48 saat içinde teklifinizi hazırlarız.
              </p>
              <Link href="/iletisim" className="cta-main" style={{ background: accent }}>
                Ücretsiz Keşif <span className="ico"><i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
