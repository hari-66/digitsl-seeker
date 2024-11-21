import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Experience = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">Testimonials</h2>
      <p className="testimonials-description">
        Hear from our satisfied clients! Read our testimonials to learn more
        about our services.
      </p>
      <Slider {...settings}>
        {/* Card 1 */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            "This service is fantastic! My business has seen remarkable growth
            since we started using it."
          </p>
          <p className="testimonial-author">- John Doe</p>
        </div>
        {/* Card 2 */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            "The experience was amazing. I highly recommend their services!"
          </p>
          <p className="testimonial-author">- Jane Smith</p>
        </div>
        {/* Card 3 */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            "Outstanding service with great results. Highly satisfied!"
          </p>
          <p className="testimonial-author">- Mark Taylor</p>
        </div>
        {/* Card 4 */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            "Our traffic increased by 50%! A fantastic service."
          </p>
          <p className="testimonial-author">- Lisa Brown</p>
        </div>
      </Slider>
    </div>
  );
};

export default Experience;
