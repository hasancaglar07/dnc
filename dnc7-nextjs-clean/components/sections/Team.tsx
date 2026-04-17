import { team } from '@/data/team';
import Reveal from '@/components/ui/Reveal';

export default function Team() {
  return (
    <section id="ekip" className="sec team-sec">
      <div className="wrap">
        <Reveal>
          <div>
            <div className="sec-tag">Ekibimiz</div>
            <h2 className="sec-title">Profesyonel <em>Kadromuz</em></h2>
            <p className="sec-sub">Yaratıcı ve deneyimli ekibimizle tanışın</p>
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="team-grid">
            {team.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-img">
                <img
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
