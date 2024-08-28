// import { useMediaQuery } from 'react-responsive';
import { IconContext } from "react-icons";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import '../styles/Contact.css'; // Fixed spacing issue

const Contact: React.FC = () => {
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
      {/* {isTabletOrMobile ? (
        <div id="contact">
          <div className="contact-container">
            <div className="contact-head">
              <h3>
                Get in touch with <span className="highlight">Nursify Education!</span>
              </h3>
            </div>
            <div className="contact-flex">
              <div className="contact-image">
                <img src="/contact.jpg" alt="Contact Nursify Education" width="125" height="125" />
              </div>
              <div className="contact-body">
                <p>
                  We’d love to hear from you! Contact us at{' '}
                  <a href="mailto:admin@nursifyeducation.com">admin@nursifyeducation.com</a>, follow us on Instagram{' '}
                  <a href="https://www.instagram.com/nursify.education/?igshid=YmMyMTA2M2Y=">@NursifyEducation</a>, or just click{' '}
                  <a href="mailto:admin@nursifyeducation.com">here</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : ( */}
        <div id="contact">
          <section className="contact-container-lg">
            <div className="contact-header-lg">
              <h3>
                Get in touch with <span className="highlight">Nursify Education!</span>
              </h3>
            </div>
            <div className="contact-body-lg">
              <div className="contact-image-lg">
                <img src="/contact.jpg" alt="Contact Nursify Education" />
              </div>
              <div className="contact-content-lg">
                <h4>We'd love to hear from you!</h4>
                <div className="container-links">
                <IconContext.Provider value={{ size: "35px", color: "var(--accent-color)" }}>
                  <MdOutlineEmail href='mailto:admin@nursifyeducation.com' style={{cursor: 'pointer'}} />
                </IconContext.Provider>
                  <p>Email us at <a href="mailto:admin@nursifyeducation.com">admin@nursifyeducation.com</a></p>
                </div>
                <div className="container-links">
                  <IconContext.Provider value={{ size: "35px", color: "var(--accent-color)" }}>
                    <FaInstagram href='https://www.instagram.com/nursify.education/?igshid=YmMyMTA2M2Y'style={{cursor: 'pointer'}}/>
                  <p>Follow us <a href="https://www.instagram.com/nursify.education/?igshid=YmMyMTA2M2Y=">
                      @NursifyEducation
                    </a>
                    </p>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </section>
        </div>
      {/* )} */}
    </>
  );
};

export default Contact;
