import React from "react";

const OrangeButton = (props) => {
  return (
    <button
      {...props}
      className={`bg-primary-orange rounded-lg  py-2 px-7 font-semibold ${props.className}
  `}
    >
      {props.label}
    </button>
  );
};

export default OrangeButton;
