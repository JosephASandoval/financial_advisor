import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [state1, setState1] = useState(0);

  useEffect(() => {
    setState1(1);
  }, []);

  return (
    <Context.Provider
      value={{
        state1,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
