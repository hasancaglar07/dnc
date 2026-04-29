import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kullanım Şartları | DNC7',
  description: 'DNC7 web sitesi ve hizmetlerine ilişkin kullanım şartları ve koşulları.',
};

const sections = [
  {
    title: 'Kabul Koşulları',
    content: `Bu web sitesini veya DNC7 hizmetlerini kullanarak aşağıdaki kullanım şartlarını okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz. Bu şartları kabul etmiyorsanız siteyi kullanmayı lütfen durdurun.

DNC7, bu şartları önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar. Değişiklikler yayınlandığı tarihte yürürlüğe girer.`,
  },
  {
    title: 'Hizmet Kapsamı',
    content: `DNC7, aşağıdaki alanlarda profesyonel dijital hizmetler sunar:

- **Prodüksiyon:** Kurumsal film, reklam ve video prodüksiyon hizmetleri.
- **AI Entegrasyonu:** GPT-4 tabanlı çözümler, otomasyon ve özel AI geliştirme.
- **Drone Çekim:** Lisanslı operatörlerle hava görüntüleme hizmetleri.
- **Web & Mobil:** UI/UX tasarım, geliştirme ve e-ticaret platformları.
- **Sosyal Medya & Reklam:** İçerik yönetimi ve dijital reklam kampanyaları.

Sunulan hizmetlerin kapsamı, fiyatlandırması ve koşulları her proje için ayrı sözleşmeyle belirlenir.`,
  },
  {
    title: 'Fikri Mülkiyet',
    content: `Bu web sitesindeki tüm içerik — metin, grafik, logo, görsel, ses, video ve yazılım dahil — DNC7'ye aittir ve Türkiye Cumhuriyeti telif hakkı yasaları ile uluslararası sözleşmelerle korunmaktadır.

- İçeriklerin yazılı izin olmaksızın kopyalanması, dağıtılması veya ticari amaçla kullanılması yasaktır.
- Site içeriklerine bağlantı verilmesi (hyperlink) serbesttir, ancak çerçeveleme (framing) yasaktır.
- DNC7 logosu ve marka adı, DNC7'nin yazılı onayı alınmadan kullanılamaz.

Müşteri projelerinde üretilen içeriklerin mülkiyeti, proje sözleşmesinde belirtilen koşullara tabidir.`,
  },
  {
    title: 'Kullanıcı Yükümlülükleri',
    content: `Siteyi veya hizmetlerimizi kullanırken aşağıdaki kurallara uymayı kabul edersiniz:

- Yasadışı, zararlı, tehdit edici veya iftira niteliğinde içerik paylaşmamak.
- Başkalarının fikri mülkiyet haklarını ihlal eden materyal göndermemek.
- Sistemi bozmak, aşırı yüklemek veya izinsiz erişim sağlamaya çalışmamak.
- Spam göndermek veya kötü amaçlı yazılım dağıtmamak.
- Gerçek kimliğinizi gizleyerek başkasını taklit etmemek.

Bu kurallara aykırı davranışlarda DNC7, hizmet erişimini askıya alma veya sonlandırma hakkını saklı tutar.`,
  },
  {
    title: 'Sözleşme İlişkisi',
    content: `İletişim formu aracılığıyla bir proje talebi iletmeniz veya hizmet için ön görüşme yapılması, taraflar arasında bağlayıcı bir sözleşme oluşturmaz.

Bağlayıcı hizmet ilişkisi, yalnızca:
- Yazılı teklif onayı ve imzalı hizmet sözleşmesi ile, veya
- Proje bedelinin ön ödemesinin alınmasıyla başlar.

Hizmet sözleşmeleri Türk Ticaret Kanunu ve ilgili mevzuat hükümlerine tabidir.`,
  },
  {
    title: 'Sorumluluk Sınırlaması',
    content: `DNC7, aşağıdaki durumlardan doğan zararlar için sorumluluk kabul etmez:

- Web sitesinin geçici olarak erişilemez olması.
- Sitede yer alan bilgilerin doğruluğu veya güncelliği.
- Üçüncü taraf web sitelerine olan bağlantılar aracılığıyla uğranan zararlar.
- Mücbir sebep halleri (doğal afet, savaş, siber saldırı vb.).

DNC7'nin herhangi bir durumda sorumluluğu, ilgili proje için alınan toplam ücretle sınırlıdır.`,
  },
  {
    title: 'Gizlilik',
    content: `Kişisel verilerinizin işlenmesine ilişkin detaylı bilgi için Gizlilik Politikamızı inceleyiniz. Gizlilik Politikası bu Kullanım Şartlarının ayrılmaz bir parçasını oluşturur.`,
  },
  {
    title: 'Uygulanacak Hukuk',
    content: `Bu Kullanım Şartları, Türkiye Cumhuriyeti hukukuna tabidir. Bu şartlardan doğabilecek her türlü uyuşmazlıkta İstanbul Mahkemeleri ve İcra Müdürlükleri yetkilidir.

Herhangi bir hükmün geçersiz sayılması durumunda, diğer hükümler geçerliliğini korur.`,
  },
];

