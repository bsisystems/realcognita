import React from "react";
import OrangeButton from "./OrangeButton";
import {
  Link as SnapLink,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const Intro = () => {
  return (
    <div className="text-white text-center flex flex-col gap-10  w-full md:w-full md:mx-auto ">
      <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-wider ">
        Residential Building Services
      </h1>
      <p className="text-xl md:text-4xl tracking-wider">
        Architectural drafting, estimating, 3D rendering, and administration
        services empowering visionary builders
      </p>

      {/* <OrangeButton
        label={"SCHEDULE A COMPLIMENTARY CONSULTATION"}
        className="mx-auto"
      /> */}
      <SnapLink
        to="expertise"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-100}
        duration={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}
        className="hover:text-custom loading-underline w-40 h-20  cursor-pointer mx-auto flex flex-col items-center justify-center"
      >
        KNOW MORE
        <div>
          <i className="pi pi-angle-double-down items-center !text-2xl"></i>
        </div>
      </SnapLink>
    </div>
  );
};

export default Intro;
