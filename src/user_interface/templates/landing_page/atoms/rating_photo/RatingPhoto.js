import { memo } from "react";
import "./RatingPhoto.css";

function RatingPhoto({ photo }) {
  return <img className="rating-photo" src={photo} alt="photo" />;
}

export default memo(RatingPhoto);
