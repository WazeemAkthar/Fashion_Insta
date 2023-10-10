import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./Styles/Imageslider.css";
import sliderimages from "./Imagesliderdata";
import { Typography } from "@mui/material";

const Imageslider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % sliderimages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section
      className="slider"
      sx={{
        position: "relative",

        display: "flex",
      }}
    >
         <ArrowBackIosIcon
              fontSize="large"
              className="left-arrow"
              onClick={prevSlide}
              sx={{
                position: "absolute",
                top: "50%",
                left: 20,
                fontSize: "3rem",
                color: "#000",
                zIndex: "10",
                cursor: "pointer",
                border: "1px",
                userselect: "none",
                display: { xs: "none", md: "flex", sm: "none" },
              }}
            />

            <ArrowForwardIosIcon
              fontSize="large"
              className="right-arrow"
              onClick={nextSlide}
              sx={{
                position: "absolute",
                top: "50%",
                right: 0,
                fontSize: "3rem",
                color: "#000",
                zIndex: "10",
                cursor: "pointer",
                userselect: "none",
                display: { xs: "none", md: "flex", sm: "none" },
              }}
            />
      {sliderimages.map((slide, index) => {
        return (
          <>
         
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.img} alt="" className="image" />
              )}
               <Typography variant="h2" fontFamily="times new roman" className="title"> FASHIONINSTA </Typography>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default Imageslider;
