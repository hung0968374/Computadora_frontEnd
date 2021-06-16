import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ComponentA() {
  const countContext = useContext(GlobalContext);
  return (
    <div>
      componentA
      <button
        onClick={() => countContext.dispatchCount({ type: "INC", value: 5 })}
      >
        dispatch inc count1 by 5
      </button>
      <button
        onClick={() => countContext.dispatchCount({ type: "DEC", value: 5 })}
      >
        dispatch des count1 by 5
      </button>
    </div>
  );
}

export default ComponentA;
