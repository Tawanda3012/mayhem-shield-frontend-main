import React from 'react';

const ZeroTrustNetworking = () => {
    return (
        <div className="lg:w-3/4 md:w-[70%] sm:w-full mx-auto pt-[50px]">
            <p className="font-merriweather mx-auto text-justify  mb-[91px] sm:px-5">
                Zero Trust is a security architecture that requires authentication and verification of all users and devices before granting access to resources, regardless of where the user or device is located. The goal of zero trust is to prevent attacker lateral movement by providing application isolation and protection at every network touchpoint.
                <br />
                <br />
                Traditional network security relies on the premise "trust first, ask questions later" and focuses on protecting resources inside the network perimeter from external threats. However, this approach exposes the organization to malicious internal actors who can gain unauthorized access and wreak havoc. Zero Trust, on the other hand, is based on the principle "never trust, always verify" and enforces authentication and authorization dynamically and continuously, making it a more effective approach for securing modern, cloud-based environments.
                <br />
                <br />
                <span className='font-black'>Key principles of zero trust networking include:</span>
                <br />
                <br />
                <span className='font-black'>Authenticate:</span> Require multi-factor authentication and enforce authentication dynamically and continuously.
                <br />
                <br />
                <span className='font-black'>Authorize:</span> Grant access based on all available data points such as user identity, location, device, application or workload, data classification and other factors.
                <br />
                <br />
                <span className='font-black'>Control access:</span> Use just-in-time (JIT) and just-enough-access (JEA) policies and data protection to secure data and workloads and enforce the principle of "least privilege".
                <br />
                <br />
                Encrypt: Segment access by network, user, device and application and encrypt all sessions end-to-end.
                <br />
                <br />
                Continuous Improvement: Monitor the current state of network assets, infrastructure and connections to ensure data and other organizational resources are secure and to improve the security posture of the network.
                <br />
                <br />
                Implementing a zero trust network requires a holistic approach that starts with identifying the protect surface (sensitive data, assets, applications and services) and mapping the transaction flows to gain insight into how data and resources are accessed. It also requires continuous monitoring, real-time visibility, and updating of security policies as the environment changes.
                <br />
                <br />
                At Mayhem Shield, we can help your organization implement a zero trust network architecture that is tailored to your specific needs. Our team of experts has the knowledge and experience to guide you through the process of identifying and protecting your assets, controlling access and implementing encryption. <a href="/lets-talk" className="text-blue-500">Contact us</a> to join the hundreds of businesses already enjoying success from modernization.


            </p>
        </div>
    );
};

export default ZeroTrustNetworking;