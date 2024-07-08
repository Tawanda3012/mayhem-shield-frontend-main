import React from 'react';
import partner from "../../components/assets/images/aws-partner-badge.png";
import cover from "../../components/assets/images/allPagePhoto.jpeg";
import { NavLink } from 'react-router-dom';

const MachineLearning = () => {
    return (
        <div className='sm:px-3 lg:px-0 relative'>
            <div className="lg:flex md:flex  md:min-h-fit lg:min-h-[400px] min-h-[500px] sm:block justify-between items-start mt-5 lg:px-10 sm:px-5">
                <div className="relative">
                    <h1 className='lg:text-[50px] sm:text-[30px] font-bold'>AWS Machine Learning Consulting Services</h1>
                    <p>Deploy AI/ML at scale to automate analytics, enhance customer experiences, forecast outcomes, and identify patterns</p>
                    <br />
                    <NavLink to="https://mayhemshield.zohobookings.com/#/customer/4578999000000041016" className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold mt-8' >Plan Your Project</NavLink>
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
                    <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Elevate Your Business with Machine Learning</h1>
                    <p>When executed well, artificial intelligence (AI) and machine learning (ML) enable businesses to transform products, services, and processes by automating much of what engineering teams do manually. Mayhem Shield can help you realize the full potential of ML across your business using powerful, purpose-built solutions from Amazon Web Services (AWS).</p>
                </div>

            </div>
            <div className="flex flex-wrap justify-evenly gap-5 my-10">
                <h1 className='lg:text-[30px] w-full text-center my-10 mt-20 sm:text-[30px] font-semibold mb-5'>Achieve More With Mayhem Shield and AWS</h1>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-streamline--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Streamline Operations</h1>
                    <p>Identify and eliminate redundant processes by delegating manual tasks to intelligent ML programs.</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-lamp--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Solve Complex Challenges</h1>
                    <p>Forecast trends, optimize pricing, and proactively mitigate risk by relying on ML algorithms designed to accelerate innovation.</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-delivery--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Deliver Better Services</h1>
                    <p>Process massive volumes of customer data to determine how you should invest in product development and improve the customer experience.</p>
                </div>
            </div>
            <div className="w-fit mx-auto">
                <NavLink to="/partners/aws/landing2" className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold my-8' >Plan Your Project</NavLink>
            </div>


            <div className="bg-gray-50 lg:px-10 sm:px-0 py-10 text-center ">
                <div className="lg:max-w-[1000px] md:max-w-[90%] mx-auto">
                    <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5 max-w-[1000px]'>Why Choose Mayhem Shield as Your Machine Learning Consulting Partner?</h1>
                </div>
                <div className="text-start flex flex-wrap lg:justify-between justify-evenly items-center mt-20">
                    <span className='lg:w-1/2 md:w-2/3 sm:w-full'>
                        <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Proven AI/ML Success</h1>
                        <p className='text-justify'>Mayhem Shield earned the AWS Machine Learning Competency, validating our team’s ability to bring AI/ML applications to life for our clients. We have deep experience working with customers in diverse industries to build intelligent, data-driven ML solutions that improve over time and improve bottom-line profitability.</p>
                    </span>
                    <img src="https://www.clearscale.com/images/pictures/advantages-section/machine-learning-1_1x.webp" alt="" />
                </div>
                <div className="text-start flex flex-wrap lg:justify-between justify-evenly items-center mt-5">
                    <img src="https://www.clearscale.com/images/pictures/advantages-section/machine-learning-2_1x.webp" alt="" />
                    <span className='lg:w-1/2 md:w-2/3 sm:w-full'>
                        <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Mastery Over AWS AI/ML Solutions</h1>
                        <p className='text-justify'>Our ML experts are well-versed in AWS’s most powerful AI/ML services, including Amazon SageMaker, Amazon Forecast, Amazon Translate, Amazon Comprehend, Amazon Personalize, and more. By implementing these services, we enable companies to transform their businesses for the digital age in the most innovative manner possible. Our GenAI AppLink creates a bridge that seamlessly interlinks GenAI into any of your applications.</p>
                    </span>
                </div>
                <div className="w-fit mx-auto">
                    <NavLink to="/partners/aws/landing2" className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold mt-8' >Get the MLOps Starter Kit</NavLink>
                </div>
            </div>
            <div className="bg-blue-500 text-white  lg:px-[50px] p-5 py-20">
                <div className="">
                    <h1 className='text-3xl w-full text-center font-semibold'>Common Machine Learning Use Cases</h1>

                    <div className=" flex flex-wrap lg:justify-between justify-evenly">
                        <div className='lg:w-[400px] text-justify w-full '>
                            <h1 className='text-4xl my-8 w-full  font-semibold'>Recommendation Engines</h1>
                            <p>Study end-user behaviors en masse and train up recommendation engines that can deliver tailored results to both new and returning customers.</p>
                            <NavLink to='/' className='underline mt-5'>Read more</NavLink>
                        </div>
                        <div className='lg:w-[400px] text-justify w-full '>
                            <h1 className='text-4xl my-8 w-full  font-semibold'>MLOps</h1>
                            <p>Automate the lifecycle of ML algorithms in production — from initial model training to retraining against new data. Identify duplicate data to ensure only one copy is stored while the rest is marked as duplicate for further analysis.</p>
                            <NavLink to='/' className='underline mt-5'>Read more</NavLink>
                        </div>
                        <div className='lg:w-[400px] text-justify w-full '>
                            <h1 className='text-4xl my-8 w-full  font-semibold'>Forecasting Models</h1>
                            <p>Create robust forecasting models based on past data that enable you to plan more effectively for future demand.</p>
                            <NavLink to='/' className='underline mt-5'>Read more</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/*  qna */}
            <div className="lg:w-2/3 md:w-full sm:w-full mx-auto mt-20">
                <h1 className='w-full text-center text-4xl  font-semibold my-10'>Frequently Asked Questions</h1>
                <div tabIndex={0} className="collapse collapse-plus ">
                    <div className="collapse-title text-xl font-medium">
                        What is machine learning?
                    </div>
                    <div className="collapse-content">
                        <p>Machine learning (ML) refers to the process of developing computer programs that are capable of learning and improving towards a specific goal without explicit input from humans. Machine learning has grown increasingly popular in recent years due to advances in cloud computing technologies that make it easier to develop, train, and maintain ML algorithms.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus ">
                    <div className="collapse-title text-xl font-medium">
                        Why do many machine learning programs come up short today?
                    </div>
                    <div className="collapse-content">
                        <p>Despite machine learning’s popularity, the technology is still giving many organizations trouble. A big reason is machine learning algorithms are subject to different types of risk: developer biases, data biases, data drift, and others. When data teams and developers don’t have the insight or expertise needed to keep ML programs on track, the technology’s value to the enterprise diminishes. Plus, optimizing ML programs takes significant time and effort.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus ">
                    <div className="collapse-title text-xl font-medium">
                        What are the benefits of implementing machine learning on the cloud?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Without cloud-based tools and services, it’s hard to maximize ML ROI. That’s why data teams often launch machine learning applications on the cloud where they can leverage managed services and increase the chances of generating positive results over the long term. Cloud providers like AWS anticipate the challenges ML teams face and offer solutions that both automate and simplify ML algorithm management.                            Despite machine learning’s popularity, the technology is still giving many organizations trouble. A big reason is machine learning algorithms are subject to different types of risk: developer biases, data biases, data drift, and others. When data teams and developers don’t have the insight or expertise needed to keep ML programs on track, the technology’s value to the enterprise diminishes. Plus, optimizing ML programs takes significant time and effort.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus ">
                    <div className="collapse-title text-xl font-medium">
                        What use cases are possible with machine learning?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Machine learning makes many challenging computational problems easier to solve. Some of the more popular use cases for machine learning today include building recommendation engines, chatbots, and forecasting models. Machine learning is also useful for identifying security threats, discovering unmet customer needs, and identifying patterns in large datasets that would otherwise go unnoticed.                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus ">
                    <div className="collapse-title text-xl font-medium">
                        What machine learning services does AWS offer?
                    </div>
                    <div className="collapse-content">
                        <p>
                            MLOps refers to the set of technologies and activities that aim to produce machine learning success. In practice, MLOps brings together data engineering, machine learning, and DevOps resources to optimize data management and application development. More and more organizations are creating dedicated MLOps teams, knowing how crucial they are to building effective enterprise ML capabilities.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus ">
                    <div className="collapse-title text-xl font-medium">
                        How do organizations succeed with MLOps?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Succeeding with machine learning and MLOps can be difficult for organizations with limited experience. That’s why it often makes sense to work with a third-party cloud machine learning expert, like Mayhem Shield. Mayhem Shield is an AWS Premier Tier Services partner with the Machine Learning competency. Our AWS machine learning consulting services provide sophisticated machine learning ecosystems and processes that set organizations up for long-term ML success.                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-blue-500 mt-20 text-white flex flex-wrap lg:text-start md:text-start  sm:text-center lg:justify-between md:justify-between sm:justify-center items-center lg:px-[150px] lg:py-20 py-10 rounded  border-0">
                <div className="">
                    <h1 className='text-5xl font-semibold'>Ready to Take the Next Step?</h1>
                    <p className='mt-5'>Connect With Our Cloud Experts To Begin Your Cloud Journey</p>
                </div>
                <button className='mt-5 bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold ' >Contact Us</button>
            </div>
        </div >
    );
};

export default MachineLearning;
