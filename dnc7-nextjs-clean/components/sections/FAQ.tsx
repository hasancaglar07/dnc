'use client';

import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';

const faqs = [
  { id: 1, q: 'Proje teslim süresi ne kadar?', a: 'Basit web sitesi 2-4 hafta, mobil uygulama 6-12 hafta, prodüksiyon filmi 1-4 hafta arasında teslim edilmektedir.' },
  { id: 2, q: 'Fiyat teklifi nasıl alabilirim?', a: 'İletişim formunu doldurarak 24 saat içinde size özel teklifimizi alabilirsiniz.' },
  { id: 3, q: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?', a: 'Banka havalesi, kredi kartı ve kurumsal fatura. %40 peşin, %60 teslimatta ödeme planı.' },
  { id: 4, q: 'Revizyon hakkı veriyor musunuz?', a: 'Tüm projelerimizde 3 tur revizyon hakkı sunuyoruz.' },
  { id: 5, q: 'AI entegrasyonu hangi platformlarda çalışıyor?', a: 'GPT-4, Claude, Gemini ve özel LLM modelleri. Web, mobil ve WhatsApp botları için uygun.' },
  { id: 6, q: 'Drone çekim için izin gerekli mi?', a: 'SHGM ticari drone uçuş iznimiz mevcut. Gerekli izinleri biz yönetiyoruz.' },
  { id: 7, q: 'Neden DNC7\'yi tercih etmeliyim?', a: '12 yıl deneyim, 200+ proje, prodüksiyondan AI\'a uçtan uca hizmet.' },
  { id: 8, q: 'Proje sonrası destek veriyor musunuz?', a: '30 gün ücretsiz teknik destek + aylık bakım paketlerimiz mevcut.' },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="sec faq-sec" style={{ padding: '60px 0' }}>
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div className="sec-tag">SSS</div>
            <h2 className="sec-title">Sıkça Sorulan <em>Sorular</em></h2>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="faq-compact-grid">
            {faqs.map((faq) => (
              <div key={faq.id} className={`faq-chip ${openId === faq.id ? 'on' : ''}`}>
                <button
                  className="faq-chip-q"
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-chip-ico">{openId === faq.id ? '−' : '+'}</span>
                </button>
                <div className="faq-chip-a" style={{
                  maxHeight: openId === faq.id ? '120px' : '0',
                  opacity: openId === faq.id ? 1 : 0
                }}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
