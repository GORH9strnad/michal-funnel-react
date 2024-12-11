import LeftBar from "./organisms/left_bar/LeftBar";
import "./LandingPage.css";
import { memo } from "react";

function LandingPage({ children }) {
  return <div className="landing-page">{children}</div>;
}

export default memo(LandingPage);
