import { type ReactElement } from 'react';
import { team } from '@/data/team';
import Reveal from '@/components/ui/Reveal';

export default function Team() {
  const socIcons: Record<string, ReactElement> = {
    linkedin: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    twitter: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    instagram: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
      </svg>
    ),
  };

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
                <div className="team-socs">
                  {(['linkedin', 'twitter', 'instagram'] as const).map((soc) => (
                    member.socials[soc] && (
                      <a key={soc} href={member.socials[soc]} className="team-soc" aria-label={soc}>
                        {socIcons[soc]}
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>
          ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
