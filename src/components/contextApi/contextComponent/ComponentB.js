import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ComponentB() {
  const globalCount = useContext(GlobalContext);
  return (
    <div>
      componentB
      <br />
      firstCount: count1 - {globalCount.count.firstCount}, count2 -{" "}
      {globalCount.count.secondCount}
      <br />
      <br />
      secondCount: count1 - {globalCount.count2.firstCount}, count2 -{" "}
      {globalCount.count2.secondCount}
      <br />
      <br />
    </div>
  );
}

export default ComponentB;
