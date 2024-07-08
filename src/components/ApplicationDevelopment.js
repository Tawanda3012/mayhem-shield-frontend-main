import React from 'react';
import Ractangle from './Ractangle';
import Heading from './shared/Heading';



import CloudMigtation from "../images and logos/logos/cloudMigration.svg";
import CloudConsultaion from "../images and logos/logos/cloud consulttion.svg";
import CloudSecurity from "../images and logos/logos/cloud security.svg";
import CloudDataAnalytics from "../images and logos/logos/data analysis.svg";
import DevOps from "../images and logos/logos/devops.svg";
import CloudManagement from "../images and logos/logos/cloud management.svg";


export function Services (){
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

    return(
   
        <>
          <div className="lg:mt-[80px] lg:mx-[8%]  sm:mx-5 sm:mt-10    ">
                <Heading black={"Solutions"} />
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
        </>
)
    
};

const ApplicationDevelopment = () => {
  
    return (
        <div>
            <div className="">
                <Ractangle text={"Solutions"} />
                <div className="dotted-2 lg:flex  md:flex sm:flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse justify-between lg:px-[8%] mt-[60px]">

                    <div className="lg:ml-0 sm:ml-0 md:ml-5">
                        <Heading className="" black={"Cloud"} blue={"Application Development"} />
                        <p className="font-merriweather mx-auto text-justify lg:mx-0 lg:mt-10 lg:w-[590px] lg:mr-[-50px] md:pr-10 md:w-full  sm:mx-5 ">At Mayhem Shield, we believe that in order for an organization to fully embrace the benefits of cloud computing, it must not only adopt the appropriate cloud applications, but also cultivate the necessary mindset and practices of cloud-native development. Our goal is to help organizations update their existing application portfolio, as well as develop new, greenfield applications that take full advantage of the scalability, security, and cost-effectiveness of the cloud.
                            <br />
                            <br />
                            To achieve this, our team of experienced cloud application consultants work closely with your organization to understand your specific needs and challenges. Together, we develop a vision-led strategy for your <a href="/cloud-migration" className='text-blue-500 font-bold'>cloud migration</a> and application development journey, taking into account the unique characteristics of your organization and the specific requirements of your applications.
                        </p>
                    </div>
                    <div className="mx-auto ">
                        <img
                            className="rounded lg:w-[454px] md:w-full sm:w-full mx-auto  lg:mt-20 md:mt-10 sm:mt-10"
                            src={"https://gloriumtech.com/wp-content/uploads/2022/09/Diving-deep-into-cloud-application-development.jpg"}
                            alt=""

                        />
                    </div>
                </div>
                <p className='font-merriweather text-justify lg:mt-5  lg:mx-[8%] md:mx-5 md:ml-10 sm:mx-5   '>Our consultants have a wide range of skill sets and expertise in areas such as cloud architecture, <a href="/devops" className='text-blue-500 font-bold'>DevOps</a>, and application security. This allows us to quickly deliver integrated solutions that address the application-level difficulties that often arise during cloud adoption. Whether you are a small startup or a large enterprise, our approach is designed to efficiently develop exceptional user and customer experiences.
                    <br />
                    <br />
                    In short, if you're looking to fully harness the power of the cloud and become a truly cloud-native organization, we encourage you to <a href="/lets-talk " className='text-blue-500 font-bold'> Contact us</a> at Mayhem Shield. Our team of experts are ready to help you create a vision-led strategy that will guide you on your cloud journey and help you to achieve the scalability, security, and cost-effectiveness you need to succeed in today's fast-paced digital world.
                </p>
            </div>
            <Services/>

            {/* <div className="lg:mx-[8%] md:mx-5 sm:mx-5 sm:mt-10    ">
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
            </div> */}
        </div>
    );
};

export default ApplicationDevelopment;