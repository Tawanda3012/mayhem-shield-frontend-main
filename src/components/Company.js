import React from "react";
import Ractangle from "./Ractangle";
import Heading from "./shared/Heading";
import img from "../images and logos/company.png";

const Company = () => {
  return (
    <div className="dotted bg-top-right ">
      <Ractangle text={"Company"} />
      <span className="lg:hidden md:hidden sm:block">
        <Heading className="" black={"About"} blue={"Mayhem Shield"} />
      </span>
      <div className="lg:flex md:flex justify-around mt-[60px] lg:mx-[8%] ">
        <div className="lg:w-1/2 md:w-3/4 sm:w-1/2 mx-auto">
          <img src={img} alt="" />
        </div>
        <div className=" lg:w-1/2  md:w-[3/4] sm:w-full  ">
          <span className="lg:block md:block sm:hidden">
            <Heading className="" black={"About"} blue={"Mayhem Shield"} />
          </span>
          <span className="text-blue-500"></span>
          <a href="" className="text-blue-500"></a>
          <p className="font-merriweather mx-auto text-justify lg:mx-0 lg:mt-10 lg:w-[540px] md:w-3/4 mb-[91px] sm:mx-5 ">
            At Mayhem Shield, we understand the importance of staying ahead of the curve in the ever-evolving world of <span className="text-blue-500"> cloud computing</span>. As a leading independent multi-cloud services consulting company, we specialize in providing a wide range of services to help businesses of all sizes navigate the complex and ever-changing landscape of cloud technologies. From <a href="/application-development" className="text-blue-500"> cloud application development</a>,
            <span className="text-blue-500"> cloud storage </span> to <a href="/cloud-migration" className="text-blue-500">cloud migration</a> and IT <a href="/cloud-security" className="text-blue-500">security</a>, we have the expertise and experience to help you succeed.
            <br />
            <br />
            We are proud to be a veteran and minority-owned company, and we are dedicated to delivering the best possible service to our clients. We understand the unique challenges that businesses face in today's fast-paced and highly competitive environment. That's why we take a strategic and holistic approach to cloud consulting, working closely with our clients to understand their specific needs and goals.
          </p>
        </div>
      </div>
        <p className="font-merriweather mx-auto text-justify lg:mx-8 md:mx-5 sm:mx-5">
        One of our key strengths is our expertise in           <span className="text-blue-500">Artificial Intelligence (AI)</span>
        and           <span className="text-blue-500">Machine Learning (ML)</span>
        capabilities. We understand the importance of these emerging technologies and are always exploring new ways to integrate them into our services. This allows us to offer our clients cutting-edge solutions that give them a competitive edge. Our AI/ML capabilities include natural language processing, image recognition, predictive analytics and more. We also have the knowledge to integrate AI/ML with cloud infrastructure to bring out the best performance.
        <br />
        <br />
        We are a strategic partners with the biggest names in the industry, including <a href="/partners/aws" className="text-blue-500">Amazon Web Services</a>
        ,  <a href="/partners/google-cloud" className="text-blue-500">Google Cloud</a>
        , <a href="/partners/microsoft-azure" className="text-blue-500">Microsoft Azure</a>
        , and more. Our team has over 10 years of experience working with cloud native technologies and has built a reputation for delivering exceptional results for our customers.
        <br />
        <br />
        By staying up-to-date with the latest developments and trends in the industry, our team can ensures that we are always providing our clients with the best possible service, by using cutting-edge technologies such as AI and automation for CI/CD to enhance the functionality, performance and security of their applications.
        <br />
        <br />
        We employ Artificial intelligence (AI) and automation for continuous integration and continuous deployment (CI/CD) to provide significant benefits to organizations. This can help to improve the speed and efficiency of software development while also reducing the risk of errors and inconsistencies.
        <br />
        <br />
        If you are looking for a reliable and experienced partner to help you navigate the world of cloud computing, look no further than Mayhem Shield,           <a href="/lets-talk" className="text-blue-500"> Contact us </a>
        today. We would be honored to work with you and help you achieve your business goals. Please reach out to us today and let's discuss how we can help you to win a competitive advantage through successful cloud transformation and management with the power of AI. Together, we can help your business succeed in the cloud.
        </p>
    </div>
  );
};

export default Company;
