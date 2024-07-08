import React from 'react';
import { NavLink } from 'react-router-dom';

const ZeroTrustVault = () => {
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
            <div style={containerStyle} className="h-fit pb-20 lg:pb-52 lg:px-20 px-5">

                <div className="  ">
                    <div className="flex flex-wrap justify-evenly items-center">
                        <div className="w-full md:w-1/2">
                            <h1 className="font-medium text-4xl ">Manage Secrets, Access Policies, Encrypt Sensitive & Regulated Data With <strong>Vault</strong></h1>
                            <br />
                            <h1 className="">XQ’s Zero Trust Data Vault ensures that sensitive data is stored and utilized safely and securely.
                                <br />
                                Secure, store, label data and tightly control access to tokens, and encryption keys to automate protecting sensitive data using a UI, CLI, or HTTP API.
                            </h1>
                        </div>
                        <div className="">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ocSHK3mk6fU?si=c-ChPqwASZ30dbBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <h1>
                        Stop trusting 3rd party security and storage with your files.
                        <br />
                        Seamlessly store sensitive data on your own Linux, AWS, Azure Blob, GCP One Drive & Google Drive making each a <strong>Zero Trust Data Vault</strong> with forensic level chain of custody.
                    </h1>
                    <div className="flex justify-evenly flex-wrap">
                        <NavLink to="https://api.leadconnectorhq.com/widget/booking/jvoFgs2jhSzXkld9mU4M" className="btn  mt-10 bg-blue-500 rounded-full normal-case text-white border-0 px-10">HIPAA & CMMC Level 2</NavLink>
                        <NavLink to="https://api.leadconnectorhq.com/widget/booking/jvoFgs2jhSzXkld9mU4M" className="btn  mt-10 bg-blue-500 rounded-full normal-case text-white border-0 px-10">Sign Up for a Free Demo</NavLink>
                    </div>
                </div>

            </div >
            <div className="flex justify-evenly items-center flex-wrap px-5">
                <div className="w-full md:w-[40%]">
                    <h1 className='text-5xl font-bold'>Tracking & Auditing</h1>
                    <br />
                    <p>Share Massive Files On Your Cloud Infrastructure.
                        <br />
                        <br />
                        Control & Track Who Sees Them, Where, & When.
                        <br />
                        <br />
                        Audit Every File And Fix Your Leaky Buckets.</p>
                </div>
                <img className='sm:w-full sm:m-3 md:m-0 md:w-1/2 rounded' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/8299af81-6b43-4e33-b6bb-006b108162a4/map+report.png?format=1500w" alt="" />
            </div>
            <div className="py-20 px-5 md:px-20 text-center">
                <h1 className='text-4xl font-bold my-5'>See What Sets XQ Apart</h1>
                <p>Whether you need to meet specific industry regulations or international privacy standards, the XQ Vault covers all your data compliance and regulatory needs — including <strong>CMMC, GDPR, GLBA, HIPAA, ITAR, NIST-CUI, FINRA</strong>, and more.</p>
                <div className='flex flex-wrap justify-evenly mt-10'>
                    <div className='w-[260px]'>
                        <h1>Safer</h1>
                        <p>Protect each file with separate quantum resistant encryption and keep it on your cloud </p>
                    </div>
                    <div className='w-[260px]'>
                        <h1>Easier</h1>
                        <p>Simply store your data in a desktop folder synced to the cloud.</p>
                    </div>
                    <div className='w-[260px]'>
                        <h1>Bigger</h1>
                        <p>XQ’s no size limit rule opens up huge possibilities at a fraction of the cost of other services</p>
                    </div>
                    <div className='w-[260px]'>
                        <h1>Clearer</h1>
                        <p>Track & Audit every interaction with all your data on one screen</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly items-center flex-wrap px-5 bg-blue-100 py-20 ">
                <img className='m-3 w-[268px] rounded' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/dde037f6-ebf0-45b9-8b6d-b7f0d83d0137/vaultish.png" alt="" />
                <div className="w-full md:w-[40%]">
                    <h1 className='text-5xl font-bold'>Individual File Protection</h1>
                    <br />
                    <p>
                        <strong>Does it make sense to protect the network when you care about the files?</strong>
                        <br />
                        <br />
                        You can think of XQ Zero Trust Data Protection, as each file in its own safe with its own combination. That safe combination is only given to certain members of your team, and it only works in a certain part of the world.
                        <br />
                        <br />
                        This protection can travel with a file no matter where it goes.
                        <br />
                        <br />
                        Normally, a threat actor would get into your network by faking an identity and taking all the files. With XQ, since each file is in its own safe, we can change the combination to the safe and all the safes for all the data. Automatically.</p>
                </div>
            </div>
            <div className="flex justify-evenly items-center flex-wrap px-5 my-20">
                <div className="w-full md:w-[40%]">
                    <h1 className='text-5xl font-bold'>Room To Grow</h1>
                    <br />
                    <p>Unlike other collaboration and storage solutions, XQ Vault has no file size limit and no limit on storage. You can back up an entire fortune 500 company into your vault.
                        <br />
                        <br />
                        <span>Unlimited File Size</span>
                        <br />
                        <br />

                        Store files as large as S3 and Azure Blob will hold, sync seamlessly, and enjoy unparalleled, seamless compliance. No competing service beats these performance metrics.</p>
                </div>
                <img className='sm:m-3 md:m-0 w-full md:w-1/2 lg:w-[640px] rounded' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/f4d0b3f2-c4b2-429f-942b-d1ecf256a1c8/files.png?format=750w" alt="" />
            </div>
            <div className="flex justify-evenly items-center flex-wrap px-5 my-20">
                <img className='m-3 w-[268px] rounded' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/efde7c46-c4fc-4c20-939f-e5cbcc42d0ef/vault+icon.png" alt="" />
                <div className="w-full md:w-[40%]">
                    <h1 className='text-5xl font-bold'>Your Files, Your Cloud</h1>
                    <br />
                    <p>With XQ, your files belong to you and are stored on your cloud server. XQ Vault mounts seamlessly to your A3 and Azure Blob. XQ never has access to your data, so you can be sure we’re not reselling your data.</p>
                </div>
            </div>
            <div className="flex justify-evenly items-center flex-wrap px-5 my-20">
                <div className="w-full md:w-[40%]">
                    <h1 className='text-5xl font-bold'>Ease Of Use And Frictionless Security</h1>
                    <br />
                    <p>XQ Vault works like any folder on your desktop. Nothing could be more intuitive.
                        <br />
                        <br />
                        Protecting sensitive data is paramount. XQ brings first-of-its-kind zero trust data security to data storage and sharing.
                        <br />
                        <br />
                        XQ includes policy-based security controls, intelligent threat detection and remediation, and information governance.</p>
                </div>
                <img className='m-3 w-[268px] rounded' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/a21aa53e-1039-4a2d-ab2b-1e843a823be2/easy.png" alt="" />
            </div>
            <img className='s-full md:w-[613px] mx-auto' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/d6af8db5-891d-4887-846e-65a7e7e912c3/XQ+Public+Sector+Data+Security+and+Compliance.pptx.png" alt="" />
            <div className="flex justify-evenly items-center flex-wrap px-5 my-20">
                <img className='m-3 w-[268px] rounded' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/1657911676335-IA8MG0WWHV2T7FN5ATO8/data-residency.png?format=1500w" alt="" />
                <div className="w-full md:w-[40%]">
                    <h1 className='text-5xl font-bold'>Breakthrough Data Provenance, Localization, And Sovereignty</h1>
                    <br />
                    <p>Our data privacy is new. XQ maintains an auditable log for every file, providing a complete chain of custody. This functionality includes geo-fencing access for the first true data residency, data localization and data sovereignty available to companies looking for compliance.</p>
                </div>
            </div>
            <div className="flex justify-evenly items-center flex-wrap px-5 my-20">
                <div className="w-full md:w-[40%]">
                    <h1 className='text-5xl font-bold'>Seamless Team Collaboration</h1>
                    <br />
                    <p>Your business depends on collaboration. For humans, this includes teams, customers, partners, and vendors. For machines, this includes apps, IoT, and other systems. The XQ Secure Team gives everyone and everything one place to work together seamlessly on your most important content. Your workflows shouldn’t be limited by data size, security, or compliance.</p>
                </div>
                <img className='m-3 w-[268px] rounded' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/a631c9f4-92d5-4529-9997-877e2f9b8a0c/share.png?format=500w" alt="" />
            </div>
            <div className="flex justify-evenly items-center flex-wrap px-5 my-20">
                <img className='m-3 w-[292px] rounded' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/26cafbc7-cd9c-4f43-bb02-9fc941aabe09/gov+cloud.png?format=500w" alt="" />
                <div className="w-full md:w-[40%]">
                    <h1 className='text-5xl font-bold'>CMMC Gov Cloud Alternative</h1>
                    <br />
                    <p>Think you need gov cloud for CUI, but hate the cost and burden? Captiva Solutions, a C3PAO CMMC Assessor for the DoD, has confirmed that XQ is secure enough that it can replace the Gov Cloud requirement for CUI. Schedule a call with us if you have more CMMC compliance questions.</p>
                </div>
            </div>
            <div className="flex justify-evenly items-center flex-wrap px-5 my-20">
                <div className="w-full md:w-[40%]">
                    <h1 className='text-5xl font-bold'>Security And Compliance That Fit Your Needs</h1>
                    <br />
                    <p>When securely collaborating is an essential part of your job, you need security and compliance you can trust.
                        <br />
                        <br />
                        With the Content Cloud, we bring you the very best in security, privacy, and compliance — and it's built right into our DNA.
                        <br />
                        <br />
                        Top to secure their most valuable and highly sensitive data, all while reducing financial, legal, and reputational risk. And we're proud to have earned their trust.</p>
                </div>
                <img className='m-3 w-[292px] rounded' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/1657911733502-JH54LYZP48B9YYNO136J/provacy-and-compliance.png?format=1500w" alt="" />
            </div>
            <div className="flex justify-evenly items-center flex-wrap px-5 my-20">
                <img className='m-3 w-[292px] rounded' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/abc1698d-1178-4ad6-8c7f-bfccb90a3974/data-control.png?format=1500w" alt="" />
                <div className="w-full md:w-[40%]">
                    <h1 className='text-5xl font-bold'>Zero-Trust Data Security Controls</h1>
                    <br />
                    <p>Many platforms claim to be zero trust enabled. Usually, that means network access control (ZTNA). XQ is new. It offers Zero Trust Data control to protect your data even if threat actors gain access to the network or an identity.
                        <br />
                        <br />
                        Our zero-trust data architecture ensures teams can collaborate safely with strong user authentication with SSO and MFA support and information rights management featuring data access tracking even when the data is outside your control.
                        <br />
                        <br />
                        XQ is FIPS 140-2 compliant and uniquely crypto-agile to future-proof. With XQ, you maintain complete, independent control of your encryption keys.
                    </p>
                </div>
            </div>
            <div className="flex justify-evenly items-center  flex-wrap px-5 my-20">
                <div className="w-full md:w-[40%]">
                    <h1 className='text-5xl font-bold'>Simplified Security View</h1>
                    <br />
                    <p>XQ answers the question: do you know where your data is accessed? With our Data Operational View, you get a single viewport for real-time reports of how, when, and where your data access attempts occur. This extended visibility happens across all the XQ products, not just Vault, so you can easily track emails, files, and data in flight.</p>
                </div>
                <img className='m-3 w-[240px] rounded' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/2f2226af-40f4-4a48-9bec-9554a8ace413/security+view.png?format=500w" alt="" />
            </div>
            <div className="flex justify-evenly items-center flex-wrap px-5 my-20">
                <img className='m-3 w-[241px] rounded' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/ccc6f133-2235-4f4d-b12c-571ac057acd5/leak.png?format=300w" alt="" />
                <div className="w-full md:w-[40%]">
                    <h1 className='text-5xl font-bold'>Intelligent Data Leak Prevention And Threat Detection</h1>
                    <br />
                    <p>XQ Data Policies help you protect the flow of information and reduce risks without impeding workflows. Use geo-location, content, and identity security controls to automatically prevent data loss.
                        <br />
                        <br />
                        Use native tools to help secure content at scale, enabling secure hybrid cloud work from anywhere, anytime, and any device with.</p>
                </div>
            </div>
            <div className="flex justify-evenly items-center flex-wrap px-5 my-20">
                <div className="w-full md:w-[40%]">
                    <h1 className='text-5xl font-bold'>Simplify Your Information Governance Strategy</h1>
                    <br />
                    <p>We make it easy to streamline information governance with flexible retention schedules, preservation for defensible discovery, and disposition management.
                        <br />
                        <br />
                        Get the content lifecycle management your organization needs to reduce risk and stay compliant while keeping teams productive.</p>
                </div>
                <img className='m-3 w-[188px] rounded' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/3a987a1a-6584-4b80-82cd-a3a49ae84a5d/simplify.png?format=300w" alt="" />
            </div>
            <div className="flex justify-evenly items-center flex-wrap px-5">
                <img className='m-3 w-[270px] rounded' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/d846ccba-7246-4b36-9208-066d35cc029e/compliance.png" alt="" />
                <div className="w-full md:w-[40%]">
                    <h1 className='text-5xl font-bold'>Exceed Global Compliance Requirements</h1>
                    <br />
                    <p>At XQ, we work hard to exceed the highest bar for data privacy. We're dedicated to earning and keeping our customers' trust. Whether you need to meet specific industry regulations or international privacy standards, the XQ Vault covers all your data compliance and regulatory needs — including <strong>CMMC, GDPR, GLBA, HIPAA, ITAR, NIST-CUI, FINRA,</strong> and more.</p>
                </div>
            </div>
            <div className="p-5 md:px-20 my-10">
                <h1 className='text-5xl font-bold'>Features</h1>
                <p className=' w-full md:w-[500px] my-5'>XQ protects and tracks data-at-rest enabling policy-based access to any digital resource on owned infrastructure across disparate networks and remote data access control.</p>
                <ul className='ml-5'>
                    <li>✓ Zero Trust Data Protection</li>
                    <li>✓  HIPAA, CMMC, NIST-CUI, GDPR, FINRA, ITAR rule packs</li>
                    <li>✓  Data Residency, Localization, Sovereignty</li>
                    <li>✓  Azure Blob & AWS S3 Compatible</li>
                    <li>✓  Works with any SFTP</li>
                    <li>✓  Data Policy Enforcement</li>
                    <li>✓  Data Policy Enforcement</li>
                    <li>✓  Hybrid Cloud Transfer</li>
                </ul>
            </div>
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

export default ZeroTrustVault;