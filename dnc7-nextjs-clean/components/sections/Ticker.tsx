export default function Ticker() {
  const items = [
    'Prodüksiyon', 'Yapay Zeka', 'Drone Çekimi', 'Web Tasarım',
    'Video Prodüksiyon', 'AI Entegrasyon', 'E-Ticaret', 'Kurumsal',
    'Mobil Uygulama', 'Reklam Yönetimi', 'Sosyal Medya', 'Mobil Oyun',
  ];

  return (
    <div className="ticker">
      {/* Gradient fade edges */}
      <div className="ticker-fade-l" />
      <div className="ticker-fade-r" />

      {/* Forward track */}
      <div className="ticker-tr">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="t-item">
            <span className="t-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
