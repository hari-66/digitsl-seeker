import React from "react";
import AboutBackgroundImage from "../../Assets/about (2).png";
import "./about.css";
const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">Fueling the Startup Revolution</h1>
        <p className="para-text-about">
          We are dedicated to empowering job seekers by aligning them with
          market-demand skills, providing training, and preparing them for
          deployment in startups and mid-sized companies.
        </p>
        <p className="para-text-about ">
          These companies often need entry-level resources to be productive
          quickly and typically lack extensive training budgets or the capacity
          for low productivity during onboarding. Our approach ensures they
          receive job-ready candidates who can contribute from day one.
        </p>
      </div>
    </div>
  );
};

export default About;
