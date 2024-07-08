import React, { useEffect, useRef, useState } from "react";
import Ractangle from "./Ractangle";
import phone from "../images and logos/logos/phone.svg";
import massage from "../images and logos/logos/message.svg";
import info from "../images and logos/logos/info.svg";
import question from "../images and logos/logos/question.svg";
import Segments from "./shared/Segments";
import HeadingCenter from "./shared/HeadingCenter";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ChatPopUp from "./ChatPopUp";
// import styled from 'styled-components';









// export const Contact = styled.div`
// background: transparent;
// `



const LetsTalk = () => {
  const [loading, setLoading] = useState(false);
  const [filepath, setFilepath] = useState("");
  const [msg, setToast] = useState("");
  const first_nameRef = useRef("");
  const last_nameRef = useRef("");
  const emailRef = useRef("");
  const numberRef = useRef("");
  const messageRef = useRef("");
  const fileRef = useRef("");

  const refs = [first_nameRef, last_nameRef, emailRef, numberRef];
  const notify = (msg) => toast(msg);


  const handlesubmit = async (event) => {
    event.preventDefault();
    notify();
    const firstName = first_nameRef.current.value;
    const lastName = last_nameRef.current.value;
    const email = emailRef.current.value;
    const number = numberRef.current.value;
    const message = messageRef.current.value;
    const files = fileRef.current.files;

    // console.log(files[0]);

    const msg = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      number: number,
      message: message,
    };
    const formData = new FormData();
    formData.append("user_file", files[0]);

    const data = JSON.stringify(msg);
    formData.append("msg", data);
    try {
      await axios
        .post(
          "https://subsequent-barbie-wanna-be-pro.koyeb.app/sendEmail",
          // "http://localhost:8000/sendEmail",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => notify(response.data));
    } catch (err) {
      notify(err.message);
    }

    document.getElementById("my-form").reset();
  };

  const inputs = [
    {
      type: "text",
      placeholder: "Your First Name",
      ref: "first_nameRef",
    },
    {
      type: "text",
      placeholder: "Your Last Name",
      ref: "last_nameRef",
    },
    {
      type: "email",
      placeholder: "Enter your email address",
      ref: "emailRef",
    },
    {
      type: "tel",
      placeholder: "Phone Number",
      ref: "numberRef",
    },
  ];
  const segments = [
    {
      title: {
        black: "Cloud ",
        blue: "Expertise",
      },
      details: [
        ` With a combination of cloud expertise and software-enabled automation`,
        ` The Mayhem Shield cloud migration services are here to identify further opportunities where your organization can adopt cloud to evolve.`,
        ` The Mayhem Shield cloud migration services are here to identify further opportunities where your organization can adopt cloud to evolve.`,
      ],
    },
    {
      title: {
        black: "Simplify  ",
        blue: "Process",
      },
      details: [
        ` Our smarter way to migrate helps reduce the cost and simplify the process of cloud migration, allowing you to reap the benefits and modern innovations of the cloud in the most efficient manner.`,
      ],
    },
    {
      title: {
        black: "Maturity &   ",
        blue: "Experience",
      },
      details: [
        ` By codifying our knowledge, maturity and experience, Mayhem Shield accelerates the time-to-value of the cloud so enterprises of any size can take full advantage and see improved results in no time at all. `,
        `We pride ourselves on delivering extraordinary value to all of our customers, providing cloud migration services that can move our customers out of their on-premises data centers and onto a public cloud platform.`,
      ],
    },
  ];



 

  
  return (
    <div>
      <ToastContainer />
      <Ractangle text={"Let's Talk"} />
      
      <div className="bg-[#F9F9F9] md:pb-10 sm:pb-20  mb-[100px] pt-[60px] lg:pb-[120px]">
        <div className="lg:mx-[8%] md:mx-5 sm:mx-5">
          <div className=" mx-auto w-fit">
            <span className="mx-auto">
              <HeadingCenter black={"Contact"} blue={"Us"} />
            </span>
            <p className="font-merriweather  mt-[30px] text-[#212121] lg:text-[16px] md:text-[16px] sm:text-[14px] ">
              Thanks for your interest in Mayhem Shield. We'd love to hear from
              you!
            </p>
          </div>
        </div>
        <Contact/>
      </div>
      <div className="block lg:flex lg:mx-[8%] md:mx-5 sm:mx-5 lg:mb-[100px] md:mb-[100px] sm:mb-[30px]">
        <div className="lg:w-1/2 md:w-auto sm:w-auto  font-ptSans bg-white drop-shadow-sm border rounded pt-[24px] mt-3">
          <form id="my-form" onSubmit={handlesubmit}>
            {inputs.map((input, i) => (
              <>
                <div key={i} className="form-control   mt-[20px]  mx-[24px]">
                  <label className="label ">
                    <span className="label-text text-[16px]">
                      {input.placeholder}
                    </span>
                  </label>
                  <input
                    ref={refs[i]}
                    type={input.type}
                    required
                    placeholder={`Enter ${input.placeholder}`}
                    className="input input-bordered w-full rounded "
                  />
                </div>
              </>
            ))}
            <div className="mx-[24px] mt-[20px]">
              <span className="label-text text-[16px]">
                How can we help you?
              </span>
              <textarea
                ref={messageRef}
                required
                rows="5"
                className="textarea textarea-bordered  rounded w-full"
              />
            </div>
            <div className="mx-[24px]  mt-[20px]">
              <span className="label-text text-[16px]">
                Choose a file to attach (doc,svg,pdf) not more then 10MB
              </span>
              <br />
              <input
                ref={fileRef}
                id="file"
                type="file"
                class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-lg file:border-[#c8cdde]
      file:text-sm file:font-semibold
      file:bg-white file:text-[#6F7380]
      hover:file:bg-violet-100
    "
              />
              <br />
              <div className="flex">
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox mr-5"
                />
                <p className="text-[#8A8B8F] font-ptSans">
                  Agree term and
                  <a href="/privacy-policy">
                    <span className="text-black">Privacy Policy</span>
                  </a>
                </p>
              </div>
            </div>
            <button
              id="active"
              disabled={loading}
              className={`btn normal-case  hover:bg-blue-500 bg-[#00f] text-white text-[26px] font-bold font-ptSans w-full mt-[29px] px-[52px] rounded border-none `}
            >
              {/* {
               loading===false?"Submit":"Submitting"
              } */}
              submit
            </button>
          </form>
        </div>
        <div className="w-[30px] h-[20px]" />
        <div className="lg:w-1/2 md:w-auto sm:w-automin-h-20  ">
          {segments.map((segment, i) => (
            <div key={i}>
              <Segments title={segment.title} detailses={segment.details} />
            </div>
          ))}
        </div>
      </div>
      {/* <div id="customgpt_chat"> */}
        {/* <ChatPopUp /> */}
      {/* </div> */}
     
      <script src="https://cdn.customgpt.ai/js/embed.js" div_id="customgpt_chat" p_id="19135" p_key="b91c769ead0669b98de6037e80651c54" width="100%" height="500px"></script>
    </div>
  );
};



export function Contact() {
  const mini_cards = [
    {
      img: massage,
      title: "Email Address",
      sub_title: "info@mayhemshield.com",
    },
    {
      img: question,
      title: "Service & Support",
      sub_title: "Support@mayhemshield.com",
    },
    {
      img: info,
      title: "Business Inquiry",
      sub_title: "info@mayhemshield.com",
    },
    {
      img: phone,
      title: "Call us",
      sub_title: "(866)883 - 8178",
    },
  ];


  return (
    <>
        <div
          className="lg:grid md:grid sm:block grid-cols-2 gap-[31px] drop-shadow-md lg:mx-[8%] 
                      md:mx-5 sm:mx-2 mt-[60px]"
         >
          {mini_cards.map((card, i) => (
            <>
              <a
                href={
                  card.sub_title.includes("@")
                    ? `mailto:${card.sub_title}`
                    : `tel:${card.sub_title}`
                }
              >
                <div
                  key={i}
                  className="bg-white flex rounded-md items-center sm:mt-5"
                >
                  <img
                    className="w-[88px] my-[16px] ml-[16px]"
                    src={card.img}
                    alt=""
                  />
                  <div className="ml-[25px]">
                    <p className="font-bold font-ptSans text-[20px]">
                      {card.title}
                    </p>

                    <p className="font-merriweather">{card.sub_title}</p>
                  </div>
                </div>
              </a>
            </>
          ))}
         </div>

    </>
  )
};

export default LetsTalk;
