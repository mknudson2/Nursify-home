import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import '../styles/CTA.css'; 

const ConsultationButton = styled(Button)({
  backgroundColor: 'var(--accent-color)',
  color: 'white',
  padding: '10px 20px',
  fontSize: '1.25rem',
  borderRadius: '50px',
  '&:hover': {
    backgroundColor: 'var(--accent-color-dark)',
  },
});

interface FreeConsultationCTAProps {
  message: string;
  onClick: () => void;
  backgroundImage: string;
}

const FreeConsultationCTA: React.FC<FreeConsultationCTAProps> = ({ message, onClick, backgroundImage }) => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctaElement = ctaRef.current;

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

    if (ctaElement) {
      observer.observe(ctaElement);
    }

    return () => {
      if (ctaElement) {
        observer.unobserve(ctaElement);
      }
    };
  }, []);

  return (
    <div ref={ctaRef} className="cta-container">
      <div className="cta-background" style={{ backgroundImage: `url(${backgroundImage})` }} ></div>
      <p className="cta-message">{message}</p>
      <ConsultationButton variant="contained" onClick={onClick}>
        Get Your Free Consultation
      </ConsultationButton>
    </div>
  );
};

export default FreeConsultationCTA;
