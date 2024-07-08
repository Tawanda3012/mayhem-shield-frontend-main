import React from 'react';
import Navbar from './Navbar';

const Sidebar = ({ setUser, setIsLoading }) => {

    return (
        <div className='max-w-[80%] w-[400px] bg-[#ddf] min-h-[400px] px-5 '>
            <Navbar setIsLoading={setIsLoading} setUser={setUser}/>
        </div>
    );
};

export default Sidebar;
