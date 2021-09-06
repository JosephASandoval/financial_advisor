import React, { useState, useEffect } from "react";
import { data } from "./data/data";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);

  useEffect(() => {
    setPortfolio(data);
  }, []);

  return (
    <Context.Provider
      value={{
        portfolio,
        selectedOption,
        setSelectedOption,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
