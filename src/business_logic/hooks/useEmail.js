import { useEffect, useState } from "react";
import { socket } from "../../services/server/Socket";
import { useGlobalContext } from "../../state_managment/GlobalProvider";

function useEmail() {
  const { state, setState } = useGlobalContext();

  const setEmail = (email) => {
    setState((prevState) => {
      return {
        ...prevState,
        email: email,
      };
    });
  };

  const setIsEmailValid = (isEmailValid) => {
    setState((prevState) => {
      return {
        ...prevState,
        isEmailValid: isEmailValid,
      };
    });
  };

  const [error, setError] = useState(null);

  useEffect(() => {
    const handleValidation = (data) => {
      if (data.valid) {
        setError(null);
        setIsEmailValid(true);
      } else {
        setError(data.error);
        setIsEmailValid(false);
      }
    };

    socket.on("validate-email", handleValidation);

    return () => {
      socket.off("validate-email", handleValidation);
    };
  }, []);

  useEffect(() => {
    const debouncedValidation = setTimeout(() => {
      if (state?.email) {
        socket.emit("validate-email", state?.email);
      }
    }, 1000);

    return () => clearTimeout(debouncedValidation);
  }, [state?.email]);

  return [state?.email, setEmail, error];
}

export default useEmail;
