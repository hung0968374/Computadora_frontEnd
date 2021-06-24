import React from "react";
import { useSelector } from "react-redux";
import { tokenFromRdx } from "../redux/features/userToken";

export default function LapItem({ match }) {
  const token = useSelector(tokenFromRdx);
  console.log("token from redux", token);

  return <div>laptop item {token}</div>;
}
