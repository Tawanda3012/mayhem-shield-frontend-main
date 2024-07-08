import React from "react";
import Ractangle from "./Ractangle";
import image from "../images and logos/table.png";
import Heading from "./shared/Heading";

import CloudMigtation from "../images and logos/logos/cloudMigration.svg";
import CloudConsultaion from "../images and logos/logos/cloud consulttion.svg";
import CloudSecurity from "../images and logos/logos/cloud security.svg";
import CloudApplicationDevelopment from "../images and logos/logos/application development.svg";
import CloudDataAnalytics from "../images and logos/logos/data analysis.svg";
import DevOps from "../images and logos/logos/devops.svg";
import CloudManagement from "../images and logos/logos/cloud management.svg";
import { Link } from "react-router-dom";

const Solutions = () => {
  const cards = [
    {
      logo: CloudMigtation,
      name: "Cloud Migration",
      description:
        "Transform your organization into an agile and scalable enterprise with our business cloud migration solutions...",
      link: "/cloud-migration",
    },
    {
      logo: CloudConsultaion,
      name: "Cloud Consultaion",
      description:
        "Cloud Migration Transform your organization into an agile and scalable enterprise with our business cloud migration...",
      link: "/cloud-consulting",
    },
    {
      logo: CloudSecurity,
      name: "Cloud Security",
      description:
        "Our threat-centric cloud security transformation services will help you lower your cyber risk while safeguarding...",
      link: "/cloud-security",
    },
    {
      logo: CloudApplicationDevelopment,
      name: "Cloud Application Development",
      description:
        "Continue to develop by using integrated delivery methods and scalable hosting for your cloud applications...",
      link: "/application-development",
    },
    {
      logo: CloudDataAnalytics,
      name: "Cloud and Data Analysis",
      description:
        "Every business is supported by data, a priceless resource that should be used to its full potential to advance the company...",
      link: "/cloud-and-data-analysis",
    },
    {
      logo: DevOps,
      name: "DevOps",
      description:
        "Become self-sustainable with your cloud initiatives through our subscription-based, agile DevOps-as-a-Service...",
      link: "/devops",
    },
    {
      logo: CloudManagement,
      name: "Cloud Management",
      description:
        "Governance and Management of the Cloud Utilize our professional cloud management solutions to modernize while concentrating....",
      link: "/cloud-management",
    },
  ];
  return (
    <div>
      <Ractangle text={"Solutions"} />
      <div className="lg:mx-[8%] md:mx-10 sm:mx-5">
        <div className="flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse ">
          <div className="">
            <p className="font-merriweather mx-auto text-justify lg:mx-0 lg:mt-10 lg:w-[590px] lg:mr-[-50px] md:pr-10 md:w-full lg:mb-[91px] sm:mx-5 md:mt-20 sm:mt-10 ">
              With a combination of cloud expertise and software-enabled
              automation, the Mayhem Shield cloud migration services are here to
              identify further opportunities where your organization can adopt
              cloud to evolve. Our smarter way to migrate helps reduce the cost
              and simplify the process of cloud migration, allowing you to reap
              the benefits and modern innovations of the cloud in the most
              efficient manner.
              <br />
              <br />
              By codifying our knowledge, maturity and experience, Mayhem Shield
              accelerates the time-to-value of the cloud so enterprises of any
              size can take full advantage and see improved results in no time
              at all. We pride ourselves on delivering extraordinary value to
              all of our customers, providing cloud migration services that can
              move our customers out of their on-premises data centers and onto
              a public cloud platform.
            </p>
          </div>
          <div className="mx-auto">
            <img
              className="lg:w-[454px] md:w-full sm:w-full mx-auto  md:mt-10 sm:mt-10"
              src={image}
              alt={image}
            />
          </div>
          <div className=""></div>
        </div>
        <Heading blue={"Solutions"} />
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-[30px] ">
          {cards.map((card, i) => (
            <>
              <a key={i} href={card.link}>
                <div className=" mx-auto w-[350px] h-[331px]  bg-white drop-shadow-md rounded-lg my-[15px]">
                  <img
                    className="w-[74px] mx-auto mt-[40px]"
                    src={card.logo}
                    alt=""
                  />
                  <p className="font-ptSens text-[20px]  font-bold text-center mt-[30px]">
                    {card.name}
                  </p>
                  <p className="mt-[16px] font-merriweather text-center w-[302px] mx-auto ">
                    {card.description}
                  </p>
                </div>
              </a>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
