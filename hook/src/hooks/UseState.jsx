import React, { useState } from "react";

const UseState = () => {
  const [color, setColor] = useState("Red");
  const changColor = () => {
    setColor((prevColor) => (prevColor === "Red" ? "Blue" : "Red"));
  };
  return (
    <>
      <h1> My favorite color is {color}</h1>
      <button
        className="px-4 py1 bg-amber-400 rounded "
        onClick={() => changColor()}
      >
        {color === "Red" ? "Blue" : "Red"}{" "}
      </button>
    </>
  );
};

export default UseState;
