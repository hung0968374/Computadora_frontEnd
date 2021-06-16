import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import ComponentA from "../components/contextApi/contextComponent/ComponentA";
import ComponentB from "../components/contextApi/contextComponent/ComponentB";
import ComponentC from "../components/contextApi/contextComponent/ComponentC";

const initialState = {
  firstCount: 0,
  secondCount: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, firstCount: state.firstCount + action.value };
    case "DEC":
      return { ...state, firstCount: state.firstCount - action.value };
    case "INC_BY_5":
      return { ...state, secondCount: state.secondCount - action.value };
    case "RESET":
      return initialState;
  }
};

export const GlobalContext = createContext();

export default function ContextApiTest() {
  const [count, dispatchCount] = useReducer(reducer, initialState);
  const [count2, dispatchCount2] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider
      value={{ count, dispatchCount, count2, dispatchCount2 }}
    >
      <div style={{ margin: "auto" }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
        1count: {count.firstCount}, 2count: {count.secondCount}
        <button onClick={() => dispatchCount({ type: "INC", value: 10 })}>
          Inc
        </button>
        <button onClick={() => dispatchCount({ type: "DEC", value: 10 })}>
          DES
        </button>
        <button onClick={() => dispatchCount({ type: "INC_BY_5", value: 1 })}>
          in by 5
        </button>
        <button onClick={() => dispatchCount({ type: "RESET" })}>reset</button>
        <br></br>
        <br />
        anotherCount1: {count2.firstCount}, anotherCount2: {count2.secondCount}
        <button onClick={() => dispatchCount2({ type: "INC", value: 10 })}>
          Inc
        </button>
        <button onClick={() => dispatchCount2({ type: "DEC", value: 10 })}>
          DES
        </button>
        <button onClick={() => dispatchCount2({ type: "INC_BY_5", value: 1 })}>
          in by 5
        </button>
        <button onClick={() => dispatchCount2({ type: "RESET" })}>reset</button>
      </div>
    </GlobalContext.Provider>
  );
}
