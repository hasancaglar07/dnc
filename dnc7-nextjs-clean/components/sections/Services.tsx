import { type ReactElement } from 'react';
import { services } from '@/data/services';

const serviceIcons: Record<number, ReactElement> = {
  1: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 10l4.553-2.069A1 1 0 0 1 21 8.82v6.36a1 1 0 0 1-1.447.889L15 14"/>
      <rect x="2" y="6" width="13" height="12" rx="3"/>
    </svg>
  ),
  2: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 2.5 7.1L16 22H8l1.5-12.9A4 4 0 0 1 12 2z"/>
      <path d="M8.5 22h7"/>
    </svg>
  ),
  3: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="6" height="6" rx="1"/>
      <path d="M3 9V6a1 1 0 0 1 1-1h3M3 15v3a1 1 0 0 0 1 1h3M15 5h3a1 1 0 0 1 1 1v3M15 19h3a1 1 0 0 0 1-1v-3"/>
    </svg>
  ),
  4: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <path d="M7 8h4M7 11h6"/>
    </svg>
  ),
  5: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="3"/>
      <path d="M12 18h.01"/>
      <path d="M9 6h6"/>
    </svg>
  ),
  6: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="3"/>
      <circle cx="17.5" cy="12" r="1.5"/>
      <circle cx="20" cy="9.5" r="0.8" fill="currentColor"/>
      <path d="M6 9v6M9 12H3"/>
    </svg>
  ),
  7: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
};

export default function Services() {
  const serviceLinks: Record<number, string> = {
    1: '/hizmetler',
    2: '/hizmetler/ai-entegrasyonu',
    3: '/hizmetler/drone-cekim',
    4: '/hizmetler/web-tasarim',
    5: '/hizmetler/mobil-uygulama',
    6: '/hizmetler/mobil-oyun',
    7: '/hizmetler/sosyal-medya',
  };

  return (
    <section id="hizmetler" className="sec svc-sec">
      <div className="wrap">
        <div className="svc-hd">
          <div>
            <div className="sec-tag">Hizmetlerimiz</div>
            <h2 className="sec-title">Size <em>Sunduğumuz</em> Değer</h2>
            <p className="sec-sub">Her projede mükemmellik için çalışıyoruz.</p>
          </div>
        </div>

        <div className="svc-grid">
          {services.map((service) => (
            <a
              key={service.id}
              href={serviceLinks[service.id]}
              className="svc-card"
              style={{ textDecoration: 'none' }}
            >
              <div className="svc-card-top">
                <div className="svc-card-ico" style={{ background: `${service.accent}15`, color: service.accent }}>
                  {serviceIcons[service.id]}
                </div>
                <span className="svc-card-num">{service.number}</span>
              </div>
              <div className="svc-card-body">
                <div className="svc-card-name">{service.name}</div>
                <div className="svc-card-desc">{service.description}</div>
              </div>
              <div className="svc-card-tags">
                {service.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="svc-card-tag" style={{ borderColor: `${service.accent}30`, color: service.accent, background: `${service.accent}08` }}>{tag}</span>
                ))}
              </div>
              <div className="svc-card-footer">
                <span className="svc-card-cta" style={{ color: service.accent }}>
                  Detaylar
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </div>
              <div className="svc-card-accent-bar" style={{ background: service.accent }}/>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
