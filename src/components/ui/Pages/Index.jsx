import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import React from "react";
import ServiceCard from "../ServiceCard";
import Intro from "../Intro";
import Clients from "../Clients";
import CarouselFeedbacks from "../CarouselFeedbacks";
import OrangeButton from "../OrangeButton";

import SectionLayout from "../Layouts/SectionLayout";
import DefaultLayout from "../Layouts/DefaultLayout";
import Expertise from "./Expertise";
import Footer from "../Footer";
import Approach from "./Approach";
import { ServicesTimeline } from "../ServicesTimeline";
import OurTeam from "./OurTeam";
import ContactUs from "../ContactUs";
export const Index = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className={`relative ${isDarkMode && "dark"} `}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <DefaultLayout>
        <section id="about">
          <div className=" relative items-center flex justify-center ">
            <video
              id="my-video"
              poster=""
              controls={false}
              loop
              autoPlay
              muted
              className=" w-full object-cover brightness-50 h-auto  min-h-[90vh] md:max-h-[90vh]"
            >
              <source src="videos/3d_render.mp4" type="video/mp4" />
              <source src="videos/3d_render.mp4" type="video/ogg" />
              Your browser does not support the video tag.
            </video>

            <SectionLayout
              className={"flex flex-col justify-between  absolute "}
            >
              <Intro />
              <Clients />
            </SectionLayout>
          </div>
        </section>

        <section id="expertise">
          <SectionLayout className={"flex flex-col gap-8 justify-center"}>
            <h1 className="text-4xl md:text-4xl font-bold uppercase tracking-wider whitespace-pre-line">
              {`The Realcognita difference: 
              Advanced solutions for next-generation thinkers`}
            </h1>
            <Expertise />
          </SectionLayout>
          <section
            style={{
              background: `url('images/renders/render-1.jpg') no-repeat  , rgba(41, 72, 80, 0.8)  `,
              backgroundBlendMode: "multiply",
            }}
            className="!bg-cover"
          >
            <Approach />
          </section>
        </section>

        <section id="our_team">
          <SectionLayout>
            <OurTeam />
          </SectionLayout>
        </section>
        <section id="services">
          <SectionLayout className={"flex flex-col gap-20 justify-center"}>
            <div className="flex md:flex-row flex-col gap-4  items-center">
              <div className=" basis-1/2">
                <h1 className="font-bold text-5xl tracking-wider">
                  A seamless extension of your team.
                </h1>
              </div>
              <div className="basis-1/2 ">
                <p className="text-lg  px-[2rem]">
                  Looking for effective, reliable ways to scale your business
                  and reduce costs? We offer an outsourced suite of services
                  that enables you to construct homes faster, better, and more
                  economically.
                </p>
              </div>
            </div>
            <ServicesTimeline />
          </SectionLayout>
        </section>
        {/* <SectionLayout className={"flex flex-col gap-10"}>
            <div
              className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-8 bg-realcognita rounded-xl  bg-cover py-5"
              style={{
                backgroundImage: `url("images/renders/pattern_bg.png")`,
              }}
            >
              <div className="basis-1/2 order-1 md:order-0">
                <img src="images/renders/house.png" alt="" />
              </div>

              <div className="basis-1/2 space-y-4 px-[2rem] order-0 md:order-1">
                <h1 className="font-bold text-3xl">
                  Partner with Realcognita for faster, better, more economical
                  home building.
                </h1>
                <OrangeButton
                  label={"SCHEDULE A COMPLIMENTARY CONSULTATION"}
                  className="text-sm"
                />
              </div>
            </div>
          </SectionLayout> */}
      </DefaultLayout>
      <Footer />
      <ContactUs />
    </div>
  );
};
