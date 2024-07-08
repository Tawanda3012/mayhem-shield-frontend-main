import React from "react";
import Ractangle from "./Ractangle";
import img from "../images and logos/4.png";
import phone from "../images and logos/logos/phone.svg";
import massage from "../images and logos/logos/message.svg";
// import { Contact } from "./LetsTalk"
import HeadingCenter from "./shared/HeadingCenter";

const Careers = () => {
  return (
    <div>
      <Ractangle text={"Careers"} />
      <div className="lg:flex md:flex justify-around mt-[60px] lg:mx-[8%] ">
        <div className="md:w-3/4 sm:w-1/2 mx-auto">
          <img src={img} alt="" />
        </div>
        <div className=" lg:w-1/2  md:w-[3/4] sm:w-full ">
          <p className="font-merriweather mx-auto text-justify lg:w-[540px] md:w-3/4 mb-[91px] sm:px-5">
            Welcome to the careers page of Mayhem Shield, a leading cloud services provider. We are always on the lookout for talented and motivated people to join our team.
            <br />
            <br />
            At Mayhem Shield, we believe that our most valuable asset is our team. We are dedicated to fostering an environment of innovation, collaboration, and lifelong learning. We provide a dynamic and challenging work environment in which individuals can develop their skills and make a significant contribution to our clients' success.
            <br />
            <br />
            We are currently seeking experts in <a href="/cloud-migration" className="text-blue-500">cloud migration</a> , <a href="/cloud-management" className="text-blue-500"> cloud management</a>, <a href="/cloud-security" className="text-blue-500">cloud security</a> , and <a href="lets-talk" className="text-blue-500">software development</a>. We encourage you to apply if you have a passion for technology and want to work in a fast-paced, innovative environment.
            <br />
            <br />
            We offer competitive salaries and benefits, including health insurance, retirement plans, and opportunities for professional development. We are dedicated to fostering a diverse and inclusive workplace in which all employees feel valued and respected.
            <br />
            <br />
            If you want to join the Mayhem Shield team, send your resume and cover letter to <a className="text-blue-500" href="mailto:careers@mayhemshield.com" >careers@mayhemshield.com</a>. We will review your application and contact you if we believe you are a good fit for our organization.
            Thank you for your interest in working for Mayhem Shield. We eagerly await your response.

          </p>
        </div>
      </div>
      <div className="lg:mx-[8%] md:mx-5 sm:mx-5 mr-[auto]">
          <div className=" w-fit flex flex-col items-start mr-[auto]">
            <HeadingCenter black={"Contact"} blue={"Us"}  />
            <p className="font-merriweather  mt-[30px] text-[#212121]   sm:text-[14px] ">
              Thanks for your interest in Mayhem Shield. We'd love to hear from
              you!
            </p>
          </div>
        </div>
      <CareersContact/>
    </div>
  );
};


export function CareersContact() {
  const mini_cards = [
    {
      img: massage,
      title: "Email Address",
      sub_title: "mayhemshieldcareers@gmail.com",
    },
    {
      img: phone,
      title: "Call us",
      sub_title: "(866)883 - 8178",
    },
  ];


  return (
    <>
        <div
          className="lg:grid md:grid sm:block grid-cols-2 gap-[31px] drop-shadow-md lg:mx-[8%] 
                      md:mx-5 sm:mx-2 mt-[60px]"
         >
          {mini_cards.map((card, i) => (
            <>
              <a
                href={
                  card.sub_title.includes("@")
                    ? `mailto:${card.sub_title}`
                    : `tel:${card.sub_title}`
                }
              >
                <div
                  key={i}
                  className="bg-white flex rounded-md items-center sm:mt-5"
                >
                  <img
                    className="w-[88px] my-[16px] ml-[16px]"
                    src={card.img}
                    alt=""
                  />
                  <div className="ml-[25px]">
                    <p className="font-bold font-ptSans text-[20px]">
                      {card.title}
                    </p>

                    <p className="font-merriweather">{card.sub_title}</p>
                  </div>
                </div>
              </a>
            </>
          ))}
         </div>

    </>
  )
};





export default Careers;
