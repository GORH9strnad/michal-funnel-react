import { memo } from "react";
import "./ArticleText.css";

function ArticleText({ children }) {
  return <div className="article-text">{children}</div>;
}

export default memo(ArticleText);
