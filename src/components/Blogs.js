import React, { useState } from "react";
import { AiFillCaretUp } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import card1 from "../images and logos/card1.png";
import card2 from "../images and logos/card2.png";
import card3 from "../images and logos/card3.png";
import HeadingCenter from "./shared/HeadingCenter";
import {RxCross2} from "react-icons/rx";

const Blogs = () => {
  const newses = [
    {
      img: card1,
      labal1: "1 minute read",
      labal2: "30 March 2024",
      title:
        "Assess your cybersecurity startegy",
      description: `Is your cybersecurity strategy tailored to today's threat landscape or does it need an overhaul? Schedule a free consultation with one of our security experts to find out.
      `,
      link: "/blogs/blog1",
    },
    {
      img: card2,
      labal1: "5 minute read",
      labal2: "5 April 2024",
      title:
        // "Leveraging Google Cloud and Mayhemshield for Data Warehousing and Alalytics",
        "Secure your data with Mayhem Shield",

              // description: `Data warehousing and analytics are essential tools for businesses looking to extract insights and value from their data. By using a cloud-based data warehousing and analytics platform, companies can gain access to powerful tools and resources that can help them to better understand their data and make data-driven decisions.
              // Google Cloud is a leading provider of cloud-based data warehousing and analytics solutions. The Google Cloud platform offers a range of tools and services that can help companies to store, process, and analyze their data in real-time. Some of the key benefits of using Google Cloud for data warehousing and analytics include:
              // •	Scalability: Google Cloud's data warehousing and analytics solutions can be easily scaled up or down to meet the changing needs of a business. This allows companies to pay only for the resources they need, without being locked into a fixed-capacity solution.
              // •	Performance: Google Cloud's data warehousing and analytics solutions are designed to provide fast and reliable performance, making it easier for businesses to extract insights from their data in real-time.
              // •	Security: Google Cloud takes data security seriously and offers a range of features and tools to help protect sensitive data. This includes data encryption, identity and access management, and network isolation.
              // Mayhem Shield is a leading provider of data warehousing and analytics services, with experience in helping companies leverage the power of Google Cloud. The team at Mayhem Shield has the expertise and experience needed to help businesses design and implement a data warehousing and analytics solution that meets their specific needs and goals.
              // In summary, companies can benefit significantly by using Mayhem Shield in data warehousing and analytics through the use of Google Cloud. By leveraging the powerful tools and resources provided by Google Cloud and the expertise of Mayhem Shield, businesses can extract more value from their data and make better, data-driven decisions.


description:
`
In today's digital age, it's not a question of if a cyberattack will happen, but when. The recent incident involving Change Healthcare, a subsidiary of UnitedHealth Group, which led to over $2 billion in payouts, is a stark reminder of the pervasive threat landscape businesses navigate daily.

At Mayhem Shield, powered by XQ , we're not just about responding to cyber threats; we're about ensuring resilience and security even when attacks occur. Our solutions are designed to keep your data safe, no matter the cyber threat landscape.

Why Mayhem Shield is Your Best Defense:
Advanced Encryption: Utilizing XQ 's unparalleled encryption technology, we ensure that your data remains encrypted and inaccessible to unauthorized users, even in the event of a breach.
Proactive Defense Mechanisms: Our cloud security solutions are proactive, designed to detect vulnerabilities and threats before they can cause harm, ensuring your data's integrity and confidentiality.
Customized Security Posture: We understand that one size does not fit all in cybersecurity. That's why our solutions are tailored to fit the unique needs and challenges of your organization

Ensuring Data Safety Against All Odds:
Data Breaches: In the event of a data breach, our encryption ensures that sensitive information remains unreadable and secure.
Ransomware Attacks: Our proactive defense mechanisms help prevent ransomware from taking hold, but even if attackers breach your defenses, your data remains encrypted and safe.
Insider Threats: With strict access controls and encryption, sensitive data is safeguarded against unauthorized access, even from within.
Phishing Scams: By securing your data at its core, we minimize the damage potential of phishing scams aimed at stealing sensitive information.

Prepare for When, Not If
The reality of cyber threats requires a shift in mindset from reactive to proactive cybersecurity strategies. Mayhem Shield, powered by XQ, offers the advanced protection your organization needs to ensure that when attacks happen, your data remains safe and secure.

Don't wait for a cyberattack to reveal the vulnerabilities in your cybersecurity armor. Contact Mayhem Shield today and let us help you build a resilient defense that keeps your data protected, no matter what.

`,

      link: "/blogs/blog2",
    },
    {
      img: card3,
      labal1: "40 minute read",
      labal2: "21 December 2022",
      title:
        "Alliance Med Partners with Cloud Compute Provider to Migrate EHR System to the Cloud",
      description: `Alliance Med, a healthcare company, recently partnered with a Mayhem Shield a cloud compute provider to migrate its electronic health records (EHR) system to the cloud. This decision has allowed Alliance Med to realize a number of benefits, including reduced IT costs, improved data security, and greater flexibility in managing its EHR system.
One of the key benefits of the cloud migration for Alliance Med was the ability to reduce IT costs. By moving its EHR system to the cloud, Alliance Med was able to eliminate the need for expensive on-premises infrastructure and data centers. This allowed the company to save money on hardware, maintenance, and other IT costs.
In addition to cost savings, the cloud migration has also helped Alliance Med to improve data security. By storing its EHR data in the cloud, the company has been able to take advantage of advanced security features such as data encryption and network isolation. This has helped to protect sensitive patient data and ensure compliance with relevant regulations.
Finally, the cloud migration has given Alliance Med greater flexibility in managing its EHR system. By using a cloud-based platform, the company has been able to scale up or down its resources as needed, making it easier to handle changes in demand. The cloud also allows Alliance Med to access its EHR system from anywhere, making it more convenient for clinicians to use and manage.
In summary, Alliance Med's partnership with a cloud compute provider has allowed the company to migrate its EHR system to the cloud, resulting in reduced IT costs, improved data security, and greater flexibility. This successful cloud migration is a testament to the benefits that can be realized by healthcare companies when they leverage the power of cloud computing.
`,
      link: "/blogs/blog3",
    },
  ];
  const [blogTitle, setBlogTitle] = useState();
  const [i, seti] = useState();
  const [detals, setdetais] = useState();
  const [img, setimg] = useState();
  const readBlog = ([title, i, details, img]) => {
    setBlogTitle(title);
    seti(i);
    setdetais(details);
    setimg(img);
  };
  return (
    <div>
      <div className="">
        <HeadingCenter black={"Our  "} blue={"Latest News & Blogs"} />
        <div className="w-full  my-16  lg:flex md:flex  lg:justify-evenly md:justify-evenly sm:justify-center flex-wrap">
          {newses.map((news, i) => (
            <>
              <div
                className="z-0  w-[330px] mx-auto h-[510px] bg-white drop-shadow-lg mb-[28px] rounded"
                key={i}
              >
                <img
                  className="w-[350px] h-[187px] rounded"
                  src={news.img}
                  alt=""
                />

                <div className="px-[16px]">
                  <span className=" flex justify-between text-[#8F8F8F]">
                    <p className="">{news.labal1}</p>
                    <p>{news.labal2}</p>
                  </span>
                  <p className="text-[18px] font-bold font-ptSans mt-[16px]">
                    {news.title}
                  </p>
                  <p className="mt-[12px] text-[#8F8F8F] font-ptSans">
                    {news.description.slice(0, 130)}{"...."}
                  </p>
                </div>
                <div className="w-full h-[1px] bg-[#E4E4E4] mt-[24px]"></div>

                <span
                  onClick={() =>
                    readBlog([news.title, i, news.description, news.img])
                  }
                  className="flex items-center mt-[16px] text-[#00F]"
                >
                  <label htmlFor={`my-modal-${i}`} className="py-2 mx-[16px]">
                    Read more
                    {/* <p className="mx-[16px] ">Read More </p> */}
                  </label>
                  <BsArrowRight />
                </span>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="">
        {/* Put this part before </body> tag */}
        <input
          type="checkbox"
          id={`my-modal-${i}`}
          className="modal-toggle ]"
        />
        <div className="modal ">
          <div id={i} className="modal-box l max-w-5xl">
            <div className="flex items-center justify-between pt-5">
              <h3 id={`topBlog${i}`} className="font-bold text-lg">
                {blogTitle}
              </h3>
              <p className="text-2xl">
                <label htmlFor={`my-modal-${i}`}>
                  <RxCross2 />
                </label>
              </p>
            </div>
            <p id={`topOpBlog${i}`} className="py-4 text-justify">
              {detals}
            </p>
            <a href={`#topBlog${i}`}>
              <p className="text-5xl flex justify-end">
                <AiFillCaretUp />
              </p>
            </a>

            <div className="modal-action">
              <label
                htmlFor={`my-modal-${i}`}
                className="btn bg-white rounded py-none hover:bg-slate-200 text-black normal-case"
              >
                Done
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
