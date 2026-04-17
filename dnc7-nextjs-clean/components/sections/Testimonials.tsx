import { testimonials } from '@/data/testimonials';
import Reveal from '@/components/ui/Reveal';

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#F59E0B' }}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

export default function Testimonials() {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3);

  return (
    <section id="referanslar" className="sec ref-sec" style={{ padding: '60px 0', overflow: 'hidden' }}>
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div className="sec-tag">Referanslar</div>
            <h2 className="sec-title">Müşterilerimiz Ne <em>Diyor?</em></h2>
          </div>
        </Reveal>
      </div>

      <div className="ref-marquee-wrap">
        <div className="ref-marquee ref-marquee-l">
          {[...row1, ...row1, ...row1].map((t, i) => (
            <div key={`r1-${i}`} className="ref-slide-card">
              <div className="ref-slide-stars">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <p className="ref-slide-txt">{t.quote}</p>
              <div className="ref-slide-author">
                <div className="ref-slide-avatar">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  </svg>
                </div>
                <div>
                  <div className="ref-slide-name">{t.author}</div>
                  <div className="ref-slide-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ref-marquee ref-marquee-r">
          {[...row2, ...row2, ...row2].map((t, i) => (
            <div key={`r2-${i}`} className="ref-slide-card ref-slide-card-alt">
              <div className="ref-slide-stars">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <p className="ref-slide-txt">{t.quote}</p>
              <div className="ref-slide-author">
                <div className="ref-slide-avatar">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  </svg>
                </div>
                <div>
                  <div className="ref-slide-name">{t.author}</div>
                  <div className="ref-slide-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
