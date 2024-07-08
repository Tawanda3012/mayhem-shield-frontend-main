import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Chat/Sidebar';
import Chat from '../../components/Chat/Chat';
import loading from '../../components/shared/infinityloading.svg'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import auth, { db } from '../../firebase.init';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';

const ChatHome = () => {
    const [user, setUser] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    const getAdmin = async () => {
        const user = auth.currentUser
        console.log(user);
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
    return (
        <>
            {isAdmin ?
                <>
                    <div className="drawer mt-5">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex justify-evenly flex-wrap overflow-auto">
                            <label htmlFor="my-drawer" className="btn btn-primary drawer-button">All chats</label>
                            <br />
                            {
                                isLoading ?
                                    <div className="flex justify-center lg:w-[70%] p-3 md:w-[75%] sm:w-full bg-[#F1F2F3] items-center">
                                        <img src={loading} alt="" srcset="" />
                                    </div>
                                    :
                                    <Chat setIsLoading={setIsLoading} user={user} />
                            }
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <Sidebar setIsLoading={setIsLoading} setUser={setUser} />
                        </div>
                    </div>
                </>
                :
                <NavLink className="btn btn-primary mt-10 text-white rounded  " to="/login">Login Page</NavLink>

            }
        </>
    );
};

export default ChatHome;