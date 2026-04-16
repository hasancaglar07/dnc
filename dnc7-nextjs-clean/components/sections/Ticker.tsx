export default function Ticker() {
  const items = ['Prodüksiyon', 'Yapay Zeka', 'Drone Çekimi', 'Web Tasarım', 'Video Prodüksiyon', 'AI Entegrasyon', 'E-Ticaret', 'Kurumsal'];

  return (
    <div className="ticker">
      <div className="ticker-tr">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="t-item">
            {item}
            <span className="t-dot"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
