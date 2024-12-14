import { useEffect, useState } from "react";

function useDelete(route) {
  const [response, setResponse] = useState(null);
  const [isPerforming, setIsPerforming] = useState(true);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const deleteData = async () => {
      setIsPerforming(true);
      setError(null);
      setStatus(null);
      try {
        const res = await fetch(route, {
          method: "DELETE",
        });
        setStatus(res.status);
        if (res.ok) {
          const data = await res.json();
          setResponse(data);
        }
      } catch (e) {
        setError(e);
      } finally {
        setIsPerforming(false);
      }
    };

    deleteData();
  }, [route]);

  return [response, isPerforming, status, error];
}

export default useDelete;
