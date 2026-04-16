'use client';

import { useState } from 'react';

const faqs = [
  { id: 1, q: 'Proje teslim süresi ne kadar?', a: 'Proje kapsamına göre değişmekle birlikte, basit bir web sitesi 2-4 hafta, mobil uygulama 6-12 hafta, prodüksiyon filmi 1-4 hafta arasında teslim edilmektedir.' },
  { id: 2, q: 'Fiyat teklifi nasıl alabilirim?', a: 'İletişim formunu doldurarak veya doğrudan e-posta göndererek proje detaylarınızı paylaşabilirsiniz. 24 saat içinde size özel teklifimizi iletiyoruz.' },
  { id: 3, q: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?', a: 'Banka havalesi, kredi kartı ve kurumsal fatura seçeneklerimiz mevcuttur. Proje başlangıcında %40 peşin, teslimatta %60 ödeme planı uyguluyoruz.' },
  { id: 4, q: 'Revizyon hakkı veriyor musunuz?', a: 'Evet, tüm projelerimizde 3 tur revizyon hakkı sunuyoruz. Ek revizyonlar için saatlik ücretlendirme yapıyoruz.' },
  { id: 5, q: 'AI entegrasyonu hangi platformlarda çalışıyor?', a: 'GPT-4, Claude, Gemini ve kendi özel LLM modellerimizi entegre edebiliyoruz. Web siteleri, mobil uygulamalar ve WhatsApp botları için uygun.' },
  { id: 6, q: 'Drone çekim için izin gerekli mi?', a: 'Evet, SHGM tarafından verilmiş ticari drone uçuş iznimiz mevcut. Özel alanlar için gerekli izinleri biz yönetiyoruz.' },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="sec faq-sec">
      <div className="wrap">
        <div className="sec-tag">SSS</div>
        <h2 className="sec-title">Sıkça Sorulan <em>Sorular</em></h2>
        <p className="sec-sub">Aklınıza takılan soruların cevapları</p>

        <div className="faq-lay">
          <div>
            <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.75 }}>
              Proje sürecimiz, fiyatlandırma politikalarımız ve çalışma şeklimiz hakkında merak edilenler.
              Daha fazlası için bizimle iletişime geçin.
            </p>
            <a href="#iletisim" className="btn-orange" style={{ marginTop: '20px' }}>
              Sorunuzu Sorun <span className="ico"><i className="bi bi-arrow-up-right"></i></span>
            </a>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.id} className={`faq-item ${openId === faq.id ? 'on' : ''}`}>
                <button
                  className="faq-q"
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                >
                  {faq.q}
                  <i className="faq-ico"><i className={`bi bi-${openId === faq.id ? 'dash' : 'plus'}`}></i></i>
                </button>
                <div className="faq-a" style={{
                  maxHeight: openId === faq.id ? '200px' : '0',
                  opacity: openId === faq.id ? 1 : 0
                }}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
