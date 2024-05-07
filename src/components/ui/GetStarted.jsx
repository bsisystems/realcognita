import React, { useState } from "react";
import ContactForm from "./ContactForm";

const GetStarted = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button
        {...props}
        className="text-sm md:text-base rounded-full border-2 p-2 border-primary-orange text-primary-orange w-full"
        onClick={(e) => (visible ? setVisible(false) : setVisible(true))}
      >
        GET STARTED
      </button>
      <ContactForm visible={visible} setVisible={setVisible} />
    </>
  );
};

export default GetStarted;
