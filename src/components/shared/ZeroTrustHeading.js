import React from "react";


const ZeroTrustHeading= ({ black, blue }) => {
  return (
    <div className="sm:ml-5 lg:ml-0 md:ml-5 mb-5">
      <p  className="font-ptSans w-fit lg:text-[40px] md:text-[35px]  sm:text-[30px]  font-bold pb-[5px] leading-[45px]">
        <span className="text-[#212121">{black}</span>
        <br/>
        <span className="text-[#0000FF] ">{blue}</span>
      </p>
    </div>
  );
};

export default ZeroTrustHeading;
