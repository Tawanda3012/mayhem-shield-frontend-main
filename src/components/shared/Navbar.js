import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images and logos/logo.png";
import { BsChevronDown, BsChevronRight, BsSearch } from "react-icons/bs";
import { PDFDownloadLink } from '@react-pdf/renderer';
import MakePDF from "../MakePDF";
import PDFFile from "../PDFFile";



const Navbar = () => {
  const navebarItems = (
    <>
      <li tabIndex={0}>
        <span>
          <NavLink to="/solutions" className="">
            Solutions
          </NavLink >
          <label
            tabIndex={0}
            className="flex justify-start items-center dropdown dropdown-bottom"
          >
            <BsChevronDown />
          </label>

        </span>
        <ul className="p-1 sm:left-24 md:left-28 lg:left-0 bg-[#f9fbffe8] dropdown-content menu  rounded-lg text-black drop-shadow-xl">
          <li>

            <span>
              <BsChevronDown />
              <NavLink to="/cloud-migration">Cloud Migration</NavLink >
            </span>
            <ul className="sm:left-10 md:left-32 lg:left-44 z-40">
              <li tabIndex={0}>
                <ul className="p-2 bg-[#ffffffdf] rounded-lg text-black drop-shadow-xl w-min">
                  <li>
                    <NavLink to="/solutions/zero mayhem migration">Zero Mayhem Migration</NavLink >
                  </li>
                  <li>
                    <a href="/solutions/zero-to-cloud-in-50-days">Zero to Cloud in 50 Days</a >
                  </li>
                  <li>
                    <NavLink to="/solutions/CloudLandingZone">Cloud Landing Zone</NavLink >
                  </li>
                  <li>
                    <NavLink to="/partners/aws/awsLanding">AWS Landing </NavLink >
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <span>
              <BsChevronDown />
              <NavLink to="/cloud-consulting">Cloud Consulting</NavLink >

            </span>
            <ul className="sm:left-10 md:left-32 lg:left-44 z-40">
              <li tabIndex={0}>
                <ul className="p-2 bg-[#ffffffdf] rounded-lg text-black drop-shadow-xl w-max">
                  <li>
                    <NavLink to="/solutions/CloudAdaptionWorkshop">Cloud Adaption Workshop</NavLink >
                  </li>
                  <li>
                    <NavLink to="/solutions/CloudGovernanceFramework">Cloud Governance Framework </NavLink >
                  </li>
                  <li>
                    <NavLink to="/solutions/CloudTransformationPrimer">Cloud Transformation Primer</NavLink >
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <span>
              <BsChevronDown />
              <NavLink className="" to="/cloud-security">Cloud security</NavLink >

            </span>
            <ul className="sm:left-10 md:left-32 lg:left-44 z-40">
              <li tabIndex={0}>
                <ul className="p-2 bg-[#ffffffdf] rounded-lg text-black drop-shadow-xl w-max">
                  <li>
                    <NavLink to="/solutions/ZeroTrust">Zero Trust</NavLink >
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <span>
              <BsChevronDown />
              <NavLink to="/application-development">Application Development</NavLink >
            </span>
            <ul className="sm:left-10 md:left-32 lg:left-44 z-40">
              <li tabIndex={0}>
                <ul className="p-2 bg-[#ffffffdf] rounded-lg text-black drop-shadow-xl w-max">
                  <li>
                    <NavLink to="/solutions/TheKubernetesLaunchpad">The Kubernetes Launchpad </NavLink >
                  </li>
                  <li>
                    <NavLink to="/solutions/ServerlessArchitecture">Serverless Architecture <br /> Services</NavLink >
                  </li>
                  <li>
                    <NavLink to="/solutions/ZeroMayhemModernization">Zero Mayhem Modernization</NavLink >
                  </li>
                  <li>
                    <NavLink to="/solutions/ApplicationStrategy">Application Strategy</NavLink >
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <span>
              <BsChevronDown />
              <NavLink to="cloud-and-data-analysis">Cloud & Data Analytics</NavLink >
            </span>
            <ul className="sm:left-10 md:left-32 lg:left-44 z-40">
              <li tabIndex={0}>
                <ul className="p-2 lg:hidden sm:block md:hidden    bg-[#ffffffdf] rounded-lg text-black drop-shadow-xl  w-52 text-justify">
                  <li>
                    <NavLink to="/solutions/MultiTenantSecurityInTheCloud">Multi-tenant Security <br /> in the Cloud </NavLink >
                  </li>
                  <li className="">
                    <NavLink to="/solutions/MachineLearningAndAdvancedAnalytics">Machine Learning and <br /> Advanced Analytics</NavLink >
                  </li>
                  <li>
                    <NavLink to="/solutions/DevOpsEssentials">DevOps Essentials</NavLink >
                  </li>
                  <li>
                    <NavLink to="/solutions/DataOpsAsAService">DataOps as a Service</NavLink >
                  </li>
                  <li>
                    <NavLink to="/solutions/CloudNativeDataLakes">Cloud Native Data Lakes</NavLink >
                  </li>
                  <li>
                    <NavLink to="/solutions/DatabaseandDataWarehouseMigration">Database and Data <br /> Warehouse Migration</NavLink >
                  </li>
                  <li>
                    <NavLink to="/solutions/ZeroTrustNetworking">Zero Trust Networking</NavLink >
                  </li>
                </ul>
                <ul className="p-2 md:block sm:hidden lg:block bg-[#ffffffdf] rounded-lg text-black drop-shadow-xl  w-auto text-justify">
                  <li>
                    <NavLink to="/solutions/MultiTenantSecurityInTheCloud">Multi-tenant Security  in the Cloud </NavLink >
                  </li>
                  <li className="">
                    <NavLink to="/solutions/MachineLearningAndAdvancedAnalytics">Machine Learning and  Advanced Analytics</NavLink >
                  </li>
                  <li>
                    <NavLink to="/solutions/DevOpsEssentials">DevOps Essentials</NavLink >
                  </li>
                  <li>
                    <NavLink to="/solutions/DataOpsAsAService">DataOps as a Service</NavLink >
                  </li>
                  <li>
                    <NavLink to="/solutions/CloudNativeDataLakes">Cloud Native Data Lakes</NavLink >
                  </li>
                  <li>
                    <NavLink to="/solutions/DatabaseandDataWarehouseMigration">Database and Data Warehouse Migration</NavLink >
                  </li>
                  <li>
                    <NavLink to="/solutions/ZeroTrustNetworking">Zero Trust Networking</NavLink >
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <NavLink className="ml-7" to="/devops">DevOps</NavLink >
          </li>
          <li>
            <span>
              <BsChevronDown />
              <NavLink to="/cloud-management">Cloud Management</NavLink >
            </span>
            <ul className="sm:left-10 md:left-32 lg:left-44 z-40">
              <li tabIndex={0}>
                <ul className="p-2 bg-[#ffffffdf] rounded-lg text-black drop-shadow-xl w-max">
                  <li>
                    <NavLink to="/solutions/CoreManagedServices">Core Managed Services</NavLink >
                  </li>
                  <li>
                    <NavLink to="/solutions/ZeroMayhem">Zero Mayhem</NavLink >
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li tabIndex={0}>
        <span>
          <NavLink to="/partners" className="">
            Partners
          </NavLink >
          <label
            tabIndex={0}
            className="flex justify-start items-center"
          >
            <BsChevronDown />
          </label>
        </span>
        <ul className="p-2 bg-[white] rounded-lg text-black drop-shadow-xl">
          <li className="flex">
            <span>
              {/* <BsChevronDown /> */}
              <NavLink to="/partners/google-cloud">Google Cloud</NavLink >
            </span>
          </li>
          <li>
            <a href="https://wcs-gcwa-13778400366686586068.partnermarketingstudio.com/Home">Google Workspace</a >
          </li>
          <li>
            <a href="/partners/aws">Amazon Web Service</a >
          </li>
          <li>
            <a href="/partners/microsoft-azure">Microsoft Azure</a >
          </li>
        </ul>
      </li >
      <li>
        <NavLink to="/company">Company</NavLink >
      </li>
      <li>
        <span>
          <NavLink to="/content-hub">Content Hub</NavLink >

          <label
            tabIndex={0}
            className="flex justify-start items-center"
          >
            <BsChevronDown />
          </label>
        </span>
        <ul className="p-2 bg-[white] rounded-lg text-black drop-shadow-xl">
          <li className="flex">
            <NavLink to="https://cloud.google.com/find-a-partner/partner/mayhem-shield">Under Construction</NavLink >
          </li>
        </ul>

      </li>
      <li>
        <NavLink to="/careers">Careers</NavLink >
      </li>
      {/* <li>
        <NavLink to="/cloud-maturity">Cloud Maturity</NavLink >
      </li> */}
      <li>
        <NavLink to="/shop">Shop</NavLink >
        {/* <PDFDownloadLink 
          document={<PDFFile  result={{name:"kader"}}/>} filename="FORM">
          {({ loading }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
        </PDFDownloadLink> */}
      </li>
    </>
  );
  return (
    <div className="lg:max-w-[1440px]   mx-auto  ">
      <div id="top" className="navbar fixed z-40  p-[25px]  bg-base-100 flex lg:justify-evenly justify-between font-ptSans">
        <div className="">
          <div className="dropdown ">
            <label tabIndex={0} className="btn ml-[-20px] btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul

              tabIndex={0}
              className=" bg-[#fafff9f1] menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box sm:w-[90vw]"
            >
              {navebarItems}
            </ul>
          </div>
          <NavLink
            to="/"
            className="btn btn-ghost normal-case hover:bg-white text-xl"
          >

            <img
              src={logo}
              className="lg:w-[146px]  sm:w-[100px] lg:h-[44px]     "
              alt="M Shield"
            />
          </NavLink >
        </div>
        <div className=" hidden md:flex">
          <ul className="menu menu-horizontal px-1 z-10">{navebarItems}</ul>
        </div>
        <div className="">
          {/* <span className="mr-[28px] text-[18px]">
            <BsSearch />
          </span> */}
          <NavLink to="lets-talk" className="">
            <button className="btn bg-white border-[2px] border-[#0000FF] text-[#0000FF] hover:bg-white  text-[16px] px- py-0.5 rounded-lg normal-case">
              Let's Talk
            </button>
          </NavLink >
        </div>
      </div>
    </div>
  );
};

export default Navbar;
