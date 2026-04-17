import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import CustomCursor from '@/components/layout/CustomCursor';
import Reveal from '@/components/ui/Reveal';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { team } from '@/data/team';

export const metadata: Metadata = {
  title: 'Hakkımızda | DNC7 Dijital Ajans',
  description: '12 yıllık deneyimle dijital dünyada iz bırakan DNC7 ekibini ve hikayemizi keşfedin.',
};

const values = [
  {
    icon: 'bi-bullseye',
    title: 'Sonuç Odaklılık',
    desc: 'Her projeyi müşterimizin büyümesine gerçek katkı sağlayacak şekilde tasarlarız. Güzel görünmek yetmez, ölçülebilir sonuç isteriz.',
    accent: '#F97316',
  },
  {
    icon: 'bi-lightbulb',
    title: 'Yenilikçilik',
    desc: 'AI, drone teknolojisi ve modern web çözümleri — her zaman en güncel araçları ve yöntemleri kullanarak sektörün önünde kalırız.',
    accent: '#6366F1',
  },
  {
    icon: 'bi-shield-check',
    title: 'Güvenilirlik',
    desc: 'Söz verilen süre ve bütçe dahilinde teslimat bizim için müzakere edilemez bir taahhüttür. Müşterilerimizin güveni her şeyin üzerindedir.',
    accent: '#10B981',
  },
  {
    icon: 'bi-people',
    title: 'İş Birliği',
    desc: 'Müşterilerimizi ortak olarak görürüz. Sürece dahil eder, her adımda şeffaf iletişim kurar, birlikte karar alırız.',
    accent: '#0EA5E9',
  },
];

const milestones = [
  { year: '2013', title: 'Kuruluş', desc: 'İstanbul\'da 3 kişilik bir ekiple video prodüksiyon ajansı olarak yolculuğumuza başladık.' },
  { year: '2016', title: 'Dijital Genişleme', desc: 'Web tasarım ve sosyal medya hizmetlerini portföyümüze ekleyerek tam hizmet ajansına dönüştük.' },
  { year: '2019', title: 'Drone & Mobil', desc: 'Lisanslı drone çekim birimi ve mobil uygulama geliştirme departmanını kurduk.' },
  { year: '2022', title: 'AI Dönüşümü', desc: 'GPT-4 entegrasyonu ve özel AI çözümleri sunmaya başlayarak teknoloji ajansı kimliği kazandık.' },
  { year: '2024', title: 'Bugün', desc: '18 kişilik uzman ekip, 250+ tamamlanan proje, 85+ mutlu müşteri ve büyümeye devam.' },
];

const awards = [
  { title: 'Awwwards Site of the Day', year: '2023', icon: 'bi-trophy' },
  { title: 'Google Premier Partner', year: '2022', icon: 'bi-google' },
  { title: 'Meta Business Partner', year: '2021', icon: 'bi-meta' },
  { title: 'En İyi Dijital Ajans', year: '2023', icon: 'bi-star' },
];

