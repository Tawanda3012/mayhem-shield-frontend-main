// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import SwiperCore, { Pagination } from "swiper/core";
// import { useState } from "react";

// // Initialize Swiper core
// SwiperCore.use([Pagination]);

// const MySwiper = () => {
//     const [selectedOption, setSelectedOption] = useState(null);

//     const handleRadioChange = (event) => {
//         setSelectedOption(event.target.value);
//     };

//     const handleSlideChange = () => {
//         if (selectedOption === null) {
//             return false;
//         }
//     };

//     return (
//         <div className="max-w-2xl mx-auto">
//             <Swiper
//                 spaceBetween={50}
//                 slidesPerView={1}
//                 pagination={{ clickable: true }}
//                 onSlideChange={handleSlideChange}
//             >
//                 <SwiperSlide>
//                     <div className="p-6">
//                         <h2 className="text-xl font-bold mb-4">Question 1</h2>
//                         <p className="mb-4">
//                             What is the capital of France?
//                         </p>
//                         <div className="flex flex-col gap-2">
//                             <label className="flex items-center gap-2">
//                                 <input type="radio" name="question1" value="Paris" onChange={handleRadioChange} checked={selectedOption === "Paris"} />
//                                 <span>Paris</span>
//                             </label>
//                             <label className="flex items-center gap-2">
//                                 <input type="radio" name="question1" value="Madrid" onChange={handleRadioChange} checked={selectedOption === "Madrid"} />
//                                 <span>Madrid</span>
//                             </label>
//                             <label className="flex items-center gap-2">
//                                 <input type="radio" name="question1" value="London" onChange={handleRadioChange} checked={selectedOption === "London"} />
//                                 <span>London</span>
//                             </label>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="p-6">
//                         <h2 className="text-xl font-bold mb-4">Question 2</h2>
//                         <p className="mb-4">
//                             What is the largest planet in our solar system?
//                         </p>
//                         <div className="flex flex-col gap-2">
//                             <label className="flex items-center gap-2">
//                                 <input type="radio" name="question2" value="Jupiter" onChange={handleRadioChange} checked={selectedOption === "Jupiter"} />
//                                 <span>Jupiter</span>
//                             </label>
//                             <label className="flex items-center gap-2">
//                                 <input type="radio" name="question2" value="Earth" onChange={handleRadioChange} checked={selectedOption === "Earth"} />
//                                 <span>Earth</span>
//                             </label>
//                             <label className="flex items-center gap-2">
//                                 <input type="radio" name="question2" value="Mars" onChange={handleRadioChange} checked={selectedOption === "Mars"} />
//                                 <span>Mars</span>
//                             </label>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     );
// };

// export default MySwiper;
