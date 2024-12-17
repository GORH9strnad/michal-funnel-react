import { useEffect } from "react";
import { useGlobalContext } from "../../state_managment/GlobalProvider";
import { usePost } from "../../services/services";
import { useNavigate } from "react-router-dom";

function useData() {
  const navigate = useNavigate();

  const { state, tokenExists } = useGlobalContext();

  const [response, isPerforming, status, error, executePost] = usePost(
    "session/create",
    state
  );

  useEffect(() => {
    if (
      (state?.isEmailValid || state?.isPhoneValid) &&
      !tokenExists &&
      tokenExists !== null
    ) {
      executePost();
      console.log("useSyncData() executed");
    }
  }, [state]);

  useEffect(() => {
    if (!isPerforming && status === 200) {
      navigate(`/${response?.token}`);
    }
  }, [isPerforming, status]);
}

export default useData;
