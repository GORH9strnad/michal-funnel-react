import { memo } from "react";
import "./Article.css";
import { useAdaptiveResponsiveContext } from "../../../../../business_logic/wrappers/AdaptiveResponsive";

function Article({ children }) {
  const { device } = useAdaptiveResponsiveContext();

  return (
    <div className={`article${device === "mobile" ? "-mobile" : ""}`}>
      {children}
    </div>
  );
}

export default memo(Article);
