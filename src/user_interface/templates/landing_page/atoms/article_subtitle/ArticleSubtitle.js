import { memo } from "react";
import "./ArticleSubtitle.css";
import { useAdaptiveResponsiveContext } from "../../../../../business_logic/wrappers/AdaptiveResponsive";

function ArticleSubtitle({ children }) {
  const { device } = useAdaptiveResponsiveContext();

  return (
    <div className={`article-subtitle ${device === "mobile" ? "mobile" : ""}`}>
      {children}
    </div>
  );
}

export default memo(ArticleSubtitle);
