import React from "react";
import NavLinks from "./NavLinks";
import OrangeButton from "./OrangeButton";
import GetStarted from "./GetStarted";
import { Button } from "primereact/button";
const HamburgerMenu = () => {
  return (
    <ul className=" group  w-full lg:hidden md:block sm:block ">
      <Button text icon="pi pi-bars" className="relative " />
      {/* <i className="pi pi-bars bg-primary-orange rounded-full p-5 relative"></i> */}
      <div className="w-full bg-slate-950  p-5 absolute  left-0 rounded-md  hidden group-hover:block mt-2 ">
        <NavLinks className=" gap-4  cursor-pointer flex flex-col" />
      </div>
    </ul>
  );
};

export default HamburgerMenu;
