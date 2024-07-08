import React from "react";
import Ractangle from "../Ractangle";
import Heading from "../shared/Heading";
import { Link } from "react-router-dom";
import logo from './images/aws-partner-badge.png'

const AmazonWebService = () => {
  const top1 = `As a company, Mayhem Shield takes great pride in the fact that we are an Amazon Web Services (AWS) Trusted Partner and that our experience and knowledge of the platform spans over a decade. As early adopters of cloud computing, we have collaborated with Amazon Web Services (AWS) since the company's infancy. As a result, we have assisted businesses of all sizes in harnessing the power of the cloud to improve their risk management, cut costs, and enhance their competitiveness and agility.`
  const top2 = `Our group of more than one hundred AWS-certified engineers is committed to assisting you in accelerating the adoption of cloud computing and other new technologies in a safe and secure manner. We are aware that every company is different and has its own requirements, which is why we collaborate closely with our customers to devise individualized strategies that are specifically crafted to meet the prerequisites of each individual business. After that, we make use of our knowledge and the automated technologies at our disposal to simplify the migration process, reduce the amount of downtime that occurs, and ensure a seamless move to the cloud.`
  const top3 = `In addition to our migration services, we also provide continuous support and maintenance in order to guarantee that our customers are able to make full use of the capabilities offered by AWS. In addition to providing training and direction on how to use and administer tools and services based on AWS, we also offer ongoing monitoring and support to guarantee that your AWS environment is operating efficiently.`
  const top4 = `Our offerings cover a broad spectrum of AWS services, including the following:`
  const items = [
    {
      title: "Cloudamize",
      description: "a cloud-computing analytics platform that improves the speed, convenience, and accuracy of transitioning to Amazon Web Services (AWS) by providing high precision analytics and strong automation. Because we are an AWS Advanced Technology Partner, we have assisted thousands of companies in planning and carrying out migrations to AWS that are both intelligent and optimized."
    },
    {
      title: "Compute services",
      description: "including the Amazon Elastic Compute Cloud (EC2), the Elastic Container Service (ECS), and Lambda."
    },
    {
      title: "Storage services",
      description: "including the Amazon Simple Storage Service (S3), the Elastic Block Store (EBS), and Glacier."
    },
    {
      title: "Services related to networking",
      description: "including Amazon Virtual Private Cloud (VPC), Direct Connect, and Route 53"
    },
    {
      title: "Security services",
      description: "including Identity and Access Management (IAM), Certificate Manager, and Web Application Firewall (WAF), encryption, and penetration testing."
    },
    {
      title: "Services revolving around Artificial Intelligence and Machine Learning",
      description: "including   Amazon SageMaker, Amazon Transcribe, and Amazon Comprehend."
    },
    {
      title: "Services related to the Internet of Things (IoT) ",
      description: "including Amazon Web Services' IoT, Amazon Web Services' IoT Device Defender, and Amazon Web Services' IoT Analytics."
    },
    {
      title: <Link to="/partners/aws/landing2" className='text-blue-500 font-bold'> Migration Services </Link>,
      description: "migration services to help organizations move their existing applications and workloads to the cloud. This can include assessments, planning, and implementation services to ensure a smooth transition."
    },
    {
      title: "Big Data and Analytics",
      description: ": Range of services to help organizations process and analyze big data. This can include services such as data warehousing, data lakes, and machine learning."
    },

  ]
  return <div>
    <Ractangle text={"Partners"} />
    <div className="lg:mx-[8%] md:mx-5 sm:mx-5 font-merriweather mt-[24px]">
      <Heading black={"Amazon Web "} blue={"Service"} />
      <p className="font-merriweather mt-[24px] text-justify">{
        top1
      }
      </p>
      <p className="font-merriweather mt-[24px] text-justify">{
        top2
      }
      </p>
      <p className="font-merriweather mt-[24px] text-justify">{
        top3
      }
      </p>
      <div className="my-[40px] mx-auto ">
        <img className="rounded-xl mx-auto  w-fit" src="https://res.cloudinary.com/practicaldev/image/fetch/s--XhXh1mHh--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t8pcobwf085balynbs2f.png" alt="" />
      </div>
      <br />
      <p className="font-merriweather mt-[24px] text-justify">{
        top4
      }
      </p>
      <ul className='list-disc lg:mx-20 md:mx-5 sm:mx-5' >
        {
          items.map((item, i) => <>
            <li key={i} className=''>
              <p> <span className='font-bold w-fit'>{item.title}</span> : {item.description}</p>
            </li>
          </>)
        }

      </ul>
      <br />
      <p > <a href="/lets-talk" className='text-blue-500 font-bold'>Contact us</a> to learn more about how we can help you in your AWS cloud journey.</p>
      <br />
      <br />

    </div>
    <img src={logo} alt="" className="mx-auto w-20"/>
  </div>;
};

export default AmazonWebService;
