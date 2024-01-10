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
           <div className=' z-1 p-8 w-96 justify-center text-balance text-center'>
           <h1 className='text-4xl underline'>
           Code of Honor
            </h1>
            <p className='mt-8 text-md font-semibold tracking-wider'>
            One of a person’s greatest attributes and most cherished traits is honor. An honor system is based on the premise that a person upholds the highest standard in all they do. Honor and integrity are related to our school’s key characteristics. Without honor, students cannot achieve their maximum potential. <br/>

            </p>
           </div>
          </div>
          <div>
            <img src={img2} className='h-full w-full'></img>
          </div>
          <div className='bg-red-600 text-white'>
           <div className=' z-1 p-8 w-96 justify-center text-balance text-center'>
           <h1 className='text-4xl underline'>
           Dress Code
            </h1>
            <p className='mt-8 text-md font-semibold tracking-wider'>
            All TIMES2 STEM Academy students MUST wear their appropriate uniform, including when in after-school programs. Students will not be admitted to class without the correct uniform. K-6 students and parents should follow “the day of the week” calendar to coordinate uniform changes for PE days. All uniform clothing and footwear must be purchased from an authorized retailer* and may only be the designated styles and colors approved.
            </p>
           </div>
          </div>
         
        </div>
        <div className=' grid grid-flow-col grid-cols-4'>
        <div className='bg-red-600 text-white'>
           <div className=' z-1 p-8 w-96 justify-center text-balance text-center'>
           <h1 className='text-4xl underline'>
           Code of Discipline            </h1>
            <p className='mt-8 text-md font-semibold tracking-wider'>
            Responsibility Centered Discipline, the philosophy of Times2 behavior management
Discipline Protocol: Discipline should be a responsibility based, progressive, learning process; It should carry with it the goal of intervening in and prevention of continuous episodes of disruptive and/or hurtful behaviors that interfere with a safe, comfortable, and welcoming learning environment.
            </p>
           </div>
          </div>
          <div>
            <img src={img3} className='h-full w-full'></img>
          </div>
          <div className='bg-red-600 text-white'>
           <div className=' z-1 p-8 w-96 justify-center text-balance text-center'>
           <h1 className='text-4xl underline'>
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