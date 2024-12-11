import { memo } from "react";
import "./ProfileName.css";

function ProfileName({ children }) {
  return <div className="profile-name">{children}</div>;
}

export default memo(ProfileName);
