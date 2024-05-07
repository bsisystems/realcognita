import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import OrangeButton from "../OrangeButton";
import GetStarted from "../GetStarted";

const Estimating = () => {
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
              Complete customization for materials, products, and fixtures.
              Customizability for cost inputs and reports. A strong
              uninterrupted takeoff process in estimates and construction
              documents. Two rounds of quick checks before submittal.
            </p>
          </div>
          <div>
            <p className="leading-relaxed text-lg">
              Interested in a new estimating system? We designed an built proven
              proprietary software to get the job done. Used by one of
              Australia's largest builders for more than a decade!
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Estimating;
