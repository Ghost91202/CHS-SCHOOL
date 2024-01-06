import React, { useState } from 'react';
import Bookimg from '../../assets/WhatsApp Image 2023-12-06 at 1.41.09 PM.jpeg';
import { IoIosArrowRoundForward } from 'react-icons/io';

const BookNow = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const handleHover1 = () => {
    setIsHovered1(true);
  };
  const handleLeave1 = () => {
    setIsHovered1(false);
  };

  const textStyle1 = isHovered1 ? { color: 'white' } : {};

  return (
    <div className="relative flex h-auto md:h-screen w-screen">
      <img src={Bookimg} alt="chs school" className="w-screen md:h-screen h-96 object-cover" />
      <div className="absolute md:h-screen h-96 inset-0 bg-black opacity-50"></div>

      <div className='absolute text-white md:ml-52 ml-10  mb-5 md:mt-52 mt-20 z-3'>
        <h1 className='md:text-6xl text-3xl border-b-2 md:w-96 w-52 md:mb-14 mb-5   pb-5 border-gray-400'>School Tour</h1>
        <p className='md:text-2xl text-xl font-bold  tracking-wide'>If you would like to book a School Tour please contact us.</p>
      </div>
      <div
        className="w-screen absolute md:p-40 p-10 md:mt-80 top-40 "
       
      >
        <div className="bg-white flex justify-center items-center cursor-pointer w-full mt-32 md:mt-0 md:w-full hover:bg-red-600 h-20 md:h-32"
         onMouseEnter={handleHover1}
         onMouseLeave={handleLeave1}
          >
          <h1 className="text-red-700 flex   text-3xl mt-1" style={textStyle1}>
            Book A Tour Now <IoIosArrowRoundForward className="mt-1 text-4xl" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
