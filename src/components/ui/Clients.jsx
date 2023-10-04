import React from "react";

const Clients = () => {
  const clients = [
    {
      id: crypto.randomUUID(),
      client: "Simonds",
      image: "images/clients/simonds.png",
    },
    {
      id: crypto.randomUUID(),
      client: "Toll Brothers",
      image: "images/clients/toll_brothers.png",
    },
    {
      id: crypto.randomUUID(),
      client: "Highland Homes",
      image: "images/clients/highland_homes.png",
    },
    {
      id: crypto.randomUUID(),
      client: "MI Homes",
      image: "images/clients/mi_homes.png",
    },
    {
      id: crypto.randomUUID(),
      client: "BGC",
      image: "images/clients/bgc.png",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
      {clients.map((client) => {
        return (
          <img
            key={client.id}
            src={client.image}
            alt={client.clitn}
            className="w-60 h-auto "
          />
        );
      })}
    </div>
  );
};

export default Clients;
