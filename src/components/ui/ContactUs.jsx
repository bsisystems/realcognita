import { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import OrangeButton from "./OrangeButton";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import "react-phone-number-input/style.css";
import { sendEmail } from "../../lib/api";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const defaultFormValues = {
    full_name: "",
    email: "",
    business_name: "",
    business_address: "",
    contact_no: "",
    message: "",
    annual_closings: "",
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
        onClick={() => {
          reset(defaultFormValues);
          setVisible(false);
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
    <div className="fixed bottom-5 right-5">
      <div
        className="h-10 w-10 md:h-20 md:w-20 bg-primary-orange flex items-center justify-center rounded-full  cursor-pointer"
        onClick={() => setVisible(true)}
      >
        <i className="pi pi-phone  !text-2xl"></i>
      </div>

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
        onHide={() => setVisible(false)}
        // style={{ width: "60vw" }}
        // breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        className="w-[80vw] xl:w-[60vw]"
        dismissableMask
        maximizable
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-4">
          <div className="basis-2/5 flex flex-col gap-4 justify-between items-end ">
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
                your{" "}
                <span className="underline underline-offset-4 decoration-green-500 text-green-500">
                  architectural drafting, estimating, 3D rendering,
                </span>{" "}
                <span className="text-white no-underline">and</span>{" "}
                <span className="underline underline-offset-4 decoration-green-500 text-green-500">
                  administration work
                </span>{" "}
                so you can focus on selling and building homes. ‍
              </p>
              <p>
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
                  })}
                  className={`w-full ${errors.full_name && "!border-red-500"}`}
                  autoComplete="off"
                  placeholder="Full name"
                />
                <small className="text-red-500">
                  {errors.full_name ? errors.full_name.message : ""}
                </small>
              </div>
              <div>
                <label htmlFor="email" className=" ">
                  Email <span className="text-red-500">*</span>
                </label>
                <InputText
                  {...register("email", { required: "This field is required" })}
                  className={`w-full ${errors.email && "!border-red-500"}`}
                  autoComplete="off"
                  placeholder="example@youremail.com"
                  type={"email"}
                />
                <small className="text-red-500">
                  {errors.email ? errors.email.message : ""}
                </small>
              </div>

              <div>
                <label htmlFor="contact_no" className="  ">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <PhoneInputWithCountry
                  id="contact_no"
                  name="contact_no"
                  control={control}
                  rules={{ required: "This field is required" }}
                  defaultCountry="AU"
                  international
                  className={`!bg-[#0E1315] ${
                    errors.contact_no && "!!border-red-500"
                  }`}
                />

                <small className="text-red-500">
                  {errors.contact_no ? errors.contact_no.message : ""}
                </small>
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
                <label htmlFor="annual_closings" className="  ">
                  Annual Closings
                </label>
                <InputNumber
                  {...register("annual_closings")}
                  className={`!w-full ${
                    errors.annual_closings && "!border-red-500"
                  }`}
                  inputClassName="w-full"
                  placeholder="USD"
                  mode="currency"
                  currency="USD"
                  autoComplete="off"
                  min={0}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="  ">
                Message <span className="text-red-500">*</span>
              </label>
              <InputTextarea
                {...register("message", { required: "This field is required" })}
                className={`w-full ${errors.message && "!border-red-500"}`}
                rows={5}
                cols={30}
                placeholder="Type your message here..."
              />
              <small className="text-red-500">
                {errors.message ? errors.message.message : ""}
              </small>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default ContactUs;
