import React, { useEffect, useState } from 'react';
import heroConfig from "./images/hero-conf.png"
import ModalForm from './ModalForm';

const AwsConfig = () => {
    const [showModal, setShowModal] = useState(false)
    const modalHandler = () => setShowModal(!showModal)


    useEffect(() => {
        if (showModal) document.body.style.overflowY = "hidden"
        else document.body.style.overflowY = "scroll"
    }, [showModal])

    return (
        <div className='lg:flex md:block sm:block justify-evenly'>
            <ModalForm showModal={showModal} modalHandler={modalHandler} />

            <div className="lg:w-1/2 sm:w-full md:w-3/4">
                <div className="lg:block md:relative w-full font-black p-10  font-sans  text-black mx-auto">
                    <h1 className="text-4xl italic  text-[#00f] ">THANK YOU</h1> <br />
                    <h1 className="text-4xl italic w-[82%] text-[#000000] ">FOR PARTNERING WITH US</h1>
                    <br />
                    <br />
                    <p className='lg:w-full md:w-full sm:w-full text-xl font-medium'>Thank you for your interest in becoming an <span className='text-[#00f]'>Mayhem Shield</span> partner! We are eager to learn more about your business, your aspirations, and how we can help you take your cloud business to the next level. A member of our team will reach out to you as soon as possible. In the meantime, if you have any questions, don't hesitate to email <a className='text-[#00f]' href="mailto:info@mayhemshield.com">info@mayhemshield.com</a>.</p>


                    <button onClick={modalHandler} className="btn mt-5 border-2 border-[#00f] mx-auto hover:bg-[#00f] hover:border-[#00f] hover:text-white  text-2xl h-fit rounded-full text-black font-semibold px-5 py-2 bg-white italic">Contact Us</button>
                </div>
            </div>
            <div className="lg:w-1/2 md:w-1/2 sm:w-full  flex justify-center">
                <img src={heroConfig} alt="" className='' />
            </div>

        </div>
    );
};

export default AwsConfig;