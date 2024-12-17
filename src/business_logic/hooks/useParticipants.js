import { useEffect, useState } from "react";
import { useGlobalContext } from "../../state_managment/GlobalProvider";
import { useGet } from "../../services/services";
import { socket } from "../../services/server/Socket";
import { useParams } from "react-router-dom";

function useParticipants(minParticipants, maxParticipants) {
  const { token } = useParams();

  const { state, setState } = useGlobalContext();

  const [
    participantsResponse,
    isParticipantsLoading,
    participantsStatus,
    participantsError,
  ] = useGet(`participant/participants/${token}`);

  const setChildrenCount = (childrenCount) => {
    setState((prevState) => {
      return {
        ...prevState,
        childrenCount: childrenCount,
      };
    });

    socket.emit("children", { children: childrenCount, token: token });
  };

  const setAdultsCount = (adultsCount) => {
    setState((prevState) => {
      return {
        ...prevState,
        adultsCount: adultsCount,
      };
    });
    socket.emit("adults", { adults: adultsCount, token: token });
  };

  useEffect(() => {
    if (!isParticipantsLoading && participantsStatus === 200) {
      setState((prevState) => {
        return {
          ...prevState,
          childrenCount: participantsResponse?.children,
          adultsCount: participantsResponse?.adults,
        };
      });
    }
  }, [isParticipantsLoading, participantsStatus]);

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
