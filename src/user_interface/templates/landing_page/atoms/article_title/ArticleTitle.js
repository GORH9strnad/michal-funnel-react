import { useAdaptiveResponsiveContext } from "../../../../../business_logic/wrappers/AdaptiveResponsive";
import "./ArticleTitle.css";

function ArticleTitle({ children }) {
  const { device } = useAdaptiveResponsiveContext();

  return (
    <div className={`article-title ${device === "mobile" ? "mobile" : ""}`}>
      {children}
    </div>
  );
}

export default ArticleTitle;
