import { memo } from "react";
import "./Article.css";

function Article({ children }) {
  return <div className="article">{children}</div>;
}

export default memo(Article);
