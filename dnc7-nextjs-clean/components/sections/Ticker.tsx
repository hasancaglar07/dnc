export default function Ticker() {
  const brands = [
    'Turkcell', 'Garanti BBVA', 'Arçelik', 'Mavi', 'Trendyol', 'Beko',
    'Getir', 'Hepsiburada', 'Yemeksepeti', 'Vestel', 'LC Waikiki', 'Migros',
    'Koçtaş', 'Bim', 'Turkish Airlines', 'Vodafone', 'Akbank',
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
        {[...brands, ...brands].reverse().map((b, idx) => (
          <div key={`b-${idx}`} className="t-item t-item-alt">
            <span className="t-star">✦</span>
            <span>{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
