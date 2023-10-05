import React from "react";
import DefaultLayout from "../Layouts/DefaultLayout";
import SectionLayout from "../Layouts/SectionLayout";
import FounderBio from "../FounderBio";
import ExecutiveTeam from "../ExecutiveTeam";
import Banner from "../Banner";
import TextAnimation from "../Animations/TextAnimation";
import ScrollAnimation from "react-animate-on-scroll";
const OurTeam = () => {
  return (
    <div>
      <SectionLayout className={"flex gap-8 items-center "}>
        <div className="basis-1/2 flex flex-col gap-8  ">
          <h1 className="text-5xl">
            Meet Our Team: A Seamless Extension of Yours
          </h1>
          <p className="font-semibold tracking-wider text-xl">
            We’re committed to solving some of the industry’s most pressing
            challenges in building administration, and empowering builders with
            the technologically advanced tools and resources they need to
            compete in an evolving industry. We’re proud to have partnered with
            some of the world’s largest, most prominent residential building
            companies, helping them scale up, reduce costs, and deliver projects
            on time and on budget.
          </p>
          <p className="font-semibold tracking-wider text-xl">
            {" "}
            We’re an experienced team of former builders, industry leaders, and
            experienced professionals located around the globe: North America,
            Australia, Philippines, and Singapore. Together, we’re on a mission
            to empower visionary builders.
          </p>
        </div>

        <div className="basis-1/2 ">
          <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight">
            {" "}
            <video
              id="my-video"
              poster=""
              controls={false}
              loop
              autoPlay
              muted
              className="rounded-xl "
            >
              <source src="videos/showcase.mp4" type="video/mp4" />
              <source src="videos/showcase.mp4" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </ScrollAnimation>
        </div>
      </SectionLayout>

      <SectionLayout className={"flex flex-col gap-10"}>
        <FounderBio />
        <h1 className="text-center font-bold text-4xl">Our Executive Team</h1>
        <ExecutiveTeam />
      </SectionLayout>

      <Banner
        imageURL={"images/collage.jpg"}
        title="Global presence, local expertise"
        subtitle={`With teams located in the United States, Australia, Philippines, and Singapore, we provide an international perspective plus expertise a in 
        local building codes.`}
      />
    </div>
  );
};

export default OurTeam;
