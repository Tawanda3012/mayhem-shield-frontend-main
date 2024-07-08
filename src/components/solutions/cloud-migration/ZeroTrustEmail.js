import React from 'react';
import { NavLink } from 'react-router-dom';

const ZeroTrustEmail = () => {
    const containerStyle = {
        backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/712e1a71-0cd4-4cb1-a987-617308c602cb/Header2x.png?format=1500w)`,
        backgroundSize: 'cover',
        backgroundPosition: 'left bottom',
        // width: '100%', // Adjust width as needed
        // height: '500px', // Adjust height as needed
        // transform: 'scale(1.2)', // 20% zoom
    };
    return (
        <>
            <div style={containerStyle}
                className="h-fit  pb-20 lg:pb-52 lg:px-20 flex items-center justify-evenly flex-wrap">

                <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5 ">
                    <h1 className="font-medium text-5xl ">Simple Encrypted Email</h1>
                    <br />
                    <br />
                    <p className='text-3xl'>
                        <span className='font-bold'>
                            Gmail & Outlook Encrypted Messages And Files
                        </span>
                        <br />
                        <br />
                        Future-Proofed, Zero-Trust Data Protection with forensic level data chain of custody.
                    </p>
                    <NavLink to="https://api.leadconnectorhq.com/widget/booking/jvoFgs2jhSzXkld9mU4M" className="btn  mt-10 bg-blue-500 rounded-full normal-case text-white border-0 px-10">Schedule a Demo</NavLink>
                </div>
                <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5">
                    <iframe className='mx-auto max-w-[560px] max-h-[315px]  sm:h-[200px] md:h-[315px] lg:h-[315px] w-full ' src="https://www.youtube.com/embed/ocSHK3mk6fU?si=TPnzelLpW4cb4kFS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className="block md:flex justify-evenly">
                <div className="w-fit flex flex-col items-center mx-auto">
                    <img className='w-[255px]' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/c5ae2755-8162-41d6-890b-c14703260859/gmail+logo.png" alt="" />
                    <h2>Encrypted Gmail</h2>
                    <NavLink to="https://api.leadconnectorhq.com/widget/booking/jvoFgs2jhSzXkld9mU4M" className="btn  mt-10 bg-blue-500 rounded-full normal-case text-white border-0 px-10">Free Demo</NavLink>
                </div>
                <br />
                <br />
                <br />
                <div className="w-fit flex flex-col items-center mx-auto">
                    <img className='w-[255px]' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/418fd353-bb30-44c6-90c1-5d4480e34d97/outlook+logo.png" alt="" />
                    <h2>Encrypted Outlook</h2>
                    <NavLink to="https://api.leadconnectorhq.com/widget/booking/jvoFgs2jhSzXkld9mU4M" className="btn  mt-10 bg-blue-500 rounded-full normal-case text-white border-0 px-10">Free Demo</NavLink>
                </div>
            </div>
            <div className="lg:px-20 block md:flex items-center py-20  bg-gradient-to-t from-gray-200  to-white">
                <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5">
                    <h1 className='font-bold'>Easy Zero Trust Data Protection For Your Digital Workflows</h1>
                    <p className='mt-5'>Extend Zero Trust security control across your entire communication workflows, starting with complete platform email protection. XQ helps teams meet compliance and maintain the recommended safeguards' integrity, availability, and confidentiality.</p>
                </div>
                <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5">
                    <img width="70%" className='mx-auto' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/21f43ea8-ad79-493e-9c4e-956cfc3c794c/Web_asset_Business+Suite_cropped.png" alt="" />
                </div>
            </div>
            <div className="lg:px-20 block md:flex items-center py-20 bg-gradient-to-t from-gray-200  to-white">
                <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5">
                    <img width="70%" className='mx-auto' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/6aaf07b6-fe2b-4b34-8474-ddbc376c73ad/all+the+datas.png" alt="" />
                </div>
                <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5">
                    <h1 className='font-bold'>Cutting Edge Digital Safety</h1>
                    <p className='mt-5'>XQ’s Secure Email is the simplest way to directly encrypt and track messages and files from your Gmail & Outlook workflows.
                        <br />
                        <br />
                        It’s free to install and allows you to take encryption anywhere you work!
                        <br />
                        <br />
                        With XQ, you can safely and securely communicate sensitive data with colleagues and third parties. You’ll never have to worry again about sending sensitive information accessed by anyone other than the intended parties.
                        <br />
                        <br />
                        Your data is encrypted before leaving your device and moving to the cloud, which makes it easy for employers to meet data privacy and compliance obligations.
                        <br />
                        <br />

                    </p>
                </div>
            </div>
            <div className="lg:px-20 block md:flex items-center py-20  bg-gradient-to-t from-gray-200  to-white">
                <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5">
                    <img width="70%" className='mx-auto' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/1ac09ad4-3a3a-408b-9293-27c5f51ccdb5/BEC.png" alt="" />
                </div>
                <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5">
                    <h1 className='font-bold'>Business Email Compromise</h1>
                    <p className='mt-5'>XQ’s Secure Email is the simplest way to directly encrypt and track messages and files from your Gmail & Outlook workflows.
                        <br />
                        <br />
                        Business Email Compromise is the #1 cyber-attack on businesses today. Breaches from Business Email Compromise and data leaks present a significant business risk. XQ can prevent damage from these attacks in real-time.
                        <br />
                        <br />
                        The damage is already done when you notice and remediate the breach.
                        <br />
                        <br />
                        XQ immediately notifies your admin when a Business Email Compromise (BEC) occurs and identifies where the attack is coming originating. XQ helps you reduce the risk of a breach and reduce the time a bad actor has access, from months to minutes.
                        <br />
                        <br />
                        XQ’s Secure Chat can also help remediate a BEC through its ephemeral secure channels.

                    </p>
                </div>
            </div>
            <div className="mt-10">
                <h1 className='font-thin text-4xl text-center mx-10'>XQ Is The Best Choice For Business Email Compromise Prevention </h1>
                <div className="flex flex-wrap justify-evenly mt-10">
                    <div className="w-[300px]">
                        <p className='font-semibold'>Prevention</p>
                        <ul className='ml-8 list-item list-disc'>
                            <li>Stop BEC while it is happening</li>
                            <li>Rule sets stop unauthorized access by identity and geography</li>
                        </ul>
                    </div>
                    <div className="w-[300px]">
                        <p className='font-semibold'> Know Sooner</p>
                        <ul className='ml-8 list-item list-disc'>

                            <li> Know where your email recipients are</li>
                            <li>Immediate notifications if someone is trying to access your data who shouldn’t be</li>
                        </ul>
                    </div>
                    <div className="w-[300px]">
                        <p className='font-semibold'>Control Sent Data</p>
                        <ul className='ml-8 list-item list-disc'>
                            <li>Set identity, time, and location limits on your data</li>
                            <li>Revoke access at any time</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="lg:px-20 block md:flex items-center py-20  bg-gradient-to-t from-gray-200  to-white">

                <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5">
                    <h1 className='font-bold'>Ransomware Extortion Protection</h1>
                    <p className='mt-5'>
                        With millions of dollars at stake, ransomware attackers will likely find ways to hack into email even as protections improve. XQ encrypted email and files make that data useless. Each each and file is encrypted separately for best in class protection.
                    </p>
                </div>
                <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5">
                    <img width="70%" className='mx-auto' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/dfcbff54-468f-452c-807b-92acfdc0743e/Ransomware-extortion.png" alt="" />
                </div>
            </div>
            <div className="w-full md:w-[80%] mx-auto my-20">
                <p className='text-3xl p-5'>
                    Each email is encrypted separately with its own key and its own dynamic access policies. Even if a hacker does gain access through ransomware, with this level of granularity, your email now has a blast radius of ONE.
                    <br />
                    <br />
                    Don’t let one mistake jeopardize your entire company.
                </p>
                <div className="flex justify-evenly">
                    <NavLink to="" className="btn  mt-10 bg-blue-500 rounded-full normal-case text-white border-0 px-5">Blazar Case Study</NavLink>
                    <NavLink to="" className="btn  mt-10 bg-blue-500 rounded-full normal-case text-white border-0 px-5">Team Rehab Case Study</NavLink>
                </div>

            </div>
            <div className="my-20 lg:flex gap-5 justify-evenly">
                <h1 className='w-full text-4xl lg:w-2/5 px-5'>Lifecycle End-To-End Email And File Encryption Across Email, Files, Chat, Forms</h1>
                <p className='w-full lg:w-2/5 px-5 mt-5'>Deploy a single data control platform across your communications work suite starting with Gmail & Outlook that gives you a single security plane visibility across all your organizations' communications internally and externally.</p>
            </div>
            <div className="lg:px-20 block md:flex items-center py-20 bg-gradient-to-t from-gray-200  to-white">
                <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5">
                    <h1 className=''>Secure Sharing</h1>
                    <p className='mt-5'>
                        As private company & consumer data is shared across cloud environments and disparate networks, XQ keeps it secure with continuous protection and lets you govern access throughout the data lifecycle.
                    </p>
                </div>
                <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5">
                    <img width="70%" className='mx-auto' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/6ac92071-baf4-4b1f-9fc4-47a2e2dbf5da/secure-sharing.png" alt="" />
                </div>
            </div>
            <div className="lg:px-20 block md:flex items-center py-20 bg-gradient-to-t from-gray-200  to-white">
                <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5">
                    <h1 className=''>Ease Of Use</h1>
                    <p className='mt-5'>
                        Senders and receivers should both have simple email and file security experiences. One button encryption for email and files for all users and recipients natively embedded in Gmail & Outlook does the trick.
                        <br />
                        <br />
                        XQ is the easiest way to have digitally secure workflows and to extend that security to customers, vendors, and coworkers. XQ is layer on security and control that works where you already work.                     </p>
                </div>
                <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5">
                    <img width="70%" className='mx-auto' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/dc1ade53-56e2-4f67-a449-f20c0e5a0dac/ease-of-use.png?format=750w" alt="" />
                </div>
            </div>
            <div className="lg:px-20 block md:flex items-center py-20 bg-gradient-to-t from-gray-200  to-white">
                <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5">
                    <h1 className=''>Data Control</h1>
                    <p className='mt-5'>
                        Your data is most at risk after it leaves your possession. With XQ, you retain the ability to know what happens to your data, revoke access to it or reprovision it with granular access controls for Data Lifecycle Management. Track who accesses your data, when they do, and where and can control access to that data even when it is in someone else's mailbox.
                    </p>
                </div>
                <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5">
                    <img width="70%" className='mx-auto' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/abc1698d-1178-4ad6-8c7f-bfccb90a3974/data-control.png" alt="" />
                </div>
            </div>
            <div className="my-20">
                <h1 className='font-thin text-4xl text-left md:text-center mx-10'>Gain Effortless And Unprecedented Control Over Your Data</h1>
                <div className="flex flex-wrap justify-around mt-10">
                    <div className="w-[300px]">
                        <h1>Data Blind</h1>
                        <p>XQ won't read your emails because we never have your data. The encrypted content stays within your existing service (i.e., Gmail & Outlook), and we provide the logic to encrypt, decrypt and modify the policies for data access.</p>
                    </div>
                    <div className="w-[300px]">
                        <h1>File Protection</h1>
                        <p>Keep attachments secure even after sent from Gmail or Outlook to desktops, shared folders, Google Drive, or wherever files are stored and transmitted. Track who, when, and where attempted.</p>
                    </div>
                    <div className="w-[300px]">
                        <h1>Revoke Message</h1>
                        <p>Unsend emails by revoking access to encrypted emails by the recipients. Just click the “Revoke” button, and your email is no longer accessible.</p>
                    </div>

                </div>
            </div>
            <div className="my-20 px-5">
                <div className="flex flex-wrap justify-around mt-10">
                    <div className="w-[500px]">
                        <h1>Message Expiration</h1>
                        <p>Do you want an email with your name, address, and credit card information sitting exposed in your vendor’s inbox forever? Probably not. That’s why XQ lets you set an expiration date for any message you send. Choose any length of time, from six hours to six months.</p>
                    </div>
                    <div className="w-[500px]">
                        <h1>Secure Bubble</h1>
                        <p>Use XQ to build a secure bubble for colleagues, clients, vendors, and third parties. With encrypted messaging, you can be sure that your data are safe and secure. All of your invoices, contracts, and documents can be securely exchanged. Further, encrypted messages can be used as a verified channel to prevent phishing attacks and establish message provenance.</p>
                    </div>

                </div>
            </div>
            <div className="">
                <h1 className='text-center'>Data Compliance Shouldn’t Be A Hassle</h1>
                <div className="flex flex-wrap justify-evenly">
                    <div className="w-full md:w-[40%] mt-5 px-10">
                        <div className=" lg:h-[250px]  ">
                            <img className='w-[400px] mx-auto' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/1657911733502-JH54LYZP48B9YYNO136J/provacy-and-compliance.png" alt="" />
                        </div>
                        <div className="">
                            <h1>Privacy And Compliance</h1>
                            <p>Ensure only the intended recipients can read private consumer data. Meet the strictest compliance requirements with zero trust end-to-end encryption preventing unauthorized access to email, chat, support, forms, files, and data in flight to the cloud and throughout its lifecycle. XQ helps support HIPAA, PCI, GLBA / FINRA / SOX, GDPR, ITAR, EAR, CMMC, CUI, CJIS, and FERPA.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[40%] mt-5 px-10">
                        <div className=" lg:h-[250px]  ">
                            <img className='w-[400px] mx-auto' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/1657911834395-J7VR36KLKM2Z1R8OFUXH/data--loss-prevention.png" alt="" />
                        </div>
                        <div className="">
                            <h1>Chain Of Custody Visibility Across Environments</h1>
                            <p>Each interaction with your data, whether it is IoT, CCTV,  email, or chat, is logged with who, where, and when the access was attempted. Each data object has its own individual and unique key and is bound to individual policies. This provides you with an unparalleled ability to manage your data inside and outside your organization. XQ provides a complete auditable trail.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[40%] mt-5 px-10">
                        <div className=" lg:h-[250px]  ">
                            <img className='w-[400px] mx-auto' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/1657911676335-IA8MG0WWHV2T7FN5ATO8/data-residency.png" alt="" />
                        </div>
                        <div className="">
                            <h1>Data Residency</h1>
                            <p>XQ uniquely geolocates each data access request. This also means XQ can geofence data so that it never leaves its designated geography. XQ is the only solution providing geofencing at the data level for GDPR compliance. With XQ, data stays where it is supposed to.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[40%] mt-5 px-10">
                        <div className=" lg:h-[250px]  ">
                            <img className='w-[400px] mx-auto' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/1657987432499-FZ54B3U17EMGG8AC7VOT/worksuite-collaboration.png" alt="" />
                        </div>
                        <div className="">
                            <h1>Cross-Worksuite Collaboration</h1>
                            <p>XQ Message enables your workforce to collaborate and innovate safely in the applications they already use inside and outside your organization. XQ is deeply integrated into your current worksuite protecting data as it is shared across unknown environments.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-20">
                <h1 className='text-center'>Data Control To Power Business</h1>
                <div className="lg:px-20 block md:flex items-center py-20 ">
                    <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5">
                        <img width="70%" className='mx-auto' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/4856044e-bd23-488d-9308-7d806aa0ce98/dashboard+wireframe.png" alt="" />
                    </div>
                    <div className="sm:w-full md:w-3/4 lg:w-1/2 p-5">
                        <ul className='list-disc ml-5 flex flex-col gap-5'>
                            <li>Lifecycle end-to-end encryption data protection</li>
                            <li>Extended trust frictionless sharing with customers and colleagues</li>
                            <li>Maintain data visibility with audit logs to see who has attempted to access data, track where data travels, and take action to reduce/ mitigate breaches.</li>
                            <li>Use SIEM integrations to improve threat remediation workflows.</li>
                            <li>Customize your data loss prevention rule policies from the edge to the cloud.</li>
                            <li>Use XQ Secure for protected file exchanges and collaboration.</li>
                            <li>Securely connect site-to-site and on-prem to cloud data transfer</li>
                            <li>BAA documents are available upon request for healthcare clients</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="px-5 md:px-[20%]">
                <h1 className='text-center text-4xl'>Your Data Can Do More</h1>

                <h1 className='mt-10'>Data-Centric Security</h1>
                <p>Other solutions protect data by focusing on the security of networks, servers, or applications. XQ protects the data itself. Data-centric security allows organizations to overcome the disconnect between IT security and business strategy by marrying security services to the data they protect; When security isn’t an end in itself, data can do more.</p>
                <h1 className='mt-10'>Extraordinary Ease Of Use</h1>
                <p>Changing behavior is hard. For security to work, people need to be able to use it easily. XQ is seamlessly incorporated into users’ existing workflows for extraordinary ease of use.</p>
                <h1 className='mt-10'>Full-Lifecycle Data Control And Visibility</h1>
                <p>Easily view who has accessed or forwarded an email — and adjust or revoke data access controls at any time. Integrate XQ with your SIEM to strengthen threat response and streamline compliance audits.</p>
                <h1 className='mt-10'>Seamless Experiences</h1>
                <p>Recipients who don’t have XQ installed still get the benefits of best in class user experience.</p>
                <h1 className='mt-10'>Quick Deploy And Configuration</h1>
                <p>Get up and running in a matter of minutes. Period.</p>
                <h1 className='mt-10'>Data Loss Prevention (DLP) From The Edge To The Cloud</h1>
                <p>There isn’t another system like XQ. Our patent architecture is true data-centric zero trust that future proofs your data security. XQ microsegments data at the edge and encrypts that data object with its own key and policies that protect it and track it throughout its life from the edge to the cloud throughout its lifecycle. </p>
            </div>
            <div className="py-10 my-10 flex flex-col justify-center items-center bg-blue-400 text-white" >
                <h1 className='text-center'>Try Secure Email Now</h1>
                <NavLink to="https://api.leadconnectorhq.com/widget/booking/jvoFgs2jhSzXkld9mU4M" className="btn w-fit mt-5 text-blue-500 rounded-full normal-case bg-white border-0 px-10 mx-auto">Schedule a Demo</NavLink>
            </div>
            <div className="flex flex-wrap justify-evenly p-5 md:px-20">
                <h1 className='w-full md:w-1/2 '>Ask About Our Custom Configurations</h1>
                <p className='w-full md:w-1/2 '>XQ Secure Communications is free, easy to use, and available from public apps stores and the XQ website. However, we have off-menu versions of our apps for an even better workflow experience if you are looking for special functionality. Do you have complex compliance requirements? Do you have domain and geographic whitelist and blacklists? Get in touch today to take them for a test drive.</p>
            </div>
            <div className="flex flex-wrap p-5 md:px-20 ">
                <div className="w-full md:w-1/2 flex mb-5 justify-center items-center flex-col">
                    <h1>Team Communications</h1>
                    <img className='w-[400px]' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/05d9e359-c72f-41ba-a1a9-28b03c7c9ed0/secure+chat+wireframe.png" alt="" />
                    <NavLink to="https://api.leadconnectorhq.com/widget/booking/jvoFgs2jhSzXkld9mU4M" className="btn  mt-5 bg-blue-500 rounded-full normal-case text-white border-0 px-10">Secure.Chat</NavLink>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center flex-col">
                    <h1>Track and Manage</h1>
                    <img className='w-[400px]' src="https://images.squarespace-cdn.com/content/v1/5f5fdc1e710a334cac1a2c09/4856044e-bd23-488d-9308-7d806aa0ce98/dashboard+wireframe.png" alt="" />
                    <NavLink to="https://api.leadconnectorhq.com/widget/booking/jvoFgs2jhSzXkld9mU4M" className="btn  mt-5 bg-blue-500 rounded-full normal-case text-white border-0 px-10">Dashboard</NavLink>
                </div>
            </div>
        </>
    );
};

export default ZeroTrustEmail;
