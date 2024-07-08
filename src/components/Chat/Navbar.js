import React, { useEffect, useState } from 'react';
import Search from './Search';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../firebase.init';

const Navbar = ({ setUser }) => {
    const [users, setUsers] = useState(null);
    const [selectedUser, setselectedUser] = useState(null);

    
    useEffect(() => {

        const unsubscribe = onSnapshot(
            query(collection(db, 'users'), where('type', '==', 'Customer')),
            (snapshot) => {
                const customerData = snapshot.docs.map((doc) => doc.data());
                setUsers(customerData);
            }
        );

        // Clean up the subscription when the component unmounts
        return () => unsubscribe();
    }, []);

    const handleClick = (user) => {
        setselectedUser(user);
        setUser(user);
        if (selectedUser?.email === user.email) {
            console.log("bg - red - 300");
        }
    };

    return (
        <div className='border-b border-black h-[90vh] overflow-y-scroll'>
            <p className='text-xl text-center font-semibold'>All users</p>
            {users?.map((user) => (
                <div
                    key={user.email} // Make sure to add a unique key
                    onClick={() => handleClick(user)}
                    className={"my-2 border border-gray-600 rounded p-3 flex gap-2"}
                >
                    <img src={user.photoURL} className='w-10 rounded-full' alt='' />
                    <p>{user.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Navbar;
