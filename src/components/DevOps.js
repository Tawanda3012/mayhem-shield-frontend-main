import React from 'react';
import Ractangle from './Ractangle';
import Heading from './shared/Heading';



import CloudMigtation from "../images and logos/logos/cloudMigration.svg";
import CloudConsultaion from "../images and logos/logos/cloud consulttion.svg";
import CloudSecurity from "../images and logos/logos/cloud security.svg";
import CloudApplicationDevelopment from "../images and logos/logos/application development.svg";
import CloudDataAnalytics from "../images and logos/logos/data analysis.svg";
import CloudManagement from "../images and logos/logos/cloud management.svg";

const DevOps = () => {
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
            logo: CloudManagement,
            name: "Cloud Management",
            description:
                "Governance and Management of the Cloud Utilize our professional cloud management solutions to modernize while concentrating....",
            link: "/cloud-management",
        },
    ];
    return (
            <div className='min-h-screen bg-[#F9F9F9]'>
                <Ractangle text={"Solutions"} />
                <div className="dotted-2  lg:flex md:block sm:block justify-between lg:px-[8%] mt-[60px] bg-[#F9F9F9] ">
                    <div className="">
                    <img className="lg:w-[454px] mx-auto pt-10" src={"https://marvel-b1-cdn.bc0a.com/f00000000236551/dt-cdn.net/wp-content/uploads/2021/07/13429_ILL_DevOpsLoop.png"} alt={"image"} />
                    </div>
                    <div className="lg:w-1/2">
                        <Heading className="" black={"Dev"} blue={"Ops"} />
                    <p className='font-merriweather mx-auto text-justify lg:mx-0 lg:mt-10 lg:w-[590px] lg:mr-[-50px] md:pr-10 md:w-full mb-5 sm:mx-5 '>Organizations can outsource their DevOps duties to a specialized provider using DevOps as a service. For DevOps practices and tools, Mayhem Shield provides a variety of services, such as consultation, implementation, and ongoing support. Without having to spend money on creating an internal DevOps team, organizations can take advantage of the knowledge and resources of the provider by using DevOps as a service.<br /><br />
                        At Mayhem Shield, we specialize in offering thorough DevOps services that assist companies in enhancing their software development workflows and overall effectiveness. 
                        </p>
                    </div>
                </div>
                <div className="lg:mx-[10%] md:mx- sm:mx-0">
                    <p className=' font-merriweather mx-auto text-justify  lg:mt-10  lg:px-[50px] pb-8  mb-5 sm:mx-5 '>

                    <span className='font-bold'>
                        Our offerings consist of: {" "}
                    </span>
                    <br />
                    <br />
                    <span className='font-bold'>
                        DevOps consulting:  {" "}
                    </span>
                    We collaborate closely with our clients to comprehend their present workflows and spot potential areas for development. Then, based on the particular requirements of the organization, we create a tailored implementation strategy for DevOps best practices and tools.
                    <br />
                    <br />
                    <span className='font-bold'>Implementation: </span> After a plan has been established, we collaborate with the client to carry out the required modifications. This could entail setting up automated processes and workflows, training staff, and installing and configuring tools.<br /><br />
                    <span className='font-bold'>Support after implementation:</span>
                    To make sure that DevOps practices remain efficient and effective, we offer support after implementation. As part of this, the DevOps processes must be regularly updated and improved in addition to being monitored and troubleshot.
                        <br /><br />
                    <span className='font-bold'>Automation: </span>
                    Since many aspects of DevOps practices heavily rely on automation, we can assist our clients in fully automating their processes, starting with continuous integration, continuous delivery, monitoring, and incident management.
                        <br /><br />
                    <a href="cloud-migration" className='font-bold'>Cloud migration: </a >
                    As cloud infrastructure is more widely used, we assist our clients in moving their applications to the cloud and in adopting a cloud-native strategy to improve their applications' performance in the cloud.
                        <br /><br />
                        <br />
                    Organizations can notice a significant improvement in their software development processes and general performance by using Mayhem Shield's DevOps as a service. Our team of specialists can offer the information, tools, and assistance required to assist organizations in becoming more flexible, inventive, and responsive to shifting market conditions and customer demands. To find out more about how our DevOps services can help your company, <a className='text-blue-500 font-bold' href="lets-talk">Contact us</a> today to learn more.
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

export default DevOps;