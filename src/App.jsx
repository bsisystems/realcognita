import "./App.css";
import { Index } from "./components/ui/Pages/Index";

import React, { useState } from "react";

function App() {
  const storedMode = localStorage.getItem("mode");

  const [isDarkMode, setIsDarkMode] = useState(storedMode === "light" ? 0 : 1);

  const toggleDarkMode = () => {
    const newMode = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("mode", newMode);
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Index />,
  //   },
  //   {
  //     path: "about",
  //     element: <OurTeam />,
  //   },
  //   {
  //     path: "careers",
  //     element: <Careers />,
  //   },
  //   {
  //     path: "approach",
  //     element: <Approach />,
  //   },
  // ]);

  return <Index toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />;
}

export default App;
