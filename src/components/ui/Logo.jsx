import React from "react";
import { animateScroll as scroll } from "react-scroll";
const Logo = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <img
      src="images/logo/realcognita_logo.gif"
      alt="realcognita"
      className="cursor-pointer  w-[150px] md:w-[270px] hover:-translate-y-1  rounded-md "
      onClick={scrollToTop}
    />
  );
};

export default Logo;
