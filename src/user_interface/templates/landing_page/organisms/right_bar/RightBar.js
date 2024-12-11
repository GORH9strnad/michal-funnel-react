import "./RightBar.css";

import { memo, useEffect, useRef, useState } from "react";

function RightBar({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  const rightBar = useRef(null);

  useEffect(() => {
    if (isHovered) {
      rightBar.current.style.setProperty("--right-bar-position", 90);
    } else {
      rightBar.current.style.setProperty("--right-bar-position", 20);
    }
  }, [isHovered]);

  return (
    <div
      className="right-bar"
      ref={rightBar}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {children}
    </div>
  );
}

export default memo(RightBar);
