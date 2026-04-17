import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | DNC7',
  description: 'DNC7 gizlilik politikası — kişisel verilerinizi nasıl topladığımız, kullandığımız ve koruduğumuzu öğrenin.',
};

const sections = [
  {
    title: 'Toplanan Bilgiler',
    content: `Web sitemizi ziyaret ettiğinizde veya hizmetlerimizden yararlandığınızda aşağıdaki bilgileri toplayabiliriz:

- **İletişim Bilgileri:** Ad, soyad, e-posta adresi, telefon numarası.
- **Proje Bilgileri:** İletişim formu aracılığıyla paylaştığınız proje detayları ve gereksinimler.
- **Teknik Veriler:** IP adresi, tarayıcı türü, işletim sistemi, ziyaret ettiğiniz sayfalar ve oturum süresi.
- **Çerez Verileri:** Site deneyimini iyileştirmek amacıyla çerezler aracılığıyla toplanan tercihler.`,
  },
  {
    title: 'Bilgilerin Kullanım Amacı',
    content: `Topladığımız bilgileri yalnızca aşağıdaki amaçlarla kullanırız:

- Size sunduğumuz hizmetleri sağlamak ve iyileştirmek.
- Proje teklifleri hazırlamak ve iletişim kurmak.
- Bültenimize abone olduysanız güncellemeler ve haberler göndermek.
- Yasal yükümlülükleri yerine getirmek.
- Web sitesi performansını analiz etmek ve güvenliği sağlamak.`,
  },
  {
    title: 'Bilgilerin Paylaşılması',
    content: `Kişisel bilgilerinizi üçüncü taraflara satmaz, kiralamaz veya ticari amaçlarla paylaşmayız. Bilgileriniz yalnızca şu durumlarda paylaşılabilir:

- **Hizmet Sağlayıcılar:** E-posta gönderimi, analitik ve altyapı gibi hizmetler için güvenilir iş ortaklarıyla (gizlilik sözleşmesi kapsamında).
- **Yasal Zorunluluk:** Mahkeme kararı veya yasal düzenleme gerektirdiğinde yetkili makamlarla.
- **İşletme Devri:** Şirket birleşmesi veya devri durumunda, öncesinde bilgilendirme yapılarak.`,
  },
  {
    title: 'Çerezler',
    content: `Sitemiz, kullanıcı deneyimini geliştirmek için çerezler kullanır. Çerez türleri:

- **Zorunlu Çerezler:** Sitenin düzgün çalışması için gerekli, devre dışı bırakılamaz.
- **Analitik Çerezler:** Ziyaretçi davranışlarını anlamak için kullanılır (Google Analytics).
- **Tercih Çerezleri:** Dil, bölge gibi tercihlerinizi hatırlar.

Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz; ancak bu durumda sitenin bazı özellikleri çalışmayabilir.`,
  },
  {
    title: 'Veri Güvenliği',
    content: `Verilerinizi korumak için endüstri standardı güvenlik önlemleri uygularız:

- SSL/TLS şifrelemesi ile veri iletimi.
- Kısıtlı erişim — yalnızca yetkili personel.
- Düzenli güvenlik denetimleri.
- Sunucu taraflı veri şifreleme.

Ancak hiçbir internet iletiminin %100 güvenli olmadığını ve mutlak güvenliği garanti edemeyeceğimizi belirtmek isteriz.`,
  },
  {
    title: 'Haklarınız',
    content: `KVKK (Kişisel Verilerin Korunması Kanunu) kapsamında aşağıdaki haklara sahipsiniz:

- Kişisel verilerinizin işlenip işlenmediğini öğrenme.
- Verilerinize erişim ve kopyasını talep etme.
- Yanlış veya eksik verilerin düzeltilmesini isteme.
- Verilerinizin silinmesini talep etme ("unutulma hakkı").
- Veri işlemeye itiraz etme.
- Otomatik kararlar hakkında bilgi edinme.

Bu haklarınızı kullanmak için info@dnc7.com adresine e-posta gönderebilirsiniz.`,
  },
  {
    title: 'Veri Saklama Süresi',
    content: `Kişisel verilerinizi yalnızca toplama amacı için gerekli olduğu süre boyunca saklarız:

- İletişim formu verileri: 2 yıl.
- Proje dosyaları: Proje tamamlanmasından itibaren 5 yıl.
- Analitik verileri: 26 ay (Google Analytics varsayılanı).
- Bülten aboneliği: Abonelikten çıkılana kadar.`,
  },
  {
    title: 'Politika Değişiklikleri',
    content: `Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler olduğunda sizi e-posta veya site bildirimi ile bilgilendireceğiz. Güncel politikayı her zaman bu sayfada bulabilirsiniz. Son güncelleme tarihi sayfanın alt kısmında belirtilmektedir.`,
  },
];

export default function GizlilikPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <section className="page-hero" style={{ background: 'var(--dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'radial-gradient(circle at 20% 50%, #F97316 0%, transparent 50%), radial-gradient(circle at 80% 80%, #6366F1 0%, transparent 50%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="sec-tag" style={{ color: 'var(--accent)' }}>Yasal</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 20 }}>
            Gizlilik<br /><span style={{ color: 'var(--accent)' }}>Politikası</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,.55)', maxWidth: 560 }}>
            Kişisel verilerinizi nasıl topladığımız, kullandığımız ve koruduğumuzu şeffaf biçimde açıklıyoruz.
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
              DNC7 Dijital Ajans olarak gizliliğinize saygı duyuyor ve kişisel verilerinizin güvenliğini ön planda tutuyoruz.
              Bu Gizlilik Politikası, <strong>dnc7.com</strong> üzerinden toplanan verilerin nasıl işlendiğini açıklar.
              Sitemizi kullanarak bu politikayı kabul etmiş sayılırsınız.
            </p>
          </div>

          {/* Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {sections.map((section, i) => (
              <div key={i}>
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

          {/* Contact Box */}
          <div style={{ marginTop: 64, padding: '40px', borderRadius: 24, background: 'var(--dark)', color: '#fff', textAlign: 'center' }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>İletişim</div>
            <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, marginBottom: 16 }}>Sorularınız mı var?</h3>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.55)', lineHeight: 1.75, marginBottom: 28, maxWidth: 440, margin: '0 auto 28px' }}>
              Gizlilik politikamız veya verilerinizle ilgili herhangi bir sorunuz için bizimle iletişime geçin.
            </p>
            <Link href="/#iletisim" className="cta-main">
              İletişime Geç
              <span className="ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
