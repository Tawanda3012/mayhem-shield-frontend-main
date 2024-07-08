import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const HoverCard = ({ c }) => {
    const { title, description, logo, link } = c
    const [isHovered, setIsHovered] = useState(false);


    return (
        <NavLink
            to={link}
            className={`box lg:w-[410px] md:w-[40%] sm:w-full mx-auto h-[220px] text-white flex text-center flex-col items-center justify-evenly p-5  bg-blue-500 rounded-lg overflow-hidden transition-all relative duration-500`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`transition-all mb-5 text-white ${isHovered ? '-translate-y-2 mt-[-120px]' : ''}`}>
                {logo}
            </div>
            <div className={`transition-all ${isHovered ? '-translate-y-2 ' : ''}`}>
                <h1 className="text-3xl font-semibold">{title}</h1>
            </div>
            <div className={`transition-all ${!isHovered ? 'translate-y-2 opacity-0' : ''}`}>
                {description}
            </div>
        </NavLink>
    );
};



export default HoverCard;
