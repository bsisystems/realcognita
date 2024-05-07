import { useState } from "react";

import ContactForm from "./ContactForm";

const ContactUs = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="fixed bottom-5 right-5">
        <div
          className="h-10 w-10 md:h-20 md:w-20 bg-primary-orange flex items-center justify-center rounded-full  cursor-pointer"
          onClick={() => setVisible(true)}
        >
          <i className="pi pi-phone  !text-2xl"></i>
        </div>

        <ContactForm visible={visible} setVisible={setVisible} />
      </div>
    </>
  );
};

export default ContactUs;
