import React from 'react';
import { NavLink } from 'react-router-dom';
import partner from "../../components/assets/images/aws-partner-badge.png";
import cover from "../../components/assets/images/allPagePhoto.jpeg";

const ApplicationModernization = () => {
    return (
        <div>
            <div className="lg:flex md:flex  md:min-h-fit lg:min-h-[400px] min-h-[500px] sm:block justify-between items-start mt-5 lg:px-10 sm:px-5">
                <div className="relative">
                    <h1 className='lg:text-[50px] sm:text-[30px] font-bold'>AWS Application Modernization  Services</h1>
                    <p>Transform legacy applications for the cloud by taking advantage of containers, serverless computing, microservices, and other cloud-native technologies</p>
                    <button className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold mt-8' >Plan Your Project</button>
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
                    <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Upgrade Your Mission-critical Applications</h1>
                    <p>To meet the needs of modern consumers, companies have to deploy resilient, yet flexible cloud-native applications that can evolve over time. Mayhey Shield makes this easy by partnering closely with engineering teams to build and modernize truly disruptive applications using AWS - the world's most comprehensive and broadly adopted cloud platform.</p>
                </div>            </div>
            <div className="flex flex-wrap justify-evenly gap-5 my-10">
                <h1 className='lg:text-[30px] w-full text-center my-10 mt-20 sm:text-[30px] font-semibold mb-5'>Achieve More With Mayhem Shield and AWS</h1>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-target--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Innovate at Will</h1>
                    <p>Incorporate personalized recommendation engines, Internet of Things (IoT) data feeds, predictive analytics, and more by developing applications with cutting edge AWS cloud services</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-arrows-to-top-2--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Ensure Scalability</h1>
                    <p>Automate the release pipeline with apps that can scale easily with demand, only incurring costs for compute resources you use</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-performance--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Maximize Performance</h1>
                    <p>Improve the resiliency, availability, and performance of your mission-critical applications by leveraging powerful managed services and purpose-built cloud tools</p>
                </div>
            </div>
            <div className="w-fit mx-auto">
                <button className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold my-8' >Get Started With A Modernization Workshop</button>
            </div>
            <div className="bg-gray-50 lg:px-10 sm:px-0 py-10 text-center ">
                <div className="lg:max-w-[1000px] md:max-w-[90%] mx-auto">
                    <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5 max-w-[1000px]'>Why Choose Mayhem Shield as Your Application Modernization Consulting  Partner?</h1>
                </div>
                <div className="text-start flex flex-wrap lg:justify-between justify-evenly items-center mt-20">
                    <span className='lg:w-1/2 md:w-2/3 sm:w-full'>
                        <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>1000+ Cloud Projects Completed</h1>
                        <p className='text-justify'>Mayhey Shield has completed more than 1000 cloud projects and has earned 11 competencies from AWS, highlighting our ability to generate tangible results for clients on the cloud. We leverage our experience and knowledge of AWS to develop modern, high-performing, scalable, and resilient applications that create value and keep customers happy.</p>
                    </span>
                    <img src="https://www.clearscale.com/images/pictures/advantages-section/app-dev-1_1x.webp" alt="" />
                </div>
                <div className="text-start flex flex-wrap lg:justify-between justify-evenly items-center mt-5">
                    <img src="https://www.clearscale.com/images/pictures/advantages-section/app-dev-2_1x.webp" alt="" />
                    <span className='lg:w-1/2 md:w-2/3 sm:w-full'>
                        <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Unmatched Technical Expertise</h1>
                        <p className='text-justify'>Our in-house experts have experience building cloud-native applications using today’s most common platforms and languages. We’ll bring your app ideas to life using Java, .NET, Node.js and other popular languages, as well as use third-party services that simplify the process of maintaining and managing complex cloud applications.</p>
                    </span>
                </div>
                <div className="w-fit mx-auto">
                    <button className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold my-8' >Schedule Meeting</button>
                </div>
                <div className="bg-blue-500 text-white  lg:px-[50px] p-5 py-20">
                    <div className="">
                        <h1 className='text-3xl w-full text-center font-semibold'>Common Application Modernization Use Cases</h1>
                        <div className=" flex flex-wrap lg:justify-between text-left justify-evenly">
                            <div className='lg:w-[380px] text-justify` w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>Microservices</h1>
                                <p>Break monolithic applications up into loosely coupled microservices that are easier to update and manager as your goals change.</p>
                                <NavLink to='/' className='underline mt-5'>Read more</NavLink>
                            </div>
                            <div className='lg:w-[380px] text-justify` w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>Serverless</h1>
                                <p>Offload burdensome IT infrastructure management while building new applications designed specifically to thrive on the cloud.</p>
                                <NavLink to='/' className='underline mt-5'>Read more</NavLink>
                            </div>
                            <div className='lg:w-[380px] text-justify` w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>Purpose-Built Databases</h1>
                                <p>Create purpose-built databases, designed around your business requirements, that allow you to manage complex applications easily.</p>
                                <NavLink to='/aws/ml' className='underline mt-5'>Read more</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3 md:w-full text-left sm:w-full mx-auto mt-20">
                    <h1 className='w-full text-center text-4xl  font-semibold my-10'>Frequently Asked Questions</h1>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What are the benefits of modernizing legacy applications?</div>
                        <div div className='collapse-content'>
                            <p>There are many benefits to modernizing legacy applications. Companies often modernize to increase overall performance and IT efficiency. Others need more app development flexibility. In some cases, application modernization is about increasing resilience. The common thread is that modernizing applications aims to bring critical products and services in line with ever-evolving market expectations.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>Why should I modernize my legacy applications on AWS?</div>
                        <div div className='collapse-content'>
                            <p>Organizations that modernize legacy applications have to make the most of the opportunity. AWS provides everything leaders need to ensure a successful modernization project, whether it includes migrating on-premise infrastructure to the cloud, refactoring existing applications, or implementing new technologies. AWS understands what modern organizations need and continues to make it easier to pursue IT transformation on the cloud.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What application modernization tools does AWS offer?</div>
                        <div div className='collapse-content'>
                            <p>AWS recommends that organizations consider four high-level modernization pathways: moving to managed containers, adopting serverless technology, implementing purpose-built databases, and/or leveraging DevOps services. Across each of these areas, AWS offers useful tools, like Amazon Elastic Container Service (ECS), AWS Lambda, Amazon Aurora, and AWS CodePipeline. The key is knowing what to implement and how.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What AWS application modernization services does Mayhey Shield offer?</div>
                        <div div className='collapse-content'>
                            <p>Mayhey Shield is an AWS Premier Tier Services partner with 11 AWS competencies. We’ve helped clients across numerous industries modernize legacy applications on AWS to elevate performance and lay the foundation for future growth. Our engineers know how to implement the latest cloud technologies available, as well as how to deliver tailored AWS application modernization services to meet our clients’ goals.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What are some common application modernization use cases?</div>
                        <div div className='collapse-content'>
                            <p>Many organizations choose to modernize legacy applications to gain access to specific use cases. For instance, microservices, serverless infrastructure, and purpose-built databases are popular reasons to modernize. Leaders also modernize so that they can incorporate big data analytics, IoT networks, AI/ML capabilities, and more into their offerings. The possibilities are endless when organizations modernize on AWS.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-500  text-white flex flex-wrap lg:text-start md:text-start  sm:text-center lg:justify-between md:justify-between sm:justify-center items-center lg:px-[150px] lg:py-20 py-10 rounded  border-0">
                <div className="">
                    <h1 className='text-5xl font-semibold'>Ready to Take the Next Step?</h1>
                    <p className='mt-5'>Connect With Our Cloud Experts To Begin Your Cloud Journey</p>
                </div>
                <button className='mt-5 bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold ' >Contact Us</button>
            </div>
        </div>
    );
};

export default ApplicationModernization;