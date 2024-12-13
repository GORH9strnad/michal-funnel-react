import { memo } from "react";
import "./ReviewCard.css";
import RatingPhoto from "../../atoms/rating_photo/RatingPhoto";
import RatingStars from "../../atoms/rating_stars/RatingStars";
import { useAdaptiveResponsiveContext } from "../../../../../business_logic/wrappers/AdaptiveResponsive";

function ReviewCard({ review }) {
  const { device } = useAdaptiveResponsiveContext();

  return (
    <div className="review-card">
      <div className="review-card-container">
        <RatingPhoto photo={review.image} />
        <RatingStars rating={review.rating} />
      </div>
      <div
        className={`review-card-text ${device === "mobile" ? "mobile" : ""}`}
      >
        <h3>{review.name}</h3>
        <div>{review.text}</div>
      </div>
    </div>
  );
}

export default memo(ReviewCard);
