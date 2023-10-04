import React, { useState } from "react";
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
import { Button } from "primereact/button";
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

        <ul className=" gap-10  cursor-pointer hidden md:flex lg:flex  ">
          {/* <li
            className={`hover:text-gray-500 ${
              current_location == "/" && "text-primary-orange "
            }`}
          >
            {" "}
            <Link to="/">Home</Link>
          </li> */}

          {/* <li className=" group z-40">
            <span className="group hover:text-gray-500">
              About{" "}
              <i
                className="pi pi-angle-down group-hover:-rotate-180  transition duration-150
"
              ></i>
            </span>
            <ul className="hidden group-hover:block z-50 absolute bg-secondary p-7 rounded-3xl w-64   ">
              <li
                className={`hover:text-primary-orange ${
                  current_location == "/about" && "text-primary-orange "
                }`}
              >
                <Link to="/about">Meet Our Team</Link>
              </li>
              <li
                className={`hover:text-primary-orange ${
                  current_location == "/careers" && "text-primary-orange "
                }`}
              >
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </li> */}
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
          {/* <li className=" group z-40">
            <span className="group hover:text-gray-500">
              Expertise{" "}
              <i
                className="pi pi-angle-down group-hover:-rotate-180  transition duration-150
"
              ></i>
            </span>
            <ul className="hidden group-hover:block z-50 absolute bg-secondary p-7 rounded-3xl w-64   ">
              <li
                className={`hover:text-primary-orange ${
                  current_location == "/approach" && "text-primary-orange "
                }`}
              >
                <Link to="/approach">Our Approach</Link>
              </li>
              <li className="hover:text-teal-200">Services</li>
            </ul>
          </li> */}
          {/* <li>
            <SnapLink
              activeClass="border-b-2 border-primary-orange text-primary-orange pb-2"
              to="archive"
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
              ARCHIVES
            </SnapLink>
          </li> */}
          <li>
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
          </li>
        </ul>

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
