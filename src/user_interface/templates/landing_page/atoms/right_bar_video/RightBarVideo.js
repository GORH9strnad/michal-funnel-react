import { memo } from "react";
import { RIGHT_BAR_VIDEO } from "../../../../assets/videos/CDN";
import "./RightBarVideo.css";

function RightBarVideo() {
  return (
    <video
      className="right-bar-video"
      src={RIGHT_BAR_VIDEO}
      autoPlay
      loop
      muted
    />
  );
}

export default memo(RightBarVideo);
