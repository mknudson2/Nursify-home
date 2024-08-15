import React from 'react';
import '../styles/Services.css';

const services = [
  {
    header: "Good Movement = Improvement",
    text: "Begin your transformative journey HERE. This 9-module course educates you on moving your patients safely in and out of bed with ease. Each module identifies the fundamental strategies to save you time & energy while protecting you from injury, burnout & imposter syndrome. Nurses in every setting are expected to perform these tasks, but so few are formally trained. Welcome to Nursify!",
    img: "/mobility.webp"
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




// import { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore from 'swiper/core';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import '../styles/Services.css';

// SwiperCore.use([Pagination]);

// const NursifyServices: React.FC = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const [activeHeader, setActiveHeader] = useState<string>("");

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     if (isMobile && services.length > 0) {
//       setActiveHeader(services[0].header);
//     }
//   }, [isMobile]);

//   const services = [
//     {
//       header: "Good Movement = Improvement",
//       text: "Begin your transformative journey HERE. This 9-module course educates you on moving your patients safely in and out of bed with ease. Each module identifies the fundamental strategies to save you time & energy while protecting you from injury, burnout & imposter syndrome. Nurses in every setting are expected to perform these tasks, but so few are formally trained. Welcome to Nursify!",
//       img: "/mobility.webp"
//     },
//     {
//       header: "Get Certified with Nursify",
//       text: "Our passion is empowering, educating and training nurses so they can achieve new heights they didn't think were possible in the hope that they can do the same for their patients. Show your employer you have a skillset very few nurses ever formally acquired. By completing our 9-module course, you'll receive our official certification that proves you can transfer and move patient's better than most.",
//       img: "/certified.jpg"
//     },
//     {
//       header: "Nursing Programs - Your Competitive Advantage!",
//       text: "Research indicates most nurses aren't receiving enough training on the clinical or soft skills required to optimally perform their jobs. We have created the solution and are ready to flexibly integrate it into your curriculums while minding your budget! Find a flexible plan for your University, Hospital, or Team. Students and faculty all the way to veteran nurses will be equipped for success better than ever. Nursify supports our members every step of the way.",
//       img: "/nurses.jpg"
//     }
//   ];

//   useEffect(() => {
//     if (isMobile && services.length > 0) {
//       setActiveHeader(services[0].header);
//     }
//   }, [isMobile]);

//   const handleSlideChange = (swiper: any) => {
//     const activeIndex = swiper.activeIndex;
//     setActiveHeader(services[activeIndex].header);
//   };

//   return (
//     <div className="services-container">
//       <h3>Our <span className="service-highlight">Services</span></h3>
//       <div className="services-flex-content">
//         <div className="services-container-rows">
//           <div className="services-text">
//             <h4>Good Movement = Improvement</h4>
//             <p>Begin your transformative journey HERE. This 9-module course educates you on moving your patients safely in and out of bed with ease. Each module identifies the fundamental strategies to save you time & energy while protecting you from injury, burnout & imposter syndrome. Nurses in every setting are expected to perform these tasks, but so few are formally trained. Welcome to Nursify</p>
//           </div>
//           <img src="/mobility.webp" alt="" />
//         </div>
//         <div className="services-container-rows">
//           <h4>Get Certified with Nursify</h4>
//           <p>Our passion is empowering, educating and training nurses so they can achieve new heights they didn't think were possible in the hope that they can do the same for their patients. Show your employer you have a skillset very few nurses ever formally acquired. By completing our 9-module course, you'll receive our official certification that proves you can transfer and move patient's better than most.</p>
//           <img src="/certified.jpg" alt="" />
//         </div>
//         <div className="services-container-rows">
//           <h4>Nursing Programs - Your Competitive Advantage!</h4>
//           <p>Research indicates most nurses aren't receiving enough training on the clinical or soft skills required to optimally perform their jobs. We have created the solution and are ready to flexibly integrate it into your curriculums while minding your budget! Find a flexible plan for your University, Hospital, or Team. Students and faculty all the way to veteran nurses will be equipped for success better than ever. Nursify supports our members every step of the way.</p>
//           <img src="/nurses.jpg" alt="" />
//         </div>
//       </div>
//     </div>
    
    
    
    
    
    // <div className="services-container">
    //   <h3 className="services-header">
    //     Our <span className="highlight">Services</span>
    //   </h3>
    //   {isMobile ? (
    //     <>
    //       <h4 className="mobile-service-header">{activeHeader}</h4>
    //       <Swiper
    //         spaceBetween={50}
    //         slidesPerView={1}
    //         pagination={{ clickable: true }}
    //         onSlideChange={handleSlideChange}
    //         effect="cards"
    //       >
    //         {services.map((service, index) => (
    //           <SwiperSlide key={index} style={{ backgroundImage: `url(${service.img})` }}>
    //             <div className="service-text">
    //               <p>{service.text}</p>
    //             </div>
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>
    //     </>
    //   ) : (
    //     services.map((service, index) => (
    //       <div className="service-row" key={index}>
    //         {index % 2 === 0 ? (
    //           <>
    //             <div className="service-text">
    //               <h4>{service.header}</h4>
    //               <p>{service.text}</p>
    //             </div>
    //             <div className="service-image-container">
    //               <img src={service.img} alt={`Service ${index + 1}`} className="service-image" />
    //             </div>
    //           </>
    //         ) : (
    //           <>
    //             <div className="service-image-container">
    //               <img src={service.img} alt={`Service ${index + 1}`} className="service-image" />
    //             </div>
    //             <div className="service-text">
    //               <h4>{service.header}</h4>
    //               <p>{service.text}</p>
    //             </div>
    //           </>
    //         )}
    //       </div>
    //     ))
    //   )}
    // </div>
//   );
// };

// export default NursifyServices;
