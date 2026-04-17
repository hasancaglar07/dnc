'use client';

import { type ReactElement } from 'react';
import { services } from '@/data/services';
import Reveal from '@/components/ui/Reveal';

const serviceIcons: Record<number, ReactElement> = {
  1: <i className="bi bi-camera-reels"></i>,
  2: <i className="bi bi-cpu"></i>,
  3: <i className="bi bi-send"></i>,
  4: <i className="bi bi-code-slash"></i>,
  5: <i className="bi bi-phone"></i>,
  6: <i className="bi bi-controller"></i>,
  7: <i className="bi bi-megaphone"></i>,
  8: <i className="bi bi-cart4"></i>,
  9: <i className="bi bi-badge-ad"></i>,
};

const serviceLinks: Record<number, string> = {
  1: '/hizmetler/produksiyon-filmleri',
  2: '/hizmetler/ai-entegrasyonu',
  3: '/hizmetler/drone-cekim',
  4: '/hizmetler/web-tasarim',
  5: '/hizmetler/mobil-uygulama',
  6: '/hizmetler/mobil-oyun',
  7: '/hizmetler/sosyal-medya',
  8: '/hizmetler/e-ticaret-danismanligi',
  9: '/hizmetler/reklam-yonetimi',
};

// Bento size slots per service
const bentoSize: Record<number, string> = {
  1: 'bento-wide',
  2: 'bento-tall',
  3: 'bento-std',
  4: 'bento-wide',
  5: 'bento-wide',
  6: 'bento-std',
  7: 'bento-std',
  8: 'bento-std',
  9: 'bento-std',
};

const isDark: Record<number, boolean> = {
  1: true,
};

export default function Services() {
  return (
    <section id="hizmetler" className="sec svc-sec">
      <div className="wrap">
        <Reveal>
          <div className="svc-hd">
            <div>
              <div className="sec-tag">Hizmetlerimiz</div>
              <h2 className="sec-title">İşletmenizi <em>Büyüten</em> 9 Dijital Çözüm</h2>
              <p className="sec-sub">Tek çatı altında prodüksiyondan AI&apos;a — zamandan ve bütçeden tasarruf edin.</p>
            </div>
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="bento-grid">
            {services.map((service) => (
              <a
                key={service.id}
                href={serviceLinks[service.id] || '/hizmetler'}
                className={`bento-card ${bentoSize[service.id]} ${isDark[service.id] ? 'bento-dark' : ''}`}
                style={{ '--card-accent': service.accent } as React.CSSProperties}
              >
                <span className="bento-num">{service.number}</span>

                <div className="bento-body">
                  <span className="bento-icon">{serviceIcons[service.id]}</span>
                  <h3 className="bento-name">{service.name}</h3>
                  <p className="bento-desc">{service.description}</p>

                  <div className="bento-tags">
                    {service.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="bento-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <span className="bento-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>

                <span className="bento-shine" aria-hidden="true" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
