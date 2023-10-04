import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
const DefaultLayout = ({ children }) => {
  return (
    <div
      className="text-gray-800 bg-gray-100 
  dark:bg-slate-950 dark:text-white"
    >
      {children}
    </div>
  );
};

export default DefaultLayout;
