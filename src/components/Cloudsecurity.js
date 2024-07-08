import React from 'react';
import Ractangle from './Ractangle';
import Heading from './shared/Heading';


import CloudMigtation from "../images and logos/logos/cloudMigration.svg";
import CloudConsultaion from "../images and logos/logos/cloud consulttion.svg";
import CloudSecurity from "../images and logos/logos/cloud security.svg";
import CloudApplicationDevelopment from "../images and logos/logos/application development.svg";
import CloudDataAnalytics from "../images and logos/logos/data analysis.svg";
import DevOps from "../images and logos/logos/devops.svg";
import CloudManagement from "../images and logos/logos/cloud management.svg";
import { NavLink } from 'react-router-dom';

const Cloudsecurity = () => {
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
            <div className="">
                <Ractangle text={"Solutions"} />
                <div className="dotted-2 lg:flex  md:flex sm:flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse justify-between lg:px-[8%] mt-[60px] bg-[#F9F9F9]">

                    <div className="lg:ml-0 sm:ml-0 md:ml-5">
                        <Heading className="" black={"Cloud"} blue={"Security"} />
                        <NavLink to="/solutions/ZeroTrust" className="btn mt-5 bg-blue-500 rounded-full normal-case text-white border-0 px-10">Zero Trust</NavLink>

                        <p className="font-merriweather mx-auto text-justify lg:mx-0 lg:mt-10 lg:w-[590px] lg:mr-[-50px] md:pr-10 md:w-full  sm:mx-5 ">As the adoption of cloud technology continues to grow, the need for robust and effective cloud security measures becomes increasingly important. The complex and ever-changing nature of cloud environments presents a significant challenge for organizations looking to protect their data and platforms from cyber threats.
                            <br />
                            <br />
                            At Mayhem Shield, we offer a comprehensive security transformation service that addresses these challenges and helps organizations lower their cyber risk while safeguarding their cloud-based assets. Our threat-centric approach ensures that our clients are always ahead of emerging threats, and our cloud security solutions are tailored to meet the unique needs of each individual organization.
                        </p>
                    </div>
                    <div className="mx-auto ">
                        <img
                            className="rounded lg:w-[454px] md:w-full sm:w-full mx-auto  lg:mt-20 md:mt-10 sm:mt-10"
                            src={"https://learn.microsoft.com/en-us/azure/architecture/guide/security/images/security-overview.png "}
                            alt=""

                        />
                    </div>
                </div>
                <p className='font-merriweather text-justify lg:mt-5  lg:mx-[8%] md:mx-5 md:ml-10 sm:mx-5   '>Our service starts with a comprehensive security assessment, which provides a detailed analysis of your current cloud security posture and identifies any vulnerabilities or areas for improvement. We then work closely with you to develop a customized cloud security strategy that aligns with your organization's specific goals and requirements.
                    <br />
                    <br />
                    Our team of experts has extensive experience in cloud-native solutions and multi-cloud security, which enables us to provide rapid detection and remediation of vulnerabilities in your cloud-hosted data, apps, and platforms. We continuously monitor and assess your cloud environment to identify new threats and vulnerabilities and provide timely responses and mitigation.
                    <br />
                    <br />
                    Our goal is to empower organizations to confidently adopt the cloud while reducing their risk of cyber attacks. <a href="/lets-talk " className='text-blue-500 font-bold'> Contact us</a> today to schedule a security assessment and begin your journey towards a more secure cloud environment. Our experts will work closely with you to understand your specific needs and develop a customized solution that will help protect your business from cyber threats.
                </p>
            </div>
            <div className="lg:mx-[8%] md:mx-5 sm:mx-5 sm:mt-10    ">
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
            <div className="w-fit mx-auto mb-10">
                <NavLink to="/solutions/ZeroTrust" className="btn mt-5 bg-blue-500 rounded-full normal-case text-white border-0 px-10">Zero Trust</NavLink>

            </div>

        </div>
    );
};

export default Cloudsecurity;
