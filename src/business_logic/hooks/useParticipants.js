import { useEffect, useState } from "react";
import { useGlobalContext } from "../../state_managment/GlobalProvider";

function useParticipants(minParticipants, maxParticipants) {
  const { state, setState } = useGlobalContext();

  const setChildrenCount = (childrenCount) => {
    setState((prevState) => {
      return {
        ...prevState,
        childrenCount: childrenCount,
      };
    });
  };

  const setAdultsCount = (adultsCount) => {
    setState((prevState) => {
      return {
        ...prevState,
        adultsCount: adultsCount,
      };
    });
  };

  const [childrenCountLimit, setChildrenCountLimit] = useState(maxParticipants);
  const [adultsCountLimit, setAdultsCountLimit] = useState(maxParticipants);

  useEffect(() => {
    setChildrenCountLimit(maxParticipants - state?.adultsCount);
    setAdultsCountLimit(maxParticipants - state?.childrenCount);
  }, [state?.childrenCount, state?.adultsCount]);

  return [
    state?.childrenCount,
    childrenCountLimit,
    state?.adultsCount,
    adultsCountLimit,
    setChildrenCount,
    setAdultsCount,
  ];
}

export default useParticipants;
