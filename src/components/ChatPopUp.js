import React, { useEffect, useRef, useState } from 'react';
import Input from './Chat/Input';
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import auth, { db } from '../firebase.init';
import { collection, doc, getDoc, getDocs, onSnapshot, query, setDoc, where } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';
const ChatPopUp = () => {
    const [chatVisible, setchatvisible] = useState(true);
    const [IsSignin, setIsSignin] = useState(localStorage.getItem("email"));
    const [chat, setChat] = useState([])
    const [Timeholder, setTimeholder] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    const chatContainerRef = useRef(null);



    useEffect(() => {
        // Scroll to the bottom of the chat when the component mounts or chat updates
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chat]);

    const [isAdmin, setIsAdmin] = useState(false)

    const getAdmin = async () => {
        const user = auth.currentUser
        if (user) {
            try {
                // find admin  from user collection. 
                const admin = await getDocs(
                    query(
                        collection(db, 'users'),
                        where('email', '==', user.email),
                        where('type', '==', 'Admin')
                    )
                );
                console.log();
                if (admin?.docs[0]?.data()) {
                    setIsAdmin(true)
                }
            } catch (error) {
                console.error('Error getting customer data:', error);
            }
        }
    };
    useEffect(() => {
        getAdmin()
    }, [])

    const handleSignin = async () => {
        try {
            const result = await signInWithPopup(auth, new GoogleAuthProvider());
            const user = result.user;
            localStorage.setItem("email", user.email);
            localStorage.setItem("displayName", user.displayName);
            localStorage.setItem("photoURL", user.photoURL);
            localStorage.setItem("uid", user.uid);
            setIsSignin(localStorage.getItem("email"))
            await setDoc(doc(db, "users", user.uid), {
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                type: "Customer"
            });
            getChats()



        } catch (error) {
            console.error("Google Sign-In Error:", error);
        }

    }
    const handleSignout = async () => {

        localStorage.clear()
        await signOut(auth);
        setIsSignin(false)
    }


    const getChats = async () => {
        setIsLoading(true)
        const storedEmail = localStorage.getItem("email");
        if (!storedEmail) return;

        try {
            const userDocRef = doc(collection(db, 'chats'), localStorage.getItem("uid"));
            const userData = (await getDoc(userDocRef)).data();

            setChat(Object?.values(userData));
            onSnapshot(userDocRef, (snapshot) => {
                setChat(Object.values(snapshot.data()));
            });
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setIsLoading(false)
        }



    };
    useEffect(() => {
        getChats()
    }, [])

    return (
        <div className='fixed right-9 bottom-9'>
            {
                chatVisible ?
                    <>

                        {
                            isAdmin ?
                                <>
                                    < NavLink to="/adminchathome">
                                        <svg
                                            height="40px"
                                            width="40px"
                                            version="1.1"
                                            id="Capa_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 58 58"
                                            xmlSpace="preserve"
                                        >
                                            <g>
                                                <path style={{ fill: '#0391FD' }} d="M25,9.586C11.193,9.586,0,19.621,0,32c0,4.562,1.524,8.803,4.135,12.343
        C3.792,48.433,2.805,54.194,0,57c0,0,8.47-1.191,14.273-4.651c0.006-0.004,0.009-0.01,0.014-0.013
        c1.794-1.106,3.809-2.397,4.302-2.783c0.301-0.417,0.879-0.543,1.328-0.271c0.298,0.181,0.487,0.512,0.488,0.86
        c0.003,0.582-0.008,0.744-3.651,3.018c2.582,0.81,5.355,1.254,8.245,1.254c13.807,0,25-10.035,25-22.414S38.807,9.586,25,9.586z" />
                                                <path style={{ fill: '#0F71D3' }} d="M58,23.414C58,11.035,46.807,1,33,1c-9.97,0-18.575,5.234-22.589,12.804
        C14.518,11.153,19.553,9.586,25,9.586c13.807,0,25,10.035,25,22.414c0,4.735-1.642,9.124-4.437,12.743
        C51.162,47.448,58,48.414,58,48.414c-2.805-2.805-3.792-8.566-4.135-12.657C56.476,32.217,58,27.976,58,23.414z" />
                                                <path style={{ fill: '#FFFFFF' }} d="M32.5,26h-14c-0.552,0-1-0.447-1-1s0.448-1,1-1h14c0.552,0,1,0.447,1,1S33.052,26,32.5,26z" />
                                                <path style={{ fill: '#FFFFFF' }} d="M38,33H13c-0.552,0-1-0.447-1-1s0.448-1,1-1h25c0.552,0,1,0.447,1,1S38.552,33,38,33z" />
                                                <path style={{ fill: '#FFFFFF' }} d="M38,40H13c-0.552,0-1-0.447-1-1s0.448-1,1-1h25c0.552,0,1,0.447,1,1S38.552,40,38,40z" />
                                            </g>
                                        </svg>
                                    </NavLink>
                                </> :
                                <svg
                                    onClick={() => setchatvisible(!chatVisible)}
                                    height="40px"
                                    width="40px"
                                    version="1.1"
                                    id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 58 58"
                                    xmlSpace="preserve"
                                >
                                    <g>
                                        <path style={{ fill: '#0391FD' }} d="M25,9.586C11.193,9.586,0,19.621,0,32c0,4.562,1.524,8.803,4.135,12.343
        C3.792,48.433,2.805,54.194,0,57c0,0,8.47-1.191,14.273-4.651c0.006-0.004,0.009-0.01,0.014-0.013
        c1.794-1.106,3.809-2.397,4.302-2.783c0.301-0.417,0.879-0.543,1.328-0.271c0.298,0.181,0.487,0.512,0.488,0.86
        c0.003,0.582-0.008,0.744-3.651,3.018c2.582,0.81,5.355,1.254,8.245,1.254c13.807,0,25-10.035,25-22.414S38.807,9.586,25,9.586z" />
                                        <path style={{ fill: '#0F71D3' }} d="M58,23.414C58,11.035,46.807,1,33,1c-9.97,0-18.575,5.234-22.589,12.804
        C14.518,11.153,19.553,9.586,25,9.586c13.807,0,25,10.035,25,22.414c0,4.735-1.642,9.124-4.437,12.743
        C51.162,47.448,58,48.414,58,48.414c-2.805-2.805-3.792-8.566-4.135-12.657C56.476,32.217,58,27.976,58,23.414z" />
                                        <path style={{ fill: '#FFFFFF' }} d="M32.5,26h-14c-0.552,0-1-0.447-1-1s0.448-1,1-1h14c0.552,0,1,0.447,1,1S33.052,26,32.5,26z" />
                                        <path style={{ fill: '#FFFFFF' }} d="M38,33H13c-0.552,0-1-0.447-1-1s0.448-1,1-1h25c0.552,0,1,0.447,1,1S38.552,33,38,33z" />
                                        <path style={{ fill: '#FFFFFF' }} d="M38,40H13c-0.552,0-1-0.447-1-1s0.448-1,1-1h25c0.552,0,1,0.447,1,1S38.552,40,38,40z" />
                                    </g>
                                </svg>
                        }


                    </> :
                    <>
                        <div className='w-72 h-[70vh] p-3 flex flex-col justify-between max-h-96 z-50 bg-gray-200 border-0 rounded-lg'>
                            {
                                IsSignin ?
                                    <>
                                        <div className="flex items-center gap-5">
                                            <div className="avatar  placeholder">
                                                <div className="bg-gray-400 text-neutral-content rounded-full w-8">
                                                    <img src="https://mayhemshield.com/static/media/logo.c1d4ef9bb8848f29618f.png"
                                                        alt="" />
                                                </div>
                                            </div>
                                            <p className='font-semibold'>Mayhem shield</p>
                                            <div className='flex  gap-1 w-5 absolute right-8 top-2'>
                                                <img onClick={() => setchatvisible(!chatVisible)}
                                                    src="https://www.svgrepo.com/show/365893/x-thin.svg" alt="" />
                                                <img onClick={() => handleSignout()}
                                                    className='w-5' src="https://www.svgrepo.com/show/33761/power-button.svg" alt="" />
                                            </div>

                                        </div>
                                        <div className="overflow-y-scroll w-full h-full mt-6 " ref={chatContainerRef}>
                                            {
                                                isLoading ?
                                                    <div className="animate-spin mx-auto mt-20 border-b-2 border-blue-500 w-10 h-10 rounded-full"></div>
                                                    :
                                                    <>
                                                        {

                                                            chat.map(c => <>

                                                                {c.type === "Admin" ?
                                                                    <div className="chat chat-start">
                                                                        <div className="chat-bubble ">{c.msg}</div>
                                                                        <div className="chat-footer opacity-50">
                                                                            {c.time.slice(0, 5) + c.time.slice(8)}
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    <div className="chat chat-end">
                                                                        <div className="chat-bubble text-white bg-[#5D54EC] rounded-lg">{c.msg}</div>
                                                                        <div className="chat-footer opacity-50">
                                                                            {c.time.slice(0, 5) + c.time.slice(8)}
                                                                        </div>
                                                                        <div className="chat-image avatar">
                                                                            <div className="w-5 rounded-full">
                                                                                <img alt="Tailwind CSS chat bubble component" src={localStorage.getItem("photoURL")} />
                                                                            </div>
                                                                        </div>
                                                                    </div>}

                                                            </>)
                                                        }
                                                    </>}
                                        </div>

                                        <Input setChat={setChat} />

                                    </>
                                    :
                                    <div className="flex items-center justify-center h-full">
                                        <img onClick={() => setchatvisible(!chatVisible)} className=' w-5 absolute right-2 top-2'
                                            src="https://www.svgrepo.com/show/365893/x-thin.svg" alt="" />

                                        <button onClick={handleSignin} className='btn  rounded-xl mx-auto text-white'>
                                            <img className='w-5' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                                            sign in
                                        </button>
                                    </div>
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default ChatPopUp;
