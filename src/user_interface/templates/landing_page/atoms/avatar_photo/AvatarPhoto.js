import "./AvatarPhoto.css";

import avatar from "../../../../assets/photos/static/avatar.png";
import { memo } from "react";
import { useAdaptiveResponsiveContext } from "../../../../../business_logic/wrappers/AdaptiveResponsive";

function AvatarPhoto() {
  const { device } = useAdaptiveResponsiveContext();

  return (
    <img
      className={`avatar-photo ${device === "mobile" ? "mobile" : ""}`}
      src={avatar}
      alt="avatar"
    />
  );
}

export default memo(AvatarPhoto);
