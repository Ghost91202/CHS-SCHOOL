import React from 'react';
import { Carousel } from 'flowbite-react';
import cyber1 from "../assets/26212813_efhk_d386_220311.jpg"
import cyber2 from "../assets/awards.jpg"
import cyber3 from "../assets/72351f9d3ad5e1074662490290ef160c.jpg"
import cyber4 from "../assets/PRE- PRIMARY ACT 7.jpg"

import "./ImageCarousel.css"
// import { Helmet } from 'react-helmet';

function Component() {
  return (
    <div className="-z-1 md:-z-10    rounded-none  sm:h-64 xl:h-screen 2xl:h-screen h-62  md:overflow-hidden  md:h-screen overflow-hidden ">

      <Carousel leftControl="" rightControl="" className='md:h-screen h-72 grid grid-1 -z-1 relative md:ml-14 md:mt-12 overflow-hidden' >

        <div>
          <img src={cyber4} alt="..." className='md:h-full h-96 w-screen flex relative' />
          <div className='absolute text-white font-extrabold z-10 md:top-40 top-24 ml-5 md:ml-40  md:w-2/4 '>
            <p className='md:text-2xl text-lg tracking-wider tracking-wider '> CHS Education centre
            </p>
            <h1 className='text-white mix-blend-difference text-2xl md:text-7xl md:mb-7 mb-3  w-3/4 md:w-full'>
              OUR SCHOOL <strong className='text-yellow-300 mix-blend-difference underlines1'>
                COMMUNITY</strong> IS FORMED  FROM <strong className='text-green-300 mix-blend-difference'>PUPILS</strong>, <strong className=" text-purple-800 mix-blend-difference">PARENTS</strong> AND <strong className=' text-pink-600'>STAFF</strong> 1
            </h1>

          </div>
        </div>
        <div>
          <img src={cyber2} alt="..." className='md:h-full h-96 md:-mt-32 w-screen flex relative' />
          <div className='absolute text-white font-extrabold z-10 md:top-40 top-24 ml-5 md:ml-40  md:w-2/4 '>
            <p className='md:text-2xl text-lg tracking-wider tracking-wider'>CHS Education centre </p>
            <h1 className='text-white text-2xl md:text-7xl md:mb-7 mb-3 mix-blend-normal	mix-blend-color w-3/4 md:w-ful'>
              OUR SCHOOL <strong className='text-yellow-300'>
                COMMUNITY</strong> IS FORMED  FROM <strong className='text-green-300'>PUPILS</strong>, <strong className=" text-purple-800">PARENTS</strong> AND <strong className=' text-pink-600'>STAFF</strong> 2
            </h1>

          </div>
        </div>
        <div>
          <img src={cyber3} alt="..." className='md:h-full h-96 w-screen flex relative' />
          <div className='absolute text-white font-extrabold z-10 md:top-40 top-24 ml-5 md:ml-40  md:w-2/4'>
            <p className='md:text-2xl text-lg tracking-wider tracking-wider'>CHS Education centre </p>
            <h1 className='text-white text-2xl md:text-7xl md:mb-7 mb-3 mix-blend-normal	mix-blend-color w-3/4 md:w-full'>
              OUR SCHOOL <strong className='text-yellow-300'>
                COMMUNITY</strong> IS FORMED  FROM <strong className='text-green-300'>PUPILS</strong>, <strong className=" text-purple-800">PARENTS</strong> AND <strong className=' text-pink-600'>STAFF</strong> 3
            </h1>

          </div>

        </div>
        <div>

          <img src={cyber1} alt="..." className='md:h-full h-96 w-screen flex relative md:-mt-72' />
          <div className='absolute text-white font-extrabold z-10 md:top-40 top-24 ml-5 md:ml-40  md:w-2/4 '>
            <p className='md:text-2xl text-lg tracking-wider tracking-wider'>CHS Education centre </p>
            <h1 className='text-white text-2xl md:text-7xl md:mb-7 mb-3 mix-blend-normal	mix-blend-color w-3/4 md:w-full'>
              OUR SCHOOL <strong className='text-yellow-300'>
                COMMUNITY</strong> IS FORMED  FROM <strong className='text-green-300'>PUPILS</strong>, <strong className=" text-purple-800">PARENTS</strong> AND <strong className=' text-pink-600'>STAFF</strong> 4
            </h1>

          </div>
        </div>
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
      </Carousel>
      {/* <div className='flex absolute bg-amber-900 w-2/4 h-20 rounded-2xl z-5 top-3/4 mt-32 -ml-56'></div> */}

    </div>
  );
}

export default Component;
