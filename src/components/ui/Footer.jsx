import React from "react";
import OrangeButton from "./OrangeButton";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <div
      className="text-gray-800 bg-gray-100 
    dark:bg-slate-950 dark:text-white"
    >
      <div className="flex flex-col gap-4 items-center w-3/6 mx-auto font-semibold py-8">
        <img
          src="images/realcognita_logo.gif"
          alt="company_logo"
          className="w-60"
        />
        <h2 className="text-center uppercase text-sm tracking-widest whitespace-pre-line">
          {` Architectural drafting, estimating, 3D rendering, and administration services
           empowering visionary builders`}
        </h2>
        <OrangeButton label={"Contact Us"} className="text-sm" />
        <SocialMediaLinks />
      </div>

      <div className="border-t-[1px] border-gray-400   text-center p-7 w-11/12 mx-auto">
        <span className="text-sm text-gray-300 ">Copyright © Realcognita</span>
      </div>
    </div>
  );
};

export default Footer;
