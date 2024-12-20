import { memo } from "react";
import "./Article.css";

function Article({ children }) {
  return <div className="thanking-article">{children}</div>;
}

export default memo(Article);
