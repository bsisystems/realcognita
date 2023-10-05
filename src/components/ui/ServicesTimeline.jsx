import React from "react";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import ServiceCard from "./ServiceCard";
import Drafting from "./Modals/Drafting";
import Estimating from "./Modals/Estimating";
import Rendering from "./Modals/Rendering";
import Administration from "./Modals/Administration";
import ScrollAnimation from "react-animate-on-scroll";
export const ServicesTimeline = () => {
  const services = [
    {
      id: crypto.randomUUID(),
      title: "Architectural Drafting",
      image: "Administration Services.svg",
      subtitle:
        "Skilled architects and drafters are there to support you during any stage of design. ",
      modal: <Drafting />,
    },
    {
      id: crypto.randomUUID(),
      title: "Estimating & Scheduling",
      image: "Estimating & Scheduling.svg",
      subtitle:
        "Leverage our proprietary estimating system to help you take control of your costs. ",
      modal: <Estimating />,
    },
    {
      id: crypto.randomUUID(),
      title: "3D Rendering",
      image: "3D Rendering.svg",
      subtitle:
        "Highly skilled visual artists create next level 3D renderings to bring a project to life. ",
      modal: <Rendering />,
    },
    {
      id: crypto.randomUUID(),
      title: "Administration Services",
      image: "Administration Services.svg",
      subtitle:
        "Create efficiencies by using our administrative services to ease the burden of back end office tasks.",
      modal: <Administration />,
    },
  ];

  const customizedMarker = (item) => {
    return (
      <div className=" w-20 h-20">
        <img src={`images/${item.image}`} alt="" />
      </div>
    );
  };

  const customizedContent = (item, index) => {
    var animation = null;
    if (index % 2 == 0) {
      animation = { in: "fadeInRight", out: "fadeOutRight" };
    } else {
      animation = { in: "fadeInLeft", out: "fadeOutLeft" };
    }

    return (
      <ScrollAnimation animateIn={animation.in}>
        <ServiceCard service={item} />
      </ScrollAnimation>
    );
  };
  return (
    <Timeline
      value={services}
      align="alternate"
      className="customized-timeline"
      marker={customizedMarker}
      content={customizedContent}
    />
  );
};
