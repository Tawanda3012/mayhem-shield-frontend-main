import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import jetImage from "../../img/jet.png";
import NIST_logo from "../../img/NIST_logo.png";
import FedRamp_logo from "../../img/FedRamp-1.png";
import DFARS_logo from "../../img/DFARS.png";
import FIPS_logo from "../../img/FIPS140-2.png";
import CMMCcert_logo from "../../img/CMMCcert.png";
import CMMC from "../../img/ae06afe9e93e2462a7d92f5ee699c25d.png";

const ZeroTrust = () => {
  const imageUrl =
    "https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/712e1a71-0cd4-4cb1-a987-617308c602cb/Header2x.png?format=1500w";

  const GDRP_collapsData = [
    {
      title: "General Data Protection Regulation (GDPR)",
      subtitle:
        "General Data Protection Regulation (GDPR) compliance standards extend from the edge to the cloud, throughout the data lifecycle, and across the digital estate",
    },
    {
      title: "Cloud Hyper Scalars",
      subtitle: (
        <>
          Data is accessible by US authorities as a result of the Patriot and
          Cloud Act, risking GDPR & Schrems 2 compliance.
          <br />
          Organizations storing cloud data are exposed to EU- US data flow
          restrictions and must integrate additional technologies to prevent
          third - party unauthorized data access.
        </>
      ),
    },
    {
      title: "Data Sovereignty",
      subtitle: `Leveraging XQ, organizations can leverage cloud data while meeting GDPR data localization requirements and preventing unauthorized access outlined in the SHREMS II ruling.`,
    },
  ];

  const Turnkey_Compliances = [
    {
      title: "M365 Business Premium with XQ",
      subtitle:
        "Stay on Microsoft Commercial and avoid M365 GCC and GCC High workflow restrictions and price",
    },

    {
      title: "C3PAO Assessment Partnership",
      subtitle: (
        <>
          <p>
            XQ has partnered with CMMC Assessor Captiva Solutions to provide a
            fast track end to end solution guided by their experience.{" "}
          </p>
          <br />
          <br />
          <p>
            This unique 3 stage partnership guides an organization through 4
            Stages for the most frictionless CMMC certification available:
          </p>
          <ul className="mt-2 list-disc px-7">
            <li>Installation, usage, configuration</li>

            <li>Pre-Assessement</li>

            <li>Evaluation and Training</li>

            <li>CMMC Assessment</li>
          </ul>
        </>
      ),
    },
    {
      title: "Data Sovereignty",
      subtitle: (
        <>
          Every security event is logged across all networks and systems. See
          and control a geo-restricted holistic view of your data with instant
          alerts including where it was read, who read it and when.
          <br />
          <br />
          Revoke access to data and identities remotely
        </>
      ),
    },
    {
      title: "Data Level Protection",
      subtitle: (
        <>
          XQ protects data at the data level. We encrypt each data object
          separately. We set policies at the data level regarding who can read
          the data, when that data can be read, and where the data can be read.
          These policies travel with the data itself, and we track all
          interactions.
        </>
      ),
    },
  ];
  const Tracks = [
    {
      title: "Know where your sensitive data lives",
      subtitle: (
        <>
          The passport grants access and tracks contact wherever your data is
          accessed.
        </>
      ),
    },
    {
      title: "Ensure only the right identities have access",
      subtitle: (
        <>Dynamic remote provisioning outside of your control network.</>
      ),
    },
    {
      title: "Stop cyberattacks and insider threats",
      subtitle: (
        <>
          Access is determined at the data level, not the network level. Get the
          most granular control available over your data.
        </>
      ),
    },
    {
      title: "Prevent AI/ML data poisoning",
      subtitle: (
        <>
          Data chain of custody ensures AI models are not corrupted with fake
          data.
        </>
      ),
    },
    {
      title: "Remote control data access and provisioning",
      subtitle: (
        <>
          Revoke access to data and identities even to data outside of your
          network.
        </>
      ),
    },
  ];
  const SecurityBadge = ({ src, alt }) => (
    <img src={src} alt={alt} className="w-12 h-12 mr-2" />
  );

  const Statistic = ({ number, description }) => (
    <div className="px-4 text-center">
      <h3 className="text-3xl font-bold text-blue-300">{number}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
  const icons_data = [
    {
      img: "https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/34260a76-4598-4a2c-a1d2-7b31f34ae43c/email_icon..png",
      title: "Zero Trust Secure Email",
      hyperlink: "/solutions/ZeroTrustEmail",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/7d4bf122-1f50-439b-9311-0aeeec97c892/vault_icon.png",
      title: "Zero Trust Secure Data Vault",
      hyperlink: "/solutions/ZeroTrustVault",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/d1540abd-b932-4867-91e2-29e645567700/transfer_icon.png",
      title: "Zero Trust Data Gateway",
      hyperlink: "/solutions/ZeroTrustGateway",
    },
  ];
  const containerStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "left bottom",
    // width: '100%', // Adjust width as needed
    // height: '500px', // Adjust height as needed
    // transform: 'scale(1.2)', // 20% zoom
  };

  const dynamicText = [
    "Sovereignty",
    "Vault",
    "Gateway",
    "Email",
    "Compliance",
    "CMMC & GDPR",
    "Security",
    "Encryption - As - A - Service",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((prev) => (prev + 1) % dynamicText.length),
      2000
    );
    return () => clearInterval(intervalId);
  }, [index]);
  const certifications = [
    { name: "NIST", src: NIST_logo },
    { name: "FedRAMP", src: FedRamp_logo },
    { name: "DFARS", src: DFARS_logo },
    { name: "FIPS", src: FIPS_logo },
    { name: "Security Certification", src: CMMCcert_logo },
  ];

  const stats = [
    {
      number: "1,100+",
      description: "Defense contractors, C3PAOs and businesses trust PreVeil",
    },
    {
      number: "30,000+",
      description: "People use PreVeil every day to protect their data",
    },
    { number: "3", description: "Of the top 10 Primes rely on PreVeil" },
  ];

  return (
    <div>
      <div className="pb-20 h-fit lg:pb-52 lg:px-20">
        <div className="p-5 ">
          <h1 className="text-5xl font-medium lg:my-[30px]">
            Simple, Encrypted Email <br /> and File Collaboration
          </h1>
          <br />

          <h2 className="">
            The leading solution for CMMC, NIST 800-171 & ITAR compliance.
          </h2>
          {/* <p>
            XQ encryption-as-a-service lets you use applications and networks
            without trusting them with your data.
            <br />
            <br />
            Grow business globally while ensuring data compliance through secure
            encapsulation and digital rights management at the data level.
          </p> */}
          <NavLink
            to="https://api.leadconnectorhq.com/widget/booking/jvoFgs2jhSzXkld9mU4M"
            className="px-10 mt-10 text-white normal-case bg-blue-500 border-0 rounded-full btn"
          >
            FREE DEMO
          </NavLink>
        </div>
      </div>

      <div className="bg-[#101729] text-white py-12 px-4 md:px-8">
        <div className="container mx-auto">
          {/* Certifications */}
          <div className="flex flex-wrap items-center justify-center mb-8 md:justify-start">
            {certifications.map((cert, index) => (
              <img
                key={index}
                src={cert.src}
                alt={cert.name}
                className="h-12 mb-4 mr-4"
              />
            ))}
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-8 md:w-2/3 md:mb-0">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Trusted by the Defense Industrial Base
              </h2>
              <p className="mb-6 text-lg">
                Bringing military-grade security across multiple industries:
                <span className="underline">Aerospace + Defense</span>,{" "}
                <span className="underline">Education</span>,{" "}
                <span className="underline">Legal</span>, and Consumer-focused
                businesses.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <h3 className="text-3xl font-bold text-[#4FD1C5] mb-2">
                      {stat.number}
                    </h3>
                    <p className="text-sm">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fighter jet image */}
            <div className="md:w-1/3">
              <img src={jetImage} alt="Fighter Jet" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4  bg-[#06091C] md:p-8">
        <div className="overflow-hidden bg-blue-800 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 text-white bg-blue-800 md:w-1/2">
              <div className="flex mb-4">
                <img
                  src="/outlook-icon.png"
                  alt="Outlook"
                  className="w-8 h-8 mr-2"
                />
                <img
                  src="/gmail-icon.png"
                  alt="Gmail"
                  className="w-8 h-8 mr-2"
                />
                <img src="/email-icon.png" alt="Email" className="w-8 h-8" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#F36424] mb-4">
                PreVeil Drive
              </h1>
              <p className="mb-6 text-sm md:text-base">
                Encrypt, store and share files, on any device. Works with
                Windows Explorer, Mac Finder, and on browsers.
              </p>
              <button className="bg-transparent border-2 border-[#F36424] text-[#F36424] px-4 py-2 rounded hover:bg-[#F36424] hover:text-white transition duration-300">
                Learn More About PreVeil Email
              </button>
            </div>
            <div className="p-6 text-white bg-black md:w-1/2">
              <iframe
                src="https://player.vimeo.com/video/947545710?autoplay=1&controls=0&muted=1&loop=1&autopause=0"
                className="w-full aspect-video"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-[#06091C] md:p-8">
        <div className="overflow-hidden bg-blue-800 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 text-white bg-black md:w-1/2">
              <iframe
                src="https://player.vimeo.com/video/947545710?autoplay=1&controls=0&muted=1&loop=1&autopause=0"
                className="w-full aspect-video"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              ></iframe>
            </div>

            <div className="p-6 text-white bg-blue-800 md:w-1/2">
              <div className="flex mb-4">
                <img
                  src="/outlook-icon.png"
                  alt="Outlook"
                  className="w-8 h-8 mr-2"
                />
                <img
                  src="/gmail-icon.png"
                  alt="Gmail"
                  className="w-8 h-8 mr-2"
                />
                <img src="/email-icon.png" alt="Email" className="w-8 h-8" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#F36424] mb-4">
                PreVeil Drive
              </h1>
              <p className="mb-6 text-sm md:text-base">
                Encrypt, store and share files, on any device. Works with
                Windows Explorer, Mac Finder, and on browsers.
              </p>
              <button className="bg-transparent border-2 border-[#F36424] text-[#F36424] px-4 py-2 rounded hover:bg-[#F36424] hover:text-white transition duration-300">
                Learn More About PreVeil Email
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4  bg-[#06091C] md:p-8">
        <div className="overflow-hidden bg-blue-800 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 text-white bg-blue-800 md:w-1/2">
              <div className="flex mb-4">
                <img
                  src="/outlook-icon.png"
                  alt="Outlook"
                  className="w-8 h-8 mr-2"
                />
                <img
                  src="/gmail-icon.png"
                  alt="Gmail"
                  className="w-8 h-8 mr-2"
                />
                <img src="/email-icon.png" alt="Email" className="w-8 h-8" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#F36424] mb-4">
                PreVeil Drive
              </h1>
              <p className="mb-6 text-sm md:text-base">
                Encrypt, store and share files, on any device. Works with
                Windows Explorer, Mac Finder, and on browsers.
              </p>
              <button className="bg-transparent border-2 border-[#F36424] text-[#F36424] px-4 py-2 rounded hover:bg-[#F36424] hover:text-white transition duration-300">
                Learn More About PreVeil Email
              </button>
            </div>
            <div className="p-6 text-white bg-black md:w-1/2">
              <iframe
                src="https://player.vimeo.com/video/947545710?autoplay=1&controls=0&muted=1&loop=1&autopause=0"
                className="w-full aspect-video"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-4 mt-2git0">
        <div className="overflow-hidden bg-blue-800 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center md:flex-row a">
            <div className="flex flex-col justify-center p-6 text-white bg-blue-800 md:w-1/2">
              <h1 className="text-2xl md:text-3xl font-bold text-[#F36424] mb-4">
                Save up to 60% on CMMC,  DFARS, and ITAR compliance
              </h1>
              <p className="mb-6 text-sm md:text-base">
                Mayhem Shield is the leading CMMC compliance solution for Small
                to Medium Enterprises. Three licenses, detailed documentation,
                and access to our partner network for $249/m.
              </p>
              <button className="bg-transparent border-2 w-32 border-[#F36424] text-[#F36424] px-4 py-2 rounded hover:bg-[#F36424] hover:text-white transition duration-300">
                Get Started
              </button>
            </div>
            <div className="flex items-center p-6 bg-black mtext-white md:w-1/2">
              <img src={CMMC} alt="Fighter Jet" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 lg:mx-20 sm:mx-5 justify-evenly">
        <div className="text-2xl lg:w-1/3 md:w-2/5 sm:w-full">
          <h1 className="text-3xl font-medium">Secure Access</h1>
          <p>
            With real-time data governance, you can now access all of your data
            anywhere at any time applying access rules at the data level.
          </p>
        </div>
        <div className="text-2xl lg:w-1/3 md:w-2/5 sm:w-full">
          <h1 className="text-3xl font-medium">Proof Of Compliance</h1>
          <p>
            Secure chain of custody monitor each unit, so you can prove and
            track the movement of your data ensuring full compliance, reducing
            risk across environments.{" "}
          </p>
        </div>
        <div className="text-2xl lg:w-1/3 md:w-2/5 sm:w-full">
          <h1 className="text-3xl font-medium">Control Over All Your Data </h1>
          <p>
            {" "}
            You set the rules and decide where each individual unit of data is
            accessed, resulting in compliant data portability.{" "}
          </p>
        </div>
        <div className="text-2xl lg:w-1/3 md:w-2/5 sm:w-full">
          <h1 className="text-3xl font-medium"> Data Mobility </h1>
          <p>
            {" "}
            XQs platform offers unique encryption and compliance for each
            individual piece of data, so it can travel safely outside of your
            enclosed infrastructure.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <p className="text-2xl lg:w-[60%] mx-auto sm:w-[80%] text-justify font-serif">
        “Current and future cyber threats and attacks drive the need for a Zero
        Trust approach that goes beyond the traditional perimeter defense
        approach. The Department intends to implement distinct Zero Trust
        capabilities and activities as outlined in the strategy and associated
        Roadmap by FY27.”
        <br />
        <br />
        <span className="italic text-md">- Department of Defense</span>
      </p>

      <div
        className="flex flex-wrap gap-10 py-20 mt-10 lg:px-20 sm:px-10"
        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/fe191cf7-c3cc-4a4c-85e6-2db9879d20e3/background-27.png')",
        }}
      >
        <h1 className="w-3/5 text-3xl text-gray-50">
          Fast, Easy, Affordable Path To CMMC Certification
        </h1>
        <div className="text-white w-fi">
          <NavLink
            to="https://api.leadconnectorhq.com/widget/booking/jvoFgs2jhSzXkld9mU4M"
            className="px-10 mb-5 text-blue-500 normal-case bg-white border-0 rounded-full btn hover:bg-gray-50"
          >
            Start Now
          </NavLink>
          <br />
          <NavLink to="">Download One Pager</NavLink>
        </div>
      </div>
      <div className="py-20 bg-blue-600">
        <div className="p-5 mx-auto text-white lg:w-1/2 md:w-1/2 sm:w-full">
          <h1 className="mb-10 text-5xl">
            Turnkey Compliance And Certification Plug And Play Compliance
          </h1>
          {Turnkey_Compliances.map((data, i) => (
            <>
              <div
                key={i}
                tabIndex={0}
                className="bg-transparent border-b collapse collapse-plus"
              >
                <div className="text-xl font-medium collapse-title">
                  {data.title}
                </div>
                <div className="collapse-content">
                  <p>{data.subtitle}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="p-5 mx-auto text-black lg:w-1/2 md:w-1/2 sm:w-full">
        <h1 className="my-10 text-3xl">
          Track, Control, Protect & Manage Your Data In One Place
        </h1>
        {Tracks.map((data, i) => (
          <>
            <div
              key={i}
              tabIndex={0}
              className="bg-transparent border-b border-gray-500 collapse collapse-plus"
            >
              <div className="text-xl font-medium collapse-title">
                {data.title}
              </div>
              <div className="collapse-content">
                <p>{data.subtitle}</p>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="flex flex-wrap py-10 text-white bg-black lg:px-20 sm:px-5 justify-evenly">
        <div className="w-full text-xl max-w-[500px]">
          <h1 className="text-4xl">Mission Critical Network</h1>
          <br />
          Reliability and security are essential to infrastructure. Learn how to
          secure mission-critical networks.
        </div>
        <div className="mt-5">
          <img
            className="max-w-[400px] w-full"
            src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/9f6951b1-16e1-45ff-9ae6-4d3f54a040f3/Screen+Shot+2022-01-11+at+8.03.06+PM.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col items-center lg:p-10 sm:p-5">
        <h1 className="text-5xl">Upgrade To Zero Trust Data</h1>
        <Link
          to="https://api.leadconnectorhq.com/widget/booking/jvoFgs2jhSzXkld9mU4M"
          className="px-5 mt-5 text-white normal-case bg-blue-500 border-0 rounded-full btn w-fit"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default ZeroTrust;
