import React from "react";
import OrangeButton from "./OrangeButton";
import Drafting from "./Modals/Drafting";
const ServiceCard = ({ service }) => {
  return (
    <div
      className="px-5 py-7 rounded-xl flex flex-col gap-8  text-center items-center
      group relative cursor-pointer
    "
    >
      <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-realcognita transition-all duration-500 group-hover:w-full"></span>
      <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-realcognita transition-all duration-500 group-hover:h-full"></span>
      <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-realcognita transition-all duration-500 group-hover:w-full"></span>
      <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-realcognita transition-all duration-500 group-hover:h-full"></span>
      <h1 className="font-bold text-3xl ">{service.title}</h1>
      <p>{service.subtitle}</p>
      {/* <OrangeButton label={"Learn More"} className="w-fit" />
       */}
      {service.modal}
    </div>
  );
};

export default ServiceCard;
