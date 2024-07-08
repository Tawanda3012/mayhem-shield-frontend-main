import React from 'react';
import { NavLink } from 'react-router-dom';

const ZeroTrustGateway = () => {
    const imageUrl = 'https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/712e1a71-0cd4-4cb1-a987-617308c602cb/Header2x.png?format=1500w';

    const containerStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left bottom',
        // width: '100%', // Adjust width as needed
        // height: '500px', // Adjust height as needed
        // transform: 'scale(1.2)', // 20% zoom
    };
    return (
        <>
            <div style={containerStyle}
                className="h-fit  pb-20 lg:pb-52 lg:px-20">

                <div className=" p-5">
                    <h1 className="font-medium text-5xl ">Zero Trust Data Transfer</h1>
                    <br />

                    <h1 className="">VPN Replacement & API Protection </h1>
                    <p className='mt-20'>Real-time data-in-flight protection providing secure, auditable chain of custody for data on the move. </p>
                    <NavLink to="https://api.leadconnectorhq.com/widget/booking/jvoFgs2jhSzXkld9mU4M" className="btn  mt-10 bg-blue-500 rounded-full normal-case text-white border-0 px-10">Free Demo</NavLink>
                </div>
            </div>
            <div className="flex justify-evenly items-center flex-wrap px-5">
                <div className="w-full md:w-[40%]">
                    <h1 className=''>
                        World's First Zero-Trust Data Gateway Is An Ideal VPN Alternative.
                        <br />
                        Protect APIs, Backups, Migrations And Data Transfers.
                    </h1>
                    <br />
                    <p>Safeguard APIs And Data-In-Flight In Real-Time Through Automated Detection And Immediate Response.</p>
                </div>
                <img className='sm:w-full sm:m-3 md:m-0 md:w-1/2 rounded' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/8299af81-6b43-4e33-b6bb-006b108162a4/map+report.png?format=1500w" alt="" />
            </div>
            <div className="flex justify-evenly items-center flex-wrap px-5 bg-blue-100 py-20 ">
                <img className='m-3 w-[268px] rounded' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/9390b420-cd15-4cee-95fc-a92126b95fed/VPNreplacement.png" alt="" />
                <div className="w-full md:w-[40%]">
                    <h1 className='text-5xl font-bold'>Think Beyond Your Network Security.</h1>
                    <br />
                    <h1>Replace your VPN with our Zero Trust Secure Connection</h1>
                    <p>
                        an you protect your data when it leaves your network? With XQ, you can.
                        <br />
                        <br />
                        Data access has shifted away from network-centric and identity-centric approaches.
                        <br />
                        <br />
                        Zero Trust Data protection eases your VPN maintenance burden.
                    </p>
                    <NavLink target="_blank" to="https://drive.google.com/file/d/1ZCykjRgqhOuL5Exw99XGk5XJhLyNHs9U/view?usp=drive_link" className="btn  mt-10 bg-blue-500 rounded-full normal-case text-white border-0 px-10">Case Study</NavLink>

                </div>
            </div>
            <div className="py-20 px-5 md:px-20 text-center">
                <h1 className='text-4xl font-bold my-5'>VPNs Put Your Data & Compliance At Risk </h1>
                <p>VPNs are slow, expensive, and difficult to manage. Learn how Zero Trust Data protection offers a more future-proof, scalable approach to securing corporate data transfer and apps.</p>
                <div className='flex flex-wrap justify-evenly mt-10'>
                    <div className='w-[260px]'>
                        <h1>
                            No Accountability
                        </h1>
                        <p>
                            VPNs protect the connection but not the data. Data needs policy-based protection.
                        </p>
                    </div>
                    <div className='w-[260px]'>
                        <h1>
                            Easy Target
                        </h1>
                        <p>
                            VPNs are increasingly vulnerable targets and the cause of costly breaches.
                        </p>
                    </div>
                    <div className='w-[260px]'>
                        <h1>
                            Vulnerable Data
                        </h1>
                        <p>
                            Hackers with VPN credentials have free reign in your network to take anything.
                        </p>
                    </div>
                    <div className='w-[260px]'>
                        <h1>
                            Overly Complex
                        </h1>
                        <p>
                            VPNs are a clunky way to manage data access and can be bothersome to configure and maintain.                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly items-center flex-wrap px-5 my-20">
                <div className="w-full md:w-[40%]">
                    <h1 className='text-5xl font-bold'>Why Is The XQ VPN Alternative Different?</h1>
                    <br />
                    <p>VPNs and other VPN replacements work on the same basic logic: the network, the applications, and the Identity don't trust the data.
                        <br />
                        <br />
                        XQ flips that paradigm on its head.
                        <br />
                        <br />
                        XQ makes it so the data doesn't trust the network, application, or identity.
                        <ul className='ml-5'>
                            <li>✓  Protect the data with Quantum Safe data encryption</li>
                            <li>✓  Control where, when & who has access to your data</li>
                            <li>✓  Protect data outside of your chain of custody</li>
                            <li>✓  Maintain an auditable log for every transmission</li>
                        </ul>
                    </p>
                </div>
                <img className='sm:m-3 md:m-0 w-full md:w-1/2 lg:w-[311px] rounded' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/7a5066b0-67c2-457c-a981-9bf44a843a5a/transfer+large.png?format=1500w" alt="" />
            </div>
            <div className="flex justify-evenly items-center flex-wrap px-5 my-20">
                <div className="w-full md:w-[75%]">
                    <h1 className='text-5xl font-bold'>Features</h1>
                    <br />
                    <p>XQ protects and tracks data-in-flight enabling policy-based access to any digital resource on owned infrastructure across disparate networks and remote data access control.

                        <ul className='ml-5 flex justify-between flex-wrap'>
                            <span>
                                <li>✓  Zero Trust Data Protection</li>
                                <li>✓  HIPAA, CMMC, NIST-CUI, GDPR, FINRA, ITAR rule packs</li>
                                <li>✓  Data Residency, Localization, Sovereignty</li>
                                <li>✓  Scalability</li>
                                <li>✓  Connect and protect all your enterprise applications</li>
                                <li>✓  Data Policy Enforcement</li>
                                <li>✓  Hybrid Cloud Transfer</li>
                            </span>
                            <span>
                                <li>✓  Transparently Encrypt/Decrypt in Transit</li>
                                <li>✓  Cloud Manage VLAN Encryption and Routing</li>
                                <li>✓  Azure, AWS, GCP, Redhat, Ubuntu</li>
                                <li>✓  Data Loss Prevention</li>
                                <li>✓  Quantum resistant</li>
                                <li>✓  Supports OSI VLAN to STFP</li>
                            </span>
                        </ul>
                    </p>
                </div>
                <ul>

                </ul>
            </div>
                <img className='s-full md:w-[613px] mx-auto' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/d6af8db5-891d-4887-846e-65a7e7e912c3/XQ+Public+Sector+Data+Security+and+Compliance.pptx.png" alt="" />
            <div className="py-10 my-10 flex flex-col justify-center items-center bg-blue-400 text-white px-5" >
                <h1 className='text-center'>Talk To An Expert And Get An Evaluation</h1>
                <NavLink to="https://api.leadconnectorhq.com/widget/booking/jvoFgs2jhSzXkld9mU4M" className="btn w-fit mt-5 text-blue-500 rounded-full normal-case bg-white border-0 px-10 mx-auto">Schedule a Demo</NavLink>
            </div>
            <div className="flex justify-evenly items-center flex-wrap px-5">
                <img className='m-3 w-[292px]' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/0f671528-4305-4500-a9ce-5f753b08192e/Lockheed+Logo-07.jpg" alt="" />
                <img className='m-3 w-[292px]' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/104f879c-39bd-4f60-98b4-931808ccb5db/Kontur+logo-12.jpg" alt="" />
                <img className='m-3 w-[192px]' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/c260c71b-c6c2-409b-a59a-b765431a7f44/McGrathNicol_Logo_Black_RGB.jpg" alt="" />
                <img className='m-3 w-[292px]' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/cdb3059a-55bd-4bd0-8349-6dd53c135642/5g+zone+logo.png" alt="" />
            </div>
            <div className="flex flex-wrap p-5 md:px-20 ">
                <div className="w-full md:w-1/2 flex mb-5 justify-center items-center flex-col">
                    <h1>Interact with Customers</h1>
                    <img className='m-3 w-[400px]' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/05d9e359-c72f-41ba-a1a9-28b03c7c9ed0/secure+chat+wireframe.png" alt="" />
                    <NavLink to="/lets-talk" className="btn  mt-5 bg-blue-500 rounded-full normal-case text-white border-0 px-10">Customer Support Chat</NavLink>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center flex-col">
                    <h1>Track and Manage</h1>
                    <img className='m-3 w-[400px]' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/4856044e-bd23-488d-9308-7d806aa0ce98/dashboard+wireframe.png" alt="" />
                    <NavLink to="/lets-talk" className="btn  mt-5 bg-blue-500 rounded-full normal-case text-white border-0 px-10">Dashboard</NavLink>
                </div>
            </div>
        </>
    );
};

export default ZeroTrustGateway;