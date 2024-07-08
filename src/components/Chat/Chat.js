import React, { useEffect, useRef, useState } from 'react';
import Messages from './Messages';
import { collection, doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../../firebase.init';

const Chat = ({ user }) => {
    const [chat, setChat] = useState([])
    const [msg, setMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [sending, setsending] = useState(false);


    const chatContainerRef = useRef(null);
    useEffect(() => {
        // Scroll to the bottom of the chat when the component mounts or chat updates
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chat]);

    const getChats = async () => {
        if (user?.email) {
            if (!user?.email) return;

            const userDocRef = doc(collection(db, 'chats'), user.uid);
            setIsLoading(true);

            const updateChat = async () => setChat(Object.values((await getDoc(userDocRef)).data()));

            updateChat();
            onSnapshot(userDocRef, updateChat);
            setIsLoading(false);

        }
    };
    useEffect(() => {
        setChat()
        getChats()
    }, [user])
    const sendMessage = async () => {
        const chats = []
        if (msg) {
            setsending(true)
            const chat = {
                type: "Admin",
                owner: localStorage.getItem("uid"),
                msg: msg,
                time: new Date().toLocaleTimeString('en-GB',
                    { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' || ' + new Date().toLocaleDateString('en-GB'),
                status: "delivered"
            }
            const userData = (await getDoc(doc(collection(db, 'chats'), user.uid))).data();
            if (userData) {
                const updatedObject = {
                    ...userData,
                    [Object.keys(userData).length + 1]: chat
                };
                try {

                    await setDoc(doc(db, "chats", user.uid), updatedObject);
                    // setChat(prev => [...prev, chat]);
                    setMsg("");
                } catch (err) {
                    console.log(err);
                }
            } else {
                try {
                    await setDoc(doc(db, "chats", user.email), { 0: chat });
                    // setChat(prev => [...prev, chat]);
                    setMsg("");
                } catch (err) {
                    console.log(err);
                }
            }
            setsending(false)


        }

    };

    const handleKeyPress = (e) => {
        // Check if the pressed key is Enter (key code 13)
        if (e.key === 'Enter') {
            sendMessage();
        }
    };
    return (
        <div className='bg-gray-100 w-full lg:w-1/2 p-5 '>
            <span className='flex items-center gap-5'>
                <img className='w-10 rounded-full' src={user?.photoURL} alt="" />
                <p className='text-xl font-bold'>{user?.name}</p>
            </span>
            <div className="m-3 border-blue-100 flex flex-col justify-between rounded bg-gray-50 h-[75%]">
                {
                    isLoading ?
                        <div className="animate-spin mx-auto mt-20 border-b-2 border-blue-500 w-10 h-10 rounded-full"></div>
                        :
                        <>


                            <div className="h-[80vh] overflow-y-scroll" ref={chatContainerRef}>
                                {
                                    chat ? chat.map(c => <>

                                        {c.type === "Customer" ?
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
                                            </div>}

                                    </>) : <p className='text-xl text-center text-red-500'>No messages found</p>
                                }
                            </div>
                            <div className='mt-2 flex items-center'>
                                <input
                                    value={msg}
                                    disabled={sending}
                                    placeholder='Write something'
                                    onChange={(e) => setMsg(e.target.value)}
                                    onKeyPress={handleKeyPress} // Added onKeyPress event handler
                                    id='textfield'
                                    type="text"
                                    className='w-[90%] input-primary input input-sm rounded-full'
                                />
                                {
                                    sending ?
                                        <>
                                            <svg className='animate-bounce M-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                            </svg>
                                        </>
                                        :
                                        <div onClick={sendMessage} className="p-2 rounded-lg hover:bg-gray-400 mx-2">
                                            <svg className='' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                            </svg>
                                        </div>
                                }
                            </div>
                        </>}
            </div>

        </div>
    );
};

export default Chat;