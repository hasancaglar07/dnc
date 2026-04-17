'use client';

import { useState } from 'react';
import Link from 'next/link';
import { serviceCROData } from '@/data/service-cro';

interface Props {
  slug: string;
  accent: string;
}

export default function ServiceCROSections({ slug, accent }: Props) {
  const data = serviceCROData[slug];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!data) return null;

  return (
    <>
      {/* Pain Points */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="sec-tag" style={{ color: accent }}>Bu Sorunları Yaşıyor musunuz?</div>
          <h2 className="sec-title">Tanıdık Geldi <em>mi?</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 48 }}>
            {data.painPoints.map((p, i) => (
              <div key={i} style={{
                padding: '32px 28px', borderRadius: 20,
                border: '1.5px solid var(--border)', background: 'var(--bg2)',
                transition: 'transform .3s, box-shadow .3s',
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 16,
                  background: `${accent}12`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', marginBottom: 20,
                }}>
                  <i className={`bi ${p.icon}`} style={{ fontSize: 24, color: accent }}></i>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 8, lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <p style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>
              Bu sorunların hepsini <span style={{ color: accent }}>çözüyoruz.</span>
            </p>
            <Link href="/#iletisim" className="cta-main" style={{ background: accent }}>
              Ücretsiz Değerlendirme Al <span className="ico"><i className="bi bi-arrow-right"></i></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="sec" style={{ background: 'var(--dark)', color: '#fff' }}>
        <div className="wrap" style={{ maxWidth: 900 }}>
          <div className="sec-tag" style={{ color: accent }}>Başarı Hikayesi</div>
          <h2 className="sec-title" style={{ color: '#fff' }}>Gerçek <em style={{ color: accent }}>Sonuçlar</em></h2>

          <div style={{ marginTop: 48 }}>
            <div style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.04)' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: accent, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>
                {data.caseStudy.company}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.4)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>Problem</div>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,.7)', lineHeight: 1.6 }}>{data.caseStudy.problem}</p>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.4)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>Çözüm</div>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,.7)', lineHeight: 1.6 }}>{data.caseStudy.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${data.caseStudy.results.length}, 1fr)`, gap: 16, padding: '24px', borderRadius: 14, background: 'rgba(255,255,255,.06)', marginBottom: 24 }}>
                {data.caseStudy.results.map((r, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 28, fontWeight: 900, color: accent, lineHeight: 1 }}>{r.value}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', fontWeight: 600, marginTop: 6 }}>{r.metric}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div style={{ borderLeft: `3px solid ${accent}`, paddingLeft: 20 }}>
                <p style={{ fontSize: 16, fontStyle: 'italic', color: 'rgba(255,255,255,.75)', lineHeight: 1.7, marginBottom: 12 }}>
                  &ldquo;{data.caseStudy.quote}&rdquo;
                </p>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{data.caseStudy.author}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}>{data.caseStudy.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service-Specific FAQ */}
      <section className="sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="sec-tag">Sıkça Sorulan Sorular</div>
          <h2 className="sec-title">Bu Hizmet Hakkında <em>Merak Edilenler</em></h2>

          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {data.faqs.map((faq, i) => (
              <div key={i} style={{
                borderRadius: 16, border: '1.5px solid var(--border)',
                background: '#fff', overflow: 'hidden',
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', padding: '20px 24px', border: 'none', background: 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    fontSize: 16, fontWeight: 700, color: 'var(--text)', cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  {faq.q}
                  <i className={`bi bi-${openFaq === i ? 'dash' : 'plus'}`} style={{ fontSize: 20, color: accent, flexShrink: 0, marginLeft: 12 }}></i>
                </button>
                <div style={{
                  maxHeight: openFaq === i ? '200px' : '0',
                  opacity: openFaq === i ? 1 : 0,
                  overflow: 'hidden', transition: 'all .3s ease',
                  padding: openFaq === i ? '0 24px 20px' : '0 24px',
                }}>
                  <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
