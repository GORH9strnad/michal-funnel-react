import { memo } from "react";
import "./ProfileQuote.css";

function ProfileQuote({ children }) {
  return <div className="profile-quote">{children}</div>;
}

export default memo(ProfileQuote);
