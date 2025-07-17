import React from "react";
import Nav from "../Components/Nav";

const About = ({ theme, setTheme }) => {
  return (
    <div>
      <Nav theme={theme} setTheme={setTheme} />

      <h1
        className={`${
          theme == "white" ? "text-black bg-amber-100" : "text-white bg-black"
        } px-4 py-1`}
      >
        this is about
      </h1>
      <p
        className={`${
          theme == "white" ? "text-black bg-amber-100" : "text-white bg-black"
        } px-4 py-1`}
      >
        Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
};

export default About;