export default function HakkimizdaPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.07, backgroundImage: 'radial-gradient(circle at 15% 50%, #F97316 0%, transparent 45%), radial-gradient(circle at 85% 20%, #6366F1 0%, transparent 45%), radial-gradient(circle at 50% 90%, #10B981 0%, transparent 45%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div className="sec-tag" style={{ color: 'var(--accent)' }}>Hakkımızda</div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)', fontWeight: 900, lineHeight: 1.03, letterSpacing: -3, marginBottom: 24 }}>
              Dijitalde<br /><span style={{ color: 'var(--accent)' }}>İz Bırakıyoruz</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,.6)', maxWidth: 640, marginBottom: 40 }}>
              2013'ten bu yana prodüksiyon, yapay zeka ve dijital pazarlama alanlarında 
              markaların büyümesine katkı sağlayan tam hizmet dijital ajansıyız.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/#iletisim" className="cta-main">
                Proje Başlat
                <span className="ico">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </span>
              </Link>
              <Link href="/projeler" className="cta-sec" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.2)' }}>
                Projelerimiz
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Stats Strip */}
        <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,.08)', marginTop: 80 }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
              {[
                { num: '250+', label: 'Tamamlanan Proje' },
                { num: '85+', label: 'Mutlu Müşteri' },
                { num: '12', label: 'Yıl Deneyim' },
                { num: '18', label: 'Ödül & Sertifika' },
              ].map((s, i) => (
                <div key={i} style={{ padding: '32px 24px', borderRight: i < 3 ? '1px solid rgba(255,255,255,.08)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--accent)', lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <Reveal>
              <div>
                <div className="sec-tag">Hikayemiz</div>
                <h2 className="sec-title">Küçük Bir Stüdyodan<br /><em>Büyük Bir Vizyona</em></h2>
                <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--text2)', marginBottom: 20 }}>
                  2013 yılında İstanbul'da üç tutku dolu insanın bir araya gelmesiyle başladı her şey.
                  İlk yıllarda yalnızca video prodüksiyon yapıyorduk; ama müşterilerimizin dijital dünyada
                  daha fazlasına ihtiyaç duyduğunu gördük.
                </p>
                <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--text2)', marginBottom: 20 }}>
                  Web tasarım, sosyal medya, mobil uygulama ve sonunda yapay zeka entegrasyonu —
                  her adımda müşterilerimizin yanında olduk ve onlarla birlikte büyüdük.
                </p>
                <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--text2)' }}>
                  Bugün 18 kişilik uzman bir ekiple, Türkiye'nin en kapsamlı dijital ajanslarından biri
                  olarak faaliyet gösteriyoruz. Ama küçük ekip enerjimizi hiç kaybetmedik.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div style={{ position: 'relative' }}>
                <div style={{ borderRadius: 24, overflow: 'hidden', background: 'var(--bg2)', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid var(--border)' }}>
                  <div style={{ textAlign: 'center', padding: 40 }}>
                    <div style={{ fontSize: '5rem', marginBottom: 16 }}>🎬</div>
                    <div style={{ fontSize: 16, color: 'var(--muted)', fontWeight: 600 }}>DNC7 Stüdyo, İstanbul</div>
                  </div>
                </div>
                {/* Floating badge */}
                <div style={{ position: 'absolute', bottom: -20, left: -20, background: 'var(--accent)', color: '#fff', borderRadius: 20, padding: '16px 24px', boxShadow: '0 20px 40px rgba(249,115,22,.3)' }}>
                  <div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1 }}>12+</div>
                  <div style={{ fontSize: 12, fontWeight: 700, marginTop: 4, opacity: 0.85 }}>Yıl Deneyim</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag" style={{ justifyContent: 'center' }}>Değerlerimiz</div>
            <h2 className="sec-title" style={{ textAlign: 'center' }}>Bizi <em>Biz Yapan</em> İlkeler</h2>
            <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 64px' }}>
              Her projenin arkasında yatan düşünce biçimi ve çalışma felsefemiz.
            </p>
          </Reveal>
          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
              {values.map((v, i) => (
                <div key={i} style={{ padding: '40px 32px', borderRadius: 24, background: '#fff', border: '1.5px solid var(--border)', transition: 'transform .3s, box-shadow .3s' }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: `${v.accent}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <i className={`bi ${v.icon}`} style={{ fontSize: 26, color: v.accent }}></i>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text)', marginBottom: 12 }}>{v.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--muted)' }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag">Yolculuğumuz</div>
            <h2 className="sec-title">12 Yılın <em>Dönüm Noktaları</em></h2>
          </Reveal>
          <div style={{ marginTop: 56, position: 'relative' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: 20, top: 0, bottom: 0, width: 2, background: 'var(--border)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {milestones.map((m, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div style={{ display: 'flex', gap: 32, paddingBottom: 48, position: 'relative' }}>
                    {/* Dot */}
                    <div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: i === milestones.length - 1 ? 'var(--accent)' : '#fff', border: `3px solid ${i === milestones.length - 1 ? 'var(--accent)' : 'var(--border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                      {i === milestones.length - 1 && (
                        <i className="bi bi-check-lg" style={{ color: '#fff', fontSize: 18 }}></i>
                      )}
                    </div>
                    {/* Content */}
                    <div style={{ paddingTop: 8 }}>
                      <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 2, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 6 }}>{m.year}</div>
                      <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>{m.title}</h3>
                      <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--muted)', maxWidth: 560 }}>{m.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag">Ekibimiz</div>
            <h2 className="sec-title">Arkamızdaki <em>Güçlü Ekip</em></h2>
            <p className="sec-sub">Farklı disiplinlerden bir araya gelen, birbirini tamamlayan uzmanlar.</p>
          </Reveal>
          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, marginTop: 56 }}>
              {team.map((member) => (
                <div key={member.id} style={{ borderRadius: 24, overflow: 'hidden', background: '#fff', border: '1.5px solid var(--border)' }}>
                  <div style={{ aspectRatio: '1/1', overflow: 'hidden', background: 'var(--bg3)', position: 'relative' }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--text)', marginBottom: 4 }}>{member.name}</div>
                    <div style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 700, letterSpacing: 0.5, marginBottom: 14 }}>{member.role}</div>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)' }}>
                        <i className="bi bi-linkedin" style={{ fontSize: 15 }}></i>
                      </a>
                      <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)' }}>
                        <i className="bi bi-twitter-x" style={{ fontSize: 15 }}></i>
                      </a>
                      <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)' }}>
                        <i className="bi bi-instagram" style={{ fontSize: 15 }}></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Awards */}
      <section className="sec" style={{ background: 'var(--dark)', color: '#fff' }}>
        <div className="wrap">
          <Reveal>
            <div className="sec-tag" style={{ justifyContent: 'center', color: 'var(--accent)' }}>Ödüller</div>
            <h2 className="sec-title" style={{ textAlign: 'center', color: '#fff' }}>Sektörün <em style={{ color: 'var(--accent)' }}>Tanıdığı</em> Ajans</h2>
          </Reveal>
          <Reveal stagger>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginTop: 56 }}>
              {awards.map((a, i) => (
                <div key={i} style={{ padding: '32px 24px', borderRadius: 20, border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.04)', textAlign: 'center' }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(249,115,22,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <i className={`bi ${a.icon}`} style={{ fontSize: 26, color: 'var(--accent)' }}></i>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 6 }}>{a.title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', fontWeight: 600 }}>{a.year}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="sec" style={{ background: 'var(--bg3)' }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-center">
              <div className="sec-tag" style={{ justifyContent: 'center' }}>Birlikte Çalışalım</div>
              <h2 className="sec-title" style={{ textAlign: 'center' }}>Sizin de <em>başarı</em> hikayenizi<br />birlikte yazalım</h2>
              <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
                Projenizi hayata geçirmek için ihtiyacınız olan her şey bizde.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/#iletisim" className="cta-main">
                  Proje Başlat
                  <span className="ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </Link>
                <Link href="/hizmetler" className="cta-sec">Hizmetlerimiz</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
