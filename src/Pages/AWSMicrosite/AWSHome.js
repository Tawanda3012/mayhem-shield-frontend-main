import React from 'react';
import partner from "../../components/assets/images/aws-partner-badge.png";
import { Transition } from '@headlessui/react';
import HoverCard from '../../components/HoverCard';
import cover from "../../components/assets/images/allPagePhoto.jpeg";
import { NavLink } from 'react-router-dom';

const AWSHome = () => {
    const cardContent = [
        {
            logo: <svg role="img" width="55" viewBox="0 0 56.176 61.085" preserveAspectRatio="xMidYMin meet"><g data-name="icon-mlai" fill="none" stroke="#ebf7ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path data-name="icon-mlai1" d="M9.059 48.302l-6.343-3.488v-7.929"></path><path data-name="icon-mlai2" d="M2.716 24.199v-7.928l6.343-3.489"></path><path data-name="icon-mlai3" d="M21.746 5.489L28.089 2l6.343 3.489"></path><path data-name="icon-mlai4" d="M47.117 12.782l6.343 3.489V24.2"></path><path data-name="icon-mlai5" d="M53.46 36.885v7.929l-6.343 3.551"></path><path data-name="icon-mlai" d="M34.432 55.596l-6.343 3.489-6.343-3.489"></path><path data-name="icon-mlai7" d="M28.087 30.544l6.343-3.489"></path><path data-name="icon-mlai8" d="M47.117 19.76l6.343-3.489"></path><path data-name="icon-mlai9" d="M28.087 30.542v7.929"></path><path data-name="icon-mlai10" d="M28.087 51.156v7.929"></path><path data-name="icon-mlai11" d="M28.089 28.831l-6.343-3.552"></path><path data-name="icon-mlai12" d="M9.059 19.76l-6.343-3.489"></path></g></svg>,
            title: "AI and Machine Learning",
            description: "Create automated machine learning programs that improve over time and uncover insights about your customers.",
            link: "/aws/ml"
        },
        {
            logo: <img className='w-[55px]' src="https://www.clearscale.com/public/images/icons/icon-hand-3--white.svg" alt="" />,
            title: "Application Development",
            description: "Migrate your applications, servers, and databases to the cloud without disrupting ongoing operations.",
            link: "/aws/application-development"
        },
        {
            logo: <svg role="img" width="55" viewBox="0 0 64.952 59.032" preserveAspectRatio="xMidYMin meet"><g data-name="icon-slash" fill="none" stroke="#ebf7ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path data-name="icon-slash1" d="M39.248 2.425L25.703 56.606"></path><path data-name="icon-slash2" d="M15.545 15.97L2 29.515l13.545 13.546"></path><path data-name="icon-slash3" d="M49.406 15.971l13.545 13.545-13.545 13.546"></path></g></svg>,
            title: "Application Modernization",
            description: "Modernize your applications to get the most out of the cloud with containers, serverless computing, microservices, and more.",
            link: "/aws/application-modernization"
        },
        {
            logo: <svg role="img" width="55" viewBox="0 0 72.419 48.225" preserveAspectRatio="xMidYMin meet"><path data-name="icon-cloud" d="M17.931 46.225C9.131 46.225 2 39.403 2 30.987s7.133-15.239 15.931-15.239C20.005 6.49 30.033.502 40.319 2.372s16.94 10.891 14.862 20.149h3.386a11.852 11.852 0 110 23.7H17.931" fill="none" stroke="#ebf7ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path></svg>,
            title: "Cloud Migrations",
            description: "Migrate your applications, servers, and databases to the cloud without disrupting ongoing operations.",
            link: "/cloud-migration"
        },
        {
            logo: <img className='w-[55px]' src="	https://www.clearscale.com/images/icons/icon-containers--white.svg" alt="icon" />,
            title: "Containers",
            description: "Migrate to modernized containerization or move to managed containers on AWS.",
            link: "/aws/containers"
        },
        {
            logo: <svg role="img" width="55" viewBox="0 0 64.954 58.181" preserveAspectRatio="xMidYMin meet"><g data-name="icon-pc" transform="translate(-32.525 -37.339)" fill="none" stroke="#ebf7ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><rect data-name="icon-pc1" width="60.954" height="40.636" rx="1" transform="translate(34.525 39.339)"></rect><path data-name="icon-pc2 6" d="M48.07 93.52h33.863"></path><path data-name="icon-pc3" d="M54.844 79.975V93.52"></path><path data-name="icon-pc4" d="M75.16 79.975V93.52"></path><path data-name="icon-pc5" d="M51.457 66.429L61.616 56.27l6.773 6.773 10.159-10.159"></path></g></svg>,
            title: "Data & Analytics",
            description: "Configure scalable data lakes, pipelines, and analytical infrastructure capable of handling massive data volumes.",
            link: "/aws/data-analytics"
        },
        {
            logo: <svg role="img" width="55" viewBox="0 0 54.742 61.085" preserveAspectRatio="xMidYMin meet"><g data-name="icon-db" transform="translate(-39.438 -36.508)" fill="none" stroke="#ebf7ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><ellipse data-name="icon-db1" cx="25.371" cy="9.514" rx="25.371" ry="9.514" transform="translate(41.438 38.508)"></ellipse><path data-name="icon-db2" d="M41.438 48.022V67.05c0 5.255 11.359 9.514 25.371 9.514s25.371-4.26 25.371-9.514V48.022"></path><path data-name="icon-db3" d="M41.438 67.05v19.028c0 5.255 11.359 9.514 25.371 9.514s25.371-4.26 25.371-9.514V67.05"></path></g></svg>,
            title: "Database Services",
            description: "Migrate and modernize your legacy databases to get unlimited scalability and high availability at a lower cost.",
            link: "/aws/databas-service"
        },
        {
            logo: <svg role="img" width="55" viewBox="0 0 60.668 60.668" preserveAspectRatio="xMidYMin meet"><g data-name="icon-setup" transform="translate(-36.455 -36.444)" fill="none" stroke="#ebf7ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path data-name="icon-setup1" d="M61.516 42.59a5.426 5.426 0 0110.546 0 5.428 5.428 0 008.1 3.356 5.43 5.43 0 017.461 7.461 5.428 5.428 0 003.353 8.1 5.426 5.426 0 010 10.546 5.427 5.427 0 00-3.356 8.1 5.43 5.43 0 01-7.465 7.46 5.428 5.428 0 00-8.1 3.353 5.426 5.426 0 01-10.546 0 5.428 5.428 0 00-8.1-3.356 5.43 5.43 0 01-7.454-7.466 5.428 5.428 0 00-3.353-8.1 5.426 5.426 0 010-10.546 5.428 5.428 0 003.356-8.1 5.43 5.43 0 017.46-7.454 5.423 5.423 0 008.1-3.353z"></path><circle data-name="icon-setup" cx="9.445" cy="9.445" r="9.445" transform="translate(57.344 57.333)"></circle></g></svg>,
            title: "DevOps",
            description: "Implement DevOps best practices and tools to accelerate innovation and increase organizational agility.",
            link: "/devops"
        },
        {
            logo: <svg role="img" width="55" viewBox="0 0 54.37 54.371" preserveAspectRatio="xMidYMin meet"><g data-name="icon-iot" transform="translate(-39.707 -36.591)" fill="none" stroke="#ebf7ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path data-name="icon-iot1" d="M48.098 47.849l3.7 13.362M69.45 78.87l12.04 3.43"></path><path data-name="icon-iot2" d="M65.894 64.775l16.74-16.737"></path><circle data-name="icon-iot3" cx="4.722" cy="4.722" r="4.722" transform="translate(41.707 38.591)"></circle><circle data-name="icon-iot4" cx="4.722" cy="4.722" r="4.722" transform="translate(82.633 38.591)"></circle><circle data-name="icon-iot5" cx="4.722" cy="4.722" r="4.722" transform="translate(82.633 79.518)"></circle><circle data-name="icon-iot6" cx="14.167" cy="14.167" r="14.167" transform="translate(41.707 60.629)"></circle></g></svg>,
            title: "Internet of Things",
            description: "Manage thousands of smart devices through the cloud using purpose- built IoT solutions.Manage thousands of smart devices through the cloud using purpose- built IoT solutions.",
            link: "/aws/iot"
        },
        {
            logo: <img className='w-[55px]' src="https://www.clearscale.com/images/icons/icon-windows-workloads--white.svg" alt="icon" />,
            title: "GenerativeAI (GenAI)",
            description: "Tap into the transformative power of Learning Language Models (LLMs) on AWS.",
            link: "/aws/GenAI"
        },
        {
            logo: <svg role="img" width="55" viewBox="0 0 54.081 54.154" preserveAspectRatio="xMidYMin meet"><g data-name="icon-managed-services" transform="translate(-37.854 -38.666)" fill="none" stroke="#ebf7ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><circle data-name="icon-managed-services1" cx="11.129" cy="11.129" transform="translate(45.418 40.738)" r="11.129"></circle><path data-name="icon-managed-services2" d="M39.854 90.82v-5.565a11.129 11.129 0 0111.129-11.129h11.13a11.129 11.129 0 0111.129 11.129v5.565"></path><path data-name="icon-managed-services3" d="M76.023 41.1a11.129 11.129 0 010 21.563"></path><path data-name="icon-managed-services4" d="M89.935 90.821v-5.565a11.129 11.129 0 00-8.347-10.712"></path></g></svg>,
            title: "Managed Services",
            description: "Reduce IT costs and improve productivity with 24 / 7 cloud support and monitoring, and managed DevOps operations.",
            link: "/aws/managedServives"
        },
        {
            logo: <img className='w-[55px]' src="https://www.clearscale.com/images/icons/icons-security-services--white.svg" alt="icon" />,
            title: "Security Services",
            description: "Safeguard your cloud infrastructure from cybersecurity threats.",
            link: "/cloud-security"
        },
    ]
    return (
        <div className='sm:px-3 lg:px-0 relative'>
            <div className="lg:flex md:flex  md:min-h-fit lg:min-h-[400px] min-h-[500px] sm:block justify-between items-start mt-5 lg:px-10 sm:px-5">
                <div className="">
                    <h1 className='lg:text-[50px] sm:text-[30px] font-bold'>Cloud Consulting Services</h1>
                    <p>Professional cloud services delivered by experienced AWS experts</p>
                    <br />
                    <NavLink to="/partners/aws/landing2" className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold mt-[200px]' >Plan Your Project</NavLink>
                    
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
                    <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>End-to-End Cloud Services</h1>
                    <p>Mayhem Shield provides a complete range of cloud consulting services to companies across all industries. Our cloud experts have helped hundreds of organizations migrate mission-critical workloads, develop serverless applications, leverage AI/ML, and more, to optimize business performance and increase long-term profitability.</p>
                </div>
            </div>
            <h1 className='text-3xl text-cetner mt-20 mb-10 w-fit mx-auto font-semibold'>Services Most in Demand</h1>
            <div className="flex gap-5 mx-auto w-fit  flex-wrap lg:px-5 sm:px-5">
                {
                    cardContent.map((card, i) => <>
                        <HoverCard c={card} />
                    </>)
                }
            </div>
            <div className="py-10 my-10 text-center lg:px-10 sm:px-5">
                <h1 className='text-2xl text-bold'> Don’t see the service you need listed above?</h1>
                <p className=''>Contact us below to discuss how Mayhem  Shield  can help you innovate on AWS.</p>
            </div>
            <div className="bg-blue-500 text-white flex flex-wrap lg:text-start md:text-start  sm:text-center lg:justify-between md:justify-between sm:justify-center items-center lg:px-[150px] py-20">
                <div className="">
                    <h1 className='text-5xl font-bold'>Ready to Take the Next Step?</h1>
                    <p className='mt-5'>Connect With Our Cloud Experts To Begin Your Cloud Journey</p>
                </div>
                <button className='mt-5 bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold ' >Contact Us</button>
            </div>
        </div>
    );
};

export default AWSHome;
