import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <GlobalContext.Provider value={{ cart, setCart }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
