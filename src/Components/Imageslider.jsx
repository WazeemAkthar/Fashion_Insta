import React, { useState } from "react";
import { sliderImages } from "./Imagesliderdata";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./Styles/Imageslider.css";

const Imageslider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  console.log(current);

  return (
    <section className="slider">
      <ArrowBackIosIcon className="left_arrow" onClick={prevSlide} />
      <ArrowForwardIosIcon className="right_arrow" onClick={nextSlide} />
      {sliderImages.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide active"}
            key={index}
          >
            {index === current && (
              <img src={slide.img} alt="" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Imageslider;
