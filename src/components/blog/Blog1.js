import React from "react";

export default function Blog1({ data }) {
  console.log(data);

  return (
    <div>
      <div>id: {data.id} </div>
      <div>random: {data.name}</div>
    </div>
  );
}
