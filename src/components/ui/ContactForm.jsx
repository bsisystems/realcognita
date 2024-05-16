import { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import OrangeButton from "./OrangeButton";
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from "react-hook-form";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { sendEmail } from "../../lib/api";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const ContactForm = ({ visible, setVisible }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const defaultFormValues = {
    full_name: "",
    email: "",
    business_name: "",
    business_address: "",
    contact_no: "",
    message: "",
    annual_closings: 0.0,
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormValues,
  });
  const footerContent = (
    <div>
      <Button
        label="CLOSE"
        disabled={isLoading}
        onClick={() => {
          resetForm();
        }}
        className="p-button-text"
      />
      <OrangeButton
        label="SUBMIT"
        type="submit "
        form="form"
        loading={isLoading}
        autoFocus
      />
    </div>
  );

  const resetForm = () => {
    reset(defaultFormValues);
    setErrorMessage("");
    setVisible(false);
  };

  const onSubmit = async (data) => {
    try {
      setErrorMessage("");
      setIsLoading(true);

      const res = await sendEmail(data);

      toast.success(res.message.success, {
        position: "top-center",
      });

      setIsLoading(false);
      reset(defaultFormValues);
      setVisible(false);
    } catch (error) {
      if (error.errors) {
        error.errors.forEach((err) => {
          setError(err.name, { type: "backend", message: err.message });
        });
      }
      setErrorMessage(error.message);

      setIsLoading(false);
    }
  };

  return (
    <>
      <Dialog
        header={
          errorMessage && (
            <div className="flex justify-center w-full">
              <div className="text-center text-sm text-red-500 p-5 rounded border-red-500 bg-slate-100/5 w-full md:w-1/2">
                {errorMessage}
              </div>
            </div>
          )
        }
        footer={footerContent}
        visible={visible}
        onHide={() => resetForm()}
        // style={{ width: "60vw" }}
        // breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        className="w-[80vw] xl:w-[60vw]"
        dismissableMask
        maximizable
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 mx-3">
          <div className="basis-2/5 flex flex-col gap-4 justify-between items-start ">
            {/* <img
              src="images/renders/render-3.jpg"
              alt="image"
              className="object-cover w-60 h-60"
            /> */}
            <div className="flex flex-col gap-4 ">
              <h1 className="text-xl font-bold tracking-wider">
                Ready to Scale Your Business While Reducing Costs?
              </h1>
              <p className=" tracking-wider text-justify">
                Operating as a seamless extension of your team, we’ll handle
                your{" "}
                <span className="decoration-green-500 text-green-500">
                  architectural drafting, estimating, 3D rendering,
                </span>{" "}
                <span className="text-white no-underline">and</span>{" "}
                <span className="decoration-green-500 text-green-500">
                  administration work
                </span>{" "}
                so you can focus on selling and building homes. ‍
              </p>
              <p className="text-justify">
                Schedule a complimentary consultation and learn how we can
                empower faster, better, and more economical home building.
              </p>
            </div>

            {/* <SocialMediaLinks /> */}
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            id="form"
            className="basis-3/5    "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div>
                <label htmlFor="full_name" className="  ">
                  Name <span className="text-red-500">*</span>
                </label>
                <InputText
                  {...register("full_name", {
                    required: "This field is required",
                    pattern: {
                      value: /^([a-zA-Z][\s'.-]{0,1})*[A-Za-z][.]{0,1}$/,
                      message:
                        "Name can ONLY contain any of the following characters: dot (.) , dash (-) , apostrophe (')",
                    },
                  })}
                  className={`w-full ${errors.full_name && "!border-red-500"}`}
                  autoComplete="off"
                  placeholder="Full name"
                />
                <small className="text-red-500 tracking-widest">
                  {errors.full_name ? errors.full_name.message : ""}
                </small>
              </div>
              <div>
                <label htmlFor="email" className=" ">
                  Email <span className="text-red-500">*</span>
                </label>
                <InputText
                  {...register("email", {
                    required: "This field is required",
                  })}
                  className={`w-full ${errors.email && "!border-red-500"}`}
                  autoComplete="off"
                  placeholder="example@youremail.com"
                  type={"email"}
                />
                <small className="text-red-500 tracking-widest">
                  {errors.email ? errors.email.message : ""}
                </small>
              </div>

              <div>
                <Controller
                  name="contact_no"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <div className="group flex flex-col w-full">
                      <label htmlFor="contact_no">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <PhoneInput
                        id="contact_no"
                        placeholder="Enter phone number"
                        country="au"
                        inputClass={`h-11 dark:bg-[#19191c] dark:focus:bg-[#19191c] !rounded-lg !border-2 !shadow-none ${
                          errors.contact_no && "error"
                        }`}
                        {...field}
                      />
                      <span className="text-red-500 text-xs tracking-widest mt-1">
                        {errors.contact_no?.message ?? ""}
                      </span>
                    </div>
                  )}
                />
              </div>

              <div>
                <label htmlFor="business_name" className="  ">
                  Business Name
                </label>
                <InputText
                  {...register("business_name")}
                  className={`w-full ${
                    errors.business_name && "!border-red-500"
                  }`}
                  autoComplete="off"
                  placeholder="Realcognita"
                />
              </div>

              <div>
                <label htmlFor="business_address" className="  ">
                  Business Address
                </label>
                <InputText
                  {...register("business_address")}
                  className={`w-full ${
                    errors.business_name && "!border-red-500"
                  }`}
                  autoComplete="off"
                  placeholder="4210 Walaby Way"
                />
              </div>
              <div>
                <Controller
                  name="annual_closings"
                  control={control}
                  render={({ field }) => (
                    <>
                      <label htmlFor="annual_closings">Annual Closings</label>
                      <InputNumber
                        id={field.name}
                        ref={field.ref}
                        value={field.value}
                        onBlur={field.onBlur}
                        onValueChange={(e) => field.onChange(e)}
                        mode="currency"
                        currency="USD"
                        format
                        locale="en-US"
                        className="!w-full"
                      />
                    </>
                  )}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="  ">
                Message <span className="text-red-500">*</span>
              </label>
              <InputTextarea
                {...register("message", {
                  required: "This field is required",
                  maxLength: { value: 255, message: "Max length is 255" },
                })}
                className={`w-full ${errors.message && "!border-red-500"}`}
                rows={5}
                cols={30}
                placeholder="Type your message here..."
              />
              <small className="text-red-500 tracking-widest">
                {errors.message ? errors.message.message : ""}
              </small>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  );
};

export default ContactForm;
