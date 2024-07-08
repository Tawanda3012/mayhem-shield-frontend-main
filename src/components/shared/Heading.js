import React from "react";


const Heading = ({ black, blue }) => {
  return (
    <div className="sm:ml-5 lg:ml-0 md:ml-5 mb-5">
      <p  className="font-ptSans w-fit lg:text-[40px] md:text-[35px]  sm:text-[30px]  font-bold pb-[5px]">
        <span className="text-[#212121]">{black}</span>
        <span> </span>
        <span className="text-[#0000FF]">{blue}</span>
      </p>
      <div className="w-[109px] bg-white flex ">
        <div className="w-[92px] rounded-full h-[4px] bg-[#0000FF]" />
        <div className="ml-[5px] rounded-full w-[17px] h-[4px bg-[#0000FF]" />  
      </div>
    </div>
  );
};

export default Heading;
