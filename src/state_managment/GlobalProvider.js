import { createContext, useState, useContext } from "react";
import useToken from "../business_logic/hooks/useToken";
import { is } from "date-fns/locale";
import useSyncData from "../business_logic/hooks/useData";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    isEmailValid: false,
    phone: "",
    isPhoneValid: false,
    childrenCount: 0,
    adultsCount: 0,
    selectedCourse: null,
    price: 0,
  });

  const [tokenExists, isTokenLoading] = useToken();

  return (
    <GlobalContext.Provider
      value={{ state, setState, tokenExists, isTokenLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
