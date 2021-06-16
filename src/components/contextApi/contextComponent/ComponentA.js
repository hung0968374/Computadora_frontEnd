import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../pages/ContextApiTest";

function ComponentA() {
  const countContext = useContext(GlobalContext);
  return (
    <div>
      componentA
      <button
        onClick={() => countContext.dispatchCount2({ type: "INC", value: 5 })}
      >
        dispatch inc count2 by 5
      </button>
    </div>
  );
}

export default ComponentA;
