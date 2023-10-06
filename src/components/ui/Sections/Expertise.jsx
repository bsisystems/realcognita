import React from "react";
import Approach from "../Approach";
import ExpertiseCard from "../ExpertiseCard";
import TextAnimation from "../Animations/TextAnimation";
import SectionLayout from "../Layouts/SectionLayout";

export const Expertise = (props) => {
  return (
    <div {...props}>
      <SectionLayout className={"flex flex-col gap-8 justify-center"}>
        <TextAnimation>
          <h1 className="text-4xl md:text-4xl font-bold uppercase tracking-wider whitespace-pre-line">
            {`The Realcognita difference: 
      Advanced solutions for next-generation thinkers`}
          </h1>
        </TextAnimation>
        <ExpertiseCard />
      </SectionLayout>
      <section
        style={{
          background: `url('images/renders/render-2.jpg') no-repeat  , rgba(41, 72, 80, 0.8)  `,
          backgroundBlendMode: "multiply",
        }}
        className="!bg-cover !bg-no-repeat !bg-fixed !bg-center"
      >
        <Approach />
      </section>
    </div>
  );
};
