import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import CardAnimation from "./Animations/CardAnimation";
const ExpertiseCard = () => {
  const expertise = [
    {
      id: crypto.randomUUID(),
      image: "images/expertise/brain.png",
      title: "Deep industry knowledge & experience",
      subtitle: `Our founder and CEO have both run large residential building companies.
        Together with our executive team, they lead a talented team that helps builders around the world scale up,
        reduce costs, and deliver projects on time and on budget.`,
    },
    {
      id: crypto.randomUUID(),
      image: "images/expertise/cog.png",
      title: "A seamless extension of your team",
      subtitle: `We provide an outsourced suite of services that streamlines operations for builders,
       improving efficiencies as well as outcomes. Not ready to place the entirety of your architectural drafting,
        estimating, rendering, or administration work with us? Start with just a portion!`,
    },
    {
      id: crypto.randomUUID(),
      image: "images/expertise/bulb.png",
      title: "High-caliber talent, made accessible",
      subtitle: `Partnering with Realcognita means accessing talent equipped with the skills, knowledge,
       and experience necessary to empower some of the world’s largest, most prominent residential home builders.
        Our team is available and ready to work with you.`,
    },
    {
      id: crypto.randomUUID(),
      image: "images/expertise/map.png",
      title: "Empowering visionary builders & industry progress",
      subtitle: `Builders have an incredible opportunity to scale their business,
       reduce costs, and build homes faster, better, and more economically by embracing technological advancement.
        We're equipped with the skills, resources, and attitude to guide our clients, and the industry, forward.`,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {expertise.map((item) => {
        return (
          <CardAnimation key={item.id}>
            <div className="px-5 py-7 rounded-xl flex flex-col gap-8   text-center items-center group relative cursor-pointer">
              <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-realcognita transition-all duration-500 group-hover:w-full"></span>
              <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-realcognita transition-all duration-500 group-hover:h-full"></span>
              <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-realcognita transition-all duration-500 group-hover:w-full"></span>
              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-realcognita transition-all duration-500 group-hover:h-full"></span>
              <img src={item.image} alt={item.image} className="w-40" />
              <h1 className="text-xl font-semibold "> {item.title}</h1>
              <p>{item.subtitle}</p>
            </div>
          </CardAnimation>
        );
      })}
    </div>
  );
};

export default ExpertiseCard;
