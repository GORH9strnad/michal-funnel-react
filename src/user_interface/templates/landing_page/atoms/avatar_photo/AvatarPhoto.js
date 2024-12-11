import "./AvatarPhoto.css";

import avatar from "../../../../assets/photos/static/avatar.png";
import { memo } from "react";

function AvatarPhoto() {
  return <img className="avatar-photo" src={avatar} alt="avatar" />;
}

export default memo(AvatarPhoto);
