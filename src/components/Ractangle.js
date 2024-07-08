import React from "react";

const Ractangle = (props) => {
  return (
    <div className="w-fit sm:w-full md:w-full bg-blue-200 bg-ractangle lg:h-[224px] md:h-[224px]  sm:h-[150px] flex items-center ">
      <p className="lg:mx-[8%] md:mx-[90px] mx-auto text-5xl font-semibold font-ptSans text-white">
        {props.text}
      </p>
    </div>
  );
};

export default Ractangle;
