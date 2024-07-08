import React from "react";
import googleLogo from "../images and logos/image-removebg-preview.png";
import amazonLogo from "../images and logos/amazonLogo-removebg-preview.png";
import microsoftLogo from "../images and logos/microsoft.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import homeimg from "../images and logos/home.png";
import {
  BsArrowLeftSquare,
  BsArrowRight,
  BsArrowRightSquare,
} from "react-icons/bs";
import Heading from "./shared/Heading";
import img from "../images and logos/company.png";
import HeadingCenter from "./shared/HeadingCenter";
import user1 from "../images and logos/New folder/jumpstory-download20230106-022601.jpg";
import user2 from "../images and logos/New folder/jumpstory-download20230106-013059.jpg";
import user3 from "../images and logos/New folder/jumpstory-download20230106-023052.jpg";
import card1 from "../images and logos/card1.png";
import card2 from "../images and logos/card2.png";
import card3 from "../images and logos/card3.png";
import {Services} from "./ApplicationDevelopment"
const Home = () => {
  const partners = [
    {
      Name: "Google Cloud",
      description:
        " Mayhem Shield has partnered with Google Cloud as the leading cloud-native solutions provider...",
      link: "/partners/google-cloud",
    },
    {
      Name: "Amazon Web Service",
      description:
        " At Mayhem Shield, we have over a decade of experience and expertise on AWS. Today we are recognized...",
      link: "/partners/aws",
    },
    {
      Name: "Microsoft Azure",
      description:
        " Mayhem Shield’s strategic partnership with Microsoft and deep Azure expertise make our Azure-only...",
      link: "/partners/microsoft-azure",
    },
  ];
  const blogs = [
    {
      img: user1,
      text: `“Mayhem Shield has been a crucial contributor to BMC's success in delivering value to our clients through the use of information technology, including machine learning and data analytics. Together, we have been able to address challenging business issues and develop tools that increase revenue, improve operational efficiency, and reduce costs. The combination of skills and motivation within both teams has been instrumental in our achievements.”`,
      Name: "Jason Newman - BMC",
    },
    {
      img: user2,
      text: `“Mayhem Shield is widely recognized as a leader in cloud migration services. When it comes to understanding and managing the process of moving to the cloud, they are the first team we turn to. During our own migration process, they provided us with valuable discovery and recommendation services, helping us to identify the most efficient and cost-effective solutions. Their expertise and guidance were instrumental in the successful migration of our systems from on-premises to the cloud, allowing us to save on costs and resources.”`,
      Name: "Claudine Wilson - Alliance Med  ",
    },
    {
      img: user3,
      text: `“Mayhem Shield has been an invaluable partner for us as we modernized our workspace and migrated to the cloud. Their team is highly skilled and knowledgeable, and they were able to provide us with expert guidance and support throughout the entire process. Their discovery and recommendation services were particularly helpful as we navigated the complex world of cloud migration. In the end, we were able to achieve a modern, efficient workspace and a seamless transition to the cloud, thanks to the services provided by Mayhem Shield. We highly recommend their team for anyone looking to modernize their workspace and migrate to the cloud.”`,
      Name: "Andrew Acosta - BOM",
    },
  ];
  const newses = [
    {
      img: card1,
      labal1: "1 minute read",
      labal2: "30 March 2024",
      // title: "Understanding Cloud Migration and the Role of service providers like Mayhem Shield",
      title: "Assess your cybersecurity startegy",

      description:
        "Is your cybersecurity strategy tailored to today's threat landscape or does it need an overhaul? Schedule a free consultation with one of our security experts to find out.",
      link: "/blogs/blog1",
    },
    {
      img: card2,
      labal1: "5 minute read",
      labal2: "5 April 2024",
      title: "Secure your data with Mayhem Shield",
      description:
        "In today's digital age, it's not a question of if a cyberattack will happen, but when. The recent incident involving Change Healthcare, a subsidiary of UnitedHealth Group, which led to over $2 billion in payouts, is a stark reminder of the pervasive threat landscape businesses navigate daily.",
      link: "/blogs/blog2",
    },
    {
      img: card3,
      labal1: "3 minute read",
      labal2: "21 October 2022",
      title: "Alliance Med Partners with Cloud Compute Provider to Migrate EHR System to the Cloud",
      description:
        "Alliance Med, a healthcare company, recently partnered with a Mayhem Shield a cloud compute provider to migrate its electronic health ",
      link: "/blogs/blog3",
    },
  ];
  const logos = [googleLogo, amazonLogo, microsoftLogo];

  return (
    <div className="">
      <div className="mt-[30px] mb-[40px] lg:px-[8%] sm:px-0  md:px-[2%] md:mx-5 sm:mx-5 lg:flex md:flex sm:flex sm:flex-col-reverse md:flex-row lg:flex-row circlebg bg-right-top">
        <div className="">
          <span className="text-[52px]  font-bold font-ptSans">
            <p className="text-[#00f]">
              Modernizing <br /> <span className="text-black">Business</span>
            </p>
          </span>
          <p className="text-[#5B5B5B] lg:w-[502px] md:w-[50%] sm:w-[90%]">
            The world's top independent multi-cloud services provider is Mayhem
            Shield. Our goal is to fulfill the cloud's promise and create
            exceptional value for our clients.
          </p>
          <a href="/lets-talk">
            <p className="btn normal-case mt-[62px] hover:bg-blue-500 bg-[#00f] text-white px-[52px] rounded border-none ">
              Let's Talk
            </p>
          </a>
        </div>
        <div className="lg:w-1/2 md:w-1/2 sm:w-full lg:flex-row md:flex-row sm:flex-col">
          <img src={homeimg} alt="" />
        </div>
      </div>
      <div className="px-8%  pt-[100px]">
        <div className="w-content mx-auto">
          <HeadingCenter black={"Our Cloud "} blue={"Partners"} />
        </div>
        <div className="w-full  my-16 justify-evenly  lg:flex md:flex   flex-wrap ">
          {partners.map((partner, i) => (
            <>
              <div
                key={i}
                className="w-[330px]  h-[288px]  bg-white rounded-xl  drop-shadow-lg mx-auto lg:my-20 md:my-20 sm:my-[110px]  flex  flex-col justify-end"
              >
                <div className="avatar    top-[-25px] drop-shadow-xl">
                  <div className="w-[117px] rounded-full relative bg-white mx-auto">
                    <div className=" flex justify-center items-center w-[67px]  mt-[32px] ml-[25px]">
                      <img className="" src={logos[i]} alt="" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-black font-ptSans text-[24px] font-bold">
                  {partner.Name}
                </p>
                <p className="text-[#8F8F8F] w-[291px]  text-[14px] text-center mx-auto font-merriweather mb-[40px] mt-[16px]">
                  {partner.description}
                </p>
                <div className="w-[302px] h-[20px] bg-[#DDE3E4] mx-auto" />
                {/* devider*/}
                <a
                  href={partner.link}
                  className="flex items-center justify-center text-[#0000FF]"
                >
                  <p className="mr-2 text-base my-[16px]">Learn More</p>
                  <AiOutlineArrowRight />
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="lg:px-[8%] md:px-5 sm:px-5 dotted-2 lg:bg-left md:bg-left-top sm:bg-left-top">
        <div className="flex sm:flex-col-reverse lg:flex-row md:flex-row-reverse">
          <div className="md:w-1/2 mx-auto pb-5">
            <Heading black={"About "} blue={"Mayhem Shield"} />
            <p className="font-merriweather">
              Welcome to Mayhem Shield, the world's top independent multi-cloud services provider. We are dedicated to helping organizations of all sizes modernize their businesses and take full advantage of the benefits of the cloud.
              <br />
              <br />
              {/* At Mayhem Shield, we understand that the cloud is not just a buzzword, it is a game-changer for businesses. The cloud offers organizations the opportunity to scale their operations, improve security, and drive innovation. However, many organizations struggle to take full advantage of the cloud's potential due to a lack of expertise and resources. That's where we come in. */}
              {/* <br />
              <br /> */}
              Our team of experts has years of experience in cloud migration and management. We have the knowledge and skills to help organizations of any size navigate the complexities of the cloud and unlock its full potential. We work closely with our clients to understand their unique business needs and goals, and then develop a customized plan to help them modernize their operations and take full advantage of the cloud.
              <br />
              <br />
              {/* Our services include cloud migration, cloud management, cloud security, and cloud optimization. We use our expertise and automation tools to streamline the migration process and minimize downtime. We also provide ongoing support and maintenance to ensure that our clients can fully leverage the power of the cloud.
              <br />
              <br /> */}
              {/* At Mayhem Shield, our goal is to fulfill the cloud's promise and create exceptional value for our clients. We are committed to helping organizations modernize their businesses and stay ahead of the curve in today's fast-paced business environment.
              <br />
              <br /> */}
              Don't hesitate to Contact us for a free consultation and let us show you how we can help you modernize your business and unlock the full potential of the cloud.
            </p>
            <br />
            <a
              href="/company"
              className="btn btn-sm mt-[24px] normal-case bg-[#00f] rounded-lg border-none text-white btn-md w-[200px] h-[50px]"
            >
              Learn More
            </a>
          </div>
          <div className="w-1/2 flex justify-center md:w-1/2 mt-5 h-fit items-center mx-auto">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <Services/>

      <div className="lg:pr-[165px] md:pr-5 sm:pr-5 my-[100px] py-[100px]  bg-[#F9F9F9] sm:hidden lg:block md:block">
        <HeadingCenter black={"What "} blue={"Users Saying"} />
        <div className="carousel w-full ]">
          {blogs.map((blog, i) => (
            <>
              <div
                key={i}
                id={`slide${i + 1}`}
                className="carousel-item relative w-full"
              >
                <img src={blog.img} alt="" className="max-w-[700px] max-h-[500px]" />

                <div className="absolute flex justify-between bottom-1 right-5 text-[36px]">
                  <a
                    href={`#slide${i === 0 ? blogs.length : i}`}
                    className="border  mr-[30px]"
                  >
                    <BsArrowLeftSquare />
                  </a>
                  <a
                    href={`#slide${i + 1 === blogs.length ? 1 : i + 2}`}
                    className="border "
                  >
                    <BsArrowRightSquare />
                  </a>
                </div>
                <div className="absolute lg:w-[750px] lg:right-0  h-fit  lg:top-1/2 md:bottom-10 transform lg:-translate-y-1/2 md:-translate-y-0 p-[40px] bg-white drop-shadow-lg">
                  <p>{blog.text}</p>
                  <br />
                  <p className="t-[36px] ">- {blog.Name}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      {/* lettest news and blogs */}
      <div className="">
        <HeadingCenter black={"Our  "} blue={"Latest News & Blogs"} />
        <div className="w-full  my-16  lg:flex md:flex  justify-evenly flex-wrap">
          {newses.map((news, i) => (
            <>
              <div
                className="w-[330px] mx-auto h-[502px] bg-white drop-shadow-lg mb-[28px] rounded"
                key={i}
              >
                <img
                  className="w-[350px] h-[187px] rounded"
                  src={news.img}
                  alt=""
                />
                <div className="px-[16px]">
                  <span className="flex justify-between text-[#8F8F8F]">
                    <p>{news.labal1}</p>
                    <p>{news.labal2}</p>
                  </span>
                  <p className="text-[18px] font-bold font-ptSans mt-[16px]">
                    {news.title}
                  </p>
                  <p className="mt-[12px] text-[#8F8F8F] font-ptSans">
                    {news.description.slice(0, 130)}{" "}
                  </p>
                </div>
                <div className="w-full h-[1px] bg-[#E4E4E4] mt-[24px]"></div>
                <a href="blogs">
                  <span className="flex items-center mt-[16px] text-[#00F]">
                    <p className="mx-[16px] ">Read More </p>
                    <BsArrowRight />
                  </span>
                </a>
              </div>
            </>
          ))}
        </div>
        <a href="/blogs">
          <div className="w-fit mx-auto mb-[100px]">
            <p className="btn normal-case hover:bg-blue-500 bg-[#00f] text-white px-[52px] rounded border-none ">
              View All
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
