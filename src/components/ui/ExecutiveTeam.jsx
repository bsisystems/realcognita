import React from "react";
import CardAnimation from "./Animations/CardAnimation";
const ExecutiveTeam = () => {
  const members = [
    {
      id: crypto.randomUUID(),
      name: "Graeme Black",
      role: "Finance, Australia",
    },
    {
      id: crypto.randomUUID(),
      name: "Luchie Bury",
      role: "Global Operations, Philippines & Australia",
    },
    // {
    //   id: crypto.randomUUID(),
    //   name: "Jessica Leising",
    //   role: "Marketing & Business Development, United States",
    // },
    // {
    //   id: crypto.randomUUID(),
    //   name: "Leo Daniel Malenilla",
    //   role: "Business Process Outsourcing, Philippines",
    // },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {members.map((member, index) => {
        return (
          <CardAnimation key={member.id}>
            <div className="flex flex-col gap-1 rounded-xl  py-2.5 px-5 text-center shadow-[10px_10px_0_0_rgb(65,103,121)] border-realcognita border-2 ">
              <h1 className="font-bold text-2xl">{member.name}</h1>
              <h1 className="font-semibold dark:text-gray-300 ">
                {member.role}
              </h1>
            </div>
          </CardAnimation>
        );
      })}
    </div>
  );
};

export default ExecutiveTeam;
