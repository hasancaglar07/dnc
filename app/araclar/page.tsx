import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ücretsiz Araçlar | DNC7',
  description: 'Dijital projenizi planlamak için ücretsiz araçlar: bütçe hesaplayıcı, marka audit, video brief, renk paleti ve ROI hesaplayıcı.',
};

const tools = [
  {
    href: '/araclar/butce-hesaplayici',
    icon: '💰',
    title: 'Bütçe Hesaplayıcı',
    desc: 'Web sitesi, mobil uygulama veya video projesi için tahmini bütçe aralığınızı öğrenin.',
    tag: 'Hesaplayıcı',
  },
  {
    href: '/araclar/marka-audit',
    icon: '🎯',
    title: 'Marka Kimliği Audit',
    desc: 'Markanız ne kadar güçlü? 10 soruda marka kimliğinizi değerlendirin, öneriler alın.',
    tag: 'Quiz',
  },
  {
    href: '/araclar/video-brief',
    icon: '🎬',
    title: 'Video Brief Generator',
    desc: 'Prodüksiyon ekibinize vermeniz gereken hazır brief\'i dakikalar içinde oluşturun.',
    tag: 'Generator',
  },
  {
    href: '/araclar/renk-paleti',
    icon: '🎨',
    title: 'Renk Paleti Uyumluluk Testi',
    desc: 'Marka renklerinizin kontrast skorunu ve erişilebilirlik uyumluluğunu test edin.',
    tag: 'Analizci',
  },
  {
    href: '/araclar/roi-hesaplayici',
    icon: '📈',
    title: 'Web Sitesi ROI Hesaplayıcı',
    desc: 'Yeni web siteniz size ne kadar kazandırır? Tahmini gelir artışınızı hesaplayın.',
    tag: 'Hesaplayıcı',
  },
];

export default function AraclarPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--dark)' }}>
        <section className="sec">
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="sec-tag">Ücretsiz Araçlar</span>
              <h1 className="sec-title" style={{ marginTop: '16px', color: '#fff' }}>
                Projenizi Planlamak İçin<br />
                <span style={{ color: 'var(--accent)' }}>Ücretsiz Araçlar</span>
              </h1>
              <p className="sec-sub" style={{ maxWidth: '560px', margin: '16px auto 0', color: 'rgba(255,255,255,0.6)' }}>
                Dijital projenize başlamadan önce ihtiyaç duyduğunuz her şeyi hesaplayın, analiz edin ve planlayın.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '24px',
            }}>
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{
                    background: '#1a1a1a',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    padding: '32px',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                    className="tool-card"
                  >
                    <div style={{ fontSize: '40px', marginBottom: '16px' }}>{tool.icon}</div>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      background: 'rgba(249,115,22,0.1)',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      display: 'inline-block',
                      marginBottom: '12px',
                    }}>{tool.tag}</span>
                    <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                      {tool.title}
                    </h2>
                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                      {tool.desc}
                    </p>
                    <div style={{
                      marginTop: '24px',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}>
                      Aracı Kullan <i className="bi bi-arrow-right" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .tool-card:hover {
          border-color: rgba(249,115,22,0.3) !important;
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
      `}</style>
    </>
  );
}
