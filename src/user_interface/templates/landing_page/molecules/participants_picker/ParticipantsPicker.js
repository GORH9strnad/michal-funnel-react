import { memo, useCallback, useEffect, useState } from "react";
import "./ParticipantsPicker.css";
import Slider from "../../atoms/slider/Slider";
import useParticipants from "../../../../../business_logic/hooks/useParticipants";

const maxParticipants = 11;
const minParticipants = 1;

function ParticipantsPicker() {
  const [
    childrenCount,
    childrenCountLimit,
    adultsCount,
    adultsCountLimit,
    setChildrenCount,
    setAdultsCount,
  ] = useParticipants(minParticipants, maxParticipants);

  const setChildrenCountCallback = useCallback((value) => {
    setChildrenCount(value);
  }, []);

  const setAdultsCountCallback = useCallback((value) => {
    setAdultsCount(value);
  }, []);

  return (
    <div>
      <h1>Vaše parta</h1>
      <Slider
        sliderState={[childrenCount, setChildrenCountCallback]}
        textAfter="x Dětí"
        topLimit={childrenCountLimit}
      />
      <Slider
        sliderState={[adultsCount, setAdultsCountCallback]}
        textAfter="x Dospělých"
        topLimit={adultsCountLimit}
      />
      <h2>Cena KČ celkem: 0</h2>
    </div>
  );
}

export default memo(ParticipantsPicker);
