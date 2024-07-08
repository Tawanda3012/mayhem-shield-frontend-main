import React from "react";
import Ractangle from "./Ractangle";
import img from "../images and logos/3.png";

const ContentHub = () => {
  return (
    <div>
      <Ractangle text={"Content Hub"} />
      <div className="lg:mt-[91px] md:my-5 sm:my-5 lg:flex md:flex align-center lg:mx-[8%] md:mx-5 sm:mx-5">
        <div className="lg:w-3/4 md:w-[70%]  md:mr-[40px] sm:w-full">
          <p className="text-merriweather lg:w-[540px] md:w-full sm:w-full text-justify lg:mb-[104px]">
            At Mayhem Shield, we are a premier, independent multi-cloud services company dedicated to delivering on the promise of cloud computing and providing exceptional value to our clients. Founded by a team with over a century of combined experience in the industry, we have been at the forefront of helping businesses establish new foundations for growth and prosperity through successful cloud transformation efforts.
            <br />
            <br />
            Our team holds a vast array of certifications across the major cloud platforms, including Amazon Web Services (AWS), Google Cloud, and Microsoft Azure, which allows us to offer unparalleled expertise in applying cloud technologies to unlock new opportunities for our clients.
            <br />
            <br />
            If you're ready to start your own transformation journey, we invite you to take our brief  <span className="text-blue-500">Cloud Maturity Assessment</span>. This assessment will provide you with a comprehensive report on your organization's current state of cloud adoption and offer actionable insights on how you can accelerate your progress towards maximizing the benefits of cloud computing. Don't hesitate, begin your transformation today with Mayhem Shield.
          </p>
        </div>
        <div className="lg:w-3/4 md:w-[40%] lg:ml-[93px]  ">
          <img
            className=" sm:my-5 lg:w-[743px] md:mt-10 md:w-full sm:w-full mt-[-20px] "
            src={img}
            alt=""
          />
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default ContentHub;
