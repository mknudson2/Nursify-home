import Fab from '@mui/material/Fab';
import { styled } from '@mui/system';

import '../styles/Hero.css';

const FabButton = styled(Fab)({
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: 2000,
    backgroundColor: 'var(--accent-color)',
    color: 'white', '&:hover' :{
        backgroundColor: 'var(--accent-color-dark)'
    },
  });

function Hero() {
    return (
        <>
            <div className="hero-container">
                <video className="hero-video" autoPlay loop muted>
                    <source src="https://storage.googleapis.com/msgsndr/LXS2IKeUcdo35swibTLp/media/668b35984a1876758620ac6f.mp4" type="video/mp4" />
                    
                </video>
                <h1>Move Your Patients</h1>
                <h2>Safely, Confidently, and Efficiently</h2>
            </div>
            <FabButton variant="extended" color="primary" href='https://nursifyeducation.com/group-type-selection'>
                Free Consultation!
            </FabButton>
        </>
    );
}

export default Hero;
