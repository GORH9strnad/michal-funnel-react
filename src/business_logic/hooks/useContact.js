import { useParams } from "react-router-dom";
import { useGet } from "../../services/services";
import { useGlobalContext } from "../../state_managment/GlobalProvider";
import { useEffect } from "react";
import { formatPhone } from "../util/formatPhone";

function useContact() {
  const { token } = useParams();
  const { setState } = useGlobalContext();

  const [response, isLoading, status, error] = useGet(
    `contact/contact/${token}`
  );

  useEffect(() => {
    if (!isLoading && status === 200) {
      setState((prevState) => {
        return {
          ...prevState,
          ...response?.contact,
          phone: formatPhone(response?.contact.phone),
        };
      });
    }
  }, [isLoading, status]);
}

export default useContact;
