import React, { useState } from "react";

const CarouselFeedbacks = () => {
  const [active, setActive] = useState(1);
  const feedbacks = [
    {
      image: "images/renders/render-1.jpg",
      author: "RYAN YOUNG, AIA – DIRECTOR OF ARCHITECTURE, HIGHLAND HOMES",
      message: `“They have provided us with dedicated resources that focus specifically 
      on our projects ensuring accuracy and consistency. They are an extension of our 
      team and have been instrumental to our success.”`,
      logo: "images/clients/highland_homes.png",
    },
    {
      image: "images/renders/render-2.jpg",
      author: "TOM H., TOLL BROTHERS",
      message: `“[They] were incredibly responsive to our needs, and they
      did an excellent job quickly learning the particulars of our company drafting standards.”`,
      logo: "images/clients/toll_brothers.png",
    },
  ];

  const handlePrevious = (index) => {
    if (index == 0) {
      setActive(feedbacks.length - 1);
    } else {
      setActive(index - 1);
    }
  };

  const handleNext = (index) => {
    if (index == feedbacks.length - 1) {
      setActive(0);
    } else {
      setActive(index + 1);
    }
  };

  return (
    <div className="   rounded-xl bg-realcognita  ">
      {feedbacks.map((feedback, index) => {
        return index == active ? (
          <div className="flex flex-col md:flex-col lg:flex-row h-full gap-4    ">
            <div className="basis-1/2 h-full relative">
              <img
                src={feedback.image}
                alt="Description"
                className=" opacity-0 ease-in duration-[200ms] h-[550px]  object-cover rounded-l-xl "
                onLoad={(e) => e.target.classList.remove("opacity-0")}
              />
              <div className="absolute top-0 w-full flex justify-evenly divide-x bg-slate-950/60 font-semibold rounded-tl-xl ">
                <button
                  className="basis-1/2 p-3"
                  onClick={(e) => handlePrevious(index)}
                >
                  PREVIOUS
                </button>
                <button
                  className="basis-1/2 p-3"
                  onClick={(e) => handleNext(index)}
                >
                  NEXT
                </button>
              </div>
            </div>

            <div className="basis-1/2 flex flex-col gap-6 justify-between p-[2rem] ">
              <p className="text-lg md:text-3xl font-semibold">
                {feedback.message}
              </p>

              <div className="flex flex-col gap-4">
                <h1 className="text-xl tracking-widest">{feedback.author}</h1>
                <img src={feedback.logo} alt="" className="w-80" />
              </div>
            </div>
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default CarouselFeedbacks;
