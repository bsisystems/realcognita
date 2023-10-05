import React, { useState } from "react";

import { Button } from "primereact/button";
import NavLinks from "./NavLinks";
const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div
      className=" min-h-[10vh] sticky  top-0 z-10 text-gray-800 bg-gray-100 
    dark:bg-slate-950 dark:text-white  "
    >
      <div className="flex gap-4 justify-between items-center max-w-7xl md:mx-auto py-4 mx-4  ">
        <img
          src="/images/realcognita_logo.gif"
          alt=""
          className="cursor-pointer  w-[270px] hover:-translate-y-1"
        />
        <i className="pi pi-bars bg-light-sea-green rounded-full p-5 !block md:!hidden lg:!hidden"></i>

        <NavLinks className=" gap-10  cursor-pointer hidden md:flex lg:flex" />

        <div className="flex gap-2 items-center">
          {/* <OrangeButton
            label="Get Started"
            className={"hidden md:block lg:block"}
          /> */}
          <button className="rounded-full border-2 px-2.5 py-3 border-primary-orange text-primary-orange">
            GET STARTED
          </button>
          {isDarkMode == 1 ? (
            <Button
              text
              icon="pi pi-moon"
              className="animate-pulse "
              onClick={toggleDarkMode}
            />
          ) : (
            <Button
              text
              icon="pi pi-sun"
              className="animate-pulse "
              onClick={toggleDarkMode}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
