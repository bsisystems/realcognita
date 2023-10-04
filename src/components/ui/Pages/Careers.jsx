import React from "react";
import DefaultLayout from "../Layouts/DefaultLayout";
import Banner from "../Banner";
import Jobs from "../Jobs";
import SectionLayout from "../Layouts/SectionLayout";
const Careers = () => {
  return (
    <DefaultLayout>
      <section
        style={{
          background: `url('images/renders/render-1.jpg') no-repeat  , rgba(41, 72, 80, 0.8)  `,
          backgroundBlendMode: "multiply",
        }}
        className="!bg-cover"
      >
        <SectionLayout
          className={"flex flex-col gap-20 justify-center items-center"}
        >
          <div className="  flex flex-col gap-4  text-center">
            <h1 className="text-4xl font-semibold">Current Job Openings</h1>
            <p className="text-xl  whitespace-pre-line">{`We are looking for successful applicants that have a positive attitude towards work, punctuality, ability to adjust according to the 
        company's needs and have the willingness and ability to tackle challenges.`}</p>
          </div>
          <Jobs />
        </SectionLayout>
      </section>
    </DefaultLayout>
  );
};

export default Careers;
