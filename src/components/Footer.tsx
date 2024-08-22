import { IconContext } from "react-icons";
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import '../styles/Footer.css';

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
                        <FaXTwitter />
                        <FaYoutube />
                    </ IconContext.Provider>
                </div>
                <div className="legal-links">
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>

            </div>
        </section>
    </>
  )
}

export default Footer;