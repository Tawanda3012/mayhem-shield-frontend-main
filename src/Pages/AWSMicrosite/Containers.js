import React from 'react';
import partner from "../../components/assets/images/aws-partner-badge.png";
import cover from "../../components/assets/images/allPagePhoto.jpeg";

import { NavLink } from 'react-router-dom'; const Containers = () => {
    return (
        <div>
            <div className="lg:flex md:flex  md:min-h-fit lg:min-h-[400px] min-h-[500px] sm:block justify-between items-start mt-5 lg:px-10 sm:px-5">
                <div className="relative">
                    <h1 className='lg:text-[50px] sm:text-[30px] font-bold'>AWS Cloud Containers Services</h1>
                    <p>Upgrade your app development and deployment capabilities by containerizing mission-critical software</p>
                    <br />
                    <NavLink to="/partners/aws/landing2" className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold mt-8' >Plan Your Project</NavLink>
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
                    <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Elevate Your Application Development With Containers</h1>
                    <p>Companies that can deploy, run, and manage containers effectively have a major advantage when it comes to application development. Mayhem Shield equips engineering teams with everything they need to get the most out of container technology and take their app development capabilities to the next level.</p>
                </div>            </div>
            <div className="flex flex-wrap justify-evenly gap-5 my-10">
                <h1 className='lg:text-[30px] w-full text-center my-10 mt-20 sm:text-[30px] font-semibold mb-5'>Achieve More With Mayhem Shield and AWS</h1>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-running-man--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Faster Time to Market</h1>
                    <p>Bring new features, updates, and products to market quickly, always delivering a consistent experience for customers across all operating systems and environments.</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-diagr--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Simpler Operations</h1>
                    <p>Deploy and manage containerized applications easily through efficient CI/CD pipelines, IaC, serverless architecture, and managed services.</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-diagr--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Seamless Integration</h1>
                    <p>Integrate and optimize your containers seamlessly with powerful AWS services that simplify the process of configuring governance, compliance, access management, security, and more.</p>
                </div>
            </div>
            <div className="w-fit mx-auto">
                <NavLink to="/partners/aws/landing2" className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold my-8' >Chat With Cloud Specialist</NavLink>
            </div>
            <div className="bg-gray-50 lg:px-10 sm:px-0 py-10 text-center ">
                <div className="lg:max-w-[1000px] md:max-w-[90%] mx-auto">
                    <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5 max-w-[1000px]'>Why Choose Mayhem Shield as Your Cloud Containers Consulting  Partner?</h1>
                </div>
                <div className="text-start flex flex-wrap lg:justify-between justify-evenly items-center mt-20">
                    <span className='lg:w-1/2 md:w-2/3 sm:w-full'>
                        <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Deep AWS Container Experience</h1>
                        <p className='text-justify'>Mayhem  Shield  has extensive experience with both container technology and container-related AWS services. For years, our expert architects and engineers have helped companies implement containers with best-of-breed AWS solutions, like Amazon Elastic Container Service (ECS), Amazon Elastic Container Registry (ECR), Amazon Elastic Kubernetes Services (EKS), and AWS Fargate.</p>
                    </span>
                    <img src="https://www.clearscale.com/images/pictures/advantages-section/container-1_1x.webp" alt="" />
                </div>
                <div className="text-start flex flex-wrap lg:justify-between justify-evenly items-center mt-5">
                    <img src="https://www.clearscale.com/images/pictures/advantages-section/container-2_1x.webp" alt="" />
                    <span className='lg:w-1/2 md:w-2/3 sm:w-full'>
                        <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Technical Expertise of Related Technologies</h1>
                        <p className='text-justify'>As an AWS Premier Consulting Partner with the DevOps competency, we can also help you adopt the latest and greatest DevOps practices to get even more value out of containers and microservices infrastructure.</p>
                    </span>
                </div>
                <div className="w-fit mx-auto">
                    <NavLink to="/partners/aws/landing2" className=' bg-[#0000FFdd] py-3 px-8 mb-5 rounded text-white font-semibold my-8' >Schedule Meeting</NavLink>
                </div>
                <div className="bg-blue-500 text-white  lg:px-[50px] p-5 py-20 mt-10">
                    <div className="">
                        <h1 className='text-4xl w-full text-center font-semibold'>Common Containers Use Cases</h1>                        <div className=" flex flex-wrap lg:justify-between text-left justify-evenly">
                            <div className='lg:w-[390px] w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>Application Migration</h1>
                                <p>Containerize mission-critical applications to simplify the process of migrating to the cloud without having to make significant code changes.</p>
                                <NavLink to='/' className='underline mt-5'>Read more</NavLink>
                            </div>
                            <div className='lg:w-[350px] w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>Operations for Containers</h1>
                                <p>Choose between multiple technologies (AWS ECS, AWS EKS, or Fargate) to run containerized apps. Standardize on a single set of tooling for monitoring and logging, with CI/CD automation to accelerate deployment cycles for containerized apps.</p>
                                <NavLink to='/' className='underline mt-5'>Read more</NavLink>
                            </div>
                            <div className='lg:w-[350px] w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>AI/ML</h1>
                                <p>Train and scale machine learning models rapidly by using containers to distribute workloads to various compute resources.</p>
                                <NavLink to='/aws/ml' className='underline mt-5'>Read more</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3 md:w-full text-left sm:w-full mx-auto mt-20">
                    <h1 className='w-full text-center text-4xl  font-semibold my-10'>Frequently Asked Questions</h1>
                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What defines a modern software container ?</div>
                        <div className='collapse-content'>
                            <p>            - A modern software container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What are the current advantages of utilizing containers ?</div>
                        <div className='collapse-content'>
                            <p>            - The primary advantages include: consistent operation across different environments, more efficient use of system resources compared to virtual machines, faster startup times, and scalability.They facilitate continuous integration / continuous delivery(CI / CD) practices, enabling DevOps and agile methodologies.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>Which container management and orchestration services are provided by AWS as of now ?</div>
                        <div className='collapse-content'>
                            <p>            - AWS provides services like Amazon Elastic Container Service(ECS), Amazon Elastic Kubernetes Service(EKS), and AWS Fargate for container management and orchestration.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>How has container orchestration evolved recently ?</div>
                        <div className='collapse-content'>
                            <p>            - Container orchestration has evolved to handle complex deployment strategies, automated rollbacks, advanced scheduling, self - healing, and can manage containers at massive scales.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>Can you explain the latest features or updates in Kubernetes ?</div>
                        <div className='collapse-content'>
                            <p>            - Kubernetes regularly updates to enhance orchestration, security, scalability, and networking.Features often include improvements in workload management, service mesh integration, and better resource management.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What are the new functionalities introduced in Docker's latest versions?</div>
                        <div className='collapse-content'>
                            <p>            - Docker's latest versions typically focus on improving security, adding new networking features, enhancing the developer experience with more efficient image building, and optimizing storage.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>How is the relationship between containers and DevOps practices developing ?</div>
                        <div className='collapse-content'>
                            <p>            - Containers have become integral to DevOps by enabling more consistent and reliable deployments across different environments, enhancing microservices architectures, and facilitating the automation of the pipeline from development to production.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-500  text-white flex flex-wrap lg:text-start md:text-start  sm:text-center lg:justify-between md:justify-between sm:justify-center items-center lg:px-[150px] lg:py-20 py-10 rounded  border-0">
                <div className="">
                    <h1 className='text-5xl font-semibold'>Ready to Take the Next Step?</h1>
                    <p className='mt-5'>Connect With Our Cloud Experts To Begin Your Cloud Journey</p>
                </div>
                <NavLink to="/partners/aws/landing2" className='mt-5 bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold ' >Contact Us</NavLink>
            </div>
        </div>
    );
}; export default Containers;