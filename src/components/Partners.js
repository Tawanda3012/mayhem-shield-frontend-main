import React from "react";
import { Link } from "react-router-dom";
import Ractangle from "./Ractangle";
import { AiOutlineArrowRight } from "react-icons/ai";
import googleLogo from "../images and logos/image-removebg-preview.png";
import amazonLogo from "../images and logos/amazonLogo-removebg-preview.png";
import microsoftLogo from "../images and logos/microsoft.png";

const Partners = () => {
  const logos = [googleLogo, amazonLogo, microsoftLogo];
  const partners = [
    {
      Name: "Google Cloud",
      description:
        " Mayhem Shield has partnered with Google Cloud as the leading cloud-native solutions provider...",
      link: "/partners/google-cloud",
    },
    {
      Name: "Amazon Web Service",
      description:
        " At Mayhem Shield, we have over a decade of experience and expertise on AWS. Today we are recognized...",
      link: "/partners/aws",
    },
    {
      Name: "Microsoft Azure",
      description:
        " Mayhem Shield’s strategic partnership with Microsoft and deep Azure expertise make our Azure-only...",
      link: "/partners/microsoft-azure",
    },
  ];
  return (
    <div>
      <Ractangle text={"Partners"} />
      <div className="px-[8%] mx-auto">
        <p className="my-[60px] font-merriweather text-[#5B5B5B]">
          With a combination of cloud expertise and software-enabled automation,
          the Mayhem Shield cloud migration services are here to identify
          further opportunities where your organization can adopt cloud to
          evolve. Our smarter way to migrate helps reduce the cost and simplify
          the process of cloud migration, allowing you to reap the benefits and
          modern innovations of the cloud in the most efficient manner.
          <br />
          By codifying our knowledge, maturity and experience, Mayhem Shield
          accelerates the time-to-value of the cloud so enterprises of any size
          can take full advantage and see improved results in no time at all. We
          pride ourselves on delivering extraordinary value to all of our
          customers, providing cloud migration services that can move our
          customers out of their on-premises data centers and onto a public
          cloud platform.
        </p>
        <div className="w-full  my-16  lg:flex md:flex  justify-between flex-wrap">
          {partners.map((partner, i) => (
            <>
              <div
                key={i}
                className="w-[350px] h-[288px]  bg-white rounded-xl  drop-shadow-lg mx-auto my-20  flex  flex-col justify-end"
              >
                <div className="avatar    top-[-25px] drop-shadow-xl">
                  <div className="w-[117px] rounded-full relative bg-white mx-auto">
                    <div className=" flex justify-center items-center w-[67px]  mt-[32px] ml-[25px]">
                      <img className="" src={logos[i]} alt="" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-black font-ptSans text-[24px] font-bold">
                  {partner.Name}
                </p>
                <p className="text-[#8F8F8F] w-[291px]  text-[14px] text-center mx-auto font-merriweather mb-[40px] mt-[16px]">
                  {partner.description}
                </p>
                <div className="w-[302px] h-[20px] bg-[#DDE3E4] mx-auto" />{" "}
                {/* devider*/}
                <a
                  href={partner.link}
                  className="flex items-center justify-center text-[#0000FF]"
                >
                  <p className="mr-2 text-base my-[16px]">Learn More</p>{" "}
                  <AiOutlineArrowRight />
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
