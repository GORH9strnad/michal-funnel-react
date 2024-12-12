import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carousel.css";

import reviews from "../../../../assets/text/reviews";

function Carousel({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default memo(Carousel);
