import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import Navbar from "./navbar"
import AboutPage from "../assets/polution.jfif"
import AboutPageimg from "../assets/jonas-jacobsson-2xaF4TbjXT0-unsplash.jpg"
import Footer from "../pages/footer"
import { IoIosArrowRoundForward } from "react-icons/io";

const Box = ({ title, content, initialLines = 5 }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const linesToShow = showMore ? content.length : initialLines;

  return (
    <div className='h-auto  flex flex-col p-10 w-auto bg-white'>
      <h1 className='md:text-3xl text-xl border-b-2 border-red-500 w-10'>{title}</h1>
      <div className='ml-5 mt-5'>
        {content.slice(0, linesToShow).map((line, index) => (
          <li key={index}>{line}</li>
        ))}
        {content.length > initialLines && (
          <button
            className='text-white bg-red-500 font-bold p-2 mt-5 cursor-pointer'
            onClick={toggleShowMore}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </div>
  );
};
const aboutpage = () => {
  const aimsContent = [
    'CHS aims to develop the mind & soul of the child.',
    'To help the child become self-confident, committed & diligent.',
    'To build an ideal citizen & good human being.',
    'The main aim of our school is to focus on the overall development of your ward.',
    'Encourage students to dream about making a difference to society and appreciate varied cultures.',
    'Teach students to look for the better way when making decisions with honesty & kindness.',
    'Encourage the expression of ideas and opinions and listening to other views as well as we encourage sports with a spirit of cooperation',
    'Promote tolerance and understanding.',
  ];

  const featuresContent = [
    'To inculcate the feeling of honor for the traditional value & cultural heritage of India.',
    'Spacious garden & ample provision for co-curricular activities.',
    'Emphasis on mental & physical health through yoga & meditation.',
    'Well-equipped airy classrooms & library.',
    'Enabling children to speak fluent English.',
    'Conveyance facility Van & Bus to pick and drop your child with ensured service.',
    'To bring public school education within the reach of common man\'s children.',
  
  ];
  return (
 <div className='overflow-hidden relative'>
      <Navbar />
      <div className='flex flex-col  md:mb-0 md:w-screen h-auto bg-stone-100'>
        <div className='flex flex-col mt-10 md:mt-32'>
          <div className='flex flex-col md:ml-32 ml-10 gap-5'>
            <div className='flex gap-1'>
              <FaHome className='m-1' />
              <span>|</span>
              <div>About</div>
            </div>
            <h1 className='text-7xl '>About </h1>
          </div>
          <div className=' h-auto w-screen bg-stone-100 md:pb-10 pt-20 md:pt-32'>
            <div className='flex flex-col md:flex-row   md:h-full bg-white  md:ml-60 '>
              <img src={AboutPage} alt="chs education center image" className='md:-ml-52  md:h-3/4 p-10 md:w-1/2 -mt-20 ' />

              <div className='flex flex-col md:mt-20 ml-12'>
                <h1 className='text-3xl font-bold'>C.H.S. Education Centre</h1>
                <p className='text-lg md:mr-36 mr-8 text-justify md:mb-0 mb-10 mt-8'>Established on April 9, 2015, CHS Education Centre was founded with the mission of delivering high-quality education to students. The institution is affiliated with CBSE and operates as a co-educational English medium school in Kanpur. CHS is committed to providing value-based education that fosters the holistic development of each student's personality.</p>

                <h1 className='text-9xl text-stone-100  md:ml-60 md:mt-24  mt-10 hidden md:flex  opacity-50'>About </h1>
              </div>

            </div>
            <div className='flex relative '>
              <img src={AboutPageimg} alt="chs school" className="  max-h-auto md:w-screen h-96 md:h-screen object-cover" />

              <div className="absolute inset-0 h-auto bg-black opacity-60"></div>
              <div className='absolute flex md:flex-row flex-col md:gap-20 md:p-20 '>
                <div className='flex md:ml-20 ml-5 mt-5 md:gap-10   h-screen text-white  flex-col'>
                  <h1 className='md:text-8xl text-5xl  underline'>History</h1>
                  <p className='text-xl w-96 md:w-full text-justify mt-4 md:mt-8'>Established on April 9, 2015, CHS Education Centre was founded with the mission of delivering high-quality education to students. The institution is affiliated with CBSE and operates as a co-educational English medium school in Kanpur. CHS is committed to providing value-based education that fosters the holistic development of each student's personality.</p>

                </div>
                <div className='flex md:ml-20 hidden md:flex md:mt-10 gap-10  h-screen text-white  flex-col'>
                    <h1 className='text-7xl   underline'>OUR MOTTO</h1>
                    <p className='text-xl text-justify mt-8'>"Our school's motto: Discipline, Patience, Punctuality & Responsibility. We believe in cultivating self-control, perseverance, and accountability. These values prepare students for academic and personal success. We strive to create a culture that empowers responsible and successful citizens of the world."</p>
                </div>

              </div>

            </div>

          </div>
        </div>
        <div className=' w-screen h-96 relative  mb-32 md:mb-0  '>
          <div className='grid md:grid-flow-col grid-row-2 md:-mt-44  md:grid-cols-2 md:pl-32 md:pr-32 md:gap-10'>

            <div className=''>
              <Box title="Aims" content={aimsContent} />
            </div>
            <div className=''>
              <Box title="Salient Features" content={featuresContent} className="" />
            </div>
            <div>

            </div>
          </div>
        </div>
        <div className='bg-white mt-96 md:mt-0 w-full  relative justify-center h-32 md:mt-0 md:m-20'>
        <div className='w-screen bg-red-600 hover:bg-green-700 h-1 flex align-middle mt-16 justify-center'>
         <h1 className='bg-white -mt-6 flex hover:bg-red-600 hover:text-white hover:-mt-7 font-bold -ml-5 cursor-pointer  p-3'> School Calender
         <IoIosArrowRoundForward className='text-3xl'/></h1>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default aboutpage
