import'../styles/Contact.css'

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-head">
          <h3>Get in touch with <span className="highlight">Nursify Education!</span></h3>
        </div>
        <div className="contact-flex">
            <div className="contact-image">
              <img src="/contact.jpg" alt="Contact Nursify Education" width="125" height="125" />
            </div>   
            <div className="contact-body">
              <p>
              We’d love to hear from you! Contact us at <a href="mailto:admin@nursifyeducation.com">admin@nursifyeducation.com</a>, follow us on Instagram @NursifyEducation or just click <a href="mailto:admin@nursifyeducation.com">here</a>.
              </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact