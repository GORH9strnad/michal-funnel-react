import { useEffect, useState } from "react";

function useParticipants(minParticipants, maxParticipants) {
  const [childrenCount, setChildrenCount] = useState(0);
  const [adultsCount, setAdultsCount] = useState(0);

  const [childrenCountLimit, setChildrenCountLimit] = useState(maxParticipants);
  const [adultsCountLimit, setAdultsCountLimit] = useState(maxParticipants);

  useEffect(() => {
    setChildrenCountLimit(maxParticipants - adultsCount);
    setAdultsCountLimit(maxParticipants - childrenCount);
  }, [childrenCount, adultsCount]);

  return [
    childrenCount,
    childrenCountLimit,
    adultsCount,
    adultsCountLimit,
    setChildrenCount,
    setAdultsCount,
  ];
}

export default useParticipants;
