import { useEffect, useState } from "react";

function usePOST(route, body) {
  const [response, setResponse] = useState(null);
  const [isPerforming, setIsPerforming] = useState(true);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const postData = async () => {
      setIsPerforming(true);
      setError(null);
      setStatus(null);
      try {
        const res = await fetch(route, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
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

    postData();
  }, [route, body]);

  return [response, isPerforming, status, error];
}

export { usePOST };
