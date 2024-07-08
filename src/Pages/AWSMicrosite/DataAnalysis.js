import React from 'react';
import { NavLink } from 'react-router-dom';
import partner from "../../components/assets/images/aws-partner-badge.png";
import cover from "../../components/assets/images/allPagePhoto.jpeg";

const DataAnalysis = () => {
    return (
        <div>
            <div className="lg:flex md:flex  md:min-h-fit lg:min-h-[400px] min-h-[500px] sm:block justify-between items-start mt-5 lg:px-10 sm:px-5">
                <div className="relative">
                    <h1 className='lg:text-[50px] sm:text-[30px] font-bold'>AWS Data Analytics Services</h1>
                    <p>Store and analyze all of your data in the cloud to uncover valuable growth opportunities</p>
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
                    <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Harness the Power of Your Data</h1>
                    <p>Companies have access to more data than ever before, but many don’t know how to take full advantage. Mayhem  Shield  equips engineering teams with the cloud infrastructure and tools they need to gather, store, and process data at scale, creating new sources of value along the way.</p>
                </div>            </div>
            <div className="flex flex-wrap justify-evenly gap-5 my-10">
                <h1 className='lg:text-[30px] w-full text-center my-10 mt-20 sm:text-[30px] font-semibold mb-5'>Achieve More With Mayhem Shield and AWS</h1>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-delivery--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Deliver Better Offerings</h1>
                    <p>Uncover valuable insights from your data and enhance your products and services accordingly to meet the unique needs of your customers.</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-business--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Win New Business</h1>
                    <p>Use big data to learn more about existing customers so that you can improve your sales efforts and grow your business.</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-money--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Reduce Costs</h1>
                    <p>Migrate your data to scalable, cloud-native data lakes that offer better performance at a fraction of the cost of commercial storage products.</p>
                </div>
            </div>
            <div className="w-fit mx-auto">
                <NavLink to="/partners/aws/landing2" className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold my-8' >Get Started With A Data and Analytics Strategy Assessment</NavLink>
            </div>
            <div className="bg-gray-50 lg:px-10 sm:px-0 py-10 text-center ">
                <div className="lg:max-w-[1000px] md:max-w-[90%] mx-auto">
                    <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5 max-w-[1000px]'>Why Choose Mayhem Shield as Your Data & Analytics Consulting  Partner?</h1>
                </div>
                <div className="text-start flex flex-wrap lg:justify-between justify-evenly items-center mt-20">
                    <span className='lg:w-1/2 md:w-2/3 sm:w-full'>
                        <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Comprehensive Suite of Data Services</h1>
                        <p className='text-justify'>Mayhem  Shield has earned the Data & Analytics Competency from AWS, validating our team’s ability to deliver real-world data analytics solutions through the cloud that drive positive results for clients. We offer a full range of data services, including analytics & data warehousing, data movement, data lakes, predictive analytics, machine learning, data cleaning, and data reconciliation.</p>
                    </span>
                    <img src="https://www.clearscale.com/images/pictures/advantages-section/data-and-analytics-1_1x.webp" alt="" />
                </div>
                <div className="text-start flex flex-wrap lg:justify-between justify-evenly items-center mt-5">
                    <img src="https://www.clearscale.com/images/pictures/advantages-section/container-2_1x.webp" alt="" />
                    <span className='lg:w-1/2 md:w-2/3 sm:w-full'>
                        <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>In-depth Understanding of Modern Data Challenges</h1>
                        <p className='text-justify'>We understand what it takes to manage high volume, high variety, and high velocity data effectively. Our team has helped numerous businesses upgrade their data pipelines, repositories, and workflows to support disruptive applications and keep the data moving.
                            <br />
                            <br />
                            Our data analytics experts are experienced in AWS’s most common analytics services, including AWS Lake Formation, Amazon Athena, Amazon EMR, Amazon Redshift, Amazon Kinesis, AWS Glue, and more.</p>
                    </span>
                </div>
                <div className="w-fit mx-auto">
                    <br />
                    <NavLink to="/partners/aws/landing2" className=' bg-[#0000FFdd] py-3 my-10 px-8 rounded text-white font-semibold' >Schedule Meeting</NavLink>
                </div>
                <div className="bg-blue-500 text-white  lg:px-[50px] p-5 py-20 mt-10">
                    <div className="">
                        <h1 className='text-3xl w-full text-center font-semibold'>Common Data and Analytics Use Cases</h1>
                        <div className=" flex flex-wrap lg:justify-between text-left justify-evenly">
                            <div className='lg:w-[380px] text-justify` w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>Data Lakes & Warehouses</h1>
                                <p>Build a data lake for collecting data, extracting insights from the data, and providing visualizations to share insights. Modernize, migrate, deploy, and operate Hadoop workloads, as well as transform data warehouse workloads.</p>
                                <NavLink to='/' className='underline mt-5'>Read more</NavLink>
                            </div>
                            <div className='lg:w-[380px] text-justify` w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>AI/ML</h1>
                                <p>Use your data to train ML algorithms that enable personalized recommendation engines, predictive analytics, automation, and more. Modernize, migrate, deploy, and operate multi-tenant, multi-model enterprise ML systems.</p>
                                <NavLink to='/' className='underline mt-5'>Read more</NavLink>
                            </div>
                            <div className='lg:w-[380px] text-justify` w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>IoT</h1>
                                <p>Gather massive volumes of data in real-time from IoT sources worldwide, and learn more about how your customers interact with your offerings. Deliver modern products for smart energy management, predictive analytics, and geo-aware ecosystems.</p>
                                <NavLink to='/aws/ml' className='underline mt-5'>Read more</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-2/3 md:w-full text-left sm:w-full mx-auto mt-20">
                    <h1 className='w-full text-center text-4xl  font-semibold my-10'>Frequently Asked Questions</h1>

                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What data infrastructure is available on AWS?</div>

                        <div className='collapse-content'>
                            <p>AWS offers a wide range of data infrastructure, including data lakes, purpose-built databases, data warehouses, analytics tools, data movement solutions, and services for leveraging AI/ML. With AWS data analytics services, organizations can easily ingest, store, process, and analyze massive volumes of data to discover new insights, inform decision-making, and launch valuable services.</p>

                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What data management solutions are available on AWS?</div>

                        <div className='collapse-content'>
                            <p>AWS comes with many services across the data ecosystem areas mentioned above. Several of the most widely used AWS data analytics services include Amazon Athena for querying Amazon S3 data with SQL, AWS Glue for preparing and loading data in the cloud, AWS Lake Formation for quickly setting up secure data lakes, and Amazon SageMaker for creating, training, and launching machine learning programs at scale.</p>

                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What are the benefits of using cloud-native data &amp; analytics tools?</div>

                        <div className='collapse-content'>
                            <p>There are many benefits of using cloud-native data and analytics tools. First, the cloud offers virtually unlimited scalability, which means organizations can gather and use more data to support their goals. Many data cloud services also charge on a pay-per-use basis, freeing companies from having to pay for unused resources. Furthermore, with a cloud provider like AWS, organizations can integrate and streamline data management in one place, allowing developers to focus more on application development.</p>

                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>How can Mayhem  Shield  help me harness the potential of my data?</div>

                        <div className='collapse-content'>
                            <p>Mayhem  Shield  is an AWS Premier Tier Services partner with 11 AWS competencies. Our past work earned us the Data &amp; Analytics competency, demonstrating our ability to plan and execute data-related projects on the cloud that generate tangible results. We understand how to build comprehensive data ecosystems on the AWS cloud according to the latest best practices and know how to bring our clients’ visions to life.</p>

                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What is a data lake?</div>

                        <div className='collapse-content'>
                            <p>A data lake is a central location for storing both structured and unstructured data. In many cases, organizations don’t have defined purposes for data stored in data lakes, which differs from how leaders think about data warehouses. The raw information in data lakes is typically used by data scientists who want to run complex, yet flexible queries for big data applications. Data lakes tend to be most useful in industries that create a lot of raw data, like healthcare (e.g., clinical notes), logistics (e.g., contracts and forms), and education (e.g., LMS engagement data).</p>

                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What data &amp; analytics challenges do companies face today?</div>

                        <div className='collapse-content'>
                            <p>Some of the biggest data challenges companies face today include lack of scalable storage, growing sophistication of cybersecurity threats, and overabundance of diverse data types. Solving these challenges is difficult with legacy, on-premises solutions. Fortunately, AWS understands what organizations need to succeed in the big data age and offers powerful tools that make overcoming these issues easy.</p>

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

export default DataAnalysis;