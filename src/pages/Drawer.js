// DrawerComponent.js

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoAppsOutline } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";
import { Link } from 'react-router-dom';
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;


const DrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.4s ease-in-out;
`;

const DrawerContent = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 100vw;
  overflow-x: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;


const DrawerComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='flex  flex-col gap-0  bg-gray-200 md:h-screen justify-between  cursor-pointer m-0 sm:w-none md:w-14 w-0  p-2 z-50'>
        <IoAppsOutline onClick={toggleDrawer} className='text-4xl  cursor-pointer ' />
        <div className='md:flex text-black hidden -rotate-90 gap-10 mb-20'>

          <Link to="https://www.youtube.com/channel/UC9zRgiuIibfuaG2cgsSq_uQ">
          <div className='flex underline-offset-2 hover:underline hover:text-red-600 cursor-pointer gap-1'>
            <CiYoutube className='flex mt-2 ' />
            youtube
          </div>
          </Link>
          <div className=' underline-offset-2 hover:underline hover:text-red-600'>
            telegram
          </div>
        </div>
      </div>

      <DrawerWrapper isOpen={isOpen} className='overflow-y-scroll'>
        <CloseButton onClick={toggleDrawer}>&times;</CloseButton>
        <DrawerContent>
          {/* Your drawer content goes here */}
          <div className='m-20 grid sm:grid-row pb-10 w-screen bg-white md:grid-cols-4  gap-5'>
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-xl'>CHS</h1>

              <div className="flex flex-col gap-2">
                <Link to="/About  ">About</Link>
                <Link to="/">Mission and values</Link>
                <Link to="/">School calendar</Link>
                <Link to="/Gallery">Gallery</Link>

                <Link to="/">Contacts</Link>
                <Link to="/Activities">Activities</Link>
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-xl'>About School</h1>

              <div className="flex flex-col gap-2">
                <Link to="/Timing">SchoolTiming</Link>
                <Link to="/Administrator">Administration</Link>
                <Link to="/">Primary</Link>
                <Link to="/">Secondary</Link>

              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-xl'>Our team</h1>

              <div className="flex flex-col gap-2">
                <Link to="/">All</Link>
                <Link to="/">Administration</Link>
                <Link to="/">Primary</Link>
                <Link to="/">Secondary</Link>

              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-xl'>Academics</h1>

              <div className="flex flex-col gap-2">
                <Link to="/">Early years foundation stage
                </Link>
                <Link to="/">Primary School
                </Link>
                <Link to="/">Secondary School
                </Link>
                <Link to="/">Sixth form
                </Link>



              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-xl'>Work at CHS</h1>

              <div className="flex flex-col gap-2">
                <Link to="/">News</Link>
                <Link to="/cbse/Gallery">Gallery</Link>
                <Link to="/">Articles</Link>

              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-xl'>Admissions</h1>

              <div className="flex flex-col gap-2">
                <Link to="/">How to apply</Link>
                <Link to="/">Tuition fees </Link>
                <Link to="/">School calendar</Link>
                <Link to="/">Admissions policies</Link>
                <Link to="/">Apply Now</Link>

              </div>
            </div>

          </div>
        </DrawerContent>
      </DrawerWrapper>
    </div>
  );
};

export default DrawerComponent;
