import React from "react";
export default function LapItem({ match }) {
  console.log(match.params.id);
  return <div>laptop item</div>;
}
