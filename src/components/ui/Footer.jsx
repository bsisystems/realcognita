import React from "react";
import NavLinks from "./NavLinks";
import Offices from "./Offices";
import OrangeButton from "./OrangeButton";
import SocialMediaLinks from "./SocialMediaLinks";
import Logo from "./Logo";
const Footer = () => {
  return (
    <div className="bg-slate-950 text-white  p-7  shadow-md flex flex-col gap-4">
      <div className="flex flex-col  md:flex-row lg:flex-row gap-4 items-center justify-between    ">
        <Offices />
        <div className="flex flex-col gap-4  font-semibold items-center text-center ">
          <Logo />
          <h2 className=" uppercase text-sm tracking-widest whitespace-normal md:whitespace-pre-line ">
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
        <span className="text-sm ">Copyright © Realcognita</span>
      </div>
    </div>
  );
};

export default Footer;
