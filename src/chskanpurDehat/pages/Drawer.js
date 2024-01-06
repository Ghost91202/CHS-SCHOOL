// DrawerComponent.js

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoAppsOutline } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";

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
  background-color: white;
  z-index: 1000;
  padding: 16px;
  opacity:1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.4s ease-in-out;
  transition: transform 0.5s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
`;

const DrawerContent = styled.div`
  /* Your custom styles for drawer content */
  background-color: white;
`;


const icon = styled.div`

width: 2vw;

`
const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 30px;
  background-color: white;
  border: none;
  font-size: 40px;
  cursor: pointer;
`;

const DrawerComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='flex  flex-col gap-0 bg-gray-200 md:h-screen justify-between  cursor-pointer m-0 sm:w-none md:w-14 w-0  p-2 z-50'>
        <IoAppsOutline onClick={toggleDrawer} className='text-4xl  cursor-pointer ' />
        <div className='md:flex text-black hidden -rotate-90 gap-10 mb-20'>

          <div className='flex hover:text-red-500 underline-offset-2 hover:underline hover:text-red-600 cursor-pointer gap-1'>
            <CiYoutube className='flex mt-2 ' />
            youtube
          </div>
          <div className='hover:text-red-500 underline-offset-2 hover:underline hover:text-red-600'>
            telegram
          </div>
        </div>
      </div>

      <DrawerWrapper isOpen={isOpen}>
        <CloseButton onClick={toggleDrawer}>&times;</CloseButton>
        <DrawerContent>
          {/* Your drawer content goes here */}
          <div className='m-20 grid sm:grid-row pb-10  md:grid-cols-4  gap-5'>
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-xl'>CHS</h1>

              <div className="flex flex-col gap-2">
                <a href="/">About</a>
                <a href="/">Mission and values</a>
                <a href="/">School calendar</a>
                <a href="/">School accreditations</a>
                <a href="/">Quality assurance department</a>
                <a href="/">Contacts</a>
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-xl'>Our team</h1>

              <div className="flex flex-col gap-2">
                <a href="/">All</a>
                <a href="/">Administration</a>
                <a href="/">Primary</a>
                <a href="/">Secondary</a>

              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-xl'>Academics</h1>

              <div className="flex flex-col gap-2">
                <a href="/">Early years foundation stage
                </a>
                <a href="/">Primary School
                </a>
                <a href="/">Secondary School
                </a>
                <a href="/">Sixth form
                </a>
                <a href="/">Russian curriculum
                </a>
                <a href="/">Afterschool curriculum</a>
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-xl'>Work at CHS</h1>

              <div className="flex flex-col gap-2">
                <a href="/">News</a>
                <a href="/">Gallery</a>
                <a href="/">Articles</a>

              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-xl'>Admissions</h1>

              <div className="flex flex-col gap-2">
                <a href="/">How to apply</a>
                <a href="/">Tuition fees </a>
                <a href="/">School calendar</a>
                <a href="/">Admissions policies</a>
                <a href="/">Apply Now</a>

              </div>
            </div>

          </div>
        </DrawerContent>
      </DrawerWrapper>
    </div>
  );
};

export default DrawerComponent;
