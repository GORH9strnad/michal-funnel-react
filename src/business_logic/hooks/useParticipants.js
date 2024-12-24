import { useEffect, useState } from "react";
import { useGlobalContext } from "../../state_managment/GlobalProvider";
import { useGet } from "../../services/services";
import { socket } from "../../services/server/Socket";
import { useParams } from "react-router-dom";
import formatPrice from "../util/formatPrice";

function useParticipants(minParticipants, maxParticipants) {
  const { token } = useParams();

  const { state, setState } = useGlobalContext();

  const [
    participantsResponse,
    isParticipantsLoading,
    participantsStatus,
    participantsError,
  ] = useGet(`participant/participants/${token}`);

  useEffect(() => {
    console.log("participantsResponse", participantsResponse);
  }, [participantsResponse]);

  let childrenDebounceTimeout;
  let adultsDebounceTimeout;

  const setChildrenCount = (childrenCount) => {
    setState((prevState) => {
      return {
        ...prevState,
        childrenCount: childrenCount,
      };
    });

    clearTimeout(childrenDebounceTimeout);

    childrenDebounceTimeout = setTimeout(() => {
      socket.emit("children", { children: childrenCount, token: token });
    }, 1000);
  };

  const setAdultsCount = (adultsCount) => {
    setState((prevState) => {
      return {
        ...prevState,
        adultsCount: adultsCount,
      };
    });

    clearTimeout(adultsDebounceTimeout);

    adultsDebounceTimeout = setTimeout(() => {
      socket.emit("adults", { adults: adultsCount, token: token });
    }, 1000);
  };

  useEffect(() => {
    socket.emit("price", {
      children: state.childrenCount,
      adults: state.adultsCount,
    });
  }, [state.childrenCount, state.adultsCount]);

  useEffect(() => {
    const handlePrice = (data) => {
      setState((prevState) => {
        return {
          ...prevState,
          price: formatPrice(data.price),
        };
      });
      console.log("price", data.price);
    };

    socket.on("price", handlePrice);

    return () => {
      socket.off("price", handlePrice);
    };
  }, []);

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
