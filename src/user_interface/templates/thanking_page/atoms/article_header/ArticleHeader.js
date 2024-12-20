import { memo } from "react";
import "./ArticleHeader.css";

function ArticleHeader({ children }) {
  return (
    <div className="thanking-article-header">
      <h1>{children}</h1>
    </div>
  );
}

export default memo(ArticleHeader);
