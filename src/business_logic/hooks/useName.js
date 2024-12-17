import { useEffect, useState } from "react";
import { socket } from "../../services/server/Socket";
import { useGlobalContext } from "../../state_managment/GlobalProvider";
import { useParams } from "react-router-dom";

function useName() {
  const { token } = useParams();

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

    socket.on("name", handleValidation);

    return () => {
      socket.off("name", handleValidation);
    };
  }, []);

  useEffect(() => {
    const debouncedValidation = setTimeout(() => {
      if (state.name) {
        socket.emit("name", { name: state?.name, token: token ? token : null });
      }
    }, 1000);

    return () => clearTimeout(debouncedValidation);
  }, [state.name]);

  return [state.name, setName, error];
}

export default useName;
