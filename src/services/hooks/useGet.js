import { useEffect, useState } from "react";
import { url } from "../server/url";

function useGet(route) {
  const [response, setResponse] = useState(null);
  const [isPerforming, setIsPerforming] = useState(true);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPerforming(true);
      setError(null);
      setStatus(null);
      try {
        const res = await fetch(url + route);
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

    if (route) {
      fetchData();
    } else {
      setResponse(null);
      setIsPerforming(false);
      setStatus(200);
      setError(null);
    }
  }, [route]);

  return [response, isPerforming, status, error];
}

export default useGet;
