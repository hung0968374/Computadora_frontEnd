import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  count: [
    { count: 11, id: 1 },
    { count: 12, id: 2 },
    { count: 13, id: 3 },
    { count: 14, id: 4 },
    { count: 15, id: 5 },
  ],
};

export const BlobalContext = createContext(initialState);

////////// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ count: state.count }}>
      {children}
    </GlobalContext.Provider>
  );
};
