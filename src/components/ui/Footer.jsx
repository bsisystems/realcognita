import React from "react";
import NavLinks from "./NavLinks";
import Offices from "./Offices";
import OrangeButton from "./OrangeButton";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <div
      className="text-gray-800 bg-gray-100 
    dark:bg-slate-950 dark:text-white  p-7 flex flex-col shadow-md "
    >
      <div className="flex gap-4 items-center justify-between    ">
        <Offices />
        <div className="flex flex-col gap-4  font-semibold items-center text-center ">
          <img
            src="images/realcognita_logo.gif"
            alt="company_logo"
            className="w-60"
          />
          <h2 className=" uppercase text-sm tracking-widest whitespace-pre-line">
            {` Architectural drafting, estimating, 3D rendering, and administration services
           empowering visionary builders`}
          </h2>
        </div>{" "}
        {/* <div className="flex flex-col gap-2 ">
          <h1 className="font-bold text-primary-orange">
            &#x1f1fa;&#x1f1f8; US OFFICE
          </h1>
          <span className="whitespace-pre-line">
            {`5816 West Plano Pkwy Plano,
             TX 75093 United States`}
          </span>
          <span>(469) 606-1988</span>
          <span className="text-cyan-500 font-bold hover:text-custom loading-underline  cursor-pointer">
            <i className="pi pi-map-marker p-2.5  rounded-full"></i> VIEW ON
            GOOGLE MAP
          </span>
        </div> */}
        <SocialMediaLinks />
      </div>
      <div className="   text-center border-t-[1px] border-gray-400 p-5 w-11/12 mx-auto ">
        <span className="text-sm font-bold ">Copyright © Realcognita</span>
      </div>
    </div>
  );
};

export default Footer;
