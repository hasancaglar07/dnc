'use client';

import { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

const steps = [
  {
    id: 'video_turu',
    label: 'Video Türü',
    question: 'Hangi tür video çektireceksiniz?',
    type: 'select',
    options: ['Tanıtım Filmi', 'Reklam Filmi', 'Ürün Tanıtımı', 'Sosyal Medya Videosu', 'Eğitim / Kurumsal', 'Drone Çekim', 'Event / Etkinlik', 'Diğer'],
  },
  {
    id: 'sure',
    label: 'Süre',
    question: 'Videonun tahmini süresi ne olacak?',
    type: 'select',
    options: ['15 saniye (Reklam)', '30 saniye (Reklam)', '60 saniye (Kısa)', '2-3 dakika (Orta)', '5+ dakika (Uzun)'],
  },
  {
    id: 'hedef_kitle',
    label: 'Hedef Kitle',
    question: 'Videonun hedef kitlesi kim?',
    type: 'text',
    placeholder: 'Örn: 25-40 yaş arası, İstanbul\'da yaşayan, orta-üst gelir grubu...',
  },
  {
    id: 'mesaj',
    label: 'Ana Mesaj',
    question: 'Videoda iletmek istediğiniz en önemli mesaj nedir?',
    type: 'text',
    placeholder: 'Örn: Ürünümüz hayatınızı kolaylaştırır, güvenilirliği ön plana çıkar...',
  },
  {
    id: 'ton',
    label: 'Ton & Stil',
    question: 'Videonun tonu/stili nasıl olmalı?',
    type: 'select',
    options: ['Ciddi & Profesyonel', 'Enerjik & Dinamik', 'Sıcak & Samimi', 'Eğlenceli & Komik', 'Lüks & Premium', 'Minimal & Modern'],
  },
  {
    id: 'platform',
    label: 'Platform',
    question: 'Video hangi platformda yayınlanacak?',
    type: 'multiselect',
    options: ['Instagram', 'YouTube', 'TikTok', 'LinkedIn', 'TV', 'Web Sitesi', 'Sunum / Event'],
  },
  {
    id: 'referans',
    label: 'Referans',
    question: 'Beğendiğiniz video veya marka örneği var mı?',
    type: 'text',
    placeholder: 'Örn: Apple ürün videoları gibi, ya da https://youtube.com/... linki',
  },
  {
    id: 'butce',
    label: 'Bütçe',
    question: 'Tahmini bütçeniz nedir?',
    type: 'select',
    options: ['5.000 – 15.000 ₺', '15.000 – 30.000 ₺', '30.000 – 60.000 ₺', '60.000 – 100.000 ₺', '100.000 ₺ üzeri', 'Belirlemedim'],
  },
  {
    id: 'tarih',
    label: 'Tarih',
    question: 'İstenen teslim tarihi veya yayın tarihi?',
    type: 'text',
    placeholder: 'Örn: 15 Haziran 2025, ya da "1 ay içinde"',
  },
  {
    id: 'ekstra',
    label: 'Notlar',
    question: 'Eklemek istediğiniz özel notlar veya kısıtlamalar?',
    type: 'textarea',
    placeholder: 'Örn: Belirli bir lokasyon, ürünün yakın planı olsun, ses efekti istemiyoruz...',
  },
];

export default function VideoBriefPage() {
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [showBrief, setShowBrief] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const step = steps[currentStep];
  const isLast = currentStep === steps.length - 1;

  const handleAnswer = (val: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [step.id]: val }));
  };

  const currentVal = answers[step.id];

  const toggleMulti = (opt: string) => {
    const current = (answers[step.id] as string[]) ?? [];
    if (current.includes(opt)) {
      handleAnswer(current.filter((o) => o !== opt));
    } else {
      handleAnswer([...current, opt]);
    }
  };

  const briefText = steps.map((s) => {
    const val = answers[s.id];
    if (!val || (Array.isArray(val) && val.length === 0)) return null;
    return `**${s.label}:** ${Array.isArray(val) ? val.join(', ') : val}`;
  }).filter(Boolean).join('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(briefText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--dark)' }}>
        <section className="sec">
          <div className="wrap" style={{ maxWidth: '680px' }}>
            <Link href="/araclar" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '32px' }}>
              <i className="bi bi-arrow-left" /> Tüm Araçlar
            </Link>

            <span className="sec-tag">Ücretsiz Araç</span>
            <h1 className="sec-title" style={{ marginTop: '16px', marginBottom: '8px', color: '#fff' }}>Video Brief Generator</h1>
            <p className="sec-sub" style={{ marginBottom: '48px', color: 'rgba(255,255,255,0.6)' }}>
              Birkaç soruyu yanıtlayın, profesyonel video brief&apos;inizin hazır olsun.
            </p>

            {!showBrief ? (
              <>
                {/* Progress */}
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>
                    <span>Adım {currentStep + 1} / {steps.length}</span>
                    <span>%{Math.round(((currentStep) / steps.length) * 100)}</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px' }}>
                    <div style={{ height: '100%', width: `${(currentStep / steps.length) * 100}%`, background: 'var(--accent)', borderRadius: '4px', transition: 'width 0.3s' }} />
                  </div>
                </div>

                <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '36px' }}>
                  <div style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {step.label}
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '24px' }}>
                    {step.question}
                  </div>

                  {step.type === 'select' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {step.options!.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleAnswer(opt)}
                          style={{
                            background: currentVal === opt ? 'rgba(249,115,22,0.15)' : 'rgba(255,255,255,0.04)',
                            border: `1px solid ${currentVal === opt ? 'var(--accent)' : 'rgba(255,255,255,0.08)'}`,
                            borderRadius: '10px',
                            padding: '14px 18px',
                            cursor: 'pointer',
                            textAlign: 'left',
                            fontSize: '15px',
                            color: currentVal === opt ? '#fff' : 'rgba(255,255,255,0.65)',
                            fontWeight: currentVal === opt ? 600 : 400,
                            transition: 'all 0.2s',
                          }}
                        >
                          {currentVal === opt && <span style={{ color: 'var(--accent)', marginRight: '8px' }}>✓</span>}
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {step.type === 'multiselect' && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {step.options!.map((opt) => {
                        const sel = ((answers[step.id] as string[]) ?? []).includes(opt);
                        return (
                          <button
                            key={opt}
                            onClick={() => toggleMulti(opt)}
                            style={{
                              background: sel ? 'rgba(249,115,22,0.15)' : 'rgba(255,255,255,0.04)',
                              border: `1px solid ${sel ? 'var(--accent)' : 'rgba(255,255,255,0.08)'}`,
                              borderRadius: '50px',
                              padding: '10px 18px',
                              cursor: 'pointer',
                              fontSize: '14px',
                              color: sel ? '#fff' : 'rgba(255,255,255,0.65)',
                              fontWeight: sel ? 600 : 400,
                              transition: 'all 0.2s',
                            }}
                          >
                            {sel && '✓ '}{opt}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {(step.type === 'text' || step.type === 'textarea') && (
                    step.type === 'textarea' ? (
                      <textarea
                        placeholder={step.placeholder}
                        value={(answers[step.id] as string) ?? ''}
                        onChange={(e) => handleAnswer(e.target.value)}
                        rows={4}
                        style={{
                          width: '100%',
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          borderRadius: '10px',
                          padding: '14px 16px',
                          color: '#fff',
                          fontSize: '15px',
                          outline: 'none',
                          resize: 'vertical',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                        }}
                      />
                    ) : (
                      <input
                        type="text"
                        placeholder={step.placeholder}
                        value={(answers[step.id] as string) ?? ''}
                        onChange={(e) => handleAnswer(e.target.value)}
                        style={{
                          width: '100%',
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          borderRadius: '10px',
                          padding: '14px 16px',
                          color: '#fff',
                          fontSize: '15px',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    )
                  )}

                  <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'space-between' }}>
                    <button
                      onClick={() => setCurrentStep((p) => Math.max(0, p - 1))}
                      disabled={currentStep === 0}
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '10px',
                        padding: '12px 24px',
                        color: 'rgba(255,255,255,0.4)',
                        fontSize: '15px',
                        cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
                      }}
                    >
                      ← Geri
                    </button>
                    <button
                      onClick={() => {
                        if (isLast) setShowBrief(true);
                        else setCurrentStep((p) => p + 1);
                      }}
                      style={{
                        background: 'var(--accent)',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '12px 28px',
                        color: '#fff',
                        fontSize: '15px',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      {isLast ? 'Brief\'i Oluştur →' : 'İleri →'}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div style={{ background: '#1a1a1a', border: '1px solid rgba(249,115,22,0.3)', borderRadius: '20px', padding: '36px' }}>
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '24px' }}>
                  🎬 Video Brief&apos;iniz Hazır!
                </div>
                <div style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '24px',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  lineHeight: 2,
                  color: 'rgba(255,255,255,0.75)',
                  whiteSpace: 'pre-line',
                }}>
                  {briefText || 'Brief bilgileri burada görünecek.'}
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  <button
                    onClick={handleCopy}
                    style={{
                      background: copied ? '#10b981' : 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '10px',
                      padding: '12px 20px',
                      color: '#fff',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {copied ? '✓ Kopyalandı!' : '📋 Kopyala'}
                  </button>
                  <button
                    onClick={() => { setShowBrief(false); setCurrentStep(0); setAnswers({}); }}
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      padding: '12px 20px',
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: '14px',
                      cursor: 'pointer',
                    }}
                  >
                    Yeniden Başla
                  </button>
                </div>

                {!submitted ? (
                  <>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>
                      Brief&apos;i e-posta ile alın veya bize gönderin:
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <input
                        type="email"
                        required
                        placeholder="E-posta adresiniz"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ flex: 1, minWidth: '220px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '12px 16px', color: '#fff', fontSize: '15px', outline: 'none' }}
                      />
                      <button type="submit" style={{ background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: '10px', padding: '12px 24px', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}>
                        Gönder
                      </button>
                    </form>
                  </>
                ) : (
                  <div style={{ fontSize: '16px', color: '#10b981', fontWeight: 600 }}>✓ Brief ekibimize iletildi! En kısa sürede dönüş yapacağız.</div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
