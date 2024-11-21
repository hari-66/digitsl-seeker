import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading question">
        Got a 0 to 3 Years Hiring Requirements ?
      </h1>
      <h1 className="primary-heading">We're Here to Help!</h1>
      <div className="contact-form-container">
        {/* <input type="text" /> */}
        <button
          className="secondary-button"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {" "}
          Let's Talk{" "}
        </button>
      </div>
    </div>
  );
};

export default Contact;
