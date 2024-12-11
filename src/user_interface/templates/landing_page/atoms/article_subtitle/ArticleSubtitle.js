import { memo } from "react";
import "./ArticleSubtitle.css";

function ArticleSubtitle({ children }) {
  return <div className="article-subtitle">{children}</div>;
}

export default memo(ArticleSubtitle);
