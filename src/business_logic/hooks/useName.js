import { useEffect, useState } from "react";
import { socket } from "../../services/server/Socket";
import { useGlobalContext } from "../../state_managment/GlobalProvider";

function useName() {
  const { state, setState } = useGlobalContext();

  const setName = (name) => {
    setState((prevState) => {
      return {
        ...prevState,
        name: name,
      };
    });
  };

  const [error, setError] = useState(null);

  useEffect(() => {
    const handleValidation = (data) => {
      if (data.valid) {
        setError(null);
      } else {
        setError(data.error);
      }
    };

    socket.on("validate-name", handleValidation);

    return () => {
      socket.off("validate-name", handleValidation);
    };
  }, []);

  useEffect(() => {
    const debouncedValidation = setTimeout(() => {
      if (state?.name) {
        socket.emit("validate-name", state?.name);
      }
    }, 1000);

    return () => clearTimeout(debouncedValidation);
  }, [state?.name]);

  return [state?.name, setName, error];
}

export default useName;
