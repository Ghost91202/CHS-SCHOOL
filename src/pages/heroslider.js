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
          <div className="absolute md:h-3/4 h-96 inset-0 bg-black opacity-50"></div>

        </div>
        <div>
          <img src={cyber2} alt="..." className='md:h-full h-96 w-screen flex relative'/>
          <div className="absolute md:h-3/4 h-96 inset-0 bg-black opacity-50"></div>
         
        </div>
        <div>
          <img src={cyber3} alt="..." className='md:h-full h-96 w-screen flex relative' />
          <div className="absolute md:h-3/4 h-96 inset-0 bg-black opacity-50"></div>
          

        </div>
        <div>

          <img src={cyber1} alt="..." className='md:h-full h-96 w-screen flex relative ' />
          <div className="absolute md:h-3/4 h-96 inset-0 bg-black opacity-50"></div>
         
        </div>
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
      </Carousel>
      {/* <div className='flex absolute bg-amber-900 w-2/4 h-20 rounded-2xl z-5 top-3/4 mt-32 -ml-56'></div> */}

    </div>
  );
}export default Component;
