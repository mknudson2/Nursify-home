import { useEffect } from 'react';
import '../styles/Services.css';

const services = [
  {
    header: "Good Movement = Improvement",
    text: "Begin your transformative journey HERE. This 9-module course educates you on moving your patients safely in and out of bed with ease. Each module identifies the fundamental strategies to save you time & energy while protecting you from injury, burnout & imposter syndrome. Nurses in every setting are expected to perform these tasks, but so few are formally trained. Welcome to Nursify!",
    img: "/movement.png"
  },
  {
    header: "Get Certified with Nursify",
    text: "Our passion is empowering, educating and training nurses so they can achieve new heights they didn't think were possible in the hope that they can do the same for their patients. Show your employer you have a skillset very few nurses ever formally acquired. By completing our 9-module course, you'll receive our official certification that proves you can transfer and move patient's better than most.",
    img: "/certified.jpg"
  },
  {
    header: "Nursing Programs - Your Competitive Advantage!",
    text: "Research indicates most nurses aren't receiving enough training on the clinical or soft skills required to optimally perform their jobs. We have created the solution and are ready to flexibly integrate it into your curriculums while minding your budget! Find a flexible plan for your University, Hospital, or Team. Students and faculty all the way to veteran nurses will be equipped for success better than ever. Nursify supports our members every step of the way.",
    img: "/nurses.jpg"
  }
];

const NursifyServices: React.FC = () => {
  useEffect(() => {
    const images = document.querySelectorAll('.services-image');

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

    images.forEach(image => {
      observer.observe(image);
    });

    return () => {
      images.forEach(image => {
        observer.unobserve(image);
      });
    };
  }, []);
  
  return (
    <div className="services-container">
      <h3>Our <span className="service-highlight">Services</span></h3>
      <div className="services-flex-content">
        {services.map((service, index) => (
          <div className={`services-row ${index % 2 === 0 ? 'row-normal' : 'row-reversed'}`} key={index}>
            <div className="services-text">
              <h4>{service.header}</h4>
              <p>{service.text}</p>
            </div>
            <img src={service.img} alt={service.header} className="services-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NursifyServices;
