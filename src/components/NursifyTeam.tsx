import { useState } from 'react';
import '../styles/NursifyTeam.css';

function NursifyTeam() {
  const [activeMember, setActiveMember] = useState<'Philip' | 'Jason'>('Philip');

  const members = {
    Philip: {
      name: 'Philip Lamoreaux, CEO of Nursify',
      image: '/Phil.png',
      bio: `, known as "The OT Professor" on social media, is a seasoned occupational therapist, certified personal trainer, and the founder of Nursify™ Education. With a Doctorate of Occupational Therapy from the University of Nevada - Las Vegas (UNLV) and a background in neurological rehabilitation, Philip specializes in High-Intensity Training (HIT) for improving motor skills in patients with stroke, spinal cord injuries, and traumatic brain injuries.`,
    },
    Jason: {
      name: 'Jason Freed, COO of Nursify,',
      image: '/Jason.png',
      bio: `is former Marketing Executive who made a meaningful change in his life to do the same for others. He has been an Occupational Therapist for over 8 years and worked in some of the most challenging settings. Through his many leadership roles, along with mentoring, coaching, and training hundreds of PCPs, Nurses, and therapists, he has identified the most beneficial soft skills any clinician could learn to thrive in healthcare.`,
    },
  };

  return (
    <div className="nursify-team">
      <h3><span className="highlight">Meet</span> Your Nursify Team</h3>
      <div className="toggle-switch">
        <div
          className="toggle-background"
          style={{
            transform: activeMember === 'Philip' ? 'translateX(0)' : 'translateX(95%)',
            boxShadow: activeMember === 'Philip' ? '4px 4px 8px rgba(0, 0, 0, 0.7)' : '-4px 4px 8px rgba(0, 0, 0, 0.7)'
          }}
        />
        <span
          className={`toggle-option ${activeMember === 'Philip' ? 'active' : ''}`}
          onClick={() => setActiveMember('Philip')}
        >
          Philip Lamoreaux
        </span>
        <span
          className={`toggle-option ${activeMember === 'Jason' ? 'active' : ''}`}
          onClick={() => setActiveMember('Jason')}
        >
          Jason Freed
        </span>
      </div>
      <div className="team-content">
        <div className="image-column">
          <img src={members[activeMember].image} alt={members[activeMember].name} />
        </div>
        <div className="bio-column">
          <p><span className="highlight">{members[activeMember].name}</span> {members[activeMember].bio}</p>
        </div>
      </div>
    </div>
  );
}

export default NursifyTeam;