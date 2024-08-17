import { useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
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
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 690px)' });

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll('.services-image');
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    images.forEach(image => observer.observe(image));

    return () => {
      images.forEach(image => observer.unobserve(image));
    };
  }, [handleIntersection]);

  return (
    <>
      {isTabletOrMobile ? (
        <div className="mobile-service-card">
          <h3>Our <span className="highlight">Services</span></h3>
          <div className="buttons">
            <button>Movement</button>
            <button>Certification</button>
            <button>Programs</button>
          </div>
          <div className="content-container">
            <div className="card-content">
              <h4></h4>
              <p></p>
            </div>
          </div>
          <img src="" alt="" />
        </div>
      ) : (
        <div className="services-container">
          <h3>Our <span className="service-highlight">Services</span></h3>
          <div className="services-flex-content">
            {services.map(({ header, text, img }, index) => (
              <div className={`services-row ${index % 2 === 0 ? 'row-normal' : 'row-reversed'}`} key={index}>
                <div className="services-text">
                  <h4>{header}</h4>
                  <p>{text}</p>
                </div>
                <img src={img} alt={header} className="services-image" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NursifyServices;
