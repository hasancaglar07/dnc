'use client';

import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const serviceOptions = [
  'Web Tasarım & Geliştirme',
  'Mobil Uygulama',
  'AI Entegrasyonu',
  'Prodüksiyon Filmi',
  'Drone Çekim',
  'Sosyal Medya Yönetimi',
  'E-Ticaret Danışmanlığı',
  'Reklam Yönetimi',
  'Mobil Oyun',
  'Diğer',
];

const budgetOptions = [
  '₺5.000 - ₺15.000',
  '₺15.000 - ₺30.000',
  '₺30.000 - ₺60.000',
  '₺60.000 - ₺100.000',
  '₺100.000+',
  'Henüz belirlemedim',
];

export default function Contact() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('loading');
    setErrorMsg('');

    const fd = new FormData(e.currentTarget);
    const data = {
      firstName: fd.get('firstName') as string,
      lastName: fd.get('lastName') as string,
      email: fd.get('email') as string,
      phone: fd.get('phone') as string,
      service: fd.get('service') as string,
      budget: fd.get('budget') as string,
      subject: fd.get('subject') as string,
      message: fd.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Hata oluştu.');
      setState('success');
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Mesaj gönderilemedi.');
    }
  }

  return (
    <section id="iletisim" className="sec contact-sec">
      <div className="wrap">
        <Reveal>
          <div className="sec-tag">İletişim</div>
          <h2 className="sec-title">Ücretsiz <em>Strateji Toplantısı</em> Alın</h2>
          <p className="sec-sub">30 dakikada projenizi değerlendirelim — taahhüt yok, baskı yok</p>
          <div className="contact-trust">
            <span className="ct-chip"><i className="bi bi-shield-check"></i> Memnuniyet Garantisi</span>
            <span className="ct-chip"><i className="bi bi-clock"></i> 2 Saat Yanıt</span>
            <span className="ct-chip"><i className="bi bi-lock"></i> KVKK Uyumlu</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="contact-box">
            <div className="contact-in">
              <div className="contact-info-col">
                <h3 className="ci-heading">Bize Ulaşın</h3>

                <a href="mailto:info@dnc7.com" className="ci-row">
                  <div className="ci-ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div className="ci-val">info@dnc7.com</div>
                </a>

                <a href="tel:+902125550123" className="ci-row">
                  <div className="ci-ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.92 13.5 19.79 19.79 0 0 1 1.85 5 2 2 0 0 1 3.84 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="ci-val">+90 (212) 555 0123</div>
                </a>

                <div className="ci-row">
                  <div className="ci-ico">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="ci-val">Levent, İstanbul</div>
                </div>

                <div className="ci-socials-area">
                  <p className="ci-socials-label">Bizi Takip Edin</p>
                  <div className="f-socs">
                    <a href="https://instagram.com/dnc7" target="_blank" rel="noopener noreferrer" className="fsoc" aria-label="Instagram">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com/company/dnc7" target="_blank" rel="noopener noreferrer" className="fsoc" aria-label="LinkedIn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                    <a href="https://x.com/dnc7" target="_blank" rel="noopener noreferrer" className="fsoc" aria-label="X (Twitter)">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="https://youtube.com/@dnc7" target="_blank" rel="noopener noreferrer" className="fsoc" aria-label="YouTube">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-form-col">
                {state === 'success' ? (
                  <div className="contact-success">
                    <div className="contact-success-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <h4>Mesajınız İletildi!</h4>
                    <p>En kısa sürede size dönüş yapacağız. Teşekkür ederiz.</p>
                    <button className="btn-send" style={{ marginTop: 16 }} onClick={() => setState('idle')}>
                      Yeni Mesaj Gönder
                      <span className="arr">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                        </svg>
                      </span>
                    </button>
                  </div>
                ) : (
                  <form noValidate onSubmit={handleSubmit}>
                    <div className="f-row">
                      <div className="f-field">
                        <label htmlFor="contact-first-name" className="f-label">Ad <span aria-hidden>*</span></label>
                        <input id="contact-first-name" name="firstName" type="text" className="fin" placeholder="Adınız" autoComplete="given-name" required />
                      </div>
                      <div className="f-field">
                        <label htmlFor="contact-last-name" className="f-label">Soyad <span aria-hidden>*</span></label>
                        <input id="contact-last-name" name="lastName" type="text" className="fin" placeholder="Soyadınız" autoComplete="family-name" required />
                      </div>
                    </div>

                    <div className="f-row">
                      <div className="f-field">
                        <label htmlFor="contact-email" className="f-label">E-posta <span aria-hidden>*</span></label>
                        <input id="contact-email" name="email" type="email" className="fin" placeholder="ornek@mail.com" autoComplete="email" required />
                      </div>
                      <div className="f-field">
                        <label htmlFor="contact-phone" className="f-label">Telefon</label>
                        <input id="contact-phone" name="phone" type="tel" className="fin" placeholder="+90 (5XX) XXX XX XX" autoComplete="tel" />
                      </div>
                    </div>

                    <div className="f-row">
                      <div className="f-field">
                        <label htmlFor="contact-service" className="f-label">Hizmet Tipi</label>
                        <select id="contact-service" name="service" className="fin" defaultValue="" style={{ color: 'var(--text)' }}>
                          <option value="" disabled>Seçiniz...</option>
                          {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div className="f-field">
                        <label htmlFor="contact-budget" className="f-label">Bütçe Aralığı</label>
                        <select id="contact-budget" name="budget" className="fin" defaultValue="" style={{ color: 'var(--text)' }}>
                          <option value="" disabled>Seçiniz...</option>
                          {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="f-field">
                      <label htmlFor="contact-subject" className="f-label">Konu</label>
                      <input id="contact-subject" name="subject" type="text" className="fin" placeholder="Projenizin konusu" autoComplete="off" />
                    </div>

                    <div className="f-field">
                      <label htmlFor="contact-message" className="f-label">Mesaj <span aria-hidden>*</span></label>
                      <textarea id="contact-message" name="message" className="fin fta" placeholder="Projenizden bahsedin, zaman çizelgenizi paylaşın..." required />
                    </div>

                    {state === 'error' && (
                      <div className="contact-error" role="alert" aria-live="assertive">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                        {errorMsg}
                      </div>
                    )}

                    <button type="submit" className="btn-send" disabled={state === 'loading'}>
                      {state === 'loading' ? 'Gönderiliyor...' : 'Gönder'}
                      <span className="arr">
                        {state === 'loading' ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: 'spin 1s linear infinite' }}>
                            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                          </svg>
                        ) : (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                          </svg>
                        )}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
