import { memo } from "react";
import "./LeftBar.css";

function LeftBar({ children }) {
  return <div className="left-bar">{children}</div>;
}

export default memo(LeftBar);
