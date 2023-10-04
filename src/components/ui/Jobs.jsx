import React from "react";

const Jobs = () => {
  const jobs = [
    {
      id: crypto.randomUUID(),
      role: "Quantity Surveyor",
      qualifications: [
        "Candidate must possess at least a Diploma Certificate, Engineering (Civil), Quantity Surveying or equivalent.",
        "Required language(s): English.",
        "Preferably 1-4 Years experienced employees specializing in Quantity Surveying or equivalent.",
        "Full-Time position(s) available.",
      ],
    },
    {
      id: crypto.randomUUID(),
      role: "Architectural Drafter",
      qualifications: [
        "Proficiency in AutoCAD or ArchiCAD or REVIT programs.",
        "Degree in Architecture or equivalent drafting course is desirable but not mandatory.",
        "Possess good communication & writing skills.",
        "Highly motivated, enthusiastic & hardworking.",
        "An understanding & knowledge of Australian standard and/or US standards would be advantageous but not essential.",
      ],
    },
  ];
  return (
    <div className="grid grid-cols 1 md:grid-cols-2 gap-4">
      {jobs.map((job) => {
        return (
          <div
            key={job.id}
            className="text-realcognita bg-white rounded-xl p-7 flex flex-col gap-4 justify-between "
          >
            <h1 className="text-2xl   font-semibold"> {job.role}</h1>
            <ul className="list-disc ml-10 space-y-2">
              {job.qualifications.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
            <button className="bg-realcognita text-white rounded-lg py-2 px-8 w-fit font-semibold">
              Apply Now
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
