import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import OrangeButton from "../OrangeButton";
import GetStarted from "../GetStarted";

const Drafting = () => {
  const [visible, setVisible] = useState(false);
  const footerContent = (
    <div>
      <GetStarted />
    </div>
  );

  return (
    <div>
      <OrangeButton
        label={"VIEW MORE"}
        className="w-fit"
        onClick={() => setVisible(true)}
      />

      <Dialog
        header={false}
        footer={footerContent}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        dismissableMask
        maximizable
      >
        <div className="m-[5%] flex flex-col gap-8">
          {/* <div>
            <h1 className="font-bold text-xl">Builders</h1>
            <p className="leading-relaxed text-lg">
              Lot specific plans that adhere to community standards Construction
              Documents sets that can be used for permit submittals Master plan
              creation and maintenanceMaster plan conversion from 2D to 3D with
              all optionsCreation of marketing plans and brochures.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl">‍Architects</h1>
            <p className="leading-relaxed text-lg">
              Lot specific plans that adhere to community ‍Conversion of
              preliminary drawings, schematic design drawings, design
              development drawings, to construction drawings ready for permit.
              Proper submittals at required benchmarks in all design phases of
              project. Plan and elevation conversion from 2D to 3DCreation of
              marketing plans and brochures.
            </p>
          </div> */}

          <ul className="list-disc text-xl ml-5">
            <li>Brochure plans (marketing plans)</li>
            <li>Preliminary drawings (sketch)</li>
            <li>Siting plans and documents</li>
            <li>Contract plans (lot specifics)</li>
            <li>Local authority drawings (permit drawings)</li>
            <li>Construction plans (pre-start/gallery)</li>
            <li>Master plan creation and maintenance</li>
            <li>Master conversion from 2D to 3D</li>
          </ul>
        </div>
      </Dialog>
    </div>
  );
};

export default Drafting;
