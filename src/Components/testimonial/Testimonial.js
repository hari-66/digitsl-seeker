import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper data-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading content-text">Testimonials</h1>
        <p className="para-testimonial">
          Our Great Indian Growth Story for Both The Seeker & The Giver.
          Creating more Job Opportunities and faster placement cycle (0 to 3)
          skilled work force in the world's fastest growing economy.
        </p>
      </div>
      <div className="slider-container">
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonial;
