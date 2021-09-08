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

  useEffect(() => {
    if (typeof newAmount.bonds !== "string") {
      setDifference({
        bonds: Math.round((newAmount.bonds - currentAmount.bonds) * 100) / 100,
        largeCap:
          Math.round((newAmount.largeCap - currentAmount.largeCap) * 100) / 100,
        midCap:
          Math.round((newAmount.midCap - currentAmount.midCap) * 100) / 100,
        foreign:
          Math.round((newAmount.foreign - currentAmount.foreign) * 100) / 100,
        smallCap:
          Math.round((newAmount.smallCap - currentAmount.smallCap) * 100) / 100,
      });
    }
  }, [newAmount]);

  return (
    <Context.Provider
      value={{
        portfolio,
        selectedOption,
        setSelectedOption,
        currentAmount,
        setCurrentAmount,
        difference,
        newAmount,
        setNewAmount,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
