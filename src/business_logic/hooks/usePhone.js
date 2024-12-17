import { useEffect, useState } from "react";
import { socket } from "../../services/server/Socket";
import { useGlobalContext } from "../../state_managment/GlobalProvider";

function usePhone() {
  const { state, setState } = useGlobalContext();

  const setPhone = (phone) => {
    setState((prevState) => {
      return {
        ...prevState,
        phone: phone,
      };
    });
  };

  const setIsPhoneValid = (isPhoneValid) => {
    setState((prevState) => {
      return {
        ...prevState,
        isPhoneValid: isPhoneValid,
      };
    });
  };

  const [error, setError] = useState(null);

  useEffect(() => {
    const handleValidation = (data) => {
      if (data.valid) {
        setError(null);
        setIsPhoneValid(true);
      } else {
        setError(data.error);
        setIsPhoneValid(false);
      }
    };

    socket.on("validate-phone", handleValidation);

    return () => {
      socket.off("validate-phone", handleValidation);
    };
  }, []);

  useEffect(() => {
    const debouncedValidation = setTimeout(() => {
      if (state?.phone) {
        socket.emit("validate-phone", state?.phone);
      }
    }, 1000);

    return () => clearTimeout(debouncedValidation);
  }, [state?.phone]);

  return [state?.phone, setPhone, error];
}

export default usePhone;
