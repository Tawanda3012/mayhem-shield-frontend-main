import React from 'react';
import { NavLink } from 'react-router-dom';
import partner from "../../components/assets/images/aws-partner-badge.png";
import cover from "../../components/assets/images/allPagePhoto.jpeg";

const GenAI = () => {
    return (
        <div>
            <div className="lg:flex md:flex  md:min-h-fit lg:min-h-[400px] min-h-[500px] sm:block justify-between items-start mt-5 lg:px-10 sm:px-5">
                <div className="relative">
                    <h1 className='lg:text-[50px] sm:text-[30px] font-bold'>GenerativeAI on AWS</h1>
                    <p>Tap into the transformative power of Large Language Models (LLMs) on AWS</p>
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
                    <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>GenAI Zero Mayhem™</h1>
                    <p>Taking advantage of GenerativeAI (GenAI) successfully is difficult, especially when trying to incorporate the technology into existing cloud environments. Many organizations struggle to create value with LLMs given the technical complexities involved. This is where Mayhem Shield comes in.
                        <br />
                        <br />
                        Mayhem Shield, an AWS Premier Tier Services Partner, offers GenAI Zero Mayhem™ – a service designed to effortlessly weave GenAI workflows into existing AWS environments. GenAI Zero Mayhem™ empowers companies to create a bridge that seamlessly interlinks GenAI into any application, setting the stage for long-term value creation with LLMs.</p>
                </div>            </div>
            <div className="flex flex-wrap justify-evenly gap-5 my-10">
                <h1 className='lg:text-[30px] w-full text-center my-10 mt-20 sm:text-[30px] font-semibold mb-5'>Our GenAI Zero Mayhem™ Services</h1>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-money--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Install Required Libraries</h1>
                    <p>Deliver better experiences to customers by automating application features and interactions between multiple smart devices.</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-hand-3--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Set Up Environment</h1>
                    <p>Define the right compute resources, logic, and assets for your LLM use cases.</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-robot-2--white.svg" alt='' />
                    </div>

                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Create Sample Requests</h1>
                    <p>Test different LLM APIs with sample requests to find the right endpoint for your needs.</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-delivery--white.svg" alt='' />
                    </div>

                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Handle Sample Responses</h1>
                    <p>Manage sample API responses effectively in your application and broader AWS architecture.</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-checklist--white.svg" alt='' />
                    </div>

                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Document Your Technique</h1>
                    <p>Maintain clear documentation on how to use LLM insights and capabilities across your AWS architecture.</p>
                </div>
            </div>
            <div className="w-fit mx-auto">
                <NavLink to="/partners/aws/landing2" className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold my-8' >Get Started With GenAI Zero Mayhem</NavLink>
            </div>
            <div className="bg-gray-50 lg:px-10 sm:px-0 py-10 text-center ">
                <div className="lg:max-w-[1000px] md:max-w-[90%] mx-auto">
                    <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5 max-w-[1000px]'>Why Choose GenAI Zero Mayhem™?</h1>
                </div>
                <div className="text-start flex flex-wrap lg:justify-between justify-evenly items-center mt-20">
                    <span className='lg:w-1/2 md:w-2/3 sm:w-full'>
                        <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Created by AI/Ml Experts</h1>
                        <p className='text-justify'>Mayhem Shield earned the Machine Learning Competency from AWS, demonstrating our deep experience and expertise in building or integrating ML solutions on AWS. We’re experts at helping our customers take advantage of intelligent solutions, from creating, automating, and managing end-to-end ML workflows to modernizing applications with machine intelligence. With a team that holds over 100 AWS technical certifications, we are well-versed in the most advanced AWS ML and AI services, ensuring that you're in expert hands when you choose GenAI Zero Mayhem™.</p>
                    </span>
                    <img src="https://www.clearscale.com/images/pictures/advantages-section/generativeai-service-1_1x.webp" alt="" />
                </div>
                <div className="text-start flex flex-wrap lg:justify-between justify-evenly items-center mt-5">
                    <img src="https://www.clearscale.com/images/pictures/advantages-section/generativeai-service-2_1x.webp" alt="" />
                    <span className='lg:w-1/2 md:w-2/3 sm:w-full'>
                        <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Competitive Advantage Through AI Integration</h1>
                        <p className='text-justify'>GenAI Zero Mayhem™ is more than just a tool; it's a strategic asset that adds significant business value by seamlessly integrating advanced Large Language Models (LLMs) into existing AWS environments. By taking care of the technical intricacies, from setting up the AWS infrastructure to providing computational notebooks and essential software libraries, GenAI Zero Mayhem™ enables businesses to focus on leveraging the transformative power of AI. With expert guidance in API selection and comprehensive documentation, it demystifies the complexities of AI adoption. The result is a streamlined, efficient transition that empowers businesses to harness the full potential of LLMs, driving innovation and competitive advantage.</p>
                    </span>
                </div>
                <div className="w-fit mx-auto">
                    <br />
                    <NavLink to="/partners/aws/landing2" className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold my-8' >Schedule Meeting</NavLink>

                </div>
                <div className="bg-blue-500 text-white  lg:px-[50px] p-5 py-20 mt-10">
                    <div className="">
                        <h1 className='text-4xl w-full text-center font-semibold'>Leverage GenAI With AWS and Mayhem Shield</h1>
                        <div className=" flex flex-wrap lg:justify-between text-left justify-evenly">
                            <div className='lg:w-[390px] w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>FineTuned for GenAI</h1>
                                <p>Let Mayhem Shield take the lead on ensuring that your AWS environments are perfectly tuned for your unique GenAI workflow.</p>
                                <NavLink to='/' className='underline mt-5'>Read more</NavLink>
                            </div>
                            <div className='lg:w-[350px] w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>Fast Implementation</h1>
                                <p>Hit the ground running with software packages, notebooks, and APIs that are primed for AI-related projects.</p>
                                <NavLink to='/' className='underline mt-5'>Read more</NavLink>
                            </div>
                            <div className='lg:w-[350px] w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>Simplified Execution</h1>
                                <p>Harness the sheer power of LLMs without taking on the technical challenges and intricacies of building your own GenAI workflow.</p>
                                <NavLink to='/aws/ml' className='underline mt-5'>Read more</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3 md:w-full text-left sm:w-full mx-auto mt-20">
                    <h1 className='w-full text-center text-4xl  font-semibold my-10'>Frequently Asked Questions</h1>

                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What is GenAI Zero Mayhem™ and who offers it?</div>
                        <div className='collapse-content'>
                            <p>GenAI Zero Mayhem™ is a specialized service offered by ClearScale, an AWS Premier Consulting Partner. The service is designed to integrate the GenAI workflow into an existing AWS environment, allowing it to work seamlessly with any application of your choice.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What are the core features of GenAI Zero Mayhem™?</div>
                        <div className='collapse-content'>
                            <p>GenAI Zero Mayhem™ leverages the capabilities of Language Learning Models (LLMs) to simplify complex AI-related tasks. It provides a comprehensive suite of services, including setting up AWS infrastructure, providing computational notebooks, and offering essential software libraries, all optimized for AI-related activities.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>How does GenAI Zero Mayhem™ help with API selection?</div>
                        <div className='collapse-content'>
                            <p>Choosing the right API from numerous options can be challenging. Mayhem Shield assists users in identifying the Language Learning Model (LLM) API that best suits their specific needs. The company also generates and manages sample requests to give users a hands-on experience with the GenAI workflow.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What kind of documentation is provided with GenAI Zero Mayhem™?</div>
                        <div className='collapse-content'>
                            <p>Mayhem Shield provides comprehensive documentation that outlines the entire setup process for GenAI Zero Mayhem™. This documentation also offers valuable insights into optimal scaling techniques, ensuring that you can make the most out of your AI initiatives.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>How does GenAI Zero Mayhem™ benefit businesses?</div>
                        <div className='collapse-content'>
                            <p>GenAI Zero Mayhem™ serves as a bridge between a business's application and the expansive world of Language Learning Models (LLMs). It ensures a smooth and efficient transition, allowing businesses to focus on harnessing the power of LLMs without getting bogged down by technical complexities.</p>
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
};

export default GenAI;