import { memo, useCallback, useEffect, useState } from "react";
import "./ParticipantsPicker.css";
import Slider from "../../atoms/slider/Slider";

const maxParticipants = 11;
const minParticipants = 1;

function ParticipantsPicker() {
  const [childrenCount, setChildrenCount] = useState(0);
  const [adultsCount, setAdultsCount] = useState(0);

  const [childrenCountLimit, setChildrenCountLimit] = useState(maxParticipants);
  const [adultsCountLimit, setAdultsCountLimit] = useState(maxParticipants);

  useEffect(() => {
    setChildrenCountLimit(maxParticipants - adultsCount);
    setAdultsCountLimit(maxParticipants - childrenCount);
  }, [childrenCount, adultsCount]);

  const setChildrenCountCallback = useCallback((value) => {
    setChildrenCount(value);
  }, []);

  const setAdultsCountCallback = useCallback((value) => {
    setAdultsCount(value);
  }, []);

  return (
    <div>
      <Slider
        useSliderState={[childrenCount, setChildrenCountCallback]}
        textAfter="x Dětí"
        topLimit={childrenCountLimit}
      />
      <Slider
        useSliderState={[adultsCount, setAdultsCountCallback]}
        textAfter="x Dospělých"
        topLimit={adultsCountLimit}
      />
    </div>
  );
}

export default memo(ParticipantsPicker);
