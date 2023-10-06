import React from "react";
import Intro from "../Intro";
import Clients from "../Clients";
import SectionLayout from "../Layouts/SectionLayout";
const About = (props) => {
  return (
    <div className=" relative items-center flex justify-center " {...props}>
      <video
        id="my-video"
        poster=""
        controls={false}
        loop
        autoPlay
        muted
        className=" w-full object-fill brightness-50 h-auto  min-h-[90vh] md:max-h-[90vh]"
      >
        <source src="videos/3d_render.mp4" type="video/mp4" />
        <source src="videos/3d_render.mp4" type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      <SectionLayout className={"flex flex-col justify-between  absolute "}>
        <Intro />
        <Clients />
      </SectionLayout>
    </div>
  );
};

export default About;
