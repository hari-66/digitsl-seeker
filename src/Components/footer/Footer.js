import React from "react";
import Logo from "../../Assets/2 1.png";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon

import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <FaInstagram />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <p className="main-container-footer footer-icons ">+91 90423 86429</p>
          <p className="main-container-footer footer-icons ">
            {/* hrstartuphirers@cdp360.com */}
            hr@startuphirers.com
          </p>
        </div>
        <div className="footer-section-columns">
          <p className="main-container-footer footer-icons ">
            Terms & Conditions
          </p>
          <p className="main-container-footer footer-icons "> Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
