import { useState, useEffect } from 'react';
import h from "./images/s1-img.jpg"
import herobg from "./images/hero-man.png"
import s3 from "./images/s3-img1.jpg"
import s4 from "./images/s4-img.jpg"
import s5 from "./images/s5-img.jpg"
import ModalForm from './ModalForm';

const AwsLanding2 = () => {
    const Hero = herobg
    const [showModal, setShowModal] = useState(true)
    const modalHandler = () => setShowModal(!showModal)
    // const modalHandler = () => setShowModal(false)

    useEffect(() => {
        if (showModal) document.body.style.overflowY = "hidden"
        else document.body.style.overflowY = "scroll"
    }, [showModal])

    return (
        <div className='lg:mx-[100px] sm:m-5  md:mx-5'>
            <div className={`min-h-[100px] lg:flex md:block sm:block py-8  items-end border-b-2  `}>
                <div className="mt-5 lg:w-3/4 md:w-full sm:w-full">
                    <h1 className="text-5xl font-bold  text-[#3f3e3e] ">Seamless Transition: AWS Migration
                        Solutions.</h1>
                    <p className=' mt-3  text-xl lg:w-full md:w-3/4 sm:w-fit font-thin'>Join the multitude of businesses experiencing success with AWS solutions. Leverage our risk-free and no upfront cost migration assessments to seamlessly transition to AWS. Experience growth and innovation like never before.
                    </p>
                    <iframe className='mt-2' width="560" height="315" src="https://www.youtube.com/embed/QZkXdC5dBLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

                </div>
                <img src={herobg} alt="" className='w-[40%] sm:hidden lg:block md:block' />

            </div>
            <div className="min-h-[100px] border-b-2 flex justify-between items-center py-[100px]" id="section-2">
                <div className="lg:w-[] md:w-[] sm:w-full">
                    <h1 className="text-5xl font-bold  text-[#3f3e3e] ">Do you want to get your <br />
                        FREE Migration Evaluation?</h1>
                    <p className='lg:w-full md:w-full mt-3 sm:w-full text-2xl font-thin'>With AWS Optimization and Licensing Assessment (OLA), we evaluate your workload environment and suggest how you can migrate and optimize your current on-premise workload with reduced costs and tailored resources. </p>
                    <p onClick={modalHandler} className=' btn rounded-full px-5 py-3 bg-[#f99d34] border-0 text-center text-xl font-lg hover:bg-[#f99d34e9] text-white mt-5 drop-shadow-xl'>Free migration assessment </p>
                </div>
                <div className="lg:block md:hidden sm:hidden">
                    <img src={h} alt="" className="rounded-xl lg:w-[770px] lg:block md:hidden sm:hidden" />
                </div>
            </div>
            <div className="min-h-[100px] border-b-2  py-[100px]" id="section-3">
                <h1 className="text-5xl font-bold  text-[#1e1d1d] ">Benefits of completing an assessment:</h1>
                <div className="lg:flex md:flex flex-wrap sm:block   my-10 gap-5">
                    <div className="mx-auto w-72  sm:text-center lg:text-left md:text-left lg:block md:block sm:flex flex-col justify-between items-center">
                        <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/laptop-file-solid.svg" alt="" />
                        <br />
                        <h1 className="text-xl font-medium  text-[#1e1d1d] ">Rightsize your resources</h1>
                        <p>Discover workloads in your on-premises or cloud environment and build an inventory of your compute resources. Our tooling-based approach will help you determine your actual utilisation requirements to help optimally select the lowest-cost AWS EC2 instance size and type for each workload. Use this data to determine the right blend of on-demand and spot instances, dedicated hosts, savings plan and other options tailored to your environment.</p>
                    </div>
                    <div className="mx-auto w-72 my-8 sm:text-center lg:text-left md:text-left lg:block md:block sm:flex flex-col justify-between items-center">
                        <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/money-bill-trend-down.svg" alt="" />
                        <br />
                        <h1 className="text-xl font-medium  text-[#1e1d1d] ">Reduce Costs</h1>
                        <p>Without optimising your cloud infrastructure, the cost of overprovisioning third-party licensing can exceed the cost of compute. Leverage the recommendations from an AWS OLA to get the most value from your existing licensing entitlements by configuring your instances to require fewer licenses while still maintaining highly performant applications. Adapt your on-premises licensing strategy to enable your cloud migration.</p>
                    </div>
                    <div className="mx-auto w-72 sm:text-center lg:text-left md:text-left  lg:block md:block sm:flex flex-col justify-between items-center">
                        <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/house-laptop-solid.svg" alt="" />
                        <br />
                        <h1 className="text-xl font-medium  text-[#1e1d1d] ">Explore Flexible Licensing Options</h1>
                        <p>Use the results of an AWS OLA to avoid unnecessary licensing costs and vendor lock-in. Model different licensing scenarios with license included or BYOL (Bring Your Own License) instances, to meet the needs of your business. Flexible licensing options enable you to drive seasonal workloads and support agile experimentation, as well as to model dedicated environments, so you only pay for what you need.</p>
                    </div>
                </div>
            </div>
            <div className="min-h-[100px] pb-20 border-b-2" id="section-4">
                <h1 className="text-5xl font-bold mt-10 text-[#3f3e3e] ">How it works</h1>
                <div className="lg:flex md:block sm:block  items-center">
                    <div className="lg:w-[500px]  sm:mx-auto  md:w-[400px] sm:w-[90%] mx-10 my-10 p-10  bg-[#F3F3F4B3] rounded-xl">
                        <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/file-circle-check-solid.svg" alt="" />
                        <br />
                        <h1 className="text-xl font-medium  text-[#1e1d1d] ">Optimization and Licensing Assessment</h1>
                        <p>Assess the consumption, cost, and provisioning of your Windows workloads on premises and in AWS.</p>
                    </div>
                    <div className="mx-5 lg:block md:hidden sm:hidden">
                        <img className='rounded-xl  mx-auto' src={s3} alt="" />
                    </div>
                </div>
                <div className="lg:flex md:flex sm:block mt-5 bg-[#F3F3F4B3] rounded-xl">
                    <div className="lg:w-[500px]  sm:mx-auto  md:w-[400px] sm:w-[90%] mx-10 my-10 lg:p-10 md:p-5 ">
                        <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/folder-gear.svg" alt="" />
                        <br />
                        <h1 className="text-xl font-medium  text-[#1e1d1d] ">Scope Workloads</h1>
                        <p>Determine prospective workloads to optimize.</p>
                    </div>
                    <div className="lg:w-[500px]  sm:mx-auto  md:w-[400px] sm:w-[90%] mx-10 my-10 lg:p-10 md:p-5 ">
                        <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/rectangle-history-circle-plus.svg" alt="" />
                        <br />
                        <h1 className="text-xl font-medium  text-[#1e1d1d] ">Collect Data</h1>
                        <p>Collect utilization data for workloads, using Migration Evaluator or third-party tooling.</p>
                    </div>
                    <div className="lg:w-[500px]  sm:mx-auto  md:w-[400px] sm:w-[90%] mx-10 my-10 lg:p-10 md:p-5 ">
                        <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/magnifying-glass-chart-solid.svg" alt="" />
                        <br />
                        <h1 className="text-xl font-medium  text-[#1e1d1d] ">Analyse</h1>
                        <p>AWS or APN Partners analyse the data to model cost and optimization scenarios.
                        </p>
                    </div>
                    <div className="lg:w-[500px]  sm:mx-auto  md:w-[400px] sm:w-[90%] mx-10 my-10 lg:p-10 md:p-5 ">
                        <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/sitemap-solid.svg" alt="" />
                        <br />
                        <h1 className="text-xl font-medium  text-[#1e1d1d] ">Plan</h1>
                        <p>Review the results of your OLA and build your business case or start a migration proof-of-concept.
                        </p>
                    </div>
                </div>

            </div>
            <div className="min-h-[100px] border-b-2" id="section-5">
                <span className='text-center'>
                    <h1 className="text-5xl font-medium my-5 mt-10 text-[#343030] ">Leverage scalable services to provide crucial support for your business needs.</h1>
                    <p>With multiple AWS certifications, Mayhem Shield offers end-to-end Cloud Professional Services to help provide the right cloud solutions to meet your specific business needs.</p>
                </span>
                <div className="lg:flex md:flex sm:block my-5 bg-[#F3F3F4B3] rounded-xl">
                    <div className="lg:w-[500px]  sm:mx-auto  md:w-[400px] sm:w-[90%] mx-10 my-10 lg:p-10 md:p-2 ">
                        <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/code-compare.svg" alt="" />
                        <br />
                        <h1 className="text-xl font-medium  text-[#1e1d1d] ">End-to-end solutions
                        </h1>
                        <p>
                            We provide comprehensive solutions tailored to your needs. With our extensive toolkit, services, and support, we're here to help you effectively scope, plan, and execute your AWS migrations. Let us guide you through a seamless transition to AWS.
                        </p>
                    </div>
                    <div className="lg:w-[500px]  sm:mx-auto  md:w-[400px] sm:w-[90%] mx-10 my-10 lg:p-10 md:p-2 ">
                        <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/file-arrow-down.svg" alt="" />
                        <br />
                        <h1 className="text-xl font-medium  text-[#1e1d1d] ">Offload tasks and get key support
                        </h1>
                        <p>Delegate your time-intensive tasks to us and redirect your in-house resources towards services that add more value to your business. Rely on our expert support, overcoming any skill gaps or technology limitations, as we manage your AWS migration seamlessly.
                        </p>
                    </div>
                    <div className="lg:w-[500px]  sm:mx-auto  md:w-[400px] sm:w-[90%] mx-10 my-10 lg:p-10 md:p-2 ">
                        <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/user-check.svg" alt="" />
                        <br />
                        <h1 className="text-xl font-medium  text-[#1e1d1d] ">Lean on AWS certified experts
                        </h1>
                        <p>Trust in our team of AWS-certified professionals - engineers, architects, and cloud experts - who are proficient in the Cloud Adoption Framework. They stand ready to assist you with every aspect of your migration, ensuring a smooth and successful transition to AWS.
                        </p>
                    </div>
                    <div className="lg:w-[500px]  sm:mx-auto  md:w-[400px] sm:w-[90%] mx-10 my-10 lg:p-10 md:p-2 ">
                        <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/arrow-up-right-dots.svg" alt="" />
                        <br />
                        <h1 className="text-xl font-medium  text-[#1e1d1d] ">Grow into new lines of business
                        </h1>
                        <p>Expand into new business areas with our support. We enable you to pursue more significant deals and provide extended post-migration customer support. Our services ensure the maintenance, optimization, and security of your cloud environments, allowing you to focus on growing your business.
                        </p>
                    </div>
                </div>
                <div className="lg:flex md:block sm:block  items-center">
                    <div className="lg:w-[500px]  sm:mx-auto  md:w-[90%] sm:w-[95%] mx-10 my-10 p-10  bg-[#F3F3F4B3] rounded-xl">
                        <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/award-solid.svg" alt="" />
                        <br />
                        <h1 className="text-xl font-medium  text-[#1e1d1d] ">100+ AWS certifications</h1>
                        <ul className='my-2 text-lg list-disc list-inside'>
                            <li>AWS Certified Solutions Architect Professional</li>
                            <li>AWS Certified DevOps Engineer - Professional</li>
                            <li>AWS Certified Solutions Architect - Associate</li>
                            <li>AWS Certified Developer - Associate</li>
                            <li>AWS Certified Cloud Practitioner</li>
                        </ul>
                    </div>
                    <div className="mx-5 sm:hidden md:hidden lg:block">
                        <img className='rounded-xl  mx-auto' src={s4} alt="" />
                    </div>
                </div>
            </div>
            <div className="min-h-[100px] border-b-2" id="section-6">
                <span className='text-center'>
                    <h1 className="text-5xl font-medium my-5 mt-10 text-[#343030] ">Benefits of working with Mayhem Shield</h1>
                    <p>Take advantage of various incentives and benefits to assist in performing migrations.</p>
                </span>
                <div className="flex flex-wrap">
                    <div className="lg:w-[350px]  sm:mx-auto  md:w-[300px] sm:w-[90%] mx-10 my-10 lg:p-10 md:p-2 ">
                        <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/arrows-to-eye.svg" alt="" />
                        <br />
                        <h1 className="text-xl font-medium  text-[#1e1d1d] ">Assess
                        </h1>
                        <p>Get usage discounts cash for delivered business cases.</p>
                    </div>
                    <div className="lg:w-[350px]  sm:mx-auto  md:w-[300px] sm:w-[90%] mx-10 my-10 lg:p-10 md:p-2 ">
                        <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/hand-holding-dollar-solid.svg" alt="" />
                        <br />
                        <h1 className="text-xl font-medium  text-[#1e1d1d] ">Mobilize
                        </h1>
                        <p>Take advantage of our unique "Mobilize" program as you embark on your AWS migration journey. With your investment, we add significant value through our expert services, effectively amplifying the reach and impact of your project.
                        </p>
                    </div>
                    <div className="lg:w-[350px]  sm:mx-auto  md:w-[300px] sm:w-[90%] mx-10 my-10 lg:p-10 md:p-2 ">
                        <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/rocket-launch.svg" alt="" />
                        <br />
                        <h1 className="text-xl font-medium  text-[#1e1d1d] ">Migrate & Modernize</h1>
                        <p>Get 25% of post migration ARR in cash.</p>
                    </div>
                </div>
                <div className="lg:flex md:block sm:block  items-center">
                    <div className="lg:w-[500px]  sm:mx-auto  md:w-[400px] sm:w-[90%] mx-10 my-10 p-10  bg-[#F3F3F4B3] rounded-xl">
                        <h1 className="text-3xl font-bold  text-[#1e1d1d] ">Learn more in our migration one-pager
                        </h1>
                        <ModalForm showModal={showModal} modalHandler={modalHandler} />
                    </div>
                    <div className="mx-5 lg:block md:hidden sm:hidden">
                        <img className='rounded-xl  mx-auto' src={s5} alt="" />
                    </div>
                </div>
            </div>
            <div className="min-h-[100px] border-b-2 my-10" id="section-7">
                <div className="lg:w-3/4 md:w-3/4 sm:w-full">
                    <h1 className="text-5xl font-bold  text-[#3f3e3e] ">See how we help partners win </h1>
                    <p className='lg:w-full md:w-full mt-3 sm:w-full text-2xl font-thin'> Mayhem Shield, partnering with AWS, aided Blue Melon Capital in achieving a 38% reduction in their infrastructure expenses through strategic optimization and effective cloud infrastructure management.

                    </p>
                </div>
                <div className="lg:flex md:block sm:block flex-wrap justify-between">

                    <div className="lg:flex md:block sm:block flex-wrap gap-5 lg:w-[48%] md:w-full sm:w-full">
                        <div className="lg:flex md:flex sm:block w-full gap-5">
                            <div className="lg:w-[500px]  sm:mx-auto  md:w-[90%] sm:w-[95%] mx-10 my-10 p-10  bg-[#F3F3F4B3] rounded-xl">
                                <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/users-solid.svg" alt="" />
                                <br />
                                <h1 className="text-xl font-medium  text-[#1e1d1d] ">The customer
                                </h1>
                                <ul className='my-2 text-lg list-disc list-inside'>
                                    <li>Company: Beyond Off Market</li>
                                    <li> Leading real estate investor wholesale funding company providing funding throughout the USA.</li>
                                </ul>
                            </div>
                            <div className="lg:w-[500px]  sm:mx-auto  md:w-[90%] sm:w-[95%] mx-10 my-10 p-10  bg-[#F3F3F4B3] rounded-xl">
                                <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/handshake.svg" alt="" />
                                <br />
                                <h1 className="text-xl font-medium  text-[#1e1d1d] ">The partner</h1>
                                <ul className='my-2 text-lg list-disc list-inside'>
                                    <li>Company: Alliance Tax Service</li>
                                    <li> Providing seamless tax services to individuals and business.
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="mx-5 sm:hidden md:hidden lg:block">
                            <img className='rounded-xl  mx-auto' src={s4} alt="" />
                        </div>
                    </div>
                    <div className="lg:flex md:flex sm:block gap-5 lg:w-[48%] sm:full md:full  ">
                        <div className="lg:w-[500px]  sm:mx-auto  md:w-[90%] sm:w-[95%] mx-10 my-10 p-10  bg-[#F3F3F4B3] rounded-xl">
                            <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/location-crosshairs-solid.svg" alt="" />
                            <br />
                            <h1 className="text-xl font-medium  text-[#1e1d1d] ">The situation
                            </h1>
                            {/* <ul className='my-2 text-lg list-disc list-inside'>
                                <li>Itiviti wanted to enable its clients to scale computing costs and respond more quickly to abrupt market changes They launched a cloud initiative to transform their electronic trading platform and move all their DevOps and Disaster Recovery to AWS.
                                </li>
                                <li>Estimated to generate $1M+ USD in annual AWS consumption
                                </li>
                                <li>Itiviti preferred the level of attention and direct access to a local partner like Data Canopy, with the experience and backing of a global enterprise they can trust like Mayhem Shield
                                </li>

                            </ul> */}

                            Navigating the fast-paced healthcare landscape, our client needed a flexible solution to scale computing costs and quickly adapt to industry changes. They embarked on a significant cloud transition to revamp their electronic health record system, shifting their entire DevOps and Disaster Recovery operations to AWS.
                            This strategic move is forecasted to yield over $1M+ USD in annual revenue. Much like SKW Med, our client appreciated the customized care and direct access provided by Mayhem Shield.

                        </div>
                        <div className="lg:w-[500px]  sm:mx-auto  md:w-[90%] sm:w-[95%] mx-10 my-10 p-10  bg-[#F3F3F4B3] rounded-xl">
                            <img src="https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/award-simple.svg" alt="" />
                            <br />
                            <h1 className="text-xl font-medium  text-[#1e1d1d] ">The benefit of Mayhem Shield
                            </h1>
                            {/* <ul className='my-2 text-lg list-disc list-inside'>
                                <li>Data Canopy is starting their journey in AWS cloud and needed the experience and cloud expertise of Mayhem Shield to advance their journey as an AWS cloud service provider.
                                </li>
                                <li> Mayhem Shield’s deep bench of AWS certified professionals provided its skills and expertise around the AWS Cloud Adoption Framework.
                                </li>
                                <li>Data Canopy was able to leverage  Mayhem Shield's advanced tier status and progression toward the AWS Migration Competency, the partner was able to access the AWS funding to fund 50% of the project for the customer.
                                </li>
                                <li>For more information on the project, see Itiviti’s press release: PR Newswire
                                </li>
                            </ul> */}
                            MP Logistics, a leading logistics firm, partnered with Mayhem Shield for their AWS cloud migration. This led to enhanced operational efficiency and scalability, along with significant cost savings due to AWS's pay-as-you-go model. The move also ensured robust security and compliance and fostered innovation by facilitating access to advanced technologies. Lastly, through Mayhem Shield's advanced tier status, MP Logistics was able to utilize our distributors discount programs, further minimizing migration costs.

                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-[100px]  lg:bg-[url('https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/hero-geometric.svg')] md:bg-[url('https://ingrammicrocloud.com/lp/en/aws-migration-solution/img/hero-geometric.svg')] sm:bg-none bg-cover norepeat" id="section-8">
                <div className="w-full mx-10 my-10 max-w-[800px] py-20   rounded-xl">
                    <h1 className="lg:text-5xl sm:3xl font-bold  text-[#1e1d1d] ">Contact our AWS dedicated
                        team to learn more and get
                        started today!</h1>
                    <br />
                    <p onClick={() => modalHandler()} className=' btn rounded-full px-5 py-3 bg-[#f99d34] border-0 text-center text-xl font-bold z-0 hover:bg-[#f99d34e9] text-white mt-5 drop-shadow-xl'>GetStarted</p>
                </div>
            </div>

        </div>
    );
};

export default AwsLanding2;