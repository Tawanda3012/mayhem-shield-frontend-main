import React from 'react';

const Search = () => {
    return (
        <div>
            <div className="">
                <input type="text" placeholder='search name'
                    className='input input-sm input-bordered bg-transparent rounded mt-2 w-full' />

                {/* <div className="mt-2 flex gap-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        className='w-10 rounded-full' alt="" />
                    <p>Mamudul</p>
                </div> */}
            </div>
        </div>
    );
};

export default Search;