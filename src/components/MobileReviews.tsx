import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import { testimonials } from '../data/testimonialsData';
import '../styles/MobileReviews.css';

// Styled Rating Component
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: 'var(--accent-color)', // Customize the star color
  },
});

const MobileReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="slide-content">
              {/* Name */}
              <div className="slide-top-flex">
                <div className="slide-top-text">
                  <div className="slide-name">
                    <h4>{testimonial.name}</h4>
                  </div>
                  {/* Title */}
                  <div className="slide-title">
                    <p>{testimonial.title}</p>
                  </div>
                </div>
                {/* Image */}
                <div className="slide-image">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>
              </div>

              {/* Review */}
              <div className="slide-review">
                <p>{testimonial.review}</p>
              </div>

              {/* Rating */}
              <div className="slide-rating">
                <StyledRating
                  name="read-only"
                  value={testimonial.rating} // The rating value from your data
                  readOnly
                  precision={0.5} // Half-star precision
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Display keyphrase and fullReview based on active slide */}
      <div className="active-slide-details">
        <h3>{testimonials[activeIndex].keyphrase}</h3>
        <p>{testimonials[activeIndex].fullReview}</p>
      </div>
    </>
  );
};

export default MobileReviews;
