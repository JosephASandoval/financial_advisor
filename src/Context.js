import React, { useState, useEffect } from "react";
import { data } from "./data/data";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    risk: 0,
    bonds: 0,
    largeCap: 0,
    midCap: 0,
    foreign: 0,
    smallCap: 0,
  });
  const [currentAmount, setCurrentAmount] = useState({
    bonds: "",
    largeCap: "",
    midCap: "",
    foreign: "",
    smallCap: "",
  });
  const [difference, setDifference] = useState({
    bonds: "",
    largeCap: "",
    midCap: "",
    foreign: "",
    smallCap: "",
  });
  const [newAmount, setNewAmount] = useState({
    bonds: "",
    largeCap: "",
    midCap: "",
    foreign: "",
    smallCap: "",
  });

  useEffect(() => {
    setPortfolio(data);
  }, []);

  return (
    <Context.Provider
      value={{
        portfolio,
        selectedOption,
        setSelectedOption,
        currentAmount,
        setCurrentAmount,
        difference,
        setDifference,
        newAmount,
        setNewAmount,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
