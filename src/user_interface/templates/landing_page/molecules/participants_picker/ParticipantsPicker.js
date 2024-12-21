import { memo, useCallback, useEffect, useState } from "react";
import "./ParticipantsPicker.css";
import Slider from "../../atoms/slider/Slider";
import useParticipants from "../../../../../business_logic/hooks/useParticipants";
import { useAdaptiveResponsiveContext } from "../../../../../business_logic/wrappers/AdaptiveResponsive";
import { useGlobalContext } from "../../../../../state_managment/GlobalProvider";

const maxParticipants = 11;
const minParticipants = 1;

function ParticipantsPicker() {
  const { device } = useAdaptiveResponsiveContext();

  const { state } = useGlobalContext();

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
    <div
      className={`participants-picker ${device === "mobile" ? "mobile" : ""}`}
    >
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
      <h2>Cena KČ celkem: {state.price}</h2>
    </div>
  );
}

export default memo(ParticipantsPicker);
