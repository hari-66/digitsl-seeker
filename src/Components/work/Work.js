import React, { useRef, useState } from "react";
import "./work.css";
import Slider from "react-slick";
import Reactimg from "../../Assets/react.png";
import flutterimg from "../../Assets/flutter.png";
import nodejsimg from "../../Assets/node.png";
import javaimg from "../../Assets/java.png";
import pythonimg from "../../Assets/python.png";
import figmaimg from "../../Assets/figms.png";
import analystimg from "../../Assets/hh.png";
import netimg from "../../Assets/net.png";
import vue from "../../Assets/vue-removebg-preview.png";

const Work = () => {
  const sliderRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(null);

  const workInfoData = [
    { image: Reactimg, title: "Reactjs Developer", position: "5 nos" },
    { image: flutterimg, title: "Flutter Developer", position: "5 nos" },
    { image: nodejsimg, title: "Node Js Developer", position: "5 nos" },
    { image: javaimg, title: "Java Developer", position: "5 nos" },
    { image: pythonimg, title: "Python Developer", position: "5 nos" },
    { image: figmaimg, title: "Ux Designer", position: "5 nos" },
    { image: netimg, title: ".Net Developer", position: "2 nos" },
    { image: analystimg, title: "Buisness Analyst", position: "7 nos" },
    { image: vue, title: "Vue.Js Developer", position: "2 nos" },
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

  // const handleMouseEnter = () => {
  // const interval = setInterval(() => {
  //   sliderRef.current.slickNext();
  // }, 1000);
  // setAutoScroll(interval);
  // };

  // const handleMouseLeave = () => {
  //   clearInterval(autoScroll);
  //   setAutoScroll(null);
  // };

  return (
    <div
      className="work-section-wrapper data-main-container"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <div className="work-section-top">
        <h1 className="primary-heading opening-text">
          Current Openings (Track Wise)
        </h1>
        <p className="para-text-work">
          Our collaborative approach has greatly benefited both job seekers and
          employers. We believe that the 0 to 3 skilled workforce is the
          foundation of the employment pyramid. By addressing dynamic market
          needs, we position ourselves as the key architects of this skill
          ecosystem.
        </p>
      </div>

      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {workInfoData.map((data) => (
            <div className="cards-startup" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt={data.title} className="cards-img" />
              </div>
              <div className="card-content">
                <p className="card-description">{data.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Work;
