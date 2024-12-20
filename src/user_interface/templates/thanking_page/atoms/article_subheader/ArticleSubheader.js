import { memo } from "react";
import "./ArticleSubheader.css";

function ArticleSubheader({ children }) {
  return (
    <div className="thanking-article-subheader">
      <h1>{children}</h1>
    </div>
  );
}

export default memo(ArticleSubheader);
