import { IconContext } from "react-icons";
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa";
import Fab from '@mui/material/Fab';
import { styled } from '@mui/system';

import '../styles/Footer.css';

const FabButton = styled(Fab)({
    position: 'fixed',
    fontSize: '.8rem',
    bottom: '7rem',
    right: '1rem',
    zIndex: 2000,
    backgroundColor: 'var(--accent-color)',
    color: 'white', '&:hover' :{
        backgroundColor: 'var(--accent-color-dark)'
    },
  });

const Footer = () => {
  return (
    <>
        <section className="footer-whole">
            <div className="footer-container">
                <p>&copy; Copyright Nursify Eduction, 2024</p>
                <div className="social-media">
                    <IconContext.Provider value={{ size: "25px", color: "var(--accent-color)" }}>
                        <FaFacebook />
                        <FaInstagram href="https://www.instagram.com/nursify.education/?igsh=Z253cHQ3ZXYzbDM3&utm_source=qr"/>
                        <FaTiktok href="https://www.tiktok.com/@theotprofessor?_t=8p4UQWE3IR5&_r=1"/>
                        <FaYoutube />
                    </ IconContext.Provider>
                </div>
                <div className="legal-links">
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>

            </div>
            <FabButton variant="extended" color="primary" href='https://theotprofessor.com/group-type-selection'>
                Free Consultation!
            </FabButton>
        </section>
    </>
  )
}

export default Footer;