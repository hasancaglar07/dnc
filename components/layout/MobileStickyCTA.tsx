'use client';

export default function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta">
      <a href="tel:+905543794695" className="mobile-sticky-btn mobile-sticky-btn--call">
        <i className="bi bi-telephone-fill"></i> Ara
      </a>
      <a href="https://wa.me/905543794695" target="_blank" rel="noopener noreferrer" className="mobile-sticky-btn mobile-sticky-btn--wa">
        <i className="bi bi-whatsapp"></i> WhatsApp
      </a>
    </div>
  );
}
