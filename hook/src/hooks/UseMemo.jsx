import React, { useEffect, useMemo, useRef, useState } from "react";
import { items } from "../utils";

const UseMemo = () => {
  const [itemsList] = useState(items);
  const [inputl, setInput] = useState("");
  const [stt, setStt] = useState("even");
  const [sortBy, setSortBy] = useState("name ascending");
  const inputElm = useRef(null);
  useEffect(() => {
    inputElm.current.focus();
  }, []);

  const searchedItem = useMemo(() => {
    return itemsList
      .filter((item) => {
        const matchesSearch = item.text.includes(inputl);
        const matchesType =
          stt === "even" ? item.id % 2 === 0 : item.id % 2 !== 0;
        return matchesSearch && matchesType;
      })
      .slice(0, 20);
  }, [itemsList, inputl, stt]);

  const filterItems = useMemo(() => {
    const sorted = [...searchedItem];

    switch (sortBy) {
      case "name ascending":
        sorted.sort((a, b) => a.text.localeCompare(b.text));

        break;
      case "id ascending":
        sorted.sort((a, b) => a.id - b.id);

        break;
      case "name descending":
        sorted.sort((a, b) => b.text.localeCompare(a.text));

        break;

      case "id descending":
        sorted.sort((a, b) => b.id - a.id);
        break;
    }
    return sorted.slice(0, 20);
  }, [sortBy, searchedItem]);
  return (
    <>
      <input
        value={inputl}
        onChange={(e) => setInput(e.target.value)}
        ref={inputElm}
        type="text"
      />
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="name ascending">name ascending</option>
        <option value="name descending">name descending</option>
        <option value="id ascending">id ascending</option>
        <option value="id descending">id descending</option>
      </select>
      <button onClick={() => setStt(stt === "even" ? "odd" : "even")}>
        filter {stt} items
      </button>
      <ul>
        {filterItems &&
          filterItems.length > 0 &&
          filterItems.map((item) => <li key={item.id}>{item.text}</li>)}
      </ul>
    </>
  );
};

export default UseMemo;
