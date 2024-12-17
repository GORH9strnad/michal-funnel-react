import { useEffect, useState } from "react";
import { url } from "../server/url";

function usePost(route, body) {
  const [response, setResponse] = useState(null);
  const [isPerforming, setIsPerforming] = useState(true);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const postData = async () => {
    setIsPerforming(true);
    setError(null);
    setStatus(null);
    try {
      const res = await fetch(url + route, {
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

  return [response, isPerforming, status, error, postData];
}

export default usePost;
