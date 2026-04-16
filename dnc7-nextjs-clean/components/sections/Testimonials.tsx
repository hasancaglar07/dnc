import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section id="referanslar" className="sec ref-sec">
      <div className="wrap">
        <div className="sec-tag">Referanslar</div>
        <h2 className="sec-title">Müşterilerimiz <em>Neler Söylüyor?</em></h2>
        <p className="sec-sub">Birlikte çalıştığımız markaların deneyimleri</p>

        <div className="ref-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="ref-card">
              <div className="ref-q">"</div>
              <p className="ref-txt">{t.quote}</p>
              <div className="ref-stars">{'⭐'.repeat(t.rating)}</div>
              <div style={{display:'flex', gap:'12px', alignItems:'center'}}>
                <div style={{
                  width:'42px', height:'42px',
                  borderRadius:'50%',
                  background:'var(--bg3)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'20px'
                }}>👤</div>
                <div>
                  <div className="ref-name">{t.author}</div>
                  <div className="ref-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
