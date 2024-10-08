import { useEffect } from 'react';

import '../styles/Certification.css'

const NursifyCertification: React.FC = () => {
  useEffect(() => {
    const certificationContainer = document.querySelector('.certification-container');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.1 
    });

    if (certificationContainer) {
      observer.observe(certificationContainer);
    }

 
    return () => {
      if (certificationContainer) {
        observer.unobserve(certificationContainer);
      }
    };
  }, []);

  return (
    <>
      <div className="certification-bg">
        <div className="certification-container">
          <div className="header-container">
            <h3>
              <span className="highlight">Unlock</span> Your <span className="highlight">Potential</span> - <span className="wrapping-text">Nursify Certification</span>
            </h3>
          </div>
          <div className="certification-content-container">
            <p>
              As a nurse, you're a hero to so many of the lives you touch. What if we told you there’s a way to elevate your impact even further? Earning our <a className="highlight wrapping-text" href='https://nursifyeducation.com/group-type-selection'>Nursify Certification</a> indicates your mastery of transfers and mobility to the people around you.
            </p>

            <p>
              Prove to employers you have the skills, talent and expertise to deliver patient care better than most. This certification showcases your commitment to excellence, top-notch patient care and most importantly your safety & the safety of your patients.
            </p>

            <p>
              Consider this your exclusive invitation to <a href="https://nursifyeducation.app.clientclub.net/login" className="highlight">invest in yourself</a>—not just for your career, but for the lives you touch every day. It’s time to take the next big step forward on your journey of growth and fulfillment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NursifyCertification;
