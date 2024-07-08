import React from 'react';
import PDFFile from './PDFFile';

// import development_img from '../images and logos/developer.gif'

const Developer = () => {
    return (
        <div className={`min-h-[400px] bg-[url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F204702745549241158%2F&psig=AOvVaw1qwSXB8ooq8MjAIhCg4vBI&ust=1675793435196000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIifxJW_gf0CFQAAAAAdAAAAABAE)]`}>
            MH web solutions
            {/* <img src={development_img} alt="" className='mx-auto' /> */}

            <br />
            <div className="w-[1240px] mx-auto">
                <a href="https://www.linkedin.com/in/mahmudul-hasan-030a31228"><button>Developer's profile</button></a>
            </div>

            <div className="mx-auto">
            </div>
        </div>
    );
};

export default Developer;