import React from "react";
import { useSelector } from "react-redux";
import { countVal } from "../redux/features/CounterSlice";

export default function Login() {
  const count = useSelector(countVal);
  return <div>Login {count}</div>;
}
