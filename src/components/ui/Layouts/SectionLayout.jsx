import React from "react";

const SectionLayout = ({ children, className }) => {
  return (
    <div
      className={`h-auto  min-h-[90vh] max-w-7xl mx-auto p-5 md:py-20 lg:py-20  ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionLayout;
