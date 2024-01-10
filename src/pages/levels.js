import React, { useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Level = ({ title, description, ageRange }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const textStyle = isHovered ? { color: 'white' } : {};

  return (
    <div
      className='hover:bg-red-600 hover:text-white p-5 md:p-10 flex flex-col gap-3'
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <h1 className='text-2xl md:text-4xl' style={textStyle}>
        {title}
      </h1>
      <p className='text-md md:text-xl' style={textStyle}>
        {description}
      </p>

      <div className='text-red-600 flex items-center md:mt-14  gap-1'>
        <h1 className='text-4xl' style={textStyle}>
          {ageRange}
        </h1>
        <span className='underline' style={textStyle}>
          {ageRange.includes('-') ? ' years' : ' of the year'}
        </span>
      </div>
      <IoIosArrowRoundForward className='text-4xl md:text-6xl font-sans' style={textStyle} />
    </div>
  );
};

const Levels = () => {
  return (
    <div className='h-auto md:h-96 w-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:ml-14 md:h-96 h-full'>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:ml-14 h-full'>
        <a href='/early-years'>
        <Level title='Kindergarten' description='CHS Education center' ageRange='3-5' />
        </a>
        <a href='/primary'>

        <Level title='Primary school' description='CHS Education center' ageRange='5-11' />
        </a>
        </div>
       <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:ml-14 h-full'>
       <Level title='High school' description='CHS Education center' ageRange='11-16' />
        <Level title='Intermediate' description='CHS Education center' ageRange='16-18' />
       </div>
      </div>
    </div>
  );
};

export default Levels;