export default function KullanimSartlariPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'radial-gradient(circle at 80% 30%, #F97316 0%, transparent 50%), radial-gradient(circle at 20% 80%, #10B981 0%, transparent 50%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="sec-tag" style={{ color: 'var(--accent)' }}>Yasal</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 20 }}>
            Kullanım<br /><span style={{ color: 'var(--accent)' }}>Şartları</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,.55)', maxWidth: 560 }}>
            DNC7 web sitesi ve hizmetlerini kullanırken geçerli olan kurallar ve koşullar.
          </p>
          <div style={{ marginTop: 24, fontSize: 13, color: 'rgba(255,255,255,.35)', fontWeight: 600, letterSpacing: 1 }}>
            Son güncelleme: Ocak 2025
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          {/* Intro */}
          <div style={{ padding: '32px 40px', borderRadius: 20, background: 'var(--bg2)', border: '1.5px solid var(--border)', marginBottom: 48 }}>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text2)', margin: 0 }}>
              Bu belgede yer alan <strong>Kullanım Şartları</strong>, <strong>dnc7.com</strong> alan adıyla erişilen web sitesini
              ve DNC7 Dijital Ajans'ın sunduğu tüm hizmetleri kapsar. Şartları dikkatlice okumanızı öneririz.
            </p>
          </div>

          {/* Quick Nav */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 56 }}>
            {sections.map((s, i) => (
              <a
                key={i}
                href={`#section-${i}`}
                className="quick-nav-pill"
                style={{
                  fontSize: 13, fontWeight: 600, padding: '8px 16px',
                  borderRadius: 9999, border: '1.5px solid var(--border)',
                  background: '#fff', color: 'var(--text2)',
                  transition: 'all .2s',
                  textDecoration: 'none',
                }}
              >
                {String(i + 1).padStart(2, '0')} {s.title}
              </a>
            ))}
          </div>

          {/* Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {sections.map((section, i) => (
              <div key={i} id={`section-${i}`}>
                <h2 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 800, color: 'var(--text)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: 10, background: '#F9731612', color: 'var(--accent)', fontSize: 13, fontWeight: 900, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {section.title}
                </h2>
                <div style={{ paddingLeft: 44 }}>
                  {section.content.split('\n').map((line, j) => {
                    if (line.startsWith('- **')) {
                      const match = line.match(/^- \*\*(.+?)\*\*:?\s*(.*)/);
                      if (match) {
                        return (
                          <div key={j} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                            <span style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }}>●</span>
                            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text2)', margin: 0 }}>
                              <strong style={{ color: 'var(--text)', fontWeight: 700 }}>{match[1]}:</strong> {match[2]}
                            </p>
                          </div>
                        );
                      }
                    }
                    if (line.startsWith('- ')) {
                      return (
                        <div key={j} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                          <span style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }}>●</span>
                          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text2)', margin: 0 }}>{line.slice(2)}</p>
                        </div>
                      );
                    }
                    if (line.trim() === '') return null;
                    return (
                      <p key={j} style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text2)', marginBottom: 12 }}>{line}</p>
                    );
                  })}
                </div>
                {i < sections.length - 1 && (
                  <div style={{ height: 1, background: 'var(--border)', marginTop: 40 }} />
                )}
              </div>
            ))}
          </div>

          {/* Bottom links */}
          <div style={{ marginTop: 64, display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/gizlilik" style={{ fontSize: 15, fontWeight: 700, color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: 4 }}>
              Gizlilik Politikası →
            </Link>
            <Link href="/iletisim" style={{ fontSize: 15, fontWeight: 700, color: 'var(--text2)', textDecoration: 'underline', textUnderlineOffset: 4 }}>
              İletişim →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
