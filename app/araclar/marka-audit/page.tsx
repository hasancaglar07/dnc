'use client';

import { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

const questions = [
  {
    id: 'logo_yas',
    question: 'Logonuz kaç yıllık?',
    options: [
      { label: '0–2 yıl', score: 5 },
      { label: '3–5 yıl', score: 3 },
      { label: '6–10 yıl', score: 2 },
      { label: '10+ yıl', score: 1 },
    ],
  },
  {
    id: 'rakip_fark',
    question: 'Logonuz rakiplerinizden görsel olarak ne kadar ayrışıyor?',
    options: [
      { label: 'Çok güçlü, hemen ayırt edilebilir', score: 5 },
      { label: 'Biraz farklı', score: 3 },
      { label: 'Benzer', score: 2 },
      { label: 'Neredeyse aynı', score: 1 },
    ],
  },
  {
    id: 'renk_tutarlilik',
    question: 'Tüm platformlarda aynı renk paletini kullanıyor musunuz?',
    options: [
      { label: 'Evet, her yerde tutarlı', score: 5 },
      { label: 'Çoğunlukla', score: 3 },
      { label: 'Bazen değişiyor', score: 2 },
      { label: 'Hayır, tutarsız', score: 1 },
    ],
  },
  {
    id: 'hedef_kitle',
    question: 'Markanız hedef kitlenize net bir mesaj veriyor mu?',
    options: [
      { label: 'Kesinlikle, herkes anlıyor', score: 5 },
      { label: 'Çoğunlukla', score: 3 },
      { label: 'Bazen kafa karışıklığı yaşanıyor', score: 2 },
      { label: 'Hayır, belirsiz', score: 1 },
    ],
  },
  {
    id: 'tipografi',
    question: 'Markanızın font/tipografi sistemi var mı?',
    options: [
      { label: 'Evet, tanımlı font sistemi var', score: 5 },
      { label: 'Birkaç seçeneğimiz var', score: 3 },
      { label: 'Genellikle rastgele seçiyoruz', score: 2 },
      { label: 'Hayır', score: 1 },
    ],
  },
  {
    id: 'marka_kilavuzu',
    question: 'Marka kılavuzunuz (brand guideline) var mı?',
    options: [
      { label: 'Evet, detaylı bir kılavuzumuz var', score: 5 },
      { label: 'Temel kurallar belirlenmiş', score: 3 },
      { label: 'Çok basit notlar var', score: 2 },
      { label: 'Hayır', score: 1 },
    ],
  },
  {
    id: 'dijital_varlik',
    question: 'Sosyal medya hesaplarınız görsel olarak tutarlı mı?',
    options: [
      { label: 'Evet, tüm platformlar birbiriyle uyumlu', score: 5 },
      { label: 'Çoğunlukla', score: 3 },
      { label: 'Platform başına farklılık var', score: 2 },
      { label: 'Hayır, her şey dağınık', score: 1 },
    ],
  },
  {
    id: 'profesyonel_izlenim',
    question: 'Müşterileriniz markanıza ilk bakışta güveniyor mu?',
    options: [
      { label: 'Evet, hep olumlu geri bildirim alıyoruz', score: 5 },
      { label: 'Genellikle', score: 3 },
      { label: 'Bazen şüpheyle karşılanıyoruz', score: 2 },
      { label: 'Hayır, güven sorunu var', score: 1 },
    ],
  },
  {
    id: 'duygu',
    question: 'Markanız bir duygu/değer çağrıştırıyor mu?',
    options: [
      { label: 'Evet, net ve güçlü bir his veriyor', score: 5 },
      { label: 'Biraz', score: 3 },
      { label: 'Belirsiz', score: 2 },
      { label: 'Hayır, sadece bir isim', score: 1 },
    ],
  },
  {
    id: 'guncelleme',
    question: 'Son 3 yılda marka kimliğinizi güncellediniz mi?',
    options: [
      { label: 'Evet, profesyonel yardım aldık', score: 5 },
      { label: 'Küçük revizyonlar yaptık', score: 3 },
      { label: 'Düşünüyoruz ama yapmadık', score: 2 },
      { label: 'Hayır, değiştirilmedi', score: 1 },
    ],
  },
];

function getResult(score: number) {
  if (score >= 40) return {
    label: 'Güçlü Marka',
    color: '#10b981',
    desc: 'Tebrikler! Marka kimliğiniz oldukça güçlü. Küçük dokunuşlarla mükemmelleştirebilirsiniz.',
    suggestions: ['Marka kılavuzunuzu düzenli güncelleyin', 'Yeni platformlardaki tutarlılığı kontrol edin', 'Rakip analizi yaparak konumunuzu pekiştirin'],
  };
  if (score >= 25) return {
    label: 'Gelişime Açık',
    color: '#f59e0b',
    desc: 'Markanızın temeli var, ancak bazı alanlarda iyileştirme yapılabilir.',
    suggestions: ['Renk ve tipografi sistemini standartlaştırın', 'Marka kılavuzu oluşturun', 'Sosyal medya görsellerini tutarlı hale getirin'],
  };
  return {
    label: 'Rebrand Zamanı',
    color: '#ef4444',
    desc: 'Markanız potansiyelinizi yansıtmıyor. Profesyonel bir rebrand büyük fark yaratabilir.',
    suggestions: ['Profesyonel logo ve marka kimliği tasarımı', 'Hedef kitle analizi ve konumlandırma', 'Tüm temas noktalarını yenileyin'],
  };
}

export default function MarkaAuditPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 5;
  const pct = Math.round((totalScore / maxScore) * 100);
  const result = getResult(totalScore);
  const answered = Object.keys(answers).length;

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--dark)' }}>
        <section className="sec">
          <div className="wrap" style={{ maxWidth: '720px' }}>
            <Link href="/araclar" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '32px' }}>
              <i className="bi bi-arrow-left" /> Tüm Araçlar
            </Link>

            <span className="sec-tag">Ücretsiz Araç</span>
            <h1 className="sec-title" style={{ marginTop: '16px', marginBottom: '8px', color: '#fff' }}>Marka Kimliği Audit</h1>
            <p className="sec-sub" style={{ marginBottom: '48px', color: 'rgba(255,255,255,0.6)' }}>
              10 soruda markanızı değerlendirin. Güçlü ve zayıf yönlerinizi keşfedin.
            </p>

            {/* Progress */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>
                <span>{answered} / {questions.length} soru cevaplandı</span>
                <span>%{Math.round((answered / questions.length) * 100)}</span>
              </div>
              <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px' }}>
                <div style={{ height: '100%', width: `${(answered / questions.length) * 100}%`, background: 'var(--accent)', borderRadius: '4px', transition: 'width 0.3s' }} />
              </div>
            </div>

            {/* Questions */}
            {questions.map((q, idx) => (
              <div key={q.id} style={{ marginBottom: '36px' }}>
                <div style={{ fontSize: '16px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>
                  <span style={{ color: 'var(--accent)' }}>{String(idx + 1).padStart(2, '0')}.</span> {q.question}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {q.options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.score }))}
                      style={{
                        background: answers[q.id] === opt.score ? 'rgba(249,115,22,0.15)' : '#1a1a1a',
                        border: `1px solid ${answers[q.id] === opt.score ? 'var(--accent)' : 'rgba(255,255,255,0.08)'}`,
                        borderRadius: '10px',
                        padding: '14px 18px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontSize: '15px',
                        color: answers[q.id] === opt.score ? '#fff' : 'rgba(255,255,255,0.65)',
                        transition: 'all 0.2s',
                        fontWeight: answers[q.id] === opt.score ? 600 : 400,
                      }}
                    >
                      {answers[q.id] === opt.score && <span style={{ marginRight: '8px', color: 'var(--accent)' }}>✓</span>}
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {answered === questions.length && !showResult && (
              <button
                onClick={() => setShowResult(true)}
                style={{
                  background: 'var(--accent)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '16px 40px',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  marginBottom: '40px',
                }}
              >
                Sonuçlarımı Göster
              </button>
            )}

            {showResult && (
              <div style={{
                background: '#1a1a1a',
                border: `1px solid ${result.color}40`,
                borderRadius: '20px',
                padding: '40px',
                marginBottom: '40px',
              }}>
                {/* Score circle */}
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    border: `4px solid ${result.color}`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    background: `${result.color}15`,
                  }}>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: result.color }}>{pct}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>puan</div>
                  </div>
                  <div style={{ fontSize: '22px', fontWeight: 700, color: result.color }}>{result.label}</div>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginTop: '8px' }}>{result.desc}</p>
                </div>

                {/* Suggestions */}
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>Öneriler:</div>
                  {result.suggestions.map((s) => (
                    <div key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                      <span style={{ color: 'var(--accent)', marginTop: '2px' }}>→</span>
                      <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>{s}</span>
                    </div>
                  ))}
                </div>

                {!submitted ? (
                  <>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>
                      Detaylı raporu e-posta ile alın:
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <input
                        type="email"
                        required
                        placeholder="E-posta adresiniz"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          flex: 1,
                          minWidth: '220px',
                          background: 'rgba(255,255,255,0.08)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          borderRadius: '10px',
                          padding: '12px 16px',
                          color: '#fff',
                          fontSize: '15px',
                          outline: 'none',
                        }}
                      />
                      <button type="submit" style={{ background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: '10px', padding: '12px 28px', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}>
                        Raporu Al
                      </button>
                    </form>
                  </>
                ) : (
                  <div style={{ fontSize: '16px', color: '#10b981', fontWeight: 600 }}>✓ Raporunuz e-posta adresinize gönderildi!</div>
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
