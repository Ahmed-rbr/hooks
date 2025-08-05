import React, { useCallback, useEffect, useRef, useState } from "react";
import List from "./List";

const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  const getItems = useCallback(
    (num) => {
      return [
        parseInt(number),
        parseInt(number) + 1 + parseInt(num),
        parseInt(number) + 2 + parseInt(num),
      ];
    },
    [number]
  );
  const inputElm = useRef(null);
  const theme = {
    bg: dark ? "bg-black" : "bg-white",
    text: dark ? "text-white" : "text-black",
  };
  useEffect(() => {
    inputElm.current.focus();
  }, []);
  return (
    <div className={`${theme.bg} ${theme.text}`}>
      <input
        ref={inputElm}
        className={`${theme.bg} ${theme.text}`}
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() => setDark((prev) => !prev)}
        className="bg-gray-400 px-4 py-1.5"
      >
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallback;
