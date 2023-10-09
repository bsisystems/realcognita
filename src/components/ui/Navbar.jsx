import React, { useState } from "react";

import { Button } from "primereact/button";
import NavLinks from "./NavLinks";
import HamburgerMenu from "./HamburgerMenu";
import GetStarted from "./GetStarted";
import DarkMode from "./DarkMode";
import Logo from "./Logo";
const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className=" min-h-[10vh] sticky  top-0 z-10 bg-slate-950 text-white shadow-md">
      <div className="flex gap-4 justify-between items-center max-w-7xl md:mx-auto py-4 mx-4  ">
        <Logo />
        <NavLinks className=" gap-10  cursor-pointer hidden md:hidden lg:flex" />

        <div className="flex gap-2 items-center">
          <HamburgerMenu />
          <GetStarted />
          <DarkMode toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
