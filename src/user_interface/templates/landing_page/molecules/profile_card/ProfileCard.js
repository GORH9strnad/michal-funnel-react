import { memo } from "react";
import "./ProfileCard.css";

function ProfileCard({ children }) {
  return <div className="profile-card">{children}</div>;
}

export default memo(ProfileCard);
