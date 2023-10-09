import React from "react";

const Banner = ({ imageURL, title, subtitle }) => {
  return (
    <section
      style={{
        background: `url('${imageURL}') no-repeat  , rgba(41, 72, 80, 0.8)  `,
        backgroundBlendMode: "multiply",
      }}
      className="text-center !bg-cover !bg-fixed !bg-no-repeat !bg-center  "
    >
      <div className="  flex flex-col gap-4 p-5 md:p-[6rem]">
        <h1 className="text-4xl text-white font-semibold whitespace-pre-line">
          {title}
        </h1>
        <p className="text-xl text-gray-300 whitespace-pre-line">{subtitle}</p>
      </div>
    </section>
  );
};

export default Banner;
