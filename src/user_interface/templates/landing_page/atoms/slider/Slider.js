import { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import "./Slider.css";

function Slider(props) {
  const { useSliderState, textBefore, textAfter, topLimit } = props;

  const [value, setValue] = useSliderState;

  useEffect(() => {
    if (value > topLimit) {
      setValue(topLimit);
    }
  }, [topLimit]);

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <ReactSlider
        className="custom-slider"
        thumbClassName="custom-thumb"
        trackClassName="custom-track"
        value={value}
        onChange={(val) => setValue(val)}
        min={0}
        max={11}
      />
      <p>
        {textBefore}
        {value}
        {textAfter}
      </p>
    </div>
  );
}

export default Slider;
