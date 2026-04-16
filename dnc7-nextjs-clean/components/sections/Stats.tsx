import { stats } from '@/data/stats';

export default function Stats() {
  return (
    <section className="stats-sec">
      <div className="wrap">
        <div className="stats-g">
          {stats.map((stat, idx) => (
            <div key={stat.id} className="stat-b">
              <div className="stat-n">{stat.number}</div>
              <div className="stat-l">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
