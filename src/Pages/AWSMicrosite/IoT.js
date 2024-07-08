import React from 'react';
import { NavLink } from 'react-router-dom';
import partner from "../../components/assets/images/aws-partner-badge.png";
import cover from "../../components/assets/images/allPagePhoto.jpeg";

const IoT = () => {
    return (
        <div>
            <div className="lg:flex md:flex  md:min-h-fit lg:min-h-[400px] min-h-[500px] sm:block justify-between items-start mt-5 lg:px-10 sm:px-5">
                <div className="relative">
                    <h1 className='lg:text-[50px] sm:text-[30px] font-bold'>AWS IoT Experts</h1>
                    <p>Build reliable IoT networks that gather data at scale and teach you more about customers</p>
                    <br />
                    <NavLink to="/partners/aws/landing2" className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold mt-8' >Plan Your Project</NavLink >
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
                    <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Manage Billions of IoT Devices with AWS</h1>
                    <p>The Internet of Things (IoT) is transforming industries and businesses all over the world. Mayhem Shield helps companies take full advantage of IoT to launch disruptive business models, products, and services that add value and fulfill unmet needs.</p>
                </div>            </div>
            <div className="flex flex-wrap justify-evenly gap-5 my-10">
                <h1 className='lg:text-[30px] w-full text-center my-10 mt-20 sm:text-[30px] font-semibold mb-5'>Achieve More With Mayhem Shield and AWS</h1>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-money--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Increase Revenue</h1>
                    <p>Develop new sources of revenue based on real-time data streams and smart networks spread all across the globe.</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-visibility--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Improve Visibility</h1>
                    <p>Gather, store, and analyze high-quality data from millions of devices to assess how consumers engage with your products, as well as identify where you overspend on business operations.</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-users--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Enhance the User Experience</h1>
                    <p>Deliver better experiences to customers by automating application features and interactions between multiple smart devices.</p>
                </div>
            </div>
            <div className="w-fit mx-auto">
                <NavLink to="/partners/aws/landing2" className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold my-8' >Get Started With An AWS IoT Jumpstart</NavLink>
            </div>
            <div className="bg-gray-50 lg:px-10 sm:px-0 py-10 text-center ">
                <div className="lg:max-w-[1000px] md:max-w-[90%] mx-auto">
                    <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5 max-w-[1000px]'>Why Choose Mayhem Shield as Your IoT Consulting  Partner?</h1>
                </div>
                <div className="text-start flex flex-wrap lg:justify-between justify-evenly items-center mt-20">
                    <span className='lg:w-1/2 md:w-2/3 sm:w-full'>
                        <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>IoT Expertise Validated By AWS</h1>
                        <p className='text-justify'>Mayhem Shield earned the IoT Competency from AWS based on a proven track record of success with IoT services. Our team has empowered numerous businesses to launch and sustain successful IoT-based business models that create long-term value.</p>
                    </span>
                    <img src="https://www.clearscale.com/images/pictures/advantages-section/iot-1_1x.webp" alt="" />
                </div>
                <div className="text-start flex flex-wrap lg:justify-between justify-evenly items-center mt-5">
                    <img src="https://www.clearscale.com/images/pictures/advantages-section/iot-2_1x.webp" alt="" />
                    <span className='lg:w-1/2 md:w-2/3 sm:w-full'>
                        <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Your Strategic Partner for IoT Disruption</h1>
                        <p className='text-justify'>We’ve also earned the Data & Analytics and Machine Learning Competencies from AWS, which means we can not only help you develop disruptive IoT applications, but also build sophisticated analytics around your data streams. These three competencies in combination are what enable Mayhem Shield to serve as a true thought leader for your long-term IoT strategic planning.

                            We’ve established expertise with leading AWS IoT technologies including AWS IoT Core, AWS IoT Analytics, AWS IoT Events, AWS IoT Device Management, and more.</p>
                    </span>
                </div>
                <div className="w-fit mx-auto">
                    <NavLink to="/partners/aws/landing2" className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold my-8' >Schedule Meeting</NavLink>
                </div>
                <div className="bg-blue-500 text-white  lg:px-[50px] p-5 py-20">
                    <div className="">
                        <h1 className='text-4xl w-full text-center font-semibold'>Common IoT Use Cases</h1>
                        <div className=" flex flex-wrap lg:justify-between text-left justify-evenly">
                            <div className='lg:w-[390px] w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>Fleet Management</h1>
                                <p>Continuously monitor and audit your IoT configurations to proactively respond to issues that arise and secure your fleet of IoT devices.</p>
                                <NavLink to='/' className='underline mt-5'>Read more</NavLink>
                            </div>
                            <div className='lg:w-[350px] w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>Predictive Maintenance</h1>
                                <p>Gather information directly from IoT-enabled equipment to evaluate asset integrity, take preventative action, and avoid costly downtime or failures.</p>
                                <NavLink to='/' className='underline mt-5'>Read more</NavLink>
                            </div>
                            <div className='lg:w-[350px] w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>Advanced Analytics</h1>
                                <p>Feed machine learning algorithms with IoT data to identify trends and patterns within streaming data that can lead to new product or business opportunities.</p>
                                <NavLink to='/aws/ml' className='underline mt-5'>Read more</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-2/3 md:w-full text-left sm:w-full mx-auto mt-20">
                    <h1 className='w-full text-center text-4xl  font-semibold my-10'>Frequently Asked Questions</h1>

                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What is the IoT?</div>
                        <div className='collapse-content'>
                            <p>The Internet of Things (IoT) refers to the massive network of physical devices deployed in the world today that have sensing, computing, and data-gathering capabilities. These devices collect information through embedded sensors and share this data over the web for use in complex applications. Over the next several years, billions more IoT devices will come online, allowing organizations to extract even richer insights about customer engagement, environmental conditions, and more.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What are the benefits of building IoT applications on AWS?</div>
                        <div className='collapse-content'>
                            <p>Developing, launching, and maintaining IoT applications at scale is a complex endeavor. That’s why cloud providers like AWS have built IoT-specific services that make it easy to configure and manage IoT devices. AWS also simplifies the process of ingesting IoT data and analyzing it at scale, opening up the door for next-gen business models and applications.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div itemprop="name" class="faq__question-title active">What IoT services does AWS offer?</div>
                        <div className='collapse-content' >
                            <p>AWS offers several types of IoT services: device software, connectivity and control services, and analytics services. AWS’ device software includes solutions for turning devices on at the edge. Control services help keep devices secure and organized from the cloud. Analytics services accelerate the data gathering and value extraction process. Across these categories, some of the more commonly used AWS IoT services include AWS IoT Core, AWS IoT Greengrass, and AWS IoT Analytics.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What use cases are possible with cloud-based IoT applications?</div>
                        <div className='collapse-content'>
                            <p>Having real-time insight across large geographic footprints enables many exciting use cases. Many organizations use IoT networks for predictive maintenance, logistics tracking, and last-mile transportation services. The IoT also enables smart cities and buildings, automated consumer products, and faster training for AI/ML programs. The possibilities are endless, so long as leaders invest in the right IoT management infrastructure.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What industries are being transformed by the IoT?</div>
                        <div className='collapse-content'>
                            <p>The IoT is already transforming countless industries. It’s ushering in Industry 4.0 in the manufacturing sector, supporting new business models in the energy industry, and enhancing supply chain management, to name a few examples. As big data and AI/ML capabilities improve, IoT’s potential will also increase, which is why building IoT capabilities is critical today.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>How can Mayhem Shield help me achieve my IoT goals?</div>
                        <div className='collapse-content'>
                            <p>As an AWS Premier Tier Services partner with the IoT competency, Mayhem Shield has demonstrated real-world success when it comes to launching IoT applications on the AWS cloud. As AWS IoT experts, we know what it takes to bring a new IoT network online, as well as the infrastructure and cloud-native solutions that teams need to stay on top of IoT network management.</p>
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

export default IoT;