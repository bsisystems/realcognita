import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import OrangeButton from "../OrangeButton";
import GetStarted from "../GetStarted";

const Administration = () => {
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
              With our proprietary management software, we can help you track
              profitability, reduce costs, and ultimately build homes faster.
              Our software also generates data-driven insights that enable you
              to make informed, forward-thinking decisions and compete at the
              highest level.
            </p>
          </div>
          <div>
            <ul className="list-disc text-xl ml-5">
              <li>Preliminary Portions</li>
              <li>
                Drafting Site Map with Revisions as Needed + Full Development
                Plan
              </li>
              <li>Creation of documents for development permits</li>
              <li>
                Creation of preliminary permit sets and document management
              </li>
              <li>Compliance and adherence to community requirements</li>
              <li>Report management</li>
              <li>Project management and tracking of submittals</li>
            </ul>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Administration;
