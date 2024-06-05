import React from 'react';

const CustomCard = ({ backgroundColor, title, description }) => {
  return (
    <div className={`text-left p-6 ${backgroundColor} w-full sm:w-[68%] md:w-[100%] lg:w-[48%] m-2`}>
      <figure className="mb-0">
        <h2 className="text-xl ml-3 mt-2 font-semibold">{title}</h2>
        <p className="text-base ml-3">{description}</p>
      </figure>
    </div>
  );
};

export default CustomCard;
