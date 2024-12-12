import { memo } from "react";
import "./RatingStars.css";

function RatingStars({ rating }) {
  return (
    <div className="rating-stars">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          className={`rating-star ${index < rating ? "filled" : "empty"}`}
          key={index}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default memo(RatingStars);
