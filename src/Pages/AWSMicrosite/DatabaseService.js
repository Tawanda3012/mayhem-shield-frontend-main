import React from 'react';
import { NavLink } from 'react-router-dom';
import partner from "../../components/assets/images/aws-partner-badge.png";
import cover from "../../components/assets/images/allPagePhoto.jpeg";

const DatabaseService = () => {
    return (
        <div>
            <div className="lg:flex md:flex  md:min-h-fit lg:min-h-[400px] min-h-[500px] sm:block justify-between items-start mt-5 lg:px-10 sm:px-5">
                <div className="relative">
                    <h1 className='lg:text-[50px] sm:text-[30px] font-bold'>AWS Database Services</h1>
                    <p>Migrate and modernize your databases on the cloud to support your most ambitious innovation goals</p>
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
                    <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Maximize Database Performance</h1>
                    <p>Companies that want to modernize their IT environments need to replace on-premises databases with purpose-built cloud infrastructure. Mayhem Shield can help you migrate and modernize your legacy databases on the AWS cloud platform, giving you the processing power, scalability, and uptime needed to support your most complex applications at a lower overall cost.</p>
                </div>            </div>
            <div className="flex flex-wrap justify-evenly gap-5 my-10">
                <h1 className='lg:text-[30px] w-full text-center my-10 mt-20 sm:text-[30px] font-semibold mb-5'>Achieve More With Mayhem Shield and AWS</h1>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-storage--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Leverage Managed Databases</h1>
                    <p>Automate provisioning, managing, and scaling databases, allowing you to focus on higher-value app development work with purpose-built databases.</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-man-with-flag--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Regain Database Freedom</h1>
                    <p>Replace your inflexible commercial databases with cloud-optimized, open source-compatible databases that provide better performance at a lower cost.</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[360px] text-center">
                    <div className="bg-[#0000FF] rounded-full h-[99px] w-[99px] flex justify-center items-center">
                        <img className='w-[54px]' src="https://www.clearscale.com/images/icons/icon-arrows-to-top-2--white.svg" alt='' />
                    </div>
                    <h1 className='lg:text-[30px] text-[#1E71BC]  sm:text-[30px] font-semibold my-2'>Increase Database Scalability</h1>
                    <p>Take advantage of near-unlimited database scalability and high availability in the cloud, ensuring your database is available for your apps at all times.</p>
                </div>
            </div>
            <div className="w-fit mx-auto">
                <NavLink to="/partners/aws/landing2" className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold my-8' >Chat With Cloud Specialist</NavLink>
            </div>
            <div className="bg-gray-50 lg:px-10 sm:px-0 py-10 text-center ">
                <div className="lg:max-w-[1000px] md:max-w-[90%] mx-auto">
                    <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5 max-w-[1000px]'>Why Choose Mayhem Shield as Your Cloud Databases Consulting  Partner?</h1>
                </div>
                <div className="text-start flex flex-wrap lg:justify-between justify-evenly items-center mt-20">
                    <span className='lg:w-1/2 md:w-2/3 sm:w-full'>
                        <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Robust Cloud Database Management Experience</h1>
                        <p className='text-justify'>Mayhem Shield has earned both the Migration and Data & Analytics Competencies from AWS, both of which are relevant when it comes to cloud databases. We can set you up with secure databases that meet the demands of your business, lower your total cost of ownership, and ensure high application availability at all times.</p>
                    </span>
                    <img src="https://www.clearscale.com/images/pictures/advantages-section/database-1_1x.webp" alt="" />
                </div>
                <div className="text-start flex flex-wrap lg:justify-between justify-evenly items-center mt-5">
                    <img src="https://www.clearscale.com/images/pictures/advantages-section/database-2_1x.webp" alt="" />
                    <span className='lg:w-1/2 md:w-2/3 sm:w-full'>
                        <h1 className='lg:text-[30px]  sm:text-[30px] font-semibold mb-5'>Expertise in Key AWS Database Services</h1>
                        <p className='text-justify'>As an AWS Premier Consulting Partner, Mayhem Shield has completed 1000+ cloud projects for companies across all industries. Our team understands what it takes to migrate and modernize databases on the cloud. We have deep experience implementing cloud services, such as Amazon Aurora, Amazon Neptune, and Amazon DynamoDB, that enable enterprises to meet their overarching objectives.</p>
                    </span>
                </div>
                <div className="w-fit mx-auto">
                    <NavLink to="/partners/aws/landing2" className=' bg-[#0000FFdd] py-3 px-8 rounded text-white font-semibold my-8' >Schedule Meeting</NavLink>
                    <br />
                </div>

                <div className="bg-blue-500 text-white  lg:px-[50px] p-5 py-20 mt-10">
                    <div className="">
                        <h1 className='text-4xl w-full text-center font-semibold'>Common Database Use Cases</h1>
                        <div className=" flex flex-wrap lg:justify-between text-left justify-evenly">

                            <div className='lg:w-[350px] w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>Managed Databases</h1>
                                <p>Leverage fully managed database services to automate time-consuming tasks related to setting up, managing, and scaling your databases.</p>
                                <NavLink to='/' className='underline mt-5'>Read more</NavLink>
                            </div>
                            <div className='lg:w-[350px] w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>Database Migration</h1>
                                <p>Migrate legacy commercial databases to the cloud, breaking free of punitive licensing terms, proprietary technology, and higher costs.</p>
                                <NavLink to='/aws/ml' className='underline mt-5'>Read more</NavLink>
                            </div>
                            <div className='lg:w-[390px] w-full '>
                                <h1 className='text-3xl text-center my-8 w-full  font-semibold'>Database Modernization</h1>
                                <p>Modernize existing databases to be more resilient, flexible, and cost-efficient, improving the overall performance of your mission-critical applications.</p>
                                <NavLink to='/' className='underline mt-5'>Read more</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3 md:w-full text-left sm:w-full mx-auto mt-20">
                    <h1 className='w-full text-center text-4xl  font-semibold my-10'>Frequently Asked Questions</h1>

                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What are the benefits of migrating databases to AWS?</div>
                        <div className='collapse-content'>
                            <p>More and more organizations are migrating on-premises databases to AWS to boost performance, reduce costs, and maximize reliability. Legacy databases are less flexible and scalable. They also require more administrative oversight to ensure security and resilience. With cloud-native database solutions, like those offered by AWS, it’s much easier to ensure database uptime, access immense processing power, and match volatile demand.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What are the advantages of using managed database solutions on AWS?</div>
                        <div className='collapse-content'>
                            <p>AWS offers managed database solutions, which means the cloud provider takes on much of the management work that would otherwise fall on IT teams. For instance, AWS will handle server provisioning, patching, and backups. Organizations can lean on AWS to monitor databases continuously and speed up time-consuming processes, like setting up, managing, and scaling new databases. With this additional capacity, in-house engineering teams can focus more on higher-value activities such as innovating, rather than maintaining.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What database services does AWS offer?</div>
                        <div className='collapse-content'>
                            <p>AWS has a robust suite of database services that cover all major database types, from relational and NoSQL databases to graph and time series databases. Some of AWS’ most popular database services included Amazon DynamoDB, Amazon Relational Database Service (RDS), Amazon Aurora, and Amazon Neptune. With these AWS database services, launching modern applications that take advantage of the latest cloud technologies is far less intimidating.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What is involved in database modernizations?</div>
                        <div className='collapse-content'>
                            <p>Database modernizations aim to improve database performance in multiple ways. Modernizations may involve implementing ongoing monitoring and logging or switching over to pay-as-you-go compute pricing without sacrificing commercial-grade performance. Databases in AWS allow you to go deep in modernization with schema updates and application refactoring, all without the worry of capacity provisioning.  Modernizations can also mean leveraging AWS availability zones and refactoring databases for better performance on the cloud.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What are the most common database migration paths?</div>
                        <div className='collapse-content'>
                            <p>The most common database migration paths involve moving from Oracle and SQL Server to Amazon Aurora or RDS for PostgreSQL or MySQL, moving from Apache Cassandra to Amazon DynamoDB or Keyspaces, moving from MongoDB to Amazon DocumentDB, or moving from Netezza and Teradata to Amazon Redshift. In many cases, it makes sense to work with a database migration partner, like Mayhem Shield, who has the knowledge and experience to execute all of these paths.</p>
                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-plus ">
                        <div className='collapse-title text-xl font-medium'>What are purpose-built databases?</div>
                        <div className='collapse-content'>
                            <p>Purpose-built database engines are designed to meet particular business or application requirements. In the past, organizations were stuck with relational databases. Now, cloud providers like AWS offer 15+ purpose-built databases that are better tailored to specific applications. For example, Amazon Neptune is well-suited for managing graph relationships, while Amazon DocumentDB exists for document storage. Developers can now start with an engine that is better aligned with their database end goals.</p>
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

export default DatabaseService;