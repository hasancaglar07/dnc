import { testimonials } from '@/data/testimonials';
import Reveal from '@/components/ui/Reveal';

export default function Testimonials() {
  return (
    <section id="referanslar" className="sec ref-sec">
      <div className="wrap">
        <Reveal>
          <div className="ref-hd">
            <div>
              <div className="sec-tag">Referanslar</div>
              <h2 className="sec-title">Müşterilerimiz <em>Neler Söylüyor?</em></h2>
              <p className="sec-sub">Birlikte çalıştığımız markaların deneyimleri</p>
            </div>
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="ref-grid">
            {testimonials.map((t) => (
            <div key={t.id} className="ref-card">
              {/* Stars */}
              <div className="ref-stars-row">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#F59E0B' }}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              <p className="ref-txt">{t.quote}</p>

              <div className="ref-author">
                <div className="ref-avatar">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--muted)' }}>
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  </svg>
                </div>
                <div>
                  <div className="ref-name">{t.author}</div>
                  <div className="ref-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
