import React from "react";
import TextAnimation from "../Animations/TextAnimation";
import { ServicesTimeline } from "../ServicesTimeline";
import SectionLayout from "../Layouts/SectionLayout";
const Services = (props) => {
  return (
    <div {...props}>
      <SectionLayout className={"flex flex-col gap-20 justify-center"}>
        <div className="flex md:flex-row flex-col gap-4  items-center">
          <div className=" basis-1/2">
            <TextAnimation>
              <h1 className="font-bold text-5xl tracking-wider">
                A seamless extension of your team.
              </h1>
            </TextAnimation>
          </div>
          <div className="basis-1/2 ">
            <TextAnimation>
              <p className="text-lg  px-[2rem]">
                Looking for effective, reliable ways to scale your business and
                reduce costs? We offer an outsourced suite of services that
                enables you to construct homes faster, better, and more
                economically.
              </p>
            </TextAnimation>
          </div>
        </div>
        <ServicesTimeline />
      </SectionLayout>
    </div>
  );
};

export default Services;
