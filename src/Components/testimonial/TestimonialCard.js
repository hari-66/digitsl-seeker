import React from "react";
import "./scroll.css";
import profileimg from "../../Assets/profile.png";

const testimonialsData = [
  {
    image: profileimg,
    text: "STARTUP HIRERS has helped us to achieve the quality hire at freshers through Young Techie Programs. The resources are groomed well to get deployed in our active projects.",
    name: "Mr R Venkat ",
    role: "(Deeply Digital - CEO)",
  },
  {
    image: profileimg,
    text: "The Market Tech needs are very Diverse, its no more Vanilla skill set, company like us need lot for Trained resources in Data Tools. STARTUP HIRERS Data Engineering track resources where good enough to be on live projects.",
    name: "Mr S D Ruban ",
    role: "(Director at Olive Lights)",
  },
  {
    image: profileimg,
    text: "We are an EdTech firm, we requested STARTUP HIRERS for entry level Full stack developers & Mob. App developer. I am extremely happy with the given resources and have referred STARTUP HIRERS to many other companies. Kudos to STARTUP HIRERS team !!!",
    name: "Ms Pauline ",
    role: "(Director at CDP360)",
  },
];

const TestimonialCard = () => {
  return (
    <div className="testimonials-container">
      {testimonialsData.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          {/* <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-image"
          /> */}
          <div className="testimonial-content">
            <div style={{ height: "210px" }}>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
