import React from 'react';
import Ractangle from './Ractangle';
import image from "../images and logos/images.png";
import Heading from './shared/Heading';



import CloudMigtation from "../images and logos/logos/cloudMigration.svg";
import CloudConsultaion from "../images and logos/logos/cloud consulttion.svg";
import CloudSecurity from "../images and logos/logos/cloud security.svg";
import CloudApplicationDevelopment from "../images and logos/logos/application development.svg";
import CloudDataAnalytics from "../images and logos/logos/data analysis.svg";
import DevOps from "../images and logos/logos/devops.svg";

const CloudManagement = () => {
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
        
    ];
    return (
        <div className='min-h-screen bg-[#F9F9F9]'>
            <Ractangle text={"Solutions"} />
            <div className="dotted-2  lg:flex md:block sm:block justify-between lg:px-[8%] mt-[60px] bg-[#F9F9F9] ">
                <div className="">
                    <img className="lg:w-[454px] mx-auto pt-10" src={image} alt={image} />
                </div>
                <div className="lg:w-1/2">
                    <Heading className="" black={"Cloud"} blue={"Management"} />
                    <p className='font-merriweather mx-auto text-justify lg:mx-0 lg:mt-10 lg:w-[590px] lg:mr-[-50px] md:pr-10 md:w-full mb-5 sm:mx-5 '>Mayhem Shield's cloud management service is designed to help organizations navigate the complexities of cloud operations and fully leverage the benefits of the cloud. Our solutions are centered on modernization, shared success, and collaborative ways of working. We understand that transitioning to the cloud can be a daunting task, which is why we focus on providing comprehensive cloud management solutions that are tailored to your specific needs. <br /><br /> Our cloud management services
                        include:
                        <br />
                        <br />
                        <a href="cloud-migration" className='font-bold'>
                            Cloud migration:  {" "}
                        </a>
                        Our team of experts can help you plan and execute a seamless migration to the cloud. We will work with you to assess your current IT landscape, identify any challenges, and develop a migration strategy that aligns with your business goals.
                    </p>
                </div>
            </div>
            <div className="lg:mx-[10%] md:mx- sm:mx-0">
                <p className=' font-merriweather mx-auto text-justify  lg:mt-10  lg:px-[50px] pb-8  mb-5 sm:mx-5 '>
                    <span className='font-bold'>Cloud optimization:</span> We use cloud data and analytics to provide deep operational insights that help you optimize your cloud environment. We work with you to identify opportunities for cost savings, improve performance, and ensure compliance with security and regulatory requirements.<br /><br />
                    <span className='font-bold'>Cloud security: </span>
                    We provide expert guidance on securing your cloud environment to protect your business from cyber threats. We use cutting-edge security solutions to protect your data and applications from unauthorized access.
                    <br /><br />
                    <span className='font-bold'>Cloud application development: </span>
                    Our team of developers has extensive experience in developing cloud-native applications. We use a cloud-first approach to deliver highly available, scalable, and resilient applications that meet your business requirements.
                    <br /><br />
                    <span className='font-bold'>DevOps:</span>
                    We provide comprehensive DevOps services to help you align your development and operations teams. Our approach includes automation, continuous improvement, and cross-functional teams.
                    <br /><br />
                    <br />
                    At Mayhem Shield, we understand the importance of working closely with our clients to ensure their success. Our team of experts will work closely with you to understand your business objectives, and develop a cloud management strategy that aligns with your goals. <a className='text-blue-500 font-bold' href="lets-talk">Contact us</a> today to learn more about how we can help you fully leverage the benefits of the cloud.
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
        </div>
    );
};

export default CloudManagement;

