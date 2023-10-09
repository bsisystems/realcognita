import React from "react";

const GetStarted = (props) => {
  return (
    <button
      {...props}
      className="text-sm md:text-base rounded-full border-2 p-2 border-primary-orange text-primary-orange w-full"
    >
      GET STARTED
    </button>
  );
};

export default GetStarted;
