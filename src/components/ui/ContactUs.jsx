import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import OrangeButton from "./OrangeButton";
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {
  Link as SnapLink,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import SocialMediaLinks from "./SocialMediaLinks";
const ContactUs = () => {
  const [visible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      suggestion: "",
    },
  });
  const footerContent = (
    <div>
      <Button
        label="CLOSE"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <OrangeButton
        label="SUBMIT"
        type="submit "
        form="form"
        onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  );

  const onSubmit = (data) => console.log(data);

  return (
    <div className="fixed bottom-5 right-5">
      <div
        className="h-20 w-20 bg-primary-orange flex items-center justify-center rounded-full animate-bounce cursor-pointer"
        onClick={() => setVisible(true)}
      >
        <i className="pi pi-phone  !text-2xl"></i>
      </div>

      <Dialog
        header={false}
        footer={footerContent}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "60vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        dismissableMask
        maximizable
      >
        <div className="flex gap-4">
          <div className="basis-2/5 flex flex-col gap-4 justify-between items-end">
            {/* <img
              src="images/renders/render-3.jpg"
              alt="image"
              className="object-cover w-60 h-60"
            /> */}
            <div className="flex flex-col gap-4 ">
              <h1 className="text-xl font-bold tracking-wider">
                Ready to Scale Your Business While Reducing Costs?
              </h1>
              <p className=" tracking-wider ">
                Operating as a seamless extension of your team, we’ll handle
                your
                <span className="underline underline-offset-4 decoration-primary-orange">
                  {" "}
                  architectural drafting , estimating, 3D rendering, and
                  administration work{" "}
                </span>
                so you can focus on selling and building homes. ‍
              </p>
              <p>
                Schedule a complimentary consultation and learn how we can
                empower faster, better, and more economical home building.
              </p>
            </div>

            <div className="">
              <SocialMediaLinks />
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            id="form"
            className="basis-3/5 "
          >
            <div className="grid grid-cols-2 gap-4 ">
              <div>
                <label htmlFor="name" className=" block mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <InputText
                  {...register("name", { required: true })}
                  className={`w-full ${errors.name && "p-invalid"}`}
                  autoComplete="off"
                  placeholder="Full name"
                />
                <small className="p-error">
                  {errors.name ? errors.name : ""}
                </small>
              </div>
              <div>
                <label htmlFor="email" className=" block mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <InputText
                  {...register("email", { required: true })}
                  className={`w-full ${errors.email && "p-invalid"}`}
                  autoComplete="off"
                  placeholder="example@youremail.com"
                  type={"email"}
                />
                <small className="p-error">
                  {errors.email ? errors.email : ""}
                </small>
              </div>

              <div>
                <label htmlFor="contact_no" className=" block mb-2">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <PhoneInputWithCountry
                  id="contact_no"
                  name="contact_no"
                  control={control}
                  rules={{ required: true }}
                  defaultCountry="AU"
                  international
                  className="!bg-[#0E1315]"
                />

                <small className="p-error">
                  {errors.contact_no ? errors.contact_no : ""}
                </small>
              </div>

              <div>
                <label htmlFor="business_name" className=" block mb-2">
                  Business Name
                </label>
                <InputText
                  {...register("business_name")}
                  className={`w-full ${errors.business_name && "p-invalid"}`}
                  autoComplete="off"
                  placeholder="Realcognita"
                />
              </div>

              <div>
                <label htmlFor="business_address" className=" block mb-2">
                  Business Address
                </label>
                <InputText
                  {...register("business_address")}
                  className={`w-full ${errors.business_name && "p-invalid"}`}
                  autoComplete="off"
                  placeholder="4210 Walaby Way"
                />
              </div>
              <div>
                <label htmlFor="annual_closings" className=" block mb-2">
                  Annual Closings
                </label>
                <Controller
                  control={control}
                  name="annual_closings"
                  render={({ field: { value, onChange } }) => (
                    <InputNumber
                      value={value}
                      onValueChange={onChange}
                      className={`w-full`}
                      placeholder="USD"
                      mode="currency"
                      currency="USD"
                      autoComplete="off"
                      min={0}
                    />
                  )}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className=" block mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <InputTextarea
                {...register("message")}
                className={`w-full ${errors.message && "p-invalid"}`}
                rows={5}
                cols={30}
                placeholder="Type your message here..."
              />
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default ContactUs;
