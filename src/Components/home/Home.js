import React, { useState } from "react";
import BannerBackground from "../../Assets/home-banner-background-2.png";
import BannerImage from "../../Assets/Group 14.png";
import Navbar from "../navbar/Navbar";
import { FiArrowRight } from "react-icons/fi";
import "./home.css";
import Button from "react-bootstrap/Button";
import { Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Home = () => {
  const [show, setShow] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  // Initialize useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = async (data) => {
    const form = new FormData();

    // Append form data fields to FormData
    for (const key in data) {
      if (key !== "cvUpload") {
        // Skip the file field for now
        form.append(key, data[key]);
      }
    }

    // Append the file data (cvUpload)
    if (data.cvUpload && data.cvUpload[0]) {
      form.append("cvUpload", data.cvUpload[0]); // Access the first file from the file input
    }

    try {
      const response = await fetch(
        "https://prod-lms-courseengine-backend.cdp360.org/cdp/startupHire",
        {
          method: "POST",
          body: form,
        }
      );

      if (response.ok) {
        setSuccessMessage(true);
        setTimeout(() => {
          setShow(false);
          setSuccessMessage(false);
          reset();
        }, 1000);
      } else {
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="home-container">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apply Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                {...register("name", { required: "Name is required." })}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Mobile Number */}
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                {...register("phoneNo", {
                  required: "Mobile number is required.",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Enter a valid 10-digit mobile number.",
                  },
                })}
                isInvalid={!!errors.phoneNo}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phoneNo?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Enter a valid email.",
                  },
                })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* City */}
            <Form.Group className="mb-3">
              <Form.Label>City </Form.Label>
              <Form.Control
                type="text"
                {...register("city", {
                  required: "City is required.",
                  minLength: {
                    value: 3,
                    message: "City must have at least 3 characters.",
                  },
                })}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type="invalid">
                {errors.city?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* College Name */}
            <Form.Group className="mb-3">
              <Form.Label>College Name</Form.Label>
              <Form.Control
                type="text"
                {...register("collegeName", {
                  required: "College name is required.",
                })}
                isInvalid={!!errors.collegeName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.collegeName?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Graduation */}
            <Form.Group className="mb-3">
              <Form.Label>Graduation</Form.Label>
              <Form.Control
                type="text"
                {...register("graduation", {
                  required: "Graduation is required.",
                })}
                isInvalid={!!errors.graduation}
              />
              <Form.Control.Feedback type="invalid">
                {errors.graduation?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Specialisation */}
            <Form.Group className="mb-3">
              <Form.Label>Specialisation</Form.Label>
              <Form.Control
                type="text"
                {...register("specialisation", {
                  required: "Specialisation is required.",
                })}
                isInvalid={!!errors.specialisation}
              />
              <Form.Control.Feedback type="invalid">
                {errors.specialisation?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Year of Passing */}
            <Form.Group className="mb-3">
              <Form.Label>Year of Passing</Form.Label>
              <Form.Select
                {...register("yearOfPassing", {
                  required: "Year of passing is required.",
                })}
                isInvalid={!!errors.yearOfPassing}
              >
                <option value="">Select Year</option>
                <option value="Pursuing Final Year">Pursuing Final Year</option>
                <option value="2023-2024">2023-2024</option>
                <option value="2022-2023">2022-2023</option>
                <option value="2021-2022">2021-2022</option>
                <option value="Earlier">Earlier</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.yearOfPassing?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Upload Resume */}
            <Form.Group className="mb-3">
              <Form.Label>Upload Resume</Form.Label>
              <Form.Control
                type="file"
                {...register("cvUpload", {
                  required: "Please upload your resume.",
                })}
                isInvalid={!!errors.cvUpload}
              />
              <Form.Control.Feedback type="invalid">
                {errors.cvUpload?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button variant="light" onClick={handleClose}>
                cancel
              </Button>
              <Button
                variant="danger"
                type="submit"
                style={{ marginLeft: "5%" }}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            We are the ultimate skill matchmakers, connecting job seekers with
            startups and mid-sized companies to ensure the perfect fit for both
            candidates and employers.
          </h1>
          <p className="para-text-home">
            Discover amazing career opportunities with startups and mid-sized
            companies on our all-inclusive platform.
          </p>
          <div className="button-container">
            {/* <a
              style={{ textDecoration: "none" }}
              href="http://127.0.0.1:5500/index.html"
              target="blank"
              className="secondary-button"
            >
              Job Seeker
              <FiArrowRight />
            </a> */}
            <button className="secondary-button " onClick={handleShow}>
              Job Seeker <FiArrowRight />{" "}
            </button>
            {/* <button
              className="secondary-button button-recr"
              onClick={handleRecru}
            >
              Recruiter <FiArrowRight />{" "}
            </button> */}
            <a
              style={{ textDecoration: "none", marginLeft: "3%" }}
              href="https://recruiter-form.startuphirers.com/"
              target="blank"
              className="secondary-button"
            >
              Recruiter
              <FiArrowRight />
            </a>
          </div>

          <div className="card-home-container">
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">50 +</h3>
                <p className="text-content">Partner Companies</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">400 +</h3>
                <p className="text-content">
                  Trained and Ready-to-Work Resources
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">33 +</h3>
                <p className="text-content">Active Openings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
