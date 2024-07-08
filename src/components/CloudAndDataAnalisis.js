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
import CloudManagement from "../images and logos/logos/cloud management.svg";


const CloudAndDataAnalisis = () => {

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
        <div className='min-h-screen bg-[#F9F9F9]'>
            <Ractangle text={"Solutions"} />
            <div className="dotted-2  lg:flex md:block sm:block justify-between lg:px-[8%] mt-[60px] bg-[#F9F9F9] ">
                <div className="">
                    <img className="lg:w-[454px] mx-auto pt-10" src={image} alt={image} />
                </div>
                <div className="lg:w-1/2">
                    <Heading className="" black={"Cloud"} blue={"Data Analysis"} />
                    <p className='font-merriweather mx-auto text-justify lg:mx-0 lg:mt-10 lg:w-[590px] lg:mr-[-50px] md:pr-10 md:w-full mb-5 sm:mx-5 '>Mayhem Shield is a provider of cloud and data <span className='font-bold text-blue-500'>analytics services</span> that helps organizations to harness the power of cloud computing and <span className='font-bold text-blue-500'> data analytics </span> to drive business growth and improve operational efficiencies. Mayhem Shield offers a range of services that include <a href="/cloud-migration" className='font-bold text-blue-500'> cloud migration </a>, cloud architecture and design, <span className='font-bold text-blue-500'> data analytics</span>, and <a href="/devops" className='font-bold text-blue-500'>DevOps</a>.
                        <br /><br /> Our cloud management services
                        include:
                        <br />
                        <br />
                        <a href="cloud-migration" className='font-bold text-blue-500'>
                            Cloud migration:  {" "}
                        </a>
                        Services: Mayhem Shield helps organizations to migrate their existing on-premise workloads to the cloud. Mayhem Shield's team of experts will work closely with the client to understand their current IT environment and design a migration plan that aligns with their business goals and requirements. Mayhem Shield has extensive experience in <a href="cloud-migration" className='font-bold text-blue-500'>migrating</a> various workloads to various cloud platforms such as<a href="partners/aws" className='font-bold text-blue-500'>AWS</a> ,<a href="partners/microsoft-azure" className='font-bold text-blue-500'> Azure</a>, and <a href="partners/google-cloud" className='font-bold text-blue-500'>Google Cloud</a>.
                    </p>
                </div>

            </div>
            <div className="lg:mx-[10%] md:mx- sm:mx-0">
                <p className=' font-merriweather mx-auto text-justify  lg:mt-0  lg:px-[50px] pb-8  mb-5 sm:mx-5 '>
                    <span className='font-bold'>Cloud Architecture and Design: </span> Our team of experts can help organizations design and implement a cloud architecture that aligns with their business needs. Mayhem Shield provide guidance on selecting the right <a href="partners" className='font-bold text-blue-500'>cloud platform partner</a>, designing a scalable and highly available architecture, and implementing security and compliance controls.<br /><br />
                    <span className='font-bold'>Data Analytics Services:</span>
                    Mayhem Shield can help organizations to unlock the insights in their data and make better business decisions. We provide services such as <span className='font-bold text-blue-500'> data warehousing, data lake, data integration, data modeling</span>, and <span className='font-bold text-blue-500'> data visualization </span>. Mayhem Shield's team of experts can work with clients to help them design and implement a data analytics solution that aligns with their business needs.
                    <br /><br />
                    <span className='font-bold'>DevOps Services: </span>
                    We provide a range of <a href="devops" className='font-bold text-blue-500'>DevOps</a> services that help organizations to improve the speed and reliability of their software delivery. This includes automation, continuous integration and continuous delivery <span className='font-bold text-blue-500'> (CI/CD)</span>, and monitoring. Mayhem Shield's team of experts can work with clients to implement a <a href="devops" className='font-bold text-blue-500'>DevOps</a> strategy that aligns with their business goals and requirements.
                    <br /><br />
                    <br />
                    Mayhem Shield's team of experts has extensive experience in working with a wide range of industries and has a proven track record of delivering successful cloud and data analytics projects. Mayhem Shield's goal is to help clients to achieve their business objectives by leveraging the power of cloud and data analytics. <a className='text-blue-500 font-bold' href="lets-talk">Contact </a> Mayhem Shield today to learn more about how their services can benefit your organization.
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

export default CloudAndDataAnalisis;