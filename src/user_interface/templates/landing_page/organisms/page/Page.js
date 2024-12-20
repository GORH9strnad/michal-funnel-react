import { useAdaptiveResponsiveContext } from "../../../../../business_logic/wrappers/AdaptiveResponsive";
import "./Page.css";
import { memo } from "react";

function Page({ children }) {
  const { device } = useAdaptiveResponsiveContext();

  return (
    <div className={`landing-page ${device === "mobile" ? "mobile" : ""}`}>
      {children}
    </div>
  );
}

export default memo(Page);
