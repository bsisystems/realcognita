import { Button } from "primereact/button";

const OrangeButton = (props) => {
  return (
    <Button
      {...props}
      className={`!bg-primary-orange !border-none rounded-lg !text-white  py-2 px-7 font-semibold ${props.className}
  `}
    />
  );
};

export default OrangeButton;
