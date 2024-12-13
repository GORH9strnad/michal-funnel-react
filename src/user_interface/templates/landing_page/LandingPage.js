import { useAdaptiveResponsiveContext } from "../../../business_logic/wrappers/AdaptiveResponsive";
import "./LandingPage.css";
import { memo } from "react";

function LandingPage({ children }) {
  const { device } = useAdaptiveResponsiveContext();

  return (
    <div className={`landing-page ${device === "mobile" ? "mobile" : ""}`}>
      {children}
    </div>
  );
}

export default memo(LandingPage);
