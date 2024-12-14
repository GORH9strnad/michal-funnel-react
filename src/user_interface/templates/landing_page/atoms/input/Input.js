import { memo } from "react";
import "./Input.css";
import { useAdaptiveResponsiveContext } from "../../../../../business_logic/wrappers/AdaptiveResponsive";

function Input(props) {
  const { type, placeholder, name, value, onChange, message } = props;

  const { device } = useAdaptiveResponsiveContext();

  return (
    <div className={`input ${device === "mobile" ? "mobile" : ""}`}>
      <label>{name}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {message && <span>{message}</span>}
    </div>
  );
}

export default memo(Input);
