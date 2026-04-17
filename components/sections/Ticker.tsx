export default function Ticker() {
  const brands = [
    'Rehnüma Dergisi', 'CW Enerji', 'Spice Hotel', 'Perfect Timing Holding', 'CoinFeedBack',
    'BookGenerator.net', 'BabyNest', 'Güney Seracılık', 'Tulu Çocuk Vakfı', 'Verenel',
    'Safa Vakfı', 'Kyp Yönetim Sistemleri', 'Tarf', 'Armas Group', 'Dr.Sufi',
    'Harbee', 'DncPro', 'Mihmandar', 'SeyrFm', 'FaceLoveApp',
  ];

  return (
    <div className="ticker ticker-dual">
      <div className="ticker-fade-l" />
      <div className="ticker-fade-r" />

      <div className="ticker-label">
        <span>BİZİ TERCİH EDEN MARKALAR</span>
      </div>

      <div className="ticker-tr">
        {[...brands, ...brands].map((b, idx) => (
          <div key={`a-${idx}`} className="t-item">
            <span>{b}</span>
            <span className="t-star">✦</span>
          </div>
        ))}
      </div>

      <div className="ticker-tr ticker-tr-rev">
        {[...brands.slice().reverse(), ...brands.slice().reverse()].map((b, idx) => (
          <div key={`b-${idx}`} className="t-item t-item-alt">
            <span className="t-star">✦</span>
            <span>{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
