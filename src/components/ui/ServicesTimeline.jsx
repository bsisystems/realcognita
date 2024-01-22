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
        "Our skilled team of architects and drafters couples extensive knowledge with the industry’s most advanced software to take a project from conceptualization to design to documentation. ",
      modal: <Drafting />,
    },
    {
      id: crypto.randomUUID(),
      title: "Estimating & Scheduling",
      image: "Estimating & Scheduling.svg",
      subtitle:
        "Our proven proprietary estimating system works with home builders and architects maintaining existing libraries of products, fixtures, and materials or building new libraries from scratch. ",
      modal: <Estimating />,
    },
    {
      id: crypto.randomUUID(),
      title: "3D Rendering",
      image: "3D Rendering.svg",
      subtitle:
        "Creating 3D renderings from scratch, using existing 2D drawings, or an existing 3D model; we can make your project come alive and come to life with our state-of-the-art rendering software used by in-house architectural designers and visual artists. ",
      modal: <Rendering />,
    },
    {
      id: crypto.randomUUID(),
      title: "Administration Services",
      image: "Administration Services.svg",
      subtitle:
        "As former builders and knowing the building industry as a whole; we understand how easy it is to become bogged down by back-office administration. We’re equipped to take on the entirety (or just a portion) of day-to-day tasks so you and your team can focus on what you do best: designing, constructing, selling and building homes.",
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
