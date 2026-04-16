import { stats } from '@/data/stats';
import Reveal from '@/components/ui/Reveal';

export default function Stats() {
  return (
    <section className="stats-sec">
      <div className="wrap">
        <Reveal stagger>
          <div className="stats-g">
            {stats.map((stat) => (
              <div key={stat.id} className="stat-b">
                <div className="stat-n">{stat.number}</div>
                <div className="stat-l">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
