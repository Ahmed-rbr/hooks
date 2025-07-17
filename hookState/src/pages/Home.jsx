import React from "react";
import Nav from "../Components/Nav";
const Home = ({ theme, setTheme }) => {
  return (
    <div>
      <Nav theme={theme} setTheme={setTheme} />
      Home
    </div>
  );
};

export default Home;
