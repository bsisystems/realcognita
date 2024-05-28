import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
const Offices = () => {
  const offices = [
    {
      name: "US",
      address: `5816 West Plano Pkwy Plano, 
      TX 75093 United States`,
      contact_no: "(469) 606-1988",
    },
    {
      name: "Philippines",
      address: `15F Four/Neo 4th Avenue,
      cor. 30th and 31st St. Bonifacio Global City,
      Taguig Manila 1634, Philippines`,
      contact_no: "+63 917 519 0137",
    },
    {
      name: "Australia",
      address: `11 Cressall Road
      Balcatta WA 6021 Australia`,
      contact_no: "+618-610-3853",
    },
    {
      name: "Singapore",
      address: `1003 Bukit Merah Central,
      No. 04 – 35 Imo Centre,
       Singapore 159836`,
      contact_no: "",
    },
  ];
  const itemTemplate = (item) => {
    return (
      <div className="flex flex-col gap-2  ">
        <h1 className="font-bold text-primary-orange">{item.name}</h1>
        <span className="whitespace-pre-line">{item.address}</span>
        <span>{item.contact_no}</span>
        <span className="text-cyan-500 font-bold hover:text-custom loading-underline  cursor-pointer">
          <i className="pi pi-map-marker p-2.5  rounded-full"></i> VIEW ON
          GOOGLE MAP
        </span>
      </div>
    );
  };

  return (
    <Galleria
      value={offices}
      changeItemOnIndicatorHover
      showThumbnails={false}
      showIndicators
      item={itemTemplate}
      transitionInterval={4000}
      circular
      autoPlay
      className="6w-64 h-64 "
    />
  );
};

export default Offices;
