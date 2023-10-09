import React from "react";
import CardAnimation from "./Animations/CardAnimation";
const FounderBio = () => {
  const founders = [
    {
      id: crypto.randomUUID(),
      name: "Julian Ambrose",
      role: "Founder & Chair",
      bio: `Julian founded Realcognita over 20 years ago after realizing there was a need for a purpose-built administration system to support the growth plans for the company he directed, BGC Residential. The system has evolved over time and assisted BGC Residential in growing to be one of the largest residential home builders in Australia.
  ‍
  Along the way, Julian created a sister company to perform essential services to feed into the RCN system and the home building process. This company focuses on drafting, estimating, scheduling, and other administrative services. Recently both companies have merged to provide a seamless administrative solution to residential builders. Whether it’s simply providing a set of construction drawings, a 3D render, an estimate, or providing a total outsourced administrative function, Realcognita now provides as little or as much help a small or large building company requires.`,
    },
    {
      id: crypto.randomUUID(),
      name: "Kelvin Ryan",
      role: "CEO",
      bio: `Kelvin Ryan, CEO of Realcognita, has extensive executive-level experience in the housing industry. Kelvin has spent more than 15 years working across a number of jurisdictions, including at the forefront of Australia’s residential building industry as CEO of major home builders Simonds Homes and BGC Housing. As industry leaders, Kelvin and Realcognita founder Julian Ambrose have experience working closely together prior to teaming up for this exciting endeavor.

      Kelvin has a passion for affordable housing and has been instrumental in developing affordable solutions in his home state in West Australia. He also has a strong interest in alternative building techniques. Most recently, Kelvin has been appointed by the Australian government to the board of National Housing Finance and Investment Corporation (NHFIC), an entity focused on increasing the supply of affordable housing and contributing to housing research in Australia.`,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {founders.map((founder, item) => {
        return (
          <CardAnimation key={founder.id}>
            <div className=" p-5 md:p-14 flex flex-col gap-4 shadow-[10px_10px_0_0_rgb(65,103,121)] border-realcognita border-2 rounded-xl">
              <div>
                <h1 className="font-bold text-3xl">{founder.name},</h1>
                <h1 className="font-bold text-3xl">{founder.role}</h1>
              </div>
              <p className="whitespace-pre-line tracking-wider font-semibold  leading-6 text-lg">
                {founder.bio}
              </p>
            </div>
          </CardAnimation>
        );
      })}
    </div>
  );
};

export default FounderBio;
