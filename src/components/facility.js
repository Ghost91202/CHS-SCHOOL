import React from 'react'
import IMG1 from "../assets/26212813_efhk_d386_220311.jpg"
import img2 from "../assets/polution.jfif"
import img3 from "../assets/facility1.jpeg"
import img4 from "../assets/27.jfif"
import Logo from "../assets/logo.png"
const facility = () => {
  return (
    <div className='hidden md:flex '>
      <div className='h-auto ml-14'>
        <div className=' grid grid-flow-col grid-cols-4'>
          <div>
            <img src={IMG1} className='h-full w-full'></img>
          </div>
          <div className='bg-red-600 text-white'>
           <div className=' z-1 p-8 w-auto justify-center text-balance text-center'>
           <h1 className='md:text-4xl sm:text-2xl lg:text-3xl underline'>
           Code of Honor
            </h1>
            <p className='mt-8 text-md font-semibold tracking-wider'>
            Honor is a valuable trait. It upholds the highest standard in everything we do.
            Our school's key characteristics are based on honor and integrity. It is essential for students to achieve their full potential.<br/>
            </p>
           </div>
          </div>
          <div>
            <img src={img2} className='h-full w-full'></img>
          </div>
          <div className='bg-red-600 text-white'>
           <div className=' z-1 p-8 w-auto justify-center text-balance text-center'>
           <h1 className='md:text-4xl sm:text-2xl lg:text-3xl underline'>
           Dress Code
            </h1>
            <p className='mt-8 text-md font-semibold tracking-wider'>
            CHS education centre students must wear their uniform, including after-school programs. Correct uniforms are required for class. Check calendar for PE uniform changes. Buy uniform from authorized retailer*. Only designated styles and colors allowed.<br/>            </p>
           </div>
          </div>
         
        </div>
        <div className=' grid grid-flow-col grid-cols-4'>
        <div className='bg-red-600 text-white'>
           <div className=' z-1 p-8 w-auto justify-center text-balance text-center'>
           <h1 className='md:text-4xl sm:text-2xl lg:text-3xl underline'>
           Code of Discipline            </h1>
            <p className='mt-8 text-md font-semibold tracking-wider'>
            CHS Education Centre follows Responsibility Centered Discipline for behavior management. Discipline is a progressive, responsibility-based learning process that intervenes and prevents disruptive or hurtful behaviors that affect a safe, comfortable, and welcoming learning environment.<br/>   </p>
           </div>
          </div>
          <div>
            <img src={img3} className='h-full w-full'></img>
          </div>
          <div className='bg-red-600 text-white'>
           <div className=' z-1 p-8 w-auto justify-center text-balance text-center'>
           <h1 className='md:text-4xl sm:text-2xl lg:text-3xl underline'>
           Communication Protocols            </h1>
            <p className='mt-8 text-md font-semibold tracking-wider'>
            CHS education center, we believe that communication is extremely important. Here you will find information on the protocol for communicating and escalating a concern if you are a parent or teacher.
            </p>
           </div>
          </div>
          <div className='overflow-y-hidden h-96'>
            <img src={img4} className='h-full w-full'></img>
          </div>
          
         
        </div>
        
      </div>


    </div>
  )
}

export default facility