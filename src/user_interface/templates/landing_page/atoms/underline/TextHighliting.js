import { memo } from "react";
import "./TextHighliting.css";

function TextHighliting({ children }) {
  return <span className="text-highliting">{children}</span>;
}

export default memo(TextHighliting);
