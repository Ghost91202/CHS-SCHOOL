import React from 'react';
import MissionIMG from "../../assets/young-boy-studying-front-computer_1308-84389.jpg";
import MissionIMG2 from "../../assets/isolated-earth-white_1308-55360.avif";
import './Mission.css'; // Import a CSS file for styling

const Mission = () => {
  return (
    <div className='h-auto w-screen  bg-stone-100 pb-10 md:pb-20 pt-52'>
      <div className='flex flex-col md:flex-row h-auto bg-white mx-4 p-5 md:p-0 md:ml-16 lg:ml-20 rounded-3xl xl:ml-32'>
        <img src={MissionIMG} alt="chs education center image" className='md:w-80  lg:w-3/5 -mt-20 mix-blend-darken object-cover md:-ml-36 h-3/4' />

        <div className='flex flex-col mt-10 md:mt-20 md:ml-12'>
          <div className='mb-5'>
            <h1 className='text-2xl md:text-4xl pb-3 md:pb-5 border-b-2 w-32 md:w-48 lg:w-64 border-red-500 mb-4'>Mission:</h1>
            <p className='text-md md:text-xl'>Positively impacting society through holistic education.</p>
          </div>
          <div className='mb-5'>
            <h1 className='text-2xl md:text-4xl pb-3 md:pb-5 border-b-2 w-32 md:w-48 lg:w-64 border-red-500 mb-4'>Vision:</h1>
            <p className='text-md md:text-xl'>Grow our community in an inspiring learning environment.</p>
          </div>
          <div className='mb-5'>
            <h1 className='text-2xl md:text-4xl pb-3 md:pb-5 border-b-2 w-72 md:w-96 lg:w-120 border-red-500 mb-4'>School concept:</h1>
            <p className='text-md md:text-xl mb-3'>An international school that promotes character building, skill development, and lifelong learning.</p>
            <p className='text-md md:text-xl'>Everything we do at CIS contributes to the following areas:</p>
            <div className='m-3 md:m-5'>
              <li>CHARACTER (VALUES)</li>
              <li>SKILLS</li>
              <li>KNOWLEDGE</li>
              <li>INTERNATIONAL RELATIONSHIPS</li>
            </div>
            <div className="earth-image">
              <img src={MissionIMG2} alt="chs school kanpur" className='hidden md:flex md:ml-44  w-32 md:w-44 -mt-10 md:-mt-20 mix-blend-darken rotate-animation' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
