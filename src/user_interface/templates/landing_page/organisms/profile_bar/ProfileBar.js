import { memo, useEffect } from "react";
import "./ProfileBar.css";
import { useAdaptiveResponsiveContext } from "../../../../../business_logic/wrappers/AdaptiveResponsive";

function ProfileBar({ children }) {
  const { device } = useAdaptiveResponsiveContext();

  return (
    <div className={`profile-bar${device === "mobile" ? "-mobile" : ""}`}>
      {children}
    </div>
  );
}

export default memo(ProfileBar);
