import React from "react";
import logo from "../../images and logos/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { SiLinktree } from  'react-icons/si'

const Footer = () => {
  return (
    <div className="bg-[#F9F9F9] min-h-[514px] mt-[80px]">
      <div className="up-section mb-[50px] grid lg:grid-cols-3 lg:mx-[168px] md:mx-[-30px] lg:pt-[120px] pt-[100px] md:grid-cols-3 sm:mx-1">
        <a href="/">
          <div className="mb-[100px]">
            <img
              src={logo}
              className="lg:w-[220px] lg:h-[62px] sm:ml-20 mx-auto lg:ml-0 w-[200px] "
              alt="Myshem"
            />
          </div>
        </a>
        <div className="flex justify between mx-5">
          <div className="">
            <a href="solutions">
              <h1 className="text-lg font-bold text-[#212121] lg:ml-[-50px] font-serif">
                Solutions
              </h1>
            </a>
            <ul className="text-[#5B5B5B] font-[16px] w-[230px] lg:ml-[-50px]">
              <li>
                <a href="/cloud-migration">Cloud Migration</a>
              </li>
              <li>
                <a href="/cloud-consulting">Cloud Consulting</a>
              </li>
              <li>
                <a href="/cloud-security">Cloud Security</a>
              </li>
              <li>
                <a href="/application-development">
                  Cloud Application Development
                </a>
              </li>
              <li>
                <a href="/cloud-and-data-analysis">Cloud & Data Analysis</a>
              </li>
              <li>
                <a href="/devops">DevOps</a>
              </li>
              <li>
                <a href="/cloud-management">Cloud Management</a>
              </li>
            </ul>
          </div>
          <div className="  md:ml-10">
            <a href="/company">
              <h1 className="text-lg font-bold text-[#212121] font-serif">
                About
              </h1>
            </a>
            <ul className="text-[#5B5B5B] w-[115px] font-base">
              <li>
                <p>
                  <a href="/careers">Careers</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/lets-talk">Contact Us</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/content-hub">Content Hub</a>
                </p>
              </li>
              {/* <li>
                <p>
                  <a href="/developer">Developer's Info</a>
                </p>
              </li> */}
              <li>
                <p>
                  <a href="/term-of-service">Term of service</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/pivacy-policy">Privacy Policy </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/Shop">Shop </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/login">Login </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:block  hidden "></div>
      </div>
      <div className="w-[80vw]  h-[1px] mx-auto bg-[#E7E7E7] mb-[27px]" />
      <div className="down-section  h-[100px]   my-8]">
        <div className="  lg:flex md:flex lg:flex-row md:flex-col-revarse justify-center sm:flex  items-center w-fit sm:flex-col-reverse mx-auto ">
          <div className="mb-5">
            <p className=" ">© 2024, Mayhem Shield. All Rights Reserved</p>
          </div>
          <div className=" mb-5 lg:ml-0 md:ml-0 sm:ml-[10px] lg:mt-0 md:mt-0 mt-5 ">
            <div className="flex text-[30px] w-[300px]  mx-auto lg:ml-[20%] ">
              <p className="mx-auto">
                <a
                  href="https://www.youtube.com/@mayhemshield819"
                  target="_blank"
                >
                  <BsYoutube />
                </a>
              </p>
              <p className="mx-auto">
                <a href="https://www.instagram.com/mayhemshield2" target="_blank">
                  <AiOutlineInstagram />
                </a>
              </p>
              <p className="mx-auto">
                <a
                  href="https://www.facebook.com/profile.php?id=100089234705334"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </p>
              <p className="mx-auto">
                <a href="https://twitter.com/MayhemShield" target="_blank">
                  <BsTwitter />
                </a>
              </p>
              <p id="down" className="mx-auto">
                <a href="https://www.linkedin.com/company/mayhem-shield/" target="_blank">
                  <FaLinkedinIn />
                </a>
              </p>
              <p id="down" className="mx-auto">
                <a href="https://linktr.ee/mayhemshield1" target="_blank">
                  <SiLinktree />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
