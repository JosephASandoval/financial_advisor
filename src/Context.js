import React, { useState, useEffect } from "react";
import { data } from "./data/data";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    setPortfolio(data);
  }, []);

  return (
    <Context.Provider
      value={{
        portfolio,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
