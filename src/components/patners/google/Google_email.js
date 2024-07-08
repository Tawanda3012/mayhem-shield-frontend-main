import React, { useState } from 'react';
import { BsCheck2 } from 'react-icons/bs'
import { Link } from 'react-router-dom';
// import { Collapse } from 'deisy-ui';

const Google_email = () => {
    const cards = [
        {
            title: 'Business Starter',
            p: 'Get started with professional email and core collaboration tools.',
            items: [
                "Email matching your domain",
                "Gmail",
                "Calender",
                "Docs,Sheets, &  Slides",
                "30GB Drive Cloud Storage per user",
                "Meet Video Conferencing with up to 100 participants",
                "Chat"
            ],
            prince: '3',
            mainPrice: '6'
        },
        {
            title: 'Business Standard',
            p: 'Enhanced storage, productivity, & communication features',
            items: [
                "Email matching your domain",
                "Gmail",
                "Calender",
                "Docs,Sheets, &  Slides",
                "2TB Drive Storage per user, shared drives for your team",
                "Meet Video Conferencing with up to 150 participants, polling, breakout rooms, and recording",
                "Chat Platform w/ guest access and threaded rooms"
            ],
            prince: '6',
            mainPrice: '12'
        },
        {
            title: 'Business Plus',
            p: 'Enhanced security with the most storage for collaboration.',
            items: [
                "Email matching your domain",
                "Gmail",
                "Calender",
                "Docs,Sheets, &  Slides",
                "5TB Drive Storage per user, shared drives for your team",
                "Meet Video Conferencing with up to 250 participants, recording, polling, and Q&A, breakout rooms, Attendance tracking",
                "Chat Platform w/ guest access and threaded rooms",
                "Vault Security & Archiving"
            ],
            prince: '9',
            mainPrice: '18'
        },
    ]
    const Communicates = [
        {
            img: "https://www.web.com/email-service/google-workspace/_jcr_content/root/section_35372447/responsivecolumns/column-0/responsivecolumns/column-0/itl.coreimg.png/1649967473760/gmail-lg.png",
            n: 'Gmail'
        },
        {
            img: 'https://www.web.com/email-service/google-workspace/_jcr_content/root/section_35372447/responsivecolumns/column-0/responsivecolumns/column-1/itl_copy.coreimg.png/1649967500562/calendar-lg.png',
            n: 'Calender'
        },
        {
            img: 'https://www.web.com/email-service/google-workspace/_jcr_content/root/section_35372447/responsivecolumns/column-0/responsivecolumns/column-2/itl_copy_copy.coreimg.png/1649967528970/chat-lg.png',
            n: 'Chat'
        },
        {
            img: "https://www.web.com/email-service/google-workspace/_jcr_content/root/section_35372447/responsivecolumns/column-0/responsivecolumns/column-3/itl_copy_copy.coreimg.png/1649967563626/meet-lg.png",
            n: 'Meet'
        }

    ]
    const Create = [
        {
            img: "https://www.web.com/email-service/google-workspace/_jcr_content/root/section_35372447/responsivecolumns/column-1/responsivecolumns_co/column-0/itl.coreimg.png/1646776138118/docs.png",
            n: 'Docs'
        },
        {
            img: 'https://www.web.com/email-service/google-workspace/_jcr_content/root/section_35372447/responsivecolumns/column-1/responsivecolumns_co/column-1/itl_copy.coreimg.png/1649967591116/sheets.png',
            n: 'Sheets'
        },
        {
            img: 'https://www.web.com/email-service/google-workspace/_jcr_content/root/section_35372447/responsivecolumns/column-1/responsivecolumns_co/column-2/itl_copy_copy.coreimg.png/1649967603162/forms.png',
            n: 'Forms'
        },
        {
            img: "https://www.web.com/email-service/google-workspace/_jcr_content/root/section_35372447/responsivecolumns/column-1/responsivecolumns_co/column-3/itl_copy_copy.coreimg.png/1649967625221/slides.png",
            n: 'Slides'
        },
        {
            img: "https://www.web.com/email-service/google-workspace/_jcr_content/root/section_35372447/responsivecolumns/column-1/responsivecolumns_co/column-4/itl_copy_copy_copy.coreimg.png/1649967640058/sites.png",
            n: 'Sites'
        }

    ]
    const shares = [
        {
            img: "https://www.web.com/email-service/google-workspace/_jcr_content/root/section_35372447/responsivecolumns_co/column-0/responsivecolumns/column-0/itl.coreimg.png/1649967656502/drive-lg.png",
            n: 'Drive'
        },
        {
            img: 'https://www.web.com/email-service/google-workspace/_jcr_content/root/section_35372447/responsivecolumns_co/column-0/responsivecolumns/column-1/itl_copy.coreimg.png/1649967671053/cloud-lg.png',
            n: 'Cloud Search'
        },

    ]
    const Manages = [
        {
            img: "https://www.web.com/email-service/google-workspace/_jcr_content/root/section_35372447/responsivecolumns_co/column-1/responsivecolumns_co/column-0/itl.coreimg.png/1649967685931/admin-lg.png",
            n: 'Admin'
        },
        {
            img: 'https://www.web.com/email-service/google-workspace/_jcr_content/root/section_35372447/responsivecolumns_co/column-1/responsivecolumns_co/column-1/itl_copy.coreimg.png/1649967699069/mobile-lg.png',
            n: 'Mobile'
        },
        {
            img: 'https://www.web.com/email-service/google-workspace/_jcr_content/root/section_35372447/responsivecolumns_co/column-1/responsivecolumns_co/column-2/itl_copy_copy.coreimg.png/1649967711040/vault-lg.png',
            n: 'Vault'
        },

    ]

    const tools = [
        {
            t: 'Communicate',
            p: 'Stay in touch with your team when you need to with email, messages, and video chat.',
            icons: Communicates
        },
        {
            t: 'Create & collaborate',
            p: 'Work together from anywhere with Google Workspace. It’s never been easier to collaborate.',
            icons: Create
        },
        {
            t: 'Store & share',
            p: 'Create, edit, search, and update your business anywhere — anytime.',
            icons: shares
        },
        {
            t: 'Manage & secure',
            p: 'Securely control your data, devices, and users with ease.',
            icons: Manages
        },
    ]

    const togethers = [
        {
            img: 'https://www.web.com/email-service/google-workspace/_jcr_content/root/section_289866605/responsivecolumns/column-0/itl_copy.coreimg.jpeg/1670020355938/work-together-1.jpeg',
            t: `Look  professional`,
            p: `Earn credibility with your customers with an email address that matches your domain name.`
        },

        {
            img: `https://www.web.com/email-service/google-workspace/_jcr_content/root/section_289866605/responsivecolumns/column-1/itl_copy_copy.coreimg.jpeg/1670020357086/work-together-2.jpeg`,
            t: `Work   smarterl`,
            p: `Keep everything in one place with Google Workspace. Use the Google products you know and trust.`
        },
        {
            img: `https://www.web.com/email-service/google-workspace/_jcr_content/root/section_289866605/responsivecolumns/column-2/itl_copy_copy_copy.coreimg.jpeg/1670020358626/work-together-3.jpeg`,
            t: `Stay secure`,
            p: `Keep your data safe and protected with Google’s industry-leading privacy and security.`
        },

    ]


    const faqs = [
        {
            q: 'Why would I buy Google Workspace when I can get a Gmail email address for free ? ',
            a: "Google Workspace uses the same gmail platform you know but with so much more. When we're talking email, yes you get a free email address with Gmail that ends in @gmail.com.With Google Workspace your email address matches your domain name and lets your customers, prospects and partners know that you are trustworthy and credible.Plus with Google Workspace you get the business level communication, collaboration and productivity tools like Calendar, Gmail, Drive, Docs, Slides, Meet, Keep, Forms, Sheets and more.",
        },
        {
            q: "How much is Google Workspace?",
            a: "Google Workspace can provide instant credibility and productivity within your team starting at just $6/month. See how Google Workspace can improve your team's collaboration today!"
        },
        {
            q: "What's included with Google Workspace?",
            a: "Similar to the former G Suite plan, every Google Workspace plan will feature an email address that matches your domain name and access to collaboration tools that all work together, are completely mobile-friendly, and industry-leading in security. These tools and apps include Gmail, Calendar, Meet, Chat, Drive, Docs, Sheets, Slides, Forms, Sites, and more."
        },
        {
            q: "Will my email address match my domain?",
            a: "Yes! All Google Workspace plans feature a custom email that matches your domain. See how a professional email address can change your business."
        },
        {
            q: "Which Google Workspace plan is right for my business?",
            a: "Google Workspace offers a variety of different subscription options for individuals, small businesses, schools, and enterprises. If you are a new user, first define your needs and then select the plan that best fits the balance between your needs and your budget. Certain features, such as 250 participant video meetings, unlimited storage, and enhanced support are only available in the larger plans."
        },
        {
            q: "How do I signup for Google Workspace?",
            a: "Simply add the Google Workspace product to your cart and choose between monthly and annual billing. For further help on activating your new Google Workspace account, click here"
        },
        {
            q: "What is Google G Suite? What is the difference between G Suite and Workspace?",
            a: "Google rebranded from G Suite to Google Workspace on October 6, 2020 to better address the needs and requirements for their remote/hybrid users. After upgrades to its overall user-experience, this rebrand better represents 'Google Workspace' to better represent the product's holistic vision."
        }
    ]
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className='text-black'>
            <div className="bg-[#0D47FB] lg:flex md:flex sm:block lg:px-15 md:px-10 sm:px-5 lg:justify-between lg:pt-20 px-5 md:pt-10 sm:pt-5 ">
                <div className="lg:w-1/2 sm:w-full px-[15px] leading-[1] md:w-1/2">
                    <h1 className='lg:text-[3.75rem] sm:text-[2.5rem] font-bold text-[#FEC101] stroke-[#FED141]'>
                        Streamline your business with Google Workspace
                    </h1>
                    <p className='text-[1.25rem] font-[400 ] text-white mt-5 leading-[1.4]'>Convenient productivity tools to help you get everything
                        done in one place.
                        <span className='flex items-center mt-5'><BsCheck2 /> Email address to match your domain name</span>
                        <span className='flex items-center'><BsCheck2 />Easy communication and collaboration</span>
                        <span className='flex items-center'><BsCheck2 />Robust security & privacy tools</span>
                        <span className='flex items-center'><BsCheck2 />LIMITED TIME! 50% OFF Annual Plans</span>
                    </p>
                    <button className="bg-black p-5 md:mb-5 rounded-lg text-2xl mt-5 text-white">see packges</button>
                </div>
                <div className="lg:w-1/2 sm:full">
                    <img src="https://www.web.com/email-service/google-workspace/_jcr_content/root/hero_copy_copy_copy.coreimg.jpeg/1678823388432/hero-image.jpeg" alt="" />
                </div>
            </div>
            <div className="lg:px-15 md:px-10 sm:px-5">
                <h1 className='text-[3.75rem] mt-10 text-center leading-[1] font-bold lh:mx-10 md:mx-8 sm:mx-5'>Google Workspace plans for every size business</h1>
                <div className="" >
                    <div className="lg:flex md:flex sm:block flex-wrap ">
                        {
                            cards.map((card, i) => <>
                                <div className=" border-2 lg:w-[30%] md:w-[40%] sm:w-[90%] mx-auto   border-gray-700  m-5 p-5">
                                    <span className='text-center flex flex-col items-center'>
                                        <h1 className='text-3xl font-black'>{card.title}</h1>
                                        <p className='"font-merriweather'>{card.p}</p>
                                        <p className='bg-green-100 mt-5  w-max lg:px-10 md:px-2 sm:px-5 py-1'>50% Off - Limited Time*</p>
                                        <p className='font-bold  mt-3'><span className='text-4xl '>${card.prince}</span>/MO</p>
                                        <p className='line-through text-gray-400'>${card.mainPrice}/MO</p>
                                        <Link to="/partners/google-cloud/email-service/cart">
                                            <button className='p-3  bg-blue-600 text-white btn border-0 text-md mt-5 rounded '>add to cart</button>
                                        </Link>
                                    </span>

                                    <div className="collapse lg:collapse-open collapse-arrow">
                                        <input type="checkbox" />
                                        <div className="collapse-title lg:hidden text-md text-blue-500 font-medium">
                                            View Features
                                        </div>
                                        <div className="collapse-content">
                                            <ul className='block'>
                                                {
                                                    card.items.map((item, j) => <>
                                                        <li className='flex py-5  border-b-2 items-baseline'><span><BsCheck2 /></span><span className='ml-2'> {item}</span></li>
                                                    </>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        }
                    </div>

                    <div className="">
                        <p>*Monthly plans are billed every 4 weeks. <label htmlFor="my-modal-4" className="text-blue-500 underline ">See Offer</label> Details for promotional information.</p>
                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                        <label htmlFor="my-modal-4" className="modal cursor-pointer">
                            <label className="modal-box relative" htmlFor="">
                                <h3 className="text-lg font-bold">Offer Details</h3>
                                <p className="py-4">*The promotional price is for the first year of service and will automatically renew at the regular rate. This rate is only offered when purchasing an annual subscription. Otherwise, standard monthly rate applies; monthly plans are billed every 4 weeks. Offer is valid for up to five seats.</p>
                                <label htmlFor="my-modal-4" className="text-blue-500" >Close</label>
                            </label>
                        </label>
                    </div>

                    <div className="lg:flex sm:block items-center">
                        <div className="lg:w-[40%] sm:w-[90%] lg:p-8 sm:p-0 mt-5">
                            <h1 className="text-5xl  font-bold">Professional email and so much more</h1>
                            <p className='mt-5 mb-10'>Seamlessly bring together messaging, meetings, documents, and tasks with Google Workspace. Build trust and confidence with your audience with an email address that matches your domain name. And it’s safe with Google’s unmatched security.</p>
                        </div>
                        <div className="lg:w-[60%] sm:w-[90%]">
                            <img src="https://www.web.com/email-service/google-workspace/_jcr_content/root/section_684080950/responsivecolumns/column-1/image.coreimg.82.800.jpeg/1670020360464/professional-email.jpeg" alt="" />
                        </div>
                    </div>

                    <div className="mt-20  sm:px-1 lg:px-10">
                        <h1 className="text-4xl  font-bold lg:text-center sm:text-start">Get more done <br /> with the right tools</h1>
                        <p className='mt-10 px-10 lg:text-center sm:text-start'>Google Workspace puts everything together in one place. The Google tools that you’re familiar with for messaging, meetings, docs, tasks, and more — all with the power of Web.com.
                        </p>
                        <div className="flex flex-wrap font-merriweather justify-between">
                            {
                                tools.map((tool, i) => <>

                                    <div key={i} className="lg:w-[48%] sm:w-full mt-10 ">
                                        <h1 className='text-3xl font-bold mt-5'>{tool.t}</h1>
                                        <p className='text-start mt-5'>{tool.p}</p>
                                        <div className="flex justify-evenly">
                                            {
                                                tool.icons.map((icon, j) => <>
                                                    <span className='text-center '>
                                                        <img src={icon.img} className="w-20" alt="" />
                                                        <p>{icon.n}</p>
                                                    </span>
                                                </>)
                                            }
                                        </div>

                                    </div>
                                </>)
                            }
                        </div>
                    </div>

                    <div className="">
                        <div className='lg:w-[80%] mx-auto sm:w-full'>
                            <h1 className="text-4xl  font-bold lg:text-center sm:text-start mt-20">Work together, even when <br />
                                you can't be together</h1>
                            <p className='mt-10  lg:text-center sm:text-start '>As business communications change and evolve, you can put your trust in Google Workspace to provide you with the flexibility and connectivity you need to succeed.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-around mt-10">
                            {
                                togethers.map((tog, i) => <>
                                    <div className="lg:w-[30%] md:w-[48%] sm:w-full">
                                        <img className='' src={tog.img} alt="" />
                                        <h1 className='w-min text-3xl font-bold'>{tog.t}</h1>
                                        <p className='mt-5'>{tog.p}</p>


                                    </div>
                                </>)
                            }
                        </div>
                    </div>

                    <div className="">
                        <div style={{ backgroundImage: `url("https://www.web.com/content/dam/webdotcom/google-workspace/get-going-bg.jpg.transform/web1280/image.jpg")` }} className=" py-10 bg-opacity-60 mt-10 text-white">
                            <div className=" flex flex-wrap justify-center px-10">
                                <div className="lg:w-1/2 sm-w-full">
                                    <h1 className="mb-5 text-5xl font-bold">
                                        Get going with Google Workspace</h1>
                                    <p className="mb-5">Get connected with your team and start collaborating in no time. Google Workspace is easy to set up and easy to use. Choose the right plan for your business needs and get started today.

                                    </p>
                                    <h1 className="mb-5 text-4xl font-bold">Google Partner of the Year Award
                                    </h1>
                                    <p className="mb-5">As a Google Partner, we’re able to offer you Google Cloud’s leading business solutions, helping you effectively operate your business all from one place.

                                    </p>
                                </div>
                                <div className="lg:w-[45%] sm-w-full">
                                    <img src="https://www.web.com/email-service/google-workspace/_jcr_content/root/section/section/responsivecolumns/column-1/image.coreimg.82.800.png/1659539254546/get-going-overlay-image.png" className='w-[90%] mx-auto' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FaQ */}

                    <div className="px-20 mt-20 mx-auto">
                        <h1 className='text-5xl font-bold text-center'>FAQs</h1>
                        {
                            faqs.map((faq, i) => <>
                                <div key={i} className="collapse  collapse-arrow w-[80%] mx-auto">
                                    <input type="checkbox" />
                                    <div className="collapse-title  text-4xl font-bold ">
                                        {faq.q}
                                    </div>
                                    <div className="collapse-content">
                                        <p>{faq.a}</p>
                                    </div>
                                </div>
                            </>)
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};
export default Google_email;
