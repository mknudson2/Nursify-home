import '../styles/About.css';


const About = () => {
  return (
    <>
    <section className="about-flex" id="about">
        <div className="about-head">
            <h3>What is <span className="highlight">Nursify Education</span>?</h3> 
        </div>
        <div className="about-mission">
            <h4>Our Mission</h4>
            <p>We are dedicated to empowering our members and partners while surpassing their expectations continuously. At our core, we are an evidence-based and innovative resource for nurses & nursing students built to enhance their competencies and abilities to perform their job responsibilities with increased confidence, safety, and efficiency leading to decreased risk of injury and burnout.</p>
        </div>
        <div className="about-story">
            <h4>Our Story</h4>
            <p>Nursify Education was born out of a passion for helping others accomplish demanding tasks efficiently and overcoming overwhelming obstacles they didn’t believe they could master. We have successfully educated, coached, and mentored hundreds of healthcare professionals and wanted to find a way to grow from helping hundreds to helping tens of thousands. Our passion has allowed us to transform people’s lives who are then empowered to more confidently change the lives of the people around them, particularly their patients.</p>
        </div>
        <div className="about-serve">
            <h4>Who We Serve</h4>
            <p>We proudly serve nurses, nursing students, Nursing programs, Universities, and employers of nurses. Our products/services are designed to provide direct, educational, and transformative content in-person and virtually. Nurses are expected to do it all when they’re given so little! They deserve better; they deserve the best!</p>
        </div>
        <div className="about-vision">
            <h4>Our Vision</h4>
            <p>250k Nurses will have experienced the paradigm-shifting training that Nursify Education offers by 2030 (The year we hope to start to reduce the effects of the Nursing Shortage). Looking ahead, we aim to be the premier, supplementary education tool for nurses and nursing students. We are excited about the journey ahead as we deliver on simplifying the complex, providing a surplus of value, and doing it as inexpensively as possible. We hope you join us.</p>
        </div>
        <div className="about-contact" id='aboutContact'>
            <p>We’d love to hear from you! Contact us at <a href="mailto:admin@nursifyeducation.com">admin@nursifyeducation.com</a> and follow us on Instagram <span className="highlight">@NursifyEducation</span> or just click <a href="https://www.instagram.com/nursify.education/?igsh=Z253cHQ3ZXYzbDM3&utm_source=qr">here</a>.</p>
        </div>
    </section>
    </>
  )
}

export default About