import React from 'react';

const Card = ({ img, title, subtitle }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    console.log(img)
    const cardimg = require(`./card-Images/${img}.jpg`)
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="w-fit overflow-hidden mx-auto rounded-md">
            <div
                className={`relative bg-opacity-50 mx-auto  bg-norepeat hover:scale-110 transform transition-all duration-300 bg-cover bg-[#777] p-8 w-[350px] h-[550px] flex justify-center items-center cursor-pointer`}
                style={{
                    backgroundImage: `url(${cardimg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '',
                    height: '',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="absolute inset-0 flex justify-center items-center  hover:bg-gradient-to-t hover:from-[#ffffff1b] hover:to-[#ffc10792]  w-full h-full p-5">
                    <div className={`text-white text-center `}>
                        <h2 className="text-5xl font-bold">{title}</h2>
                        {isHovered && <p className="mt-2">{subtitle}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
