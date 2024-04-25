import React from "react";
import OrangeButton from "./OrangeButton";
import { useLocation, Link } from "react-router-dom";
import {
  Link as SnapLink,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const NavLinks = (props) => {
  return (
    <ul className="  " {...props}>
      <SnapLink
        activeClass="border-b-2 border-primary-orange text-primary-orange pb-2"
        to="about"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-100}
        duration={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}
        className="hover:text-custom loading-underline tracking-widest "
      >
        ABOUT
      </SnapLink>
      <SnapLink
        activeClass="border-b-2 border-primary-orange text-primary-orange pb-2"
        to="expertise"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-100}
        duration={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}
        className="hover:text-custom loading-underline tracking-widest"
      >
        EXPERTISE
      </SnapLink>
      <SnapLink
        activeClass="border-b-2 border-primary-orange text-primary-orange pb-2"
        to="our_team"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-100}
        duration={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}
        className="hover:text-custom loading-underline "
      >
        OUR TEAM
      </SnapLink>
      <li>
        <SnapLink
          activeClass="border-b-2 border-primary-orange text-primary-orange pb-2"
          to="services"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-100}
          duration={500}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
          className="hover:text-custom loading-underline tracking-widest"
        >
          SERVICES
        </SnapLink>
      </li>

      {/* <li>
        <SnapLink
          activeClass="border-b-2 border-primary-orange text-primary-orange pb-2"
          to="insights"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-100}
          duration={500}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
          className="hover:text-custom loading-underline tracking-widest"
        >
          INSIGHTS
        </SnapLink>
      </li> */}
    </ul>
  );
};

export default NavLinks;
