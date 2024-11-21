import React from "react";
import Slider from "react-slick";
import olive from "../../Assets/olive.jpeg";
import "./startup.css";
import cdp from "../../Assets/cdp.png";
import adz from "../../Assets/adz-removebg-preview.png";
import genome from "../../Assets/genome-removebg-preview.png";
import Rnp from "../../Assets/rnps.png";
import mahathi from "../../Assets/mahathis.png";
import deeply from "../../Assets/deeply.jpeg";
function Startup() {
  const workInfoData = [
    {
      title: "Data Engineering",
      position: "5 nos",
      img: olive,
    },
    {
      title: "IT Services ",
      position: "5 nos",
      img: cdp,
    },
    {
      title: "AD-Tech ",
      position: "5 nos",
      img: adz,
    },
    {
      title: "Health Tech",
      position: "5 nos",
      img: genome,
    },
    {
      title: "IT Services",
      position: "5 nos",
      img: Rnp,
    },
    {
      title: "IT Services",
      position: "5 nos",
      img: mahathi,
    },
    {
      title: "FinTech",
      position: "5 nos",
      img: deeply,
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="work-section-wrapper data-container ">
        <div className="work-section-top">
          <h1 className="primary-heading clients-text">Our Clients</h1>
          <p className="para-next-2">
            We bridge the gap by providing hands-on support for effective hiring
            in the 0-3 years experience segment for startups and companies.
            Additionally, we conduct campus hiring on your behalf and ensure new
            hires are job-ready with pre-joining training programs.
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {workInfoData.map((data) => (
              <div className="cards-startup" key={data.title}>
                <div
                  className="info-boxes-img-container"
                  style={{ height: "100px" }}
                >
                  <img src={data.img} alt={data.title} className="card-image" />
                </div>
                <div className="card-content">
                  <p className="card-description">{data.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Startup;
