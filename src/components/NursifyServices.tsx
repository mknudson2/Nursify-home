import {  useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import '../styles/Services.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
const services = [
  {
    header: ( 
    <>Good Movement = <span className='service-highlight'>Improvement</span></>
    ),
    text:( <>Begin your transformative journey <a href="#modules" className="highlight">HERE</a>. This <a href='#modules' >9-module course</a> educates you on moving your patients safely in and out of bed with ease. Each module identifies the fundamental strategies to save you time & energy while protecting you from injury, burnout & imposter syndrome. Nurses in every setting are expected to perform these tasks, but so few are formally trained. <a href="#about">Welcome to Nursify Education</a>!</>),
    img: "/movement.png",
    altText: "Good Movement = Improvement",
    linkedImage: ""
  },
  {
    header: (<><span className="service-highlight">Certify</span> with <span className="service-highlight">Nursify</span></>),
    text: (<>Our passion is empowering, educating and training nurses so they can achieve new heights they didn't think were possible in the hope that they can do the same for their patients. Show your employer you have a skillset very few nurses ever formally acquired. By completing our <a href="#modules">9-module course</a>, you'll receive our official certification that proves you can transfer and move patient's <span>better than most.</span></>),
    img: "/certified.jpg",
    altText: "Certify with Nursify",
    linkedImage: ""
  },
  {
    header: (<><a href="https://theotprofessor.com/group-type-selection">Nursing Schools & Employers <span style={{color: 'white'}}>-</span> <br/><span style={{color: 'white'}}>This is for you!</span></a></>),
    text: (<>Research indicates most nurses aren't receiving enough training on the clinical or soft skills required to optimally perform their jobs. We have created the solution and are ready to flexibly integrate it into your curriculums while minding your budget! Find a flexible plan for your University, Hospital, or Team. Students and faculty all the way to veteran nurses will be equipped for success better than ever. Nursify supports our members every step of the way.</>),
    img: "/nurses.jpg",
    altText: "Nursing Schools & Employers - This is for you!",
    linkedImage: "https://theotprofessor.com/group-type-selection"
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
        <>
          <div className="services-header">
            <h3>Our <span className="service-highlight">Services</span></h3>
          </div>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            loop={true}
            className="mySwiper"
          >
            {services.map((card, key) => (
              <SwiperSlide 
                key={key}
                style={{
                  boxShadow: '4px 4px 8px black',
              }}>
                <div className="card-content">
                  <div className="card-top">
                    <h4>{card.header}</h4>
                    <img src={card.img} alt={card.altText} className="card-image" />
                  </div>
                  <p>{card.text}</p>
                  </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <div className="services-container">
          <h3>Our <span className="service-highlight">Services</span></h3>
          <div className="services-flex-content">
            {services.map(({ header, text, img, altText, linkedImage }, index) => (
              <div className={`services-row ${index % 2 === 0 ? 'row-normal' : 'row-reversed'}`} key={index}>
                <div className="services-text">
                  <h4>{header}</h4>
                  <p>{text}</p>
                </div>
                <a href={linkedImage}>
                  <img src={img} alt={altText} className="services-image" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NursifyServices;
