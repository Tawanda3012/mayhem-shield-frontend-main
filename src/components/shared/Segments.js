import React from 'react';

const Segments = ({title,detailses}) => {
    return (
      <div className="bg-white border-2 rounded-lg p-[24px] my-[12px]">
        <div className="font-bold font-ptSans  text-[24px]">
          <span className="text-black">{title.black}</span>
          <span className="text-[#0000ff]">{title.blue}</span>
        </div>
        <div className="font-merriweather text-[#5B5B5B] text-[16px]">
          <ul className="list-disc mt-[16px]">
            {detailses.map((details, i) => (
              <>
                <li  className="ml-7" key={i}>
                  {details}
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default Segments;