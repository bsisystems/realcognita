import React from "react";

import SectionLayout from "./Layouts/SectionLayout";

const Approach = () => {
  return (
    <SectionLayout
      className={"flex flex-col justify-center gap-20 text-white text-center"}
    >
      <h1 className="text-4xl md:text-4xl font-bold uppercase">
        {`Residential Architectural Drafting, Estimating, Rendering, and Admin 
        for Future-Focused Builders`}
      </h1>
      <p className="text-xl md:text-3xl tracking-wider">{`Since 2003, we’ve partnered with some of the world’s largest, most prominent residential production builders, helping them scale up, reduce costs, and deliver projects on time and on budget. 
‍
By taking on a portion, or the entirety, of builders’ architectural drafting, estimating, 3D rendering, and administration work, we improve efficiencies and outcomes while enabling our clients to focus on what they do best: sell and build homes. `}</p>
    </SectionLayout>
  );
};

export default Approach;
