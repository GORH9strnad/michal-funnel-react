import { memo } from "react";
import "./Page.css";

function Page({ children }) {
  return <div className="thanking-page">{children}</div>;
}

export default memo(Page);
