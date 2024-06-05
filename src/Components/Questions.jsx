import React from "react";
import CustomCard from "./CustomCard";

function Questions() {
  const colors = [
    "bg-[#FF5555] text-white",
    "",
    "",
    "bg-[#FF5555] text-white",
    "bg-[#FF5555] text-white",
    "",
  ];

  const title = "The Best Financial Accounting App Ever!";
  const description =
    "Arcu at Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.";

  return (
    <div className="flex flex-wrap gap-4 container mb-32 mt-24 p-3">
      <div>
        <div className="mb-10">
          <img src="/images/star.png" alt="" className="ml-[40rem]" />
          <p className="text-[#FF5555] text-xl tracking-widest font-bold mb-6">
            FAQ
          </p>
          <h1 className="font-bold text-5xl text-blue">
            Frequently Asked <br />
            Questions
          </h1>
        </div>

        <div className='flex w-["100%] flex-wrap   md:m-4 sm:m-3'>
          {colors.map((color, index) => (
            <CustomCard
              key={index}
              backgroundColor={color}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questions;
