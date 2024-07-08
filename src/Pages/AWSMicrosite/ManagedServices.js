import { NavLink } from 'react-router-dom';

import partner from "../../components/assets/images/aws-partner-badge.png";
import cover from "../../components/assets/images/allPagePhoto.jpeg";
const ManagedServices = () => {
    return (
        <div className='sm:px-3 lg:px-0 relative'>
            <div className="lg:flex md:flex  md:min-h-fit lg:min-h-[400px] min-h-[500px] sm:block justify-between items-start mt-5 lg:px-10 sm:px-5">
                <div className="relative">
                    <h1 className='lg:text-[50px] sm:text-[30px] font-bold'>AWS Cloud Managed Services</h1>
                    <p>Focus on business innovation and not 24/7 cloud operations - reduce your cloud costs while maximizing performance and availability</p>
                    <br />
                    <NavLink to="https://mayhemshield.zohobookings.com/#/customer/4578999000000041016" className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold mt-8' >Customer Portal Login</NavLink>
                </div>
                <div className="relative sm:mt-[130px] lg:mt-[200px] lg:w-1/2 md:w-3/4 sm:w-full flex justify-center items-center my-5 mx-auto">
                    <img src="https://www.clearscale.com/images/illustrations/new/illustration-service-page.svg"
                        className='w-full absolute' alt="img" />
                    <img src={partner}
                        className='w-1/2  absolute' alt="img" />
                </div>
            </div>
            <div className="">
                <img className='lg:w-[40vw] w-[80vw] mt-10  mx-auto max-w-full' src={cover} alt="" />
            </div>
            <div className="bg-gray-50 lg:px-10 sm:px-0 py-10 text-center ">
                <div className="lg:max-w-[1000px] md:max-w-[90%] mx-auto">
                    <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Increase Engineering Capacity Through Managed Services</h1>
                    <p>Focus on your business instead of cloud operations when you enlist Mayhem ShieldManaged Services. With our robust tool set and experienced engineers, the Mayhem ShieldManaged Services team can help you reduce your IT costs and improve the efficiency of your cloud infrastructure. Our trusted team provides 24/7 monitoring, and services related to all AWS products. Select from a variety of service tiers to meet your specific cloud managed services needs and budget.</p>
                </div>

            </div>
            <div className="flex flex-wrap justify-evenly gap-5 my-10">
                <h1 className='lg:text-[30px] w-full text-center my-10 mt-20 sm:text-[30px] font-semibold mb-5'>Achieve More With Mayhem Shield and AWS</h1>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-reduce-cost--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Reduce IT Costs</h1>
                    <p>Ensure your cloud environment remains cost-effective by monitoring your AWS charges and identifying opportunities for savings.</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-people-meet--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Mitigate Issues</h1>
                    <p>Issue alerts automatically and mitigate identified problems quickly, improving availability and security.</p>

                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-arrows-to-top-3--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Maintain High Performance</h1>
                    <p>Generate regular reports on the health and security of your IT infrastructure by monitoring metrics to maximize availability and performance.</p>
                </div>
            </div>
            <div className="w-fit mx-auto">
                <NavLink to="/partners/aws/landing2" className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold my-8' >Chat With Cloud Specialist</NavLink>
            </div>


            <div className="bg-gray-50 lg:px-10 sm:px-0 py-10 text-center ">
                <div className="lg:max-w-[1000px] md:max-w-[90%] mx-auto">
                    <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5 max-w-[1000px]'>Why Choose Mayhem Shield as Your Cloud Managed Services Provider?</h1>
                </div>
                <div className="text-start flex flex-wrap lg:justify-between justify-evenly items-center mt-20">
                    <span className='lg:w-1/2 md:w-2/3 sm:w-full'>
                        <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>24x7x365 Support</h1>
                        <p className='text-justify'>After more than 900 successful projects, we’ve learned how to get the most out of AWS. ClearScale offers industry-leading cloud-managed services designed to meet your requirements and budget. We’re a trusted partner for many organizations and provide 24x7x365 platform management and access to deep AWS cloud expertise when you need it.</p>
                    </span>
                    <img src="https://www.clearscale.com/images/pictures/advantages-section/managed-services-1_1x.webp" alt="" />
                </div>
                <div className="text-start flex flex-wrap lg:justify-between justify-evenly items-center mt-5">
                    <img src="https://www.clearscale.com/images/pictures/advantages-section/managed-services-2_1x.webp" alt="" />
                    <span className='lg:w-1/2 md:w-2/3 sm:w-full'>
                        <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>More Flexibility and Control</h1>
                        <p className='text-justify'>On top of your standard support, our cloud management services provide a package of monthly supplemental services hours which can be utilized for infrastructure maintenance and changes, automation tasks, custom monitoring, security updates, application performance findings and changes, and more. This allows you greater flexibility and control as needs arise in your AWS environment. You will also get a designated Service Delivery Manager for onboarding and ongoing customer support, who will work as a liaison between you and the ClearScale MSP team.</p>
                    </span>
                </div>
                <div className="w-fit mx-auto">
                    <NavLink to="/partners/aws/landing2" className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold mt-8' >Schedule Meeting</NavLink>
                </div>
            </div>
            <div className="bg-blue-500 text-white  lg:px-[50px] p-5 py-20">
                <div className="">
                    <h1 className='text-3xl w-full text-center font-semibold'>Managed Services Program Highlights</h1>

                    <div className=" flex flex-wrap lg:justify-between justify-evenly">
                        <div className='lg:w-[400px] text-justify w-full '>
                            <h1 className='text-4xl my-8 w-full  font-semibold'>24x7x365 Coverage</h1>
                            <p>ClearScale offers 24x7x365 support, management, and monitoring to optimize your applications and infrastructure on the AWS platform.</p>
                            {/* <NavLink to='/' className='underline mt-5'>Read more</NavLink> */}
                        </div>
                        <div className='lg:w-[400px] text-justify w-full '>
                            <h1 className='text-4xl my-8 w-full  font-semibold'>24/7 Monitoring</h1>
                            <p>ClearScale provides 24/7 monitors and alerts for your cloud infrastructure, applications, and dependent services to ensure everything is available, healthy, and secure.</p>
                            {/* <NavLink to='/' className='underline mt-5'>Read more</NavLink> */}
                        </div>
                        <div className='lg:w-[400px] text-justify w-full '>
                            <h1 className='text-4xl my-8 w-full  font-semibold'>Fast Response SLAs</h1>
                            <p>Whether your ticket or incident is considered “Low Priority” or “Urgent” our team is dedicated to providing a timely and helpful response.</p>
                            {/* <NavLink to='/' className='underline mt-5'>Read more</NavLink> */}
                        </div>
                    </div>
                </div>
            </div>

            {/*  qna */}
            <div className="lg:w-2/3 md:w-full sm:w-full mx-auto mt-20">
                <h1 className='w-full text-center text-4xl  font-semibold my-10'>Frequently Asked Questions</h1>
                <div tabIndex={0} className="collapse collapse-plus ">
                    <div className="collapse-title text-xl font-medium">
                        What are managed services?                    </div>
                    <div className="collapse-content">
                        <p>Managed services refers to the arrangement in which a company outsources certain managerial or administrative IT tasks to an external party. The purpose of managed services is to free up in-house technical resources to focus on higher-value activities, like new application development. Cloud managed services, specifically, are growing increasingly popular as organizations look to offload the complex work of cloud environment management to experienced vendors.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus ">
                    <div className="collapse-title text-xl font-medium">
                        What activities are included in managed services?
                    </div>
                    <div className="collapse-content">
                        <p>Managed services can include a range of activities. For instance, ClearScale provides 24x7x365 monitoring of cloud infrastructure and application performance, rapid incident reporting, software patching, and more. Our team also helps clients optimize resources and boost security. Moreover, some vendors, including ClearScale, deliver managed services on a tiered basis, allowing companies to choose from different levels of IT outsourcing.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus ">
                    <div className="collapse-title text-xl font-medium">
                        What are the benefits of using managed services?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Managing cloud environments, tracking application performance, and troubleshooting issues can take a lot of time and energy. And as cloud environments become more complex, the chances of things falling through the cracks increases. Managed services allow organizations to offload this work to more experienced and knowledgeable parties. This frees up engineering capacity, increases performance potential, and often results in lower costs.                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus ">
                    <div className="collapse-title text-xl font-medium">
                        When does it make sense to leverage cloud managed services?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Organizations turn to managed services for a number of reasons. Some have small internal IT teams with limited cloud experience. Others are experiencing rapid growth and would rather have engineering resources focused on innovation. In general, the decision to adopt coud managed services comes when organizations feel their IT administration is best in the hands of an external party for cost, capacity, and/or performance reasons.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus ">
                    <div className="collapse-title text-xl font-medium">
                        What cloud managed services packages does ClearScale offer?
                    </div>
                    <div className="collapse-content">
                        <p>
                            ClearScale offers three tiers of AWS cloud managed services: Basic, Advanced, and Premier. Each package comes with supplemental service hours on top of core managed services activities like 24x7 technical support, platform monitoring, and runbook-based processing. ClearScale’s involvement expands with each service tier, allowing organizations to choose how much they want our team to handle on their behalf.                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus ">
                    <div className="collapse-title text-xl font-medium">
                        Which AWS cloud managed services package is right for my organization?
                    </div>
                    <div className="collapse-content">
                        <p>
                            The best way to determine which AWS cloud managed services package is right for your organization is to speak with a ClearScale expert. We’ll discuss your goals and reasons for exploring AWS cloud managed services, as well as what capabilities you have in-house already. At the end of the day, we want to provide you with exactly the level of support that you need to feel confident and excited about your IT performance on the cloud.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-blue-500 mt-20 text-white flex flex-wrap lg:text-start md:text-start  sm:text-center lg:justify-between md:justify-between sm:justify-center items-center lg:px-[150px] lg:py-20 py-10 rounded  border-0">
                <div className="">
                    <h1 className='text-5xl font-semibold'>Ready to Take the Next Step?</h1>
                    <p className='mt-5'>Connect With Our Cloud Experts To Begin Your Cloud Journey</p>
                </div>
                <NavLink to="/partners/aws/landing2" className='mt-5 bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold ' >Contact Us</NavLink>
            </div>
        </div >
    );
};

export default ManagedServices;

