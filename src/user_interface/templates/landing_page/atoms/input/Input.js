import { memo } from "react";
import "./Input.css";

function Input(props) {
  const { type, placeholder, name, value, onChange, message } = props;

  return (
    <div className="input">
      <label>{name}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {message && <span className="input-message">{message}</span>}
    </div>
  );
}

export default memo(Input);
