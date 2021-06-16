import React from "react";
import { useContext } from "react";
import {
  GlobalContext,
  GlobalProvider,
} from "../components/contextApi/context/GlobalState";
import ComponentA from "../components/contextApi/contextComponent/ComponentA";
import ComponentB from "../components/contextApi/contextComponent/ComponentB";
import ComponentC from "../components/contextApi/contextComponent/ComponentC";

export default function ContextApiTest() {
  return (
    <GlobalProvider>
      <div style={{ margin: "auto" }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </GlobalProvider>
  );
}
