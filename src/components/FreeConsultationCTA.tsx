import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import '../styles/CTA.css'; 

const ConsultationButton = styled(Button)({
  backgroundColor: 'var(--accent-color)',
  color: 'white',
  padding: '10px 20px',
  fontSize: '1.25rem',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: 'var(--accent-color-dark)',
  },
});

interface FreeConsultationCTAProps {
  message: string;
  onClick: () => void;
}

const FreeConsultationCTA: React.FC<FreeConsultationCTAProps> = ({ message, onClick }) => {
  return (
    <div className="cta-container">
      <div className="cta-background"></div> {/* Background element */}
      <p className="cta-message">{message}</p>
      <ConsultationButton variant="contained" onClick={onClick}>
        Get Your Free Consultation
      </ConsultationButton>
    </div>
  );
};

export default FreeConsultationCTA;