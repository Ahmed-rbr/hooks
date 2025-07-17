import { Link } from "react-router-dom";
const Nav = ({ theme, setTheme }) => {
  return (
    <nav
      className={`${
        theme == "white" ? "text-black" : "text-white"
      } flex gap-11 p-3 w-2/5 m-auto justify-between items-center bg-red-400`}
    >
      <Link
        className={`${theme == "white" ? "text-black" : "text-white"}`}
        to={"/"}
      >
        home
      </Link>
      <Link
        className={`${theme == "white" ? "text-black" : "text-white"}`}
        to={"/play"}
      >
        play
      </Link>
      <Link
        className={`${theme == "white" ? "text-black" : "text-white"}`}
        to={"/about"}
      >
        about
      </Link>
      <button
        onClick={() => setTheme()}
        className={`${
          theme == "white" ? "text-black bg-amber-100" : "text-white bg-black"
        } px-4 py-1`}
      >
        set{theme === "white" ? "white" : "dark"}
      </button>
    </nav>
  );
};

export default Nav;
