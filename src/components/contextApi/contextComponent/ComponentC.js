import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import SubComponentC from "./SubComponentC";

function ComponentC() {
  const { dispatchCount2 } = useContext(GlobalContext);
  return (
    <div>
      component C
      <SubComponentC />
      <br />
      <button
        onClick={() => {
          dispatchCount2({ type: "INC", value: 6 });
        }}
      >
        dispatch inc count2 by 6
      </button>
      <button
        onClick={() => {
          dispatchCount2({ type: "DEC", value: 6 });
        }}
      >
        dispatch dec count2 by 6
      </button>
    </div>
  );
}

export default ComponentC;
