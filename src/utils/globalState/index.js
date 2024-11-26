"use client";

import { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext(null);

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error("useGlobalState not defined!");
  }

  const [globalState, setGlobalState] = context;

  const handleGlobalState = (value) => {
    setGlobalState(value);
  };

  return { globalState: globalState, setGlobalState: handleGlobalState };
};

export const GlobalStateProvider = ({ children, value }) => {
  const [globalState, setGlobalState] = useState(value || "isDark");

  return (
    <GlobalStateContext.Provider value={[globalState, setGlobalState]}>
      {children}
    </GlobalStateContext.Provider>
  );
};
