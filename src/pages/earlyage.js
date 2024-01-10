import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import Navbar from "./navbar";
import Earlyage from "../assets/early1.jpeg";
import Footer from "../pages/footer";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const EarlyAge = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    navigate('/Admissionpolicies'); // Fix the quotes around the path
  }

  const textStyle = isHovered ? { color: 'white' } : {};

  return (
    <div>
      <div className='overflow-hidden relative'>
        <Navbar />
        <div className='flex flex-col  md:mb-0 md:w-screen h-auto bg-stone-100'>
          <div className='flex flex-col mt-10 md:mt-32'>
            <div className='flex flex-col md:ml-32 ml-10 gap-5'>
              <div className='flex gap-1'>
                <FaHome className='m-1' />
                <span>|</span>
                <div>About</div>
                <span>|</span>
                <div>Early Years</div>
              </div>
              <h1 className='md:text-7xl text-4xl md:w-1/2 w-3/4'>Early Years Foundation Stage </h1>
            </div>
            <div className=' h-auto w-screen bg-stone-100 md:pb-10 pt-20 md:pt-12'>
              <div className='flex flex-col md:flex-row   md:h-full bg-white  md:mr-60 '>
                <div className='flex flex-col md:mt-20 m-10 md:ml-32'>
                  <h1 className='text-3xl font-bold'>C.H.S. Education Centre</h1>
                  <p className='text-lg text-justify md:mb-0 mb-10 mt-8'>Established on April 9, 2015, CHS Education Centre was founded with the mission of delivering high-quality education to students. The institution is affiliated with CBSE and operates as a co-educational English medium school in Kanpur. CHS is committed to providing value-based education that fosters the holistic development of each student's personality.</p>
                  <h1 className='text-9xl text-stone-100 w-full  md:ml-96 md:mt-24  mt-10 hidden md:flex  opacity-70'>Early Years </h1>
                </div>
                <img src={Earlyage} alt="chs education center image" className='md:ml-32  md:h-3/4 p-10 md:w-1/2 -mt-20 md:-mt-44 ' />
              </div>
            </div>
            <div className=' h-auto w-screen flex justify-center items-center bg-stone-100 md:pb-10 pt-20 mb-5 md:p-12'>
              <div className='flex flex-col md:flex-row w-3/4  md:h-96 bg-white'>
                <div className='flex flex-col m-5  md:m-20'>
                  <div className='flex justify-center items-center'>
                    <h1 className='md:text-3xl text-xl font-bold'>The Early Years Foundation Stage (EYFS)</h1>
                    <div className=' ml-10 w-1/2 h-0 border-2 border-gray-200'></div>
                  </div>
                  <p className='md:text-lg text-md text-justify mt-8'>We invite your child to study at an English language kindergarten - CHS Educational center. All lessons in the kindergarten are conducted by native English speakers. Your child will definitely receive a sufficiently high level of pre-school education in English in our nursery school.</p>
                </div>
              </div>
            </div>
            <div className='w-screen  flex pb-10 flex-col h-auto md:p-12  justify-center items-center'>
              <div className='flex bg-white flex-col md:flex-row col-span-2 md:row-span-2 w-3/4'>
                <div className='flex flex-col gap-4 w-full text-justify md:w-1/2 p-5 md:p-10'>
                  <h1 className='md:text-4xl text-xl font-semibold  '>Admission criteria & process</h1>
                  <div className='md:text-lg flex flex-col gap-4 '>
                    <p>As a first step, parents are welcome to visit their preferred CIS campus. This can be done by submitting the “Apply Now” form to arrange a convenient date and time. Those parents who are unable to fill in the visit to campuses form can call the Admissions Office and book an appointment over the phone.</p>
                    <p>Either during the campus visit or at a later date, prospective pupils take an assessment; the type of assessment varies by age.</p>
                  </div>
                </div>
                <div className=' w-full md:w-1/2 flex justify-center items-center flex-col gap-4 p-5 md:p-10'>
                  <h1 className='md:text-4xl font-semibold'>Contact information</h1>
                  <p className='md:text-xl md:font-bold'>Our phones are attended from Monday to Friday between 9.00am and 6.00pm.</p>
                  <p className='md:text-lg font-bold flex flex-col text-gray-600'>
                    <span>E-mail: chs.edu2015@gmail.com</span>
                    <span>Phone: +91 9580874461</span>
                  </p>
                </div>
              </div>
              <div className='flex bg-white text-red-600 flex-col md:flex-row hover:bg-red-600 col-span-2 md:row-span-2 h-20 w-3/4 justify-center items-center cursor-pointer' onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                onClick={handleClick}>
                  <a href='/certificate'>
                <h1 style={textStyle} className='text-2xl font-semibold flex'> Admission policy
                  <IoIosArrowRoundForward className='text-4xl md:text-4xl mt-1 font-sans' style={textStyle} />
                </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default EarlyAge;
