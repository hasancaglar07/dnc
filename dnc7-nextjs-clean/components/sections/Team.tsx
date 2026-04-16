import { team } from '@/data/team';
import Image from 'next/image';

export default function Team() {
  return (
    <section id="ekip" className="sec" style={{backgroundColor: 'var(--bg2)'}}>
      <div className="wrap">
        <div className="sec-tag">Ekibimiz</div>
        <h2 className="sec-title">Profesyonel <em>Kadromuz</em></h2>
        <p className="sec-sub">Yaratıcı ve deneyimli ekibimizle tanışın</p>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '18px', marginTop: '44px'}}>
          {team.map((member) => (
            <div key={member.id} style={{textAlign: 'center'}}>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                height: '280px',
                marginBottom: '14px',
                position: 'relative'
              }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <h3 style={{fontSize: '16px', fontWeight: 700, color: 'var(--text)'}}>{member.name}</h3>
              <p style={{fontSize: '13px', color: 'var(--muted)', marginTop: '2px', marginBottom: '10px'}}>{member.role}</p>
              <div style={{display: 'flex', justifyContent: 'center', gap: '7px'}}>
                {['linkedin', 'twitter', 'instagram'].map((soc) => (
                  <a key={soc} href={member.socials[soc as keyof typeof member.socials]} style={{
                    width: '32px', height: '32px',
                    borderRadius: '50%',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--muted)', fontSize: '13px',
                    textDecoration: 'none',
                    transition: 'all 0.15s'
                  }}>
                    <i className={`bi bi-${soc}`}></i>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
