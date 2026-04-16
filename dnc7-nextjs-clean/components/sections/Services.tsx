import { type ReactElement } from 'react';
import { services } from '@/data/services';

const serviceIcons: Record<number, ReactElement> = {
  1: <i className="bi bi-camera-reels" style={{ fontSize: 28 }}></i>,
  2: <i className="bi bi-rocket-takeoff" style={{ fontSize: 28 }}></i>,
  3: <i className="bi bi-cpu" style={{ fontSize: 28 }}></i>,
  4: <i className="bi bi-laptop" style={{ fontSize: 28 }}></i>,
  5: <i className="bi bi-phone" style={{ fontSize: 28 }}></i>,
  6: <i className="bi bi-controller" style={{ fontSize: 28 }}></i>,
  7: <i className="bi bi-megaphone" style={{ fontSize: 28 }}></i>,
  8: <i className="bi bi-cart4" style={{ fontSize: 28 }}></i>,
  9: <i className="bi bi-badge-ad" style={{ fontSize: 28 }}></i>,
};

const serviceLinks: Record<number, string> = {
  1: '/hizmetler',
  2: '/hizmetler/ai-entegrasyonu',
  3: '/hizmetler/drone-cekim',
  4: '/hizmetler/web-tasarim',
  5: '/hizmetler/mobil-uygulama',
  6: '/hizmetler/mobil-oyun',
  7: '/hizmetler/sosyal-medya',
  8: '/hizmetler/e-ticaret-danismanligi',
  9: '/hizmetler/reklam-yonetimi',
};

export default function Services() {
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

        <div className="svc-list">
          {services.map((service) => (
            <a
              key={service.id}
              href={serviceLinks[service.id] || '/hizmetler'}
              className="svc-item"
              style={{ textDecoration: 'none' }}
            >
              <div className="svc-n">{service.number}</div>
              <div>
                <div className="svc-name">
                  <span style={{ color: service.accent, marginRight: 8 }}>{serviceIcons[service.id]}</span>
                  {service.name}
                </div>
                <div className="svc-desc">{service.description}</div>
              </div>
              <div className="svc-arr">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
