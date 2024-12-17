import { useEffect, useState } from "react";
import { socket } from "../../services/server/Socket";
import { useGlobalContext } from "../../state_managment/GlobalProvider";
import { useParams } from "react-router-dom";

function usePhone() {
  const { token } = useParams();

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

    socket.on("phone", handleValidation);

    return () => {
      socket.off("phone", handleValidation);
    };
  }, []);

  useEffect(() => {
    const debouncedValidation = setTimeout(() => {
      if (state?.phone) {
        socket.emit("phone", {
          phone: state?.phone,
          token: token ? token : null,
        });
      }
    }, 1000);

    return () => clearTimeout(debouncedValidation);
  }, [state?.phone]);

  return [state?.phone, setPhone, error];
}

export default usePhone;
