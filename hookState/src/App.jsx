import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Play from "./pages/Play";
import NotFound from "./pages/NotFound";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("white");
  const handleTheme = () => {
    setTheme((prev) => (prev === "white" ? "dark" : "white"));
  };
  const routes = createBrowserRouter([
    { path: "/", element: <Home theme={theme} setTheme={handleTheme} /> },
    { path: "/about", element: <About theme={theme} setTheme={handleTheme} /> },
    { path: "/play", element: <Play theme={theme} setTheme={handleTheme} /> },
    { path: "*", element: <NotFound /> },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
