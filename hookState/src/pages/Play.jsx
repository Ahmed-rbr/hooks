import React from "react";
import Nav from "../Components/Nav";

const Play = ({ theme, setTheme }) => {
  return (
    <div>
      <Nav theme={theme} setTheme={setTheme} />
      Play
    </div>
  );
};

export default Play;
