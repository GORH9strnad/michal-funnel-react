import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reviews from "../../../../assets/text/reviews";

// Star component
const Stars = ({ rating }) => {
  return (
    <div
      style={{
        display: "inline-block",
        marginTop: "10px",
        alignItems: "center",
      }}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          style={{
            color: index < rating ? "#FFD700" : "#ddd",
            fontSize: "32px",
            marginRight: "2px",
            textAlign: "center",
            textShadow:
              index < rating ? "2px 2px 4px rgba(0, 0, 0, 0.5)" : "none",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              margin: "25px",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "10px",
                flexDirection: "row",
                maxWidth: "100%",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  flex: 1,
                  maxWidth: "40%",
                  width: "100%",
                  paddingRight: "10px",
                  alignItems: "center",
                }}
              >
                <img
                  src={review.image}
                  alt={review.name}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    marginTop: "10%",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
                {/* Stars Section */}
                <div style={{ marginTop: "10px", textAlign: "center" }}>
                  <Stars rating={review.rating} />
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  maxWidth: "60%",
                  width: "100%",
                  paddingRight: "20px",
                }}
              >
                <h4
                  style={{
                    marginLeft: "10px",
                    color: "black",
                    textAlign: "right",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {review.name}
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: "18pt",
                    color: "#555",
                    lineHeight: "1.5",
                    textAlign: "justify",
                  }}
                >
                  {review.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default memo(Carousel);
