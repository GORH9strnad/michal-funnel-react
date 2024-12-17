import { useEffect, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGet } from "../../services/services";

function useToken() {
  console.log("useToken() executed");
  const navigate = useNavigate();

  const { token } = useParams();

  const [
    validationData,
    isValidationPerforming,
    validationStatus,
    validationError,
  ] = useGet(token ? `session/check/${token}` : null);

  useEffect(() => {
    if (token) {
      if (
        !isValidationPerforming &&
        validationStatus === 200 &&
        !validationData.exists
      ) {
        navigate("/");
      }

      if (!isValidationPerforming && validationStatus !== 200) {
        navigate(`/error/${validationStatus}`);
        console.error(validationError);
      }
    }
  }, [isValidationPerforming, validationStatus, validationData]);

  return [validationData?.exists, isValidationPerforming];
}

export default useToken;
