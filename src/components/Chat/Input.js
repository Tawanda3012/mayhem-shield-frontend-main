import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import React, { useState } from 'react';
import auth, { db } from '../../firebase.init';

const Input = ({ setChat }) => {
    const [msg, setMsg] = useState("");
    const [sending, setsending] = useState(false);


    const sendMessage = async () => {
        // console.log(msg);
        const chats = []
        if (msg) {
            setsending(true)
            const chat = {
                type: "Customer",
                owner: auth?.currentUser?.uid,
                msg: msg,
                time: new Date().toLocaleTimeString('en-GB',
                    { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' || ' + new Date().toLocaleDateString('en-GB'),
                status: "delivered"
            }
            const userData = (await getDoc(doc(collection(db, 'chats'), localStorage.getItem("uid")))).data();
            if (userData) {
                const updatedObject = {
                    ...userData,
                    [Object.keys(userData).length + 1]: chat
                };
                try {

                    await setDoc(doc(db, "chats", localStorage.getItem("uid")), updatedObject);
                    setMsg("");
                } catch (err) {
                    setsending(false)
                    console.log(err);
                }
            } else {
                try {
                    await setDoc(doc(db, "chats", localStorage.getItem("uid")), { 0: chat });
                    setChat(prev => [...prev, chat]);
                    setMsg("");
                } catch (err) {
                    console.log(err);
                    setsending(false)

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
        <div className='mt-2 flex items-center'>
            <input
                value={msg}
                disabled={sending}
                placeholder='Write something'
                onChange={(e) => setMsg(e.target.value)}
                onKeyPress={handleKeyPress} // Added onKeyPress event handler
                id='textfield'
                type="text"
                className='w-[90%]  input input-sm rounded-full'
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
    );
};

export default Input;
