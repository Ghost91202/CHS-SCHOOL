import React, { useState, useEffect } from 'react';
import Navbar from "../pages/navbar"
import { FaHome } from "react-icons/fa";
import Footer from "../pages/footer"
import loginimg from "../assets/72351f9d3ad5e1074662490290ef160c.jpg"
const Contact = () => {
  return (
    <div>  <div className=' relative w-screen overflow-hidden h-auto' >

      <Navbar />
      <div className='flex flex-col ml-10 md:ml-40 mt-10 md:mt-20'>


        <div className='flex flex-col gap-5'>
          <div className='flex gap-1'>
            <FaHome className='m-1' />
            <span>|</span>
            <div> Admission</div>
            <span>|</span>
            <div>Contact us</div>
          </div>
          <h1 className='md:text-7xl text-3xl'>Contact Us</h1>
        </div>
        <div className='flex'>
          <div className='text-md font-semibold bg-gray-100 p-10 m-10 md:m-32 w-3/4 '>

            <form>
              <div className='flex gap-2 flex-col'>

                <label>Your Name <span className='text-red-500'>*</span></label>
                <input type="email" name="email" required className='bg-transparent  border-b-2 border-black' />
                <label>Email <span className='text-red-500'>*</span></label>
                <input type="email" name="email"  required className='bg-transparent underline-2 underline border-b-2 border-black' />
                <label>Your Mobile number <span className='text-red-500'>*</span></label>
                <input type='text' name="email"  required className='bg-transparent underline-2 underline border-b-2 border-black' />

                <label>Please provide your feedback/query <span className='text-red-500 mt-6'>*</span></label>
                <textarea  name="password" required className='bg-transparent underline-2 underline border-b-2 border-black' />

                <button type="submit" className='bg-red-500 text-white text-lg p-2 mt-10 mb-10 justify-center flex'>Submit</button>
              </div>
            </form>
          </div>

          <div>
            <img src={loginimg} alt="chs school" className='flex w-screen -mt-28 -ml-18'/>
          </div>
        </div>
          </div>
          <Footer/>
    </div></div>
  )
}

export default Contact
