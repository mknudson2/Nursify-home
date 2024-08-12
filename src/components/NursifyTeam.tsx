import { useState } from 'react'

import '../styles/NursifyTeam.css'

function NursifyTeam() {
    const [activeMember, setActiveMember] = useState<'Philip' | 'Jason'>('Philip');

    const members = {
        Philip: {
            name: 'Philip Lamoreaux, CEO of Nursify',
            image: '/Phil.png',
            bio: `, known as The OT Professor on social media, is a seasoned occupational therapist, certified personal trainer, and the founder of Nursify™ Education. With a Doctorate of Occupational Therapy from the University of Nevada - Las Vegas (UNLV) and a background in neurological rehabilitation, Philip specializes in High-Intensity Training (HIT) for improving motor skills in patients with stroke, spinal cord injuries, and traumatic brain injuries.`,
        },
        Jason: {
            name: 'Jason Freed, COO of Nursify',
            image: '/Jason.png',
            bio: `Jason Freed is a former Marketing Executive who made a meaningful change by becoming an OT. He has worked in most settings and as a Director of Rehab during the Pandemic. He has mentored hundreds of clinicians.`,
        },
    };
    

    return (
        <div className="nursify-team">
            <h3><span className="highlight">Meet</span> Your Nursify Team</h3>
            <div className="toggle-switch">
                <div
                    className="toggle-background"
                    style={{
                        transform: activeMember === 'Philip' ? 'translateX(0)' : 'translateX(95%)'
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

export default NursifyTeam