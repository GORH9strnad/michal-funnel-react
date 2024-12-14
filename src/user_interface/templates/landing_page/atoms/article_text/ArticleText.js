import { memo } from "react";
import "./ArticleText.css";
import { useAdaptiveResponsiveContext } from "../../../../../business_logic/wrappers/AdaptiveResponsive";

function ArticleText({ children }) {
  const { device } = useAdaptiveResponsiveContext();

  return (
    <div className={`article-text ${device === "mobile" ? "mobile" : ""}`}>
      {children}
    </div>
  );
}

export default memo(ArticleText);
