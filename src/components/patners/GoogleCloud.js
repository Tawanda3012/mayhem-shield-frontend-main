import React from "react";
import Ractangle from "../Ractangle";
import Heading from "../shared/Heading";
import gogle from "../../images and logos/google coud cover.png";
import { Link } from "react-router-dom";

const GoogleCloud = () => {
  return (
    <div className="]">
      <Ractangle text={"Partners"} />
      <div className="lg:mx-[8%] md:mx-5 sm:mx-5">
        <Heading black={"Google"} blue={"Cloud"} />
        <p className="font-merriweather mt-[24px] text-justify">
          Mayhem Shield has partnered with Google Cloud as the leading
          cloud-native solutions provider. We are helping organizations
          transform how they do business by empowering their unique journeys to
          Google Cloud. With more than 10 years of cloud native experience,
          Mayhem Shield has built an unmatched depth and breadth of expertise in
          cloud technologies and their application to business.
        </p>
        <div className="my-[40px] lg:w-1/2 mx-auto md:w-1/2">
          <img className="rounded-xl " src={gogle} alt="" />
        </div>
        <br />
        <div className="lg:mx-[8%] md:mx-5 sm:mx-0 border border-3 rounded-xl p-10 shadow-lg mb-10  ">
          <p className="font-merriweather mt-[24px] lg:text-xl md:text-xl sm:text-sm font-bold lg:text-center md:text-start sm:text-start">
            Take a 2-minute assessment to see where you’re at on the data intelligence journey – then receive a free guide to help you take the next step.
          </p>
          <a href="https://wcs-gcma-13778400366686586068.partnermarketingstudio.com/Home" target=" _blank" rel="noreferrer"
            className="">
            <button className="btn my-5 bg-white border-[2px] border-[#0000FF] text-[#0000FF] hover:bg-white  text-[16px] px- py-0.5 rounded-lg normal-case">
              Start Assessment
            </button>
          </a>
        </div>
        <p className="font-merriweather mt-[24px] text-justify">
          Mayhem Shield is a Consulting Partner with multiple Google Cloud certifications, and has helped deliver hundreds of
          Google Cloud migration and modernization projects for customers.
          Recently, Mayhem Shield and Google Cloud signed a Strategic
          Collaboration Agreement to accelerate global cloud adoption. The
          wide-ranging agreement will mean an acceleration of our joint
          go-to-market proposition, along with investments in Mayhem Shield
          software innovation, geographical expansion, and the launch of a
          Talent Pool.With a combination of cloud expertise and software-enabled
          automation, the Mayhem Shield cloud migration services are here to
          identify further opportunities where your organization can adopt cloud
          to evolve. Our smarter way to migrate helps reduce the cost and
          simplify the process of cloud migration, allowing you to reap the
          benefits and modern innovations of the cloud in the most efficient
          manner. By codifying our knowledge, maturity and experience, Mayhem
          Shield accelerates the time-to-value of the cloud so enterprises of
          any size can take full advantage and see improved results in no time
          at all. We pride ourselves on delivering extraordinary value to all of
          our customers, providing cloud migration services that can move our
          customers out of their on-premises data centers and onto a public
          cloud platform.
        </p>
      </div>
      <br />

      <Link to="https://cloud.google.com/find-a-partner/partner/mayhem-shield ">
        <img src="https://uploads-ssl.webflow.com/6466163b3cac996bb85176e8/649343960c7c9d51716e11de_gcp-no-outline.jpeg" alt="" className="mx-auto"/>
      </Link>
    </div>
  );
};

export default GoogleCloud;
