import React from 'react';
import Ractangle from '../Ractangle';
import Heading from '../shared/Heading';

const MicrosoftAzure = () => {
    const upperText = `At Mayhem Shield, we are proud to be a strategic partner of Microsoft and are fully committed to leveraging the power of Azure to deliver exceptional value to our clients. Our deep expertise in Azure and our status as an Azure Expert Managed Services Provider (MSP) make us the go-to choose for organizations looking to modernize their operations and take full advantage of the many features and capabilities offered by Azure.`
    const middleText = `Our Azure-only practice is staffed by hundreds of Azure experts who are ready to help you take full advantage of the many services offered by Azure, such as:
`
    const lastText = `We use our expertise and automation tools to streamline the migration process and minimize downtime and provide ongoing support and maintenance to ensure that our clients can fully leverage the power of Azure.`
    const items = [
        {
            title: "Compute",
            description: " including virtual machines, containers, and serverless computing options to run applications and services in the cloud."
        },
        {
            title: "Storage",
            description: "including blobs, files, queues, and tables to store and manage data in the cloud."
        },
        {
            title: "Networking",
            description: "including virtual networks, load balancers, and VPNs to connect and secure resources in the cloud."
        },
        {
            title: "Security",
            description: " including Azure Active Directory, Azure Information Protection, and Azure Security Center to protect data and applications in the cloud."
        },
        {
            title: "Artificial Intelligence and Machine Learning",
            description: "including Azure Cognitive Services, Azure Machine Learning, and Azure Databricks to build intelligent applications and services."
        },
        {
            title: "Internet of Things (IoT)",
            description: "including Azure IoT Central, Azure IoT Edge, and Azure IoT Hub to connect, monitor, and control IoT devices."
        },
        {
            title: "Analytics",
            description: "including Azure Data Factory, Azure Stream Analytics, and Azure Power BI to collect, process, and visualize data in the cloud.."
        },
        {
            title: "Serverless",
            description: "including Azure Functions, Azure Logic Apps, and Azure Event Grid to build and run event-driven, serverless applications and services."
        },
    ]
    return (
        <div className=''>
            <Ractangle text={"Partners"} />
            <div className="text-justify lg:mx-[8%] md:mx-5 sm:mx-5 font-merriweather mt-[24px]">
                <Heading black={"Microsoft"} blue={"Azure"} />
                <p className="font-merriweather mt-[24px] text-justify">{
                    upperText
                }
                </p>
                <div className="my-[40px] mx-auto ">
                    <img className="rounded-xl mx-auto  w-fit" src="https://store.hp.com/app/assets/images/uploads/prod/top-5-benefits-microsoft-azure-hero1589922688066149.jpg" alt="" />
                </div>
                <p className="font-merriweather mt-[24px] text-justify">{middleText}

                </p>
                <br />
                <ul className='list-disc lg:mx-20 md:mx-5 sm:mx-5' >
                    {
                        items.map((item, i) => <>
                            <li key={i} className=''>
                                <p> <span className='font-bold w-fit '>{item.title}</span> : {item.description}</p>
                            </li>
                        </>)
                    }

                </ul>
                <br />
                <p>
                    {lastText}
                </p>
                <br />
                <p >At Mayhem Shield, we are committed to helping our clients take full advantage of the many benefits offered by Azure, by leveraging our strategic partnership with Microsoft and our deep Azure expertise. <a href="/lets-talk" className='text-blue-500 font-bold' >Contact us</a> today to schedule a free consultation and let us show you how we can help you modernize your business and unlock the full potential of Azure.</p>
                <br />
                <br />

            </div>
        </div>
    );
};

export default MicrosoftAzure;
