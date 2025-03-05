import React, { createContext, useContext, useEffect, useState } from "react";
// Step 1: Create a context
const GlobalStateContext = createContext();

// Step 2: Create a provider component
export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    user: null,
    token:null
  });
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("naturemonk_user")))
    setGlobalState({ ...globalState, token:JSON.parse(localStorage.getItem("naturemonk_token")), user: JSON.parse(localStorage.getItem("naturemonk_user"))});
  }, []);
  
  return <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>{children}</GlobalStateContext.Provider>;
};
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
