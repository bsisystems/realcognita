import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import OrangeButton from "../OrangeButton";
import GetStarted from "../GetStarted";

const Rendering = () => {
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
          <div>
            <p className="leading-relaxed text-lg">
              Our in-house visual artists and architectural designers can create
              marketing materials, like brochures, for potential buyers.
            </p>
          </div>
          <div>
            <ul className="list-disc text-xl ml-5">
              <li>Rendered 3D elevations</li>
              <li>
                Marketing plans with basic dimensions with room tags and square
                footage
              </li>
              <li>
                Photo-realistic exterior and interior renderings – day and night
                rendering
              </li>
              <li>3D Plan renderings</li>
              <li>Virtual 3D walkthroughs</li>
              <li>Rendered streetscapes</li>
            </ul>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Rendering;
