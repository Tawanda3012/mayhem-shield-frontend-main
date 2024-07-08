import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperForm from './SwiperForm';
import { AiOutlineArrowRight } from "react-icons/ai"
import McqResult from './McqResult';
import ProgressBar from './shared/ProgressBar';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
SwiperCore.use([Navigation, Pagination]);
const isEqual = require('lodash/isEqual');

const MCQSwiper = () => {
    const [page, setPage] = useState(0)
    const [isForwarded, setIsForwarded] = useState(true);
    const handleSlideChangeTransitionStart = (swiper) => {
        const previousIndex = swiper.previousIndex;
        const currentIndex = swiper.activeIndex;
        setIsForwarded(currentIndex > previousIndex);
        setPage(currentIndex)
        // console.log(isForwarded);
    };
    const [allowNextSlide, setAllowNextSlide] = useState(false);


    const handleSlideChange = () => {
        console.log(allowNextSlide)
        if (allowNextSlide!==true) {
            return false;
        }
        setAllowNextSlide(false);
    };
    const nextSlide = (bol) => {
        if (bol) {
            swiper.slideNext();

        }

    }
    const questions = [
        {
            type: "radio",
            text: 'How would you describe your courrent use of public cloud?',
            options: [
                {
                    o: "Not currently using public cloud', 'not on public cloud but planning on migreating soon",
                    weight: 10
                },
                {
                    o: "Have some apps on public cloud but intend to increase adoption",
                    weight: 10
                },
                {
                    o: "Have some apps on public cloud but intend to increase adoption",
                    weight: 10
                },
                {
                    o: "Have a large proprtion of our apps on public cloud",
                    weight: 10
                },
                {
                    o: "we are cloud-first ( or intend to be cloud-first in the near future)we are cloud-first ( or intend to be cloud-first in the near future)",
                    weight: 10
                }
            ]
        },
        {
            type: "radio",
            text: 'How Aligned is the rest of you business with your cloud strategy?',
            options: [
                {
                    o: "There have been no discussios with stakeholders in other departments",
                    weight: 10
                },
                {
                    o: "Some stakeholders are aligned, some are not. ",
                    weight: 10
                },
                {
                    o: "All stakholders are fully aligned",
                    weight: 10
                },
            ],
        },
        {
            type: "radio",
            text: 'Do you have a Cloud Center of Excellence?',
            options: [
                {
                    o: "Yes, we have a Cloud center of Excellence",
                    weight: 10
                },
                {
                    o: "We plan to establish a Xloud Center of Excellence",
                    weight: 10
                },
                {
                    o: "Not sure yet",
                    weight: 10
                },
                {
                    o: "No",
                    weight: 10
                },
            ],
        },
        {
            type: "radio",
            text: 'What best describes your approach to Cloud Governance?',
            options: [
                {
                    o: "Ad hoc processes based on traditioal operating model",
                    weight: 10
                },
                {
                    o: "Attempts make to formalize processes associated with certain decisions and business unites.",
                    weight: 10
                },
                {
                    o: "Consistent processes and measures to enable effective automation and economies of scale.",
                    weight: 10
                },
                {
                    o: "Robust processes and automation enssure huardails are in place to enable innovation.",
                    weight: 10
                },
            ],
        },
        {
            type: "radio",
            text: 'What best describes you approach to cloud cost management?',
            options: [
                {
                    o: "Still trying to understand the implications of the cloud's OpEx model.",
                    weight: 10
                },
                {
                    o: "We have a basic understanding of cloud economics and our overall cloud costs.",
                    weight: 10
                },
                {
                    o: "We understand our cloud costs at an applicaiton level with simple financial governance.",
                    weight: 10
                },
                {
                    o: "We have ficancial governance and guardrails in place to automatically manage and optimaze the cost of our application in the cloud.",
                    weight: 10
                },

            ]
        },
        {
            type: "radio",
            text: "What best describes your security strategy?",
            options:
                [
                    {
                        o: "On-premises security tools and processes",
                        weight: 10
                    },
                    {
                        o: "Minimal use of  cloud security tools",
                        weight: 10
                    },
                    {
                        o: "Security integrated with development team",
                        weight: 10
                    },
                    {
                        o: "We have a mature security program that is part of our code deployment process",
                        weight: 10
                    }
                ]
        },
        {
            type: "radio",
            text: "How would you describe your adoption of DevOps?",
            options: [
                {
                    o: "I don’t know what DevOps is",
                    weight: 10
                },
                {
                    o: "Development and Operations teams work in silos",
                    weight: 10
                },
                {
                    o: "Emphasis in collaboration between Development and Operations",
                    weight: 10
                },
                {
                    o: "Centralized DevOps team with defined processes and automation established",
                    weight: 10
                },
                {
                    o: "Mature DevOps teams with a culture of continuous improvement, automation and experimentation",
                    weight: 10
                },
            ]
        },
        {
            type: "radio",
            text: "How would you describe your adoption of Agile methodologies?",
            options: [
                {
                    o: "I don’t know what you mean by Agile methodologies",
                    weight: 10
                },
                {
                    o: "We have not adopted Agile methodologies",
                    weight: 10
                },
                {
                    o: "Agile tools and practices are used sporadically",
                    weight: 10
                },
                {
                    o: "Most projects are Agile. Repeatable processes are in place with a focus on continuous improvement",
                    weight: 10
                },
                {
                    o: "Agile is scaled throughout our organization. Test and build is predominantly automated",
                    weight: 10
                },
            ]
        },
        {
            type: "radio",
            text: "How frequent are your product releases today?",
            options: [
                {
                    o: "Quarterly",
                    weight: 10
                },
                {
                    o: "Monthly",
                    weight: 10
                },
                {
                    o: "Weekly",
                    weight: 10
                },
                {
                    o: "Several times daily",
                    weight: 10
                },
            ]
        },

        {
            type: "radio",
            text: "As an organization do you have access to the data that you need?",
            options: [
                {
                    o: "No",
                    weight: 10
                },
                {
                    o: "Could be better, could be worse",
                    weight: 10
                },
                {
                    o: "Yes",
                    weight: 10
                },
            ]
        },
        {
            type: "radio",
            text: "What best describes your current data strategy?",
            options: [
                {
                    o: "We have lots of data but we get no value from it",
                    weight: 10
                },
                {
                    o: "We store and collect data easily",
                    weight: 10
                },
                {
                    o: "Data is easily accessible centralized and scalable",
                    weight: 10
                },
                {
                    o: "Data is reliable, clean, automated and provides value",
                    weight: 10
                },
                {
                    o: "People within the organization can use Business Intelligence tools to analyze data.",
                    weight: 10
                },
                {
                    o: "Data is easily accessible centralized and scalable",
                    weight: 10
                },
            ]
        },
        {
            type: "radio",
            text: "What best descibes your desired future data strategy?",
            options: [
                {
                    o: "We store and collect data easily",
                    weight: 10
                },
                {
                    o: "Data is easily accessible centralized and scalable",
                    weight: 10
                },
                {
                    o: "Data is reliable, clean, automated and provides value",
                    weight: 10
                },
                {
                    o: "People within the organization can use Business Intelligence tools to analyze data.",
                    weight: 10
                },

            ]
        },
        {
            type: "checkbox",
            text: "Does your organization currently use: (Pick all that applies. If you don’t use any of them please click Next.) ",
            options: [
                {
                    o: "Containers",
                    weight: 10
                },
                {
                    o: "Serverless",
                    weight: 10
                },
                {
                    o: "Microservices",
                    weight: 10
                },
                {
                    o: "Service-Oriented Architecture (SOA)",
                    weight: 10
                },
            ]
        },
        {
            type: "radio",
            text: "How would you describe your application migration strategy?",
            options: [
                {
                    o: "We have no strategy",
                    weight: 10
                },
                {
                    o: "Rehost - Shift - and lift",
                    weight: 10
                },
                {
                    o: "Replatform – Making a few cloud optimizations",
                    weight: 10
                },
                {
                    o: "Refactor – reimagine how applications are architected and developed using cloud native features",
                    weight: 10
                },
            ]
        },
        {
            type: "radio",
            text: "What would you like your cloud estate to look like?",
            options: [
                {
                    o: "Run your own on-premises VM’s and applications in the cloud while taking advantage of hardware and cloud cost savings and greater operational efficiency.",
                    weight: 10
                },
                {
                    o: "Refactor some of your applications using cloud-native services to embrace automation and elasticity so you can focus on driving value rather than maintaining infrastructure",
                    weight: 10
                },
                {
                    o: "Applications are built on microservices architectures and are scalable, fault-tolerant and ultra-responsive using cloud-native containerization and serverless technologies ",
                    weight: 10
                },
            ]
        },
    ];
    // const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);


    const [swiper, setSwiper] = useState(null);
    // const [checked, setChecked] = useState([])


    const handleRadioChange = (e, questionIndex, optionIndex) => {
        setSelectedOption(e.target.value);
        setAllowNextSlide(true);

        setSelectedAnswers((prevAnswers) => {
            prevAnswers[questionIndex] = [[questions[questionIndex].options[optionIndex].weight, e.target.value]];
            return [...prevAnswers];
        });
        if (swiper.isEnd) {
            console.log(selectedAnswers);
        }
        swiper.slideNext();
    };

    const handleCheckboxChange = (e, questionIndex, optionIndex) => {
        const weight = questions[questionIndex].options[optionIndex].weight
        const { value } = e.target;
        const item = [weight, value]

        // selectedItems.map(i=>{
        if (selectedItems.some(i => isEqual(i, item))) {
            selectedItems.pop(selectedItems.indexOf(item))
            setSelectedItems([...selectedItems]);
        } else {
            selectedItems.push(item)
            setSelectedItems([...selectedItems]);
        }
        // console.log(selectedItems)
        // console.log(item)

        // })


        setSelectedAnswers((prevAnswers) => {
            prevAnswers[questionIndex] = selectedItems;
            return [...prevAnswers];
        });

    };


    const pre = () => {
        swiper.slidePrev();
    }
    const next = (currentSlide=page) => {
    
            swiper.slideNext();
        
    }

    return (
        <Swiper

            spaceBetween={50}
            onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
            // navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => setSwiper(swiper)}
            onSlideChange={() => {
                handleSlideChange()
            }}
            className="mt-20   bg-[url(https://www.abilityfirst.org/wp-content/uploads/revslider/slider_9/video-bg.jpg)] "
        >
            <div className={`absolute top-0 w-full `}>
                <ProgressBar swiper={swiper} value={page} questions={questions.length} />
            </div>


            <SwiperSlide >
                <div className="flex flex-col h-[650px] p-8 justify-around">
                    <div className=" h-20  "></div>
                    <div className="text-3xl lg:w-1/2 sm:w-[100%] mx-auto lg:text-center md:text-start sm:text-start text-white lg:p-10 sm:p-0 md:p-8">
                        Where is your company in cloud maturity? Take the free assesment to get your <span className='font-bold text-blue-500'>Cloud Maturity Score</span> and a report on how to accelarate your cloud addoption journey.
                    </div>
                    <div className=" h-20 flex justify-end px-10">
                        <button className='btn  bg-rose-500 border-0 rounded-lg normal-case text-white' onClick={() => next()}>Start the Assesment <AiOutlineArrowRight /></button>
                    </div>
                </div>
            </SwiperSlide>
            {questions.map((question, index) => (
                <SwiperSlide key={index} >
                    <div className=" py-4 my-5 h-[650px]">
                        <div className="   my-2  mx-auto  rounded-lg drop-shadow-lg p- lg:w-[50%] md:w-[70%] sm:w-[100%]">
                            <p className="text-lg font-medium text-white text-center">{index + 1}. {question.text}</p>
                            <div className="mt-4 py-5  mx-auto my-8 p-8  w-full">
                                {question.options.map((option, optionIndex) => (
                                    <div key={optionIndex}  >
                                        <label className=" cursor-pointer flex  items-center text-start bg-white drop-shadow-md rounded-lg border-2 my-2  p-2 w-full">
                                            {
                                                question.type === "radio" ? <input
                                                    type="radio"
                                                    name={`question-${index}`}
                                                    value={option.o}
                                                    onChange={(e) => handleRadioChange(e, index, optionIndex)}
                                                    className=" radio  radio-primary  my-1 checked:bg-rose-500  border-rose-500"
                                                /> : <input
                                                    type="checkbox"
                                                    name={`question-${index}`}
                                                    value={option.o}
                                                    onChange={(e) => handleCheckboxChange(e, index, optionIndex)}
                                                    className="   checkbox accent-rose-500 rounded checked:border-rose-500 text-rose-500 my-1 checked:bg-rose-500 border-rose-500"
                                                />
                                            }
                                            <span className="ml-3 font-medium ">{option.o}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    <div className={`absolute bottom-0  right-5 text-5xl flex  justify-evenly w-56 h-20 ${page === 0 ? "hidden" : ""} text-white`}>
                        <button className='bg-rose-500  px-5 h-14 flex items-center rounded-xl' onClick={() => pre()}><BsArrowLeft /></button>
                        <button className='bg-rose-500  px-5 h-14 flex items-center rounded-xl' onClick={() => next()}><BsArrowRight /></button>
                    </div>

                </SwiperSlide>
            ))}
            <SwiperSlide className=''>
                <div className=' overflow-y-auto lg:w-1/2 mb-[100px] md:w-[80%] sm:w-[80%] mx-auto m-5 h-[600px]'>
                    <SwiperForm bol={nextSlide} />
                </div>
                <div className={`absolute bottom-0  right-5 text-5xl flex  justify-evenly w-56 h-20 ${page === 0 ? "hidden" : ""} text-white`}>
                    <button className='bg-rose-500  px-5 h-14 flex items-center rounded-xl' onClick={() => pre()}><BsArrowLeft /></button>
                    <button className='bg-rose-500  px-5 h-14 flex items-center rounded-xl' onClick={() => next()}><BsArrowRight /></button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='h-[650px]'>
                <McqResult result={selectedAnswers} />
                <div className={`absolute bottom-0  right-5 text-5xl flex  justify-evenly w-56 h-20 ${page === 0 ? "hidden" : ""} text-white`}>
                    <button className='bg-rose-500  px-5 h-14 flex items-center rounded-xl' onClick={() => pre()}><BsArrowLeft /></button>

                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default MCQSwiper;
