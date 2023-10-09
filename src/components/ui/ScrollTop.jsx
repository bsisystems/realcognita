import React from "react";
import { animateScroll as scroll } from "react-scroll";
const ScrollTop = ({ visible }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={`fixed bottom-5 left-5 ${visible ? "block" : "hidden"}`}>
      <div
        onClick={scrollToTop}
        className="hover:text-custom loading-underline h-10 w-10 md:w-20 md:h-20 text-center  cursor-pointer mx-auto flex flex-col items-center justify-center "
      >
        <div>
          <i
            className="pi pi-angle-double-up
items-center !text-2xl"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ScrollTop;
